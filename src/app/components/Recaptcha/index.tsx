"use client";
import styles from "./recaptcha.module.css";

import React from "react";
import ConfigApp from "@/config";

import dynamic from "next/dynamic";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

interface ReCaptchaCustomProps {
  onVerify: (success: boolean) => void;
  theme?: "light" | "dark";
}

const ReCaptchaCustom: React.FC<ReCaptchaCustomProps> = ({
  onVerify,
  theme = "light",
}) => {
  const handleChange = (value: string | null) => {
    onVerify(!!value);
  };

  return (
    <div className={styles.recaptcha}>
      {ConfigApp?.RECAPTCHA_KEY ? (
        <ReCAPTCHA
          sitekey={ConfigApp.RECAPTCHA_KEY ?? ""}
          onChange={handleChange}
          onErrored={() => onVerify(false)}
          theme={theme}
        />
      ) : (
        <>Problemas com o recaptcha, avise o administrador!</>
      )}
    </div>
  );
};

export { ReCaptchaCustom };

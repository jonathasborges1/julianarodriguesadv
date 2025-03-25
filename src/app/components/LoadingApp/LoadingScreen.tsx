"use client";

import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

export const LoadingScreen = () => {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleLoad = () => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!mounted || !isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#00274B] text-white flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <FaSpinner className="animate-spin text-4xl mb-4 text-[#DAA520]" />
      <p className="text-lg font-medium">Carregando site...</p>
    </div>
  );
};

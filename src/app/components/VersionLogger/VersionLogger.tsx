"use client";

import { useEffect } from "react";

export const VersionLogger = () => {
  useEffect(() => {
    fetch("/version.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(`🧭 Versão do projeto: ${data.version}`);
      });
  }, []);

  return null;
};

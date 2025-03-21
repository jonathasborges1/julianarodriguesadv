// components/LoadingScreen.tsx
"use client";

import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Adiciona transição de saída
      setFadeOut(true);
      // Remove o componente após a transição
      setTimeout(() => setIsLoading(false), 500);
    };

    // Caso o site já tenha carregado
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!isLoading) return null;

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

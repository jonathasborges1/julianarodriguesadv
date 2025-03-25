"use client";

import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

export const LoadingApp = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setShow(false), 500); // Fade-out
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    setShow(true);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#00274B] text-white flex flex-col items-center justify-center transition-opacity duration-500">
      <FaSpinner className="animate-spin text-4xl mb-4 text-[#DAA520]" />
      <p className="text-lg font-medium">Carregando site...</p>
    </div>
  );
};

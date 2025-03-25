"use client";

import Image from "next/image";

import { useState } from "react";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import clsx from "clsx";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-1 flex items-center justify-between pt-3 border-0 border-red-500">
        {/* Logo + Nome */}
        <a href="#home" className="flex items-center gap-2">
          <Image
            src="/images/logotipo-dra-juliana.png"
            alt="Logo Dra. Juliana"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />

          <div className="flex flex-col justify-center items-center leading-tight">
            <span className="text-md lg:text-lg font-bold text-[#00274B]">
              Juliana Rodrigues
            </span>
            <span className="text-xs lg:text-sm tracking-widest text-[#00274B]">
              ADVOGADA
            </span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          <DesktopMenu />
        </div>

        {/* Botão Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Abrir menu"
        >
          <div className="space-y-1.5">
            <span
              className={clsx(
                "block h-0.5 w-6 bg-[#00274B] transition-transform",
                isOpen && "rotate-45 translate-y-1.5"
              )}
            />
            <span
              className={clsx(
                "block h-0.5 w-6 bg-[#00274B] transition-opacity",
                isOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={clsx(
                "block h-0.5 w-6 bg-[#00274B] transition-transform",
                isOpen && "-rotate-45 -translate-y-1.5"
              )}
            />
          </div>
        </button>
      </div>

      {/* Menu Mobile estiloso */}
      <div
        className={clsx(
          "md:hidden px-6 pt-2 pb-0 flex flex-col gap-4 transition-all duration-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 overflow-hidden opacity-0"
        )}
        style={{ backdropFilter: "blur(8px)" }}
      >
        <MobileMenu onLinkClick={() => setIsOpen(false)} />
      </div>
    </nav>
  );
}

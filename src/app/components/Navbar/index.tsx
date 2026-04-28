"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import clsx from "clsx";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/#home" className="flex items-center gap-2">
          <Image
            src="/images/logotipo-dra-juliana-2.png"
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
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <DesktopMenu />
        </div>

        {/* Burger Mobile */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition focus:outline-none"
          aria-label="Abrir menu"
        >
          <span className="block h-0.5 w-6 bg-[#00274B] mb-1.5" />
          <span className="block h-0.5 w-6 bg-[#00274B] mb-1.5" />
          <span className="block h-0.5 w-6 bg-[#00274B]" />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={clsx(
          "fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer lateral */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-72 bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-modal="true"
        role="dialog"
        aria-label="Menu de navegação"
      >
        {/* Cabeçalho do drawer */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <span className="text-xs font-semibold text-[#00274B] tracking-widest uppercase">
            Navegação
          </span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Fechar menu"
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <X className="w-5 h-5 text-[#00274B]" />
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto px-6 py-2">
          <MobileMenu onLinkClick={() => setIsOpen(false)} />
        </div>

        {/* CTA fixo no rodapé */}
        <div className="px-6 py-5 border-t border-gray-100">
          <Link
            href="/#contato"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-[#00274B] text-white font-semibold py-3 rounded-lg hover:bg-[#003d75] transition text-sm"
          >
            Agendar Consulta
          </Link>
        </div>
      </div>
    </nav>
  );
}

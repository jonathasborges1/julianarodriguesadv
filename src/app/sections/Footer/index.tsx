"use client";

import Link from "next/link";
import {
  Instagram,
  Facebook,
  MapPin,
  Mail,
  Phone,
  Copyright,
} from "lucide-react";
import { menuLinks } from "@/components/Navbar/menuLinks";

export function Footer() {
  return (
    <footer className="bg-[#00274B] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Sobre */}
        <div>
          <h3 className="text-xl font-bold mb-4">Dra. Juliana Rodrigues</h3>
          <p className="text-sm leading-relaxed">
            Advogada Trabalhista em Manaus com atendimento presencial e online
            para todo o Brasil.
          </p>

          <div className="mt-4 space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1" />
              Rua Salvador, 120 - Adrianópolis, Manaus/AM
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+5592982301415" className="hover:underline">
                (92) 98230-1415
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:julianasouzarodrigues.adv@gmail.com"
                className="hover:underline"
              >
                julianasouzarodrigues.adv@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Navegação */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navegação</h4>
          <ul className="text-sm flex flex-wrap gap-x-10 gap-y-4">
            {menuLinks.map(({ label, href, icon: Icon, children }) => (
              <li key={label}>
                {children ? (
                  <div>
                    <span className="font-medium flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4" />
                      {label}
                    </span>
                    <ul className="ml-4 mt-1 flex flex-col gap-2">
                      {children.map(({ href, label, icon: ChildIcon }) => (
                        <li key={href}>
                          <Link
                            href={href}
                            className="hover:underline flex items-center gap-2"
                          >
                            <ChildIcon className="w-4 h-4" />
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    href={href}
                    className="hover:underline flex items-center gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Redes e Política */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Conecte-se</h4>
          <div className="flex gap-4 mb-6">
            <a
              href="https://www.instagram.com/julianarodrigues.advogada"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61552505172203"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>

          <ul className="text-sm space-y-2">
            <li>
              <Link href="/politica-de-privacidade" className="hover:underline">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/termos-de-uso" className="hover:underline">
                Termos de Uso
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm flex justify-center items-center gap-2">
        <Copyright className="w-4 h-4" />
        2025 Dra. Juliana Rodrigues. Todos os direitos reservados.
      </div>
    </footer>
  );
}

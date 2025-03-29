"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";

export default function NotFound() {
  return (
    <div>
      <main className="min-h-screen flex flex-col items-center justify-center text-center bg-white text-[#00274B] px-6 py-12">
        <Navbar />
        <div className="max-w-md">
          {/* Ilustração SVG */}
          <div className="mb-6">
            <svg
              width="100%"
              height="200"
              viewBox="0 0 400 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="72"
                fontWeight="bold"
                fill="#00274B"
              >
                404
              </text>
              <text
                x="50%"
                y="80%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="16"
                fill="#666"
              >
                Página não encontrada
              </text>
            </svg>
          </div>

          {/* Título */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Opa! Algo deu errado.
          </h1>

          {/* Descrição */}
          <p className="text-gray-700 mb-6">
            A página que você está procurando não existe ou foi movida. Volte
            para a página inicial e continue navegando.
          </p>

          {/* Botão voltar */}
          <Link
            href="/"
            className="inline-block bg-[#00274B] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
          >
            Voltar para o início
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

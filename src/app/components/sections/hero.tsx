"use client";

import dynamic from "next/dynamic";

const FaWhatsapp = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaWhatsapp),
  { ssr: false }
);

export const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-[#00274B] to-blue-900 text-white px-6 md:px-12 py-10">
      {/* Overlay para suavizar o fundo */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Conteúdo centralizado com flexbox */}
      <div className="relative z-10 max-w-5xl flex flex-col items-center text-center gap-8">
        {/* Título principal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          <span className="inline text-[#DAA520]">Dra. Juliana Rodrigues</span>{" "}
          | Advogada
          <br /> Especialista em Direito Trabalhista
        </h1>

        {/* Subtítulo com mensagem de impacto */}
        <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
          Transformando desafios em justiça, a Dra. Juliana atua com excelência
          para proteger os direitos dos trabalhadores em Manaus e em todo o
          Brasil. Com uma abordagem humanizada e ética, ela oferece soluções
          estratégicas para casos de rescisões, ações trabalhistas e muito mais.
        </p>

        {/* Botões de ação */}
        <div className="flex flex-col md:flex-row gap-4">
          {typeof window !== "undefined" && (
            <a
              href="https://api.whatsapp.com/send?phone=5592982301415&utm_source=landingpage&utm_medium=hero_section"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#DAA520] text-[#00274B] px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:bg-[#E6B800] transition flex items-center gap-2 justify-center"
            >
              <FaWhatsapp className="text-2xl" /> Agende sua Consulta
            </a>
          )}
          <a
            href="#sobre"
            className="border border-yellow-400 px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:bg-blue-400 hover:text-blue-900 transition flex items-center justify-center"
          >
            Saiba Mais
          </a>
        </div>

        {/* Selos de Credibilidade */}
        <div className="flex flex-wrap justify-center gap-3">
          <span className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold shadow-md text-center">
            📜 <strong>Registro OAB:</strong> 10547 AM
          </span>
          <span className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold shadow-md text-center">
            ⚖️ <strong>Especialista:</strong> Direito Trabalhista
          </span>
          <span className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold shadow-md text-center">
            🌍 <strong>Atendimento:</strong> Online e Presencial
          </span>
        </div>
      </div>

      {/* Separador em onda */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[60px] md:h-[100px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.5,18.17,96.92,29.78,147.67,30.89,58.83,1.28,113.17-12.7,169.08-20.21C408.79,46,467.42,41.06,525,47.89,582.5,54.56,638.79,71,694.67,81.58c55.71,10.49,112.5,12.28,169.08,7.23,58.83-5.27,113.17-16.49,169.08-23.6,47.5-6.06,96.92-7.92,147.67-2.49V0Z"
            fill="#fff"
            opacity="1"
          ></path>
        </svg>
      </div>
    </section>
  );
};

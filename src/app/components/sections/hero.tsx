"use client";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-[#00274B] to-blue-900 text-white px-6 md:px-12 py-8">
      {/* Overlay para suavizar o fundo */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      {/* <div className="relative flex justify-center max-w-5xl">
       
      </div> */}
      {/* Conteúdo centralizado com flexbox */}
      <div className="relative z-10 max-w-5xl flex flex-col items-center text-center gap-6 md:gap-10">
        <Image
          src="/images/logotipo-dra-juliana.png"
          alt="Dra. Juliana Rodrigues - Advogada Trabalhista em Manaus"
          width={100}
          height={100}
          className="rounded-xl shadow-lg"
          priority
        />
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
          <a
            href="https://api.whatsapp.com/send?phone=5592982301415&utm_source=landingpage&utm_medium=hero_section"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#DAA520] text-[#00274B] px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:bg-[#E6B800] transition flex items-center gap-2 justify-center"
          >
            <FaWhatsapp className="text-2xl" /> Agende sua Consulta
          </a>
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
      <div className="absolute bottom-[-65px] md:bottom-[-60px] left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[125%] h-[60px] md:h-[100px] -ml-[12.5%]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.5,18.17,96.92,29.78,147.67,30.89,
         58.83,1.28,113.17-12.7,169.08-20.21,
         C408.79,46,467.42,41.06,525,47.89,
         582.5,54.56,638.79,71,694.67,81.58,
         750.38,92.07,807.17,93.86,864.75,88.81,
         923.58,83.54,977.92,72.32,1033.83,65.21,
         1081.33,59.15,1130.75,57.29,1181.5,62.72,
         1190,63.69,1200,66,1200,66V0Z"
            fill="#fff"
          />
        </svg>
      </div>
    </section>
  );
};

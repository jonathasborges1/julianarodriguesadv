"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

import { FaWhatsapp } from "react-icons/fa";

// Importação dinâmica dos ícones para evitar problemas de hidratação
const FaUniversity = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaUniversity),
  { ssr: false }
);
const FaBalanceScale = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaBalanceScale),
  { ssr: false }
);
const FaMapMarkerAlt = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaMapMarkerAlt),
  { ssr: false }
);
const FaGlobe = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaGlobe),
  { ssr: false }
);

export const About = () => {
  return (
    <section
      id="sobre"
      className="bg-gradient-to-b from-[#00274B] to-blue-900 py-20 px-6 md:px-12 flex justify-center items-center"
    >
      <div className="max-w-6xl flex flex-col md:flex-row items-center gap-12 bg-white p-8 shadow-xl rounded-xl">
        {/* Imagem da Dra. Juliana */}
        <div className="md:w-1/3 flex justify-center">
          <Image
            src="/images/dra-juliana-rodrigues-advogada-trabalhista-manaus.jpg"
            alt="Dra. Juliana Rodrigues - Advogada Trabalhista em Manaus"
            width={320}
            height={320}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Conteúdo textual */}
        <div className=" md:w-2/3">
          {/* Título com linha decorativa */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 relative pb-4">
            Sobre <span className="text-[#00274B]">Dra. Juliana Rodrigues</span>
            <span className="block w-24 h-1 bg-[#00274B] absolute bottom-0 left-0"></span>
          </h2>

          {/* Introdução */}
          <p className="mt-6 text-lg text-gray-800 leading-relaxed text-left md:text-justify">
            Com mais de <strong>10 anos de experiência</strong> no Direito
            Trabalhista, a Dra. Juliana Rodrigues se dedica à defesa dos
            direitos dos trabalhadores e empregadores, atuando com ética e
            compromisso.
          </p>

          {/* Áreas de atuação */}
          <p className="mt-4 text-lg text-gray-800 leading-relaxed text-left md:text-justify">
            Sua atuação inclui <strong>processos trabalhistas em geral</strong>,
            abrangendo:
          </p>

          <ul className="flex flex-col gap-4 sm:gap-1 text-left mt-4 text-lg text-gray-800 leading-relaxed text-justify list-disc list-inside">
            <li>
              <strong>Rescisões contratuais</strong> e cálculos trabalhistas;
            </li>
            <li>
              <strong>Acidentes de trabalho</strong> e indenizações;
            </li>
            <li>
              <strong>Insalubridade e periculosidade</strong>;
            </li>
            <li>
              <strong>Doenças ocupacionais</strong> e estabilidade no emprego;
            </li>
            <li>
              <strong>Horas extras</strong> e direitos do trabalhador;
            </li>
            <li>
              <strong>Mediação de conflitos</strong> para evitar litígios
              prolongados;
            </li>
            <li>
              <strong>Consultoria preventiva</strong> para empregadores e
              empregados.
            </li>
          </ul>

          {/* Objetivo e Missão */}
          <p className="mt-4 text-lg text-gray-800 leading-relaxed text-left md:text-justify">
            A missão da Dra. Juliana é oferecer um{" "}
            <strong>atendimento jurídico especializado</strong>, garantindo que
            cada cliente tenha seus direitos protegidos com{" "}
            <strong>transparência, ética e compromisso</strong>.
          </p>

          {/* Destaques da Formação e Experiência */}
          <p className="mt-6 text-lg text-gray-800 leading-relaxed text-left md:text-justify">
            Formada pela <strong>Universidade UniNorte</strong>, a Dra. Juliana
            se especializou em
            <strong>
              {" "}
              rescisões trabalhistas, ações contra empregadores, assessoria
              preventiva e mediação de conflitos
            </strong>
            . Sua atuação inclui{" "}
            <strong>atendimentos presenciais e online</strong> para clientes em
            todo o Brasil.
          </p>

          {/* Lista de Informações com Ícones */}
          <div className="mt-6 flex flex-wrap justify-start gap-6">
            <div className="flex items-start gap-3 text-gray-900 w-full">
              <FaUniversity className="text-[#00274B] text-3xl shrink-0" />
              <p className="flex-grow">
                <strong>Graduada pela UniNorte</strong>, referência em ensino
                jurídico.
              </p>
            </div>

            <div className="flex items-start gap-3 text-gray-900 w-full">
              <FaBalanceScale className="text-[#00274B] text-3xl shrink-0" />
              <p className="flex-grow">
                Registrada na <strong>OAB-AM (10547)</strong>, atuando com ética
                e competência.
              </p>
            </div>

            <div className="flex items-start gap-3 text-gray-900 w-full">
              <FaMapMarkerAlt className="text-[#00274B] text-3xl shrink-0" />
              <p className="flex-grow">
                Atendimento <strong>presencial na sede da OAB em Manaus</strong>
                .
              </p>
            </div>

            <div className="flex items-start gap-3 text-gray-900 w-full">
              <FaGlobe className="text-[#00274B] text-3xl shrink-0" />
              <p className="flex-grow">
                Consultoria{" "}
                <strong>online para clientes em todo o Brasil</strong>.
              </p>
            </div>
          </div>

          {/* Chamada para Ação */}
          <div className="mt-6 flex justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=5592982301415&utm_source=landingpage&utm_medium=about_section"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00274B] text-white px-6 py-3 rounded-full text-base md:text-lg font-semibold shadow-lg hover:bg-blue-800 transition flex items-center gap-2 w-full md:w-fit justify-center"
            >
              <FaWhatsapp className="text-2xl" /> Fale com a Dra. Juliana
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

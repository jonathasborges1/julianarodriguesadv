import Image from "next/image";

import {
  FaBalanceScale,
  FaGlobe,
  FaMapMarkerAlt,
  FaUniversity,
  FaWhatsapp,
} from "react-icons/fa";

export const About = () => {
  return (
    <section
      id="sobre"
      className="bg-gradient-to-b from-[#00274B] to-blue-900 py-20 px-6 md:px-12 flex flex-col justify-center items-center gap-10"
    >
      <div className="max-w-6xl flex flex-col md:flex-row items-center gap-12 bg-white p-8 shadow-xl rounded-xl">
        <div className="md:w-1/3 flex justify-center">
          <Image
            src="/images/dra-juliana-rodrigues-advogada-trabalhista-manaus.jpg"
            alt="Dra. Juliana Rodrigues - Advogada Trabalhista e do Consumidor em Manaus"
            width={320}
            height={320}
            className="rounded-xl shadow-lg"
          />
        </div>

        <div className="md:w-2/3">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 relative pb-4">
            Sobre <span className="text-[#00274B]">Dra. Juliana Rodrigues</span>
            <span className="block w-24 h-1 bg-[#00274B] absolute bottom-0 left-0"></span>
          </h2>

          <p className="mt-6 text-md lg:text-lg text-gray-800 leading-relaxed text-left">
            Há mais de 10 anos atuando na advocacia, a Dra. Juliana Rodrigues
            tem foco em <strong>Direito do Trabalho</strong> e{" "}
            <strong>Direito do Consumidor</strong>, defendendo trabalhadores,
            empresas e consumidores com ética e atenção ao caso concreto.
          </p>

          <p className="mt-4 text-md lg:text-lg text-gray-800 leading-relaxed text-left">
            No <strong>trabalhista</strong>, atende rescisões contratuais,
            justa causa, rescisão indireta, reintegração, horas extras,
            insalubridade, acidentes e doenças ocupacionais. No{" "}
            <strong>consumidor</strong>, conduz casos de descontos indevidos,
            cobranças abusivas, negativa e demora de plano de saúde, atraso e
            cancelamento de voo, produto com defeito e compras on-line.
          </p>

          <p className="mt-4 text-md lg:text-lg text-gray-800 leading-relaxed text-left">
            A missão é oferecer um atendimento claro, direto e confiável —
            cada cliente recebe orientação com transparência e respeito aos
            seus direitos.
          </p>

          <div className="mt-6 flex flex-wrap justify-start gap-6">
            <div className="flex items-start gap-3 text-gray-900 w-full">
              <FaUniversity className="text-[#00274B] text-3xl shrink-0" aria-hidden="true" />
              <p className="flex-grow">
                <strong>Graduada pela UniNorte</strong>, referência em ensino
                jurídico em Manaus.
              </p>
            </div>

            <div className="flex items-start gap-3 text-gray-900 w-full">
              <FaBalanceScale className="text-[#00274B] text-3xl shrink-0" aria-hidden="true" />
              <p className="flex-grow">
                Inscrita na <strong>OAB-AM sob o nº 10547</strong>, com atuação
                ética e diligente.
              </p>
            </div>

            <div className="flex items-start gap-3 text-gray-900 w-full">
              <FaMapMarkerAlt className="text-[#00274B] text-3xl shrink-0" aria-hidden="true" />
              <p className="flex-grow">
                Atendimento <strong>presencial em Adrianópolis, Manaus/AM</strong>.
              </p>
            </div>

            <div className="flex items-start gap-3 text-gray-900 w-full">
              <FaGlobe className="text-[#00274B] text-3xl shrink-0" aria-hidden="true" />
              <p className="flex-grow">
                Atendimento <strong>on-line para clientes em todo o Brasil</strong>.
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=5592982301415&utm_source=landingpage&utm_medium=about_section"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00274B] text-white px-6 py-3 rounded-full text-md md:text-lg font-semibold shadow-lg hover:bg-blue-800 transition flex items-center gap-2 w-full md:w-fit justify-center"
            >
              <FaWhatsapp className="text-2xl" aria-hidden="true" /> Fale com a Dra. Juliana
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

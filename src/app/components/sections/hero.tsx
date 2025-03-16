import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative bg-gray-100 py-16 px-6 md:px-12 flex flex-col items-center text-center">
      <div className="max-w-4xl">
        {/* Título com palavras-chave para SEO */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Dra. Juliana Rodrigues – Advogada Especialista em Direito do Trabalho.
        </h1>

        {/* Subtítulo persuasivo */}
        <p className="mt-4 text-lg text-gray-700">
          Advogada trabalhista em Manaus, com atendimento presencial na sede da
          OAB e online para todo o Brasil. Especialista em rescisões de
          contrato, direitos trabalhistas, ações na Justiça do Trabalho e
          acordos extrajudiciais. Se você sofreu demissão sem justa causa, não
          recebeu seus direitos ou precisa de consultoria jurídica trabalhista,
          fale agora mesmo com a Dra. Juliana Rodrigues.
        </p>

        {/* Botão de chamada para ação (WhatsApp) */}
        <div className="mt-6">
          <a
            href="https://api.whatsapp.com/send?phone=5592982301415&utm_source=landingpage&utm_medium=hero_section"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-green-600 transition"
          >
            Fale com a Dra. Juliana no WhatsApp
          </a>
        </div>

        {/* Selo de credibilidade */}
        <div className="mt-6 flex justify-center items-center gap-4">
          <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold">
            <strong>Registro OAB:</strong> 10547 AM
          </span>
          <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold">
            <strong>Especialista:</strong> Advocacia Trabalhista
          </span>
          <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold">
            <strong>Atendimento:</strong> Online e Presencial
          </span>
        </div>
      </div>

      {/* Imagem da advogada */}
      <div className="mt-8">
        <Image
          src="/images/dra-juliana-rodrigues-advogada-trabalhista-manaus.jpg"
          alt="Dra. Juliana Rodrigues, Advogada Trabalhista em Manaus especializada em direitos trabalhistas"
          width={300}
          height={300}
          className="rounded-full shadow-lg"
          priority
        />
      </div>
      <div>
        <p className="mt-4 text-lg text-gray-700">
          Verificar mais informacoes sobre no perfil do instagram{" "}
          <a
            href="https://www.instagram.com/julianarodrigues.advogada"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            @julianarodrigues.advogada
          </a>
        </p>
      </div>
    </section>
  );
};

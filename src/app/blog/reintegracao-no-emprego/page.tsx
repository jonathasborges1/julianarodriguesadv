// src/app/blog/reintegracao-no-emprego/page.tsx
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reintegração no Emprego: Entenda Seus Direitos",
  description:
    "Saiba o que é a reintegração no emprego, quando ela se aplica e como a justiça trabalhista pode garantir esse direito. Explicação jurídica clara e acessível.",
  keywords: [
    "reintegração no emprego",
    "advogada trabalhista Manaus",
    "direitos do trabalhador",
    "demissão ilegal",
    "justiça do trabalho",
  ],
  alternates: {
    canonical:
      "https://julianarodriguesadv.com.br/blog/reintegracao-no-emprego",
  },
};

export default function ReintegracaoNoEmprego() {
  return (
    <main className="bg-white flex flex-col items-center mx-auto px-4 py-12 text-[#222]">
      <article className="border-0 rounded max-w-7xl p-4">
        <header className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight text-[#00274B]">
            Reintegração no Emprego: Entenda seus Direitos
          </h1>
          <p className="text-base sm:text-lg text-neutral-700">
            A reintegração no emprego é um direito do trabalhador quando a
            demissão ocorre de forma ilegal ou abusiva, especialmente em casos
            de estabilidade provisória, como gestantes, acidentados ou membros
            da CIPA.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#00274B]">
            Quando ela é cabível?
          </h2>
          <p className="mb-4">
            A reintegração pode ser determinada judicialmente quando:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#333]">
            <li>O empregado possui estabilidade provisória;</li>
            <li>Não houve justa causa fundamentada;</li>
            <li>Houve descumprimento de normas legais pelo empregador.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#00274B]">
            Como funciona na prática?
          </h2>
          <p className="text-[#333]">
            O juiz pode determinar que o trabalhador retorne ao cargo que
            ocupava, com todos os direitos restituídos, como salário retroativo,
            benefícios e contagem de tempo de serviço.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#00274B]">
            Precisa de orientação?
          </h2>
          <p className="mb-4 text-[#333]">
            A Dra. Juliana Rodrigues atua com foco em Direito do Trabalho e pode
            avaliar se você tem direito à reintegração no emprego. Agende uma
            consulta para tirar suas dúvidas.
          </p>

          <Link
            href="/#contato"
            className="inline-block bg-[#00274B] hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-lg transition"
          >
            Agendar Consulta
          </Link>
        </section>
      </article>
    </main>
  );
}

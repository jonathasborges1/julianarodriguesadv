// src/app/blog/rescisao-indireta/page.tsx
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rescisão Indireta: Saiba Seus Direitos e Quando Solicitar",
  description:
    "Entenda o que é a rescisão indireta, em quais situações ela pode ser aplicada e como buscar esse direito na Justiça do Trabalho.",
  keywords: [
    "rescisão indireta",
    "falta grave do empregador",
    "advogada trabalhista Manaus",
    "direitos do trabalhador",
    "justiça do trabalho",
  ],
  alternates: {
    canonical: "https://julianarodriguesadv.com.br/blog/rescisao-indireta",
  },
};

export default function RescisaoIndireta() {
  return (
    <main className="bg-white flex flex-col items-center mx-auto px-4 py-12 text-[#222]">
      <article className="border-0 rounded max-w-7xl p-4">
        <header className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight text-[#00274B]">
            Rescisão Indireta: Saiba Seus Direitos e Quando Solicitar
          </h1>
          <p className="text-base sm:text-lg text-neutral-700">
            A rescisão indireta ocorre quando o empregador comete falta grave,
            permitindo que o empregado encerre o contrato com os mesmos direitos
            de uma demissão sem justa causa.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#00274B]">
            O que caracteriza a rescisão indireta?
          </h2>
          <p className="mb-4">
            Situações como assédio moral, atrasos frequentes no pagamento de
            salário, exigência de atividades além do combinado ou ambiente
            inseguro podem configurar falta grave do empregador.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#00274B]">
            Quais os direitos do trabalhador?
          </h2>
          <p className="text-[#333]">
            O trabalhador tem direito a aviso prévio, saldo de salário, férias +
            1/3, 13º proporcional, saque do FGTS com multa de 40% e acesso ao
            seguro-desemprego, conforme decidido pela Justiça.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#00274B]">
            Como solicitar a rescisão indireta?
          </h2>
          <p className="text-[#333]">
            É necessário reunir provas, como mensagens, testemunhas e documentos
            que comprovem as faltas do empregador. O ideal é contar com
            acompanhamento jurídico.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#00274B]">
            Fale com uma advogada trabalhista
          </h2>
          <p className="mb-4 text-[#333]">
            A Dra. Juliana Rodrigues pode avaliar seu caso e indicar se você tem
            direito à rescisão indireta. Agende uma consulta para se informar.
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

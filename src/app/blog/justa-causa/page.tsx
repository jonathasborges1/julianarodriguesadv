import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Justa Causa: Entenda Seus Direitos e Deveres",
  description:
    "Descubra o que configura a demissão por justa causa, quando ela é legalmente aplicável e quais são os direitos do trabalhador nesses casos.",
  keywords: [
    "justa causa",
    "demissão por justa causa",
    "advogada trabalhista Manaus",
    "direitos do trabalhador",
    "falta grave no trabalho",
  ],
  alternates: {
    canonical: "https://julianarodriguesadv.com.br/blog/justa-causa",
  },
};

export default function JustaCausaPage() {
  return (
    <main className="bg-white flex flex-col items-center mx-auto px-4 py-12 text-[#222]">
      <article className="border-0 rounded max-w-7xl p-4">
        <header className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight text-[#00274B]">
            Justa Causa: Entenda Seus Direitos e Deveres
          </h1>
          <p className="text-base sm:text-lg text-neutral-700">
            A demissão por justa causa ocorre quando o empregado comete uma
            falta grave. Essa modalidade de rescisão implica na perda de
            diversos direitos, por isso é importante saber quando ela é válida e
            como se defender.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#00274B]">
            O que configura uma Justa Causa?
          </h2>
          <p className="mb-4 text-[#333]">
            A justa causa está prevista no artigo 482 da CLT e pode ser aplicada
            em situações como:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#333]">
            <li>Atos de indisciplina ou insubordinação;</li>
            <li>Faltas frequentes e injustificadas ao trabalho;</li>
            <li>Abandono de emprego;</li>
            <li>Roubo, agressão física ou assédio no ambiente de trabalho;</li>
            <li>Embriaguez habitual ou em serviço, entre outros.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#00274B]">
            Quais são os direitos do trabalhador?
          </h2>
          <p className="text-[#333] mb-4">
            Quando a demissão ocorre por justa causa, o trabalhador perde
            benefícios como:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#333]">
            <li>Saldo do FGTS com saque;</li>
            <li>Multa de 40% sobre o FGTS;</li>
            <li>Aviso prévio indenizado;</li>
            <li>Seguro-desemprego.</li>
          </ul>
          <p className="mt-4 text-[#333]">
            No entanto, o trabalhador ainda tem direito ao salário dos dias
            trabalhados e às férias vencidas, se houver.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#00274B]">
            Posso contestar uma demissão por justa causa?
          </h2>
          <p className="text-[#333]">
            Sim. Se a justa causa foi aplicada de forma indevida ou sem provas,
            é possível entrar com uma ação judicial para revertê-la e garantir
            seus direitos.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#00274B]">
            Conte com orientação especializada
          </h2>
          <p className="mb-4 text-[#333]">
            A Dra. Juliana Rodrigues é advogada trabalhista em Manaus e oferece
            atendimento presencial e online. Caso você tenha sido demitido por
            justa causa, agende uma consulta e saiba como proceder.
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

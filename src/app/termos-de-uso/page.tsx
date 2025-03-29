// src/app/termos-de-uso/page.tsx
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso | Dra. Juliana Rodrigues",
  description:
    "Leia os Termos de Uso do site da Dra. Juliana Rodrigues. Entenda as condições para utilização dos serviços jurídicos e conteúdos disponíveis online.",
  keywords: [
    "termos de uso",
    "responsabilidade",
    "conteúdo jurídico",
    "atendimento online",
    "advogada Manaus",
    "Juliana Rodrigues",
  ],
  alternates: {
    canonical: "https://julianarodriguesadv.com.br/termos-de-uso",
  },
};

export default function TermosDeUso() {
  return (
    <div className="pt-14 bg-white">
      <Navbar />
      <main className="bg-white text-[#00274B] py-12 px-4 mx-auto max-w-4xl">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Termos de Uso</h1>
            <p className="text-lg text-gray-700">
              Ao acessar este site, você concorda com os termos e condições
              descritos abaixo. Leia atentamente.
            </p>
          </header>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">1. Objetivo do Site</h2>
            <p>
              O site da Dra. Juliana Rodrigues tem caráter exclusivamente
              informativo e visa oferecer conteúdos sobre Direito do Trabalho e
              formas de contato para agendamento de consultas jurídicas.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">2. Responsabilidade</h2>
            <p>
              O conteúdo publicado neste site não constitui consultoria
              jurídica. Cada caso deve ser analisado individualmente por um
              profissional qualificado.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              3. Propriedade Intelectual
            </h2>
            <p>
              Todos os textos, imagens, logotipos e demais elementos do site são
              protegidos por direitos autorais. É proibida a reprodução sem
              autorização prévia.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">4. Links Externos</h2>
            <p>
              Este site pode conter links para outros sites. Não nos
              responsabilizamos pelo conteúdo ou políticas de privacidade de
              terceiros.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">5. Atualizações</h2>
            <p>
              Os Termos de Uso podem ser modificados a qualquer momento, sendo
              responsabilidade do usuário consultá-los periodicamente.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">6. Contato</h2>
            <p>
              Em caso de dúvidas, entre em{" "}
              <Link
                href="/#contato"
                className="text-blue-600 underline hover:text-blue-800"
              >
                contato
              </Link>{" "}
              com a equipe jurídica.
            </p>
          </section>

          <footer>
            <p className="text-sm text-gray-600">
              Última atualização: março de 2025.
            </p>
          </footer>
        </article>
      </main>
      <Footer />
    </div>
  );
}

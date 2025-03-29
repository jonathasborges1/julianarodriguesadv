import Link from "next/link";
import { Metadata } from "next";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade | Dra. Juliana Rodrigues",
  description:
    "Conheça a política de privacidade da Dra. Juliana Rodrigues. Entenda como seus dados são coletados, utilizados e protegidos em nosso site.",
  keywords: [
    "política de privacidade",
    "dados pessoais",
    "LGPD",
    "segurança de dados",
    "advogada Manaus",
    "Juliana Rodrigues",
  ],
  alternates: {
    canonical: "https://julianarodriguesadv.com.br/politica-de-privacidade",
  },
};

export default function PoliticaDePrivacidade() {
  return (
    <div className="pt-14 bg-white">
      <Navbar />
      <main className="bg-white text-[#00274B] py-12 px-4 mx-auto max-w-4xl">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Política de Privacidade</h1>
            <p className="text-lg text-gray-700">
              Esta política explica como coletamos, usamos e protegemos os dados
              dos usuários que acessam este site.
            </p>
          </header>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              1. Coleta de Informações
            </h2>
            <p>
              Coletamos informações fornecidas voluntariamente por você ao
              preencher formulários de contato ou agendar uma consulta. Isso
              pode incluir nome, e-mail, telefone e outras informações
              relevantes.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">2. Uso dos Dados</h2>
            <p>
              Os dados coletados são utilizados exclusivamente para fins de
              atendimento jurídico, comunicação e melhoria dos serviços
              prestados.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              3. Compartilhamento com Terceiros
            </h2>
            <p>
              Não compartilhamos suas informações pessoais com terceiros, exceto
              quando necessário para cumprimento de obrigações legais.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              4. Segurança da Informação
            </h2>
            <p>
              Utilizamos medidas técnicas e organizacionais adequadas para
              proteger seus dados contra acessos não autorizados, alterações ou
              divulgações indevidas.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              5. Direitos do Usuário
            </h2>
            <p>
              Você tem o direito de acessar, corrigir ou excluir seus dados
              pessoais, conforme previsto na Lei Geral de Proteção de Dados
              (LGPD).
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">6. Cookies</h2>
            <p>
              Utilizamos cookies para melhorar sua experiência no site. Ao
              continuar navegando, você concorda com o uso desses cookies.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">7. Contato</h2>
            <p>
              Em caso de dúvidas sobre esta política, entre em contato com a
              Dra. Juliana Rodrigues através da página de{" "}
              <Link href="/#contato" className="text-blue-600 underline">
                contato
              </Link>
              .
            </p>
          </section>

          <footer>
            <p className="text-sm text-gray-600">
              Esta política pode ser atualizada periodicamente. Última
              atualização em março de 2025.
            </p>
          </footer>
        </article>
      </main>
      <Footer />
    </div>
  );
}

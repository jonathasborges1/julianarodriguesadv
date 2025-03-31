// src/app/blog/reintegracao-no-emprego/page.tsx
import Link from "next/link";
import Image from "next/image";
import { SocialShare } from "@/components/SocialShare";
import { generateMetadata, post } from "./metadata";
export { generateMetadata };

export default function ReintegracaoNoEmpregoPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">{post.title}</h1>

      <p className="text-sm text-gray-500 mb-6">
        Publicado em {post.date} por{" "}
        <span className="font-medium">Juliana Rodrigues</span>
      </p>

      <div className="w-full h-64 relative mb-6">
        <Image
          src={post.thumbnail}
          alt="Reintegração no emprego"
          layout="fill"
          objectFit="contain"
          className="rounded-xl"
        />
      </div>

      <p className="text-lg mb-6">
        A <strong>reintegração no emprego</strong> é um direito previsto em
        situações específicas. Saiba quando ela se aplica e como a Justiça do
        Trabalho pode garantir o seu retorno ao cargo.
      </p>

      <nav className="mb-10 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Sumário</h2>
        <ul className="list-disc list-inside text-blue-600 space-y-1">
          <li>
            <a href="#o-que-e">O que é reintegração no emprego?</a>
          </li>
          <li>
            <a href="#quando-aplica">Quando o trabalhador tem direito?</a>
          </li>
          <li>
            <a href="#como-proceder">Como proceder para ser reintegrado?</a>
          </li>
          <li>
            <a href="#ajuda-advogada">Quando buscar ajuda de uma advogada?</a>
          </li>
        </ul>
      </nav>

      <section id="o-que-e" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          O que é reintegração no emprego?
        </h2>
        <p>
          A reintegração ocorre quando o trabalhador é demitido de forma ilegal
          ou injusta e a Justiça do Trabalho determina seu retorno à função
          anterior. É comum em casos de estabilidade ou demissões
          discriminatórias.
        </p>
      </section>

      <section id="quando-aplica" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Quando o trabalhador tem direito?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Estabilidade por acidente de trabalho ou gestação</li>
          <li>Demissão discriminatória (ex: doenças graves)</li>
          <li>Demissão anulada por decisão judicial</li>
        </ul>
      </section>

      <section id="como-proceder" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Como proceder para ser reintegrado?
        </h2>
        <p>
          É fundamental reunir provas e buscar orientação jurídica
          especializada. Um advogado pode ingressar com ação trabalhista para
          garantir seu retorno ao cargo e os direitos retroativos.
        </p>
      </section>

      <section id="ajuda-advogada" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Quando buscar ajuda de uma advogada?
        </h2>
        <p>
          O ideal é buscar ajuda imediatamente após a demissão, especialmente em
          casos de estabilidade. A Dra. Juliana Rodrigues pode avaliar a
          legalidade da dispensa e entrar com as medidas judiciais cabíveis.
        </p>
      </section>

      <div className="mt-12 bg-blue-50 border border-blue-200 p-6 rounded-xl text-center">
        <h3 className="text-xl font-bold mb-2">Foi demitido injustamente?</h3>
        <p className="mb-4">
          Agende uma consulta com a Dra. Juliana Rodrigues e descubra se você
          tem direito à reintegração ou indenização.
        </p>
        <Link
          href="/#contato"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Falar com a advogada
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-xl mb-10">
        <Image
          src="/images/dra-juliana-rodrigues-advogada-trabalhista-manaus.jpg"
          alt="Juliana Rodrigues"
          width={120}
          height={120}
          className="rounded-full"
        />
        <div className="text-center sm:text-left">
          <p className="font-bold text-lg">Dra. Juliana Rodrigues</p>
          <p className="text-sm text-gray-600 mb-2">OAB 10547 AM</p>
          <p>
            Advogada trabalhista especializada em defender os direitos dos
            trabalhadores em Manaus.
          </p>
        </div>
      </div>

      <SocialShare title="Reintegração no Emprego: entenda seus direitos" />

      <div className="border-t pt-8">
        <h3 className="text-xl font-semibold mb-4">Leia também:</h3>
        <ul className="space-y-2">
          <li>
            <Link
              href="/blog/rescisao-indireta"
              className="text-blue-600 hover:underline"
            >
              Rescisão Indireta: quando o trabalhador pode pedir demissão com
              direitos
            </Link>
          </li>
          <li>
            <Link
              href="/blog/justa-causa"
              className="text-blue-600 hover:underline"
            >
              Justa Causa: quando a demissão é considerada legal
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-blue-600 hover:underline">
              Todos os artigos do blog
            </Link>
          </li>
        </ul>
      </div>

      <footer className="mt-8 border-t pt-2 text-sm text-gray-600">
        <p>
          Este artigo tem caráter informativo e não substitui uma consulta
          jurídica personalizada.
        </p>
      </footer>
    </article>
  );
}

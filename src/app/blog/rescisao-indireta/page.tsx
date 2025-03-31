// /app/blog/rescisao-indireta/page.tsx

import Link from "next/link";
import Image from "next/image";
import { SocialShare } from "@/components/SocialShare";
import { generateMetadata, post } from "./metadata";
export { generateMetadata };

export default function RescisaoIndiretaPage() {
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
          alt={post.alt}
          layout="fill"
          objectFit="contain"
          className="rounded-xl"
        />
      </div>

      <p className="text-lg mb-6">
        A <strong>rescisão indireta</strong> é um direito importante do
        trabalhador diante de faltas graves cometidas pelo empregador. Entenda
        como funciona, em quais situações ela se aplica e como solicitar seus
        direitos na Justiça do Trabalho.
      </p>

      <nav className="mb-10 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Sumário</h2>
        <ul className="list-disc list-inside text-blue-600 space-y-1">
          <li>
            <a href="#oque-e">O que é rescisão indireta?</a>
          </li>
          <li>
            <a href="#motivos">Motivos que justificam a rescisão indireta</a>
          </li>
          <li>
            <a href="#direitos">Direitos do trabalhador</a>
          </li>
          <li>
            <a href="#como-proceder">Como solicitar na Justiça</a>
          </li>
          <li>
            <a href="#advogada">Por que contar com uma advogada trabalhista</a>
          </li>
        </ul>
      </nav>

      <section id="oque-e" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">O que é rescisão indireta?</h2>
        <p>
          A rescisão indireta é a quebra do contrato de trabalho provocada pelo
          empregador quando este comete uma falta grave. Prevista no artigo 483
          da CLT, ela é conhecida como “justa causa do patrão” e garante ao
          empregado os mesmos direitos de uma demissão sem justa causa.
        </p>
      </section>

      <section id="motivos" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Motivos que justificam a rescisão indireta
        </h2>
        <ul className="list-decimal list-inside space-y-2">
          <li>Falta de pagamento de salário ou atrasos frequentes</li>
          <li>Assédio moral ou sexual</li>
          <li>Redução salarial sem acordo</li>
          <li>Exigência de atividades ilegais ou perigosas</li>
          <li>Descumprimento de obrigações do contrato de trabalho</li>
          <li>Ambiente de trabalho insalubre ou inseguro</li>
        </ul>
      </section>

      <section id="direitos" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Direitos do trabalhador</h2>
        <p>
          Quando a Justiça reconhece a rescisão indireta, o trabalhador tem
          direito a:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-1">
          <li>Saldo de salário</li>
          <li>Férias vencidas e proporcionais + 1/3</li>
          <li>13º salário proporcional</li>
          <li>Saque do FGTS + multa de 40%</li>
          <li>Seguro-desemprego</li>
        </ul>
      </section>

      <section id="como-proceder" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Como solicitar na Justiça</h2>
        <p>
          É essencial reunir provas da falta cometida pelo empregador, como
          mensagens, testemunhas ou documentos. Com esse material, o trabalhador
          deve procurar uma advogada especializada para ingressar com a ação de
          reconhecimento da rescisão indireta.
        </p>
      </section>

      <section id="advogada" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Por que contar com uma advogada trabalhista?
        </h2>
        <p>
          A atuação de uma profissional experiente é fundamental para orientar
          corretamente o trabalhador, fortalecer as provas e aumentar as chances
          de sucesso na ação. A Dra. Juliana Rodrigues atua em Manaus com foco
          exclusivo no Direito do Trabalho e pode te auxiliar em todas as etapas
          do processo.
        </p>
      </section>

      <div className="mt-12 bg-blue-50 border border-blue-200 p-6 rounded-xl text-center">
        <h3 className="text-xl font-bold mb-2">
          Está enfrentando problemas no trabalho?
        </h3>
        <p className="mb-4">
          Agende agora uma consulta com a Dra. Juliana Rodrigues e descubra se
          você tem direito à rescisão indireta.
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
            Advogada especialista em Direito do Trabalho, com atuação focada na
            defesa dos direitos do trabalhador em Manaus.
          </p>
        </div>
      </div>

      <SocialShare title="Rescisão Indireta: saiba seus direitos" />

      <div className="border-t pt-8">
        <h3 className="text-xl font-semibold mb-4">Leia também:</h3>
        <ul className="space-y-2">
          <li>
            <Link
              href="/blog/justa-causa"
              className="text-blue-600 hover:underline"
            >
              Justa Causa: entenda seus direitos
            </Link>
          </li>
          <li>
            <Link
              href="/blog/reintegracao-no-emprego"
              className="text-blue-600 hover:underline"
            >
              Reintegração no Emprego: quando o trabalhador pode voltar ao cargo
            </Link>
          </li>
          <li>
            <Link href="/blog/" className="text-blue-600 hover:underline">
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

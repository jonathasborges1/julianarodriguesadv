// /app/blog/justa-causa/page.tsx

import Link from "next/link";
import Image from "next/image";
import { SocialShare } from "@/components/SocialShare";
import { generateMetadata, post } from "./metadata";
export { generateMetadata };

export default function JustaCausaPage() {
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
        A <strong>demissão por justa causa</strong> é um dos temas mais
        delicados nas relações de trabalho. Saber o que caracteriza essa forma
        de desligamento e quais são seus direitos é fundamental tanto para
        trabalhadores quanto para empregadores.
      </p>

      <nav className="mb-10 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Sumário</h2>
        <ul className="list-disc list-inside text-blue-600 space-y-1">
          <li>
            <a href="#o-que-e">O que é justa causa?</a>
          </li>
          <li>
            <a href="#motivos">Motivos que caracterizam justa causa</a>
          </li>
          <li>
            <a href="#direitos">Direitos do trabalhador</a>
          </li>
          <li>
            <a href="#como-proceder">Como agir diante da justa causa</a>
          </li>
        </ul>
      </nav>

      <section id="o-que-e" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">O que é justa causa?</h2>
        <p>
          A justa causa ocorre quando o empregado comete uma falta grave,
          prevista na Consolidação das Leis do Trabalho (CLT), rompendo a
          relação de confiança entre as partes. É a única forma de demissão que
          retira certos direitos trabalhistas do empregado.
        </p>
      </section>

      <section id="motivos" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Motivos que caracterizam justa causa
        </h2>
        <ul className="list-decimal list-inside space-y-2">
          <li>
            <strong>Insubordinação ou indisciplina:</strong> desrespeito às
            ordens diretas do empregador.
          </li>
          <li>
            <strong>Ato de improbidade:</strong> conduta desonesta, como furto
            ou fraude.
          </li>
          <li>
            <strong>Desídia:</strong> repetidas negligências ou baixo desempenho
            nas atividades.
          </li>
          <li>
            <strong>Embriaguez habitual ou em serviço:</strong> uso de álcool ou
            drogas durante o expediente.
          </li>
          <li>
            <strong>Abandono de emprego:</strong> faltas injustificadas
            prolongadas.
          </li>
          <li>
            <strong>Ofensas físicas ou verbais:</strong> agressões contra
            colegas, superiores ou terceiros.
          </li>
        </ul>
      </section>

      <section id="direitos" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Direitos do trabalhador</h2>
        <p>
          Ao ser demitido por justa causa, o trabalhador perde o direito ao
          aviso prévio, ao saque do FGTS e à multa de 40%. No entanto, ainda tem
          direito ao saldo de salário, férias vencidas e, se houver, o 13º
          proporcional.
        </p>
      </section>

      <section id="como-proceder" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Como agir diante da justa causa
        </h2>
        <p>
          É essencial procurar orientação de um advogado trabalhista para
          verificar se a justa causa foi aplicada corretamente. Muitas vezes, o
          empregador comete erros formais ou não comprova adequadamente a falta,
          abrindo margem para reversão judicial.
        </p>
      </section>

      <div className="mt-12 bg-blue-50 border border-blue-200 p-6 rounded-xl text-center">
        <h3 className="text-xl font-bold mb-2">
          Está enfrentando problemas no trabalho?
        </h3>
        <p className="mb-4">
          Agende agora uma consulta com a Dra. Juliana Rodrigues e descubra se
          você tem direito à reversão da justa.
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

      <SocialShare title="Justa Causa: entenda seus direitos" />

      <div className="border-t pt-8">
        <h3 className="text-xl font-semibold mb-4">Leia também:</h3>
        <ul className="space-y-2">
          <li>
            <Link
              href="/blog/reintegracao-no-emprego"
              className="text-blue-600 hover:underline"
            >
              Reintegração no Emprego: quando o trabalhador pode voltar ao cargo
            </Link>
          </li>
          <li>
            <Link
              href="/blog/rescisao-indireta"
              className="text-blue-600 hover:underline"
            >
              Rescisão Indireta: entenda os direitos do trabalhador
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

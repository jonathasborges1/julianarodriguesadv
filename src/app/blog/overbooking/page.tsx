// /app/blog/overbooking/page.tsx

import Link from "next/link";
import Image from "next/image";
import { SocialShare } from "@/components/SocialShare";
import { buildArticleWhatsAppUrl } from "../whatsapp";
import { generateMetadata, post } from "./metadata";
export { generateMetadata };

export default function OverbookingPage() {
  const whatsappUrl = buildArticleWhatsAppUrl("overbooking");

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
        Você estava com a passagem confirmada, chegou ao aeroporto no horário e,
        mesmo assim, foi impedido de embarcar? Ou fez uma reserva de hotel e ao
        chegar não havia quarto disponível? Isso é <strong>overbooking</strong>{" "}
        — e a lei brasileira garante direitos claros ao consumidor nessa situação,
        incluindo indenização por danos materiais e morais.
      </p>

      <nav className="mb-10 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Sumário</h2>
        <ul className="list-disc list-inside text-blue-600 space-y-1">
          <li>
            <a href="#o-que-e">O que é overbooking?</a>
          </li>
          <li>
            <a href="#permitido-brasil">Overbooking é permitido no Brasil?</a>
          </li>
          <li>
            <a href="#direitos-aereo">
              Direitos do passageiro em voos (Resolução ANAC 400)
            </a>
          </li>
          <li>
            <a href="#overbooking-hotel">Overbooking em hotéis</a>
          </li>
          <li>
            <a href="#indenizacao">
              Indenização: danos materiais e dano moral
            </a>
          </li>
          <li>
            <a href="#o-que-fazer">O que fazer na hora: passo a passo</a>
          </li>
          <li>
            <a href="#como-processar">
              Como processar a companhia aérea ou o hotel
            </a>
          </li>
          <li>
            <a href="#advogada">Por que contar com uma advogada especialista</a>
          </li>
        </ul>
      </nav>

      <section id="o-que-e" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">O que é overbooking?</h2>
        <p className="mb-4">
          <strong>Overbooking</strong> é a prática de vender mais passagens ou
          reservas do que a capacidade real disponível em um voo ou acomodação.
          O termo vem do inglês e significa literalmente &quot;excesso de
          reservas&quot;.
        </p>
        <p className="mb-4">
          As companhias aéreas e redes hoteleiras adotam essa prática com base
          em cálculos estatísticos: historicamente, uma porcentagem de passageiros
          e hóspedes não comparece. O problema ocorre quando todos aparecem ao
          mesmo tempo — e alguém fica sem o serviço pelo qual pagou.
        </p>
        <p>
          O passageiro ou hóspede que é recusado por overbooking é chamado de{" "}
          <strong>preterido</strong>. A <strong>preterição de embarque</strong>{" "}
          é, portanto, a consequência direta do overbooking e configura uma
          violação ao Código de Defesa do Consumidor (CDC).
        </p>
      </section>

      <section id="permitido-brasil" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Overbooking é permitido no Brasil?
        </h2>
        <p className="mb-4">
          Para a aviação comercial, <strong>não</strong>. A{" "}
          <strong>Resolução ANAC nº 400/2016</strong>, que regula os direitos
          dos passageiros no transporte aéreo regular no Brasil, veda
          expressamente a prática do overbooking em seu artigo 22:
        </p>
        <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-600 mb-4">
          &quot;É vedado ao transportador negar o embarque ao passageiro em razão
          de excesso de passagens vendidas para o mesmo voo.&quot;
        </blockquote>
        <p className="mb-4">
          Apesar da proibição, o overbooking ainda ocorre na prática. Quando
          acontece, a empresa está descumprindo a regulamentação da ANAC e
          violando o <strong>Código de Defesa do Consumidor (Lei 8.078/1990)</strong>,
          ficando sujeita a penalidades administrativas e à obrigação de
          indenizar o passageiro.
        </p>
        <p>
          Para hotéis, não existe norma administrativa específica como a ANAC,
          mas o CDC aplica-se integralmente — e a responsabilidade do fornecedor
          por falha na prestação de serviço está prevista no artigo 14 da lei.
        </p>
      </section>

      <section id="direitos-aereo" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Direitos do passageiro em voos: o que a Resolução ANAC 400 garante
        </h2>
        <p className="mb-4">
          Quando o passageiro é impedido de embarcar por overbooking (preterição
          involuntária), a companhia aérea tem obrigações imediatas previstas na
          Resolução ANAC 400:
        </p>

        <h3 className="text-xl font-semibold mb-3">
          1. Reacomodação ou reembolso
        </h3>
        <p className="mb-4">
          O passageiro pode escolher entre:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Reacomodação imediata</strong> no próximo voo disponível
            para o mesmo destino (mesmo que de outra companhia)
          </li>
          <li>
            <strong>Reacomodação em data de sua preferência</strong>, sem custo
            adicional
          </li>
          <li>
            <strong>Reembolso integral</strong> do valor pago, se optar por não
            viajar mais
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">
          2. Assistência material obrigatória
        </h3>
        <p className="mb-2">A empresa deve oferecer, conforme o tempo de espera:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>A partir de 1 hora:</strong> comunicação gratuita (ligação
            telefônica, acesso à internet)
          </li>
          <li>
            <strong>A partir de 2 horas:</strong> alimentação adequada (voucher
            ou refeição)
          </li>
          <li>
            <strong>A partir de 4 horas:</strong> hospedagem e transporte entre
            o aeroporto e o hotel (quando necessário pernoite)
          </li>
        </ul>
        <p className="mb-4">
          Se a companhia não oferecer essa assistência espontaneamente, o
          passageiro tem direito a providenciá-la por conta própria e exigir o
          reembolso mediante apresentação de comprovantes.
        </p>

        <h3 className="text-xl font-semibold mb-3">
          3. Compensação financeira obrigatória
        </h3>
        <p>
          Além da assistência, a Resolução ANAC 400 prevê que a companhia aérea
          deve oferecer ao passageiro preterido uma{" "}
          <strong>compensação financeira imediata</strong>, que pode ser em
          dinheiro, crédito, milhas ou outros benefícios — desde que o
          passageiro concorde expressamente. Essa compensação não elimina o
          direito à indenização judicial por danos morais e materiais.
        </p>
      </section>

      <section id="overbooking-hotel" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Overbooking em hotéis</h2>
        <p className="mb-4">
          O overbooking hoteleiro ocorre quando o hotel vende mais quartos do que
          sua disponibilidade real e, ao receber o hóspede, informa que não há
          acomodação. Apesar de não existir uma regulamentação administrativa
          específica como a da ANAC, o{" "}
          <strong>Código de Defesa do Consumidor</strong> garante ao hóspede:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            Acomodação imediata em hotel de categoria equivalente ou superior,
            às custas do estabelecimento
          </li>
          <li>
            Transporte até o novo hospedagem, pago pelo hotel
          </li>
          <li>
            Reembolso integral de todos os valores pagos, se o hóspede optar
            por não ser reacomodado
          </li>
          <li>
            Indenização por danos materiais (como transporte adicional, jantar
            perdido, etc.) e morais
          </li>
        </ul>
        <p>
          A recusa do hotel em prestar essas alternativas caracteriza{" "}
          <strong>falha na prestação de serviço</strong> (art. 14, CDC) e{" "}
          <strong>vício do serviço</strong> (art. 20, CDC), o que fortalece
          ainda mais o direito à indenização judicial.
        </p>
      </section>

      <section id="indenizacao" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Indenização por overbooking: danos materiais e dano moral
        </h2>

        <h3 className="text-xl font-semibold mb-3">Danos materiais</h3>
        <p className="mb-2">
          O consumidor preterido pode ser indenizado por todos os prejuízos
          financeiros decorrentes do overbooking, como:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Gastos com hospedagem não prevista</li>
          <li>Alimentação e transporte extras</li>
          <li>Novo bilhete aéreo comprado às pressas</li>
          <li>Perda de pacotes turísticos ou conexões</li>
          <li>
            Prejuízos profissionais comprovados (reunião, evento, compromisso
            perdido)
          </li>
          <li>Qualquer outro gasto diretamente causado pela situação</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Dano moral</h3>
        <p className="mb-4">
          O <strong>dano moral</strong> decorre do constrangimento, da angústia,
          da frustração e da humilhação causados pela negativa de embarque ou
          de hospedagem. Os tribunais brasileiros têm reconhecido o dano moral
          como presumido nesses casos — ou seja, não é necessário provar o
          sofrimento, basta demonstrar o fato.
        </p>
        <p className="mb-4">
          Os valores de condenação variam conforme as circunstâncias, mas
          decisões do STJ e dos Tribunais de Justiça estaduais costumam fixar
          indenizações por dano moral em casos de overbooking entre{" "}
          <strong>R$ 3.000 e R$ 15.000</strong>, podendo ser maior quando
          envolvem:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Crianças, idosos, gestantes ou pessoas com deficiência</li>
          <li>Longas esperas no aeroporto sem qualquer assistência</li>
          <li>Destino internacional e impacto em toda a viagem</li>
          <li>Viagem motivada por urgência (luto, doença, cirurgia)</li>
          <li>Negativa reiterada ou comportamento desrespeitoso da empresa</li>
        </ul>
      </section>

      <section id="o-que-fazer" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          O que fazer na hora: passo a passo
        </h2>
        <p className="mb-4">
          Se você sofrer overbooking em um voo ou hotel, siga estes passos para
          preservar seus direitos:
        </p>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Exija documentação escrita</strong> da negativa de embarque
            ou da recusa de hospedagem. Para voos, solicite o formulário de
            preterição de embarque da ANAC.
          </li>
          <li>
            <strong>Não assine nada sem ler com atenção.</strong> Termos de
            &quot;compensação voluntária&quot; podem conter cláusulas que limitam
            sua indenização futura.
          </li>
          <li>
            <strong>Fotografe tudo:</strong> painéis do aeroporto com o status
            do voo, filas, documentos entregues e qualquer comunicação da empresa.
          </li>
          <li>
            <strong>Guarde todos os comprovantes de gastos extras</strong>
            (notas fiscais, recibos, extratos) — eles são a base da indenização
            por danos materiais.
          </li>
          <li>
            <strong>Anote nomes e contatos de testemunhas</strong> que
            presenciaram a situação.
          </li>
          <li>
            <strong>Registre toda comunicação com a empresa</strong> por e-mail
            ou mensagem, evitando acordos apenas verbais.
          </li>
          <li>
            <strong>Consulte uma advogada especialista</strong> antes de aceitar
            qualquer proposta de compensação da empresa.
          </li>
        </ol>
      </section>

      <section id="como-processar" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Como processar a companhia aérea ou o hotel por overbooking
        </h2>
        <p className="mb-4">
          O consumidor prejudicado tem diversas vias para buscar seus direitos:
        </p>

        <h3 className="text-xl font-semibold mb-2">PROCON</h3>
        <p className="mb-4">
          O Programa de Proteção e Defesa do Consumidor pode intermediar uma
          reclamação administrativa antes da ação judicial. É gratuito e pode
          resultar em acordo rápido com a empresa.
        </p>

        <h3 className="text-xl font-semibold mb-2">ANAC (para voos)</h3>
        <p className="mb-4">
          O passageiro pode registrar denúncia formal na Agência Nacional de
          Aviação Civil pelo site ou aplicativo da ANAC. A denúncia pode
          resultar em autuação e multa à companhia aérea.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          Juizado Especial Cível (JEC)
        </h3>
        <p className="mb-4">
          Para causas de até 40 salários mínimos, o consumidor pode ingressar
          no Juizado Especial Cível sem necessidade de advogado. É uma via
          rápida e gratuita para buscar indenização. Com advogado, as chances
          de sucesso e o valor obtido tendem a ser maiores.
        </p>

        <h3 className="text-xl font-semibold mb-2">Ação judicial comum</h3>
        <p className="mb-4">
          Para causas mais complexas ou valores mais elevados, a ação judicial
          perante a Justiça Comum é o caminho. O prazo prescricional para
          reclamar com base no CDC é de <strong>5 anos</strong> a partir do fato
          (art. 27 do CDC), portanto não deixe para depois.
        </p>

        <p>
          Importante: o fato de a empresa ter oferecido alguma compensação no
          aeroporto ou hotel <strong>não elimina</strong> o direito à indenização
          judicial, especialmente pelo dano moral.
        </p>
      </section>

      <section id="advogada" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Por que contar com uma advogada especialista em Direito do Consumidor?
        </h2>
        <p className="mb-4">
          Muitos consumidores aceitam a compensação oferecida pela empresa no
          momento do overbooking sem saber que têm direito a muito mais. Uma
          advogada especialista em Direito do Consumidor pode:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Calcular corretamente todos os danos sofridos — materiais e morais
          </li>
          <li>
            Reunir e organizar as provas necessárias para fortalecer o caso
          </li>
          <li>
            Identificar se houve outras violações além do overbooking (falta de
            assistência, informações enganosas, etc.)
          </li>
          <li>
            Ingressar com a ação dentro do prazo prescricional adequado
          </li>
          <li>
            Aumentar significativamente o valor da indenização obtida em relação
            ao que o consumidor conseguiria sozinho
          </li>
        </ul>
      </section>

      <div className="mt-12 bg-blue-50 border border-blue-200 p-6 rounded-xl text-center">
        <h3 className="text-xl font-bold mb-2">
          Sofreu overbooking e não sabe o que fazer?
        </h3>
        <p className="mb-4">
          Agende uma consulta com a Dra. Juliana Rodrigues e descubra se você
          tem direito à indenização. Não deixe a empresa sair impune.
        </p>
        <Link
          href={whatsappUrl}
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar com a advogada
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-xl mb-10 mt-10">
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
            Advogada com atuação em Direito do Consumidor e Direito do Trabalho,
            defendendo os direitos dos consumidores e trabalhadores em Manaus e
            em todo o Brasil.
          </p>
        </div>
      </div>

      <SocialShare title="Overbooking: O que é, Seus Direitos e Como Ser Indenizado" />

      <div className="border-t pt-8">
        <h3 className="text-xl font-semibold mb-4">Leia também:</h3>
        <ul className="space-y-2">
          <li>
            <Link
              href="/blog/justa-causa/"
              className="text-blue-600 hover:underline"
            >
              Justa Causa: entenda seus direitos e deveres
            </Link>
          </li>
          <li>
            <Link
              href="/blog/rescisao-indireta/"
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

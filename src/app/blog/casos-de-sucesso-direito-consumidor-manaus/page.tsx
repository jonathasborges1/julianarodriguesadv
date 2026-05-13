import Image from "next/image";
import Link from "next/link";
import { SocialShare } from "@/components/SocialShare";
import { SITE_URL, canonicalUrl } from "@/lib/config";
import { buildArticleWhatsAppUrl } from "../whatsapp";
import { generateMetadata, post } from "./metadata";

export { generateMetadata };

const articleUrl = canonicalUrl(`/blog/${post.slug}`);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${articleUrl}#article`,
      headline: post.title,
      description: post.excerpt,
      image: `${SITE_URL}${post.thumbnail}`,
      url: articleUrl,
      datePublished: "2026-05-09T15:30:00-04:00",
      dateModified: "2026-05-09T15:30:00-04:00",
      inLanguage: "pt-BR",
      author: {
        "@type": "Person",
        name: "Anne Caroline Castro Silva",
        jobTitle: "Advogada",
      },
      publisher: {
        "@type": "LegalService",
        "@id": `${SITE_URL}/#rodrigues-castro-advocacia`,
        name: "Rodrigues e Castro Advocacia",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/logotipo-dra-juliana-2.webp`,
        },
        areaServed: [
          {
            "@type": "City",
            name: "Manaus",
          },
          {
            "@type": "AdministrativeArea",
            name: "Amazonas",
          },
        ],
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": articleUrl,
      },
    },
    {
      "@type": "LegalService",
      "@id": `${SITE_URL}/#rodrigues-castro-advocacia`,
      name: "Rodrigues e Castro Advocacia",
      url: SITE_URL,
      areaServed: "Manaus, Amazonas, Brasil",
      knowsAbout: [
        "Direito do Consumidor",
        "Cobrança indevida",
        "Danos morais",
        "Plano de saúde",
        "Concessionárias de água e energia",
      ],
      employee: {
        "@type": "Person",
        name: "Anne Caroline Castro Silva",
        jobTitle: "Advogada",
        identifier: "OAB/AM 11.421",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${articleUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Cobrança indevida pode gerar danos morais?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pode, a depender das circunstâncias do caso. Nos casos analisados, a Justiça reconheceu falhas como cobrança sem prova suficiente, ausência de procedimento adequado e negativa indevida de cobertura, com condenação por danos morais em situações específicas.",
          },
        },
        {
          "@type": "Question",
          name: "O que fazer quando uma empresa promete reembolso e não paga?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Guarde comprovantes de compra, pedido de cancelamento, protocolos, conversas e promessas de reembolso. Esses documentos ajudam a demonstrar a falha na prestação do serviço e podem embasar pedido de devolução dos valores e indenização.",
          },
        },
        {
          "@type": "Question",
          name: "Concessionária pode cobrar multa por fraude no medidor sem prova?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A concessionária precisa comprovar a irregularidade e observar os procedimentos legais aplicáveis. No caso relatado, a cobrança abusiva de energia foi anulada porque a fraude não foi comprovada e os procedimentos exigidos não foram seguidos.",
          },
        },
        {
          "@type": "Question",
          name: "Plano de saúde pode negar exame indicado pelo médico?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A negativa pode ser considerada abusiva quando o exame é essencial e possui indicação médica. Em um dos casos analisados, a paciente teve exame oncológico negado, precisou pagar do próprio bolso e a Justiça determinou reembolso e danos morais.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${articleUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: canonicalUrl("/blog"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: articleUrl,
        },
      ],
    },
  ],
};

export default function CasosSucessoDireitoConsumidorManausPage() {
  const publishedLabel = post.time ? `${post.date} às ${post.time}` : post.date;
  const whatsappUrl = buildArticleWhatsAppUrl(
    "casos de sucesso em Direito do Consumidor em Manaus"
  );

  return (
    <article className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-[#00274B]">
        {post.title}
      </h1>

      <p className="text-sm text-gray-500 mb-6">
        Publicado em {publishedLabel} por{" "}
        <span className="font-medium">Anne Caroline Castro Silva</span>
      </p>

      <div className="w-full h-64 sm:h-80 relative mb-8">
        <Image
          src={post.thumbnail}
          alt={post.alt}
          fill
          priority
          className="rounded-xl object-cover"
          sizes="(max-width: 768px) 100vw, 896px"
        />
      </div>

      <p className="text-lg mb-6 leading-relaxed">
        Problemas com cobranças indevidas, reembolso negado, concessionárias de
        água e energia ou plano de saúde são mais comuns do que deveriam. Muitas
        pessoas pagam valores questionáveis por medo de ter o serviço suspenso,
        deixam de insistir em um reembolso prometido ou aceitam uma negativa de
        exame sem saber que a situação pode ser discutida judicialmente.
      </p>

      <p className="mb-8 leading-relaxed">
        Este artigo reúne quatro casos reais de atuação em{" "}
        <strong>Direito do Consumidor em Manaus/AM</strong>, com foco em
        situações que envolvem <strong>cobrança indevida</strong>,{" "}
        <strong>danos morais</strong>, problema com concessionária, empresa que
        não devolveu dinheiro e <strong>plano de saúde que negou exame</strong>.
        O objetivo é explicar, de forma clara e responsável, o que esses casos
        ensinam ao consumidor.
      </p>

      <nav className="mb-10 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Sumário</h2>
        <ul className="list-disc list-inside text-blue-700 space-y-1">
          <li>
            <a href="#cobranca-agua">Cobrança indevida de água</a>
          </li>
          <li>
            <a href="#reembolso-passagens">Empresa não reembolsou passagens</a>
          </li>
          <li>
            <a href="#energia-abusiva">Cobrança abusiva de energia</a>
          </li>
          <li>
            <a href="#plano-saude">Plano de saúde negou exame essencial</a>
          </li>
          <li>
            <a href="#o-que-fazer">O que fazer nessas situações?</a>
          </li>
          <li>
            <a href="#quando-advogado">Quando buscar um advogado?</a>
          </li>
          <li>
            <a href="#faq">Perguntas frequentes</a>
          </li>
        </ul>
      </nav>

      <section id="cobranca-agua" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          1. Cobrança indevida de água gera indenização de R$ 7 mil
        </h2>
        <p className="mb-4 leading-relaxed">
          Em um dos casos, uma consumidora recebeu multa por suposta violação de
          lacre no hidrômetro. O ponto central era sensível: a cobrança foi
          aplicada sem prova suficiente da irregularidade, e o hidrômetro ficava
          em área externa, circunstância que enfraquecia a tentativa de atribuir
          automaticamente à consumidora a responsabilidade pelo ocorrido.
        </p>
        <p className="mb-4 leading-relaxed">
          A Justiça reconheceu a <strong>cobrança indevida</strong> e condenou a
          empresa ao pagamento de <strong>R$ 7 mil por danos morais</strong>.
          Esse tipo de situação mostra que concessionárias também precisam
          demonstrar de forma adequada a origem da cobrança, especialmente quando
          alegam violação, fraude ou irregularidade técnica.
        </p>

        <h3 className="text-xl font-semibold mb-3">
          O que esse caso ensina ao consumidor?
        </h3>
        <p className="leading-relaxed">
          Quando a cobrança nasce de uma acusação de irregularidade, não basta a
          empresa afirmar que houve violação. O consumidor deve guardar faturas,
          notificações, fotos do medidor, protocolos de atendimento e qualquer
          documento que mostre a localização do equipamento ou a ausência de
          prova clara.
        </p>
      </section>

      <section id="reembolso-passagens" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          2. Empresa condenada por não reembolsar passagens canceladas
        </h2>
        <p className="mb-4 leading-relaxed">
          Outro caso envolveu consumidores que cancelaram passagens no mesmo dia
          da compra. A empresa prometeu o reembolso, mas o valor nunca foi
          devolvido. A situação levou à condenação da empresa à restituição dos
          valores e ao pagamento de indenização.
        </p>
        <p className="mb-4 leading-relaxed">
          Para quem pesquisa no Google por{" "}
          <strong>&quot;empresa não devolveu dinheiro&quot;</strong> ou{" "}
          <strong>&quot;reembolso de passagem não pago&quot;</strong>, o ponto
          principal é este: promessa de reembolso precisa ser cumprida. Quando o consumidor
          cancela dentro das condições aplicáveis e a empresa confirma a
          devolução, a demora injustificada pode configurar falha na prestação do
          serviço.
        </p>

        <h3 className="text-xl font-semibold mb-3">
          Documentos que costumam fazer diferença
        </h3>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>Comprovante da compra das passagens</li>
          <li>Solicitação de cancelamento feita no mesmo dia</li>
          <li>Protocolos de atendimento</li>
          <li>E-mails, mensagens ou prints com promessa de reembolso</li>
          <li>Extratos mostrando que o valor não foi devolvido</li>
        </ul>
      </section>

      <section id="energia-abusiva" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          3. Cobrança abusiva de energia superior a R$ 3 mil foi anulada pela
          Justiça
        </h2>
        <p className="mb-4 leading-relaxed">
          Em caso envolvendo energia elétrica, o consumidor recebeu cobrança
          superior a <strong>R$ 3 mil</strong> por suposta irregularidade no
          medidor. A concessionária, porém, não comprovou a fraude e também não
          seguiu os procedimentos legais necessários.
        </p>
        <p className="mb-4 leading-relaxed">
          A cobrança abusiva foi anulada pela Justiça. Esse resultado reforça
          uma ideia essencial em casos de{" "}
          <strong>problema com concessionária</strong>: quando há acusação de
          fraude, irregularidade ou recuperação de consumo, a empresa precisa
          agir com transparência, prova técnica e observância dos procedimentos
          exigidos.
        </p>

        <h3 className="text-xl font-semibold mb-3">
          Por que cobranças de energia precisam ser analisadas com cuidado?
        </h3>
        <p className="leading-relaxed">
          Valores altos e inesperados podem comprometer o orçamento familiar e
          gerar medo de suspensão do serviço. Por isso, antes de pagar uma
          cobrança que pareça abusiva, é importante verificar a origem do débito,
          pedir cópia dos documentos técnicos e registrar reclamação formal.
        </p>
      </section>

      <section id="plano-saude" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          4. Plano de saúde condenado por negar exame oncológico essencial
        </h2>
        <p className="mb-4 leading-relaxed">
          O quarto caso envolveu uma paciente que teve exame oncológico negado
          mesmo com indicação médica. Diante da necessidade do exame, ela acabou
          pagando do próprio bolso. A Justiça determinou o reembolso do valor e
          também o pagamento de danos morais.
        </p>
        <p className="mb-4 leading-relaxed">
          A negativa de exame por plano de saúde é um tema delicado porque
          envolve tempo, saúde e angústia. Quando existe indicação médica para
          exame essencial, especialmente em contexto oncológico, a recusa do
          plano pode causar prejuízo financeiro e sofrimento que ultrapassam um
          simples aborrecimento.
        </p>

        <h3 className="text-xl font-semibold mb-3">
          O consumidor deve pagar do próprio bolso?
        </h3>
        <p className="leading-relaxed">
          Cada caso precisa ser analisado individualmente. Quando o paciente é
          pressionado pela urgência ou pela necessidade clínica, guardar o pedido
          médico, a negativa do plano, os comprovantes de pagamento e os laudos
          relacionados ao exame pode ser decisivo para buscar reembolso e avaliar
          eventual indenização.
        </p>
      </section>

      <section id="o-que-fazer" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          O que fazer nessas situações?
        </h2>
        <p className="mb-4 leading-relaxed">
          Seja em cobrança indevida de água, cobrança abusiva de energia,
          reembolso não pago ou negativa de exame pelo plano de saúde, algumas
          medidas ajudam a proteger o consumidor desde o primeiro momento.
        </p>
        <ol className="list-decimal pl-6 space-y-3 leading-relaxed">
          <li>
            <strong>Guarde todos os documentos.</strong> Faturas, contratos,
            comprovantes, laudos, protocolos e mensagens são essenciais.
          </li>
          <li>
            <strong>Registre reclamação por escrito.</strong> Evite depender
            apenas de ligações sem protocolo.
          </li>
          <li>
            <strong>Não aceite explicações genéricas.</strong> Peça a origem da
            cobrança, o motivo da negativa ou a previsão concreta de reembolso.
          </li>
          <li>
            <strong>Fotografe medidores e documentos.</strong> Em casos de água e
            energia, imagens podem ajudar a demonstrar a situação real.
          </li>
          <li>
            <strong>Procure orientação antes de pagar valores questionáveis.</strong>{" "}
            Em alguns casos, pagar sem contestar pode dificultar a estratégia,
            embora não elimine necessariamente seus direitos.
          </li>
        </ol>
      </section>

      <section id="quando-advogado" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Quando buscar um advogado em Manaus?
        </h2>
        <p className="mb-4 leading-relaxed">
          A orientação jurídica costuma ser importante quando a empresa mantém a
          cobrança, ameaça suspender serviço essencial, ignora protocolos, não
          devolve valores prometidos ou nega cobertura de saúde mesmo diante de
          indicação médica.
        </p>
        <p className="mb-4 leading-relaxed">
          Um <strong>advogado de Direito do Consumidor em Manaus</strong> pode
          analisar documentos, identificar se houve falha na prestação do
          serviço, orientar sobre reclamações administrativas e avaliar a
          viabilidade de ação judicial com pedido de restituição, reembolso,
          anulação de cobrança e danos morais.
        </p>
        <p className="leading-relaxed">
          Para aprofundar temas relacionados, veja também os artigos sobre{" "}
          <Link
            href="/blog/plano-de-saude-negou-exame/"
            className="text-blue-700 hover:underline"
          >
            plano de saúde que negou exame urgente
          </Link>{" "}
          e{" "}
          <Link
            href="/blog/overbooking/"
            className="text-blue-700 hover:underline"
          >
            direitos do consumidor em casos de overbooking
          </Link>
          .
        </p>
      </section>

      <section className="mb-10 bg-blue-50 border border-blue-200 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-3">
          Atendimento em Direito do Consumidor
        </h2>
        <p className="mb-4 leading-relaxed">
          Se você recebeu uma cobrança que considera indevida, teve reembolso
          negado ou enfrentou problema com plano de saúde, reúna os documentos e
          busque uma análise jurídica individualizada. Cada caso depende das
          provas disponíveis e das circunstâncias concretas.
        </p>
        <Link
          href={whatsappUrl}
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar análise do caso
        </Link>
      </section>

      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Perguntas frequentes sobre Direito do Consumidor
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Cobrança indevida sempre gera indenização?
            </h3>
            <p className="leading-relaxed">
              Não sempre. A indenização depende das provas, da gravidade da
              conduta e dos efeitos causados ao consumidor. Em alguns casos, a
              solução pode envolver apenas cancelamento da cobrança ou devolução
              de valores; em outros, pode haver danos morais.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Posso processar uma concessionária de água ou energia?
            </h3>
            <p className="leading-relaxed">
              Sim, quando houver cobrança abusiva, ausência de prova,
              descumprimento de procedimento legal ou falha na prestação do
              serviço. É importante reunir faturas, notificações, fotos,
              protocolos e documentos técnicos.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              A empresa prometeu reembolso e não pagou. O que faço?
            </h3>
            <p className="leading-relaxed">
              Guarde a promessa de reembolso, comprovante da compra,
              solicitação de cancelamento e extratos. Com esses documentos, é
              possível avaliar pedido de devolução dos valores e eventual
              indenização, conforme o caso.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Plano de saúde pode negar exame indicado pelo médico?
            </h3>
            <p className="leading-relaxed">
              A negativa pode ser questionada, especialmente quando o exame é
              essencial e há indicação médica. Em casos sensíveis, como exames
              oncológicos, a análise jurídica deve ser feita com rapidez.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Preciso de advogado para casos de Direito do Consumidor em Manaus?
            </h3>
            <p className="leading-relaxed">
              Depende da complexidade e do valor envolvido. Mesmo quando a via
              administrativa é possível, a orientação de um advogado pode ajudar
              a organizar provas, evitar erros e avaliar a estratégia mais
              adequada.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl mb-10 border border-gray-100 border-l-4 border-l-[#00274B]">
        <h2 className="font-bold text-xl mb-1">Anne Caroline Castro Silva</h2>
        <p className="text-sm text-gray-600 mb-3">OAB/AM 11.421</p>
        <p className="leading-relaxed">
          Advogada com atuação em Direito do Consumidor em Manaus/AM, com foco em
          demandas envolvendo cobranças indevidas, concessionárias, reembolsos,
          falhas na prestação de serviços e negativas de cobertura por planos de
          saúde.
        </p>
      </section>

      <SocialShare title={post.title} />

      <div className="border-t pt-8">
        <h2 className="text-xl font-semibold mb-4">Leia também:</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/blog/plano-de-saude-negou-exame/"
              className="text-blue-600 hover:underline"
            >
              Plano de saúde negou exame urgente? Saiba quando isso gera
              indenização
            </Link>
          </li>
          <li>
            <Link
              href="/blog/overbooking/"
              className="text-blue-600 hover:underline"
            >
              Overbooking: o que é, seus direitos e como ser indenizado
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
          jurídica personalizada. Resultados anteriores não garantem desfecho
          idêntico em novos casos.
        </p>
      </footer>
    </article>
  );
}

import Link from "next/link";
import Image from "next/image";
import { SocialShare } from "@/components/SocialShare";
import { buildArticleWhatsAppUrl } from "../whatsapp";
import { generateMetadata, post } from "./metadata";
export { generateMetadata };

export default function PlanoSaudeNegouExamePage() {
  const whatsappUrl = buildArticleWhatsAppUrl(
    "plano de saúde que negou seu exame urgente"
  );

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
        Você não precisa de uma negativa formal para ter seus direitos violados.{" "}
        <strong>O silêncio também pode custar caro ao plano de saúde.</strong>{" "}
        Quando o paciente precisa de um exame com urgência e o plano simplesmente
        não responde — nem autoriza, nem nega —, essa omissão pode ser tratada
        pela Justiça como uma recusa disfarçada, capaz de gerar indenização por
        danos morais.
      </p>

      <nav className="mb-10 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Sumário</h2>
        <ul className="list-disc list-inside text-blue-600 space-y-1">
          <li>
            <a href="#caso-real">O caso real: 4 meses de silêncio e suspeita de câncer</a>
          </li>
          <li>
            <a href="#o-que-diz-a-lei">O que diz a lei: CDC e Súmulas do STJ</a>
          </li>
          <li>
            <a href="#silencio-negativa">
              Seu plano não respondeu? Isso pode ser ilegal
            </a>
          </li>
          <li>
            <a href="#carencia-urgencia">Carência não vale em urgência e emergência</a>
          </li>
          <li>
            <a href="#dano-moral">Dano moral: quando o plano deve indenizar</a>
          </li>
          <li>
            <a href="#o-que-fazer">O que fazer na prática: passo a passo</a>
          </li>
          <li>
            <a href="#advogada">Por que contar com uma advogada especialista</a>
          </li>
        </ul>
      </nav>

      <section id="caso-real" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          O caso real: 4 meses de silêncio e suspeita de câncer
        </h2>
        <p className="mb-4">
          Uma mulher de 58 anos, com suspeita de câncer, precisava urgentemente
          realizar uma{" "}
          <strong>Histeroscopia com Ressectoscópio para Endometriectomia</strong>{" "}
          — procedimento indicado pelo médico responsável pelo seu tratamento.
          O pedido de autorização foi encaminhado ao plano de saúde com a devida
          documentação comprovando a urgência.
        </p>
        <p className="mb-4">
          O que aconteceu em seguida é, infelizmente, mais comum do que se imagina:{" "}
          <strong>o plano simplesmente não respondeu.</strong> Nenhuma autorização.
          Nenhuma negativa formal. Quatro meses de silêncio enquanto a paciente
          aguardava, sem conseguir realizar o exame que poderia determinar se ela
          tinha câncer.
        </p>
        <p className="mb-4">
          O exame só foi realizado após uma decisão judicial de tutela antecipada
          — uma liminar obtida por intervenção do advogado. O caso foi julgado
          pelo <strong>21º Juizado Especial Cível da Comarca de Manaus</strong>{" "}
          (Processo 0081024-XX.2024.8.04.XXXX), e a empresa foi condenada a
          pagar <strong>R$ 6.000,00</strong> de indenização por danos morais.
        </p>
        <blockquote className="border-l-4 border-[#00274B] pl-4 italic text-gray-600 mb-4">
          &quot;A omissão na análise e aprovação de procedimento cirúrgico de urgência
          configura-se como negativa, ante a ausência de conduta positiva a satisfazer
          a necessidade médica da paciente.&quot;
          <br />
          <span className="text-sm not-italic">— Juíza Bárbara Folhadela Paulain, TJAM</span>
        </blockquote>
        <p>
          Esse caso não é uma exceção. É um padrão. E existe solução jurídica
          rápida para quem passa por isso.
        </p>
      </section>

      <section id="o-que-diz-a-lei" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          O que diz a lei: CDC e Súmulas do STJ
        </h2>
        <p className="mb-4">
          A relação entre o paciente e o plano de saúde é uma relação de consumo.
          O <strong>Superior Tribunal de Justiça já pacificou</strong> esse
          entendimento na Súmula 608:
        </p>
        <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-600 mb-4">
          &quot;Aplica-se o Código de Defesa do Consumidor aos contratos de plano de
          saúde, salvo os administrados por entidades de autogestão.&quot;
        </blockquote>
        <p className="mb-4">
          Isso significa que o plano de saúde está sujeito a três princípios
          fundamentais do CDC que favorecem diretamente o consumidor:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Responsabilidade objetiva (art. 14 do CDC):</strong> o plano
            responde pelo defeito na prestação do serviço independentemente de
            culpa. Não precisa provar que a empresa agiu de má-fé — basta mostrar
            que o serviço falhou.
          </li>
          <li>
            <strong>Inversão do ônus da prova (art. 6º, VIII, do CDC):</strong>{" "}
            é o plano que precisa provar que agiu corretamente, e não o paciente
            que precisa provar que foi prejudicado.
          </li>
          <li>
            <strong>Vedação de cláusulas abusivas (art. 51 do CDC):</strong>{" "}
            qualquer cláusula contratual que coloque o consumidor em desvantagem
            exagerada pode ser declarada nula pelo juiz.
          </li>
        </ul>
        <p>
          Na prática: o plano de saúde tem o ônus de provar que negou o exame
          por uma razão legítima e que comunicou isso ao paciente em prazo
          razoável. Se não provar, perde.
        </p>
      </section>

      <section id="silencio-negativa" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Seu plano não respondeu? Isso pode ser ilegal
        </h2>
        <p className="mb-4">
          Este é o ponto mais importante do artigo — e o que mais pega os
          consumidores desprevenidos.
        </p>
        <p className="mb-4">
          A maioria das pessoas acredita que só tem direito a agir judicialmente
          quando recebe uma <strong>negativa formal por escrito</strong>. Na
          verdade, a Justiça entende de forma diferente:{" "}
          <strong>
            a ausência de resposta em prazo razoável equivale a uma negativa.
          </strong>
        </p>
        <p className="mb-4">
          No caso de Manaus, a juíza foi explícita: a empresa não autorizou,
          não negou e não explicou nada durante mais de 4 meses. Esse silêncio
          foi tratado como <em>omissão ilícita</em> — uma falha grave na
          prestação do serviço.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
          <p className="font-semibold text-amber-800 mb-1">Atenção:</p>
          <p className="text-amber-900 text-sm">
            Se você solicitou autorização para um exame ou procedimento e não
            recebeu resposta há mais de alguns dias — especialmente em casos
            de urgência —, você já pode ter direito a buscar uma decisão
            judicial liminar para forçar a realização do procedimento{" "}
            <strong>agora</strong>, sem esperar a ação principal.
          </p>
        </div>

        <p>
          A omissão do plano é ainda mais grave em contextos de risco à saúde,
          como suspeita de doenças graves. Nesses casos, cada dia de espera
          representa não apenas sofrimento, mas potencial agravamento do
          quadro clínico.
        </p>
      </section>

      <section id="carencia-urgencia" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Carência não vale em urgência e emergência
        </h2>
        <p className="mb-4">
          Um dos argumentos mais usados pelos planos de saúde para negar ou
          atrasar procedimentos é a <strong>carência contratual</strong> — o
          período mínimo de contribuição exigido antes de utilizar determinados
          serviços.
        </p>
        <p className="mb-4">
          Mas o STJ já deixou claro o limite disso. A{" "}
          <strong>Súmula 597</strong> estabelece:
        </p>
        <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-600 mb-4">
          &quot;A cláusula contratual de plano de saúde que prevê carência para
          utilização dos serviços de assistência médica nas situações de emergência
          ou de urgência é considerada abusiva se ultrapassado o prazo máximo de
          24 horas contado da data da contratação.&quot;
        </blockquote>
        <p className="mb-4">
          Traduzindo: se o seu caso é de <strong>urgência ou emergência</strong>,
          o plano não pode usar a carência como justificativa para negar o
          atendimento — independentemente de quantos dias você contribui.
          Após as primeiras 24 horas de contrato, o atendimento de urgência
          é garantido por lei.
        </p>
        <p>
          No caso de Manaus, mesmo que a paciente ainda estivesse dentro do
          prazo de carência, a suspeita de câncer tornava o procedimento
          urgente — o que afastava qualquer alegação de carência como argumento
          válido para a negativa.
        </p>
      </section>

      <section id="dano-moral" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Dano moral: quando o plano de saúde deve indenizar
        </h2>
        <p className="mb-4">
          O dano moral em casos de plano de saúde não exige prova de sofrimento
          psicológico documentada. A Justiça reconhece que determinadas situações
          geram angústia por sua própria natureza — e a espera injustificada por
          um exame de saúde, especialmente com suspeita de doença grave, é uma
          delas.
        </p>

        <h3 className="text-xl font-semibold mb-3">
          Situações que costumam gerar indenização por danos morais
        </h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Negativa ou omissão diante de procedimento urgente ou de emergência</li>
          <li>Demora injustificada na análise de pedidos de autorização</li>
          <li>Negativa de cobertura para procedimentos cobertos pelo contrato ou pela ANS</li>
          <li>
            Alegação indevida de carência em situações de urgência e emergência
          </li>
          <li>Cancelamento abusivo do plano em momento de tratamento em curso</li>
          <li>
            Negativa de cobertura que força o paciente a arcar com os custos do
            próprio bolso
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">
          Qual o valor da indenização?
        </h3>
        <p className="mb-4">
          O valor varia conforme a gravidade do caso, o perfil do paciente e as
          consequências da falha do plano. No caso de Manaus, a indenização foi
          fixada em <strong>R$ 6.000,00</strong> — com caráter{" "}
          <em>compensatório e pedagógico</em>, para punir a empresa e evitar
          que a conduta se repita.
        </p>
        <p>
          Em casos mais graves — com agravamento do quadro de saúde, tratamento
          retardado ou pacientes em situação de vulnerabilidade —, os valores
          podem ser significativamente maiores. Tudo depende das circunstâncias
          específicas do seu caso.
        </p>
      </section>

      <section id="o-que-fazer" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          O que fazer na prática: passo a passo
        </h2>
        <p className="mb-4">
          Se o seu plano de saúde está demorando para responder ou negou um
          exame, siga estas etapas para proteger seus direitos:
        </p>
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Guarde o pedido médico original.</strong> O documento
            assinado pelo médico indicando a necessidade do procedimento é a
            peça mais importante da sua defesa.
          </li>
          <li>
            <strong>Protocole a solicitação no plano por escrito.</strong> E-mail,
            carta com AR ou formulário no aplicativo — qualquer meio que gere
            comprovante com data. Evite apenas o telefone sem confirmação escrita.
          </li>
          <li>
            <strong>Anote e guarde todos os prazos.</strong> Data do pedido,
            datas de follow-up, datas de qualquer resposta (ou falta dela). Esses
            registros são decisivos na Justiça.
          </li>
          <li>
            <strong>Solicite uma resposta formal por escrito.</strong> Se o plano
            negar, exija que a negativa seja entregue por escrito com a
            fundamentação. Se não responder, registre a omissão.
          </li>
          <li>
            <strong>Procure um advogado especialista imediatamente.</strong> Em
            casos de urgência, é possível obter uma{" "}
            <strong>tutela antecipada</strong> — uma decisão judicial liminar que
            obriga o plano a autorizar o procedimento em questão de dias, sem
            esperar o fim do processo.
          </li>
          <li>
            <strong>Não pague do próprio bolso sem orientação jurídica.</strong>{" "}
            Se for forçado a custear o procedimento, guarde todas as notas fiscais
            e recibos — esses valores podem ser reembolsados judicialmente.
          </li>
        </ol>
      </section>

      <section id="advogada" className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Por que contar com uma advogada especialista em Direito do Consumidor?
        </h2>
        <p className="mb-4">
          Casos contra planos de saúde têm uma característica importante: o
          tempo joga contra o paciente. Quanto mais tempo passa sem o tratamento,
          mais grave pode se tornar a situação de saúde — e isso é considerado
          pela Justiça na fixação da indenização.
        </p>
        <p className="mb-4">
          Uma advogada especialista em Direito do Consumidor pode:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            Analisar seu contrato e identificar se a negativa é abusiva ou
            ilegítima
          </li>
          <li>
            Reunir a documentação necessária para embasar o pedido judicial
          </li>
          <li>
            Ingressar com pedido de <strong>tutela de urgência</strong> para
            forçar a realização do procedimento rapidamente — sem esperar
            anos pelo fim da ação
          </li>
          <li>
            Calcular e pleitear a indenização por danos morais e materiais
            devidos
          </li>
          <li>
            Garantir que nenhum prazo prescricional seja perdido (o prazo
            para ações com base no CDC é de <strong>5 anos</strong>)
          </li>
        </ul>
        <p>
          Se você está passando por isso, é possível resolver rapidamente na
          Justiça — inclusive com decisão liminar que obriga o plano a
          autorizar o exame <em>antes mesmo</em> da audiência.
        </p>
      </section>

      <div className="mt-12 bg-blue-50 border border-blue-200 p-6 rounded-xl text-center">
        <h3 className="text-xl font-bold mb-2">
          Seu plano de saúde negou ou ignorou seu pedido de exame?
        </h3>
        <p className="mb-4">
          Agende uma consulta com a Dra. Juliana Rodrigues. Em casos urgentes,
          é possível obter uma decisão judicial em poucos dias. Não espere sua
          saúde piorar para agir.
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

      <SocialShare title={post.title} />

      <div className="border-t pt-8">
        <h3 className="text-xl font-semibold mb-4">Leia também:</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/overbooking" className="text-blue-600 hover:underline">
              Overbooking: O que é, Seus Direitos e Como Ser Indenizado
            </Link>
          </li>
          <li>
            <Link href="/blog/rescisao-indireta" className="text-blue-600 hover:underline">
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

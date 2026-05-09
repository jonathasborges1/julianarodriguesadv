import { Briefcase, ShieldCheck, ArrowRight } from "lucide-react";

type Area = {
  title: string;
  description: string;
  topics: string[];
  whatsappMedium: string;
};

const areas: Area[] = [
  {
    title: "Direito do Trabalho",
    description:
      "Defesa de trabalhadores e empresas em demandas trabalhistas, com análise técnica do caso e busca pela melhor solução — judicial ou extrajudicial.",
    topics: [
      "Rescisão contratual e cálculo de verbas rescisórias",
      "Justa causa e rescisão indireta",
      "Reintegração e estabilidade no emprego",
      "Horas extras, adicional noturno e intervalos",
      "Insalubridade e periculosidade",
      "Acidente de trabalho e doença ocupacional",
      "Assédio moral e sexual no ambiente de trabalho",
      "Consultoria preventiva para empregadores",
    ],
    whatsappMedium: "areas_trabalhista",
  },
  {
    title: "Direito do Consumidor",
    description:
      "Atuação contra práticas abusivas de empresas, bancos, planos de saúde e companhias aéreas, com base no CDC e na jurisprudência consolidada.",
    topics: [
      "Negativa e demora de plano de saúde",
      "Descontos indevidos no salário ou no INSS",
      "Cobranças abusivas de bancos e telecom",
      "Atraso, cancelamento de voo e overbooking",
      "Produto com defeito e problemas de garantia",
      "Compras on-line: não entrega e chargeback",
      "Cobrança após o pagamento e nome negativado",
      "Indenização por danos morais e materiais",
    ],
    whatsappMedium: "areas_consumidor",
  },
];

export const AreasDeAtuacao = () => {
  return (
    <section
      id="areas"
      className="scroll-mt-12 md:scroll-mt-8 bg-white py-16 px-4 sm:px-6 md:px-12 flex flex-col items-center"
    >
      <div className="max-w-7xl w-full">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 relative pb-4">
            Áreas de Atuação
            <span className="block w-20 sm:w-24 h-1 bg-[#00274B] absolute bottom-0 left-1/2 -translate-x-1/2"></span>
          </h2>
          <p className="mt-6 max-w-2xl text-gray-700 text-base sm:text-lg leading-relaxed">
            Atendimento focado em duas áreas, com prática consolidada em
            Manaus/AM e on-line para todo o Brasil.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {areas.map((area, idx) => {
            const Icon = idx === 0 ? Briefcase : ShieldCheck;
            return (
              <article
                key={area.title}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 flex flex-col"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#00274B] text-white">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    {area.title}
                  </h3>
                </div>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  {area.description}
                </p>

                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-gray-800 text-sm">
                  {area.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2">
                      <span
                        className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-[#DAA520] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <a
                    href={`https://api.whatsapp.com/send?phone=5592982301415&utm_source=landingpage&utm_medium=${area.whatsappMedium}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#00274B] font-semibold hover:gap-3 transition-all"
                  >
                    Conversar sobre meu caso
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// src/components/FaqSection/FaqSection.tsx
"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqList = [
  {
    question: "Como posso agendar uma consulta com a Dra. Juliana Rodrigues?",
    answer:
      "Você pode agendar sua consulta pelo WhatsApp ou através do formulário de contato disponível neste site. O atendimento pode ser presencial em Manaus ou online para todo o Brasil.",
  },
  {
    question: "A Dra. Juliana Rodrigues é especializada em quais áreas?",
    answer:
      "A Dra. Juliana é advogada especializada em Direito Trabalhista, atuando em casos de justa causa, rescisão indireta, reintegração no emprego, assédio moral e cálculo de verbas rescisórias.",
  },
  {
    question: "O que é rescisão indireta e como funciona?",
    answer:
      "A rescisão indireta é o direito do trabalhador de encerrar o contrato de trabalho por culpa do empregador, em situações como atrasos frequentes de salário, assédio ou exigência de tarefas fora do contrato.",
  },
  {
    question: "O que fazer quando sou demitido por justa causa?",
    answer:
      "Se você foi demitido por justa causa e acredita que foi injustamente penalizado, a Dra. Juliana pode analisar o caso e propor medidas judiciais para reverter a decisão e buscar seus direitos.",
  },
  {
    question: "A Dra. Juliana atende clientes em Adrianópolis, Manaus?",
    answer:
      "Sim. A Dra. Juliana realiza atendimentos presenciais em Adrianópolis, um dos principais bairros de Manaus, além de oferecer consultas jurídicas online.",
  },
  {
    question: "É possível ser reintegrado ao emprego após ser demitido?",
    answer:
      "Sim, em casos de demissão ilegal, especialmente quando o trabalhador tem estabilidade provisória, é possível solicitar judicialmente a reintegração ao emprego.",
  },
  {
    question: "Quais direitos o trabalhador tem ao ser demitido?",
    answer:
      "Ao ser demitido, o trabalhador pode ter direito a saldo de salário, aviso prévio, férias proporcionais, 13º salário, FGTS com multa e seguro-desemprego. Cada caso deve ser analisado individualmente.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqList.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(faqStructuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section
      className="relative bg-white py-16 px-4 sm:px-6 md:px-12 flex flex-col items-center"
      id="perguntas-frequentes"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 relative pb-4 text-center">
        Perguntas Frequentes
        <span className="block w-20 sm:w-24 h-1 bg-[#00274B] absolute bottom-0 left-1/2 transform -translate-x-1/2"></span>
      </h2>

      <div className="mt-10 w-full max-w-3xl space-y-4">
        {faqList.map(({ question, answer }, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center text-left px-6 py-4 bg-white hover:bg-gray-50 transition-colors"
                onClick={() =>
                  setOpenIndex((prev) => (prev === index ? null : index))
                }
              >
                <span className="text-base sm:text-lg font-medium text-[#000]">
                  {question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 text-[#00274B] ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden px-6 pb-2 text-[#00274B] text-sm sm:text-base ${
                  isOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="pt-2 leading-relaxed">{answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export { Faq };

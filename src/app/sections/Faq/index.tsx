import { faqList } from "./faqList";
import { FaqAccordion } from "./FaqAccordion";

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

const Faq = () => {
  return (
    <section
      className="relative bg-white py-16 px-4 sm:px-6 md:px-12 flex flex-col items-center"
      id="perguntas-frequentes"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 relative pb-4 text-center">
        Perguntas Frequentes
        <span className="block w-20 sm:w-24 h-1 bg-[#00274B] absolute bottom-0 left-1/2 transform -translate-x-1/2"></span>
      </h2>

      <FaqAccordion items={faqList} />
    </section>
  );
};

export { Faq };

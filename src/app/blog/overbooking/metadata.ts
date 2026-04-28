import { Metadata } from "next";
import { SITE_URL } from "@/lib/config";

export const post = {
  slug: "overbooking",
  title: "Overbooking: O que é, Seus Direitos e Como Ser Indenizado",
  excerpt:
    "Sofreu overbooking em voo ou hotel? Entenda o que a lei garante, quais indenizações você pode receber e como agir para não perder seus direitos.",
  thumbnail: "/images/blog/overbooking.jpg",
  alt: "Passageiro impedido de embarcar por overbooking em aeroporto",
  date: "27 de Abril, 2026",
};

export const generateMetadata = async (): Promise<Metadata> => {
  const url = `${SITE_URL}/blog/overbooking`;
  const title = post.title;
  const description = post.excerpt;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: `${SITE_URL}${post.thumbnail}`,
          width: 1200,
          height: 630,
          alt: "Passageiro impedido de embarcar por overbooking em aeroporto",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${post.thumbnail}`],
    },
    keywords: [
      "overbooking",
      "o que é overbooking",
      "overbooking direitos do passageiro",
      "indenização por overbooking",
      "overbooking companhia aérea",
      "o que fazer em caso de overbooking",
      "preterição de embarque",
      "negativa de embarque",
      "overbooking hotel",
      "dano moral overbooking",
      "cancelamento de voo indenização",
      "ANAC resolução 400",
      "Código de Defesa do Consumidor voo",
      "advogada direito do consumidor Manaus",
      "processar companhia aérea",
      "voo cancelado direitos",
      "reacomodação de passageiro",
    ],
  };
};

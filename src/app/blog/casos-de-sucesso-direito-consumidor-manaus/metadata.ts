import { Metadata } from "next";
import { SITE_URL, canonicalUrl } from "@/lib/config";

export const post = {
  slug: "casos-de-sucesso-direito-consumidor-manaus",
  title:
    "Casos de Sucesso no Direito do Consumidor em Manaus",
  excerpt:
    "Casos reais de cobrança indevida, reembolso negado e plano de saúde em Manaus. Veja quando buscar indenização.",
  thumbnail: "/images/blog/casos-de-sucesso-direito-consumidor-manaus.webp",
  alt: "Casos de sucesso em Direito do Consumidor em Manaus com destaque jurídico premium",
  date: "9 de Maio, 2026",
  time: "15:30",
};

export const generateMetadata = async (): Promise<Metadata> => {
  const url = canonicalUrl(`/blog/${post.slug}`);
  const title = post.title;
  const description = post.excerpt;

  return {
    title,
    description,
    authors: [{ name: "Anne Caroline Castro Silva" }],
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
          alt: post.alt,
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
      "direito do consumidor Manaus",
      "advogado direito do consumidor Manaus",
      "cobrança indevida",
      "indenização por cobrança indevida",
      "danos morais consumidor",
      "cobrança abusiva de energia",
      "problema com concessionária",
      "empresa não devolveu dinheiro",
      "plano de saúde negou exame",
      "reembolso de passagens",
      "advogado em Manaus",
      "consumidor Manaus AM",
      "cobrança indevida de água",
      "negativa de exame plano de saúde",
    ],
  };
};

import { Metadata } from "next";
import { SITE_URL, canonicalUrl } from "@/lib/config";

export const post = {
  slug: "plano-de-saude-negou-exame",
  title: "Plano Negou Exame Urgente? Quando Cabe Indenização",
  excerpt:
    "Omissão do plano de saúde pode gerar indenização. Entenda quando a demora ou falta de resposta viola seus direitos em Manaus.",
  thumbnail: "/images/blog/plano-de-saude-negou-exame.webp",
  alt: "Paciente aguardando autorização de plano de saúde para exame urgente",
  date: "27 de Abril, 2026",
  time: "10:00",
};

export const generateMetadata = async (): Promise<Metadata> => {
  const url = canonicalUrl("/blog/plano-de-saude-negou-exame");
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
      "plano de saúde negou exame Manaus",
      "demora plano de saúde exame urgente",
      "negativa plano de saúde indenização",
      "advogado plano de saúde Manaus",
      "exame urgente plano de saúde carência ilegal",
      "plano de saúde não responde exame",
      "omissão plano de saúde negativa indireta",
      "dano moral plano de saúde",
      "plano de saúde urgência carência abusiva",
      "Súmula 597 STJ plano de saúde",
      "Súmula 608 STJ",
      "indenização plano de saúde Manaus",
      "CDC plano de saúde responsabilidade objetiva",
      "plano de saúde silêncio negativa",
      "advogada direito do consumidor Manaus",
    ],
  };
};

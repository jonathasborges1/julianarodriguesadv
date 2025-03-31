// blog/justa-causa/metadata.ts
import { Metadata } from "next";
import { SITE_URL } from "@/lib/config";

export const post = {
  slug: "justa-causa",
  title: "Justa Causa: Entenda seus Direitos e Deveres",
  excerpt:
    "Entenda o que é justa causa, quais faltas podem motivar essa demissão e como agir se você considerar injusta essa decisão.",
  thumbnail: "/images/blog/justa-causa.jpg",
  alt: "Justa causa no ambiente de trabalho",
  date: "28 de Março, 2025",
};

export const generateMetadata = async (): Promise<Metadata> => {
  const url = `${SITE_URL}/blog/justa-causa`;
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
          alt: "Justa causa no ambiente de trabalho",
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
      "justa causa",
      "demissão por justa causa",
      "advogada trabalhista Manaus",
      "direitos do trabalhador",
      "falta grave no trabalho",
    ],
  };
};

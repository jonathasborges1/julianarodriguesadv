import { SITE_URL } from "@/lib/config";
import { Metadata } from "next";

// /app/blog/reintegracao-no-emprego/metadata.ts
export const post = {
  slug: "reintegracao-no-emprego",
  title: "Reintegração no Emprego: Entenda seus Direitos",
  excerpt:
    "Descubra quando o trabalhador tem direito a ser reintegrado ao emprego e como funciona esse processo judicial.",
  thumbnail: "/images/blog/reintegracao.jpg",
  alt: "Reintegração no emprego",
  date: "12 de Março, 2025",
};

export const generateMetadata = async (): Promise<Metadata> => {
  const url = `${SITE_URL}/blog/${post.slug}`;
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
          alt: `${post.alt}`,
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
      "reintegração no emprego",
      "direito à reintegração",
      "demissão indevida",
      "reintegração por estabilidade",
      "estabilidade no emprego",
      "reintegração trabalhista",
      "ação de reintegração no trabalho",
      "advogada reintegração Manaus",
      "estabilidade gestante reintegração",
      "reintegração após acidente de trabalho",
      "reintegração servidor público",
      "como funciona reintegração no trabalho",
    ],
  };
};

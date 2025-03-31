import { SITE_URL } from "@/lib/config";
import { Metadata } from "next";

export const post = {
  slug: "rescisao-indireta",
  title: "Rescisão Indireta: Saiba Seus Direitos e Quando Solicitar",
  excerpt:
    "Entenda o que é a rescisão indireta, em quais situações ela pode ser aplicada e como buscar esse direito na Justiça do Trabalho.",
  thumbnail: "/images/blog/rescisao-indireta.jpg",
  alt: "Advogada explicando sobre rescisão indireta",
  date: "29 de Março, 2025",
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
      "rescisão indireta",
      "falta grave do empregador",
      "advogada trabalhista Manaus",
      "direitos do trabalhador",
      "justiça do trabalho",
    ],
  };
};

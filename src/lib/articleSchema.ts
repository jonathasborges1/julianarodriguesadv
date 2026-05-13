import { parsePostPublishedAt } from "@/lib/blog";
import { SITE_URL, canonicalUrl } from "@/lib/config";

interface ArticleSchemaPost {
  slug: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  date: string;
  time?: string;
}

export function buildArticleJsonLd(post: ArticleSchemaPost) {
  const url = canonicalUrl(`/blog/${post.slug}`);
  const publishedAt = parsePostPublishedAt(post).toISOString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.excerpt,
        image: {
          "@type": "ImageObject",
          url: `${SITE_URL}${post.thumbnail}`,
          width: 1200,
          height: 630,
        },
        url,
        datePublished: publishedAt,
        dateModified: publishedAt,
        inLanguage: "pt-BR",
        author: {
          "@type": "Person",
          "@id": `${SITE_URL}/#juliana`,
          name: "Juliana Rodrigues",
        },
        publisher: {
          "@type": "LegalService",
          "@id": `${SITE_URL}/#legalservice`,
          name: "Juliana Rodrigues - Advocacia",
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/images/logotipo-dra-juliana-2.webp`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: canonicalUrl("/blog"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: url,
          },
        ],
      },
    ],
  };
}

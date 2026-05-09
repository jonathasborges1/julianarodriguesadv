// /app/blog/page.tsx
import { Metadata } from "next";
import { BlogCard } from "@/components/Blog/BlogCard";
import { canonicalUrl, SITE_URL } from "@/lib/config";
import { loadBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog Jurídico | Advogada Trabalhista em Manaus",
  description:
    "Artigos sobre direitos trabalhistas, rescisão indireta, justa causa e mais. Dra. Juliana Rodrigues, advogada em Manaus.",
  alternates: { canonical: canonicalUrl("/blog") },
  openGraph: {
    title: "Blog Jurídico | Dra. Juliana Rodrigues",
    description:
      "Artigos sobre direitos trabalhistas, rescisão indireta, justa causa e mais.",
    url: canonicalUrl("/blog"),
    siteName: "Juliana Rodrigues Advocacia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/dra-juliana-rodrigues-advogada-trabalhista-manaus.jpg`,
        width: 1200,
        height: 630,
        alt: "Blog Jurídico - Dra. Juliana Rodrigues",
      },
    ],
  },
  keywords: [
    "blog jurídico trabalhista",
    "direitos trabalhistas Manaus",
    "artigos advocacia trabalhista",
    "advogada trabalhista Manaus",
    "dra juliana rodrigues blog",
  ],
};

export default async function BlogPage() {
  const posts = await loadBlogPosts();

  return (
    <main className="bg-white max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[#00274B] mb-10">
        Artigos do Blog
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </main>
  );
}

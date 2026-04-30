// /app/blog/page.tsx
import fs from "fs";
import path from "path";
import { Metadata } from "next";
import { BlogCard } from "@/components/Blog/BlogCard";
import { canonicalUrl, SITE_URL } from "@/lib/config";

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

interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  date: string;
}

const monthNumbers: Record<string, number> = {
  janeiro: 0,
  fevereiro: 1,
  marco: 2,
  abril: 3,
  maio: 4,
  junho: 5,
  julho: 6,
  agosto: 7,
  setembro: 8,
  outubro: 9,
  novembro: 10,
  dezembro: 11,
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

async function loadBlogPosts(): Promise<PostMeta[]> {
  const blogDir = path.join(process.cwd(), "src/app/blog");
  const entries = fs.readdirSync(blogDir, { withFileTypes: true });

  const posts: PostMeta[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const metaPath = path.join(blogDir, entry.name, "metadata.ts");

      if (fs.existsSync(metaPath)) {
        const mod = await import(`./${entry.name}/metadata`);
        posts.push(mod.post);
      }
    }
  }

  return posts.sort(
    (a, b) => parsePostDate(b.date).getTime() - parsePostDate(a.date).getTime()
  );
}

function parsePostDate(date: string): Date {
  const normalized = date
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(",", "")
    .trim();

  const match = normalized.match(/^(\d{1,2})\s+de\s+([a-z]+)\s+(\d{4})$/);

  if (!match) {
    return new Date(0);
  }

  const [, day, monthName, year] = match;
  const month = monthNumbers[monthName];

  if (month === undefined) {
    return new Date(0);
  }

  return new Date(Number(year), month, Number(day));
}

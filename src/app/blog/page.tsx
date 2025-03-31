// /app/blog/page.tsx
import fs from "fs";
import path from "path";
import { BlogCard } from "@/components/Blog/BlogCard";

interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  date: string;
}

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

// Função para ler dinamicamente os metadados
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

  // ✅ Ordenar por data real (mais recente primeiro)
  return posts.sort((a, b) => {
    const parseDate = (d: string) =>
      new Date(
        d
          .replace(" de ", "/")
          .replace(" de ", "/")
          .replace("Março", "03")
          .replace("Abril", "04")
          .replace("Maio", "05") // continue conforme os meses usados
          .replace("Janeiro", "01")
          .replace("Fevereiro", "02")
          .replace("Junho", "06")
          .replace("Julho", "07")
          .replace("Agosto", "08")
          .replace("Setembro", "09")
          .replace("Outubro", "10")
          .replace("Novembro", "11")
          .replace("Dezembro", "12")
      );

    return +parseDate(b.date) - +parseDate(a.date);
  });
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BlogCard } from "@/components/Blog/BlogCard";
import { loadBlogPosts } from "@/lib/blog";

export const BlogRecente = async () => {
  const posts = (await loadBlogPosts()).slice(0, 3);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section
      id="artigos"
      className="scroll-mt-12 md:scroll-mt-8 bg-[#F5F5F5] py-16 px-4 sm:px-6 md:px-12 flex flex-col items-center"
    >
      <div className="max-w-7xl w-full">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 relative pb-4">
              Artigos Recentes
              <span className="block w-20 sm:w-24 h-1 bg-[#00274B] absolute bottom-0 left-0"></span>
            </h2>
            <p className="mt-4 max-w-2xl text-gray-700 text-base sm:text-lg leading-relaxed">
              Conteúdo prático sobre Direito do Trabalho e do Consumidor — com
              base na lei e na jurisprudência atual.
            </p>
          </div>

          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-[#00274B] font-semibold hover:gap-3 transition-all"
          >
            Ver todos os artigos
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

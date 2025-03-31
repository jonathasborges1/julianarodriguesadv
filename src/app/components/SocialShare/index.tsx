"use client";

import { usePathname } from "next/navigation";
import { Facebook, Linkedin, Share2, Instagram } from "lucide-react";
import { SITE_URL } from "@/lib/config";
import { useState } from "react";

export function SocialShare({ title }: { title: string }) {
  const pathname = usePathname();
  const shareUrl = `${SITE_URL}${pathname}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar link:", err);
    }
  };

  return (
    <div className="mb-10">
      <p className="text-gray-600 mb-2 font-medium">
        Compartilhe este conteúdo:
      </p>
      <div className="flex gap-3 flex-wrap">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:opacity-90 transition"
          aria-label="Compartilhar no Facebook"
        >
          <Facebook size={18} />
          Facebook
        </a>

        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedTitle}&source=julianarodriguesadv.com.br`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2 hover:opacity-90 transition"
        >
          <Linkedin size={18} />
          LinkedIn
        </a>

        <a
          href="https://www.instagram.com/julianarodrigues.advogada"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:opacity-90 transition"
        >
          <Instagram size={18} />
          Instagram
        </a>

        <button
          onClick={handleCopy}
          className="bg-gray-700 text-white px-4 py-2 rounded flex items-center gap-2 hover:opacity-90 transition cursor-pointer"
        >
          <Share2 size={18} />
          {copied ? "Link copiado!" : "Copiar link"}
        </button>
      </div>
    </div>
  );
}

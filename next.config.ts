import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Necessário para Cloudflare Pages
  distDir: "out", // Define o diretório de saída para "out"
  trailingSlash: true, // Adiciona barra no final das URLs, compatível com export estático
  images: {
    unoptimized: true, // Evita otimização de imagens no Cloudflare Pages
  },
};

export default nextConfig;

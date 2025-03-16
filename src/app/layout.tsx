import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";

// 🔹 Configurando a fonte Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", // Variável CSS para ser usada no Tailwind
  weight: ["300", "400", "500", "600", "700"], // Define pesos da fonte (regular, semi-bold, bold)
  display: "swap", // Melhora o carregamento da fonte
});

// 🔹 SEO otimizado para a Dra. Juliana Rodrigues
export const metadata: Metadata = {
  title: "Dra. Juliana Rodrigues - Advogada Trabalhista em Manaus",
  description:
    "Advogada trabalhista em Manaus com atendimento presencial na sede da OAB e online para todo o Brasil. Especializada em direitos trabalhistas, rescisões e ações na Justiça do Trabalho.",
  keywords: [
    "advogada trabalhista Manaus",
    "direito do trabalho",
    "advogado OAB Manaus",
    "rescisão trabalhista",
    "direitos do trabalhador",
  ],
  authors: [{ name: "Dra. Juliana Rodrigues" }],
  openGraph: {
    title: "Dra. Juliana Rodrigues - Advogada Trabalhista em Manaus",
    description:
      "Atendimento jurídico especializado em Direito Trabalhista para trabalhadores e empresas. Sede da OAB em Manaus e atendimento online.",
    url: "https://julianarodriguesadv.com.br",
    siteName: "Dra. Juliana Rodrigues - Advocacia Trabalhista",
    images: [
      {
        url: "/images/dra-juliana-rodrigues-advogada-trabalhista.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Juliana Rodrigues - Advogada Trabalhista em Manaus",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}

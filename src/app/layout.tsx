import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { SITE_URL } from "@/lib/config";

import "./globals.css";
import { LoadingScreen } from "./components/LoadingApp/LoadingScreen";
import { LogToBrowser } from "./components/LogToBrowser/LogToBrowser";
import { VersionLogger } from "./components/VersionLogger/VersionLogger";

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
  verification: {
    google: "-aEdvna45HfuoQzvEtZiYF0J6Q6snzapEc1lmIuTmGU",
  },
  alternates: {
    canonical: SITE_URL,
  },
  keywords: [
    "advogada trabalhista manaus",
    "advogada manaus",
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
    url: SITE_URL,
    siteName: "Dra. Juliana Rodrigues - Advocacia Trabalhista",
    images: [
      {
        url: `${SITE_URL}/images/dra-juliana-rodrigues-advogada-trabalhista-manaus.jpg`,
        width: 1200,
        height: 630,
        alt: "Dra. Juliana Rodrigues - Advogada Trabalhista em Manaus",
      },
    ],
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body>
        <LogToBrowser url={SITE_URL} />
        <VersionLogger />
        <LoadingScreen />

        {children}

        {/* ✅ Schema.org para LegalService (SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Dra. Juliana Rodrigues",
              image: `${SITE_URL}/images/dra-juliana-rodrigues-advogada-trabalhista-manaus.jpg`,
              url: SITE_URL,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Manaus",
                addressCountry: "BR",
              },
              priceRange: "Sob consulta",
              areaServed: "BR",
              sameAs: ["https://www.instagram.com/julianarodrigues.advogada"],
            }),
          }}
        />
      </body>
    </html>
  );
}

import "./globals.css";
import Head from "next/head";
import Script from "next/script";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { SITE_URL } from "@/lib/config";
import ThemeRegistry from "@/lib/ThemeRegistry";

import { LoadingApp } from "@/components/LoadingApp";
import { LogToBrowser } from "@/components/LogToBrowser/LogToBrowser";
import { VersionLogger } from "@/components/VersionLogger/VersionLogger";

import { NotistackProvider } from "@/providers/SnackbarProvider";

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
    "Advogada trabalhista em Manaus com atendimento na OAB e online para todo o Brasil. Especialista em direitos trabalhistas, rescisões e ações judiciais.",
  icons: {
    icon: "/favicon.ico", // ícone padrão
    shortcut: "/favicon-32x32.png", // fallback
    apple: "/apple-touch-icon.png", // Apple
  },
  manifest: "/site.webmanifest",
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
        alt: "Dra. Juliana Rodrigues - Advogada Trabalhista em Manaus",
        url: `${SITE_URL}/images/dra-juliana-rodrigues-advogada-trabalhista-manaus.jpg`,
        width: 1200,
        height: 630,
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
      <Head>
        <meta name="apple-mobile-web-app-title" content="Juliana Adv" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <NotistackProvider>
          <ThemeRegistry>
            <LogToBrowser url={SITE_URL} />
            <VersionLogger />
            <LoadingApp />
            {children}
          </ThemeRegistry>
        </NotistackProvider>

        {/* ✅ Schema.org para LegalService (SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Juliana Rodrigues",
              image: `${SITE_URL}/images/dra-juliana-rodrigues-advogada-trabalhista-manaus.jpg`,
              url: SITE_URL,
              address: {
                "@type": "PostalAddress",
                streetAddress: "R. Salvador, 120 - Adrianópolis",
                addressLocality: "Manaus",
                postalCode: "69057-040",
                addressCountry: "BR",
              },
              telephone: "+55 92 98230-1415",
              areaServed: "BR",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "08:00",
                closes: "18:00",
              },
              priceRange: "Sob consulta",
              sameAs: ["https://www.instagram.com/julianarodrigues.advogada"],
            }),
          }}
        />
        {/* ✅ Schema.org para a Pessoa (Person) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Juliana Rodrigues",
              jobTitle: "Advogada Trabalhista",
              image: `${SITE_URL}/images/dra-juliana-rodrigues-advogada-trabalhista-manaus.jpg`,
              worksFor: {
                "@type": "LegalService",
                name: "Juliana Rodrigues - Advocacia Trabalhista",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "R. Salvador, 120 - Adrianópolis",
                addressLocality: "Manaus",
                addressRegion: "AM",
                postalCode: "69057-040",
                addressCountry: "BR",
              },
              sameAs: ["https://www.instagram.com/julianarodrigues.advogada"],
            }),
          }}
        />

        {/* ✅ Schema.org para BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
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
                  name: "Sobre",
                  item: `${SITE_URL}/#sobre`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Localizacao",
                  item: `${SITE_URL}/#localizacao`,
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Contato",
                  item: `${SITE_URL}/#contato`,
                },
              ],
            }),
          }}
        />

        {/* Pixel do Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16948823866"
          strategy="afterInteractive"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-16948823866');
      `}
        </Script>
      </body>
    </html>
  );
}

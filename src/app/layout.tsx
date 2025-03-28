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

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dra. Juliana Rodrigues - Advogada Trabalhista em Manaus",
  description:
    "Advogada trabalhista em Manaus com atendimento na OAB e online para todo o Brasil. Especialista em direitos trabalhistas, rescisões e ações judiciais.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
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
        {/* Título do Web App para dispositivos móveis */}
        <meta name="apple-mobile-web-app-title" content="Juliana Adv" />
        <meta name="application-name" content="Juliana Adv" />

        {/* Favicon SVG moderno */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* Favicon ICO completo com múltiplos tamanhos */}
        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
          sizes="16x16 32x32 48x48"
        />

        {/* PNG fallback para navegadores que não suportam SVG */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/favicon-48x48.png"
        />

        {/* Apple Touch Icon para iOS */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* Manifesto (já presente, mas mantendo aqui para referência) */}
        <link rel="manifest" href="/site.webmanifest" />
        {/* ✅ JSON-LD estruturado centralizado */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#website`,
                  url: SITE_URL,
                  name: "Juliana Rodrigues - Advocacia Trabalhista",
                  description: metadata.description,
                  inLanguage: "pt-BR",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: `${SITE_URL}/?s={search_term_string}`,
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "WebPage",
                  "@id": `${SITE_URL}/#webpage`,
                  url: SITE_URL,
                  name: metadata.title,
                  isPartOf: { "@id": `${SITE_URL}/#website` },
                  primaryImageOfPage: {
                    "@id": `${SITE_URL}/images/dra-juliana-rodrigues-advogada-trabalhista-manaus.jpg`,
                  },
                  breadcrumb: { "@id": `${SITE_URL}/#breadcrumb` },
                  inLanguage: "pt-BR",
                },
                {
                  "@type": "Person",
                  "@id": `${SITE_URL}/#juliana`,
                  name: "Juliana Rodrigues",
                  jobTitle: "Advogada Trabalhista",
                  image: `${SITE_URL}/images/dra-juliana-rodrigues-advogada-trabalhista-manaus.jpg`,
                  worksFor: {
                    "@type": "LegalService",
                    name: "Juliana Rodrigues - Advocacia Trabalhista",
                  },
                  alumniOf: {
                    "@type": "CollegeOrUniversity",
                    name: "UniNorte",
                  },
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Rua Salvador, 120 - Adrianópolis",
                    addressLocality: "Manaus",
                    addressRegion: "AM",
                    postalCode: "69057-040",
                    addressCountry: "BR",
                  },
                  telephone: "+55 92 98230-1415",
                  email: "julianasouzarodrigues.adv@gmail.com",
                  sameAs: [
                    "https://wa.me/5592982301415",
                    "https://www.instagram.com/julianarodrigues.advogada",
                  ],
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": `${SITE_URL}/#breadcrumb`,
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
                      name: "Localização",
                      item: `${SITE_URL}/#localizacao`,
                    },
                    {
                      "@type": "ListItem",
                      position: 4,
                      name: "Contato",
                      item: `${SITE_URL}/#contato`,
                    },
                  ],
                },
              ],
            }),
          }}
        />
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

        {/* 🎯 Google Ads / Analytics */}
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

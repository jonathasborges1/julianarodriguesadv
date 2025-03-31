import "./globals.css";
import Script from "next/script";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { SITE_URL } from "@/lib/config";
import ThemeRegistry from "@/lib/ThemeRegistry";

import { LoadingApp } from "@/components/LoadingApp";

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
    google: "7aA66MJ9d3jINANAHZhtgJRAVdWSQzU8UWUGj5onEuQ",
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
      <head>
        <meta name="apple-mobile-web-app-title" content="Juliana Adv" />
        <meta name="application-name" content="Juliana Adv" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
          sizes="16x16 32x32 48x48"
        />
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
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <Script id="gtm-head" strategy="beforeInteractive">
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-553P2MZD');
      `}
        </Script>
      </head>

      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-553P2MZD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
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
                  description:
                    "Advogada trabalhista em Manaus com atendimento na OAB e online para todo o Brasil. Especialista em direitos trabalhistas, rescisões e ações judiciais.",
                  inLanguage: "pt-BR",
                  // potentialAction: {
                  //   "@type": "SearchAction",
                  //   target: `${SITE_URL}/?s={search_term_string}`,
                  //   "query-input": "required name=search_term_string",
                  // },
                },
                {
                  "@type": "WebPage",
                  "@id": `${SITE_URL}/#webpage`,
                  url: SITE_URL,
                  name: "Dra. Juliana Rodrigues - Advogada Trabalhista em Manaus",
                  isPartOf: { "@id": `${SITE_URL}/#website` },
                  primaryImageOfPage: {
                    "@id": `${SITE_URL}/images/dra-juliana-rodrigues-advogada-trabalhista-manaus.jpg`,
                  },
                  breadcrumb: { "@id": `${SITE_URL}/#breadcrumb` },
                  inLanguage: "pt-BR",
                },
                {
                  "@type": "LegalService",
                  "@id": `${SITE_URL}/#legalservice`,
                  name: "Juliana Rodrigues - Advocacia Trabalhista",
                  image: `${SITE_URL}/images/dra-juliana-rodrigues-advogada-trabalhista-manaus.jpg`,
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Rua Salvador, 120 - Adrianópolis",
                    addressLocality: "Manaus",
                    addressRegion: "AM",
                    postalCode: "69057-040",
                    addressCountry: "BR",
                  },
                  telephone: "+55 92 98230-1415",
                  priceRange: "Sob consulta",
                  url: SITE_URL,
                },
                {
                  "@type": "Person",
                  "@id": `${SITE_URL}/#juliana`,
                  name: "Dra. Juliana Rodrigues",
                  jobTitle: "Advogada Trabalhista",
                  image: `${SITE_URL}/images/dra-juliana-rodrigues-advogada-trabalhista-manaus.jpg`,
                  worksFor: {
                    "@id": `${SITE_URL}/#legalservice`,
                  },
                  alumniOf: {
                    "@type": "CollegeOrUniversity",
                    name: "UniNorte",
                  },
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

        <NotistackProvider>
          <ThemeRegistry>
            <VersionLogger />
            <LoadingApp />
            {children}
          </ThemeRegistry>
        </NotistackProvider>
      </body>
    </html>
  );
}

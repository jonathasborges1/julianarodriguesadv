import "./globals.css";
import Script from "next/script";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { SITE_URL } from "@/lib/config";
import ThemeRegistry from "@/lib/ThemeRegistry";

import { VersionLogger } from "@/components/VersionLogger/VersionLogger";
import { NotistackProvider } from "@/providers/SnackbarProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Juliana Rodrigues - Advogada Trabalhista e do Consumidor em Manaus",
  description:
    "Advogada em Manaus com atuação em Direito do Trabalho e Direito do Consumidor. Atendimento presencial em Adrianópolis e on-line para todo o Brasil.",
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
    "advogada do consumidor manaus",
    "advogada manaus",
    "direito do trabalho",
    "direito do consumidor",
    "advogado OAB Manaus",
    "rescisão trabalhista",
    "plano de saúde negou exame",
    "atraso de voo indenização",
    "descontos indevidos consignado",
    "direitos do trabalhador",
  ],
  authors: [{ name: "Juliana Rodrigues" }],
  openGraph: {
    title:
      "Juliana Rodrigues - Advogada Trabalhista e do Consumidor em Manaus",
    description:
      "Atuação em Direito do Trabalho e Direito do Consumidor para trabalhadores, empresas e consumidores. Atendimento em Adrianópolis (Manaus) e on-line.",
    url: SITE_URL,
    siteName: "Juliana Rodrigues - Advocacia Trabalhista",
    images: [
      {
        alt: " Juliana Rodrigues - Advogada Trabalhista em Manaus",
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
                  name: "Juliana Rodrigues - Advocacia",
                  description:
                    "Advogada em Manaus com atuação em Direito do Trabalho e Direito do Consumidor. Atendimento presencial em Adrianópolis e on-line para todo o Brasil.",
                  inLanguage: "pt-BR",
                },
                {
                  "@type": "LegalService",
                  "@id": `${SITE_URL}/#legalservice`,
                  name: "Juliana Rodrigues - Advocacia",
                  description:
                    "Advocacia em Direito do Trabalho e Direito do Consumidor em Manaus, com atendimento presencial e on-line.",
                  image: `${SITE_URL}/images/dra-juliana-rodrigues-advogada-trabalhista-manaus.jpg`,
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Rua Salvador, 120 - Adrianópolis",
                    addressLocality: "Manaus",
                    addressRegion: "AM",
                    postalCode: "69057-040",
                    addressCountry: "BR",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: -3.1079797,
                    longitude: -60.0147917,
                  },
                  telephone: "+55 92 98230-1415",
                  email: "julianasouzarodrigues.adv@gmail.com",
                  priceRange: "Sob consulta",
                  url: SITE_URL,
                  areaServed: [
                    { "@type": "City", name: "Manaus" },
                    { "@type": "State", name: "Amazonas" },
                    { "@type": "Country", name: "Brasil" },
                  ],
                  serviceType: [
                    "Direito do Trabalho",
                    "Direito do Consumidor",
                  ],
                  knowsAbout: [
                    "Rescisão indireta",
                    "Justa causa",
                    "Reintegração no emprego",
                    "Horas extras",
                    "Insalubridade e periculosidade",
                    "Acidente de trabalho",
                    "Negativa de plano de saúde",
                    "Descontos indevidos no INSS",
                    "Atraso e cancelamento de voo",
                    "Cobranças abusivas",
                  ],
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
                  sameAs: [
                    "https://www.instagram.com/julianarodrigues.advogada",
                    "https://www.facebook.com/profile.php?id=61552505172203",
                  ],
                },
                {
                  "@type": "Person",
                  "@id": `${SITE_URL}/#juliana`,
                  name: "Juliana Rodrigues",
                  jobTitle: "Advogada",
                  description:
                    "Advogada inscrita na OAB-AM nº 10547, com atuação em Direito do Trabalho e Direito do Consumidor.",
                  image: `${SITE_URL}/images/dra-juliana-rodrigues-advogada-trabalhista-manaus.jpg`,
                  worksFor: {
                    "@id": `${SITE_URL}/#legalservice`,
                  },
                  alumniOf: {
                    "@type": "CollegeOrUniversity",
                    name: "UniNorte",
                  },
                  knowsAbout: [
                    "Direito do Trabalho",
                    "Direito do Consumidor",
                  ],
                  sameAs: [
                    "https://wa.me/5592982301415",
                    "https://www.instagram.com/julianarodrigues.advogada",
                    "https://www.facebook.com/profile.php?id=61552505172203",
                  ],
                },
              ],
            }),
          }}
        />

        <NotistackProvider>
          <ThemeRegistry>
            <VersionLogger />
            {children}
          </ThemeRegistry>
        </NotistackProvider>
      </body>
    </html>
  );
}

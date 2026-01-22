import type { Metadata } from "next";
import { Cormorant_Garamond, JetBrains_Mono, Manrope } from "next/font/google";
import Script from "next/script";
import Header from "@/components/layout/Header";
import JsonLd from "@/components/seo/JsonLd";
import VideoBackground from "@/components/ui/VideoBackground";
import { baseUrl, siteName, sameAsLinks } from "@/lib/seo";
import "./globals.css";

// Google Tag Manager ID
const GTM_ID = "GTM-WR93ZJ8C";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteTitle = `${siteName} | Analista de Dados Júnior | Power BI | SQL | Python | BI`;
const siteDescription =
  "Portfólio profissional de Matheus Siqueira — Analista de Dados Júnior com foco em Business Intelligence, Power BI, SQL, Python, dashboards, ETL e análise de dados.";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${baseUrl}/#website`,
  name: siteName,
  url: baseUrl,
  description: siteDescription,
  inLanguage: ["pt-BR", "en-US"],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${baseUrl}/#person`,
  name: "Matheus Siqueira",
  jobTitle: "Analista de Dados Júnior",
  email: "matheussiqueirahub@gmail.com",
  telephone: "+55 81 99920-3683",
  url: baseUrl,
  sameAs: sameAsLinks,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Recife",
    addressRegion: "Pernambuco",
    addressCountry: "BR",
  },
  knowsAbout: [
    "Power BI",
    "DAX",
    "Power Query",
    "SQL",
    "Python",
    "ETL",
    "Business Intelligence",
    "Data Analytics",
    "Dashboards",
    "Data Visualization",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "analista de dados júnior",
    "junior data analyst",
    "power bi",
    "sql",
    "python",
    "business intelligence",
    "bi",
    "dax",
    "power query",
    "etl",
    "dashboards",
    "data analytics",
    "data visualization",
    "kpis",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      "en-US": "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName,
    locale: "pt_BR",
    alternateLocale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${siteName} — Analista de Dados Júnior`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager - Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
        {/* Preload critical resources */}
        <link
          rel="preload"
          as="image"
          href="/profile.jpg"
        />
      </head>
      <body
        className={`${manrope.variable} ${cormorant.variable} ${jetBrainsMono.variable} min-h-screen antialiased`}
      >
        {/* Google Tag Manager - NoScript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[color:var(--surface)] focus:text-[color:var(--foreground)] focus:rounded-lg focus:font-medium focus:border focus:border-[color:var(--border)]"
        >
          Pular para o conteúdo principal
        </a>

        <JsonLd data={[websiteJsonLd, personJsonLd]} />
        <VideoBackground />
        <div className="app-shell">
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

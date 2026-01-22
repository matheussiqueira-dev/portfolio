import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import JsonLd from "@/components/seo/JsonLd";
import { baseUrl, siteName, sameAsLinks } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-black text-white`}
      >
        <JsonLd data={[websiteJsonLd, personJsonLd]} />
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}

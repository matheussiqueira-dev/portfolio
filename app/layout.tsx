import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import Header from "@/components/layout/Header";
import JsonLd from "@/components/seo/JsonLd";
import { baseUrl, sameAsLinks, siteName } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: false,
});

const siteDescription =
  "Analista de Dados e BI com foco em dados publicos, governo, Power BI, SQL, DAX e Python. Dashboards estrategicos, ETL e automacao para decisoes gerenciais.";
const siteKeywords = [
  "Data Analyst",
  "Business Intelligence",
  "Power BI",
  "SQL",
  "DAX",
  "Python",
  "Dados publicos",
  "Governo",
  "ETL",
  "Dashboards",
];

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteName} | Analista de Dados & BI`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: siteName, url: baseUrl }],
  creator: siteName,
  publisher: siteName,
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      "en-US": "/en",
      "x-default": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: `${siteName} | Analista de Dados & BI`,
    description: siteDescription,
    url: "/",
    siteName,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Matheus Siqueira | Analista de Dados & BI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Analista de Dados & BI`,
    description: siteDescription,
    images: ["/og.png"],
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteName,
    url: baseUrl,
    image: `${baseUrl}/profile.jpg`,
    jobTitle: "Data Analyst",
    description: siteDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Recife",
      addressRegion: "PE",
      addressCountry: "BR",
    },
    sameAs: sameAsLinks,
    knowsAbout: [
      "Business Intelligence",
      "Power BI",
      "SQL",
      "Python",
      "Public Data",
      "ETL",
      "Data Visualization",
      "Data Analysis",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: baseUrl,
    inLanguage: ["pt-BR", "en-US"],
    publisher: {
      "@type": "Person",
      name: siteName,
    },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const shouldInjectSpeedInsights = process.env.VERCEL === "1";

  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#0b0d10] text-slate-100 relative pt-16`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
          <div className="absolute -top-32 left-0 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl md:-top-40 md:h-72 md:w-72" />
          <div className="absolute top-6 right-0 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl md:top-10 md:h-96 md:w-96" />
          <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-white/5 blur-3xl md:h-80 md:w-80" />
        </div>
        <Header />
        <GoogleAnalytics />
        <JsonLd data={structuredData} />
        {children}
        {shouldInjectSpeedInsights ? <SpeedInsights /> : null}
      </body>
    </html>
  );
}

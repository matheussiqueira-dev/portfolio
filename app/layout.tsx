import type { Metadata } from "next";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
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
  "Portfólio profissional de Analista de Dados Júnior com foco em Business Intelligence, Power BI, SQL e Python. Dashboards, automação de análises e projetos em dados.";
const siteKeywords = [
  "Analista de Dados Júnior",
  "Data Analyst",
  "Business Intelligence",
  "Power BI",
  "SQL",
  "DAX",
  "Python",
  "ETL",
  "Dashboards",
  "Data Analytics",
  "Data Visualization",
];
const googleSiteVerification =
  process.env.NEXT_PUBLIC_GSC_VERIFICATION ||
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const gaId =
  process.env.NEXT_PUBLIC_GA_ID || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const gaTrackingId = gaId?.trim();
const personId = `${baseUrl}/#person`;
const websiteId = `${baseUrl}/#website`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteName} | Analista de Dados Júnior | Power BI | SQL | Python | BI`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: siteName, url: baseUrl }],
  creator: siteName,
  publisher: siteName,
  verification: {
    google: googleSiteVerification || undefined,
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
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: `${siteName} | Analista de Dados Júnior | Power BI | SQL | Python | BI`,
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
        alt: "Matheus Siqueira | Analista de Dados Júnior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Analista de Dados Júnior | Power BI | SQL | Python | BI`,
    description: siteDescription,
    images: ["/og.png"],
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: siteName,
    url: baseUrl,
    image: `${baseUrl}/profile.webp`,
    jobTitle: "Junior Data Analyst",
    description: siteDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Recife",
      addressRegion: "PE",
      addressCountry: "BR",
    },
    sameAs: sameAsLinks,
    knowsAbout: [
      "Data Analytics",
      "Business Intelligence",
      "Power BI",
      "SQL",
      "Python",
      "Data Visualization",
      "ETL",
      "Dashboards",
      "KPIs",
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "UNIFG",
      },
      {
        "@type": "EducationalOrganization",
        name: "UNINASSAU",
      },
      {
        "@type": "EducationalOrganization",
        name: "Infinity School",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "City College of San Francisco",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: siteName,
    url: baseUrl,
    inLanguage: ["pt-BR", "en-US"],
    publisher: {
      "@id": personId,
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
      <head>
        {gaTrackingId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        ) : null}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#0b0d10] text-slate-100 relative pt-16`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
          <div className="absolute -top-32 left-0 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl md:-top-40 md:h-72 md:w-72" />
          <div className="absolute top-6 right-0 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl md:top-10 md:h-96 md:w-96" />
          <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-white/5 blur-3xl md:h-80 md:w-80" />
        </div>
        <Header />
        <JsonLd data={structuredData} />
        {children}
        {shouldInjectSpeedInsights ? <SpeedInsights /> : null}
      </body>
    </html>
  );
}

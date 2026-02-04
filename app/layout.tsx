import type { Metadata } from "next";
import { JetBrains_Mono, Instrument_Sans, Sora } from "next/font/google";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import CursorGlow from "@/components/ui/CursorGlow";
import ScrollReveal from "@/components/ui/ScrollReveal";
import VideoBackground from "@/components/ui/VideoBackground";
import { baseUrl, buildAlternates, siteName, sameAsLinks } from "@/lib/seo";
import messages from "@/messages/pt.json";
import "./globals.css";

// Google Tag Manager ID
const GTM_ID = "GTM-WR93ZJ8C";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteTitle =
  "Matheus Siqueira | Desenvolvedor Full Stack & Engenharia de Dados";
const siteDescription =
  "Desenvolvedor Full Stack especializado em React, TypeScript, Python, SQL, Engenharia de Dados, Power BI e Azure Cloud.";

const stackKeywords = [
  "JavaScript",
  "TypeScript",
  "Python",
  "React.js",
  "Node.js",
  "SQL",
  "MongoDB",
  "Git",
  "GitHub",
  "HTML5",
  "CSS3",
  "Microsoft Azure",
  "Power BI",
  "Pandas",
  "REST API",
  "ETL",
  "Data Warehouse",
  "Tableau",
  "Oracle Database",
  "Shell Script",
];

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${baseUrl}/#website`,
  name: siteName,
  url: baseUrl,
  description: siteDescription,
  inLanguage: ["pt-BR", "en-US"],
  potentialAction: {
    "@type": "SearchAction",
    target: `${baseUrl}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${baseUrl}/#person`,
  name: "Matheus Siqueira",
  jobTitle: "Full Stack Developer, Data Engineer",
  description:
    "Desenvolvedor Full Stack e Data Engineer focado em aplicações web, dados e cloud",
  email: "matheussiqueirahub@gmail.com",
  telephone: "+55 81 99920-3683",
  url: baseUrl,
  image: `${baseUrl}/profile.jpg`,
  sameAs: sameAsLinks,
  inLanguage: ["pt-BR", "en-US"],
  knowsAbout: stackKeywords,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Recife",
    addressRegion: "Pernambuco",
    addressCountry: "BR",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Matheus Siqueira",
    "Full Stack Developer",
    "Data Engineer",
    "Software Engineer",
    ...stackKeywords,
  ],
  authors: [{ name: siteName, url: baseUrl }],
  alternates: {
    ...buildAlternates({ pt: "/", en: "/en", canonical: "/" }),
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
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
        // Replace with your social sharing image (1200x630).
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${siteName} — Desenvolvedor Full Stack`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    // Replace with your social sharing image (1200x630).
    images: ["/og.png"],
  },
  other: {
    language: "pt-BR",
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
    <html lang="pt-BR" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-init"
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
        {/* End Google Tag Manager */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = stored || (prefersDark ? 'dark' : 'light');
                  document.documentElement.dataset.theme = theme;
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* Preload critical resources */}
        <link
          rel="preload"
          as="image"
          href="/profile.jpg"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${sora.variable} ${instrumentSans.variable} ${jetBrainsMono.variable} min-h-screen antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[color:var(--surface)] focus:text-[color:var(--foreground)] focus:rounded-lg focus:font-medium focus:border focus:border-[color:var(--border)]"
        >
          Pular para o conteúdo principal
        </a>

        <JsonLd data={[websiteJsonLd, personJsonLd]} />
        <VideoBackground />
        <CursorGlow />
        <ScrollReveal />
        <NextIntlClientProvider locale="pt-BR" messages={messages}>
          <div className="app-shell">
            <Header />
            <div id="main-content" className="min-h-screen">
              {children}
            </div>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

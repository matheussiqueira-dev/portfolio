import type { Metadata } from "next";
import { Exo_2, Orbitron, Rajdhani } from "next/font/google";
import Script from "next/script";

import ThemeProvider from "@/components/system/ThemeProvider";
import WhatsAppButton from "@/components/system/WhatsAppButton";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import { rootMetadata } from "@/system/metadata";
import { buildPersonSchema, buildWebsiteSchema } from "@/system/seo";
import JsonLd from "@/ui/components/seo/JsonLd";
import "@/styles/encom-theme.css";
import "@/styles/globals.css";

const GTM_ID = "GTM-WR93ZJ8C";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "700", "800", "900"],
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-theme="dark" suppressHydrationWarning>
      <head>
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${orbitron.variable} ${rajdhani.variable} ${exo2.variable} min-h-screen antialiased`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:border focus:border-[color:var(--border)] focus:bg-[color:var(--surface)] focus:px-4 focus:py-2 focus:text-[color:var(--foreground)]"
        >
          Pular para o conteúdo principal
        </a>
        <ThemeProvider>
          <JsonLd data={[buildWebsiteSchema(), buildPersonSchema()]} />
          <BackgroundGrid />
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import { recruiterKeywords } from "@/core/constants";
import { canonicalOrigin, siteConfig } from "@/core/config";

export const defaultShareImage = siteConfig.ogImage;

export const rootMetadata: Metadata = {
  metadataBase: new URL(canonicalOrigin),
  applicationName: siteConfig.name,
  title: {
    default: `${siteConfig.name} | Data Analytics, BI, Software e AI`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Portfólio técnico de Matheus Siqueira com foco em Data Analytics, Business Intelligence, Power BI, Python automation, Next.js, IA aplicada e computer vision.",
  keywords: recruiterKeywords,
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Data Analytics, BI, Software e AI`,
    description:
      "Portfólio técnico com case studies, posicionamento para recrutadores e arquitetura preparada para Vercel.",
    url: siteConfig.siteUrl,
    locale: "pt_BR",
    alternateLocale: "en_US",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} technical portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Data Analytics, BI, Software e AI`,
    description:
      "Technical portfolio with case studies, recruiter-facing positioning, and Vercel-ready architecture.",
    images: [siteConfig.ogImage],
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
};

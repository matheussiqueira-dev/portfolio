import type { Metadata } from "next";
import PortfolioPage from "@/components/portfolio/PortfolioPage";
import { buildAlternates, siteName } from "@/lib/seo";

const homeTitle =
  "Matheus Siqueira | Full Stack Developer | React, Python, Data & Cloud";
const homeDescription =
  "Professional full stack developer portfolio focused on web applications, data engineering, BI, and scalable cloud solutions.";

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  alternates: {
    ...buildAlternates({ pt: "/", en: "/en", canonical: "/en" }),
  },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: "/en",
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Matheus Siqueira | Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: ["/og.png"],
  },
};

export default function HomeEn() {
  return <PortfolioPage locale="en" />;
}

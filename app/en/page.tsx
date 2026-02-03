import type { Metadata } from "next";
import About from "@/components/sections/About";
import CertificatesPreview from "@/components/sections/CertificatesPreview";
import Contact from "@/components/sections/Contact";
import ExecutiveSummary from "@/components/sections/ExecutiveSummary";
import Hero from "@/components/sections/Hero";
import MetricsSection from "@/components/sections/MetricsSection";
import Projects from "@/components/sections/Projects";
import Stack from "@/components/sections/Stack";
import JsonLd from "@/components/seo/JsonLd";
import { siteEn } from "@/data/site.en";
import { baseUrl, buildAlternates, siteName } from "@/lib/seo";

const homeTitle =
  "Matheus Siqueira | Full Stack Developer | React, Python, Data & Cloud";
const homeDescription =
  "Professional full stack developer portfolio focused on web applications, data engineering, BI, and scalable cloud solutions.";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: homeTitle,
  url: `${baseUrl}/en`,
  description: homeDescription,
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    name: siteName,
    url: baseUrl,
  },
};

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
  return (
    <main className="min-h-screen">
      <JsonLd data={homeJsonLd} />
      <Hero content={siteEn.hero} localePrefix="/en" />
      <ExecutiveSummary content={siteEn.executiveSummary} />
      <About content={siteEn.about} />
      <Stack content={siteEn.primaryStack} />
      <Projects />
      <MetricsSection content={siteEn.metrics} />
      <CertificatesPreview content={siteEn.certificatesSection} localePrefix="/en" />
      <Contact content={siteEn.contact} />
    </main>
  );
}

import type { Metadata } from "next";
import About from "@/components/sections/About";
import CertificatesPreview from "@/components/sections/CertificatesPreview";
import Contact from "@/components/sections/Contact";
import ExecutiveSummary from "@/components/sections/ExecutiveSummary";
import Hero from "@/components/sections/Hero";
import Engagement from "@/components/sections/Engagement";
import MetricsSection from "@/components/sections/MetricsSection";
import Projects from "@/components/sections/Projects";
import PrimaryStack from "@/components/sections/PrimaryStack";
import Services from "@/components/sections/Services";
import ValueProposition from "@/components/sections/ValueProposition";
import JsonLd from "@/components/seo/JsonLd";
import { siteEn } from "@/data/site.en";
import { baseUrl, buildAlternates, siteName } from "@/lib/seo";

const homeTitle =
  "Matheus Siqueira | Full Stack Developer & Data Engineer";
const homeDescription =
  "Full Stack Developer specialized in React, TypeScript, Python, SQL, Data Engineering, Power BI and Azure Cloud.";

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
  keywords: [
    "Matheus Siqueira",
    "Full Stack Developer",
    "Data Engineer",
    "Software Engineer",
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
  ],
  authors: [{ name: siteName, url: baseUrl }],
  robots: { index: true, follow: true },
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
  other: {
    language: "en-US",
  },
};

export default function HomeEn() {
  return (
    <main className="min-h-screen">
      <JsonLd data={homeJsonLd} />
      <Hero content={siteEn.hero} localePrefix="/en" />
      <ExecutiveSummary content={siteEn.executiveSummary} />
      <ValueProposition content={siteEn.valueProposition} />
      <About content={siteEn.about} />
      <Services content={siteEn.services} localePrefix="/en" />
      <Engagement content={siteEn.engagement} localePrefix="/en" />
      <PrimaryStack />
      <Projects />
      <MetricsSection content={siteEn.metrics} />
      <CertificatesPreview content={siteEn.certificatesSection} localePrefix="/en" />
      <Contact content={siteEn.contact} />
    </main>
  );
}

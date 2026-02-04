import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import ExecutiveSummary from "@/components/sections/ExecutiveSummary";
import Hero from "@/components/sections/Hero";
import Engagement from "@/components/sections/Engagement";
import MetricsSection from "@/components/sections/MetricsSection";
import Projects from "@/components/sections/Projects";
import PrimaryStack from "@/components/sections/PrimaryStack";
import Services from "@/components/sections/Services";
import { sitePt } from "@/data/site.pt";
import type { Metadata } from "next";
import { baseUrl, buildAlternates, siteName } from "@/lib/seo";

const homeTitle =
  "Matheus Siqueira | Desenvolvedor Full Stack & Engenharia de Dados";
const homeDescription =
  "Desenvolvedor Full Stack especializado em React, TypeScript, Python, SQL, Engenharia de Dados, Power BI e Azure Cloud.";

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  keywords: [
    "Matheus Siqueira",
    "Desenvolvedor Full Stack",
    "Engenharia de Dados",
    "Software Engineer",
    "Data Engineer",
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
    ...buildAlternates({ pt: "/", en: "/en", canonical: "/" }),
  },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: "/",
    siteName,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: homeTitle,
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
    language: "pt-BR",
  },
};

export default function HomePage() {
  return (
    <main className="pb-24">
      <Hero content={sitePt.hero} />
      <ExecutiveSummary content={sitePt.executiveSummary} />
      <About content={sitePt.about} />
      <Services content={sitePt.services} />
      <Engagement content={sitePt.engagement} />
      <PrimaryStack />
      <Projects />
      <MetricsSection content={sitePt.metrics} />
      <Contact content={sitePt.contact} />
    </main>
  );
}

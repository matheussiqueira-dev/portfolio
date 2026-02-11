import AboutBento from "@/components/sections/AboutBento";
import ExperienceStack from "@/components/sections/ExperienceStack";
import PremiumContact from "@/components/sections/PremiumContact";
import PremiumHero from "@/components/sections/PremiumHero";
import ProjectsBento from "@/components/sections/ProjectsBento";
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
    <main className="relative min-h-screen pb-10">
      <PremiumHero content={sitePt.hero} />
      <AboutBento content={sitePt.about} />
      <ProjectsBento />
      <ExperienceStack />
      <PremiumContact content={sitePt.contact} />
    </main>
  );
}

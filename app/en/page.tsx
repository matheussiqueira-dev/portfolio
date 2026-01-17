import type { Metadata } from "next";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import { projectsEn } from "@/data/projects.en";
import { siteEn } from "@/data/site.en";

export const metadata: Metadata = {
  title: "Data Analyst & BI | Power BI, SQL, Python | Public Data & Decision-Making",
  description:
    "Data Analyst & BI at the Pernambuco State Treasury. Power BI, SQL, and Python for strategic dashboards, ETL, and automation that support clear managerial decisions.",
  alternates: {
    languages: {
      "pt-BR": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    title:
      "Data Analyst & BI | Power BI, SQL, Python | Public Data & Decision-Making",
    description:
      "Data Analyst & BI at the Pernambuco State Treasury. Power BI, SQL, and Python for strategic dashboards, ETL, and automation that support clear managerial decisions.",
    url: "/en",
    siteName: "Matheus Siqueira",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Matheus Siqueira | Data Analyst & BI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Data Analyst & BI | Power BI, SQL, Python | Public Data & Decision-Making",
    description:
      "Data Analyst & BI at the Pernambuco State Treasury. Power BI, SQL, and Python for strategic dashboards, ETL, and automation that support clear managerial decisions.",
    images: ["/og.png"],
  },
};

export default function HomeEn() {
  return (
    <main className="min-h-screen">
      <Hero content={siteEn.hero} localePrefix="/en" />
      <About content={siteEn.about} />
      <Projects content={siteEn.projects} projects={projectsEn} localePrefix="/en" />
      <Contact content={siteEn.contact} />
    </main>
  );
}

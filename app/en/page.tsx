import type { Metadata } from "next";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import JsonLd from "@/components/seo/JsonLd";
import { projectsEn } from "@/data/projects.en";
import { siteEn } from "@/data/site.en";
import { baseUrl, siteName } from "@/lib/seo";

const homeTitle =
  "Data Analyst & BI | Power BI, SQL, Python | Public Data & Decision-Making";
const homeDescription =
  "Data Analyst & BI at the Municipal Treasury Department. Power BI, SQL, and Python for strategic dashboards, ETL, and automation that support clear managerial decisions.";

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
    canonical: "/en",
    languages: {
      "pt-BR": "/",
      "en-US": "/en",
      "x-default": "/",
    },
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
        alt: "Matheus Siqueira | Data Analyst & BI",
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
      <About content={siteEn.about} />
      <Projects content={siteEn.projects} projects={projectsEn} localePrefix="/en" />
      <Contact content={siteEn.contact} />
    </main>
  );
}

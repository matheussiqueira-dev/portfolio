import type { Metadata } from "next";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import JsonLd from "@/components/seo/JsonLd";
import { projects } from "@/data/projects";
import { sitePt } from "@/data/site.pt";
import { baseUrl, siteName } from "@/lib/seo";

const homeTitle =
  "Analista de Dados & BI | Power BI, SQL, Python | Dados Publicos e Tomada de Decisao";
const homeDescription =
  "Analista de Dados e BI na Secretaria da Fazenda de Pernambuco. Power BI, SQL e Python para dashboards estrategicos, ETL e automacao que apoiam decisoes gerenciais.";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: homeTitle,
  url: `${baseUrl}/`,
  description: homeDescription,
  inLanguage: "pt-BR",
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
    canonical: "/",
    languages: {
      "pt-BR": "/",
      "en-US": "/en",
      "x-default": "/",
    },
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
        alt: "Matheus Siqueira | Analista de Dados e BI",
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

export default function Home() {
  return (
    <main className="min-h-screen">
      <JsonLd data={homeJsonLd} />
      <Hero content={sitePt.hero} />
      <About content={sitePt.about} />
      <Projects content={sitePt.projects} projects={projects} />
      <Contact content={sitePt.contact} />
    </main>
  );
}

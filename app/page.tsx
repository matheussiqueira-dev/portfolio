import type { Metadata } from "next";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import { projects } from "@/data/projects";
import { sitePt } from "@/data/site.pt";

export const metadata: Metadata = {
  title:
    "Analista de Dados & BI | Power BI, SQL, Python | Dados Publicos e Tomada de Decisao",
  description:
    "Analista de Dados e BI na Secretaria da Fazenda de Pernambuco. Power BI, SQL e Python para dashboards estrategicos, ETL e automacao que apoiam decisoes gerenciais.",
  alternates: {
    languages: {
      "pt-BR": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    title:
      "Analista de Dados & BI | Power BI, SQL, Python | Dados Publicos e Tomada de Decisao",
    description:
      "Analista de Dados e BI na Secretaria da Fazenda de Pernambuco. Power BI, SQL e Python para dashboards estrategicos, ETL e automacao que apoiam decisoes gerenciais.",
    url: "/",
    siteName: "Matheus Siqueira",
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
    title:
      "Analista de Dados & BI | Power BI, SQL, Python | Dados Publicos e Tomada de Decisao",
    description:
      "Analista de Dados e BI na Secretaria da Fazenda de Pernambuco. Power BI, SQL e Python para dashboards estrategicos, ETL e automacao que apoiam decisoes gerenciais.",
    images: ["/og.png"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero content={sitePt.hero} />
      <About content={sitePt.about} />
      <Projects content={sitePt.projects} projects={projects} />
      <Contact content={sitePt.contact} />
    </main>
  );
}

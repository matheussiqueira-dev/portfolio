import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Resume from "@/components/sections/Resume";
import { baseUrl, siteName } from "@/lib/seo";

const resumeTitle =
  "Analista de Dados Júnior | Power BI, SQL, Python | Currículo";
const resumeDescription =
  "Currículo de Analista de Dados Júnior com foco em Business Intelligence, Power BI, SQL e Python. Experiência em dashboards, ETL e análise de dados.";

const resumeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: resumeTitle,
  description: resumeDescription,
  url: `${baseUrl}/resume`,
  inLanguage: "pt-BR",
  about: {
    "@id": `${baseUrl}/#person`,
  },
  isPartOf: {
    "@id": `${baseUrl}/#website`,
  },
};

export const metadata: Metadata = {
  title: resumeTitle,
  description: resumeDescription,
  keywords: [
    "analista de dados júnior",
    "data analyst",
    "business intelligence",
    "power bi",
    "sql",
    "python",
    "dax",
    "etl",
    "dashboards",
    "kpis",
    "data visualization",
    "data analytics",
    "automação de processos",
    "análise exploratória",
    "modelagem de dados",
    "relatórios executivos",
    "metodologias ágeis",
    "scrum",
    "kanban",
  ],
  alternates: {
    canonical: "/resume",
    languages: {
      "pt-BR": "/resume",
      "en-US": "/en/resume",
      "x-default": "/resume",
    },
  },
  openGraph: {
    title: resumeTitle,
    description: resumeDescription,
    url: "/resume",
    locale: "pt_BR",
    type: "website",
    siteName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Currículo profissional de Matheus Siqueira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: resumeTitle,
    description: resumeDescription,
    images: ["/og.png"],
  },
};

export default function ResumePage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <JsonLd data={resumeJsonLd} />
      <Resume />
    </main>
  );
}

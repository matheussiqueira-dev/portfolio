import { Resume } from "../../components/sections";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { baseUrl, siteName, sameAsLinks } from "@/lib/seo";

const resumeTitle = "Currículo | Analista de Dados Júnior | Power BI | SQL | Python";
const resumeDescription =
  "Currículo de Matheus Siqueira — Analista de Dados Júnior com experiência em Business Intelligence, Power BI, SQL, Python, dashboards, ETL e análise de dados.";

const resumeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${baseUrl}/resume#profilepage`,
  name: resumeTitle,
  description: resumeDescription,
  url: `${baseUrl}/resume`,
  inLanguage: "pt-BR",
  dateModified: new Date().toISOString(),
  mainEntity: {
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: "Matheus Siqueira",
    jobTitle: "Analista de Dados Júnior",
    email: "matheussiqueirahub@gmail.com",
    telephone: "+55 81 99920-3683",
    url: `${baseUrl}/resume`,
    sameAs: sameAsLinks,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Recife",
      addressRegion: "Pernambuco",
      addressCountry: "BR",
    },
    knowsAbout: [
      "Power BI",
      "DAX",
      "Power Query",
      "SQL",
      "Python",
      "ETL",
      "Business Intelligence",
      "Data Analytics",
      "Dashboards",
      "Data Visualization",
    ],
  },
  isPartOf: {
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: siteName,
    url: baseUrl,
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
        alt: "Currículo de Matheus Siqueira",
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

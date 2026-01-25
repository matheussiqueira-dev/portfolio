import { Resume } from "../../components/sections";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { baseUrl, buildAlternates, siteName, sameAsLinks } from "@/lib/seo";

const resumeTitle = "Currículo | Analista de Dados Júnior | Power BI | SQL | Python";
const resumeDescription =
  "Currículo de Matheus Siqueira — Analista de Dados Júnior com experiência em Business Intelligence, Power BI, SQL, Python, dashboards, ETL e análise de dados.";

// ProfilePage JSON-LD with mainEntity (Person) - required for Google rich results
const profilePageJsonLd = {
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
      "Data Visualization",
      "Data Modeling",
      "Dashboards",
      "Git",
      "Tableau",
      "React",
      "APIs",
      "Statistics",
    ],
  },
  isPartOf: {
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: siteName,
    url: baseUrl,
  },
};

// BreadcrumbList JSON-LD for navigation rich results
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: baseUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Currículo",
      item: `${baseUrl}/resume`,
    },
  ],
};

// Combined JSON-LD array for multiple structured data types
const resumeJsonLd = [profilePageJsonLd, breadcrumbJsonLd];

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
    ...buildAlternates({ pt: "/resume", en: "/en/resume", canonical: "/resume" }),
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
    <main className="min-h-screen px-6 pt-28 pb-20">
      <JsonLd data={resumeJsonLd} />
      <Resume />
    </main>
  );
}

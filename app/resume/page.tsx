import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Resume from "@/components/sections/Resume";
import { baseUrl, siteName } from "@/lib/seo";

const resumeTitle =
  "Curriculo | Analista de Dados & Business Intelligence | Matheus Siqueira";
const resumeDescription =
  "Analista de Dados com experiencia em Power BI, SQL e Python, atuando com dados publicos e fiscais em BI governamental, ETL e suporte a decisao estrategica.";

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
    "analista de dados",
    "business intelligence",
    "power bi",
    "sql",
    "dax",
    "power query",
    "python",
    "bi governamental",
    "dados publicos",
    "data analytics",
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
        alt: "Curriculo profissional de Matheus Siqueira",
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

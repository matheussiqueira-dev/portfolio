import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import ResumeEn from "@/components/sections/ResumeEn";
import { baseUrl, siteName } from "@/lib/seo";

const resumeTitle = "Junior Data Analyst Resume | Power BI, SQL, Python";
const resumeDescription =
  "Junior Data Analyst resume with experience in Business Intelligence, Power BI, SQL, Python, dashboards, ETL and data analysis.";

const resumeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: resumeTitle,
  description: resumeDescription,
  url: `${baseUrl}/en/resume`,
  inLanguage: "en-US",
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
    "junior data analyst",
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
    "process automation",
    "exploratory analysis",
    "data modeling",
    "executive reports",
    "agile methods",
    "scrum",
    "kanban",
  ],
  alternates: {
    canonical: "/en/resume",
    languages: {
      "pt-BR": "/resume",
      "en-US": "/en/resume",
      "x-default": "/resume",
    },
  },
  openGraph: {
    title: resumeTitle,
    description: resumeDescription,
    url: "/en/resume",
    locale: "en_US",
    type: "website",
    siteName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Resume of Matheus Siqueira",
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

export default function ResumeEnPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <JsonLd data={resumeJsonLd} />
      <ResumeEn />
    </main>
  );
}

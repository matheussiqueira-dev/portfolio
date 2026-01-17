import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Resume from "@/components/sections/Resume";
import { resume } from "@/data/resume";
import { baseUrl, sameAsLinks, siteName } from "@/lib/seo";

const resumeTitle = "Curriculo | Matheus Siqueira";
const resumeDescription =
  "Curriculo de Matheus Siqueira, Analista de Dados Junior em BI, Power BI, SQL e Python, com experiencia em dados publicos, ETL, automacao e dashboards para decisao gerencial.";

const resumeJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: resume.name,
  jobTitle: resume.role,
  description: resume.summary,
  url: `${baseUrl}/resume`,
  sameAs: sameAsLinks,
  worksFor: {
    "@type": "Organization",
    name: "Secretaria Municipal da Fazenda",
  },
  knowsAbout: resume.skills.groups.flatMap((group) => group.items),
};

export const metadata: Metadata = {
  title: resumeTitle,
  description: resumeDescription,
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
        alt: "Curriculo de Matheus Siqueira",
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

import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import ResumeEn from "@/components/sections/ResumeEn";
import { resumeEn } from "@/data/resume.en";
import { baseUrl, sameAsLinks, siteName } from "@/lib/seo";

const resumeTitle =
  "Resume | Data Analyst & Business Intelligence | Matheus Siqueira";
const resumeDescription =
  "Data Analyst with experience in Power BI, SQL, Python, and public data. Government BI, ETL automation, and strategic decision support for managers and executives.";

const resumeJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: resumeEn.name,
  jobTitle: resumeEn.role,
  description: resumeEn.summary,
  url: `${baseUrl}/en/resume`,
  sameAs: sameAsLinks,
  worksFor: {
    "@type": "Organization",
    name: "Municipal Treasury Department",
  },
  knowsAbout: resumeEn.skills.groups.flatMap((group) => group.items),
};

export const metadata: Metadata = {
  title: resumeTitle,
  description: resumeDescription,
  keywords: [
    "data analyst",
    "business intelligence",
    "power bi",
    "sql",
    "python",
    "government bi",
    "public data",
    "data analytics",
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

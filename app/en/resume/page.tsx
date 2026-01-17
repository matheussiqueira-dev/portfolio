import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import ResumeEn from "@/components/sections/ResumeEn";
import { resumeEn } from "@/data/resume.en";
import { baseUrl, sameAsLinks, siteName } from "@/lib/seo";

const resumeTitle = "Resume | Matheus Siqueira";
const resumeDescription =
  "Resume of Matheus Siqueira, Junior Data Analyst and Business Intelligence Analyst with Power BI, SQL, DAX, Python, and ETL for public data and decision-ready dashboards.";

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

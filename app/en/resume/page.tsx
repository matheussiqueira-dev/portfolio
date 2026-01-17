import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import ResumeEn from "@/components/sections/ResumeEn";
import { baseUrl, siteName } from "@/lib/seo";

const resumeTitle = "Resume | Matheus Siqueira";
const resumeDescription =
  "Resume of Matheus Siqueira, Junior Data Analyst in BI, Power BI, SQL, and Python, with experience in public data, ETL, and dashboards for clear managerial decisions.";

const resumeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: resumeTitle,
  url: `${baseUrl}/en/resume`,
  description: resumeDescription,
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    name: siteName,
    url: baseUrl,
  },
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

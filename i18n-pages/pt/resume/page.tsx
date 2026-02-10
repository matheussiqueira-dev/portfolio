import { Resume } from "@/components/sections";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { baseUrl, buildAlternates, siteName, sameAsLinks } from "@/lib/seo";

const resumeTitle = "Currículo | Desenvolvedor Full Stack | Matheus Siqueira";
const resumeDescription =
  "Currículo de Matheus Siqueira — Desenvolvedor Full Stack com base em dados, IA e engenharia de software. APIs, front-end, automação e analytics.";

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
    jobTitle: "Desenvolvedor Full Stack",
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
      "Full Stack Development",
      "Software Engineering",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "Python",
      "SQL",
      "Cloud Computing",
      "Machine Learning",
      "Business Intelligence",
      "Data Engineering",
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
    "desenvolvedor full stack",
    "full stack developer",
    "engenheiro de software",
    "software engineer",
    "react",
    "next.js",
    "node.js",
    "typescript",
    "mongodb",
    "python",
    "sql",
    "apis",
    "cloud computing",
    "machine learning",
    "data engineering",
    "business intelligence",
    "dados",
    "ia",
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

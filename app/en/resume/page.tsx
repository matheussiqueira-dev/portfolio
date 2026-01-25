import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import ResumeEn from "@/components/sections/ResumeEn";
import { baseUrl, buildAlternates, siteName, sameAsLinks } from "@/lib/seo";

const resumeTitle = "Resume | Full Stack Developer | Matheus Siqueira";
const resumeDescription =
  "Resume of Matheus Siqueira — Full Stack Developer with a data and AI foundation. Web apps, APIs, automation, and analytics.";

// ProfilePage JSON-LD with mainEntity (Person) - required for Google rich results
const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${baseUrl}/en/resume#profilepage`,
  name: resumeTitle,
  description: resumeDescription,
  url: `${baseUrl}/en/resume`,
  inLanguage: "en-US",
  dateModified: new Date().toISOString(),
  mainEntity: {
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: "Matheus Siqueira",
    jobTitle: "Full Stack Developer",
    email: "matheussiqueirahub@gmail.com",
    telephone: "+55 81 99920-3683",
    url: `${baseUrl}/en/resume`,
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
      name: "Resume",
      item: `${baseUrl}/en/resume`,
    },
  ],
};

// Combined JSON-LD array for multiple structured data types
const resumeJsonLd = [profilePageJsonLd, breadcrumbJsonLd];

export const metadata: Metadata = {
  title: resumeTitle,
  description: resumeDescription,
  keywords: [
    "full stack developer",
    "software engineer",
    "full stack",
    "react",
    "next.js",
    "node.js",
    "typescript",
    "python",
    "sql",
    "apis",
    "cloud computing",
    "machine learning",
    "data engineering",
    "business intelligence",
    "data",
    "ai",
  ],
  alternates: {
    ...buildAlternates({ pt: "/resume", en: "/en/resume", canonical: "/en/resume" }),
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
    <main className="min-h-screen px-6 pt-28 pb-20">
      <JsonLd data={resumeJsonLd} />
      <ResumeEn />
    </main>
  );
}

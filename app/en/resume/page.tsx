import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import ResumeEn from "@/components/sections/ResumeEn";
import { baseUrl, siteName, sameAsLinks } from "@/lib/seo";

const resumeTitle = "Resume | Junior Data Analyst | Power BI | SQL | Python";
const resumeDescription =
  "Resume of Matheus Siqueira — Junior Data Analyst with experience in Business Intelligence, Power BI, SQL, Python, dashboards, ETL and data analysis.";

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
    jobTitle: "Junior Data Analyst",
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

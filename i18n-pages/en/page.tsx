import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import ProfileCard from "@/components/ProfileCard";
import { baseUrl, buildAlternates, siteName } from "@/lib/seo";

const homeTitle =
  "Matheus Siqueira | Full Stack Developer & Data Engineer";
const homeDescription =
  "Full Stack Developer specialized in React, TypeScript, Python, SQL, Data Engineering, Power BI and Azure Cloud.";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: homeTitle,
  url: `${baseUrl}/en`,
  description: homeDescription,
  inLanguage: "en",
  isPartOf: {
    "@type": "WebSite",
    name: siteName,
    url: baseUrl,
  },
};

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  keywords: [
    "Matheus Siqueira",
    "Full Stack Developer",
    "Data Engineer",
    "Software Engineer",
    "JavaScript",
    "TypeScript",
    "Python",
    "React.js",
    "Node.js",
    "SQL",
    "MongoDB",
    "Git",
    "GitHub",
    "HTML5",
    "CSS3",
    "Microsoft Azure",
    "Power BI",
    "Pandas",
    "REST API",
    "ETL",
    "Data Warehouse",
    "Tableau",
    "Oracle Database",
    "Shell Script",
  ],
  authors: [{ name: siteName, url: baseUrl }],
  robots: { index: true, follow: true },
  alternates: {
    ...buildAlternates({ pt: "/", en: "/en", canonical: "/en" }),
  },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: "/en",
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Matheus Siqueira | Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: ["/og.png"],
  },
  other: {
    language: "en",
  },
};

export default function HomeEn() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <ProfileCard
        subtitle="Infrastructure | FullStack Developer | Junior Data Analyst"
        photoAlt="Portrait photo of Matheus Siqueira"
        resumeHref="/en/resume"
        resumeLabel="View resume"
        projectsHref="/en/projects"
        projectsLabel="View projects"
        whatsappHref="https://wa.me/5581999203683"
        contactLabel="Contact"
        contactAriaLabel="Contact via WhatsApp"
        themeToLightLabel="Switch to light mode"
        themeToDarkLabel="Switch to dark mode"
        trackingContext="landing_en"
        localeLandingMode
      />
    </>
  );
}

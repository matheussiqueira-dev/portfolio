import type { Metadata } from "next";
import About from "@/components/sections/About";
import CertificatesPreview from "@/components/sections/CertificatesPreview";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import JsonLd from "@/components/seo/JsonLd";
import { siteEn } from "@/data/site.en";
import { baseUrl, buildAlternates, siteName } from "@/lib/seo";

const homeTitle = "Matheus Siqueira | Full Stack Developer | Data & AI";
const homeDescription =
  "Full Stack Developer and Computer Science student with a data and AI foundation. Builds web apps, APIs, and analytics with React/Next.js, Node.js, Python, and SQL.";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: homeTitle,
  url: `${baseUrl}/en`,
  description: homeDescription,
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    name: siteName,
    url: baseUrl,
  },
};

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
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
};

export default function HomeEn() {
  return (
    <main className="min-h-screen">
      <JsonLd data={homeJsonLd} />
      <Hero content={siteEn.hero} localePrefix="/en" />
      <About content={siteEn.about} />
      <Projects />
      <CertificatesPreview content={siteEn.certificatesSection} localePrefix="/en" />
      <Contact content={siteEn.contact} />
    </main>
  );
}

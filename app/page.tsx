import type { Metadata } from "next";
import About from "@/components/sections/About";
import CertificatesPreview from "@/components/sections/CertificatesPreview";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import JsonLd from "@/components/seo/JsonLd";
import { sitePt } from "@/data/site.pt";
import { baseUrl, siteName } from "@/lib/seo";

const homeTitle =
  "Matheus Siqueira | Analista de Dados Júnior | Power BI | SQL | Python | BI";
const homeDescription =
  "Profissional em formação em Ciência da Computação, com experiência prática em Business Intelligence, análise de dados, automação de processos e construção de dashboards estratégicos. Atuo com Power BI, SQL e Python para organizar dados, gerar indicadores confiáveis e apoiar a tomada de decisão.";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: homeTitle,
  url: `${baseUrl}/`,
  description: homeDescription,
  inLanguage: "pt-BR",
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
    canonical: "/",
    languages: {
      "pt-BR": "/",
      "en-US": "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: "/",
    siteName,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Matheus Siqueira | Analista de Dados Júnior",
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

export default function Home() {
  return (
    <main className="min-h-screen">
      <JsonLd data={homeJsonLd} />
      <Hero content={sitePt.hero} />
      <About content={sitePt.about} />
      <Projects />
      <CertificatesPreview content={sitePt.certificatesSection} />
      <Contact content={sitePt.contact} />
    </main>
  );
}

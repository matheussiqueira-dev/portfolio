import type { Metadata } from "next";
import ProfileCard from "@/components/ProfileCard";
import { baseUrl, buildAlternates, siteName } from "@/lib/seo";

const homeTitle =
  "Matheus Siqueira | Desenvolvedor Full Stack & Engenharia de Dados";
const homeDescription =
  "Desenvolvedor Full Stack especializado em React, TypeScript, Python, SQL, Engenharia de Dados, Power BI e Azure Cloud.";

const topNavItems = [
  { label: "Inicio", href: "/pt-BR" },
  { label: "Sobre", href: "/resume" },
  { label: "Servicos", href: "/contrate" },
  { label: "Projetos", href: "/projetos" },
  { label: "Curriculo", href: "/resume" },
  { label: "Academico", href: "/academico" },
  { label: "Certificados", href: "/certificates" },
  { label: "Contrate", href: "/contrate" },
  { label: "Contato", href: "/contrate" },
];

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  keywords: [
    "Matheus Siqueira",
    "Desenvolvedor Full Stack",
    "Engenharia de Dados",
    "Software Engineer",
    "Data Engineer",
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
    ...buildAlternates({ pt: "/", en: "/en", canonical: "/" }),
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
        alt: homeTitle,
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
    language: "pt-BR",
  },
};

export default function HomePage() {
  return (
    <ProfileCard
      subtitle="Infraestrutura | Desenvolvedor FullStack | Analista de Dados Junior"
      photoAlt="Foto de Matheus Siqueira"
      resumeHref="/resume"
      resumeLabel="Ver curriculo"
      projectsHref="/projetos"
      projectsLabel="Ver projetos"
      whatsappHref="https://wa.me/5581999203683"
      contactLabel="Entrar em contato"
      contactAriaLabel="Entrar em contato pelo WhatsApp"
      trackingContext="landing_pt"
      localeLandingMode
      topNavItems={topNavItems}
      navigationAriaLabel="Navegacao principal"
      ptHref="/pt-BR"
      enHref="/en"
      activeLocale="pt-BR"
    />
  );
}

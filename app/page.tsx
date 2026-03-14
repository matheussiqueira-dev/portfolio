import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";

import ptMessages from "@/core/i18n/locales/pt.json";
import { getProjectsCard } from "@/data/projects-card";
import { sitePt } from "@/data/site.pt";
import LocaleShell from "@/ui/components/layout/LocaleShell";
import HomeDashboard from "@/ui/components/pages/HomeDashboard";

const aboutTitle =
  "Sobre Matheus Siqueira | Engenheiro de Software e Analista de Dados orientado a Inteligencia Artificial";
const aboutDescription =
  "Conheca Matheus Siqueira, profissional de tecnologia especializado em Engenharia de Software, Business Intelligence, Ciencia de Dados e automacao de processos orientados a tomada de decisao estrategica.";

const aboutKeywords = [
  "Matheus Siqueira",
  "Analista de Dados Brasil",
  "Engenheiro de Software",
  "Business Intelligence Specialist",
  "Power BI Developer",
  "Python Developer",
  "Data Analytics Professional",
  "Full Stack Developer Brasil",
  "Tecnologia e Dados",
  "Transformacao Digital",
  "Data Driven Professional",
];

export const metadata: Metadata = {
  title: aboutTitle,
  description: aboutDescription,
  keywords: aboutKeywords,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.matheussiqueira.dev/sobre",
  },
  openGraph: {
    title: "Sobre Matheus Siqueira - Data & Software Engineering",
    description:
      "Profissional de tecnologia especializado em engenharia de software, analise de dados e desenvolvimento de solucoes orientadas a impacto real.",
    url: "https://www.matheussiqueira.dev/sobre",
    type: "profile",
    images: [
      {
        url: "https://www.matheussiqueira.dev/og-sobre.png",
        width: 1200,
        height: 630,
        alt: "Sobre Matheus Siqueira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Matheus Siqueira - Data & Software Engineering",
    description:
      "Profissional de tecnologia especializado em engenharia de software, analise de dados e desenvolvimento de solucoes orientadas a impacto real.",
    images: ["https://www.matheussiqueira.dev/og-sobre.png"],
  },
};

export default function LandingPage() {
  const projects = getProjectsCard("pt").slice(0, 6);

  return (
    <NextIntlClientProvider locale="pt-BR" messages={ptMessages}>
      <LocaleShell locale="pt-BR">
        <HomeDashboard site={sitePt} projects={projects} locale="pt" />
      </LocaleShell>
    </NextIntlClientProvider>
  );
}

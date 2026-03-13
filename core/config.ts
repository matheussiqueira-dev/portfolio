import type { SiteLocale } from "@/core/types";

export const siteConfig = {
  name: "Matheus Siqueira",
  siteUrl: "https://www.matheussiqueira.dev",
  siteDomain: "www.matheussiqueira.dev",
  email: "matheussiqueirahub@gmail.com",
  phone: "+55 81 99920-3683",
  whatsappUrl: "https://wa.me/5581999203683",
  resumeUrl: "/media/cv-matheus-siqueira.pdf",
  ogImage: "/og.png",
  defaultLocale: "pt-BR" as SiteLocale,
  locales: ["pt-BR", "en"] as const,
  signature: {
    "pt-BR": "Desenvolvido por Matheus Siqueira",
    en: "Criado por Matheus Siqueira",
  },
  jobTitles: {
    "pt-BR": "Analista de Dados, Desenvolvedor Full Stack e Especialista em BI, IA e automação",
    en: "Data Analyst, Full Stack Developer, and BI, AI, and automation specialist",
  },
  location: {
    city: "Recife",
    region: "Pernambuco",
    country: "Brazil",
  },
  sameAs: [
    "https://www.linkedin.com/in/matheussiqueira-dev/",
    "https://github.com/matheussiqueira-dev",
  ],
  recruiterFocus: [
    "Data Analyst Brazil",
    "Business Intelligence Developer",
    "Power BI Developer Brazil",
    "Python Automation Developer",
    "Full Stack Developer Brazil",
    "Computer Vision Developer",
    "AI Engineer Brazil",
    "Remote Data Analyst Brazil",
    "BI Professional Recife",
    "Power BI SQL Python Portfolio",
  ],
} as const;

export const canonicalOrigin = siteConfig.siteUrl.replace(/\/$/, "");

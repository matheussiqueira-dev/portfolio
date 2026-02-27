import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt-BR", "en"],
  defaultLocale: "pt-BR",
  localePrefix: "as-needed",
  localeDetection: false,
  localeCookie: false,
  pathnames: {
    "/": "/",
    "/academic": {
      "pt-BR": "/academico",
      en: "/academic",
    },
    "/hire": {
      "pt-BR": "/contrate",
      en: "/hire",
    },
    "/projects": {
      "pt-BR": "/projetos",
      en: "/projects",
    },
    "/projects/[slug]": {
      "pt-BR": "/projetos/[slug]",
      en: "/projects/[slug]",
    },
    "/certificates": "/certificates",
    "/resume": "/resume",
    "/data-analyst": "/data-analyst",
    "/power-bi": "/power-bi",
    "/sql-python": "/sql-python",
    "/demos": "/demos",
    "/demos/[slug]": "/demos/[slug]",
    "/system": "/system",
  },
});

export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;

export type Locale = (typeof locales)[number];

export const isValidLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);
export const locales = ["pt-BR", "en"] as const;
export const defaultLocale = "pt-BR";

export type Locale = (typeof locales)[number];

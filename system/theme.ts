import type { SiteLocale } from "@/core/types";

export const themeModes = ["dark", "light"] as const;

export type ThemeMode = (typeof themeModes)[number];

export const themeLabels: Record<ThemeMode, Record<SiteLocale, string>> = {
  dark: {
    "pt-BR": "Modo ENCOM",
    en: "ENCOM mode",
  },
  light: {
    "pt-BR": "Modo claro",
    en: "Light mode",
  },
};

export const defaultThemeMode: ThemeMode = "dark";

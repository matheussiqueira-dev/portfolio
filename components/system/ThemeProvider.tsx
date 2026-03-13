"use client";

import type { ReactNode } from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

import { defaultThemeMode } from "@/system/theme";

type ThemeProviderProps = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme={defaultThemeMode}
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}

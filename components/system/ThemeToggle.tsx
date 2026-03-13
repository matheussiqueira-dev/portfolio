"use client";

import { useTheme } from "next-themes";

import { cn } from "@/core/utils";
import type { SiteLocale } from "@/core/types";
import { themeLabels } from "@/system/theme";

type ThemeToggleProps = {
  locale: SiteLocale;
  className?: string;
};

export default function ThemeToggle({ locale, className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const currentTheme = resolvedTheme === "light" ? "light" : "dark";
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className={cn("theme-toggle", className)}
      onClick={() => setTheme(nextTheme)}
      aria-label={themeLabels[nextTheme][locale]}
    >
      <span aria-hidden="true">{currentTheme === "dark" ? "◐" : "◑"}</span>
      <span>{themeLabels[currentTheme][locale]}</span>
    </button>
  );
}

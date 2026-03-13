"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { SiteLocale } from "@/core/types";
import { getAlternateLocale, getRoute, languageLabels, switchLocalePath } from "@/system/i18n";

type LanguageSwitcherProps = {
  locale: SiteLocale;
};

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const targetLocale = getAlternateLocale(locale);
  const href = switchLocalePath(pathname ?? getRoute("home", locale), targetLocale);

  return (
    <Link
      href={href}
      className="language-switch"
      aria-label={`Switch language to ${languageLabels[targetLocale]}`}
    >
      <span>{languageLabels[locale]}</span>
      <span className="text-[color:var(--muted)]">/</span>
      <span>{languageLabels[targetLocale]}</span>
    </Link>
  );
}

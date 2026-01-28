"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { getLocaleFromPath, localizeHref, type Locale } from "@/lib/i18n";
import { LOCALE_PREFIX } from "@/lib/constants";

/**
 * Hook return type with locale utilities
 */
export type UseLocaleReturn = {
  /** Current locale ('pt' | 'en') */
  locale: Locale;
  /** True if current locale is English */
  isEn: boolean;
  /** True if current locale is Portuguese */
  isPt: boolean;
  /** Locale prefix for routes ('/en' | '') */
  localePrefix: typeof LOCALE_PREFIX.EN | typeof LOCALE_PREFIX.PT;
  /** Function to localize href based on current locale */
  localize: (href: string) => string;
};

/**
 * Custom hook for locale detection and utilities
 * 
 * Provides a centralized way to access locale information and utilities
 * across components, avoiding repetitive pathname checks and logic.
 * 
 * @returns Object with locale information and utilities
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { locale, isEn, localize } = useLocale();
 *   
 *   const content = isEn ? contentEn : contentPt;
 *   const projectsHref = localize('/projetos');
 *   
 *   return <Link href={projectsHref}>{content.title}</Link>;
 * }
 * ```
 */
export function useLocale(): UseLocaleReturn {
  const pathname = usePathname() ?? "/";
  
  const locale = useMemo(() => getLocaleFromPath(pathname), [pathname]);
  
  const isEn = locale === "en";
  const isPt = locale === "pt";
  
  const localePrefix = isEn ? LOCALE_PREFIX.EN : LOCALE_PREFIX.PT;
  
  const localize = useMemo(
    () => (href: string) => localizeHref(href, locale),
    [locale]
  );

  return {
    locale,
    isEn,
    isPt,
    localePrefix,
    localize,
  };
}

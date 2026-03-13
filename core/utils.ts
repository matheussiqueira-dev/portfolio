import type { Localized, SiteLocale } from "@/core/types";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function pickLocalized<T>(value: Localized<T>, locale: SiteLocale) {
  return value[locale];
}

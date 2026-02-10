import { notFound } from "next/navigation";

import { isValidLocale, type Locale } from "@/i18n/routing";

export type LocaleParams = Promise<{ locale: string }>;

export async function resolveLocale(params: LocaleParams): Promise<Locale> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return locale;
}

export const pickByLocale = <T>(locale: Locale, ptValue: T, enValue: T) =>
  locale === "en" ? enValue : ptValue;


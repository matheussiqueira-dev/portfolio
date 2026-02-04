import type { AbstractIntlMessages } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import { defaultLocale, locales, type Locale } from "./routing";

const localeToMessages: Record<
  Locale,
  () => Promise<{ default: Record<string, unknown> }>
> = {
  "pt-BR": () => import("../messages/pt.json"),
  en: () => import("../messages/en.json"),
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = (await requestLocale) as Locale | undefined;

  if (!locale || !locales.includes(locale)) {
    locale = defaultLocale;
  }

  const messages = (await localeToMessages[locale]()).default as AbstractIntlMessages;

  return {
    locale,
    messages,
  };
});

import type { AbstractIntlMessages } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import { isValidLocale, routing } from "./routing";

const messagesByLocale = {
  "pt-BR": () => import("../messages/pt.json"),
  en: () => import("../messages/en.json"),
};

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  const locale = requested && isValidLocale(requested)
    ? requested
    : routing.defaultLocale;

  const messages = (await messagesByLocale[locale]())
    .default as unknown as AbstractIntlMessages;

  return {
    locale,
    messages,
  };
});

import type { Metadata } from "next";

import HomeEn, { metadata as metadataEn } from "@/i18n-pages/en/page";
import HomePt, { metadata as metadataPt } from "@/i18n-pages/pt/page";

import { pickByLocale, resolveLocale, type LocaleParams } from "./_lib";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pickByLocale(locale, metadataPt, metadataEn);
}

export default async function LocaleHomePage({ params }: Props) {
  const locale = await resolveLocale(params);
  return pickByLocale(locale, <HomePt />, <HomeEn />);
}


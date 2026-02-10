import type { Metadata } from "next";

import PowerBiEn, { metadata as metadataEn } from "@/i18n-pages/en/power-bi/page";
import PowerBiPt, { metadata as metadataPt } from "@/i18n-pages/pt/power-bi/page";

import { pickByLocale, resolveLocale, type LocaleParams } from "../_lib";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pickByLocale(locale, metadataPt, metadataEn);
}

export default async function PowerBiPage({ params }: Props) {
  const locale = await resolveLocale(params);
  return pickByLocale(locale, <PowerBiPt />, <PowerBiEn />);
}


import type { Metadata } from "next";

import HireEn, { metadata as metadataEn } from "@/i18n-pages/en/hire/page";
import HirePt, { metadata as metadataPt } from "@/i18n-pages/pt/contrate/page";

import { pickByLocale, resolveLocale, type LocaleParams } from "../_lib";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pickByLocale(locale, metadataPt, metadataEn);
}

export default async function HirePage({ params }: Props) {
  const locale = await resolveLocale(params);
  return pickByLocale(locale, <HirePt />, <HireEn />);
}


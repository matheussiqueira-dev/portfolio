import type { Metadata } from "next";

import DemosEn, { metadata as metadataEn } from "@/i18n-pages/en/demos/page";
import DemosPt, { metadata as metadataPt } from "@/i18n-pages/pt/demos/page";

import { pickByLocale, resolveLocale, type LocaleParams } from "../_lib";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pickByLocale(locale, metadataPt, metadataEn);
}

export default async function DemosPage({ params }: Props) {
  const locale = await resolveLocale(params);
  return pickByLocale(locale, <DemosPt />, <DemosEn />);
}


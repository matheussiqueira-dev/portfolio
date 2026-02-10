import type { Metadata } from "next";

import DataAnalystEn, { metadata as metadataEn } from "@/i18n-pages/en/data-analyst/page";
import DataAnalystPt, { metadata as metadataPt } from "@/i18n-pages/pt/data-analyst/page";

import { pickByLocale, resolveLocale, type LocaleParams } from "../_lib";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pickByLocale(locale, metadataPt, metadataEn);
}

export default async function DataAnalystPage({ params }: Props) {
  const locale = await resolveLocale(params);
  return pickByLocale(locale, <DataAnalystPt />, <DataAnalystEn />);
}


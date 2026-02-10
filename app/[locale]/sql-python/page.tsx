import type { Metadata } from "next";

import SqlPythonEn, { metadata as metadataEn } from "@/i18n-pages/en/sql-python/page";
import SqlPythonPt, { metadata as metadataPt } from "@/i18n-pages/pt/sql-python/page";

import { pickByLocale, resolveLocale, type LocaleParams } from "../_lib";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pickByLocale(locale, metadataPt, metadataEn);
}

export default async function SqlPythonPage({ params }: Props) {
  const locale = await resolveLocale(params);
  return pickByLocale(locale, <SqlPythonPt />, <SqlPythonEn />);
}


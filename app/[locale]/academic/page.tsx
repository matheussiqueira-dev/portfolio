import type { Metadata } from "next";

import AcademicEn, { metadata as metadataEn } from "@/i18n-pages/en/academic/page";
import AcademicPt, { metadata as metadataPt } from "@/i18n-pages/pt/academico/page";

import { pickByLocale, resolveLocale, type LocaleParams } from "../_lib";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pickByLocale(locale, metadataPt, metadataEn);
}

export default async function AcademicPage({ params }: Props) {
  const locale = await resolveLocale(params);
  return pickByLocale(locale, <AcademicPt />, <AcademicEn />);
}


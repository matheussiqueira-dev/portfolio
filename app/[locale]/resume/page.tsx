import type { Metadata } from "next";

import ResumeEn, { metadata as metadataEn } from "@/i18n-pages/en/resume/page";
import ResumePt, { metadata as metadataPt } from "@/i18n-pages/pt/resume/page";

import { pickByLocale, resolveLocale, type LocaleParams } from "../_lib";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pickByLocale(locale, metadataPt, metadataEn);
}

export default async function ResumePage({ params }: Props) {
  const locale = await resolveLocale(params);
  return pickByLocale(locale, <ResumePt />, <ResumeEn />);
}


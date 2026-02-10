import type { Metadata } from "next";

import CertificatesEn, { metadata as metadataEn } from "@/i18n-pages/en/certificates/page";
import CertificatesPt, { metadata as metadataPt } from "@/i18n-pages/pt/certificates/page";

import { pickByLocale, resolveLocale, type LocaleParams } from "../_lib";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pickByLocale(locale, metadataPt, metadataEn);
}

export default async function CertificatesPage({ params }: Props) {
  const locale = await resolveLocale(params);
  return pickByLocale(locale, <CertificatesPt />, <CertificatesEn />);
}


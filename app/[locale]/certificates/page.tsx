import type { Metadata } from "next";

import { certificatesPagePt, certificatesPt } from "@/data/certificates.pt";
import { certificatesPageEn, certificatesEn } from "@/data/certificates.en";

import { resolveLocale, type LocaleParams } from "../_lib";
import CertificatesContent from "./certificates-content";
import { getInfinitySchoolCertificates } from "./infinity-school-certificates";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const content = locale === "pt-BR" ? certificatesPagePt : certificatesPageEn;
  return {
    title: content.title,
    description: content.description,
  };
}

export default async function CertificatesPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const content = locale === "pt-BR" ? certificatesPagePt : certificatesPageEn;
  const baseCertificates = locale === "pt-BR" ? certificatesPt : certificatesEn;
  const infinitySchoolCertificates = await getInfinitySchoolCertificates(locale);
  const certificates = [...baseCertificates, ...infinitySchoolCertificates];

  return (
    <main className="layout-container page-shell" style={{ paddingTop: "var(--section-y)", paddingBottom: "var(--section-y)" }}>
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)] mb-2">
          {content.title}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-[color:var(--foreground)] mb-3">
          {content.title}
        </h1>
        <p className="text-sm text-[color:var(--muted)] max-w-2xl">{content.description}</p>
      </header>

      <CertificatesContent content={content} certificates={certificates} />
    </main>
  );
}

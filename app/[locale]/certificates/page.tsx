import type { Metadata } from "next";

import { certificatesPagePt, certificatesPt } from "@/data/certificates.pt";
import { certificatesPageEn, certificatesEn } from "@/data/certificates.en";
import { SectionFrame } from "@/ui/components/command/SectionFrame";
import { TelemetryPill } from "@/ui/components/command/TelemetryPill";

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
    <main className="layout-container page-shell command-page">
      <SectionFrame
        eyebrow={content.title}
        title={content.title}
        description={content.description}
        telemetry={
          <>
            <TelemetryPill
              label={
                locale === "pt-BR"
                  ? `${certificates.length} registros`
                  : `${certificates.length} records`
              }
              tone="success"
            />
            <TelemetryPill label={content.categoryFilterLabel} tone="accent" />
          </>
        }
      >
        <CertificatesContent content={content} certificates={certificates} />
      </SectionFrame>
    </main>
  );
}

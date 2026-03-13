import type { Metadata } from "next";

import Certificates from "@/components/sections/Certificates";
import { resolveLocale, type LocaleParams } from "@/app/[locale]/_lib";
import { getInfinitySchoolCertificates } from "@/app/[locale]/certificates/infinity-school-certificates";
import { certificatesEn } from "@/data/certificates.en";
import { certificatesPt } from "@/data/certificates.pt";
import { getDictionary, getRoute } from "@/system/i18n";
import { buildBreadcrumbSchema, buildPageMetadata, buildWebPageSchema } from "@/system/seo";
import JsonLd from "@/ui/components/seo/JsonLd";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);

  return buildPageMetadata({
    locale,
    route: "certificates",
    title: dict.pages.certificates.title,
    description: dict.pages.certificates.subtitle,
    keywords: [
      "Power BI Certificate",
      "Python Certificate",
      "BI Certification Portfolio",
      "AI Certification Brazil",
    ],
  });
}

export default async function CertificatesPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  const baseCertificates = locale === "en" ? certificatesEn : certificatesPt;
  const infinitySchoolCertificates = await getInfinitySchoolCertificates(locale);
  const path = getRoute("certificates", locale);

  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            locale,
            path,
            title: dict.pages.certificates.title,
            description: dict.pages.certificates.subtitle,
          }),
          buildBreadcrumbSchema([
            { name: "Home", item: getRoute("home", locale) },
            { name: dict.nav.certificates, item: path },
          ]),
        ]}
      />
      <Certificates locale={locale} items={[...baseCertificates, ...infinitySchoolCertificates]} />
    </>
  );
}

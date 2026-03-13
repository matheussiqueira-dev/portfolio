import type { Metadata } from "next";

import Contact from "@/components/sections/Contact";
import { resolveLocale, type LocaleParams } from "@/app/[locale]/_lib";
import { siteEn } from "@/data/site.en";
import { sitePt } from "@/data/site.pt";
import { getRoute } from "@/system/i18n";
import { buildBreadcrumbSchema, buildPageMetadata, buildWebPageSchema } from "@/system/seo";
import JsonLd from "@/ui/components/seo/JsonLd";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const site = locale === "en" ? siteEn : sitePt;

  return buildPageMetadata({
    locale,
    route: "contact",
    title: site.contact.title,
    description: site.contact.description,
    keywords: [
      "Contact Data Analyst Brazil",
      "Hire Power BI Developer",
      "Remote Full Stack Developer Brazil",
    ],
  });
}

export default async function ContactPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const site = locale === "en" ? siteEn : sitePt;
  const path = getRoute("contact", locale);

  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            locale,
            path,
            title: site.contact.title,
            description: site.contact.description,
          }),
          buildBreadcrumbSchema([
            { name: "Home", item: getRoute("home", locale) },
            { name: site.contact.eyebrow, item: path },
          ]),
        ]}
      />
      <Contact locale={locale} mode="full" />
    </>
  );
}

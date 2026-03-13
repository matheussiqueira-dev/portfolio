import type { Metadata } from "next";

import Contact from "@/components/sections/Contact";
import Hire from "@/components/sections/Hire";
import { resolveLocale, type LocaleParams } from "@/app/[locale]/_lib";
import { siteEn } from "@/data/site.en";
import { sitePt } from "@/data/site.pt";
import { allProjects } from "@/core/projects";
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
    route: "hire",
    title: site.services.title,
    description: site.services.description,
    keywords: [
      "Data Analytics Consulting",
      "Power BI Consulting Brazil",
      "Python Automation Services",
      "Full Stack Developer Brazil",
    ],
  });
}

export default async function HirePage({ params }: Props) {
  const locale = await resolveLocale(params);
  const site = locale === "en" ? siteEn : sitePt;
  const path = getRoute("hire", locale);

  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            locale,
            path,
            title: site.services.title,
            description: site.services.description,
          }),
          buildBreadcrumbSchema([
            { name: "Home", item: getRoute("home", locale) },
            { name: site.services.eyebrow, item: path },
          ]),
        ]}
      />
      <Hire locale={locale} projects={allProjects} />
      <Contact locale={locale} />
    </>
  );
}

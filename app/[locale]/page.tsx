import type { Metadata } from "next";

import HomePageContent from "@/components/sections/HomePageContent";
import { resolveLocale, type LocaleParams } from "@/app/[locale]/_lib";
import { siteEn } from "@/data/site.en";
import { sitePt } from "@/data/site.pt";
import { featuredProjects } from "@/core/projects";
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
    route: "home",
    title: `${site.hero.title} | ${site.hero.subtitle}`,
    description: site.hero.description,
    keywords: [
      "Data Analyst Brazil",
      "Business Intelligence Developer",
      "Power BI Developer Brazil",
      "Python Automation Developer",
      "Full Stack Developer Brazil",
    ],
  });
}

export default async function LocalizedHomePage({ params }: Props) {
  const locale = await resolveLocale(params);
  const site = locale === "en" ? siteEn : sitePt;
  const path = locale === "en" ? "/en" : "/";

  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            locale,
            path,
            title: `${site.hero.title} | ${site.hero.subtitle}`,
            description: site.hero.description,
          }),
          buildBreadcrumbSchema([{ name: "Home", item: path }]),
        ]}
      />
      <HomePageContent locale={locale} featuredProjects={featuredProjects} />
    </>
  );
}

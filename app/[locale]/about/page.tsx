import type { Metadata } from "next";

import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Skills from "@/components/sections/Skills";
import { resolveLocale, type LocaleParams } from "@/app/[locale]/_lib";
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
    route: "about",
    title: dict.pages.about.title,
    description: dict.pages.about.subtitle,
    keywords: [
      "Data Analyst Brazil",
      "Full Stack Developer Brazil",
      "BI Professional Recife",
      "Developer Portfolio Brazil",
    ],
    type: "profile",
  });
}

export default async function AboutPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  const path = getRoute("about", locale);

  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            locale,
            path,
            title: dict.pages.about.title,
            description: dict.pages.about.subtitle,
          }),
          buildBreadcrumbSchema([
            { name: "Home", item: getRoute("home", locale) },
            { name: dict.nav.about, item: path },
          ]),
        ]}
      />
      <About locale={locale} expanded />
      <Skills locale={locale} />
      <Contact locale={locale} />
    </>
  );
}

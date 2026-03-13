import type { Metadata } from "next";

import Academic from "@/components/sections/Academic";
import Contact from "@/components/sections/Contact";
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
    route: "academic",
    title: dict.pages.academic.title,
    description: dict.pages.academic.subtitle,
    keywords: [
      "Computer Science Brazil",
      "AI and Data Science postgraduate",
      "Cloud Security portfolio",
    ],
  });
}

export default async function AcademicPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  const path = getRoute("academic", locale);

  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            locale,
            path,
            title: dict.pages.academic.title,
            description: dict.pages.academic.subtitle,
          }),
          buildBreadcrumbSchema([
            { name: "Home", item: getRoute("home", locale) },
            { name: dict.nav.academic, item: path },
          ]),
        ]}
      />
      <Academic locale={locale} />
      <Contact locale={locale} />
    </>
  );
}

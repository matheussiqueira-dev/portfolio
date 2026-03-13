import type { Metadata } from "next";

import HomePageContent from "@/components/sections/HomePageContent";
import SiteFrame from "@/components/system/SiteFrame";
import { sitePt } from "@/data/site.pt";
import { featuredProjects } from "@/core/projects";
import { buildBreadcrumbSchema, buildPageMetadata, buildWebPageSchema } from "@/system/seo";
import JsonLd from "@/ui/components/seo/JsonLd";

export const metadata: Metadata = buildPageMetadata({
  locale: "pt-BR",
  route: "home",
  title: `${sitePt.hero.title} | ${sitePt.hero.subtitle}`,
  description: sitePt.hero.description,
  keywords: [
    "Data Analyst Brazil",
    "Power BI Developer Brazil",
    "Python Automation Developer",
    "Full Stack Developer Brazil",
    "AI Engineer Brazil",
  ],
});

export default function HomePage() {
  return (
    <SiteFrame locale="pt-BR">
      <JsonLd
        data={[
          buildWebPageSchema({
            locale: "pt-BR",
            path: "/",
            title: `${sitePt.hero.title} | ${sitePt.hero.subtitle}`,
            description: sitePt.hero.description,
          }),
          buildBreadcrumbSchema([{ name: "Home", item: "/" }]),
        ]}
      />
      <HomePageContent locale="pt-BR" featuredProjects={featuredProjects} />
    </SiteFrame>
  );
}

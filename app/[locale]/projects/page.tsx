import type { Metadata } from "next";

import ProjectsGrid from "@/components/sections/ProjectsGrid";
import SectionHeader from "@/components/ui/SectionHeader";
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
    route: "projects",
    title: site.projectsPage.title,
    description: site.projectsPage.description,
    keywords: [
      "Power BI SQL Python Portfolio",
      "Computer Vision Developer",
      "Portfolio Data Analyst",
      "Developer Portfolio Brazil",
    ],
    type: "article",
  });
}

export default async function ProjectsPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const site = locale === "en" ? siteEn : sitePt;
  const path = getRoute("projects", locale);

  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            locale,
            path,
            title: site.projectsPage.title,
            description: site.projectsPage.description,
          }),
          buildBreadcrumbSchema([
            { name: "Home", item: getRoute("home", locale) },
            { name: site.projectsPage.eyebrow, item: path },
          ]),
        ]}
      />
      <main className="section-shell">
        <div className="layout-container space-y-8">
          <SectionHeader
            eyebrow={site.projectsPage.eyebrow}
            title={site.projectsPage.title}
            subtitle={site.projectsPage.description}
          />
          <ProjectsGrid
            locale={locale}
            projects={allProjects}
            copy={{
              searchLabel: site.projects.filters.label,
              searchPlaceholder: site.projects.filters.searchPlaceholder,
              categoryLabel: site.projectsPage.filterLabel,
              filterAll: site.projects.filters.allLabel,
              featuredLabel: site.projects.featuredLabel,
              quickFilters: site.projectsPage.filters,
              resultsLabel: site.projects.filters.resultsLabel,
              emptyTitle: site.projects.filters.emptyTitle,
              emptyDescription: site.projects.filters.emptyDescription,
              ctaLabel: site.projectsPage.caseLabel,
            }}
          />
        </div>
      </main>
    </>
  );
}

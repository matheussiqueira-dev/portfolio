import { siteEn } from "@/data/site.en";
import { sitePt } from "@/data/site.pt";

import ProjectsGrid, { type ProjectsGridCopy } from "@/components/sections/ProjectsGrid";
import EncomPanel from "@/components/ui/EncomPanel";
import SectionHeader from "@/components/ui/SectionHeader";
import TronButton from "@/components/ui/TronButton";
import type { ProjectCaseStudy, SiteLocale } from "@/core/types";
import { getRoute } from "@/system/i18n";

type HireProps = {
  locale: SiteLocale;
  projects: ProjectCaseStudy[];
};

export default function Hire({ locale, projects }: HireProps) {
  const site = locale === "en" ? siteEn : sitePt;
  const relatedProjects = projects.filter((project) => project.featured).slice(0, 3);
  const projectsCopy: ProjectsGridCopy = {
    searchLabel: site.projects.filters.label,
    searchPlaceholder: site.projects.filters.searchPlaceholder,
    categoryLabel: site.projectsPage.filterLabel,
    filterAll: site.projects.filters.allLabel,
    featuredLabel: site.projects.featuredLabel,
    quickFilters: site.projectsPage.filters,
    resultsLabel: site.projects.filters.resultsLabel,
    emptyTitle: site.projects.filters.emptyTitle,
    emptyDescription: site.projects.filters.emptyDescription,
    ctaLabel: site.projects.caseLabel,
  };

  return (
    <section className="section-shell">
      <div className="layout-container space-y-8">
        <SectionHeader
          eyebrow={site.services.eyebrow}
          title={site.services.title}
          subtitle={site.services.description}
        />

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {site.services.offerings.map((service) => (
            <EncomPanel key={service.title} className="p-6">
              <p className="section-title text-lg text-[color:var(--foreground)]">
                {service.title}
              </p>
              <p className="mt-4 text-sm text-[color:var(--muted)]">{service.description}</p>
              <div className="mt-5 grid gap-3">
                {service.bullets.map((item) => (
                  <div key={item} className="rounded-2xl border border-[color:var(--border)] p-4">
                    <p className="text-sm text-[color:var(--foreground)]">{item}</p>
                  </div>
                ))}
              </div>
            </EncomPanel>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {site.services.process.map((step, index) => (
            <EncomPanel key={step.title} className="p-5">
              <p className="ui-label text-xs text-[color:var(--muted)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg text-[color:var(--foreground)]">{step.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--muted)]">{step.description}</p>
            </EncomPanel>
          ))}
        </div>

        <EncomPanel className="p-6">
          <SectionHeader
            eyebrow={site.engagement.eyebrow}
            title={site.engagement.title}
            subtitle={site.engagement.description}
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {site.engagement.cards.map((card) => (
              <div key={card.label} className="rounded-2xl border border-[color:var(--border)] p-5">
                <p className="ui-label text-xs text-[color:var(--muted)]">{card.label}</p>
                <p className="mt-3 text-lg text-[color:var(--foreground)]">{card.value}</p>
                <p className="mt-3 text-sm text-[color:var(--muted)]">{card.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <TronButton href={getRoute("contact", locale)}>
              {site.engagement.cta.primaryLabel}
            </TronButton>
            <TronButton href={getRoute("projects", locale)} variant="secondary">
              {site.engagement.cta.secondaryLabel}
            </TronButton>
          </div>
        </EncomPanel>

        <EncomPanel className="p-6">
          <p className="section-title text-xl text-[color:var(--foreground)]">
            {site.services.cta.title}
          </p>
          <p className="mt-3 max-w-3xl text-sm text-[color:var(--muted)]">
            {site.services.cta.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <TronButton href={getRoute("contact", locale)}>
              {site.services.cta.primaryLabel}
            </TronButton>
            <TronButton href={getRoute("projects", locale)} variant="secondary">
              {site.services.cta.secondaryLabel}
            </TronButton>
          </div>
        </EncomPanel>

        <div className="space-y-6">
          <SectionHeader
            eyebrow={site.projects.eyebrow}
            title={locale === "en" ? "Related projects" : "Projetos relacionados"}
            subtitle={site.projects.description}
          />
          <ProjectsGrid
            locale={locale}
            projects={relatedProjects}
            showFilters={false}
            limit={3}
            copy={projectsCopy}
          />
        </div>
      </div>
    </section>
  );
}

import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import ProjectsGrid, { type ProjectsGridCopy } from "@/components/sections/ProjectsGrid";
import AnimatedMetric from "@/components/ui/AnimatedMetric";
import EncomPanel from "@/components/ui/EncomPanel";
import SectionHeader from "@/components/ui/SectionHeader";
import TronButton from "@/components/ui/TronButton";
import { siteEn } from "@/data/site.en";
import { sitePt } from "@/data/site.pt";
import type { ProjectCaseStudy, SiteLocale } from "@/core/types";
import { getRoute } from "@/system/i18n";

type HomePageContentProps = {
  locale: SiteLocale;
  featuredProjects: ProjectCaseStudy[];
};

export default function HomePageContent({ locale, featuredProjects }: HomePageContentProps) {
  const site = locale === "en" ? siteEn : sitePt;
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
    <main>
      <Hero locale={locale} />

      <section className="section-shell">
        <div className="layout-container grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
          <EncomPanel className="p-6 sm:p-8">
            <SectionHeader
              eyebrow={site.executiveSummary.eyebrow}
              title={site.executiveSummary.title}
            />
            <div className="mt-6 space-y-4">
              {site.executiveSummary.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm text-[color:var(--foreground)] sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {site.executiveSummary.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-[color:var(--border)] p-5"
                >
                  <p className="ui-label text-xs text-[color:var(--muted)]">
                    {site.projects.cardLabel}
                  </p>
                  <p className="mt-3 text-sm text-[color:var(--foreground)]">{card.title}</p>
                </div>
              ))}
            </div>
          </EncomPanel>

          <EncomPanel className="p-6 sm:p-8">
            <SectionHeader eyebrow={site.primaryStack.eyebrow} title={site.primaryStack.title} />
            <div className="mt-6 grid gap-5">
              {site.primaryStack.items.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-[color:var(--foreground)]">{item.label}</span>
                    <span className="ui-label text-xs text-[color:var(--muted)]">
                      {item.level}/5
                    </span>
                  </div>
                  <div className="stack-meter mt-3">
                    <span style={{ width: `${item.level * 20}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </EncomPanel>
        </div>
      </section>

      <About locale={locale} />

      <section className="section-shell">
        <div className="layout-container space-y-8">
          <SectionHeader
            eyebrow={site.services.eyebrow}
            title={site.services.title}
            subtitle={site.services.description}
          />
          <div className="grid gap-5 xl:grid-cols-3">
            {site.services.offerings.map((offering) => (
              <EncomPanel key={offering.title} className="p-6">
                <p className="section-title text-lg text-[color:var(--foreground)]">
                  {offering.title}
                </p>
                <p className="mt-4 text-sm text-[color:var(--muted)]">{offering.description}</p>
                <div className="mt-5 grid gap-3">
                  {offering.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-2xl border border-[color:var(--border)] p-4"
                    >
                      <p className="text-sm text-[color:var(--foreground)]">{bullet}</p>
                    </div>
                  ))}
                </div>
              </EncomPanel>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <TronButton href={getRoute("hire", locale)}>
              {site.services.cta.primaryLabel}
            </TronButton>
            <TronButton href={getRoute("projects", locale)} variant="secondary">
              {site.services.cta.secondaryLabel}
            </TronButton>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="layout-container space-y-8">
          <SectionHeader eyebrow={site.metrics.eyebrow} title={site.metrics.title} />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {site.metrics.items.map((item) => (
              <AnimatedMetric key={item.label} label={item.label} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="layout-container space-y-8">
          <SectionHeader
            eyebrow={site.projects.eyebrow}
            title={site.projects.title}
            subtitle={site.projects.description}
          />
          <ProjectsGrid
            locale={locale}
            projects={featuredProjects}
            showFilters={false}
            limit={6}
            copy={projectsCopy}
          />
          <div className="flex justify-start">
            <TronButton href={getRoute("projects", locale)} variant="secondary">
              {site.projects.viewAllLabel}
            </TronButton>
          </div>
        </div>
      </section>

      <Contact locale={locale} />
    </main>
  );
}

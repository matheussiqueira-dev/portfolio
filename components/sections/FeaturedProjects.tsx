import type { ProjectCaseStudy, SiteLocale } from "@/core/types";
import { getDictionary } from "@/system/i18n";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import SectionHeader from "@/components/ui/SectionHeader";

type FeaturedProjectsProps = {
  locale: SiteLocale;
  projects: ProjectCaseStudy[];
};

export default function FeaturedProjects({ locale, projects }: FeaturedProjectsProps) {
  const dict = getDictionary(locale);

  return (
    <section className="section-shell">
      <div className="layout-container space-y-8">
        <SectionHeader
          eyebrow={dict.nav.projects}
          title={dict.home.featuredTitle}
          subtitle={dict.home.featuredSubtitle}
        />
        <ProjectsGrid locale={locale} projects={projects} showFilters={false} limit={6} />
      </div>
    </section>
  );
}

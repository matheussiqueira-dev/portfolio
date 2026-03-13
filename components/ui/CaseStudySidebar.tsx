import GlowBadge from "@/components/ui/GlowBadge";
import TronButton from "@/components/ui/TronButton";
import EncomPanel from "@/components/ui/EncomPanel";
import { projectCategoryLabels } from "@/core/constants";
import type { ProjectCaseStudy, SiteLocale } from "@/core/types";
import { pickLocalized } from "@/core/utils";
import { getDictionary, getRoute } from "@/system/i18n";

type CaseStudySidebarProps = {
  locale: SiteLocale;
  project: ProjectCaseStudy;
};

export default function CaseStudySidebar({ locale, project }: CaseStudySidebarProps) {
  const dict = getDictionary(locale);

  return (
    <div className="space-y-4 lg:sticky lg:top-28">
      <EncomPanel as="aside" className="p-5">
        <p className="ui-label text-xs text-[color:var(--muted)]">{dict.caseStudy.quickLinks}</p>
        <div className="mt-4 grid gap-3">
          {project.githubUrl ? (
            <TronButton href={project.githubUrl} external variant="secondary">
              {dict.common.github}
            </TronButton>
          ) : null}
          {project.demoUrl ? (
            <TronButton href={project.demoUrl} external={project.demoUrl.startsWith("http")}>
              {dict.common.demo}
            </TronButton>
          ) : null}
          <TronButton href={getRoute("contact", locale)} variant="secondary">
            {dict.common.contact}
          </TronButton>
        </div>
      </EncomPanel>

      <EncomPanel as="aside" className="p-5">
        <dl className="grid gap-4">
          <div>
            <dt className="ui-label text-xs text-[color:var(--muted)]">
              {dict.caseStudy.sections.role}
            </dt>
            <dd className="mt-2 text-sm text-[color:var(--foreground)]">
              {pickLocalized(project.role, locale)}
            </dd>
          </div>
          <div>
            <dt className="ui-label text-xs text-[color:var(--muted)]">
              {dict.caseStudy.sections.category}
            </dt>
            <dd className="mt-2 text-sm text-[color:var(--foreground)]">
              {projectCategoryLabels[project.category][locale]}
            </dd>
          </div>
          <div>
            <dt className="ui-label text-xs text-[color:var(--muted)]">
              {dict.caseStudy.sections.recruiterKeywords}
            </dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {project.recruiterKeywords.map((keyword) => (
                <GlowBadge key={keyword}>{keyword}</GlowBadge>
              ))}
            </dd>
          </div>
          <div>
            <dt className="ui-label text-xs text-[color:var(--muted)]">
              {dict.caseStudy.sections.githubKeywords}
            </dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {project.githubKeywords.map((keyword) => (
                <GlowBadge key={keyword}>{keyword}</GlowBadge>
              ))}
            </dd>
          </div>
        </dl>
      </EncomPanel>
    </div>
  );
}

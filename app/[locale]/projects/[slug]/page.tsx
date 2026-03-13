import type { Metadata } from "next";

import Image from "next/image";
import { notFound } from "next/navigation";

import ProjectsGrid from "@/components/sections/ProjectsGrid";
import CaseStudySidebar from "@/components/ui/CaseStudySidebar";
import EncomPanel from "@/components/ui/EncomPanel";
import ScreenshotGallery from "@/components/ui/ScreenshotGallery";
import SectionHeader from "@/components/ui/SectionHeader";
import TechStackList from "@/components/ui/TechStackList";
import TronButton from "@/components/ui/TronButton";
import { resolveLocale } from "@/app/[locale]/_lib";
import { projectCategoryLabels } from "@/core/constants";
import { getProjectBySlug, projectSlugs } from "@/core/projects";
import { pickLocalized } from "@/core/utils";
import { getDictionary, getProjectRoute, getRoute } from "@/system/i18n";
import { buildProjectMetadata, buildProjectSchemas } from "@/system/seo";
import JsonLd from "@/ui/components/seo/JsonLd";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return projectSlugs.flatMap((slug) => [
    { locale: "pt-BR", slug },
    { locale: "en", slug },
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const locale = await resolveLocale(params);
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return buildProjectMetadata(locale, project);
}

function ParagraphStack({ items }: { items: string[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <p key={item} className="text-sm text-[color:var(--foreground)] sm:text-base">
          {item}
        </p>
      ))}
    </div>
  );
}

function BulletGrid({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="rounded-2xl border border-[color:var(--border)] p-4">
          <p className="text-sm text-[color:var(--foreground)]">{item}</p>
        </div>
      ))}
    </div>
  );
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const locale = await resolveLocale(params);
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const dict = getDictionary(locale);
  const relatedProjects = project.relatedSlugs
    .map((relatedSlug) => getProjectBySlug(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const breadcrumbItems = [
    { name: "Home", item: getRoute("home", locale) },
    { name: dict.nav.projects, item: getRoute("projects", locale) },
    { name: project.title[locale], item: getProjectRoute(locale, project.slug) },
  ];

  return (
    <>
      <JsonLd data={buildProjectSchemas(locale, project, breadcrumbItems)} />
      <main className="section-shell">
        <div className="layout-container space-y-10">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-[color:var(--muted)]">
            {breadcrumbItems.map((item, index) => (
              <span key={item.item} className="flex items-center gap-2">
                <a href={item.item} className="hover:text-[color:var(--foreground)]">
                  {item.name}
                </a>
                {index < breadcrumbItems.length - 1 ? <span>/</span> : null}
              </span>
            ))}
          </nav>

          <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <EncomPanel className="p-6 sm:p-8">
              <p className="ui-label text-sm text-[color:var(--muted)]">
                {projectCategoryLabels[project.category][locale]}
              </p>
              <h1 className="section-title mt-4 text-3xl text-[color:var(--foreground)] sm:text-5xl">
                {project.title[locale]}
              </h1>
              <p className="mt-4 text-lg text-[color:var(--foreground)]">
                {project.oneLiner[locale]}
              </p>
              <p className="mt-4 text-base text-[color:var(--muted)]">
                {project.shortDescription[locale]}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="tron-badge">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.githubUrl ? (
                  <TronButton href={project.githubUrl} external>
                    {dict.common.github}
                  </TronButton>
                ) : null}
                {project.demoUrl ? (
                  <TronButton
                    href={project.demoUrl}
                    external={project.demoUrl.startsWith("http")}
                    variant="secondary"
                  >
                    {dict.common.demo}
                  </TronButton>
                ) : null}
                <TronButton href={getRoute("contact", locale)} variant="secondary">
                  {dict.common.contact}
                </TronButton>
              </div>
            </EncomPanel>

            <EncomPanel className="p-4">
              {project.videoUrl ? (
                <video
                  className="w-full rounded-[1rem] border border-[color:var(--border)]"
                  controls
                  preload="metadata"
                  poster={project.heroImage}
                >
                  <source src={project.videoUrl} />
                </video>
              ) : (
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1rem] border border-[color:var(--border)]">
                  <Image
                    src={project.heroImage}
                    alt={project.title[locale]}
                    fill
                    sizes="(min-width: 1280px) 35vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
            </EncomPanel>
          </section>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-6">
              <EncomPanel className="p-6">
                <SectionHeader
                  eyebrow={dict.caseStudy.overview}
                  title={project.title[locale]}
                  subtitle={project.shortDescription[locale]}
                />
                <div className="mt-6">
                  <ParagraphStack items={project.overview[locale]} />
                </div>
              </EncomPanel>

              <EncomPanel className="p-6">
                <SectionHeader eyebrow={dict.caseStudy.problem} title={dict.caseStudy.problem} />
                <div className="mt-6">
                  <BulletGrid items={project.problem[locale]} />
                </div>
              </EncomPanel>

              <EncomPanel className="p-6">
                <SectionHeader eyebrow={dict.caseStudy.solution} title={dict.caseStudy.solution} />
                <div className="mt-6">
                  <BulletGrid items={project.solution[locale]} />
                </div>
              </EncomPanel>

              <EncomPanel className="p-6">
                <SectionHeader
                  eyebrow={dict.caseStudy.architecture}
                  title={dict.caseStudy.architecture}
                  subtitle={project.architecture.summary[locale]}
                />
                <div className="mt-6 grid gap-5 xl:grid-cols-3">
                  <div>
                    <p className="ui-label text-xs text-[color:var(--muted)]">
                      {dict.caseStudy.sections.flow}
                    </p>
                    <div className="mt-4">
                      <ParagraphStack items={project.architecture.flow[locale]} />
                    </div>
                  </div>
                  <div>
                    <p className="ui-label text-xs text-[color:var(--muted)]">
                      {dict.caseStudy.sections.modules}
                    </p>
                    <div className="mt-4">
                      <BulletGrid items={project.architecture.modules[locale]} />
                    </div>
                  </div>
                  <div>
                    <p className="ui-label text-xs text-[color:var(--muted)]">
                      {dict.caseStudy.sections.runtime}
                    </p>
                    <div className="mt-4">
                      <BulletGrid items={project.architecture.runtime[locale]} />
                    </div>
                  </div>
                </div>
              </EncomPanel>

              <EncomPanel className="p-6">
                <SectionHeader
                  eyebrow={dict.caseStudy.implementation}
                  title={dict.caseStudy.implementation}
                  subtitle={project.implementation.summary[locale]}
                />
                <div className="mt-6 grid gap-5 xl:grid-cols-3">
                  <div>
                    <p className="ui-label text-xs text-[color:var(--muted)]">Implementation</p>
                    <div className="mt-4">
                      <BulletGrid items={project.implementation.bullets[locale]} />
                    </div>
                  </div>
                  <div>
                    <p className="ui-label text-xs text-[color:var(--muted)]">Challenges</p>
                    <div className="mt-4">
                      <BulletGrid items={project.implementation.challenges[locale]} />
                    </div>
                  </div>
                  <div>
                    <p className="ui-label text-xs text-[color:var(--muted)]">Tradeoffs</p>
                    <div className="mt-4">
                      <BulletGrid items={project.implementation.tradeoffs[locale]} />
                    </div>
                  </div>
                </div>
              </EncomPanel>

              <EncomPanel className="p-6">
                <SectionHeader
                  eyebrow={dict.caseStudy.techStack}
                  title={dict.caseStudy.techStack}
                />
                <div className="mt-6">
                  <TechStackList
                    groups={Object.entries(project.techStackGroups)
                      .filter(([, items]) => items.length)
                      .map(([label, items]) => ({
                        label: label.toUpperCase(),
                        items,
                      }))}
                  />
                </div>
              </EncomPanel>

              <EncomPanel className="p-6">
                <SectionHeader eyebrow={dict.caseStudy.gallery} title={dict.caseStudy.gallery} />
                <div className="mt-6">
                  <ScreenshotGallery items={project.screenshots} locale={locale} />
                </div>
              </EncomPanel>

              <EncomPanel className="p-6">
                <SectionHeader
                  eyebrow={dict.caseStudy.repository}
                  title={dict.caseStudy.repository}
                  subtitle={project.repositorySummary[locale]}
                />
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.githubKeywords.map((keyword) => (
                    <span key={keyword} className="tron-badge">
                      {keyword}
                    </span>
                  ))}
                </div>
              </EncomPanel>

              <EncomPanel className="p-6">
                <SectionHeader eyebrow={dict.caseStudy.impact} title={dict.caseStudy.impact} />
                <div className="mt-6">
                  <BulletGrid items={project.impact[locale]} />
                </div>
              </EncomPanel>

              {relatedProjects.length ? (
                <div className="space-y-6">
                  <SectionHeader
                    eyebrow={dict.common.relatedProjects}
                    title={dict.common.relatedProjects}
                    subtitle={pickLocalized(project.title, locale)}
                  />
                  <ProjectsGrid
                    locale={locale}
                    projects={relatedProjects}
                    showFilters={false}
                    limit={3}
                  />
                </div>
              ) : null}
            </div>

            <CaseStudySidebar locale={locale} project={project} />
          </div>
        </div>
      </main>
    </>
  );
}

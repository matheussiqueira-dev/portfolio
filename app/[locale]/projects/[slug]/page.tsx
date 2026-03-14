import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteEn } from "@/data/site.en";
import { sitePt } from "@/data/site.pt";
import { getProjectBySlug, projectSlugs } from "@/data/projects";
import { getProjectBySlugEn } from "@/data/projects.en";
import ProjectCasePage from "@/ui/components/pages/ProjectCasePage";

import { resolveLocale } from "../../_lib";

type RouteParams = Promise<{ locale: string; slug: string }>;

type Props = {
  params: RouteParams;
};

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = await resolveLocale(Promise.resolve({ locale: resolvedParams.locale }));
  const project =
    locale === "en"
      ? getProjectBySlugEn(resolvedParams.slug)
      : getProjectBySlug(resolvedParams.slug);

  if (!project) {
    return {
      title: locale === "en" ? "Project" : "Projeto",
      description: locale === "en" ? "Project details" : "Detalhes do projeto",
    };
  }

  return {
    title: project.seo?.title ?? project.title,
    description: project.seo?.description ?? project.tagline,
  };
}

export default async function ProjectsSlugPage({ params }: Props) {
  const { locale, slug } = await params;
  const resolvedLocale = await resolveLocale(Promise.resolve({ locale }));
  const project = resolvedLocale === "en" ? getProjectBySlugEn(slug) : getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const site = resolvedLocale === "en" ? siteEn : sitePt;

  return (
    <ProjectCasePage
      project={project}
      locale={resolvedLocale === "en" ? "en" : "pt"}
      copy={site.projectDetail}
    />
  );
}

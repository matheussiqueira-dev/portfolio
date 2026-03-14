import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getProjectBySlug, projectSlugs } from "@/data/projects";
import { getProjectBySlugEn } from "@/data/projects.en";
import { siteEn } from "@/data/site.en";
import { sitePt } from "@/data/site.pt";
import DemoCasePage from "@/ui/components/pages/DemoCasePage";

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
  const locale = await resolveLocale(
    Promise.resolve({ locale: resolvedParams.locale })
  );
  const project =
    locale === "en"
      ? getProjectBySlugEn(resolvedParams.slug)
      : getProjectBySlug(resolvedParams.slug);

  return {
    title: project ? `${project.title} | Demo` : locale === "en" ? "Demo" : "Demo",
    description: project?.tagline ?? (locale === "en" ? "Interactive demo" : "Demo interativa"),
  };
}

export default async function DemosSlugPage({ params }: Props) {
  const { locale, slug } = await params;
  const resolvedLocale = await resolveLocale(Promise.resolve({ locale }));
  const project =
    resolvedLocale === "en" ? getProjectBySlugEn(slug) : getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <DemoCasePage
      locale={resolvedLocale === "en" ? "en" : "pt"}
      project={project}
      copy={(resolvedLocale === "en" ? siteEn : sitePt).demos}
    />
  );
}

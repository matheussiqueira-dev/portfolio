import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProjectsSlugEn, {
  generateMetadata as generateEnMetadata,
  generateStaticParams as generateEnStaticParams,
} from "@/i18n-pages/en/projects/[slug]/page";
import ProjectsSlugPt, {
  generateMetadata as generatePtMetadata,
  generateStaticParams as generatePtStaticParams,
} from "@/i18n-pages/pt/projetos/[slug]/page";
import { isValidLocale } from "@/core/i18n/routing";

type RouteParams = Promise<{ locale: string; slug: string }>;

type Props = {
  params: RouteParams;
};

export function generateStaticParams() {
  const pt = generatePtStaticParams().map(({ slug }) => ({
    locale: "pt-BR" as const,
    slug,
  }));
  const en = generateEnStaticParams().map(({ slug }) => ({
    locale: "en" as const,
    slug,
  }));

  return [...pt, ...en];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  if (locale === "en") {
    return generateEnMetadata({ params: { slug } });
  }

  return generatePtMetadata({ params: { slug } });
}

export default async function ProjectsSlugPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  if (locale === "en") {
    return <ProjectsSlugEn params={{ slug }} />;
  }

  return <ProjectsSlugPt params={{ slug }} />;
}


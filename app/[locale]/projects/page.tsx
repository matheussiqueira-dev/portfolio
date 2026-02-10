import type { Metadata } from "next";

import ProjectsEn, {
  metadata as metadataEn,
} from "@/i18n-pages/en/projects/page";
import ProjectsPt, {
  metadata as metadataPt,
} from "@/i18n-pages/pt/projetos/page";

import { resolveLocale, type LocaleParams } from "../_lib";

type SearchParams = {
  stack?: string;
};

type Props = {
  params: LocaleParams;
  searchParams?: SearchParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return locale === "en" ? metadataEn : metadataPt;
}

export default async function ProjectsPage({ params, searchParams }: Props) {
  const locale = await resolveLocale(params);

  if (locale === "en") {
    return <ProjectsEn searchParams={searchParams} />;
  }

  return <ProjectsPt searchParams={searchParams} />;
}


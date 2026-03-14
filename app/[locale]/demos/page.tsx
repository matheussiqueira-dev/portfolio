import type { Metadata } from "next";

import { projects } from "@/data/projects";
import { projectsEn } from "@/data/projects.en";
import { siteEn } from "@/data/site.en";
import { sitePt } from "@/data/site.pt";
import DemosHub from "@/ui/components/pages/DemosHub";

import { resolveLocale, type LocaleParams } from "../_lib";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return {
    title: locale === "pt-BR" ? "Demos" : "Demos",
    description:
      locale === "pt-BR" ? "Projetos e demos interativas" : "Interactive projects and demos",
  };
}

export default async function DemosPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const isEn = locale === "en";

  return (
    <DemosHub
      locale={isEn ? "en" : "pt"}
      projects={isEn ? projectsEn : projects}
      copy={(isEn ? siteEn : sitePt).demos}
    />
  );
}

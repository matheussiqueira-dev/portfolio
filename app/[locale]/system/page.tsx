import type { Metadata } from "next";

import { certificatesEn } from "@/data/certificates.en";
import { certificatesPt } from "@/data/certificates.pt";
import { projects } from "@/data/projects";
import { projectsEn } from "@/data/projects.en";
import { resume } from "@/data/resume";
import { resumeEn } from "@/data/resume.en";
import { siteEn } from "@/data/site.en";
import { sitePt } from "@/data/site.pt";
import { projectSupportsDemo } from "@/system/config/project-intelligence";
import SystemsOverviewPage from "@/ui/components/pages/SystemsOverviewPage";

import { resolveLocale, type LocaleParams } from "../_lib";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);

  return {
    title: locale === "en" ? "System Metrics" : "Metricas do Sistema",
    description:
      locale === "en"
        ? "System architecture and project metrics overview."
        : "Visao geral de arquitetura e metricas dos projetos.",
  };
}

export default async function SystemPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const isEn = locale === "en";
  const projectList = isEn ? projectsEn : projects;

  return (
    <SystemsOverviewPage
      locale={isEn ? "en" : "pt"}
      totals={{
        projects: projectList.length,
        demos: projectList.filter(projectSupportsDemo).length,
        certificates: (isEn ? certificatesEn : certificatesPt).length,
        educationGroups: (isEn ? resumeEn : resume).education.groups.length,
      }}
      services={(isEn ? siteEn : sitePt).services.offerings}
    />
  );
}

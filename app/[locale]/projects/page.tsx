import type { Metadata } from "next";

import { getProjectsCard } from "@/data/projects-card";

import { resolveLocale, type LocaleParams } from "../_lib";
import { ProjectsContent } from "./projects-content";

type SearchParams = {
  stack?: string;
};

type Props = {
  params: LocaleParams;
  searchParams?: SearchParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);

  return {
    title: locale === "en" ? "Projects" : "Projetos",
    description:
      locale === "en"
        ? "Explore my portfolio of web, data, and BI projects"
        : "Explore meu portf\u00f3lio de projetos de web, dados e BI",
  };
}

export default async function ProjectsPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const uiLocale = locale === "en" ? "en" : "pt";
  const projects = getProjectsCard(uiLocale);

  return <ProjectsContent projects={projects} locale={uiLocale} />;
}
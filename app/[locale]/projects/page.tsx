import type { Metadata } from "next";
import { resolveLocale, type LocaleParams } from "../_lib";
import { ProjectsContent } from "./projects-content";
import { getProjectsCard } from "@/data/projects-card";

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
        : "Explore meu portfólio de projetos de web, dados e BI",
  };
}

export default async function ProjectsPage({
  params,
}: Props) {
  const locale = await resolveLocale(params);
  const projects = getProjectsCard(locale as "pt" | "en");

  return (
    <ProjectsContent
      projects={projects}
      locale={locale as "pt" | "en"}
    />
  );
}


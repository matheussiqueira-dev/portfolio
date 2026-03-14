import { siteEn } from "@/data/site.en";
import { sitePt } from "@/data/site.pt";
import type { ProjectCard } from "@/data/projects-card.types";
import ProjectsCommandCenter from "@/ui/components/pages/ProjectsCommandCenter";

interface ProjectsContentProps {
  projects: ProjectCard[];
  locale: "pt" | "en";
}

export function ProjectsContent({ projects, locale }: ProjectsContentProps) {
  const site = locale === "pt" ? sitePt : siteEn;

  return <ProjectsCommandCenter projects={projects} locale={locale} copy={site.projects} />;
}

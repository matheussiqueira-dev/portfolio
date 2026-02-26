"use client";

import type { ProjectCard } from "@/data/projects-card.types";
import { ProjectList } from "@/system/projects/ProjectList";
import styles from "./projects-page.module.css";

interface ProjectsContentProps {
  projects: ProjectCard[];
  locale: "pt" | "en";
}

const labels = {
  pt: {
    title: "Projetos",
    description: "Explore uma seleção dos meus projetos em web, dados e BI",
    filterAll: "Todos",
  },
  en: {
    title: "Projects",
    description:
      "Explore a selection of my projects in web development, data, and BI",
    filterAll: "All",
  },
};

export function ProjectsContent({
  projects,
  locale,
}: ProjectsContentProps) {
  const t = labels[locale];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.description}>{t.description}</p>
      </div>

      <ProjectList
        projects={projects}
        locale={locale}
        allLabel={t.filterAll}
      />
    </div>
  );
}

"use client";

import type { ProjectCard } from "@/data/projects-card.types";
import ProjectList from "@/system/projects/ProjectList";
import styles from "./projects-page.module.css";

interface ProjectsContentProps {
  projects: ProjectCard[];
  locale: "pt" | "en";
}

const labels = {
  pt: {
    title: "Projetos que conectam produto, dados e automação",
    description:
      "Uma seleção de cases com contexto, stack, decisões técnicas e impacto em software, BI, IA e eficiência operacional.",
    filterAll: "Todos",
  },
  en: {
    title: "Projects connecting product, data and automation",
    description:
      "Selected cases with context, stack, technical decisions and impact across software, BI, AI and operational efficiency.",
    filterAll: "All",
  },
};

export function ProjectsContent({ projects, locale }: ProjectsContentProps) {
  const t = labels[locale];

  return (
    <main className="layout-container page-shell">
      <div className={styles.header} data-reveal>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.description}>{t.description}</p>
      </div>

      <ProjectList projects={projects} locale={locale} allLabel={t.filterAll} />
    </main>
  );
}

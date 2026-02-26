"use client";

import { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import type { ProjectCard as ProjectCardType } from "@/data/projects-card.types";
import styles from "./ProjectList.module.css";

interface Props {
  projects: ProjectCardType[];
  locale: "pt" | "en";
}

const labels = {
  pt: {
    title: "Meus Projetos",
    description: "Portfólio de casos de sucesso em desenvolvimento full stack, dados e IA",
    filterLabel: "Filtrar por stack",
    allProjects: "Todos os projetos",
    emptyState: "Nenhum projeto encontrado",
  },
  en: {
    title: "My Projects",
    description: "Portfolio of successful cases in full stack development, data and AI",
    filterLabel: "Filter by stack",
    allProjects: "All projects",
    emptyState: "No projects found",
  },
};

/**
 * ProjectList - Container for project cards with filtering
 * 
 * Features:
 * - Stack-based filtering
 * - Responsive grid layout
 * - Staggered animations
 * - Empty state handling
 */
export default function ProjectList({ projects, locale }: Props) {
  const [selectedStack, setSelectedStack] = useState<string | null>(null);
  const t = labels[locale];

  // Extract all unique stacks for filters
  const allStacks = useMemo(() => {
    const stacks = new Set<string>();
    projects.forEach((p) => p.stack.forEach((s) => stacks.add(s)));
    return Array.from(stacks).sort();
  }, [projects]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (!selectedStack) return projects;
    return projects.filter((p) => p.stack.includes(selectedStack));
  }, [projects, selectedStack]);

  return (
    <section className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.description}>{t.description}</p>
      </header>

      {/* Filters */}
      <nav className={styles.filterNav} aria-label={t.filterLabel}>
        <span className={styles.filterLabel}>{t.filterLabel}</span>
        <div className={styles.filters}>
          <button
            className={`${styles.filter} ${
              selectedStack === null ? styles.active : ""
            }`}
            onClick={() => setSelectedStack(null)}
            aria-pressed={selectedStack === null}
          >
            {t.allProjects}
          </button>

          {allStacks.map((stack) => (
            <button
              key={stack}
              className={`${styles.filter} ${
                selectedStack === stack ? styles.active : ""
              }`}
              onClick={() => setSelectedStack(stack)}
              aria-pressed={selectedStack === stack}
            >
              {stack}
            </button>
          ))}
        </div>
      </nav>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className={styles.grid}>
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              locale={locale}
              index={idx}
            />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <p>{t.emptyState}</p>
        </div>
      )}

      {/* Results count */}
      {filteredProjects.length > 0 && (
        <p className={styles.resultCount}>
          {filteredProjects.length}{" "}
          {filteredProjects.length === 1 ? "projeto" : "projetos"}{" "}
          {selectedStack ? `com ${selectedStack}` : ""}
        </p>
      )}
    </section>
  );
}

"use client";

import { useMemo, useState, type CSSProperties } from "react";

import type { ProjectCard as ProjectCardType } from "@/data/projects-card.types";

import ProjectCard from "./ProjectCard";
import styles from "./ProjectList.module.css";

interface Props {
  projects: ProjectCardType[];
  locale: "pt" | "en";
  allLabel?: string;
}

type FloatStyle = CSSProperties & {
  "--float-duration"?: string;
  "--float-amplitude"?: string;
  "--float-delay"?: string;
};

const labels = {
  pt: {
    title: "Meus Projetos",
    description:
      "Portf\u00f3lio de casos de sucesso em desenvolvimento full stack, dados e IA",
    filterLabel: "Filtrar por stack",
    allProjects: "Todos os projetos",
    emptyState: "Nenhum projeto encontrado",
    singularResult: "projeto",
    pluralResult: "projetos",
    withStack: "com",
  },
  en: {
    title: "My Projects",
    description: "Portf\u00f3lio of successful cases in full stack development, data, and AI",
    filterLabel: "Filter by stack",
    allProjects: "All projects",
    emptyState: "No projects found",
    singularResult: "project",
    pluralResult: "projects",
    withStack: "with",
  },
};

function hashLabel(value: string) {
  let hash = 0;
  for (let idx = 0; idx < value.length; idx += 1) {
    hash = (hash * 31 + value.charCodeAt(idx)) >>> 0;
  }
  return hash;
}

function getFloatStyle(label: string, index: number): FloatStyle {
  const hash = hashLabel(`${label}-${index}`);
  const duration = 4 + (hash % 301) / 100; // 4.00s to 7.00s
  const amplitude = 2 + (hash % 5); // 2px to 6px
  const delay = -((hash % 240) / 100); // -0.00s to -2.40s

  return {
    "--float-duration": `${duration.toFixed(2)}s`,
    "--float-amplitude": `${amplitude}px`,
    "--float-delay": `${delay.toFixed(2)}s`,
  };
}

/**
 * ProjectList - Container for project cards with filtering
 */
export default function ProjectList({ projects, locale, allLabel }: Props) {
  const [selectedStack, setSelectedStack] = useState<string | null>(null);
  const t = labels[locale];

  const allStacks = useMemo(() => {
    const stacks = new Set<string>();
    projects.forEach((project) => project.stack.forEach((stack) => stacks.add(stack)));
    return Array.from(stacks).sort();
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (!selectedStack) {
      return projects;
    }

    return projects.filter((project) => project.stack.includes(selectedStack));
  }, [projects, selectedStack]);

  const resultLabel =
    filteredProjects.length === 1 ? t.singularResult : t.pluralResult;

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>{t.title}</h2>
        <p className={styles.description}>{t.description}</p>
      </header>

      <nav className={styles.filterNav} aria-label={t.filterLabel}>
        <span className={styles.filterLabel}>{t.filterLabel}</span>
        <div className={styles.filters}>
          <button
            className={`${styles.filter} ${
              selectedStack === null ? styles.active : ""
            }`}
            style={getFloatStyle(allLabel ?? t.allProjects, 0)}
            onClick={() => setSelectedStack(null)}
            aria-pressed={selectedStack === null}
            data-active={selectedStack === null}
            type="button"
          >
            {allLabel ?? t.allProjects}
          </button>

          {allStacks.map((stack, stackIndex) => (
            <button
              key={stack}
              className={`${styles.filter} ${
                selectedStack === stack ? styles.active : ""
              }`}
              style={getFloatStyle(stack, stackIndex + 1)}
              onClick={() => setSelectedStack(stack)}
              aria-pressed={selectedStack === stack}
              data-active={selectedStack === stack}
              type="button"
            >
              {stack}
            </button>
          ))}
        </div>
      </nav>

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

      {filteredProjects.length > 0 && (
        <p className={styles.resultCount}>
          {filteredProjects.length} {resultLabel}{" "}
          {selectedStack ? `${t.withStack} ${selectedStack}` : ""}
        </p>
      )}
    </section>
  );
}

"use client";

import { useMemo, useState, type CSSProperties } from "react";

import type { ProjectCard as ProjectCardType } from "@/data/projects-card.types";
import { StackIcon } from "@/ui/components/StackIcon";

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
    description: "Cases selecionados em produto digital, dados, IA, BI e automação",
    filterLabel: "Filtrar por stack",
    searchLabel: "Buscar projetos",
    searchPlaceholder: "Buscar por projeto, stack ou tecnologia",
    quickFilters: "Filtros rápidos",
    selectLabel: "Todas as stacks",
    allProjects: "Todos os projetos",
    emptyState: "Nenhum projeto encontrado",
    singularResult: "projeto",
    pluralResult: "projetos",
    withStack: "com",
  },
  en: {
    title: "My Projects",
    description: "Selected cases in digital product, data, AI, BI and automation",
    filterLabel: "Filter by stack",
    searchLabel: "Search projects",
    searchPlaceholder: "Search by project, stack or technology",
    quickFilters: "Quick filters",
    selectLabel: "All stacks",
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
  const [query, setQuery] = useState("");
  const t = labels[locale];

  const allStacks = useMemo(() => {
    const stackCounts = new Map<string, number>();
    projects.forEach((project) => {
      project.stack.forEach((stack) => stackCounts.set(stack, (stackCounts.get(stack) ?? 0) + 1));
    });

    return Array.from(stackCounts.entries())
      .sort(([firstStack, firstCount], [secondStack, secondCount]) => {
        if (secondCount !== firstCount) {
          return secondCount - firstCount;
        }

        return firstStack.localeCompare(secondStack);
      })
      .map(([stack]) => stack);
  }, [projects]);

  const quickStacks = useMemo(() => allStacks.slice(0, 10), [allStacks]);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      if (selectedStack && !project.stack.includes(selectedStack)) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const searchableText = [
        project.title[locale],
        project.tagline[locale],
        project.description[locale],
        project.role,
        ...project.stack,
        ...project.highlights,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [locale, projects, query, selectedStack]);

  const resultLabel = filteredProjects.length === 1 ? t.singularResult : t.pluralResult;

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>{t.title}</h2>
        <p className={styles.description}>{t.description}</p>
      </header>

      <section className={styles.filterNav} aria-labelledby="project-filter-title">
        <h3 id="project-filter-title" className="sr-only">
          {t.filterLabel}
        </h3>
        <div className={styles.searchWrap}>
          <label className={styles.filterLabel} htmlFor="project-search">
            {t.searchLabel}
          </label>
          <input
            id="project-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.searchPlaceholder}
            className={styles.searchInput}
          />
        </div>

        <div className={styles.filterSelectWrap}>
          <label className={styles.filterLabel} htmlFor="project-stack-filter">
            {t.selectLabel}
          </label>
          <select
            id="project-stack-filter"
            className={styles.filterSelect}
            value={selectedStack ?? ""}
            onChange={(event) => setSelectedStack(event.target.value || null)}
          >
            <option value="">{allLabel ?? t.allProjects}</option>
            {allStacks.map((stack) => (
              <option key={stack} value={stack}>
                {stack}
              </option>
            ))}
          </select>
        </div>

        <nav className={styles.quickFilters} aria-label={t.quickFilters}>
          <button
            className={`${styles.filter} ${selectedStack === null ? styles.active : ""}`}
            style={getFloatStyle(allLabel ?? t.allProjects, 0)}
            onClick={() => setSelectedStack(null)}
            aria-pressed={selectedStack === null}
            data-active={selectedStack === null}
            type="button"
          >
            <span className={styles.filterAllMark} aria-hidden="true">
              *
            </span>
            <span>{allLabel ?? t.allProjects}</span>
          </button>

          {quickStacks.map((stack, stackIndex) => (
            <button
              key={stack}
              className={`${styles.filter} ${selectedStack === stack ? styles.active : ""}`}
              style={getFloatStyle(stack, stackIndex + 1)}
              onClick={() => setSelectedStack(stack)}
              aria-pressed={selectedStack === stack}
              data-active={selectedStack === stack}
              type="button"
            >
              <StackIcon name={stack} size="sm" showLabel />
            </button>
          ))}
        </nav>
      </section>

      {filteredProjects.length > 0 ? (
        <div className={styles.grid}>
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} locale={locale} index={idx} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <p>{t.emptyState}</p>
        </div>
      )}

      {filteredProjects.length > 0 && (
        <p className={styles.resultCount} aria-live="polite">
          {filteredProjects.length} {resultLabel}{" "}
          {selectedStack ? `${t.withStack} ${selectedStack}` : ""}
        </p>
      )}
    </section>
  );
}

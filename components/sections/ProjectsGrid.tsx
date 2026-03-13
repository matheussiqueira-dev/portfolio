"use client";

import { useState } from "react";

import TronCard from "@/components/ui/TronCard";
import { projectCategoryLabels } from "@/core/constants";
import type { ProjectCaseStudy, SiteLocale } from "@/core/types";
import { getProjectRoute } from "@/system/i18n";

export type ProjectsGridCopy = {
  searchLabel: string;
  searchPlaceholder: string;
  categoryLabel: string;
  filterAll: string;
  featuredLabel: string;
  quickFilters: string[];
  resultsLabel: string;
  emptyTitle: string;
  emptyDescription: string;
  ctaLabel: string;
};

type ProjectsGridProps = {
  locale: SiteLocale;
  projects: ProjectCaseStudy[];
  copy?: ProjectsGridCopy;
  showFilters?: boolean;
  featuredOnly?: boolean;
  limit?: number;
};

export default function ProjectsGrid({
  locale,
  projects,
  copy,
  showFilters = true,
  featuredOnly = false,
  limit,
}: ProjectsGridProps) {
  const resolvedCopy: ProjectsGridCopy =
    copy ??
    (locale === "en"
      ? {
          searchLabel: "Search",
          searchPlaceholder: "Search project, stack, or keyword",
          categoryLabel: "Category",
          filterAll: "All",
          featuredLabel: "Featured",
          quickFilters: ["Python", "Power BI", "React", "SQL"],
          resultsLabel: "Showing {count} of {total} projects",
          emptyTitle: "No projects found",
          emptyDescription: "Try adjusting the current search or filters.",
          ctaLabel: "Open case",
        }
      : {
          searchLabel: "Busca",
          searchPlaceholder: "Busque projeto, stack ou palavra-chave",
          categoryLabel: "Categoria",
          filterAll: "Todos",
          featuredLabel: "Destaques",
          quickFilters: ["Python", "Power BI", "React", "SQL"],
          resultsLabel: "Mostrando {count} de {total} projetos",
          emptyTitle: "Nenhum projeto encontrado",
          emptyDescription: "Tente ajustar a busca ou os filtros atuais.",
          ctaLabel: "Abrir case",
        });
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [featured, setFeatured] = useState(featuredOnly);

  const categories = Array.from(new Set(projects.map((project) => project.category)));
  const normalizedSearch = search.trim().toLowerCase();
  const filtered = projects
    .filter((project) => (featured ? project.featured : true))
    .filter((project) => (category === "all" ? true : project.category === category))
    .filter((project) => {
      if (!normalizedSearch) {
        return true;
      }

      return (
        project.title[locale].toLowerCase().includes(normalizedSearch) ||
        project.shortDescription[locale].toLowerCase().includes(normalizedSearch) ||
        project.oneLiner[locale].toLowerCase().includes(normalizedSearch) ||
        project.stack.join(" ").toLowerCase().includes(normalizedSearch)
      );
    })
    .slice(0, limit ?? projects.length);

  const labels = resolvedCopy;
  const formattedResults = labels.resultsLabel
    .replace("{count}", String(filtered.length))
    .replace("{total}", String(projects.length));

  return (
    <div className="space-y-6">
      {showFilters ? (
        <div className="grid gap-4 rounded-[1.25rem] border border-[color:var(--border)] bg-[color:var(--glow-soft)] p-4 md:grid-cols-[1.25fr_0.8fr_auto]">
          <label className="grid gap-2">
            <span className="ui-label text-xs text-[color:var(--muted)]">{labels.searchLabel}</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={labels.searchPlaceholder}
              className="rounded-full border border-[color:var(--border)] bg-transparent px-4 py-3 text-sm text-[color:var(--foreground)] outline-none"
            />
          </label>

          <label className="grid gap-2">
            <span className="ui-label text-xs text-[color:var(--muted)]">
              {labels.categoryLabel}
            </span>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--foreground)] outline-none"
            >
              <option value="all">{labels.filterAll}</option>
              {categories.map((option) => (
                <option key={option} value={option}>
                  {projectCategoryLabels[option][locale]}
                </option>
              ))}
            </select>
          </label>

          <button
            type="button"
            className="tron-button h-fit self-end"
            data-variant={featured ? "primary" : "secondary"}
            onClick={() => setFeatured((current) => !current)}
          >
            {labels.featuredLabel}
          </button>

          <div className="md:col-span-3">
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => setSearch("")} className="tron-badge">
                {labels.filterAll}
              </button>
              {labels.quickFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSearch(filter)}
                  className="tron-badge cursor-pointer"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {filtered.length ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project, index) => (
            <TronCard
              key={project.slug}
              title={project.title[locale]}
              description={project.shortDescription[locale]}
              secondaryText={project.oneLiner[locale]}
              imageSrc={project.heroImage}
              imageAlt={project.title[locale]}
              eyebrow={projectCategoryLabels[project.category][locale]}
              badges={project.stack.slice(0, 5)}
              href={getProjectRoute(locale, project.slug)}
              ctaLabel={labels.ctaLabel}
              priority={index < 3}
            >
              <div className="grid gap-3 rounded-[1rem] border border-[color:var(--border)] bg-[color:var(--glow-soft)] p-4">
                <p className="ui-label text-xs text-[color:var(--muted)]">
                  {locale === "en" ? "Role" : "Papel"}
                </p>
                <p className="text-sm text-[color:var(--foreground)]">{project.role[locale]}</p>
              </div>
            </TronCard>
          ))}
        </div>
      ) : (
        <EmptyState title={labels.emptyTitle} description={labels.emptyDescription} />
      )}

      <p className="text-sm text-[color:var(--muted)]">{formattedResults}</p>
    </div>
  );
}

function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-[1.25rem] border border-dashed border-[color:var(--border)] bg-[color:var(--glow-soft)] p-8 text-center">
      <p className="section-title text-lg text-[color:var(--foreground)]">{title}</p>
      <p className="mt-3 text-sm text-[color:var(--muted)]">{description}</p>
    </div>
  );
}

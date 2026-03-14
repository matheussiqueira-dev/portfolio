"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { FiArrowRight, FiChevronDown, FiGithub, FiPlayCircle } from "react-icons/fi";

import type { ProjectCard } from "@/data/projects-card.types";
import { Link } from "@/core/i18n/navigation";
import {
  type ProjectCategory,
  getProjectCategoryLabel,
  getProjectStatusLabel,
  inferProjectCategories,
  inferProjectStatus,
} from "@/system/config/project-intelligence";
import { commandActionClass } from "@/ui/components/command/actionStyles";
import { SectionFrame } from "@/ui/components/command/SectionFrame";
import { StatTile } from "@/ui/components/command/StatTile";
import { TelemetryPill } from "@/ui/components/command/TelemetryPill";

type ProjectsCopy = {
  eyebrow: string;
  title: string;
  description: string;
  detailsLabel: string;
  caseLabel: string;
  viewAllLabel: string;
  filters: {
    label: string;
    allLabel: string;
    searchPlaceholder: string;
    resultsLabel: string;
    emptyTitle: string;
    emptyDescription: string;
  };
};

type Props = {
  locale: "pt" | "en";
  projects: ProjectCard[];
  copy: ProjectsCopy;
};

export default function ProjectsCommandCenter({ locale, projects, copy }: Props) {
  const reduceMotion = useReducedMotion();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(projects[0]?.slug ?? null);

  const categories = useMemo(() => {
    const values = new Set<ProjectCategory>();

    projects.forEach((project) => {
      inferProjectCategories(project).forEach((item) => values.add(item));
    });

    return Array.from(values);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const localizedTitle = locale === "pt" ? project.title.pt : project.title.en;
      const localizedDescription =
        locale === "pt" ? project.description.pt : project.description.en;
      const localizedFull =
        locale === "pt" ? project.fullDescription.pt : project.fullDescription.en;
      const projectCategories = inferProjectCategories(project);
      const categoryMatch =
        category === "all" || projectCategories.includes(category as ProjectCategory);

      if (!categoryMatch) {
        return false;
      }

      if (!query) {
        return true;
      }

      const categoryText = projectCategories
        .map((item) => getProjectCategoryLabel(item, locale).toLowerCase())
        .join(" ");

      return [
        localizedTitle,
        localizedDescription,
        localizedFull,
        project.role,
        project.stack.join(" "),
        categoryText,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query);
    });
  }, [category, locale, projects, search]);

  return (
    <main className="layout-container page-shell command-page">
      <SectionFrame
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        telemetry={
          <>
            <TelemetryPill
              label={locale === "pt" ? "Observability grid" : "Observability grid"}
              tone="accent"
            />
            <TelemetryPill
              label={`${filteredProjects.length} ${copy.filters.resultsLabel}`}
              tone="success"
            />
          </>
        }
      >
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
          <div className="grid gap-4">
            <div className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4">
              <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-center">
                <label className="grid gap-2">
                  <span className="section-eyebrow">{copy.filters.label}</span>
                  <input
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder={copy.filters.searchPlaceholder}
                    className="rounded-[1rem] border border-[color:var(--border)] bg-transparent px-4 py-3 text-sm text-[color:var(--foreground-strong)] outline-none transition focus:border-[color:var(--border-strong)]"
                  />
                </label>

                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setCategory("all")}
                    className={commandActionClass(category === "all" ? "primary" : "chip")}
                  >
                    {copy.filters.allLabel}
                  </button>

                  {categories.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setCategory(item)}
                      className={commandActionClass(category === item ? "primary" : "chip")}
                    >
                      {getProjectCategoryLabel(item, locale)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {filteredProjects.length === 0 ? (
              <div className="page-placeholder">
                <h1>{copy.filters.emptyTitle}</h1>
                <p>{copy.filters.emptyDescription}</p>
              </div>
            ) : (
              <div className="grid gap-4">
                {filteredProjects.map((project, index) => {
                  const localizedTitle = locale === "pt" ? project.title.pt : project.title.en;
                  const localizedDescription =
                    locale === "pt" ? project.description.pt : project.description.en;
                  const localizedFull =
                    locale === "pt" ? project.fullDescription.pt : project.fullDescription.en;
                  const isExpanded = expandedSlug === project.slug;
                  const categoriesForCard = inferProjectCategories(project);
                  const status = inferProjectStatus(project);
                  const thumbnail = locale === "pt" ? project.thumbnail.pt : project.thumbnail.en;
                  const primaryVideo = project.videos[0];
                  const challengeItems =
                    project.challenges?.map((item) => (locale === "pt" ? item.pt : item.en)) ?? [];
                  const architectureText = project.architecture
                    ? locale === "pt"
                      ? project.architecture.pt
                      : project.architecture.en
                    : null;

                  return (
                    <motion.article
                      key={project.slug}
                      layout
                      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: index * 0.03 }}
                      className="overflow-hidden rounded-[1.45rem] border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[var(--panel-glow)]"
                    >
                      <div className="grid gap-0 xl:grid-cols-[320px_minmax(0,1fr)]">
                        <div className="relative aspect-[16/11] overflow-hidden border-b border-[color:var(--border)] xl:aspect-auto xl:min-h-full xl:border-r xl:border-b-0">
                          <Image
                            src={thumbnail}
                            alt={localizedTitle}
                            fill
                            sizes="(max-width: 1279px) 100vw, 320px"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#020812] via-transparent to-transparent" />
                          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                            <TelemetryPill
                              label={getProjectStatusLabel(status, locale)}
                              tone={status === "production_ready" ? "success" : "accent"}
                            />
                          </div>
                        </div>

                        <div className="grid gap-4 p-5">
                          <div className="flex flex-wrap gap-2">
                            {categoriesForCard.map((item) => (
                              <TelemetryPill
                                key={item}
                                label={getProjectCategoryLabel(item, locale)}
                              />
                            ))}
                          </div>

                          <div className="grid gap-3">
                            <h2 className="font-[family-name:var(--font-display)] text-2xl uppercase tracking-[0.12em] text-[color:var(--foreground-strong)]">
                              {localizedTitle}
                            </h2>
                            <p className="text-sm leading-7 text-[color:var(--muted)]">
                              {localizedDescription}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {project.stack.map((item) => (
                              <TelemetryPill key={item} label={item} />
                            ))}
                          </div>

                          <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end">
                            <p className="text-sm leading-7 text-[color:var(--muted)]">
                              {localizedFull}
                            </p>

                            <div className="flex flex-wrap gap-3">
                              <button
                                type="button"
                                onClick={() =>
                                  setExpandedSlug((current) =>
                                    current === project.slug ? null : project.slug
                                  )
                                }
                                className={commandActionClass("secondary")}
                                aria-expanded={isExpanded}
                              >
                                {copy.detailsLabel}
                                <FiChevronDown
                                  aria-hidden="true"
                                  className={`transition ${isExpanded ? "rotate-180" : ""}`}
                                />
                              </button>

                              {project.links.caseStudy ? (
                                <Link
                                  href={{
                                    pathname: "/projects/[slug]",
                                    params: { slug: project.slug },
                                  }}
                                  className={commandActionClass("ghost")}
                                >
                                  {copy.caseLabel} <FiArrowRight aria-hidden="true" />
                                </Link>
                              ) : null}
                            </div>
                          </div>

                          <AnimatePresence initial={false}>
                            {isExpanded ? (
                              <motion.div
                                layout
                                initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                                animate={reduceMotion ? undefined : { opacity: 1, height: "auto" }}
                                exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="command-divider mb-4 mt-1" />

                                <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(220px,0.8fr)]">
                                  <div className="grid gap-4">
                                    {architectureText ? (
                                      <div className="rounded-[1rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4">
                                        <p className="section-eyebrow">
                                          {locale === "pt" ? "Arquitetura" : "Architecture"}
                                        </p>
                                        <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                                          {architectureText}
                                        </p>
                                      </div>
                                    ) : null}

                                    {challengeItems.length > 0 ? (
                                      <div className="rounded-[1rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4">
                                        <p className="section-eyebrow">
                                          {locale === "pt" ? "Desafios" : "Challenges"}
                                        </p>
                                        <ul className="command-bullets mt-4">
                                          {challengeItems.map((item) => (
                                            <li key={item}>{item}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    ) : null}

                                    <div className="flex flex-wrap gap-3">
                                      {project.links.repo ? (
                                        <a
                                          href={project.links.repo}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className={commandActionClass("secondary")}
                                        >
                                          <FiGithub aria-hidden="true" />
                                          GitHub
                                        </a>
                                      ) : null}

                                      {project.links.demo || project.links.live ? (
                                        <a
                                          href={project.links.demo ?? project.links.live}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className={commandActionClass("primary")}
                                        >
                                          <FiPlayCircle aria-hidden="true" />
                                          {locale === "pt" ? "Abrir demo" : "Open demo"}
                                        </a>
                                      ) : null}
                                    </div>
                                  </div>

                                  <div className="grid gap-4">
                                    {primaryVideo ? (
                                      <div className="overflow-hidden rounded-[1rem] border border-[color:var(--border)] bg-black">
                                        <video
                                          src={primaryVideo.src}
                                          poster={primaryVideo.poster}
                                          className="aspect-video w-full object-cover"
                                          autoPlay
                                          muted
                                          loop
                                          playsInline
                                          controls={!reduceMotion}
                                        />
                                      </div>
                                    ) : null}

                                    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                                      {project.metrics?.performance ? (
                                        <StatTile
                                          label={locale === "pt" ? "Performance" : "Performance"}
                                          value={project.metrics.performance}
                                        />
                                      ) : null}
                                      {project.metrics?.uptime ? (
                                        <StatTile
                                          label={locale === "pt" ? "Uptime" : "Uptime"}
                                          value={project.metrics.uptime}
                                        />
                                      ) : null}
                                      {project.metrics?.users ? (
                                        <StatTile
                                          label={locale === "pt" ? "Usuarios" : "Users"}
                                          value={project.metrics.users}
                                        />
                                      ) : null}
                                      {project.metrics?.responseTime ? (
                                        <StatTile
                                          label={locale === "pt" ? "Resposta" : "Response"}
                                          value={project.metrics.responseTime}
                                        />
                                      ) : null}
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            ) : null}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            )}
          </div>

          <div className="grid gap-4">
            <StatTile
              label={locale === "pt" ? "Ativos" : "Assets"}
              value={String(projects.length).padStart(2, "0")}
              detail={
                locale === "pt"
                  ? "Projetos monitorados no sistema."
                  : "Projects monitored inside the system."
              }
              tone="accent"
            />
            <StatTile
              label={locale === "pt" ? "Categorias" : "Categories"}
              value={String(categories.length).padStart(2, "0")}
              detail={
                locale === "pt"
                  ? "Capacidades organizadas por dominio tecnico."
                  : "Capabilities organized by technical domain."
              }
            />
            <StatTile
              label={locale === "pt" ? "Pipeline" : "Pipeline"}
              value={locale === "pt" ? "Expandir -> avaliar" : "Expand -> review"}
              detail={
                locale === "pt"
                  ? "Cada ativo abre contexto, stack, desafios e links."
                  : "Every asset reveals context, stack, challenges, and links."
              }
            />
          </div>
        </div>
      </SectionFrame>
    </main>
  );
}

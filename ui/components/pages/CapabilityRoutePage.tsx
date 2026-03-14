import Image from "next/image";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

import type { ProjectCard } from "@/data/projects-card.types";
import { Link } from "@/core/i18n/navigation";
import {
  getProjectCategoryLabel,
  getProjectStatusLabel,
  inferProjectCategories,
  inferProjectStatus,
} from "@/system/config/project-intelligence";
import { commandActionClass } from "@/ui/components/command/actionStyles";
import { SectionFrame } from "@/ui/components/command/SectionFrame";
import { StatTile } from "@/ui/components/command/StatTile";
import { TelemetryPill } from "@/ui/components/command/TelemetryPill";

type Props = {
  locale: "pt" | "en";
  eyebrow: string;
  title: string;
  description: string;
  focusAreas: string[];
  projects: ProjectCard[];
};

export default function CapabilityRoutePage({
  locale,
  eyebrow,
  title,
  description,
  focusAreas,
  projects,
}: Props) {
  return (
    <main className="layout-container page-shell command-page">
      <SectionFrame
        eyebrow={eyebrow}
        title={title}
        description={description}
        telemetry={
          <>
            <TelemetryPill
              label={locale === "pt" ? "Capability module" : "Capability module"}
              tone="accent"
            />
            <TelemetryPill
              label={`${projects.length} ${locale === "pt" ? "ativos relevantes" : "relevant assets"}`}
              tone="success"
            />
          </>
        }
      >
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
          <div className="grid gap-4">
            <div className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
              <p className="section-eyebrow">{locale === "pt" ? "Areas de foco" : "Focus areas"}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {focusAreas.map((item) => (
                  <TelemetryPill key={item} label={item} />
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {projects.map((project) => {
                const localizedTitle = locale === "pt" ? project.title.pt : project.title.en;
                const localizedDescription =
                  locale === "pt" ? project.description.pt : project.description.en;
                const categories = inferProjectCategories(project).slice(0, 2);
                const status = inferProjectStatus(project);
                const thumbnail = locale === "pt" ? project.thumbnail.pt : project.thumbnail.en;
                const actionHref =
                  project.links.repo ?? project.links.demo ?? project.links.live ?? undefined;

                return (
                  <article
                    key={project.slug}
                    className="grid gap-0 overflow-hidden rounded-[1.3rem] border border-[color:var(--border)] bg-[color:var(--surface)] md:grid-cols-[220px_minmax(0,1fr)]"
                  >
                    <div className="relative aspect-[16/10] border-b border-[color:var(--border)] md:aspect-auto md:border-r md:border-b-0">
                      <Image
                        src={thumbnail}
                        alt={localizedTitle}
                        fill
                        sizes="(max-width: 767px) 100vw, 220px"
                        className="object-cover"
                      />
                    </div>

                    <div className="grid gap-4 p-5">
                      <div className="flex flex-wrap gap-2">
                        <TelemetryPill
                          label={getProjectStatusLabel(status, locale)}
                          tone={status === "production_ready" ? "success" : "accent"}
                        />
                        {categories.map((item) => (
                          <TelemetryPill
                            key={item}
                            label={getProjectCategoryLabel(item, locale)}
                          />
                        ))}
                      </div>

                      <div>
                        <h2 className="font-[family-name:var(--font-display)] text-xl uppercase tracking-[0.12em] text-[color:var(--foreground-strong)]">
                          {localizedTitle}
                        </h2>
                        <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                          {localizedDescription}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.stack.slice(0, 5).map((item) => (
                          <TelemetryPill key={item} label={item} />
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Link
                          href={{ pathname: "/projects/[slug]", params: { slug: project.slug } }}
                          className={commandActionClass("secondary")}
                        >
                          {locale === "pt" ? "Abrir caso" : "Open case"}
                          <FiArrowRight aria-hidden="true" />
                        </Link>
                        {actionHref ? (
                          <a
                            href={actionHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={commandActionClass("ghost")}
                          >
                            {locale === "pt" ? "Ativo externo" : "External asset"}
                            <FiArrowUpRight aria-hidden="true" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4">
            <StatTile
              label={locale === "pt" ? "Curadoria" : "Curation"}
              value={locale === "pt" ? "Filtragem tematica" : "Thematic filtering"}
              detail={locale === "pt" ? "Ativos selecionados por stack, arquitetura e impacto." : "Assets selected by stack, architecture, and impact."}
              tone="accent"
            />
            <StatTile
              label={locale === "pt" ? "Uso" : "Use case"}
              value={locale === "pt" ? "Leitura executiva" : "Executive review"}
              detail={locale === "pt" ? "Cada modulo resume contexto, stack e proximos passos." : "Each module summarizes context, stack, and next steps."}
            />
          </div>
        </div>
      </SectionFrame>
    </main>
  );
}

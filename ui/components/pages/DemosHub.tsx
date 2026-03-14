import { FiArrowRight, FiArrowUpRight, FiPlayCircle } from "react-icons/fi";

import type { Project } from "@/data/projects.types";
import type { SiteContent } from "@/data/site.types";
import { Link } from "@/core/i18n/navigation";
import { projectSupportsDemo } from "@/system/config/project-intelligence";
import { commandActionClass } from "@/ui/components/command/actionStyles";
import { SectionFrame } from "@/ui/components/command/SectionFrame";
import { StatTile } from "@/ui/components/command/StatTile";
import { TelemetryPill } from "@/ui/components/command/TelemetryPill";

type Props = {
  locale: "pt" | "en";
  projects: Project[];
  copy: SiteContent["demos"];
};

export default function DemosHub({ locale, projects, copy }: Props) {
  const demoProjects = projects.filter(projectSupportsDemo);

  return (
    <main className="layout-container page-shell command-page">
      <SectionFrame
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        telemetry={
          <>
            <TelemetryPill
              label={locale === "pt" ? "Demo pipeline" : "Demo pipeline"}
              tone="accent"
            />
            <TelemetryPill
              label={`${demoProjects.length} ${locale === "pt" ? "ativos publicados" : "published assets"}`}
              tone="success"
            />
          </>
        }
      >
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
          <div className="grid gap-4">
            {demoProjects.map((project) => {
              const hasInteractive =
                project.demo?.kind === "external" ||
                project.demo?.kind === "embed" ||
                project.demo?.kind === "internal" ||
                Boolean(project.demoUrl);

              return (
                <article
                  key={project.slug}
                  className="rounded-[1.4rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-5"
                >
                  <div className="flex flex-wrap gap-2">
                    <TelemetryPill
                      label={hasInteractive ? copy.openInteractiveLabel : copy.watchVideoLabel}
                      tone={hasInteractive ? "success" : "accent"}
                    />
                    <TelemetryPill label={project.role} />
                  </div>

                  <div className="mt-4 grid gap-3">
                    <h2 className="font-[family-name:var(--font-display)] text-2xl uppercase tracking-[0.12em] text-[color:var(--foreground-strong)]">
                      {project.title}
                    </h2>
                    <p className="text-sm leading-7 text-[color:var(--muted)]">{project.tagline}</p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.slice(0, 6).map((item) => (
                      <TelemetryPill key={item} label={item} />
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href={{ pathname: "/demos/[slug]", params: { slug: project.slug } }}
                      className={commandActionClass("primary")}
                    >
                      <FiPlayCircle aria-hidden="true" />
                      {copy.openDemoLabel}
                    </Link>
                    <Link
                      href={{ pathname: "/projects/[slug]", params: { slug: project.slug } }}
                      className={commandActionClass("ghost")}
                    >
                      {copy.fullCaseLabel}
                      <FiArrowRight aria-hidden="true" />
                    </Link>
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={commandActionClass("secondary")}
                      >
                        {copy.viewProjectsLabel}
                        <FiArrowUpRight aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="grid gap-4">
            <StatTile
              label={locale === "pt" ? "Deploy" : "Deploy"}
              value="Vercel"
              detail={copy.publishItems[0]}
              tone="accent"
            />
            <StatTile
              label={locale === "pt" ? "Front-end" : "Front-end"}
              value="Static / SSR"
              detail={copy.publishItems[1]}
            />
            <StatTile
              label={locale === "pt" ? "APIs" : "APIs"}
              value="Render / Fly"
              detail={copy.publishItems[2]}
            />
          </div>
        </div>
      </SectionFrame>
    </main>
  );
}

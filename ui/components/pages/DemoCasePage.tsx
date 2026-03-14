import { FiArrowLeft, FiArrowUpRight, FiGithub, FiPlayCircle } from "react-icons/fi";

import type { Project, DemoExperience } from "@/data/projects.types";
import type { SiteContent } from "@/data/site.types";
import { Link } from "@/core/i18n/navigation";
import { commandActionClass } from "@/ui/components/command/actionStyles";
import { SectionFrame } from "@/ui/components/command/SectionFrame";
import { StatTile } from "@/ui/components/command/StatTile";
import { TelemetryPill } from "@/ui/components/command/TelemetryPill";

type Props = {
  locale: "pt" | "en";
  project: Project;
  copy: SiteContent["demos"];
};

function resolveDemoSource(project: Project): DemoExperience | null {
  if (project.demo) {
    return project.demo;
  }

  if (project.demoUrl) {
    if (project.demoUrl.endsWith(".pdf")) {
      return {
        kind: "embed",
        url: project.demoUrl,
        title: project.title,
      };
    }

    return {
      kind: "external",
      url: project.demoUrl,
      label: project.title,
    };
  }

  return null;
}

export default function DemoCasePage({ locale, project, copy }: Props) {
  const demo = resolveDemoSource(project);
  const canEmbed =
    demo?.kind === "embed" ||
    demo?.kind === "internal" ||
    (demo?.kind === "external" && demo.url.startsWith("/"));

  return (
    <main className="layout-container page-shell command-page">
      <SectionFrame
        eyebrow={copy.eyebrow}
        title={project.title}
        description={project.tagline}
        telemetry={
          <>
            <TelemetryPill
              label={demo ? copy.openDemoLabel : copy.demoSoonLabel}
              tone={demo ? "success" : "accent"}
            />
            <TelemetryPill label={project.role} />
          </>
        }
      >
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[1.4rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4">
              {demo?.kind === "video" ? (
                <video
                  src={demo.src}
                  poster={demo.poster}
                  controls
                  playsInline
                  className="aspect-video w-full rounded-[1rem] object-cover"
                />
              ) : null}

              {demo?.kind === "embed" ? (
                <iframe
                  src={demo.url}
                  title={demo.title}
                  className="aspect-video w-full rounded-[1rem] border-0 bg-white"
                />
              ) : null}

              {demo?.kind === "internal" ? (
                <iframe
                  src={demo.path}
                  title={demo.title ?? project.title}
                  className="aspect-video w-full rounded-[1rem] border-0 bg-white"
                />
              ) : null}

              {!demo || (demo.kind === "external" && !canEmbed) ? (
                <div className="grid gap-4 rounded-[1rem] border border-[color:var(--border)] bg-[color:rgba(0,229,255,0.03)] p-6">
                  <p className="section-eyebrow">{copy.publishTitle}</p>
                  <p className="text-sm leading-7 text-[color:var(--muted)]">
                    {demo
                      ? locale === "pt"
                        ? "A demo e disponibilizada em ambiente externo para preservar compatibilidade e performance."
                        : "The demo is published in an external environment to preserve compatibility and performance."
                      : copy.demoSoonLabel}
                  </p>
                  {demo && "url" in demo ? (
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={commandActionClass("primary")}
                    >
                      <FiPlayCircle aria-hidden="true" />
                      {copy.openInteractiveLabel}
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/demos" className={commandActionClass("ghost")}>
                <FiArrowLeft aria-hidden="true" />
                {copy.eyebrow}
              </Link>
              <Link
                href={{ pathname: "/projects/[slug]", params: { slug: project.slug } }}
                className={commandActionClass("secondary")}
              >
                {copy.fullCaseLabel}
              </Link>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={commandActionClass("ghost")}
              >
                <FiGithub aria-hidden="true" />
                GitHub
              </a>
              {demo && "url" in demo ? (
                <a
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={commandActionClass("primary")}
                >
                  <FiArrowUpRight aria-hidden="true" />
                  {copy.openDemoLabel}
                </a>
              ) : null}
            </div>
          </div>

          <div className="grid gap-4">
            <StatTile
              label={locale === "pt" ? "Tipo" : "Type"}
              value={demo?.kind ?? copy.demoSoonLabel}
              tone="accent"
            />
            <StatTile
              label={copy.howToRunLabel}
              value={project.howToRun[0] ?? copy.demoSoonLabel}
              detail={project.howToRun[1]}
            />
          </div>
        </div>
      </SectionFrame>

      <SectionFrame
        eyebrow={copy.publishTitle}
        title={copy.publishTitle}
        description={project.context}
        className="mt-5"
      >
        <ul className="command-bullets">
          {copy.publishItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </SectionFrame>
    </main>
  );
}

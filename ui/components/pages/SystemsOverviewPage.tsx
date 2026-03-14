import type { SiteContent } from "@/data/site.types";

import { SectionFrame } from "@/ui/components/command/SectionFrame";
import { StatTile } from "@/ui/components/command/StatTile";
import { TelemetryPill } from "@/ui/components/command/TelemetryPill";

type Props = {
  locale: "pt" | "en";
  totals: {
    projects: number;
    demos: number;
    certificates: number;
    educationGroups: number;
  };
  services: SiteContent["services"]["offerings"];
};

export default function SystemsOverviewPage({ locale, totals, services }: Props) {
  return (
    <main className="layout-container page-shell command-page">
      <SectionFrame
        eyebrow={locale === "pt" ? "Sistema" : "System"}
        title={locale === "pt" ? "System observability layer" : "System observability layer"}
        description={
          locale === "pt"
            ? "Painel executivo para leitura rapida da operacao digital, arquitetura e ativos tecnicos."
            : "Executive panel for fast reading of digital operations, architecture, and technical assets."
        }
        telemetry={
          <>
            <TelemetryPill label={locale === "pt" ? "Core modules online" : "Core modules online"} tone="success" />
            <TelemetryPill label={locale === "pt" ? "Deployment ready" : "Deployment ready"} tone="accent" />
          </>
        }
      >
        <div className="grid gap-4 xl:grid-cols-4">
          <StatTile
            label={locale === "pt" ? "Projetos" : "Projects"}
            value={String(totals.projects).padStart(2, "0")}
            tone="accent"
          />
          <StatTile
            label={locale === "pt" ? "Demos" : "Demos"}
            value={String(totals.demos).padStart(2, "0")}
          />
          <StatTile
            label={locale === "pt" ? "Certificados" : "Certificates"}
            value={String(totals.certificates).padStart(2, "0")}
          />
          <StatTile
            label={locale === "pt" ? "Trilhas academicas" : "Academic tracks"}
            value={String(totals.educationGroups).padStart(2, "0")}
          />
        </div>

        <div className="mt-5 grid gap-4 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5"
            >
              <p className="section-eyebrow">{locale === "pt" ? "Modulo" : "Module"}</p>
              <p className="mt-3 font-[family-name:var(--font-display)] text-xl uppercase tracking-[0.12em] text-[color:var(--foreground-strong)]">
                {service.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </SectionFrame>
    </main>
  );
}

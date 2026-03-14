import Image from "next/image";
import { FiArrowRight, FiArrowUpRight, FiCpu, FiDatabase, FiLayers, FiShield } from "react-icons/fi";

import type { ProjectCard } from "@/data/projects-card.types";
import type { SiteContent } from "@/data/site.types";
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
  site: SiteContent;
  projects: ProjectCard[];
  locale: "pt" | "en";
};

const HERO_TAGS = {
  pt: [
    "AI READY",
    "DATA SYSTEMS ONLINE",
    "SOFTWARE ARCHITECTURE ACTIVE",
    "ANALYTICS CORE SYNCHRONIZED",
  ],
  en: [
    "AI READY",
    "DATA SYSTEMS ONLINE",
    "SOFTWARE ARCHITECTURE ACTIVE",
    "ANALYTICS CORE SYNCHRONIZED",
  ],
};

const PANEL_STATUS = {
  pt: {
    operator: "Operador",
    availability: "Disponibilidade",
    archive: "Arquivo",
    archiveDescription: "Curriculo, trilha academica e certificados prontos para consulta.",
    projectsSummary: "Ativos monitorados",
    projectsDescription: "Projetos selecionados como ativos tecnicos com leitura rapida para recrutadores e liderancas.",
    aboutTelemetry: "Perfil hibrido",
    processTelemetry: "Fluxo operacional",
    archiveTitle: "Arquivo de conhecimento",
    archiveText:
      "Acesse curriculo, trilha academica e certificados como modulos de consulta dentro do ambiente.",
    certificates: "Certificados",
    academic: "Academico",
    resume: "Curriculo",
    missionStatus: "Status da operacao",
    metricsLabel: "Telemetria",
    details: "Repositorio / demo",
  },
  en: {
    operator: "Operator",
    availability: "Availability",
    archive: "Archive",
    archiveDescription: "Resume, academic track, and certificates ready for review.",
    projectsSummary: "Monitored assets",
    projectsDescription: "Selected projects positioned as technical assets for recruiters and leadership teams.",
    aboutTelemetry: "Hybrid profile",
    processTelemetry: "Operational flow",
    archiveTitle: "Knowledge Archive",
    archiveText:
      "Access resume, academic background, and certificates as on-demand modules inside the system.",
    certificates: "Certificates",
    academic: "Academic",
    resume: "Resume",
    missionStatus: "Mission status",
    metricsLabel: "Telemetry",
    details: "Repository / demo",
  },
};

const iconMap = {
  stack: FiLayers,
  data: FiDatabase,
  ai: FiCpu,
  software: FiShield,
};

export default function HomeDashboard({ site, projects, locale }: Props) {
  const {
    hero,
    about,
    executiveSummary,
    services,
    engagement,
    projects: projectsCopy,
    contact,
    metrics,
    certificatesSection,
    nav,
  } = site;
  const panelText = PANEL_STATUS[locale];

  return (
    <main className="layout-container page-shell command-page">
      <section
        id="home"
        data-reveal
        className="grid gap-5 pb-[var(--section-y)] lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]"
      >
        <div className="command-surface">
          <div className="command-surface__shell">
            <div className="mb-5 flex flex-wrap gap-2">
              {HERO_TAGS[locale].map((tag, index) => (
                <TelemetryPill
                  key={tag}
                  label={tag}
                  tone={index === 0 ? "success" : "accent"}
                />
              ))}
            </div>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
              <div className="grid gap-5">
                <p className="section-eyebrow">{hero.eyebrow}</p>
                <div className="grid gap-4">
                  <h1 className="section-title !text-[clamp(3rem,7vw,5.75rem)]">
                    {hero.title}
                  </h1>
                  <p className="max-w-3xl font-[family-name:var(--font-ui)] text-xl font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-soft)]">
                    {hero.subtitle}
                  </p>
                  <p className="max-w-3xl text-base leading-8 text-[color:var(--muted)]">
                    {hero.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {hero.stackHighlights.map((highlight) => {
                    const Icon = iconMap[highlight.icon];
                    return (
                      <TelemetryPill
                        key={highlight.label}
                        label={highlight.label}
                        icon={<Icon aria-hidden="true" />}
                      />
                    );
                  })}
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {hero.facts.map((fact) => (
                    <StatTile
                      key={fact.label}
                      label={fact.label}
                      value={fact.value}
                      tone="accent"
                    />
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href="/projects" className={commandActionClass("primary")}>
                    {hero.ctas.primary} <FiArrowRight aria-hidden="true" />
                  </Link>
                  <Link href="/resume" className={commandActionClass("secondary")}>
                    {hero.ctas.secondary}
                  </Link>
                  <a
                    href="https://wa.me/5581999203683"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={commandActionClass("ghost")}
                  >
                    {hero.ctas.tertiary} <FiArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="relative mx-auto aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)]">
                  <Image
                    src="/profile.webp"
                    alt="Matheus Siqueira"
                    fill
                    priority
                    className="object-cover"
                    sizes="220px"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#03101a] to-transparent p-4">
                    <p className="section-eyebrow">{panelText.operator}</p>
                    <p className="mt-1 font-[family-name:var(--font-display)] text-lg uppercase tracking-[0.14em] text-[color:var(--foreground-strong)]">
                      Matheus
                    </p>
                  </div>
                </div>

                <div className="command-grid grid-cols-1">
                  {executiveSummary.cards.map((card) => (
                    <StatTile
                      key={card.title}
                      label={panelText.projectsSummary}
                      value={card.title}
                      detail={panelText.projectsDescription}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="command-surface">
            <div className="command-surface__shell">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="section-eyebrow">{panelText.availability}</p>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl uppercase tracking-[0.12em] text-[color:var(--foreground-strong)]">
                    {panelText.missionStatus}
                  </h2>
                </div>
                <TelemetryPill label="STABLE" tone="success" />
              </div>

              <div className="command-grid sm:grid-cols-2 lg:grid-cols-1">
                {about.snapshot.items.map((item) => (
                  <StatTile
                    key={item.value}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="command-surface">
            <div className="command-surface__shell">
              <div className="mb-4">
                <p className="section-eyebrow">{panelText.archive}</p>
                <h2 className="font-[family-name:var(--font-display)] text-2xl uppercase tracking-[0.12em] text-[color:var(--foreground-strong)]">
                  {panelText.archiveTitle}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  {panelText.archiveText}
                </p>
              </div>

              <div className="grid gap-3">
                <Link href="/resume" className={commandActionClass("secondary")}>
                  {panelText.resume}
                </Link>
                <Link href="/academic" className={commandActionClass("secondary")}>
                  {panelText.academic}
                </Link>
                <Link href="/certificates" className={commandActionClass("secondary")}>
                  {panelText.certificates}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionFrame
        id="about"
        eyebrow={about.eyebrow}
        title={about.title}
        description={about.summary.body}
        telemetry={
          <>
            <TelemetryPill label={panelText.aboutTelemetry} tone="accent" />
            <TelemetryPill label={about.differential.title} />
          </>
        }
      >
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)]">
          <div className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
                <p className="section-eyebrow">{about.summary.title}</p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  {about.summary.body}
                </p>
              </article>

              <article className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
                <p className="section-eyebrow">{about.who.title}</p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  {about.who.body}
                </p>
              </article>
            </div>

            <article className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
              <p className="section-eyebrow">{about.complexData.title}</p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                {about.complexData.body}
              </p>
            </article>

            <article className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
              <p className="section-eyebrow">{about.deliver.title}</p>
              <ul className="command-bullets mt-4">
                {about.deliver.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="grid gap-5">
            <article className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
              <p className="section-eyebrow">{about.differential.title}</p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                {about.differential.description}
              </p>
            </article>

            <article className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
              <p className="section-eyebrow">{about.highlights.title}</p>
              <ul className="command-bullets mt-4">
                {about.highlights.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
              <p className="section-eyebrow">{about.stack.title}</p>
              <div className="mt-4 grid gap-3">
                {about.stack.groups.slice(0, 4).map((group) => (
                  <div
                    key={group.title}
                    className="rounded-[1rem] border border-[color:var(--border)] bg-[color:rgba(0,229,255,0.03)] p-4"
                  >
                    <p className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--foreground-strong)]">
                      {group.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                      {group.items[0]}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </SectionFrame>

      <SectionFrame
        id="services"
        eyebrow={services.eyebrow}
        title={services.title}
        description={services.description}
        telemetry={<TelemetryPill label={panelText.processTelemetry} tone="accent" />}
        className="mt-5"
      >
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)]">
          <div className="grid gap-4 md:grid-cols-3">
            {services.offerings.map((offering) => (
              <article
                key={offering.title}
                className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5"
              >
                <p className="font-[family-name:var(--font-display)] text-lg uppercase tracking-[0.12em] text-[color:var(--foreground-strong)]">
                  {offering.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  {offering.description}
                </p>
                <ul className="command-bullets mt-4">
                  {offering.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="grid gap-5">
            <article className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
              <p className="section-eyebrow">{services.processTitle}</p>
              <div className="mt-4 grid gap-4">
                {services.process.map((step, index) => (
                  <div key={step.title} className="grid gap-2 rounded-[1rem] border border-[color:var(--border)] bg-[color:rgba(0,229,255,0.03)] p-4">
                    <p className="font-[family-name:var(--font-display)] text-xl uppercase tracking-[0.12em] text-[color:var(--accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--foreground-strong)]">
                      {step.title}
                    </p>
                    <p className="text-sm leading-7 text-[color:var(--muted)]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
              <p className="section-eyebrow">{engagement.eyebrow}</p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-2xl uppercase tracking-[0.12em] text-[color:var(--foreground-strong)]">
                {engagement.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                {engagement.description}
              </p>
              <div className="mt-4 grid gap-3">
                {engagement.cards.map((card) => (
                  <StatTile
                    key={card.label}
                    label={card.label}
                    value={card.value}
                    detail={card.detail}
                  />
                ))}
              </div>
            </article>
          </div>
        </div>
      </SectionFrame>

      <SectionFrame
        eyebrow={certificatesSection.eyebrow}
        title={panelText.archiveTitle}
        description={panelText.archiveDescription}
        className="mt-5"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/resume" className="command-surface rounded-[1.2rem] p-5 no-underline">
            <p className="section-eyebrow">{nav.resume}</p>
            <p className="mt-3 font-[family-name:var(--font-display)] text-xl uppercase tracking-[0.12em] text-[color:var(--foreground-strong)]">
              {panelText.resume}
            </p>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
              {executiveSummary.paragraphs[0]}
            </p>
          </Link>

          <Link href="/academic" className="command-surface rounded-[1.2rem] p-5 no-underline">
            <p className="section-eyebrow">{nav.academic}</p>
            <p className="mt-3 font-[family-name:var(--font-display)] text-xl uppercase tracking-[0.12em] text-[color:var(--foreground-strong)]">
              {panelText.academic}
            </p>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
              {executiveSummary.paragraphs[1]}
            </p>
          </Link>

          <Link
            href="/certificates"
            className="command-surface rounded-[1.2rem] p-5 no-underline"
          >
            <p className="section-eyebrow">{nav.certificates}</p>
            <p className="mt-3 font-[family-name:var(--font-display)] text-xl uppercase tracking-[0.12em] text-[color:var(--foreground-strong)]">
              {panelText.certificates}
            </p>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
              {certificatesSection.description}
            </p>
          </Link>
        </div>
      </SectionFrame>

      <SectionFrame
        eyebrow={metrics.eyebrow}
        title={metrics.title}
        description={panelText.projectsDescription}
        className="mt-5"
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.items.map((item) => (
            <StatTile key={item.label} label={panelText.metricsLabel} value={item.label} />
          ))}
        </div>
      </SectionFrame>

      <SectionFrame
        id="projects"
        eyebrow={projectsCopy.eyebrow}
        title={projectsCopy.title}
        description={projectsCopy.description}
        className="mt-5"
      >
        <div className="grid gap-4 xl:grid-cols-3">
          {projects.map((project) => {
            const title = locale === "pt" ? project.title.pt : project.title.en;
            const description =
              locale === "pt" ? project.description.pt : project.description.en;
            const categories = inferProjectCategories(project).slice(0, 2);
            const status = inferProjectStatus(project);
            const thumbnail = locale === "pt" ? project.thumbnail.pt : project.thumbnail.en;

            return (
              <article
                key={project.slug}
                className="overflow-hidden rounded-[1.25rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[color:var(--border)]">
                  <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    sizes="(max-width: 1279px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03101a] via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <TelemetryPill
                      label={getProjectStatusLabel(status, locale)}
                      tone={status === "production_ready" ? "success" : "accent"}
                    />
                  </div>
                </div>

                <div className="grid gap-4 p-5">
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <TelemetryPill
                        key={category}
                        label={getProjectCategoryLabel(category, locale)}
                      />
                    ))}
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl uppercase tracking-[0.12em] text-[color:var(--foreground-strong)]">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                      {description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((item) => (
                      <TelemetryPill key={item} label={item} />
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={{ pathname: "/projects/[slug]", params: { slug: project.slug } }}
                      className={commandActionClass("secondary")}
                    >
                      {projectsCopy.caseLabel}
                    </Link>
                    {project.links.repo ?? project.links.demo ?? project.links.live ? (
                      <a
                        href={project.links.repo ?? project.links.demo ?? project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={commandActionClass("ghost")}
                      >
                        {panelText.details} <FiArrowUpRight aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 flex justify-end">
          <Link href="/projects" className={commandActionClass("primary")}>
            {projectsCopy.viewAllLabel} <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </SectionFrame>

      <SectionFrame
        id="contact"
        eyebrow={contact.eyebrow}
        title={contact.title}
        description={contact.description}
        className="mt-5"
      >
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.9fr)]">
          <div className="grid gap-4 md:grid-cols-2">
            <StatTile label={contact.cards.email} value="matheussiqueirahub@gmail.com" />
            <StatTile
              label={contact.cards.whatsapp}
              value="+55 81 99920-3683"
              tone="accent"
            />
            <StatTile label={contact.cards.linkedin} value="/in/matheussiqueira-dev" />
            <StatTile label={contact.cards.github} value="/matheussiqueira-dev" />
          </div>

          <div className="grid gap-4 rounded-[1.25rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
            <p className="section-eyebrow">{contact.ctaSubtitle}</p>
            <p className="text-sm leading-7 text-[color:var(--muted)]">
              {contact.ctaTitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:matheussiqueirahub@gmail.com"
                className={commandActionClass("secondary")}
              >
                {contact.cards.email}
              </a>
              <a
                href="https://wa.me/5581999203683"
                target="_blank"
                rel="noopener noreferrer"
                className={commandActionClass("primary")}
              >
                {contact.cards.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </SectionFrame>
    </main>
  );
}

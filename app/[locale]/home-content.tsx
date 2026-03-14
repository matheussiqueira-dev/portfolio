"use client";

import type { SiteContent } from "@/data/site.types";
import type { ProjectCard } from "@/data/projects-card.types";
import { Link } from "@/core/i18n/navigation";

type Props = {
  site: SiteContent;
  projects: ProjectCard[];
  locale: "pt" | "en";
};

export default function HomeContent({ site, projects, locale }: Props) {
  const {
    hero,
    about,
    executiveSummary,
    services,
    projects: projectsCopy,
    contact,
    metrics,
  } = site;

  return (
    <main className="layout-container page-shell">
      {/* ── HERO ── */}
      <section id="home" className="py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)] mb-3">
          {hero.eyebrow}
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[color:var(--foreground)] mb-4">
          {hero.title}
        </h1>
        <p className="text-lg md:text-xl text-[color:var(--accent-soft)] mb-4">{hero.subtitle}</p>
        <p className="text-sm text-[color:var(--muted)] max-w-3xl leading-relaxed mb-8">
          {hero.description}
        </p>

        {/* Stack Highlights */}
        <div className="flex flex-wrap gap-3 mb-8">
          {hero.stackHighlights.map((s) => (
            <span
              key={s.label}
              className="text-xs px-3 py-1.5 rounded-full border border-[color:var(--border)] text-[color:var(--muted)] bg-[color:var(--surface-muted)]"
            >
              {s.label}
            </span>
          ))}
        </div>

        {/* Facts */}
        <div className="flex flex-wrap gap-6 mb-8 text-sm">
          {hero.facts.map((f) => (
            <div key={f.label}>
              <span className="text-[color:var(--muted)]">{f.label}: </span>
              <span className="text-[color:var(--foreground)] font-medium">{f.value}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-xl bg-[color:var(--foreground)] text-[color:var(--background)] hover:opacity-90 transition-opacity"
          >
            {hero.ctas.primary}
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-xl border border-[color:var(--border)] text-[color:var(--foreground)] hover:bg-[color:var(--surface-muted)] transition-colors"
          >
            {hero.ctas.secondary}
          </Link>
          <a
            href="https://wa.me/5581999203683"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-xl border border-[color:var(--border)] text-[color:var(--foreground)] hover:bg-[color:var(--surface-muted)] transition-colors"
          >
            {hero.ctas.tertiary}
          </a>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ paddingBlock: "var(--section-y)" }}>
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)] mb-2">
          {about.eyebrow}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[color:var(--foreground)] mb-6">
          {about.title}
        </h2>

        {/* Summary / Who */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-base font-semibold text-[color:var(--foreground)] mb-2">
              {about.summary.title}
            </h3>
            <p className="text-sm text-[color:var(--muted)] leading-relaxed">
              {about.summary.body}
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-[color:var(--foreground)] mb-2">
              {about.who.title}
            </h3>
            <p className="text-sm text-[color:var(--muted)] leading-relaxed">{about.who.body}</p>
          </div>
        </div>

        {/* Executive Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {executiveSummary.cards.map((card) => (
            <div
              key={card.title}
              className="p-5 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] text-center"
            >
              <p className="text-sm font-semibold text-[color:var(--foreground)]">{card.title}</p>
            </div>
          ))}
        </div>

        {/* What I deliver */}
        <h3 className="text-base font-semibold text-[color:var(--foreground)] mb-3">
          {about.deliver.title}
        </h3>
        <ul className="space-y-1 mb-8">
          {about.deliver.bullets.map((b) => (
            <li key={b} className="text-sm text-[color:var(--muted)] flex gap-2">
              <span className="text-[color:var(--accent-soft)] shrink-0">▸</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Snapshot */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {about.snapshot.items.map((item) => (
            <div
              key={item.value}
              className="p-4 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)]"
            >
              <p className="text-sm font-semibold text-[color:var(--foreground)]">{item.value}</p>
              <p className="text-xs text-[color:var(--muted)]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ paddingBlock: "var(--section-y)" }}>
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)] mb-2">
          {services.eyebrow}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[color:var(--foreground)] mb-3">
          {services.title}
        </h2>
        <p className="text-sm text-[color:var(--muted)] max-w-2xl mb-8">{services.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {services.offerings.map((o) => (
            <article
              key={o.title}
              className="p-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] transition-colors hover:border-[color:var(--accent-soft)]"
            >
              <h3 className="text-base font-semibold text-[color:var(--foreground)] mb-2">
                {o.title}
              </h3>
              <p className="text-sm text-[color:var(--muted)] mb-4">{o.description}</p>
              <ul className="space-y-1">
                {o.bullets.map((b) => (
                  <li key={b} className="text-xs text-[color:var(--muted)] flex gap-2">
                    <span className="text-[color:var(--accent-soft)] shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Process */}
        <h3 className="text-base font-semibold text-[color:var(--foreground)] mb-4">
          {services.processTitle}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {services.process.map((step, i) => (
            <div key={step.title} className="flex items-start gap-3">
              <span className="text-2xl font-bold text-[color:var(--accent-soft)] leading-none shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-sm font-medium text-[color:var(--foreground)]">{step.title}</p>
                <p className="text-xs text-[color:var(--muted)]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-6 text-center">
          <h3 className="text-lg font-semibold text-[color:var(--foreground)] mb-2">
            {services.cta.title}
          </h3>
          <p className="text-sm text-[color:var(--muted)] mb-4">{services.cta.description}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/hire"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-xl bg-[color:var(--foreground)] text-[color:var(--background)] hover:opacity-90 transition-opacity"
            >
              {services.cta.primaryLabel}
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-xl border border-[color:var(--border)] text-[color:var(--foreground)] hover:bg-[color:var(--surface-muted)] transition-colors"
            >
              {services.cta.secondaryLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section style={{ paddingBlock: "var(--section-y)" }}>
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)] mb-2">
          {metrics.eyebrow}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[color:var(--foreground)] mb-6">
          {metrics.title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {metrics.items.map((m) => (
            <div
              key={m.label}
              className="p-5 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] text-center"
            >
              <p className="text-sm font-semibold text-[color:var(--foreground)]">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ paddingBlock: "var(--section-y)" }}>
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)] mb-2">
          {projectsCopy.eyebrow}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[color:var(--foreground)] mb-3">
          {projectsCopy.title}
        </h2>
        <p className="text-sm text-[color:var(--muted)] max-w-2xl mb-8">
          {projectsCopy.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {projects.map((project) => {
            const title = locale === "pt" ? project.title.pt : project.title.en;
            const desc = locale === "pt" ? project.description.pt : project.description.en;
            return (
              <article
                key={project.slug}
                className="p-5 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] transition-colors hover:border-[color:var(--accent-soft)] flex flex-col"
              >
                <h3 className="text-base font-semibold text-[color:var(--foreground)] mb-1">
                  {title}
                </h3>
                <p className="text-xs text-[color:var(--muted)] mb-3 line-clamp-2">{desc}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.stack.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="text-[10px] px-2 py-0.5 rounded-full border border-[color:var(--border)] text-[color:var(--muted)]"
                    >
                      {s}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full border border-[color:var(--border)] text-[color:var(--muted)]">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>
                {project.links.caseStudy && (
                  <Link
                    href={{ pathname: "/projects/[slug]", params: { slug: project.slug } }}
                    className="text-xs font-medium text-[color:var(--accent-soft)] hover:text-[color:var(--foreground)] transition-colors mt-auto"
                  >
                    {projectsCopy.caseLabel} →
                  </Link>
                )}
              </article>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-xl border border-[color:var(--border)] text-[color:var(--foreground)] hover:bg-[color:var(--surface-muted)] transition-colors"
          >
            {projectsCopy.viewAllLabel} →
          </Link>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ paddingBlock: "var(--section-y)" }}>
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-8 md:p-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)] mb-2">
            {contact.eyebrow}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[color:var(--foreground)] mb-3">
            {contact.title}
          </h2>
          <p className="text-sm text-[color:var(--muted)] max-w-xl mx-auto mb-4">
            {contact.description}
          </p>
          <p className="text-xs text-[color:var(--muted)] mb-6">{contact.ctaSubtitle}</p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:matheussiqueirahub@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl border border-[color:var(--border)] text-[color:var(--foreground)] bg-[color:var(--surface)] hover:bg-[color:var(--surface-strong)] transition-colors"
            >
              {contact.cards.email}
            </a>
            <a
              href="https://wa.me/5581999203683"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl border border-[color:var(--border)] text-[color:var(--foreground)] bg-[color:var(--surface)] hover:bg-[color:var(--surface-strong)] transition-colors"
            >
              {contact.cards.whatsapp}
            </a>
            <a
              href="https://www.linkedin.com/in/matheussiqueira-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl border border-[color:var(--border)] text-[color:var(--foreground)] bg-[color:var(--surface)] hover:bg-[color:var(--surface-strong)] transition-colors"
            >
              {contact.cards.linkedin}
            </a>
            <a
              href="https://github.com/matheussiqueira-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl border border-[color:var(--border)] text-[color:var(--foreground)] bg-[color:var(--surface)] hover:bg-[color:var(--surface-strong)] transition-colors"
            >
              {contact.cards.github}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

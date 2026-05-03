"use client";

import type { CSSProperties } from "react";
import type { SiteContent } from "@/data/site.types";
import type { ProjectCard } from "@/data/projects-card.types";
import { getServiceExperience } from "@/data/services";
import { Link } from "@/core/i18n/navigation";
import SafeImage from "@/ui/components/demo/SafeImage";
import { StackIconList } from "@/ui/components/StackIcon";

type Props = {
  site: SiteContent;
  projects: ProjectCard[];
  locale: "pt" | "en";
};

const heroStack = ["Power BI", "SQL", "Python", "React", "Next.js", "TypeScript"];

export default function HomeContent({ site, projects, locale }: Props) {
  const { hero, about, executiveSummary, projects: projectsCopy, contact, metrics } = site;

  const featuredProjects = [...projects]
    .sort((first, second) => (first.order ?? 99) - (second.order ?? 99))
    .slice(0, 6);
  const serviceExperience = getServiceExperience(locale);

  return (
    <main className="layout-container page-shell home-shell">
      <section
        id="home"
        className="hero-section home-hero"
        data-reveal
        aria-labelledby="home-title"
      >
        <div className="home-hero__grid">
          <div className="hero-copy home-hero__copy" data-reveal>
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 id="home-title" className="hero-title">
              <span className="hero-title__name">{hero.title}</span>
              <span className="hero-title__role">{hero.subtitle}</span>
            </h1>
            <p className="hero-description">{hero.description}</p>

            <StackIconList items={heroStack} size="lg" showLabel className="home-stack-icons" />

            <div className="hero-actions">
              <Link href="/projects" className="btn-primary">
                {hero.ctas.primary}
              </Link>
              <Link href="/resume" className="btn-outline">
                {hero.ctas.secondary}
              </Link>
              <a
                href="https://wa.me/5581999203683"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                {hero.ctas.tertiary}
              </a>
            </div>
          </div>

          <aside
            className="home-hero-panel"
            aria-label={locale === "pt" ? "Resumo profissional" : "Professional summary"}
            data-reveal
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
          >
            <div className="home-hero-panel__glow" aria-hidden="true" />
            <div className="home-hero-panel__topline">
              <span>01</span>
              <span>{locale === "pt" ? "Market-ready" : "Market-ready"}</span>
            </div>
            <div className="home-hero-panel__facts">
              {hero.facts.map((fact) => (
                <div key={fact.label} className="home-fact">
                  <span className="home-fact__label">{fact.label}</span>
                  <span className="home-fact__value">{fact.value}</span>
                </div>
              ))}
            </div>
            <div className="home-hero-panel__chips">
              {hero.stackHighlights.map((item) => (
                <span key={item.label} className="home-signal">
                  {item.label}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section
        id="about"
        className="page-section home-section"
        data-reveal
        aria-labelledby="about-title"
      >
        <div className="section-heading stack-heading">
          <div className="section-heading__text">
            <p className="eyebrow">{about.eyebrow}</p>
            <h2 id="about-title" className="section-title">
              {about.title}
            </h2>
          </div>
          <p className="section-description">{about.summary.body}</p>
        </div>

        <div className="home-about-grid">
          <article className="home-panel home-panel--large" data-reveal>
            <span className="home-panel__index">A</span>
            <h3>{about.summary.title}</h3>
            <p>{about.summary.body}</p>
          </article>
          <article
            className="home-panel"
            data-reveal
            style={{ "--reveal-delay": "80ms" } as CSSProperties}
          >
            <span className="home-panel__index">B</span>
            <h3>{about.who.title}</h3>
            <p>{about.who.body}</p>
          </article>
          <article
            className="home-panel"
            data-reveal
            style={{ "--reveal-delay": "140ms" } as CSSProperties}
          >
            <span className="home-panel__index">C</span>
            <h3>{about.deliver.title}</h3>
            <ul className="home-clean-list">
              {about.deliver.bullets.slice(0, 4).map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="home-proof-strip" data-reveal>
          {executiveSummary.cards.map((card) => (
            <div key={card.title} className="home-proof">
              <span className="home-proof__dot" aria-hidden="true" />
              <span>{card.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="page-section home-section"
        data-reveal
        aria-labelledby="services-title"
      >
        <div className="section-heading stack-heading">
          <div className="section-heading__text">
            <p className="eyebrow">{serviceExperience.eyebrow}</p>
            <h2 id="services-title" className="section-title">
              {serviceExperience.title}
            </h2>
          </div>
          <p className="section-description">{serviceExperience.intro}</p>
        </div>

        <div className="home-service-list">
          {serviceExperience.pillars.map((pillar, index) => (
            <article
              key={pillar.id}
              className="home-service-row"
              data-reveal
              style={{ "--reveal-delay": `${index * 70}ms` } as CSSProperties}
            >
              <span className="home-service-row__number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <StackIconList
                  items={pillar.tools}
                  limit={5}
                  size="sm"
                  className="home-service-row__tools"
                />
              </div>
              <ul className="home-clean-list home-clean-list--compact">
                {pillar.deliverables.slice(0, 4).map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="home-process" data-reveal>
          {serviceExperience.process.map((step, index) => (
            <article key={step.title} className="home-process__step">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="page-section home-section home-metrics"
        data-reveal
        aria-labelledby="metrics-title"
      >
        <div>
          <p className="eyebrow">{metrics.eyebrow}</p>
          <h2 id="metrics-title" className="section-title">
            {metrics.title}
          </h2>
        </div>
        <div className="home-metrics__grid">
          {metrics.items.map((item) => (
            <article key={item.label} className="home-metric">
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="page-section home-section"
        data-reveal
        aria-labelledby="projects-title"
      >
        <div className="section-heading stack-heading">
          <div className="section-heading__text">
            <p className="eyebrow">{projectsCopy.eyebrow}</p>
            <h2 id="projects-title" className="section-title">
              {projectsCopy.title}
            </h2>
          </div>
          <p className="section-description">{projectsCopy.description}</p>
        </div>

        <div className="home-project-mosaic">
          {featuredProjects.map((project, index) => {
            const title = project.title[locale];
            const description = project.description[locale];
            const thumbnail = project.thumbnail[locale];

            return (
              <article
                key={project.slug}
                className="home-project-card"
                data-reveal
                style={{ "--reveal-delay": `${index * 70}ms` } as CSSProperties}
              >
                <div className="home-project-card__media">
                  <SafeImage
                    src={thumbnail}
                    fallbackSrc="/placeholder.jpg"
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                    className="home-project-card__image"
                  />
                </div>
                <div className="home-project-card__body">
                  <span className="home-project-card__kicker">
                    {projectsCopy.cardLabel} {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <StackIconList
                    items={project.stack}
                    limit={5}
                    size="sm"
                    className="home-project-card__stack"
                  />
                  <Link
                    href={{ pathname: "/projects/[slug]", params: { slug: project.slug } }}
                    className="home-project-card__link"
                  >
                    {projectsCopy.caseLabel}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="home-section-cta" data-reveal>
          <Link href="/projects" className="btn-outline">
            {projectsCopy.viewAllLabel}
          </Link>
          <Link href="/services" className="btn-outline">
            {locale === "pt" ? "Ver serviços" : "View services"}
          </Link>
          <Link href="/hire" className="btn-primary">
            {serviceExperience.cta.button}
          </Link>
        </div>
      </section>

      <section
        id="contact"
        className="page-section home-section"
        data-reveal
        aria-labelledby="contact-title"
      >
        <div className="home-contact-panel">
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 id="contact-title" className="section-title">
            {contact.title}
          </h2>
          <p>{contact.description}</p>
          <div className="home-contact-panel__actions">
            <a href="mailto:matheussiqueirahub@gmail.com" className="btn-outline">
              {contact.cards.email}
            </a>
            <a
              href="https://wa.me/5581999203683"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {contact.cards.whatsapp}
            </a>
            <a
              href="https://br.linkedin.com/in/matheussiqueira-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              {contact.cards.linkedin}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

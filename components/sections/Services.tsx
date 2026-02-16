import type { CSSProperties } from "react";
import Link from "next/link";
import type { SiteContent } from "@/data/site.types";
import LiquidCard from "@/components/ui/LiquidCard";

type Props = {
  content: SiteContent["services"];
  localePrefix?: "/en";
};

export default function Services({ content, localePrefix }: Props) {
  const contactHref = localePrefix ? "/en#contact" : "/#contact";
  const projectsHref = localePrefix ? "/en/projects" : "/projetos";

  return (
    <section id="services" className="page-section content-auto">
      <div className="section-inner">
        <div className="section-heading" data-reveal>
          <div className="section-heading__text">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="section-title">{content.title}</h2>
          </div>
          <p className="section-description">{content.description}</p>
        </div>

        <div className="services-grid">
          {content.offerings.map((offering, index) => (
            <article
              key={offering.title}
              className="card service-card"
              data-reveal
              style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
            >
              <h3 className="service-card__title">{offering.title}</h3>
              <p className="service-card__desc">{offering.description}</p>
              <ul className="service-card__list">
                {offering.bullets.map((item) => (
                  <li key={item} className="service-card__item">
                    <span className="service-card__dot" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="process-grid">
          <div className="process-header" data-reveal>
            <p className="card-kicker text-left">{content.processTitle}</p>
          </div>
          {content.process.map((step, index) => (
            <div
              key={step.title}
              className="card card-compact process-step"
              data-reveal
              style={{ "--reveal-delay": `${index * 70}ms` } as CSSProperties}
            >
              <p className="process-step__title">{step.title}</p>
              <p className="process-step__desc">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="service-cta" data-reveal>
          <LiquidCard title={content.cta.title} description={content.cta.description}>
            <Link
              href={contactHref}
              className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            >
              {content.cta.primaryLabel}
            </Link>
            <Link
              href={projectsHref}
              className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            >
              {content.cta.secondaryLabel}
            </Link>
          </LiquidCard>
        </div>
      </div>
    </section>
  );
}

import type { CSSProperties } from "react";
import Link from "next/link";
import type { SiteContent } from "@/data/site.types";

type Props = {
  content: SiteContent["engagement"];
  localePrefix?: "/en";
};

export default function Engagement({ content, localePrefix }: Props) {
  const contactHref = localePrefix ? "/en#contact" : "/#contact";
  const projectsHref = localePrefix ? "/en/projects" : "/projetos";

  return (
    <section id="engagement" className="page-section content-auto">
      <div className="section-inner">
        <div className="engagement-grid">
          <div className="engagement-copy" data-reveal>
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="section-title">{content.title}</h2>
            <p className="section-description text-left max-w-none justify-self-start">
              {content.description}
            </p>
            <div className="engagement-actions">
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
            </div>
          </div>

          <div className="engagement-cards">
            {content.cards.map((card, index) => (
              <article
                key={card.label}
                className="card card-compact engagement-card"
                data-reveal
                style={
                  {
                    "--reveal-delay": `${index * 70}ms`,
                  } as CSSProperties
                }
              >
                <p className="engagement-card__label">{card.label}</p>
                <p className="engagement-card__value">{card.value}</p>
                <p className="engagement-card__detail">{card.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

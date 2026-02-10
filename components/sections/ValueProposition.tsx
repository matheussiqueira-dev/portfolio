import type { CSSProperties } from "react";
import type { SiteContent } from "@/data/site.types";

type Props = {
  content: SiteContent["valueProposition"];
};

export default function ValueProposition({ content }: Props) {
  return (
    <section id="value" className="page-section content-auto">
      <div className="section-inner">
        <div className="section-heading" data-reveal>
          <div className="section-heading__text">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="section-title">{content.title}</h2>
          </div>
          <p className="section-description">{content.description}</p>
        </div>

        <div className="value-grid">
          {content.pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="card value-card"
              data-reveal
              style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
            >
              <div className="value-card__header">
                <span className="value-card__index">0{index + 1}</span>
                <h3 className="value-card__title">{pillar.title}</h3>
              </div>
              <p className="value-card__description">{pillar.description}</p>
              <ul className="value-card__list">
                {pillar.bullets.map((item) => (
                  <li key={item} className="value-card__item">
                    <span className="value-card__dot" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

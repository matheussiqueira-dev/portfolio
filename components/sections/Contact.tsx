import type { CSSProperties } from "react";
import { TrackedAnchor } from "@/components/analytics/TrackedLink";
import CopyButton from "@/components/ui/CopyButton";
import type { SiteContent } from "@/data/site.types";

type Props = {
  content: SiteContent["contact"];
};

export default function Contact({ content }: Props) {
  return (
    <section id="contact" className="page-section content-auto">
      <div className="section-inner">
        <div className="section-heading" data-reveal>
          <div className="section-heading__text">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="section-title">{content.title}</h2>
          </div>
        </div>

        <div className="contact-grid">
          <div className="contact-copy" data-reveal>
            <p className="section-description md:text-lg text-left max-w-none">
              {content.description}
            </p>
            <div className="card card-muted contact-cta">
              <div className="card-header text-left items-start">
                <p className="card-title text-left">{content.ctaTitle}</p>
                <p className="card-subtitle text-left">{content.ctaSubtitle}</p>
              </div>
              <div className="contact-cta__actions">
                <TrackedAnchor
                  href="mailto:matheussiqueirahub@gmail.com"
                  ariaLabel="Email"
                  tracking={{ action: "contact_email", category: "engagement" }}
                  className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                >
                  Email
                </TrackedAnchor>
                <TrackedAnchor
                  href="https://wa.me/5581999203683"
                  target="_blank"
                  rel="noopener noreferrer"
                  ariaLabel="WhatsApp"
                  tracking={{ action: "contact_whatsapp", category: "engagement" }}
                  className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                >
                  WhatsApp
                </TrackedAnchor>
              </div>
            </div>
          </div>

          <div className="contact-cards">
            <div
              className="card card-compact contact-card"
              data-reveal
              style={{ "--reveal-delay": "0ms" } as CSSProperties}
            >
              <div className="contact-card__top">
                <span className="contact-card__label">{content.cards.email}</span>
                <CopyButton
                  value="matheussiqueirahub@gmail.com"
                  label={content.copyLabel}
                  copiedLabel={content.copiedLabel}
                />
              </div>
              <a
                href="mailto:matheussiqueirahub@gmail.com"
                className="contact-card__value"
              >
                matheussiqueirahub@gmail.com
              </a>
            </div>

            <div
              className="card card-compact contact-card"
              data-reveal
              style={{ "--reveal-delay": "80ms" } as CSSProperties}
            >
              <div className="contact-card__top">
                <span className="contact-card__label">{content.cards.linkedin}</span>
                <TrackedAnchor
                  href="https://www.linkedin.com/in/matheussiqueira-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  ariaLabel="LinkedIn"
                  tracking={{ action: "click_linkedin", category: "outbound" }}
                  className="contact-card__link"
                >
                  LinkedIn
                </TrackedAnchor>
              </div>
              <span className="contact-card__value">/matheussiqueira-dev</span>
            </div>

            <div
              className="card card-compact contact-card"
              data-reveal
              style={{ "--reveal-delay": "160ms" } as CSSProperties}
            >
              <div className="contact-card__top">
                <span className="contact-card__label">{content.cards.github}</span>
                <TrackedAnchor
                  href="https://github.com/matheussiqueira-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  tracking={{
                    action: "click_github",
                    category: "outbound",
                    label: "github_profile",
                  }}
                  className="contact-card__link"
                >
                  GitHub
                </TrackedAnchor>
              </div>
              <span className="contact-card__value">/matheussiqueira-dev</span>
            </div>

            <div
              className="card card-compact contact-card contact-card--whatsapp"
              data-reveal
              style={{ "--reveal-delay": "240ms" } as CSSProperties}
            >
              <div className="contact-card__top">
                <span className="contact-card__label">{content.cards.whatsapp}</span>
                <CopyButton
                  value="+55 81 99920-3683"
                  label={content.copyLabel}
                  copiedLabel={content.copiedLabel}
                />
              </div>
              <a
                href="https://wa.me/5581999203683"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card__value"
              >
                +55 81 99920-3683
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

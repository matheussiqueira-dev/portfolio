import type { CSSProperties } from "react";
import { TrackedAnchor } from "@/components/analytics/TrackedLink";
import CopyButton from "@/components/ui/CopyButton";
import ProjectBriefForm from "@/components/sections/ProjectBriefForm";
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
                  ariaLabel={content.cards.email}
                  tracking={{ action: "contact_email", category: "engagement" }}
                  className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                >
                  {content.cards.email}
                </TrackedAnchor>
                <TrackedAnchor
                  href="https://wa.me/5581999203683"
                  target="_blank"
                  rel="noopener noreferrer"
                  ariaLabel="WhatsApp"
                  tracking={{ action: "contact_whatsapp", category: "engagement" }}
                  className="btn-outline btn-whatsapp focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                >
                  WhatsApp
                </TrackedAnchor>
              </div>
            </div>

            <ProjectBriefForm
              content={content.brief}
              copyLabel={content.copyLabel}
              copiedLabel={content.copiedLabel}
            />
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

            <TrackedAnchor
              href="https://www.linkedin.com/in/matheussiqueira-dev/"
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="LinkedIn"
              tracking={{ action: "click_linkedin", category: "outbound" }}
              className="card card-compact contact-card contact-card--interactive contact-card--linkedin"
              data-reveal
              style={{ "--reveal-delay": "80ms" } as CSSProperties}
            >
              <div className="contact-card__top">
                <span className="contact-card__label">{content.cards.linkedin}</span>
                <span className="contact-card__chip">LinkedIn</span>
              </div>
              <span className="contact-card__value">/matheussiqueira-dev</span>
            </TrackedAnchor>

            <TrackedAnchor
              href="https://github.com/matheussiqueira-dev"
              target="_blank"
              rel="noopener noreferrer"
              tracking={{
                action: "click_github",
                category: "outbound",
                label: "github_profile",
              }}
              className="card card-compact contact-card contact-card--interactive contact-card--github"
              data-reveal
              style={{ "--reveal-delay": "160ms" } as CSSProperties}
            >
              <div className="contact-card__top">
                <span className="contact-card__label">{content.cards.github}</span>
                <span className="contact-card__chip">GitHub</span>
              </div>
              <span className="contact-card__value">/matheussiqueira-dev</span>
            </TrackedAnchor>

            <TrackedAnchor
              href="https://wa.me/5581999203683"
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="WhatsApp"
              tracking={{
                action: "contact_whatsapp",
                category: "engagement",
                label: "whatsapp_card",
              }}
              className="card card-compact contact-card contact-card--interactive contact-card--whatsapp"
              data-reveal
              style={{ "--reveal-delay": "240ms" } as CSSProperties}
            >
              <div className="contact-card__top">
                <span className="contact-card__label">{content.cards.whatsapp}</span>
                <span className="contact-card__chip">WhatsApp</span>
              </div>
              <span className="contact-card__value contact-card__value--whatsapp">
                +55 81 99920-3683
              </span>
            </TrackedAnchor>
          </div>
        </div>
      </div>
    </section>
  );
}

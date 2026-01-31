import type { CSSProperties } from "react";
import { TrackedAnchor } from "@/components/analytics/TrackedLink";
import type { SiteContent } from "@/data/site.types";

type Props = {
  content: SiteContent["contact"];
};

export default function Contact({ content }: Props) {
  return (
    <section id="contact" className="page-section content-auto">
      <div className="section-inner grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="space-y-4" data-reveal>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[color:var(--foreground)]">
            {content.title}
          </h2>
          <p className="text-base md:text-lg text-[color:var(--muted)] leading-relaxed">
            {content.description}
          </p>
          <div className="card card-muted card-compact">
            <div className="card-header text-left items-start">
              <p className="card-title text-left">{content.ctaTitle}</p>
              <p className="card-subtitle text-left">{content.ctaSubtitle}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="mailto:matheussiqueirahub@gmail.com"
            className="card card-compact card-link text-sm text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            data-reveal
            style={{ "--reveal-delay": "0ms" } as CSSProperties}
          >
            <span>{content.cards.email}</span>
            <span className="text-[color:var(--muted)]">matheussiqueirahub@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/matheussiqueira-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="card card-compact card-link card-link--linkedin text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]/40"
            data-reveal
            style={{ "--reveal-delay": "80ms" } as CSSProperties}
          >
            <span>{content.cards.linkedin}</span>
            <span className="text-[#0A66C2]/70">/matheussiqueira-dev</span>
          </a>
          <TrackedAnchor
            href="https://github.com/matheussiqueira-dev"
            target="_blank"
            rel="noopener noreferrer"
            tracking={{
              action: "click_github",
              category: "outbound",
              label: "github_profile",
            }}
            className="card card-compact card-link text-sm text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            data-reveal
            style={{ "--reveal-delay": "160ms" } as CSSProperties}
          >
            <span>{content.cards.github}</span>
            <span className="text-[color:var(--muted)]">/matheussiqueira-dev</span>
          </TrackedAnchor>
          <a
            href="https://wa.me/5581999203683"
            target="_blank"
            rel="noopener noreferrer"
            className="card card-compact card-link card-link--whatsapp text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--whatsapp)]/40"
            data-reveal
            style={{ "--reveal-delay": "240ms" } as CSSProperties}
          >
            <span>{content.cards.whatsapp}</span>
            <span className="text-[color:var(--background)]">+55 81 99920-3683</span>
          </a>
        </div>
      </div>
    </section>
  );
}

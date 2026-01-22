import { TrackedAnchor } from "@/components/analytics/TrackedLink";
import type { SiteContent } from "@/data/site.types";

type Props = {
  content: SiteContent["contact"];
};

export default function Contact({ content }: Props) {
  return (
    <section id="contact" className="page-section content-auto">
      <div className="section-inner grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="space-y-4">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[color:var(--foreground)]">
            {content.title}
          </h2>
          <p className="text-base md:text-lg text-[color:var(--muted)] leading-relaxed">
            {content.description}
          </p>
          <div className="card card-muted p-4">
            <p className="text-sm font-semibold text-[color:var(--foreground)]">
              {content.ctaTitle}
            </p>
            <p className="text-sm text-[color:var(--muted)]">{content.ctaSubtitle}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="mailto:matheussiqueirahub@gmail.com"
            className="flex items-center justify-between rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-4 text-sm text-[color:var(--foreground)] shadow-sm transition hover:border-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
          >
            <span>{content.cards.email}</span>
            <span className="text-[color:var(--muted)]">matheussiqueirahub@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/matheussiqueira-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl border border-[#0A66C2]/40 bg-[color:var(--surface)] px-5 py-4 text-sm text-[#0A66C2] shadow-sm transition hover:border-[#0A66C2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]/40"
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
            className="flex items-center justify-between rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-4 text-sm text-[color:var(--foreground)] shadow-sm transition hover:border-[color:var(--foreground)]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
          >
            <span>{content.cards.github}</span>
            <span className="text-[color:var(--muted)]">/matheussiqueira-dev</span>
          </TrackedAnchor>
          <a
            href="https://wa.me/5581999203683"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl border border-[color:var(--whatsapp)] bg-[color:var(--whatsapp)] px-5 py-4 text-sm text-[color:var(--background)] shadow-sm transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--whatsapp)]/40"
          >
            <span>{content.cards.whatsapp}</span>
            <span className="text-[color:var(--background)]">+55 81 99920-3683</span>
          </a>
        </div>
      </div>
    </section>
  );
}

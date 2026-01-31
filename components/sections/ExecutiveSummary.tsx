import type { CSSProperties, ReactNode } from "react";
import type { SiteContent } from "@/data/site.types";

type Props = {
  content: SiteContent["executiveSummary"];
};

type SummaryIconKey = SiteContent["executiveSummary"]["cards"][number]["icon"];

const summaryIcons: Record<SummaryIconKey, ReactNode> = {
  education: (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 7l10-4 10 4-10 4-10-4z" />
      <path d="M6 10v5c0 1.7 3.1 3 6 3s6-1.3 6-3v-5" />
    </svg>
  ),
  projects: (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="8" height="8" rx="2" />
      <rect x="13" y="3" width="8" height="8" rx="2" />
      <rect x="3" y="13" width="8" height="8" rx="2" />
      <rect x="13" y="13" width="8" height="8" rx="2" />
    </svg>
  ),
  certifications: (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2h8l4 4v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
      <path d="M12 8h4" />
      <path d="M12 12h4" />
      <path d="M12 16h4" />
      <path d="M8 8h0.01" />
      <path d="M8 12h0.01" />
      <path d="M8 16h0.01" />
    </svg>
  ),
};

export default function ExecutiveSummary({ content }: Props) {
  return (
    <section id="summary" className="page-section content-auto">
      <div className="section-inner space-y-8">
        <div className="space-y-3" data-reveal>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[color:var(--foreground)]">
            {content.title}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.cards.map((card, index) => (
            <div
              key={card.title}
              className="card card-muted card-compact flex items-center gap-4 h-full"
              data-reveal
              style={
                {
                  "--reveal-delay": `${index * 80}ms`,
                } as CSSProperties
              }
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--accent)]">
                <span aria-hidden="true">{summaryIcons[card.icon]}</span>
              </div>
              <p className="text-sm font-semibold text-[color:var(--foreground)]">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

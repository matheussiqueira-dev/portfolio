import type { CSSProperties, ReactNode } from "react";
import type { SiteContent } from "@/data/site.types";

type Props = {
  content: SiteContent["metrics"];
};

type MetricIconKey = SiteContent["metrics"]["items"][number]["icon"];

const metricIcons: Record<MetricIconKey, ReactNode> = {
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
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h10" />
      <path d="M16 18l2 2 4-4" />
    </svg>
  ),
  github: (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a8 8 0 0 0-2.5 15.6c.4.1.5-.2.5-.4v-1.4c-2 .4-2.6-.8-2.6-.8-.4-1-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7.1-.5.3-.9.6-1.1-1.6-.2-3.3-.8-3.3-3.6 0-.8.3-1.5.8-2-.1-.2-.3-1 .1-2.1 0 0 .7-.2 2.2.8a7.5 7.5 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.5.8 1.2.8 2 0 2.8-1.7 3.4-3.4 3.6.3.3.6.8.6 1.6v2.4c0 .2.1.5.5.4A8 8 0 0 0 12 2z" />
    </svg>
  ),
  experience: (
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
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="M8 6V4h8v2" />
      <path d="M9 12h6" />
    </svg>
  ),
  data: (
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
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  ),
};

export default function MetricsSection({ content }: Props) {
  return (
    <section id="metrics" className="page-section content-auto">
      <div className="section-inner space-y-8">
        <div className="space-y-3" data-reveal>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[color:var(--foreground)]">
            {content.title}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item, index) => (
            <div
              key={item.label}
              className="card card-compact flex items-center gap-3 h-full"
              data-reveal
              style={
                {
                  "--reveal-delay": `${index * 70}ms`,
                } as CSSProperties
              }
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] text-[color:var(--accent)]"
                aria-hidden="true"
              >
                {metricIcons[item.icon]}
              </span>
              <p className="text-sm text-[color:var(--muted)]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

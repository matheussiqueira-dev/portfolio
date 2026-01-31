import type { CSSProperties, ReactNode } from "react";
import type { SiteContent } from "@/data/site.types";

type Props = {
  content: SiteContent["about"];
};

const HIGHLIGHT_KEYWORDS = [
  "frontend",
  "backend",
  "api",
  "apis",
  "dados",
  "data",
  "bi",
  "power",
  "sql",
  "python",
  "dax",
  "query",
  "etl",
  "elt",
  "cloud",
  "ia",
  "ai",
];

const escapeRegex = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const highlightText = (text: string): ReactNode[] => {
  const pattern = new RegExp(
    `\\b(${HIGHLIGHT_KEYWORDS.map(escapeRegex).join("|")})\\b`,
    "gi"
  );
  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const isKeyword = HIGHLIGHT_KEYWORDS.some(
      (keyword) => keyword.toLowerCase() === part.toLowerCase()
    );
    if (!isKeyword) {
      return <span key={`${part}-${index}`}>{part}</span>;
    }

    return (
      <span
        key={`${part}-${index}`}
        className="font-semibold text-[color:var(--accent-strong)]"
      >
        {part}
      </span>
    );
  });
};

type StackIconKey = SiteContent["about"]["stack"]["groups"][number]["icon"];

const stackIcons: Record<StackIconKey, ReactNode> = {
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
  languages: (
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
      <path d="M9 7L5 12l4 5" />
      <path d="M15 7l4 5-4 5" />
    </svg>
  ),
  database: (
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
      <rect x="4" y="4" width="16" height="6" rx="2" />
      <path d="M4 10v6c0 1.1 0.9 2 2 2h12a2 2 0 0 0 2-2v-6" />
      <path d="M8 14h8" />
    </svg>
  ),
  backend: (
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
      <rect x="3" y="4" width="18" height="6" rx="2" />
      <rect x="3" y="14" width="18" height="6" rx="2" />
      <path d="M7 7h0.01" />
      <path d="M7 17h0.01" />
    </svg>
  ),
  frontend: (
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
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </svg>
  ),
  tools: (
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
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.9 4.9l2.8 2.8" />
      <path d="M16.3 16.3l2.8 2.8" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M4.9 19.1l2.8-2.8" />
      <path d="M16.3 7.7l2.8-2.8" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
};

export default function About({ content }: Props) {
  return (
    <section id="about" className="page-section content-auto">
      <div className="section-inner space-y-10">
        <div className="space-y-3" data-reveal>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[color:var(--foreground)]">
            {content.title}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="card card-muted card-compact space-y-3" data-reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                {content.who.title}
              </p>
              <p className="text-sm text-[color:var(--muted)] leading-relaxed">
                {highlightText(content.who.body)}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div
                className="card card-compact space-y-2 h-full"
                data-reveal
                style={{ "--reveal-delay": "60ms" } as CSSProperties}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  {content.differential.title}
                </p>
                <p className="text-sm text-[color:var(--muted)] leading-relaxed">
                  {highlightText(content.differential.description)}
                </p>
              </div>

              <div
                className="card card-compact space-y-3 h-full"
                data-reveal
                style={{ "--reveal-delay": "120ms" } as CSSProperties}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  {content.deliver.title}
                </p>
                <ul className="space-y-2 text-sm text-[color:var(--muted)]">
                  {content.deliver.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent-soft)]" />
                      <span>{highlightText(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="card card-muted card-compact space-y-5 h-full" data-reveal>
            <p className="card-title text-left">{content.stack.title}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {content.stack.groups.map((group, index) => (
                <div
                  key={group.title}
                  className="panel space-y-3 h-full"
                  data-reveal
                  style={
                    {
                      "--reveal-delay": `${index * 60}ms`,
                    } as CSSProperties
                  }
                >
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    <span className="inline-flex h-5 w-5 items-center justify-center text-[color:var(--accent)]">
                      <span className="h-5 w-5" aria-hidden="true">
                        {stackIcons[group.icon]}
                      </span>
                    </span>
                    <span>{group.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="card card-compact space-y-4 h-full" data-reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              {content.snapshot.title}
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {content.snapshot.items.map((item, index) => (
                <div
                  key={`${item.value}-${item.label}`}
                  className="panel"
                  data-reveal
                  style={
                    {
                      "--reveal-delay": `${index * 60}ms`,
                    } as CSSProperties
                  }
                >
                  <p className="card-title text-left">{item.value}</p>
                  <p className="card-meta mt-1 text-left">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card card-compact space-y-4 h-full" data-reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              {content.highlights.title}
            </p>
            <ul className="space-y-2 text-sm text-[color:var(--muted)]">
              {content.highlights.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent-soft)]" />
                  <span>{highlightText(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

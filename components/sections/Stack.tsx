import type { SiteContent } from "@/data/site.types";

type Props = {
  content: SiteContent["primaryStack"];
};

const MAX_STARS = 5;

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-4 w-4 ${filled ? "text-[color:var(--accent)]" : "text-[color:var(--border)]"}`}
    aria-hidden="true"
  >
    <path
      d="M12 2l2.9 6.2 6.8.6-5.1 4.4 1.5 6.7-6.1-3.5-6.1 3.5 1.5-6.7-5.1-4.4 6.8-.6L12 2z"
      fill="currentColor"
    />
  </svg>
);

export default function Stack({ content }: Props) {
  return (
    <section id="stack" className="page-section content-auto">
      <div className="section-inner space-y-8">
        <div className="space-y-3">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[color:var(--foreground)]">
            {content.title}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {content.items.map((item) => (
            <div
              key={item.label}
              className="card card-compact flex items-center justify-between gap-4"
            >
              <span className="text-sm font-semibold text-[color:var(--foreground)]">
                {item.label}
              </span>
              <div
                className="flex items-center gap-1"
                aria-label={`${item.label} ${item.level}/${MAX_STARS}`}
              >
                {Array.from({ length: MAX_STARS }, (_, index) => (
                  <Star key={`${item.label}-${index}`} filled={index < item.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

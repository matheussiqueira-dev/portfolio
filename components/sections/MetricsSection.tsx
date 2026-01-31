import type { SiteContent } from "@/data/site.types";

type Props = {
  content: SiteContent["metrics"];
};

export default function MetricsSection({ content }: Props) {
  return (
    <section id="metrics" className="page-section content-auto">
      <div className="section-inner space-y-8">
        <div className="space-y-3">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[color:var(--foreground)]">
            {content.title}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item) => (
            <div
              key={item.label}
              className="card card-compact flex items-center gap-3"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] text-base"
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <p className="text-sm text-[color:var(--muted)]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

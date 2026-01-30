import type { SiteContent } from "@/data/site.types";

type Props = {
  content: SiteContent["about"];
};

export default function About({ content }: Props) {
  return (
    <section id="about" className="page-section content-auto">
      <div className="section-inner grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[color:var(--foreground)]">
              {content.title}
            </h2>
          </div>

          <div className="card card-muted card-compact space-y-2">
            <p className="card-title">{content.who.title}</p>
            <p className="text-sm text-[color:var(--muted)] leading-relaxed">
              {content.who.body}
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-[color:var(--foreground)]">
              {content.deliver.title}
            </p>
            <ul className="space-y-2 text-sm text-[color:var(--muted)]">
              {content.deliver.bullets.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent-soft)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              {content.snapshot.title}
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {content.snapshot.items.map((item) => (
                <div
                  key={`${item.value}-${item.label}`}
                  className="card card-compact"
                >
                  <p className="card-title">{item.value}</p>
                  <p className="card-meta mt-1 text-center">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="space-y-6">
          <div className="card card-compact space-y-3">
            <p className="card-title">{content.highlights.title}</p>
            <ul className="space-y-2 text-sm text-[color:var(--muted)]">
              {content.highlights.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent-soft)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card card-muted card-compact space-y-4">
            <p className="card-title">{content.stack.title}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {content.stack.groups.map((group) => (
                <div
                  key={group.title}
                  className="panel space-y-3"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    {group.title}
                  </p>
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
      </div>
    </section>
  );
}

import type { SiteContent } from "@/data/site.types";

type Props = {
  content: SiteContent["about"];
};

export default function About({ content }: Props) {
  return (
    <section id="about" className="page-section content-auto">
      <div className="section-inner space-y-10">
        <header>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[color:var(--foreground)] mt-3">
            {content.title}
          </h2>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-[color:var(--foreground)] mb-3">
                {content.who.title}
              </h3>
              <p className="text-sm md:text-base text-[color:var(--muted)] leading-relaxed">
                {content.who.body}
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold text-[color:var(--foreground)] mb-3">
                {content.deliver.title}
              </h3>
              <ul className="space-y-2 text-sm text-[color:var(--muted)]">
                {content.deliver.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent-soft)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold text-[color:var(--foreground)] mb-3">
                {content.highlights.title}
              </h3>
              <ul className="space-y-2 text-sm text-[color:var(--muted)]">
                {content.highlights.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="card p-6 h-fit space-y-6">
            <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
              {content.stack.title}
            </h3>
            <div className="space-y-5">
              {content.stack.groups.map((group) => (
                <div key={group.title} className="space-y-2">
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
          </aside>
        </div>
      </div>
    </section>
  );
}

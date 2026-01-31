import type { SiteContent } from "@/data/site.types";

type Props = {
  content: SiteContent["executiveSummary"];
};

export default function ExecutiveSummary({ content }: Props) {
  return (
    <section id="summary" className="page-section content-auto">
      <div className="section-inner space-y-8">
        <div className="space-y-3">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[color:var(--foreground)]">
            {content.title}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.cards.map((card) => (
            <div
              key={card.title}
              className="card card-muted card-compact flex items-center gap-4"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-lg">
                <span aria-hidden="true">{card.icon}</span>
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

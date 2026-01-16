import type { SiteContent } from "@/data/site.types";

type Props = {
  content: SiteContent["about"];
};

export default function About({ content }: Props) {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-10">
        <header>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            {content.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mt-3">
            {content.title}
          </h2>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                {content.who.title}
              </h3>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                {content.who.body}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                {content.deliver.title}
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {content.deliver.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                {content.highlights.title}
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {content.highlights.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="rounded-2xl border border-white/10 bg-white/5 p-6 h-fit">
            <h3 className="text-lg font-semibold text-white mb-4">
              {content.stack.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {content.stack.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
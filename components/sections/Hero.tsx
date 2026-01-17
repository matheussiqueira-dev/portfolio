import Image from "next/image";
import Link from "next/link";
import type { SiteContent } from "@/data/site.types";

type Props = {
  content: SiteContent["hero"];
  localePrefix?: string;
};

export default function Hero({ content, localePrefix = "" }: Props) {
  const projectsHref = localePrefix ? `${localePrefix}#projects` : "/#projects";
  const resumeHref = localePrefix ? `${localePrefix}/resume` : "/resume";
  const contactHref = localePrefix ? `${localePrefix}#contact` : "/#contact";

  return (
    <section id="home" className="scroll-mt-24 px-6 pt-28 pb-20">
      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400 motion-safe:animate-fade-up">
            {content.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-white motion-safe:animate-fade-up [animation-delay:120ms]">
            {content.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium motion-safe:animate-fade-up [animation-delay:160ms]">
            {content.subtitle}
          </p>
          <p className="text-base md:text-lg leading-relaxed text-slate-300 motion-safe:animate-fade-up [animation-delay:220ms]">
            {content.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center sm:items-stretch motion-safe:animate-fade-up [animation-delay:320ms]">
            <Link
              href={projectsHref}
              className="px-6 py-3 rounded-full bg-white text-sm font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              {content.ctas.primary}
            </Link>

            <Link
              href={resumeHref}
              className="px-6 py-3 rounded-full border border-white/20 text-sm font-medium text-white transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              {content.ctas.secondary}
            </Link>

            <Link
              href={contactHref}
              className="text-sm font-medium text-slate-300 underline decoration-white/30 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
            >
              {content.ctas.tertiary}
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end motion-safe:animate-fade-in">
          <Image
            src="/profile.jpg"
            alt="Matheus Siqueira"
            width={320}
            height={320}
            sizes="(max-width: 768px) 220px, 320px"
            priority
            className="rounded-2xl object-cover border border-white/10 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

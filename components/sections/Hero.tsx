import Image from "next/image";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import profileImage from "@/public/profile.jpg";
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
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            {content.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-white">
            {content.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium">
            {content.subtitle}
          </p>
          <p className="text-base md:text-lg leading-relaxed text-slate-300">
            {content.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center sm:items-stretch">
            <TrackedLink
              href={projectsHref}
              tracking={{ label: content.ctas.primary, location: "Hero" }}
              className="px-6 py-3 rounded-full bg-white text-sm font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              {content.ctas.primary}
            </TrackedLink>

            <TrackedLink
              href={resumeHref}
              tracking={{ label: content.ctas.secondary, location: "Hero" }}
              className="px-6 py-3 rounded-full border border-white/20 text-sm font-medium text-white transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              {content.ctas.secondary}
            </TrackedLink>

            <TrackedLink
              href={contactHref}
              tracking={{ label: content.ctas.tertiary, location: "Hero" }}
              className="text-sm font-medium text-slate-300 underline decoration-white/30 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
            >
              {content.ctas.tertiary}
            </TrackedLink>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src={profileImage}
            alt="Matheus Siqueira"
            width={320}
            height={320}
            sizes="(max-width: 768px) 140px, 320px"
            priority
            placeholder="blur"
            quality={70}
            fetchPriority="high"
            className="rounded-2xl object-cover border border-white/10 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

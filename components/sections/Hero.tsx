import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { TrackedAnchor, TrackedLink } from "@/components/analytics/TrackedLink";
import type { SiteContent } from "@/data/site.types";

type Props = {
  content: SiteContent["hero"];
  localePrefix?: "/en";
};

export default function Hero({ content, localePrefix }: Props) {
  const isEn = localePrefix === "/en";
  const projectsHref = isEn ? "/en/projects" : "/projetos";
  const resumeHref = isEn ? "/en/resume" : "/resume";
  const contactHref = isEn ? "/en#contact" : "/#contact";
  const imageAlt = isEn
    ? "Profile photo of Matheus Siqueira, Full Stack Developer"
    : "Foto de perfil de Matheus Siqueira, Desenvolvedor Full Stack";

  return (
    <section
      id="home"
      className="pt-28 pb-10"
      role="region"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <p className="eyebrow">{content.eyebrow}</p>

          <h1
            id="hero-heading"
            className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)] md:text-4xl lg:text-5xl"
          >
            {content.title}
          </h1>

          <h2 className="text-lg text-[color:var(--muted-strong)] md:text-xl">
            {content.subtitle}
          </h2>

          <p className="max-w-xl text-[color:var(--muted)] leading-relaxed">
            {content.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <TrackedLink
              href={resumeHref}
              ariaLabel={content.ctas.secondary}
              tracking={{
                action: "view_resume",
                category: "navigation",
                label: "hero_cta",
              }}
              className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            >
              {content.ctas.secondary}
            </TrackedLink>

            <TrackedAnchor
              href="https://wa.me/5581999203683"
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel={content.ctas.tertiary}
              tracking={{
                action: "contact_whatsapp",
                category: "engagement",
                label: "hero_cta",
              }}
              className="btn-outline btn-whatsapp focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            >
              {content.ctas.tertiary}
            </TrackedAnchor>

            <TrackedLink
              href={projectsHref}
              ariaLabel={content.ctas.primary}
              tracking={{
                action: "view_projects",
                category: "navigation",
                label: "hero_cta",
              }}
              className="btn-ghost focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            >
              {content.ctas.primary}
            </TrackedLink>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[color:var(--surface-muted)] blur-2xl" />
            <ImageWithFallback
              src="/profile.jpg"
              alt={imageAlt}
              width={360}
              height={360}
              quality={90}
              priority
              className="relative rounded-2xl border border-[color:var(--border)] object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

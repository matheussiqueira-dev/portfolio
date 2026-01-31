import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { TrackedAnchor, TrackedLink } from "@/components/analytics/TrackedLink";
import type { SiteContent } from "@/data/site.types";

type Props = {
  content: SiteContent["hero"];
  localePrefix?: "/en";
};

const stackIcons = {
  stack: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 7L5 12l4 5" />
      <path d="M15 7l4 5-4 5" />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l1.8 4.6L19 8l-5.2 1.8L12 14l-1.8-4.2L5 8l5.2-1.4L12 2z" />
      <path d="M6 16l1 2.5L9.5 20" />
      <path d="M18 16l-1 2.5L14.5 20" />
    </svg>
  ),
  software: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 7l9-4 9 4-9 4-9-4z" />
      <path d="M3 7v10l9 4 9-4V7" />
      <path d="M12 11v10" />
    </svg>
  ),
} as const;

const ctaIcons = {
  resume: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 8h12a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H9l-5 3v-3H6a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3z" />
      <path d="M8 12h8" />
      <path d="M8 15h5" />
    </svg>
  ),
  projects: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="8" height="8" rx="2" />
      <rect x="13" y="3" width="8" height="8" rx="2" />
      <rect x="3" y="13" width="8" height="8" rx="2" />
      <rect x="13" y="13" width="8" height="8" rx="2" />
    </svg>
  ),
} as const;

export default function Hero({ content, localePrefix }: Props) {
  const isEn = localePrefix === "/en";
  const projectsHref = isEn ? "/en/projects" : "/projetos";
  const resumeHref = isEn ? "/en/resume" : "/resume";
  const imageAlt = isEn
    ? "Profile photo of Matheus Siqueira, Full Stack Developer"
    : "Foto de perfil de Matheus Siqueira, Desenvolvedor Full Stack";
  const stackLabel = isEn ? "Stack highlights" : "Stacks em destaque";

  return (
    <section
      id="home"
      className="hero-section"
      role="region"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6 text-center md:text-left">
          {/* Eyebrow mais curto para abrir espaço para o título principal */}
          <p className="eyebrow animate-fade-up" style={{ animationDelay: "60ms" }}>
            {content.eyebrow}
          </p>

          {/* Título em duas linhas para hierarquia visual clara */}
          <h1
            id="hero-heading"
            className="hero-title animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            <span className="hero-title__name">{content.title}</span>
            <span className="hero-title__role">{content.subtitle}</span>
          </h1>

          {/* Stacks em formato de badges para leitura rápida */}
          <ul
            className="hero-stack animate-fade-up"
            style={{ animationDelay: "180ms" }}
            aria-label={stackLabel}
          >
            {content.stackHighlights.map((stack) => (
              <li key={stack.label} className="hero-stack__item">
                <span className="hero-stack__icon" aria-hidden="true">
                  {stackIcons[stack.icon]}
                </span>
                <span>{stack.label}</span>
              </li>
            ))}
          </ul>

          <p
            className="hero-description animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            {content.description}
          </p>

          {/* CTAs com alinhamento e espaçamento consistentes */}
          <div
            className="hero-actions animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <TrackedLink
              href={resumeHref}
              ariaLabel={content.ctas.secondary}
              tracking={{
                action: "view_resume",
                category: "navigation",
                label: "hero_cta",
              }}
              className="btn-primary cta-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            >
              <span className="btn-icon" aria-hidden="true">
                {ctaIcons.resume}
              </span>
              <span>{content.ctas.secondary}</span>
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
              <span className="btn-icon" aria-hidden="true">
                {ctaIcons.chat}
              </span>
              <span>{content.ctas.tertiary}</span>
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
              <span className="btn-icon" aria-hidden="true">
                {ctaIcons.projects}
              </span>
              <span>{content.ctas.primary}</span>
            </TrackedLink>
          </div>
        </div>

        <div
          className="flex justify-center md:justify-end animate-fade-in"
          style={{ animationDelay: "180ms" }}
        >
          <div className="relative">
            {/* Glow sutil para dar profundidade ao retrato */}
            <div className="absolute -inset-4 rounded-3xl bg-[color:var(--surface-muted)] blur-2xl" />
            <ImageWithFallback
              src="/profile.jpg"
              alt={imageAlt}
              width={360}
              height={360}
              quality={90}
              priority
              className="hero-photo relative rounded-2xl border border-[color:var(--border)] object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

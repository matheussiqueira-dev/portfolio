import Link from "next/link";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { trackEvent } from "@/lib/analytics";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24"
      role="region"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium text-white/70">
            Desenvolvimento • Dados • Infra
          </p>

          <h1
            id="hero-heading"
            className="text-4xl font-semibold tracking-tight text-white md:text-5xl"
          >
            Matheus Siqueira
          </h1>

          <h2 className="text-lg text-white/80">
            Tecnologia, Desenvolvimento Web e Dados
          </h2>

          <p className="max-w-xl text-white/80">
            Profissional em transição para tecnologia, com experiência prática em análise de dados,
            infraestrutura e desenvolvimento web. Foco em soluções reais, organização da informação
            e sistemas escaláveis.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/resume"
              onClick={() => trackEvent('view_resume', 'navigation', 'hero_cta')}
              aria-label="Ver currículo completo de Matheus Siqueira"
              className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Ver currículo
            </Link>

            <a
              href="https://wa.me/5581999203683"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('contact_whatsapp', 'engagement', 'hero_cta')}
              aria-label="Entrar em contato via WhatsApp com Matheus Siqueira"
              className="rounded-lg border border-white/20 px-5 py-3 text-sm font-medium text-white hover:border-white/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Entrar em contato
            </a>

            <Link
              href="/projects"
              onClick={() => trackEvent('view_projects', 'navigation', 'hero_cta')}
              aria-label="Ver todos os projetos de Matheus Siqueira"
              className="rounded-lg border border-white/10 px-5 py-3 text-sm font-medium text-white/80 hover:text-white hover:border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Ver projetos
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-white/5 blur-2xl" />
            <ImageWithFallback
              src="/profile.jpg"
              alt="Foto de perfil de Matheus Siqueira, Analista de Dados Júnior"
              width={360}
              height={360}
              quality={90}
              priority
              className="relative rounded-2xl border border-white/10 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

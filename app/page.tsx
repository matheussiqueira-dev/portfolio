import type { Metadata } from "next";
import ProfileCard from "@/ui/components/ProfileCard";
import { baseUrl } from "@/core/seo";

const landingTitle =
  "Matheus Siqueira | Infraestrutura, Full Stack e Análise de Dados";
const landingDescription =
  "Landing page pessoal de Matheus Siqueira com foco em engenharia de software, infraestrutura e análise de dados.";

const topNavItems = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "#about" },
  { label: "Serviços", href: "/contrate" },
  { label: "Projetos", href: "/projetos" },
  { label: "Currículo", href: "/resume" },
  { label: "Acadêmico", href: "/academico" },
  { label: "Certificados", href: "/certificates" },
  { label: "Contrate", href: "/contrate" },
  { label: "Contato", href: "/contrate" },
];

export const metadata: Metadata = {
  title: landingTitle,
  description: landingDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: landingTitle,
    description: landingDescription,
    url: baseUrl,
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Landing page de Matheus Siqueira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: landingTitle,
    description: landingDescription,
    images: ["/og.png"],
  },
};

export default function LandingPage() {
  return (
    <>
      <ProfileCard
        subtitle="Infraestrutura | Desenvolvedor Full Stack | Analista de Dados Júnior"
        photoAlt="Foto de Matheus Siqueira"
        resumeHref="/resume"
        resumeLabel="Ver currículo"
        projectsHref="/projetos"
        projectsLabel="Ver projetos"
        whatsappHref="https://wa.me/5581999203683"
        contactLabel="Entrar em contato"
        contactAriaLabel="Entrar em contato pelo WhatsApp"
        trackingContext="landing_root"
        topNavItems={topNavItems}
        navigationAriaLabel="Navegação principal"
        ptHref="/pt-BR"
        enHref="/en"
        activeLocale="pt-BR"
      />

      <section
        id="about"
        aria-labelledby="about-title"
        className="layout-container py-16 md:py-24"
      >
        <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)] mb-3">
          Sobre
        </p>
        <h2
          id="about-title"
          className="text-3xl md:text-4xl font-semibold tracking-tight text-[color:var(--foreground)] mb-5"
        >
          Tecnologia como instrumento de decisão
        </h2>
        <p className="text-sm md:text-base leading-relaxed text-[color:var(--muted)] max-w-4xl mb-4">
          Sou um profissional de tecnologia com atuação orientada à construção de soluções digitais
          capazes de transformar dados, processos e operações em vantagem estratégica mensurável.
          Minha trajetória foi construída na interseção entre análise de dados, engenharia de
          software e infraestrutura tecnológica.
        </p>
        <p className="text-sm md:text-base leading-relaxed text-[color:var(--muted)] max-w-4xl mb-7">
          Atuo desenvolvendo soluções que reduzem complexidade, aumentam eficiência e tornam
          decisões dependentes de evidência, não de suposição, com foco em impacto operacional
          verificável.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
            <h3 className="text-base font-semibold text-[color:var(--foreground)] mb-2">
              O que me diferencia
            </h3>
            <p className="text-sm leading-relaxed text-[color:var(--muted)]">
              Integro dados, desenvolvimento, infraestrutura e estratégia de negócio para reduzir
              dependências técnicas, acelerar entregas e aumentar previsibilidade de resultados.
            </p>
          </article>

          <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
            <h3 className="text-base font-semibold text-[color:var(--foreground)] mb-2">
              Foco de atuação
            </h3>
            <p className="text-sm leading-relaxed text-[color:var(--muted)]">
              Engenharia de Dados, Business Intelligence, sistemas escaláveis e transformação
              digital organizacional com execução prática e orientação a resultado.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

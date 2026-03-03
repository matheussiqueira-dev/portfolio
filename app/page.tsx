import type { Metadata } from "next";
import ProfileCard from "@/ui/components/ProfileCard";
import { baseUrl } from "@/core/seo";

const landingTitle =
  "Matheus Siqueira | Infraestrutura, Full Stack e Analise de Dados";
const landingDescription =
  "Landing page pessoal de Matheus Siqueira com foco em engenharia de software, infraestrutura e analise de dados.";

const topNavItems = [
  { label: "In\u00edcio", href: "/" },
  { label: "Sobre", href: "#about" },
  { label: "Servi\u00e7os", href: "/contrate" },
  { label: "Projetos", href: "/projetos" },
  { label: "Curr\u00edculo", href: "/resume" },
  { label: "Acad\u00eamico", href: "/academico" },
  { label: "Certificados", href: "/certificates" },
  { label: "Contrate", href: "/contrate" },
  { label: "Contato", href: "/pt-BR#contact" },
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
        subtitle="Infraestrutura | Desenvolvedor Full Stack | Analista de Dados J\u00fanior"
        photoAlt="Foto de Matheus Siqueira"
        resumeHref="/resume"
        resumeLabel="Ver curr\u00edculo"
        projectsHref="/projetos"
        projectsLabel="Ver projetos"
        whatsappHref="https://wa.me/5581999203683"
        contactLabel="Entrar em contato"
        contactAriaLabel="Entrar em contato pelo WhatsApp"
        trackingContext="landing_root"
        topNavItems={topNavItems}
        navigationAriaLabel="Navega\u00e7\u00e3o principal"
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
          Tecnologia como instrumento de decis\u00e3o
        </h2>
        <p className="text-sm md:text-base leading-relaxed text-[color:var(--muted)] max-w-4xl mb-4">
          Sou um profissional de tecnologia com atua\u00e7\u00e3o orientada \u00e0 constru\u00e7\u00e3o de solu\u00e7\u00f5es digitais
          capazes de transformar dados, processos e opera\u00e7\u00f5es em vantagem estrat\u00e9gica mensur\u00e1vel.
          Minha trajet\u00f3ria foi constru\u00edda na interse\u00e7\u00e3o entre an\u00e1lise de dados, engenharia de
          software e infraestrutura tecnol\u00f3gica.
        </p>
        <p className="text-sm md:text-base leading-relaxed text-[color:var(--muted)] max-w-4xl mb-7">
          Atuo desenvolvendo solu\u00e7\u00f5es que reduzem complexidade, aumentam efici\u00eancia e tornam
          decis\u00f5es dependentes de evid\u00eancia, n\u00e3o de suposi\u00e7\u00e3o, com foco em impacto operacional
          verific\u00e1vel.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
            <h3 className="text-base font-semibold text-[color:var(--foreground)] mb-2">
              O que me diferencia
            </h3>
            <p className="text-sm leading-relaxed text-[color:var(--muted)]">
              Integro dados, desenvolvimento, infraestrutura e estrat\u00e9gia de neg\u00f3cio para reduzir
              depend\u00eancias t\u00e9cnicas, acelerar entregas e aumentar previsibilidade de resultados.
            </p>
          </article>

          <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
            <h3 className="text-base font-semibold text-[color:var(--foreground)] mb-2">
              Foco de atua\u00e7\u00e3o
            </h3>
            <p className="text-sm leading-relaxed text-[color:var(--muted)]">
              Engenharia de Dados, Business Intelligence, sistemas escal\u00e1veis e transforma\u00e7\u00e3o
              digital organizacional com execu\u00e7\u00e3o pr\u00e1tica e orienta\u00e7\u00e3o a resultado.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import ProfileCard from "@/ui/components/ProfileCard";

const aboutTitle =
  "Sobre Matheus Siqueira | Engenheiro de Software e Analista de Dados orientado a Inteligência Artificial";
const aboutDescription =
  "Conheça Matheus Siqueira, profissional de tecnologia especializado em Engenharia de Software, Business Intelligence, Ciência de Dados e automação de processos orientados à tomada de decisão estratégica.";

const aboutKeywords = [
  "Matheus Siqueira",
  "Analista de Dados Brasil",
  "Engenheiro de Software",
  "Business Intelligence Specialist",
  "Power BI Developer",
  "Python Developer",
  "Data Analytics Professional",
  "Full Stack Developer Brasil",
  "Tecnologia e Dados",
  "Transformação Digital",
  "Data Driven Professional",
];

const topNavItems = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "#about" },
  { label: "Serviços", href: "/contrate" },
  { label: "Projetos", href: "/projetos" },
  { label: "Currículo", href: "/resume" },
  { label: "Acadêmico", href: "/academico" },
  { label: "Certificados", href: "/certificates" },
  { label: "Contrate", href: "/contrate" },
  { label: "Contato", href: "/pt-BR#contact" },
];

const personJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Matheus Siqueira",
  url: "https://www.matheussiqueira.dev",
  jobTitle: "Software Engineer & Data Analyst",
  sameAs: ["https://www.linkedin.com/in/matheussiqueira-dev/"],
  knowsAbout: [
    "Software Engineering",
    "Data Analytics",
    "Business Intelligence",
    "Artificial Intelligence",
    "Cloud Computing",
  ],
});

export const metadata: Metadata = {
  title: aboutTitle,
  description: aboutDescription,
  keywords: aboutKeywords,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.matheussiqueira.dev/sobre",
  },
  openGraph: {
    title: "Sobre Matheus Siqueira — Data & Software Engineering",
    description:
      "Profissional de tecnologia especializado em engenharia de software, análise de dados e desenvolvimento de soluções orientadas a impacto real.",
    url: "https://www.matheussiqueira.dev/sobre",
    type: "profile",
    images: [
      {
        url: "https://www.matheussiqueira.dev/og-sobre.png",
        width: 1200,
        height: 630,
        alt: "Sobre Matheus Siqueira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Matheus Siqueira — Data & Software Engineering",
    description:
      "Profissional de tecnologia especializado em engenharia de software, análise de dados e desenvolvimento de soluções orientadas a impacto real.",
    images: ["https://www.matheussiqueira.dev/og-sobre.png"],
  },
};

export default function LandingPage() {
  return (
    <>
      <ProfileCard
        subtitle="Dados, software e infraestrutura para decisões estratégicas com eficiência."
        photoAlt="Foto de Matheus Siqueira"
        resumeHref="/resume"
        resumeLabel="Ver currículo"
        projectsHref="/projetos"
        projectsLabel="Veja meus projetos"
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

      <section id="about" aria-labelledby="about-title" className="layout-container py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)] mb-3">Sobre Mim</p>
        <h2
          id="about-title"
          className="text-3xl md:text-4xl font-semibold tracking-tight text-[color:var(--foreground)] mb-6"
        >
          Tecnologia como Instrumento de Decisão
        </h2>

        <div className="space-y-4 text-sm md:text-base leading-relaxed text-[color:var(--muted)] max-w-5xl">
          <p>
            Sou um profissional de tecnologia com atuação orientada à construção de soluções digitais
            capazes de transformar dados, processos e operações em vantagem estratégica mensurável.
          </p>
          <p>
            Minha trajetória profissional foi construída na interseção entre análise de dados,
            engenharia de software e infraestrutura tecnológica, permitindo compreender sistemas não
            apenas do ponto de vista técnico, mas também operacional e organizacional.
          </p>
          <p>
            Atuo desenvolvendo soluções que reduzem complexidade, aumentam eficiência e tornam
            decisões dependentes de evidência, não de suposição.
          </p>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-[color:var(--foreground)] mt-10 mb-3">
          Perfil Profissional
        </h3>
        <p className="text-sm md:text-base text-[color:var(--muted)] mb-5">
          Minha atuação combina três competências centrais:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
            <h4 className="text-base font-semibold text-[color:var(--foreground)] mb-2">
              Engenharia de Dados e Business Intelligence
            </h4>
            <p className="text-sm leading-relaxed text-[color:var(--muted)]">
              Estruturação de ambientes analíticos voltados à tomada de decisão estratégica,
              incluindo modelagem de dados, construção de dashboards executivos e automação de
              pipelines analíticos. Experiência prática inclui desenvolvimento de soluções de
              Business Intelligence aplicadas à gestão pública, suportando planejamento institucional
              e análise operacional baseada em indicadores confiáveis.
            </p>
          </article>

          <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
            <h4 className="text-base font-semibold text-[color:var(--foreground)] mb-2">
              Engenharia de Software e Desenvolvimento Full Stack
            </h4>
            <p className="text-sm leading-relaxed text-[color:var(--muted)] mb-3">
              Desenvolvimento de aplicações modernas com foco em escalabilidade, manutenção
              sustentável e integração entre sistemas.
            </p>
            <ul className="space-y-1 text-sm text-[color:var(--muted)]">
              <li>• APIs e serviços backend</li>
              <li>• Aplicações web modernas</li>
              <li>• Arquitetura de sistemas</li>
              <li>• Integração de dados</li>
              <li>• Boas práticas de engenharia (SOLID, Clean Code)</li>
            </ul>
            <p className="text-sm leading-relaxed text-[color:var(--muted)] mt-3">
              Projetos incluem desenvolvimento de soluções tecnológicas e MVPs em ambientes
              colaborativos e orientados à inovação.
            </p>
          </article>
        </div>

        <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5 mb-8">
          <h4 className="text-base font-semibold text-[color:var(--foreground)] mb-2">
            Infraestrutura e Operações Tecnológicas
          </h4>
          <p className="text-sm leading-relaxed text-[color:var(--muted)]">
            Experiência direta com sustentação de ambientes críticos, suporte técnico avançado e
            organização de infraestrutura de TI, permitindo visão completa do ciclo tecnológico, da
            operação ao software. Essa vivência reduz desalinhamentos comuns entre desenvolvimento e
            operação.
          </p>
        </article>

        <h3 className="text-xl md:text-2xl font-semibold text-[color:var(--foreground)] mt-10 mb-3">
          Mentalidade de Trabalho
        </h3>
        <p className="text-sm md:text-base text-[color:var(--muted)] mb-3">
          Minha abordagem profissional é baseada em princípios objetivos:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-[color:var(--muted)] mb-3">
          <li>• Tecnologia aplicada a problemas reais</li>
          <li>• Decisão orientada por dados</li>
          <li>• Automação como ganho estrutural</li>
          <li>• Engenharia sustentável</li>
          <li>• Comunicação técnica clara com stakeholders</li>
        </ul>
        <p className="text-sm md:text-base text-[color:var(--muted)] mb-8">
          O foco não está apenas em desenvolver sistemas, mas em entregar impacto operacional
          verificável.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[color:var(--foreground)] mt-10 mb-3">
          Trajetória e Evolução
        </h3>
        <p className="text-sm md:text-base text-[color:var(--muted)] mb-3">
          A evolução profissional segue um movimento consistente:
        </p>
        <p className="text-sm md:text-base font-medium text-[color:var(--foreground)] mb-3">
          Negócio → Dados → Software → Engenharia
        </p>
        <p className="text-sm md:text-base text-[color:var(--muted)] mb-8">
          Essa progressão permite compreender tanto o contexto estratégico quanto a implementação
          técnica necessária para viabilizar soluções digitais completas. Experiências anteriores em
          análise organizacional e dados corporativos contribuíram para forte capacidade analítica
          aplicada à tomada de decisão executiva e planejamento institucional.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[color:var(--foreground)] mt-10 mb-3">
          O Que Me Diferencia
        </h3>
        <p className="text-sm md:text-base text-[color:var(--muted)] mb-3">
          Grande parte dos profissionais especializa-se em apenas uma camada tecnológica. Meu
          diferencial está na integração entre:
        </p>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
          <li className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-3 text-sm text-[color:var(--muted)]">
            Dados
          </li>
          <li className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-3 text-sm text-[color:var(--muted)]">
            Desenvolvimento
          </li>
          <li className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-3 text-sm text-[color:var(--muted)]">
            Infraestrutura
          </li>
          <li className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-3 text-sm text-[color:var(--muted)]">
            Estratégia de negócio
          </li>
        </ul>
        <p className="text-sm md:text-base text-[color:var(--muted)] mb-8">
          Essa combinação permite reduzir dependências técnicas, acelerar entregas e aumentar
          previsibilidade de resultados.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[color:var(--foreground)] mt-10 mb-3">
          Visão de Futuro
        </h3>
        <p className="text-sm md:text-base text-[color:var(--muted)] mb-3">
          Meu objetivo profissional é atuar no desenvolvimento de soluções tecnológicas de alto
          impacto, envolvendo:
        </p>
        <ul className="space-y-1 text-sm text-[color:var(--muted)] mb-3">
          <li>• Inteligência Artificial aplicada</li>
          <li>• Engenharia de Dados</li>
          <li>• Sistemas escaláveis</li>
          <li>• Plataformas analíticas</li>
          <li>• Transformação digital organizacional</li>
        </ul>
        <p className="text-sm md:text-base text-[color:var(--muted)] mb-8">
          Sempre com foco em tecnologia como instrumento de eficiência, transparência e inovação
          sustentável.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[color:var(--foreground)] mt-10 mb-4">
          Tecnologias e Áreas de Atuação
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
            <h4 className="text-base font-semibold text-[color:var(--foreground)] mb-2">Dados & Analytics</h4>
            <p className="text-sm text-[color:var(--muted)]">Power BI · SQL · DAX · Python · ETL · Data Modeling</p>
          </article>
          <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
            <h4 className="text-base font-semibold text-[color:var(--foreground)] mb-2">Desenvolvimento</h4>
            <p className="text-sm text-[color:var(--muted)]">
              JavaScript · TypeScript · React · Next.js · APIs REST
            </p>
          </article>
          <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
            <h4 className="text-base font-semibold text-[color:var(--foreground)] mb-2">Infraestrutura</h4>
            <p className="text-sm text-[color:var(--muted)]">Cloud Computing · DevOps · Versionamento · CI/CD</p>
          </article>
          <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
            <h4 className="text-base font-semibold text-[color:var(--foreground)] mb-2">Metodologias</h4>
            <p className="text-sm text-[color:var(--muted)]">
              Scrum · Engenharia orientada a produto · Data-Driven Strategy
            </p>
          </article>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-[color:var(--foreground)] mt-10 mb-4">
          Impacto Gerado
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
            <p className="text-2xl font-semibold text-[color:var(--foreground)]">14+</p>
            <p className="text-sm text-[color:var(--muted)]">Projetos full stack e analíticos entregues</p>
          </article>
          <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
            <p className="text-2xl font-semibold text-[color:var(--foreground)]">3</p>
            <p className="text-sm text-[color:var(--muted)]">Camadas integradas: dados, software e infraestrutura</p>
          </article>
          <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
            <p className="text-2xl font-semibold text-[color:var(--foreground)]">2</p>
            <p className="text-sm text-[color:var(--muted)]">Contextos de atuação: setor público e privado</p>
          </article>
        </div>

        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-6 md:p-8 text-center">
          <p className="text-sm md:text-base text-[color:var(--muted)] mb-4">
            Tecnologia aplicada a impacto real, com execução de ponta a ponta.
          </p>
          <Link
            href="/projetos"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-xl bg-[color:var(--foreground)] text-[color:var(--background)] hover:opacity-90 transition-opacity"
          >
            Veja meus projetos
          </Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personJsonLd }} />
    </>
  );
}

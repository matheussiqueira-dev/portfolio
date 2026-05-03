import type { Metadata } from "next";
import type { CSSProperties } from "react";

import { Link } from "@/core/i18n/navigation";

import { resolveLocale, type LocaleParams } from "../_lib";

type Props = {
  params: LocaleParams;
};

const hireCopy = {
  "pt-BR": {
    title: "Contrate um profissional que conecta dados, software e operação",
    metaDescription:
      "Contrate Matheus Siqueira para projetos de dashboards, automação, aplicações web e soluções orientadas por dados.",
    eyebrow: "Contratação",
    lead: "Eu ajudo empresas e equipes a sair do improviso técnico para produtos, dashboards e automações que funcionam em produção, com clareza de escopo e foco em resultado mensurável.",
    primaryCta: "Falar pelo WhatsApp",
    secondaryCta: "Enviar briefing por e-mail",
    projectsCta: "Ver projetos",
    fitTitle: "Projetos em que faço mais diferença",
    fitDescription:
      "Ideal quando você precisa de alguém que entenda tanto a regra de negócio quanto a implementação técnica.",
    projectTypes: [
      {
        title: "Dashboards executivos e BI",
        description: "KPIs, modelos de dados, storytelling e painéis para decisão operacional.",
      },
      {
        title: "Automação de processos",
        description:
          "Rotinas com Python, integração de dados e redução de trabalho manual repetitivo.",
      },
      {
        title: "Aplicações web e MVPs",
        description:
          "Interfaces modernas, APIs, protótipos funcionais e evolução para produto real.",
      },
      {
        title: "Auditoria técnica e melhoria contínua",
        description:
          "Diagnóstico de código, performance, acessibilidade, dados e riscos de manutenção.",
      },
    ],
    processTitle: "Como conduzo o trabalho",
    process: [
      {
        title: "Alinhamento de impacto",
        description:
          "Definimos objetivo, usuários, restrições e métrica de sucesso antes de codar.",
      },
      {
        title: "Plano técnico enxuto",
        description: "Transformo o problema em backlog, arquitetura e entregáveis verificáveis.",
      },
      {
        title: "Execução com validação",
        description: "Entregas curtas, testes, revisão visual e ajustes baseados em feedback real.",
      },
      {
        title: "Transferência e continuidade",
        description: "Documentação, próximos passos e base organizada para manutenção ou escala.",
      },
    ],
    differentiatorsTitle: "Por que me chamar",
    differentiators: [
      "Visão integrada de dados, backend, frontend e operação.",
      "Comunicação direta com linguagem executiva e técnica.",
      "Preocupação com SEO, acessibilidade, performance e qualidade de entrega.",
      "Capacidade de transformar requisito solto em produto utilizável.",
    ],
    finalTitle: "Tem uma demanda real para tirar do papel?",
    finalDescription:
      "Me envie o contexto, prazo desejado e o resultado que você precisa alcançar. Eu respondo com um caminho objetivo para avançarmos.",
  },
  en: {
    title: "Hire a professional who connects data, software, and operations",
    metaDescription:
      "Hire Matheus Siqueira for dashboards, automation, web applications, and data-driven solutions.",
    eyebrow: "Hire",
    lead: "I help teams move from technical improvisation to production-ready products, dashboards, and automations with clear scope and measurable outcomes.",
    primaryCta: "Talk on WhatsApp",
    secondaryCta: "Send an email brief",
    projectsCta: "View projects",
    fitTitle: "Where I create the most leverage",
    fitDescription:
      "Best fit when you need someone who understands both business rules and technical implementation.",
    projectTypes: [
      {
        title: "Executive dashboards and BI",
        description: "KPIs, data models, storytelling, and dashboards for operational decisions.",
      },
      {
        title: "Process automation",
        description: "Python routines, data integration, and reduction of repetitive manual work.",
      },
      {
        title: "Web apps and MVPs",
        description: "Modern interfaces, APIs, functional prototypes, and product evolution.",
      },
      {
        title: "Technical audit and improvement",
        description: "Code, performance, accessibility, data, and maintainability risk review.",
      },
    ],
    processTitle: "How I run the engagement",
    process: [
      {
        title: "Impact alignment",
        description: "We define goals, users, constraints, and success metrics before coding.",
      },
      {
        title: "Lean technical plan",
        description: "I turn the problem into backlog, architecture, and verifiable deliverables.",
      },
      {
        title: "Validated execution",
        description: "Short delivery cycles, tests, visual review, and feedback-based adjustments.",
      },
      {
        title: "Handoff and continuity",
        description: "Documentation, next steps, and an organized base for maintenance or scale.",
      },
    ],
    differentiatorsTitle: "Why bring me in",
    differentiators: [
      "Integrated view across data, backend, frontend, and operations.",
      "Direct communication in both executive and technical language.",
      "Attention to SEO, accessibility, performance, and delivery quality.",
      "Ability to turn loose requirements into usable products.",
    ],
    finalTitle: "Have a real demand to ship?",
    finalDescription:
      "Send me the context, desired timeline, and outcome you need. I will reply with a practical path forward.",
  },
} as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const copy = locale === "en" ? hireCopy.en : hireCopy["pt-BR"];

  return {
    title: locale === "en" ? "Hire Me" : "Contrate-me",
    description: copy.metaDescription,
  };
}

export default async function HirePage({ params }: Props) {
  const locale = await resolveLocale(params);
  const copy = locale === "en" ? hireCopy.en : hireCopy["pt-BR"];

  return (
    <main className="layout-container page-shell hire-page">
      <section className="hire-hero" data-reveal aria-labelledby="hire-title">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1 id="hire-title">{copy.title}</h1>
        <p>{copy.lead}</p>
        <div className="hire-hero__actions">
          <a
            href="https://wa.me/5581999203683"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {copy.primaryCta}
          </a>
          <a href="mailto:matheussiqueirahub@gmail.com" className="btn-outline">
            {copy.secondaryCta}
          </a>
          <Link href="/projects" className="btn-ghost">
            {copy.projectsCta}
          </Link>
        </div>
      </section>

      <section className="hire-section" data-reveal aria-labelledby="hire-fit-title">
        <div className="section-heading stack-heading">
          <div className="section-heading__text">
            <p className="eyebrow">Fit</p>
            <h2 id="hire-fit-title" className="section-title">
              {copy.fitTitle}
            </h2>
          </div>
          <p className="section-description">{copy.fitDescription}</p>
        </div>

        <div className="hire-type-grid">
          {copy.projectTypes.map((type, index) => (
            <article
              key={type.title}
              className="hire-type"
              data-reveal
              style={{ "--reveal-delay": `${index * 70}ms` } as CSSProperties}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{type.title}</h3>
              <p>{type.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="hire-section hire-flow" data-reveal aria-labelledby="hire-process-title">
        <p className="eyebrow">Processo</p>
        <h2 id="hire-process-title" className="section-title">
          {copy.processTitle}
        </h2>
        <div className="hire-flow__steps">
          {copy.process.map((step, index) => (
            <article key={step.title} className="hire-step">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="hire-section hire-differentials"
        data-reveal
        aria-labelledby="hire-diff-title"
      >
        <div>
          <p className="eyebrow">Diferenciais</p>
          <h2 id="hire-diff-title" className="section-title">
            {copy.differentiatorsTitle}
          </h2>
        </div>
        <ul>
          {copy.differentiators.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="hire-final" data-reveal aria-labelledby="hire-final-title">
        <p className="eyebrow">{locale === "en" ? "Next step" : "Próximo passo"}</p>
        <h2 id="hire-final-title">{copy.finalTitle}</h2>
        <p>{copy.finalDescription}</p>
        <div className="hire-hero__actions">
          <a
            href="https://wa.me/5581999203683"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {copy.primaryCta}
          </a>
          <a href="mailto:matheussiqueirahub@gmail.com" className="btn-outline">
            {copy.secondaryCta}
          </a>
        </div>
      </section>
    </main>
  );
}

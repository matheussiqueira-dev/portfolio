import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/core/i18n/navigation";
import { baseUrl, buildAlternates, siteName } from "@/core/seo";
import { StackIconList } from "@/ui/components/StackIcon";
import { resolveLocale, pickByLocale, type LocaleParams } from "../_lib";

/* ─── Types ─────────────────────────────────────────────────────────────────── */

type Props = { params: LocaleParams };

/* ─── SEO Copy (PT / EN) ────────────────────────────────────────────────────── */

interface SeoLocale {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
}

const seo: { pt: SeoLocale; en: SeoLocale } = {
  pt: {
    title:
      "Sobre Matheus Siqueira | Engenheiro de Software e Analista de Dados orientado a Inteligência Artificial",
    description:
      "Conheça Matheus Siqueira, profissional de tecnologia especializado em Engenharia de Software, Business Intelligence, Ciência de Dados e automação de processos orientados à tomada de decisão estratégica.",
    keywords: [
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
    ],
    ogTitle: "Sobre Matheus Siqueira — Data & Software Engineering",
    ogDescription:
      "Profissional de tecnologia especializado em engenharia de software, análise de dados e desenvolvimento de soluções orientadas a impacto real.",
  },
  en: {
    title: "About Matheus Siqueira | Software Engineer & Data Analyst driven by AI",
    description:
      "Meet Matheus Siqueira, a tech professional specialised in Software Engineering, Business Intelligence, Data Science and AI-driven process automation.",
    keywords: [
      "Matheus Siqueira",
      "Data Analyst Brazil",
      "Software Engineer",
      "Business Intelligence Specialist",
      "Power BI Developer",
      "Python Developer",
      "Data Analytics Professional",
      "Full Stack Developer Brazil",
      "Technology and Data",
      "Digital Transformation",
      "Data Driven Professional",
    ],
    ogTitle: "About Matheus Siqueira — Data & Software Engineering",
    ogDescription:
      "Technology professional specialised in software engineering, data analysis and solutions driven by real impact.",
  },
};

/* ─── JSON-LD ───────────────────────────────────────────────────────────────── */

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Matheus Siqueira",
  url: baseUrl,
  jobTitle: "Software Engineer & Data Analyst",
  sameAs: ["https://br.linkedin.com/in/matheussiqueira-dev/"],
  knowsAbout: [
    "Software Engineering",
    "Data Analytics",
    "Business Intelligence",
    "Artificial Intelligence",
    "Cloud Computing",
  ],
};

/* ─── Metadata ──────────────────────────────────────────────────────────────── */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = pickByLocale(locale, seo.pt, seo.en);

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    robots: { index: true, follow: true },
    alternates: buildAlternates({ pt: "/sobre", en: "/en/about" }),
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      url: pickByLocale(locale, `${baseUrl}/sobre`, `${baseUrl}/en/about`),
      siteName,
      type: "profile",
      images: [
        {
          url: `${baseUrl}/og.png`,
          width: 1200,
          height: 630,
          alt: pickByLocale(locale, "Sobre Matheus Siqueira", "About Matheus Siqueira"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.ogTitle,
      description: t.ogDescription,
      images: [`${baseUrl}/og.png`],
    },
  };
}

/* ─── Page Content Definitions ──────────────────────────────────────────────── */

const content = {
  pt: {
    eyebrow: "Sobre",
    heroLine: "Engenharia de Software, Dados e IA aplicada a resultados reais.",
    heroIntroP1:
      "Transformo dados dispersos, processos manuais e demandas de negócio em sistemas digitais com impacto verificável.",
    heroIntroP2:
      "Minha trajetória une dados fiscais, BI, infraestrutura N2 e desenvolvimento full stack para entender o problema do SLA ao indicador executivo.",
    heroIntroP3:
      "Essa combinação me permite entregar automações, aplicações e dashboards que reduzem retrabalho, aceleram decisões e aumentam previsibilidade operacional.",
    profileTitle: "Perfil Profissional",
    pillars: [
      {
        title: "Engenharia de Dados e Business Intelligence",
        description:
          "Estruturei ETL com SQL, Python e Power Query para bases fiscais e educacionais, reduzindo esforço manual em rotinas analíticas e acelerando a leitura executiva com dashboards em Power BI.",
      },
      {
        title: "Engenharia de Software e Desenvolvimento Full Stack",
        description:
          "Desenvolvi soluções web e integrações com foco em performance e manutenção, conectando front-end, back-end e dados para transformar fluxos operacionais em produtos utilizáveis.",
      },
      {
        title: "Infraestrutura e Operações Tecnológicas",
        description:
          "Sustentei ambientes educacionais e suporte N2, reduzindo indisponibilidade, organizando inventário técnico e protegendo a continuidade operacional das equipes.",
      },
    ],
    mindsetTitle: "Mentalidade de Trabalho",
    mindsetPrinciples: [
      "Problema de negócio antes da implementação",
      "Métrica antes de opinião",
      "Automação onde há repetição",
      "Arquitetura para escalar",
      "Clareza executiva na comunicação",
    ],
    mindsetClosing: "Meu objetivo é sair do diagnóstico para a solução com impacto verificável.",
    trajectoryTitle: "Trajetória e Evolução",
    trajectoryFlow: "Negócio → Dados → Software → Engenharia",
    trajectoryDescription:
      "A transição de negócio para dados e depois software me dá leitura de contexto, rigor analítico e capacidade de execução. Isso me permite projetar sistemas que resolvem a dor real e já nascem alinhados a métricas, operação e governança.",
    differentiatorTitle: "O Que Me Diferencia",
    differentiatorIntro:
      "Meu diferencial está em conectar as camadas que normalmente ficam separadas:",
    differentiatorAreas: ["Dados", "Produto", "Engenharia", "Operação"],
    differentiatorClosing:
      "Essa combinação reduz handoffs, acelera delivery e aumenta a previsibilidade dos resultados.",
    visionTitle: "Visão de Futuro",
    visionDescription:
      "Quero atuar em produtos e plataformas que unam dados, automação e software para gerar eficiência, receita ou redução de custo com rastreabilidade.",
    visionAreas: [
      "Inteligência Artificial aplicada",
      "Engenharia de Dados",
      "Sistemas escaláveis",
      "Plataformas analíticas",
      "Transformação digital organizacional",
    ],
    stackTitle: "Tecnologias e Áreas de Atuação",
    stackGroups: [
      {
        label: "Dados & Analytics",
        items: ["Power BI", "SQL", "Python", "Excel", "Pandas"],
      },
      {
        label: "Desenvolvimento",
        items: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js"],
      },
      {
        label: "Infraestrutura",
        items: ["AWS", "Azure", "Docker", "GitHub", "Visual Studio Code"],
      },
      {
        label: "Metodologias",
        items: ["Power BI", "Figma", "ChatGPT", "GitHub Copilot"],
      },
    ],
    ctaLabel: "Veja meus projetos",
  },
  en: {
    eyebrow: "About",
    heroLine: "Software Engineering, Data & applied AI for real outcomes.",
    heroIntroP1:
      "I turn scattered data, manual processes, and business demand into digital systems with verifiable impact.",
    heroIntroP2:
      "My background combines fiscal data, BI, Tier 2 infrastructure, and full-stack development so I can understand the problem from SLA to executive KPI.",
    heroIntroP3:
      "That lets me deliver automation, applications, and dashboards that reduce rework, speed decisions, and increase operational predictability.",
    profileTitle: "Professional Profile",
    pillars: [
      {
        title: "Data Engineering & Business Intelligence",
        description:
          "I structured ETL with SQL, Python, and Power Query for fiscal and educational datasets, reducing manual effort in analytical routines and accelerating executive reading with Power BI dashboards.",
      },
      {
        title: "Software Engineering & Full Stack Development",
        description:
          "I built web solutions and integrations focused on performance and maintainability, connecting frontend, backend, and data to turn operational flows into usable products.",
      },
      {
        title: "Infrastructure & Technology Operations",
        description:
          "I supported educational environments and Tier 2 operations, reducing downtime, organizing technical inventory, and protecting continuity for dependent teams.",
      },
    ],
    mindsetTitle: "Work Mindset",
    mindsetPrinciples: [
      "Business problem before implementation",
      "Metrics before opinions",
      "Automation where repetition exists",
      "Architecture designed to scale",
      "Executive clarity in communication",
    ],
    mindsetClosing: "My goal is to move from diagnosis to solution with verifiable impact.",
    trajectoryTitle: "Trajectory & Growth",
    trajectoryFlow: "Business → Data → Software → Engineering",
    trajectoryDescription:
      "Moving from business to data and then to software gives me context, analytical rigor, and execution ability. That lets me design systems that solve real pain and are aligned with metrics, operations, and governance from day one.",
    differentiatorTitle: "What Sets Me Apart",
    differentiatorIntro: "My differentiator is connecting layers that are usually split apart:",
    differentiatorAreas: ["Data", "Product", "Engineering", "Operations"],
    differentiatorClosing:
      "This combination reduces handoffs, speeds up delivery, and increases outcome predictability.",
    visionTitle: "Future Vision",
    visionDescription:
      "I want to work on products and platforms that combine data, automation, and software to generate efficiency, revenue, or cost reduction with traceability.",
    visionAreas: [
      "Applied Artificial Intelligence",
      "Data Engineering",
      "Scalable systems",
      "Analytics platforms",
      "Organisational digital transformation",
    ],
    stackTitle: "Technologies & Areas of Expertise",
    stackGroups: [
      {
        label: "Data & Analytics",
        items: ["Power BI", "SQL", "Python", "Excel", "Pandas"],
      },
      {
        label: "Development",
        items: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js"],
      },
      {
        label: "Infrastructure",
        items: ["AWS", "Azure", "Docker", "GitHub", "Visual Studio Code"],
      },
      {
        label: "Methodologies",
        items: ["Power BI", "Figma", "ChatGPT", "GitHub Copilot"],
      },
    ],
    ctaLabel: "See my projects",
  },
};

/* ─── Impact Metrics ────────────────────────────────────────────────────────── */

const metrics = {
  pt: [
    { value: "20+", label: "Projetos entregues" },
    { value: "BI, IA & Web", label: "Domínios de atuação" },
    { value: "Full Stack", label: "End-to-end delivery" },
  ],
  en: [
    { value: "20+", label: "Projects delivered" },
    { value: "BI, AI & Web", label: "Domains of expertise" },
    { value: "Full Stack", label: "End-to-end delivery" },
  ],
};

/* ─── Page Component ────────────────────────────────────────────────────────── */

export default async function AboutPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = pickByLocale(locale, content.pt, content.en);
  const m = pickByLocale(locale, metrics.pt, metrics.en);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <main className="layout-container page-shell about-page">
        <header className="about-hero" data-reveal>
          <div className="about-hero__media" aria-hidden="true">
            <Image
              src="/profile.jpg"
              alt=""
              fill
              className="about-hero__image"
              priority
              sizes="(max-width: 768px) 180px, 260px"
            />
          </div>

          <div className="about-hero__copy">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>Matheus Siqueira</h1>
            <p className="about-hero__lead">{t.heroLine}</p>
            <div className="about-hero__body">
              <p>{t.heroIntroP1}</p>
              <p>{t.heroIntroP2}</p>
              <p>{t.heroIntroP3}</p>
            </div>
            <div className="about-hero__actions">
              <Link href="/projects" className="btn-primary">
                {t.ctaLabel}
              </Link>
              <Link href="/hire" className="btn-outline">
                {locale === "pt-BR" ? "Conversar sobre uma demanda" : "Discuss a project"}
              </Link>
            </div>
          </div>

          <div className="about-metrics" aria-label="Resumo profissional">
            {m.map((metric) => (
              <article key={metric.label} className="about-metric">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>
        </header>

        <section className="about-section" data-reveal aria-labelledby="about-profile-title">
          <div className="section-heading stack-heading">
            <div className="section-heading__text">
              <p className="eyebrow">Perfil</p>
              <h2 id="about-profile-title" className="section-title">
                {t.profileTitle}
              </h2>
            </div>
            <p className="section-description">{t.heroIntroP1}</p>
          </div>

          <div className="about-card-grid about-card-grid--three">
            {t.pillars.map((pillar, index) => (
              <article key={pillar.title} className="about-card" data-reveal>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section about-split" data-reveal>
          <article className="about-card about-card--featured">
            <span>Mindset</span>
            <h2>{t.mindsetTitle}</h2>
            <ul>
              {t.mindsetPrinciples.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
            <p>{t.mindsetClosing}</p>
          </article>

          <article className="about-card about-card--featured">
            <span>Trajetória</span>
            <h2>{t.trajectoryTitle}</h2>
            <strong>{t.trajectoryFlow}</strong>
            <p>{t.trajectoryDescription}</p>
          </article>
        </section>

        <section className="about-section about-split" data-reveal>
          <article className="about-card about-card--featured">
            <span>Diferenciais</span>
            <h2>{t.differentiatorTitle}</h2>
            <p>{t.differentiatorIntro}</p>
            <div className="about-tag-list">
              {t.differentiatorAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
            <p>{t.differentiatorClosing}</p>
          </article>

          <article className="about-card about-card--featured">
            <span>Visão</span>
            <h2>{t.visionTitle}</h2>
            <p>{t.visionDescription}</p>
            <div className="about-tag-list">
              {t.visionAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </article>
        </section>

        <section className="about-section" data-reveal aria-labelledby="about-stack-title">
          <div className="section-heading stack-heading">
            <div className="section-heading__text">
              <p className="eyebrow">Stack</p>
              <h2 id="about-stack-title" className="section-title">
                {t.stackTitle}
              </h2>
            </div>
          </div>

          <div className="about-card-grid">
            {t.stackGroups.map((group) => (
              <article key={group.label} className="about-card about-stack-card">
                <h3>{group.label}</h3>
                <StackIconList items={group.items} size="sm" showLabel />
              </article>
            ))}
          </div>
        </section>

        <section className="about-final" data-reveal>
          <h2>{locale === "pt-BR" ? "Quer ver isso aplicado?" : "Want to see this applied?"}</h2>
          <p>
            {locale === "pt-BR"
              ? "Os projetos mostram como conecto dados, software, automação e operação em entregas reais."
              : "The projects show how I connect data, software, automation and operations in real work."}
          </p>
          <Link href="/projects" className="btn-primary">
            {t.ctaLabel}
          </Link>
        </section>
      </main>
    </>
  );
}

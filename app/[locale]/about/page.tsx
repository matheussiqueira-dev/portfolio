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
    heroLine: "Engenharia de Software, Dados e IA aplicada a decisões reais.",
    heroIntroP1:
      "Sou um profissional de tecnologia com atuação orientada à construção de soluções digitais capazes de transformar dados, processos e operações em vantagem estratégica mensurável.",
    heroIntroP2:
      "Minha trajetória profissional foi construída na interseção entre análise de dados, engenharia de software e infraestrutura tecnológica, permitindo compreender sistemas não apenas do ponto de vista técnico, mas também operacional e organizacional.",
    heroIntroP3:
      "Atuo desenvolvendo soluções que reduzem complexidade, aumentam eficiência e tornam decisões dependentes de evidência — não de suposição.",
    profileTitle: "Perfil Profissional",
    pillars: [
      {
        title: "Engenharia de Dados e Business Intelligence",
        description:
          "Estruturação de ambientes analíticos voltados à tomada de decisão estratégica, incluindo modelagem de dados, construção de dashboards executivos e automação de pipelines analíticos. Experiência prática inclui desenvolvimento de soluções de Business Intelligence aplicadas à gestão pública, suportando planejamento institucional e análise operacional baseada em indicadores confiáveis.",
      },
      {
        title: "Engenharia de Software e Desenvolvimento Full Stack",
        description:
          "Desenvolvimento de aplicações modernas com foco em escalabilidade, manutenção sustentável e integração entre sistemas. Atuação envolvendo APIs e serviços backend, aplicações web modernas, arquitetura de sistemas, integração de dados e boas práticas de engenharia (SOLID, Clean Code).",
      },
      {
        title: "Infraestrutura e Operações Tecnológicas",
        description:
          "Experiência direta com sustentação de ambientes críticos, suporte técnico avançado e organização de infraestrutura de TI, permitindo visão completa do ciclo tecnológico — da operação ao software. Essa vivência reduz desalinhamentos comuns entre desenvolvimento e operação.",
      },
    ],
    mindsetTitle: "Mentalidade de Trabalho",
    mindsetPrinciples: [
      "Tecnologia aplicada a problemas reais",
      "Decisão orientada por dados",
      "Automação como ganho estrutural",
      "Engenharia sustentável",
      "Comunicação técnica clara com stakeholders",
    ],
    mindsetClosing:
      "O foco não está apenas em desenvolver sistemas, mas em entregar impacto operacional verificável.",
    trajectoryTitle: "Trajetória e Evolução",
    trajectoryFlow: "Negócio → Dados → Software → Engenharia",
    trajectoryDescription:
      "Essa progressão permite compreender tanto o contexto estratégico quanto a implementação técnica necessária para viabilizar soluções digitais completas. Experiências anteriores em análise organizacional e dados corporativos contribuíram para forte capacidade analítica aplicada à tomada de decisão executiva e planejamento institucional.",
    differentiatorTitle: "O Que Me Diferencia",
    differentiatorIntro:
      "Grande parte dos profissionais especializa-se em apenas uma camada tecnológica. Meu diferencial está na integração entre:",
    differentiatorAreas: ["Dados", "Desenvolvimento", "Infraestrutura", "Estratégia de negócio"],
    differentiatorClosing:
      "Essa combinação permite reduzir dependências técnicas, acelerar entregas e aumentar previsibilidade de resultados.",
    visionTitle: "Visão de Futuro",
    visionDescription:
      "Meu objetivo profissional é atuar no desenvolvimento de soluções tecnológicas de alto impacto, sempre com foco em tecnologia como instrumento de eficiência, transparência e inovação sustentável.",
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
    heroLine: "Software Engineering, Data & applied AI for real decisions.",
    heroIntroP1:
      "I'm a technology professional focused on building digital solutions that turn data, processes and operations into measurable strategic advantages.",
    heroIntroP2:
      "My career was built at the intersection of data analysis, software engineering and technology infrastructure — allowing me to understand systems not only from a technical standpoint but also operational and organisational.",
    heroIntroP3:
      "I develop solutions that reduce complexity, increase efficiency and make decisions depend on evidence — not assumptions.",
    profileTitle: "Professional Profile",
    pillars: [
      {
        title: "Data Engineering & Business Intelligence",
        description:
          "Structuring analytical environments for strategic decision-making, including data modelling, executive dashboards and analytics pipeline automation. Practical experience includes BI solutions applied to public management, supporting institutional planning and indicator-based operational analysis.",
      },
      {
        title: "Software Engineering & Full Stack Development",
        description:
          "Building modern applications focused on scalability, sustainable maintenance and system integration. Experience spans backend APIs and services, modern web applications, system architecture, data integration and engineering best practices (SOLID, Clean Code).",
      },
      {
        title: "Infrastructure & Technology Operations",
        description:
          "Direct experience sustaining critical environments, advanced technical support and IT infrastructure organisation — providing a complete view of the tech cycle, from operations to software. This background reduces the common misalignment between development and operations.",
      },
    ],
    mindsetTitle: "Work Mindset",
    mindsetPrinciples: [
      "Technology applied to real problems",
      "Data-driven decisions",
      "Automation as a structural gain",
      "Sustainable engineering",
      "Clear technical communication with stakeholders",
    ],
    mindsetClosing:
      "The focus is not just building systems, but delivering verifiable operational impact.",
    trajectoryTitle: "Trajectory & Growth",
    trajectoryFlow: "Business → Data → Software → Engineering",
    trajectoryDescription:
      "This progression enables understanding both strategic context and technical implementation needed to deliver complete digital solutions. Previous experience in organisational analysis and corporate data contributed to strong analytical capability applied to executive decision-making and institutional planning.",
    differentiatorTitle: "What Sets Me Apart",
    differentiatorIntro:
      "Most professionals specialise in a single technology layer. My differentiator lies in integrating:",
    differentiatorAreas: ["Data", "Development", "Infrastructure", "Business strategy"],
    differentiatorClosing:
      "This combination reduces technical dependencies, accelerates delivery and increases result predictability.",
    visionTitle: "Future Vision",
    visionDescription:
      "My professional objective is to work on high-impact technology solutions, always focused on technology as an instrument of efficiency, transparency and sustainable innovation.",
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

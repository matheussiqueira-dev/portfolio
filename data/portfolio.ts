export type LocaleKey = "pt" | "en";

export type NavItem = {
  id: string;
  label: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export type AboutContent = {
  title: string;
  description: string;
  highlight: string;
  imageLabel: string;
};

export type SkillItem = {
  name: string;
  icon: string;
};

export type SkillsContent = {
  title: string;
  description: string;
  items: SkillItem[];
};

export type ProjectItem = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
};

export type ProjectsContent = {
  title: string;
  description: string;
  items: ProjectItem[];
  overlayLabel: string;
};

export type CtaContent = {
  title: string;
  description: string;
  button: string;
};

export type FooterContent = {
  tagline: string;
  copyright: string;
  socials: { label: string; href: string }[];
};

export type PortfolioContent = {
  nav: NavItem[];
  hero: HeroContent;
  about: AboutContent;
  skills: SkillsContent;
  projects: ProjectsContent;
  cta: CtaContent;
  footer: FooterContent;
};

export const portfolioContent: Record<LocaleKey, PortfolioContent> = {
  pt: {
    nav: [
      { id: "home", label: "Início" },
      { id: "about", label: "Sobre" },
      { id: "skills", label: "Stack" },
      { id: "projects", label: "Projetos" },
      { id: "contact", label: "Contato" },
    ],
    hero: {
      eyebrow: "Portfólio · Dados · Produto · Engenharia",
      title: "Matheus Siqueira",
      subtitle: "Desenvolvedor Full Stack e Analista de Dados",
      description:
        "Crio experiências digitais que conectam produto, dados e engenharia. Foco em performance, clareza e decisões orientadas por métricas.",
      ctaPrimary: "Ver projetos",
      ctaSecondary: "Falar comigo",
    },
    about: {
      title: "Sobre",
      description:
        "Atuo na interseção entre dados, engenharia e produto para transformar informações complexas em soluções simples, rápidas e escaláveis.",
      highlight:
        "Experiência em BI, automação e aplicações web, com visão estratégica e execução ponta a ponta.",
      imageLabel: "Espaço para foto ou ilustração",
    },
    skills: {
      title: "Stack principal",
      description:
        "Tecnologias que uso no dia a dia para construir produtos digitais e soluções de dados.",
      items: [
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "next" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Python", icon: "python" },
        { name: "SQL", icon: "database" },
        { name: "Power BI", icon: "powerbi" },
        { name: "Cloud", icon: "cloud" },
        { name: "Figma", icon: "figma" },
      ],
    },
    projects: {
      title: "Projetos FullStack, Análise de Dados e IA",
      description:
        "Cases que unem engenharia de software, APIs, automação e dados, com foco em produto, arquitetura, performance e decisões bem informadas.",
      overlayLabel: "Ver detalhes",
      items: [
        {
          title: "BI Operacional",
          description:
            "Dashboard executivo para monitorar KPIs e performance operacional em tempo real.",
          image: "/projects/placeholder.png",
          tags: ["Power BI", "SQL", "KPIs"],
        },
        {
          title: "Plataforma de Dados",
          description:
            "Pipeline automatizado para consolidar dados fiscais e gerar insights acionáveis.",
          image: "/projects/placeholder.png",
          tags: ["Python", "ETL", "Data"],
        },
        {
          title: "Aplicação SaaS",
          description:
            "Aplicação web full stack com foco em UX, métricas de produto e escalabilidade.",
          image: "/projects/placeholder.png",
          tags: ["React", "Next.js", "Cloud"],
        },
      ],
    },
    cta: {
      title: "Vamos construir algo relevante?",
      description:
        "Estou disponível para projetos em dados, BI e desenvolvimento full stack com foco em impacto real.",
      button: "Entrar em contato",
    },
    footer: {
      tagline: "Disponível para novos desafios e parcerias.",
      copyright: "© 2026 Matheus Siqueira. Todos os direitos reservados.",
      socials: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/matheussiqueira-dev/" },
        { label: "GitHub", href: "https://github.com/matheussiqueira-dev" },
        { label: "Email", href: "mailto:matheussiqueirahub@gmail.com" },
      ],
    },
  },
  en: {
    nav: [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "skills", label: "Stack" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
    hero: {
      eyebrow: "Portfolio · Data · Product · Engineering",
      title: "Matheus Siqueira",
      subtitle: "Full Stack Developer & Data Analyst",
      description:
        "I build digital experiences that connect product, data, and engineering. Focused on performance, clarity, and metric-driven decisions.",
      ctaPrimary: "View projects",
      ctaSecondary: "Contact me",
    },
    about: {
      title: "About",
      description:
        "I work at the intersection of data, engineering, and product to turn complex information into simple, scalable solutions.",
      highlight:
        "Experience across BI, automation, and web applications with end-to-end delivery.",
      imageLabel: "Space for photo or illustration",
    },
    skills: {
      title: "Core stack",
      description:
        "Technologies I use daily to build digital products and data solutions.",
      items: [
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "next" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Python", icon: "python" },
        { name: "SQL", icon: "database" },
        { name: "Power BI", icon: "powerbi" },
        { name: "Cloud", icon: "cloud" },
        { name: "Figma", icon: "figma" },
      ],
    },
    projects: {
      title: "Full Stack, Data & AI Projects",
      description:
        "Cases that blend software engineering, APIs, automation, and data with a focus on product, architecture, performance, and informed decisions.",
      overlayLabel: "View details",
      items: [
        {
          title: "Operational BI",
          description:
            "Executive dashboard to monitor KPIs and operational performance in real time.",
          image: "/projects/placeholder.png",
          tags: ["Power BI", "SQL", "KPIs"],
        },
        {
          title: "Data Platform",
          description:
            "Automated pipeline to consolidate fiscal data and generate actionable insights.",
          image: "/projects/placeholder.png",
          tags: ["Python", "ETL", "Data"],
        },
        {
          title: "SaaS Application",
          description:
            "Full stack web app focused on UX, product metrics, and scalability.",
          image: "/projects/placeholder.png",
          tags: ["React", "Next.js", "Cloud"],
        },
      ],
    },
    cta: {
      title: "Let’s build something meaningful",
      description:
        "Available for data, BI, and full stack projects with real business impact.",
      button: "Get in touch",
    },
    footer: {
      tagline: "Open to new challenges and partnerships.",
      copyright: "© 2026 Matheus Siqueira. All rights reserved.",
      socials: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/matheussiqueira-dev/" },
        { label: "GitHub", href: "https://github.com/matheussiqueira-dev" },
        { label: "Email", href: "mailto:matheussiqueirahub@gmail.com" },
      ],
    },
  },
};

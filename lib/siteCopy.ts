type SiteCopyLocale = "pt-BR" | "en";

type SiteCopy = {
  nav: {
    about: string;
    projects: string;
    contact: string;
    resume: string;
    languages: string;
    openMenu: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    listTitle: string;
    list: { title: string; description: string }[];
    linkLabel: string;
  };
  projectsSection: {
    eyebrow: string;
    title: string;
    description: string;
    viewAll: string;
  };
  projectsPage: {
    eyebrow: string;
    title: string;
    description: string;
    demosLink: string;
    details: string;
    openGithub: string;
    openDemo: string;
    viewDemo: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    cards: {
      email: string;
      linkedin: string;
      github: string;
      whatsapp: string;
    };
  };
  modal: {
    viewDetails: string;
    close: string;
    projectDetails: string;
    projectLabel: string;
    highlights: string;
    features: string;
    stack: string;
    github: string;
    openDemo: string;
    viewDemo: string;
    fullCase: string;
  };
  caseStudy: {
    backLink: string;
    label: string;
    sections: {
      what: string;
      problem: string;
      solution: string;
      features: string;
      stack: string;
      howToRun: string;
      links: string;
      screenshots: string;
    };
    viewGithub: string;
    openDemo: string;
    demoSoon: string;
    runLocal: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  };
  demos: {
    eyebrow: string;
    title: string;
    description: string;
    viewProjects: string;
    fullCase: string;
    openDemo: string;
    demoSoon: string;
    publishTitle: string;
    publishItems: string[];
  };
  media: {
    videoFallback: string;
  };
};

export const siteCopy: Record<SiteCopyLocale, SiteCopy> = {
  "pt-BR": {
    nav: {
      about: "Sobre",
      projects: "Projects",
      contact: "Contato",
      resume: "Currículo",
      languages: "Idiomas",
      openMenu: "Abrir menu",
    },
    hero: {
      eyebrow: "Tecnologia • Desenvolvimento Web • Dados • Infraestrutura",
      title: "Matheus Siqueira",
      subtitle: "Desenvolvimento web e dados para soluções digitais confiáveis.",
      description:
        "Atuo do front-end às integrações, combinando dados e automação para entregar produtos claros, escaláveis e fáceis de manter.",
      ctaPrimary: "Ver currículo",
      ctaSecondary: "Entrar em contato",
    },
    about: {
      eyebrow: "Sobre",
      title: "Tecnologia com foco em execução",
      paragraphs: [
        "Sou estudante de Ciência da Computação e desenvolvedor com foco em produtos digitais bem estruturados, do desenho do fluxo à entrega.",
        "Trabalho com dados, integrações e automação para transformar objetivos de negócio em soluções claras e sustentáveis.",
      ],
      listTitle: "Foco atual",
      list: [
        {
          title: "Web",
          description: "Interfaces responsivas e acessíveis com React e Next.js.",
        },
        {
          title: "Dados",
          description: "SQL, dashboards e métricas para decisões rápidas.",
        },
        {
          title: "APIs",
          description: "Integrações, autenticação e contratos bem definidos.",
        },
        {
          title: "Infra e entrega",
          description: "Deploy, observabilidade básica e boas práticas de versionamento.",
        },
      ],
      linkLabel: "Ver perfil completo no LinkedIn",
    },
    projectsSection: {
      eyebrow: "Projetos",
      title: "Estudos de caso em destaque",
      description:
        "Projetos que combinam produto digital, dados e automação, com foco em clareza, performance e manutenção.",
      viewAll: "Ver todos os projetos",
    },
    projectsPage: {
      eyebrow: "Projects",
      title: "Estudos de caso e projetos",
      description:
        "Casos práticos que destacam soluções em dados, automação e desenvolvimento web, com foco em clareza e entrega.",
      demosLink: "Ver página de demos",
      details: "Detalhes",
      openGithub: "Abrir GitHub",
      openDemo: "Abrir demo",
      viewDemo: "Ver demonstração",
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos tirar seu projeto do papel",
      description:
        "Estou disponível para oportunidades em tecnologia, dados e desenvolvimento web. Escolha o canal mais conveniente e retorno rápido.",
      cards: {
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
        whatsapp: "WhatsApp",
      },
    },
    modal: {
      viewDetails: "Ver detalhes",
      close: "Fechar",
      projectDetails: "Detalhes do projeto",
      projectLabel: "Projeto",
      highlights: "Destaques",
      features: "Funcionalidades",
      stack: "Stack",
      github: "GitHub",
      openDemo: "Abrir demo",
      viewDemo: "Ver demonstração",
      fullCase: "Ver case completo",
    },
    caseStudy: {
      backLink: "Voltar para projetos",
      label: "Estudo de caso",
      sections: {
        what: "O que é",
        problem: "Problema",
        solution: "Solução",
        features: "Funcionalidades",
        stack: "Stack",
        howToRun: "Como executar",
        links: "Links",
        screenshots: "Capturas",
      },
      viewGithub: "Ver no GitHub",
      openDemo: "Abrir demo",
      demoSoon: "Demo: em breve",
      runLocal: "Como executar localmente",
      ctaTitle: "Vamos conversar sobre este projeto?",
      ctaBody:
        "Posso detalhar decisões técnicas, desafios e próximos passos. Se quiser conversar, é só chamar.",
      ctaButton: "Entrar em contato",
    },
    demos: {
      eyebrow: "Demos",
      title: "Links e demonstrações",
      description:
        "Repositórios, demos públicas e caminhos rápidos para testar cada projeto.",
      viewProjects: "Ver estudos de caso",
      fullCase: "Case completo",
      openDemo: "Abrir demo",
      demoSoon: "Demo: em breve",
      publishTitle: "Como disponibilizo demos",
      publishItems: [
        "Web (Next.js/React): Vercel com deploy automático do GitHub.",
        "Front-end puro (HTML/JS): GitHub Pages ou Vercel.",
        "API FastAPI: Render ou Fly com `/docs` habilitado.",
      ],
    },
    media: {
      videoFallback: "Seu navegador não suporta vídeo HTML5.",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
      resume: "Resume",
      languages: "Languages",
      openMenu: "Open menu",
    },
    hero: {
      eyebrow: "Technology • Web Development • Data • Infrastructure",
      title: "Matheus Siqueira",
      subtitle: "Web development and data solutions for reliable digital products.",
      description:
        "From front-end to integrations, I combine data and automation to deliver clear, scalable, and maintainable solutions.",
      ctaPrimary: "View resume",
      ctaSecondary: "Get in touch",
    },
    about: {
      eyebrow: "About",
      title: "Technology with execution focus",
      paragraphs: [
        "I am a Computer Science student and developer focused on building well-structured digital products, from flow design to delivery.",
        "I work with data, integrations, and automation to turn business goals into clear, sustainable solutions.",
      ],
      listTitle: "Current focus",
      list: [
        {
          title: "Web",
          description: "Responsive, accessible interfaces with React and Next.js.",
        },
        {
          title: "Data",
          description: "SQL, dashboards, and metrics for fast decisions.",
        },
        {
          title: "APIs",
          description: "Integrations, authentication, and well-defined contracts.",
        },
        {
          title: "Infra & delivery",
          description: "Deploy, basic observability, and versioning best practices.",
        },
      ],
      linkLabel: "View full profile on LinkedIn",
    },
    projectsSection: {
      eyebrow: "Projects",
      title: "Featured case studies",
      description:
        "Projects that combine digital product, data, and automation, focused on clarity, performance, and maintainability.",
      viewAll: "View all projects",
    },
    projectsPage: {
      eyebrow: "Projects",
      title: "Case studies and projects",
      description:
        "Practical cases highlighting solutions in data, automation, and web development, focused on clarity and delivery.",
      demosLink: "View demos page",
      details: "Details",
      openGithub: "Open GitHub",
      openDemo: "Open demo",
      viewDemo: "View demo",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s bring your project to life",
      description:
        "I am available for opportunities in technology, data, and web development. Pick the best channel and I will get back quickly.",
      cards: {
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
        whatsapp: "WhatsApp",
      },
    },
    modal: {
      viewDetails: "View details",
      close: "Close",
      projectDetails: "Project details",
      projectLabel: "Project",
      highlights: "Highlights",
      features: "Features",
      stack: "Stack",
      github: "GitHub",
      openDemo: "Open demo",
      viewDemo: "View demo",
      fullCase: "View full case study",
    },
    caseStudy: {
      backLink: "Back to projects",
      label: "Case study",
      sections: {
        what: "What it is",
        problem: "Problem",
        solution: "Solution",
        features: "Features",
        stack: "Stack",
        howToRun: "How to run",
        links: "Links",
        screenshots: "Screenshots",
      },
      viewGithub: "View on GitHub",
      openDemo: "Open demo",
      demoSoon: "Demo: coming soon",
      runLocal: "Run locally",
      ctaTitle: "Let’s talk about this project",
      ctaBody:
        "I can detail technical decisions, challenges, and next steps. If you want to chat, just reach out.",
      ctaButton: "Get in touch",
    },
    demos: {
      eyebrow: "Demos",
      title: "Links and demos",
      description:
        "Repositories, public demos, and quick ways to test each project.",
      viewProjects: "View case studies",
      fullCase: "Full case study",
      openDemo: "Open demo",
      demoSoon: "Demo: coming soon",
      publishTitle: "How I publish demos",
      publishItems: [
        "Web (Next.js/React): Vercel with automatic GitHub deploy.",
        "Vanilla front-end (HTML/JS): GitHub Pages or Vercel.",
        "FastAPI API: Render or Fly with `/docs` enabled.",
      ],
    },
    media: {
      videoFallback: "Your browser does not support HTML5 video.",
    },
  },
};

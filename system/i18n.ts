import { siteConfig } from "@/core/config";
import type { RouteKey, SiteLocale } from "@/core/types";

type Dictionary = {
  nav: Record<RouteKey, string>;
  common: {
    location: string;
    remote: string;
    available: string;
    viewProjects: string;
    viewCaseStudy: string;
    resume: string;
    hire: string;
    contact: string;
    github: string;
    demo: string;
    website: string;
    recruiterFocus: string;
    relatedProjects: string;
  };
  home: {
    eyebrow: string;
    subtitle: string;
    description: string;
    badges: string[];
    stats: Array<{ label: string; value: string }>;
    featuredTitle: string;
    featuredSubtitle: string;
  };
  pages: {
    about: {
      title: string;
      subtitle: string;
    };
    projects: {
      title: string;
      subtitle: string;
      filterAll: string;
      filterFeatured: string;
      filterLabels: {
        search: string;
        category: string;
      };
    };
    academic: {
      title: string;
      subtitle: string;
    };
    certificates: {
      title: string;
      subtitle: string;
      filterAll: string;
      filterIssuer: string;
      filterCategory: string;
      searchPlaceholder: string;
      empty: string;
      open: string;
    };
    hire: {
      title: string;
      subtitle: string;
      processTitle: string;
      relatedProjectsTitle: string;
    };
    contact: {
      title: string;
      subtitle: string;
      availabilityTitle: string;
      availabilityDescription: string;
    };
  };
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    architecture: string;
    implementation: string;
    techStack: string;
    gallery: string;
    demo: string;
    repository: string;
    impact: string;
    quickLinks: string;
    breadcrumbs: {
      projects: string;
      current: string;
    };
    sections: {
      role: string;
      category: string;
      recruiterKeywords: string;
      githubKeywords: string;
      related: string;
      flow: string;
      modules: string;
      runtime: string;
    };
  };
  footer: {
    signature: string;
    phrase: string;
    recruiterLine: string;
  };
};

const dictionary: Record<SiteLocale, Dictionary> = {
  "pt-BR": {
    nav: {
      home: "Home",
      about: "Sobre",
      projects: "Projetos",
      academic: "Acadêmico",
      certificates: "Certificados",
      hire: "Contrate",
      contact: "Contato",
    },
    common: {
      location: "Recife, Brasil",
      remote: "Remoto",
      available: "Disponível para oportunidades e consultorias",
      viewProjects: "Ver Projetos",
      viewCaseStudy: "Ler case study",
      resume: "Currículo",
      hire: "Contrate",
      contact: "Fale Comigo",
      github: "GitHub",
      demo: "Demo",
      website: "Website",
      recruiterFocus: "Posicionamento para recrutadores",
      relatedProjects: "Projetos relacionados",
    },
    home: {
      eyebrow: "Data Analytics · Business Intelligence · Full Stack · AI Solutions",
      subtitle:
        "Portfólio técnico para recrutadores, líderes de dados e equipes que precisam de análise, BI, automação e software com clareza arquitetural.",
      description:
        "Transformo dados, operações e requisitos de negócio em dashboards executivos, automações Python, interfaces técnicas e aplicações orientadas a performance. Atuo na interseção entre Data Analytics, Power BI, SQL, desenvolvimento full stack, visão computacional e soluções de IA com foco em impacto real.",
      badges: [
        "Data Analytics",
        "Business Intelligence",
        "Power BI",
        "SQL",
        "Python Automation",
        "Computer Vision",
        "Full Stack Development",
      ],
      stats: [
        {
          label: "Base",
          value: "Recife, Brasil · Remoto",
        },
        {
          label: "Atuação",
          value: "Dados, BI, Software e IA aplicada",
        },
        {
          label: "Objetivo",
          value: "Conversão para recrutadores e clientes técnicos",
        },
      ],
      featuredTitle: "Projetos em destaque",
      featuredSubtitle:
        "Cases que demonstram senioridade técnica em BI, automação, IA, visão computacional e arquitetura de produto.",
    },
    pages: {
      about: {
        title: "Sobre Matheus Siqueira",
        subtitle:
          "Perfil híbrido entre analytics, software, automação e arquitetura operacional, com foco em decisão orientada por dados.",
      },
      projects: {
        title: "Case studies e projetos técnicos",
        subtitle:
          "Portfólio organizado para recrutadores, com contexto de negócio, arquitetura, stack e impacto técnico de cada entrega.",
        filterAll: "Todos",
        filterFeatured: "Em destaque",
        filterLabels: {
          search: "Buscar projeto",
          category: "Filtrar por categoria",
        },
      },
      academic: {
        title: "Formação e posicionamento acadêmico",
        subtitle:
          "Graduação, pós-graduações, idiomas e trilhas técnicas alinhadas à transição e consolidação em tecnologia.",
      },
      certificates: {
        title: "Certificados e trilhas técnicas",
        subtitle:
          "Galeria indexável com certificações em BI, dados, IA, cloud, segurança, full stack e automação.",
        filterAll: "Todas",
        filterIssuer: "Instituição",
        filterCategory: "Categoria",
        searchPlaceholder: "Buscar certificado, tecnologia ou instituição",
        empty: "Nenhum certificado encontrado para os filtros aplicados.",
        open: "Abrir certificado",
      },
      hire: {
        title: "Serviços em dados, BI, automação e sistemas analíticos",
        subtitle:
          "Página orientada à conversão para clientes e recrutadores que precisam de alguém capaz de diagnosticar, arquitetar, construir e evoluir soluções técnicas.",
        processTitle: "Processo de trabalho",
        relatedProjectsTitle: "Cases relacionados",
      },
      contact: {
        title: "Contato e disponibilidade",
        subtitle:
          "Aberto a vagas remotas, projetos estratégicos e consultorias em Data Analytics, BI, automação e software.",
        availabilityTitle: "Disponibilidade",
        availabilityDescription:
          "Atuação remota a partir de Recife, Brasil, com abertura para processos seletivos, consultorias e parcerias técnicas.",
      },
    },
    caseStudy: {
      overview: "Overview",
      problem: "Problema",
      solution: "Solução",
      architecture: "Arquitetura",
      implementation: "Implementação",
      techStack: "Stack técnico",
      gallery: "Galeria",
      demo: "Demonstração",
      repository: "Repositório GitHub",
      impact: "Impacto",
      quickLinks: "Acesso rápido",
      breadcrumbs: {
        projects: "Projetos",
        current: "Case study",
      },
      sections: {
        role: "Papel",
        category: "Categoria",
        recruiterKeywords: "Keywords para recrutadores",
        githubKeywords: "Keywords para GitHub",
        related: "Próximo passo",
        flow: "Fluxo",
        modules: "Módulos",
        runtime: "Comportamento em runtime",
      },
    },
    footer: {
      signature: "Desenvolvido por Matheus Siqueira",
      phrase: "Portfólio técnico com foco em Data Analytics, BI, Software e IA aplicada.",
      recruiterLine:
        "Recife, Brasil · Remoto · Data Analyst · Power BI · Python Automation · Full Stack · Computer Vision",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      academic: "Academic",
      certificates: "Certificates",
      hire: "Hire",
      contact: "Contact",
    },
    common: {
      location: "Recife, Brazil",
      remote: "Remote",
      available: "Open to opportunities and consulting work",
      viewProjects: "View Projects",
      viewCaseStudy: "Read case study",
      resume: "Resume",
      hire: "Hire",
      contact: "Contact",
      github: "GitHub",
      demo: "Demo",
      website: "Website",
      recruiterFocus: "Recruiter positioning",
      relatedProjects: "Related projects",
    },
    home: {
      eyebrow: "Data Analytics · Business Intelligence · Full Stack · AI Solutions",
      subtitle:
        "Technical portfolio for recruiters, data leaders, and teams that need analysis, BI, automation, and software with architecture clarity.",
      description:
        "I turn data, operations, and business requirements into executive dashboards, Python automation, technical interfaces, and performance-oriented applications. My work sits at the intersection of Data Analytics, Power BI, SQL, full stack development, computer vision, and AI solutions with a focus on real business impact.",
      badges: [
        "Data Analytics",
        "Business Intelligence",
        "Power BI",
        "SQL",
        "Python Automation",
        "Computer Vision",
        "Full Stack Development",
      ],
      stats: [
        {
          label: "Base",
          value: "Recife, Brazil · Remote",
        },
        {
          label: "Focus",
          value: "Data, BI, Software, and applied AI",
        },
        {
          label: "Outcome",
          value: "Built for recruiter conversion and technical trust",
        },
      ],
      featuredTitle: "Featured projects",
      featuredSubtitle:
        "Case studies that demonstrate technical maturity across BI, automation, AI, computer vision, and product architecture.",
    },
    pages: {
      about: {
        title: "About Matheus Siqueira",
        subtitle:
          "Hybrid profile spanning analytics, software, automation, and operational architecture, focused on data-informed decision-making.",
      },
      projects: {
        title: "Technical case studies and projects",
        subtitle:
          "A recruiter-friendly portfolio with business context, architecture, stack, and technical impact for each project.",
        filterAll: "All",
        filterFeatured: "Featured",
        filterLabels: {
          search: "Search project",
          category: "Filter by category",
        },
      },
      academic: {
        title: "Academic background and technical positioning",
        subtitle:
          "Degree path, postgraduate studies, languages, and technical education aligned with long-term growth in technology.",
      },
      certificates: {
        title: "Certificates and technical tracks",
        subtitle:
          "Indexable gallery of certifications across BI, data, AI, cloud, security, full stack, and automation.",
        filterAll: "All",
        filterIssuer: "Institution",
        filterCategory: "Category",
        searchPlaceholder: "Search certificate, skill, or institution",
        empty: "No certificates matched the applied filters.",
        open: "Open certificate",
      },
      hire: {
        title: "Services in data, BI, automation, and analytical systems",
        subtitle:
          "Conversion-focused page for clients and recruiters who need someone able to diagnose, architect, build, and evolve technical solutions.",
        processTitle: "Delivery process",
        relatedProjectsTitle: "Related case studies",
      },
      contact: {
        title: "Contact and availability",
        subtitle:
          "Open to remote roles, strategic projects, and consulting work across Data Analytics, BI, automation, and software.",
        availabilityTitle: "Availability",
        availabilityDescription:
          "Remote-first from Recife, Brazil, with availability for hiring processes, consulting, and technical partnerships.",
      },
    },
    caseStudy: {
      overview: "Overview",
      problem: "Problem",
      solution: "Solution",
      architecture: "Architecture",
      implementation: "Implementation",
      techStack: "Technical stack",
      gallery: "Gallery",
      demo: "Demo",
      repository: "GitHub repository",
      impact: "Impact",
      quickLinks: "Quick links",
      breadcrumbs: {
        projects: "Projects",
        current: "Case study",
      },
      sections: {
        role: "Role",
        category: "Category",
        recruiterKeywords: "Recruiter keywords",
        githubKeywords: "GitHub keywords",
        related: "Next step",
        flow: "Flow",
        modules: "Modules",
        runtime: "Runtime behavior",
      },
    },
    footer: {
      signature: "Criado por Matheus Siqueira",
      phrase: "Technical portfolio focused on Data Analytics, BI, Software, and applied AI.",
      recruiterLine:
        "Recife, Brazil · Remote · Data Analyst · Power BI · Python Automation · Full Stack · Computer Vision",
    },
  },
};

const routeMap: Record<RouteKey, Record<SiteLocale, string>> = {
  home: {
    "pt-BR": "/",
    en: "/en",
  },
  about: {
    "pt-BR": "/sobre",
    en: "/en/about",
  },
  projects: {
    "pt-BR": "/projetos",
    en: "/en/projects",
  },
  academic: {
    "pt-BR": "/academico",
    en: "/en/academic",
  },
  certificates: {
    "pt-BR": "/certificados",
    en: "/en/certificates",
  },
  hire: {
    "pt-BR": "/contrate",
    en: "/en/hire",
  },
  contact: {
    "pt-BR": "/contato",
    en: "/en/contact",
  },
};

export function getDictionary(locale: SiteLocale) {
  return dictionary[locale];
}

export function getRoute(route: RouteKey, locale: SiteLocale) {
  return routeMap[route][locale];
}

export function getProjectRoute(locale: SiteLocale, slug: string) {
  return locale === "en" ? `/en/projects/${slug}` : `/projetos/${slug}`;
}

export function getStaticRoutes(locale: SiteLocale) {
  return (Object.keys(routeMap) as RouteKey[]).map((route) => ({
    key: route,
    href: getRoute(route, locale),
    label: getDictionary(locale).nav[route],
  }));
}

export function getAlternateLocale(locale: SiteLocale): SiteLocale {
  return locale === "en" ? "pt-BR" : "en";
}

function switchStaticPath(pathname: string, targetLocale: SiteLocale) {
  const entries = Object.entries(routeMap) as Array<[RouteKey, Record<SiteLocale, string>]>;

  for (const [, localized] of entries) {
    if (pathname === localized["pt-BR"] || pathname === localized.en) {
      return localized[targetLocale];
    }
  }

  return pathname;
}

export function switchLocalePath(pathname: string, targetLocale: SiteLocale) {
  if (/^\/(en\/)?projects\/[^/]+$/.test(pathname) || /^\/projetos\/[^/]+$/.test(pathname)) {
    const slug = pathname.split("/").filter(Boolean).at(-1) ?? "";
    return getProjectRoute(targetLocale, slug);
  }

  if (pathname === "/pt-BR") {
    return targetLocale === "en" ? "/en" : "/";
  }

  return switchStaticPath(pathname, targetLocale);
}

export function localeFromPathname(pathname: string): SiteLocale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pt-BR";
}

export const languageLabels: Record<SiteLocale, string> = {
  "pt-BR": "PT-BR",
  en: "EN",
};

export const siteHref = siteConfig.siteUrl;

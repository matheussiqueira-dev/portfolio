import type { SiteContent } from "./site.types";

export const sitePt: SiteContent = {
  nav: {
    home: "Início",
    about: "Sobre",
    services: "Serviços",
    projects: "Projetos",
    contact: "Contato",
    certificates: "Certificados",
    academic: "Acadêmico",
    demos: "Demos",
    hire: "Contrate",
    resume: "Currículo",
  },
  hero: {
    eyebrow: "Analista de Dados • Business Intelligence • Power BI • Infraestrutura",
    title: "Matheus Siqueira",
    subtitle:
      "Infraestrutura | Desenvolvedor FullStack | Analista de Dados Júnior",
    description:
      "Atuo no desenvolvimento de soluções analíticas e sistemas orientados à decisão, integrando Power BI, SQL, DAX, Power Query e automações em Python à arquitetura de dados e à infraestrutura. Trabalho de ponta a ponta, do tratamento e modelagem à visualização e entrega, com foco em eficiência operacional, confiabilidade e impacto mensurável no negócio.",
    stackHighlights: [
      { label: "Data Analytics", icon: "stack" },
      { label: "Business Intelligence", icon: "data" },
      { label: "Power BI & KPIs", icon: "ai" },
      { label: "SQL & Python", icon: "software" },
    ],
    facts: [
      { label: "Base", value: "Recife, Brasil · Remoto" },
      { label: "Atuação", value: "Dados, BI e Automação" },
      { label: "Disponibilidade", value: "Projetos e consultorias" },
    ],
    ctas: {
      primary: "Ver projetos",
      secondary: "Ver currículo",
      tertiary: "Falar comigo",
    },
  },
  about: {
    eyebrow: "Sobre",
    title: "Infraestrutura | Analista de Dados Júnior | Power BI | SQL | Python | React.js",
    summary: {
      title: "Sobre / Apresentação",
      body:
        "Atuo em análise de dados e Business Intelligence, com experiência no setor público e privado. Fui Assistente Comercial no Grupo Moura, Analista de Cargos e Salários na Prefeitura de Jaboatão dos Guararapes e, atualmente, Estagiário em Análise de Dados na Secretaria da Fazenda de Jaboatão dos Guararapes. Minha atuação é orientada a KPIs, eficiência operacional e decisão baseada em dados.",
    },
    who: {
      title: "Quem sou",
      body:
        "Sou Analista de Dados com perfil híbrido (dados + desenvolvimento + infraestrutura). Graduando em Ciência da Computação, com pós-graduações em Inteligência Artificial e Ciência de Dados, Segurança da Informação e Cloud & Edge Computing, técnico em Programação Full Stack AI e graduação em Marketing. Trabalho com mentalidade analítica, rigor técnico e comunicação clara para traduzir necessidades de negócio em soluções de dados confiáveis.",
    },
    complexData: {
      title: "Experiência com dados complexos em larga escala",
      body:
        "Experiência com Business Intelligence aplicado à gestão pública, dashboards estratégicos em Power BI e análise de grandes volumes de dados fiscais. Atuo com dados públicos e organizacionais em múltiplas fontes, estruturando ETL/ELT, automações em Python e governança de dados para sustentar decisões e operação.",
    },
    differential: {
      title: "Diferencial",
      description:
        "Perfil end-to-end que conecta modelagem, automação, APIs, visualização e infraestrutura para entregar inteligência de negócio com clareza e impacto.",
    },
    deliver: {
      title: "O que faço",
      bullets: [
        "Análise de dados e data analytics para orientar KPIs e decisões.",
        "Business Intelligence com Power BI, DAX e Power Query para dashboards executivos.",
        "Modelagem de dados e SQL analytics para construção de KPIs confiáveis.",
        "ETL/ELT e automações em Python (Pandas, NumPy) para eficiência operacional.",
        "Visualização de dados e storytelling analítico para diferentes públicos.",
        "APIs REST e integrações com Flask para orquestrar fluxos de dados.",
      ],
    },
    snapshot: {
      title: "Resumo",
      items: [
        {
          value: "BI e Analytics",
          label: "Power BI, KPIs e decisões",
        },
        {
          value: "Dados",
          label: "SQL analytics, ETL/ELT, Python",
        },
        {
          value: "Automação",
          label: "Pipelines e eficiência",
        },
        {
          value: "Infraestrutura",
          label: "Infraestrutura de redes, TI, sustentação e arquitetura operacional",
        },
      ],
    },
    highlights: {
      title: "Diferenciais Profissionais",
      items: [
        "Perfil híbrido (dados + desenvolvimento + infraestrutura) com visão end-to-end.",
        "Experiência em dados fiscais, públicos e organizacionais com foco em decisão.",
        "Integração de BI, automação, APIs e arquitetura operacional em soluções completas.",
        "Comunicação clara com stakeholders técnicos e não técnicos.",
        "Atuação no setor público e privado com foco em impacto.",
      ],
    },
    stack: {
      title: "Stack & Competências",
      groups: [
        {
          title: "Dados & Analytics",
          icon: "data",
          items: [
            "Engenharia de Dados e Data Warehouse para bases confiáveis.",
            "Análise de Dados e Análise Estatística para explicar variações.",
            "Business Intelligence e Data Science aplicados à decisão.",
            "Big Data e Governança de Dados com foco em qualidade.",
            "Visualização de Dados para comunicação executiva.",
            "KPIs e metodologia OKR para metas mensuráveis.",
            "Tomada de decisão baseada em dados com rastreabilidade.",
          ],
        },
        {
          title: "Ferramentas & Tecnologias",
          icon: "tools",
          items: [
            "Power BI com DAX e Power Query para dashboards.",
            "SQL Analytics para exploração e modelagem.",
            "Python Analytics com Pandas e NumPy.",
            "Tableau e SQL Server Reporting Services para reporting.",
            "ETL/ELT e processamento de dados para integração.",
          ],
        },
        {
          title: "Desenvolvimento & Arquitetura",
          icon: "backend",
          items: [
            "Python, Java e Node.js para serviços e integrações.",
            "Backend e APIs REST com foco em performance.",
            "Arquitetura de Sistemas e Arquitetura de Dados para escalabilidade.",
            "Desenvolvimento Full Stack com responsabilidade de ponta a ponta.",
            "Lógica de Programação, Algoritmos e Estruturas de Dados.",
          ],
        },
        {
          title: "Frontend & UX",
          icon: "frontend",
          items: [
            "React.js e AngularJS para interfaces.",
            "JavaScript e TypeScript em aplicações web.",
            "HTML5 e CSS para base responsiva.",
            "UX Design e Web Design orientados à usabilidade.",
            "Figma para prototipação e alinhamento.",
          ],
        },
        {
          title: "Infraestrutura, Cloud & Segurança",
          icon: "database",
          items: [
            "Infraestrutura de TI e Infraestrutura de Redes para sustentação.",
            "Azure e Oracle Cloud em computação em nuvem.",
            "Segurança da Informação em ambientes cloud e edge.",
            "Shell Script e automação de infraestrutura.",
            "IoT para integração com operação.",
          ],
        },
        {
          title: "DevOps, Gestão & Métodos",
          icon: "tools",
          items: [
            "Git e GitHub para versionamento colaborativo.",
            "Azure DevOps e CI/CD para entregas confiáveis.",
            "Scrum, Kanban e Metodologias Ágeis no fluxo.",
            "Automação de Processos para eficiência operacional.",
          ],
        },
        {
          title: "Soft Skills & Idiomas",
          icon: "languages",
          items: [
            "Comunicação técnica com stakeholders técnicos e não técnicos.",
            "Forte capacidade analítica aplicada a problemas complexos.",
            "Ownership e visão sistêmica do negócio à execução.",
            "Inglês C1 para colaboração global.",
          ],
        },
      ],
    },
  },
  executiveSummary: {
    eyebrow: "Experiência & Especialidades",
    title: "Decisão, arquitetura e execução em dados",
    paragraphs: [
      "Analista de Dados e BI com atuação end-to-end em engenharia de dados, BI e automação, convertendo demandas em decisões e resultados mensuráveis com Power BI, SQL, DAX e Python.",
      "Experiência com dados fiscais, públicos e organizacionais, integrando modelagem, governança, infraestrutura e BI estratégico para sustentar operação e acelerar decisões.",
    ],
    cards: [
      {
        icon: "education",
        title: "Graduando em Ciência da Computação",
      },
      {
        icon: "projects",
        title: "14+ Projetos Full Stack Entregues",
      },
      {
        icon: "certifications",
        title: "Certificações em Cloud, Segurança e IA",
      },
    ],
  },
  services: {
    eyebrow: "Como posso ajudar",
    title: "Estratégia de dados e execução técnica que acelera decisões",
    description:
      "Atuo do diagnóstico à entrega, alinhando KPIs, arquitetura de dados e automação para gerar clareza operacional e impacto mensurável.",
    offerings: [
      {
        title: "Diagnóstico e estratégia de dados",
        description:
          "Mapeio fluxos críticos, defino KPIs e desenho a arquitetura mínima para decisões confiáveis.",
        bullets: [
          "Inventário de fontes e qualidade",
          "Modelo de dados e governança",
          "Plano de métricas e indicadores",
        ],
      },
      {
        title: "BI executivo e storytelling",
        description:
          "Dashboards em Power BI com foco em clareza, metas e acompanhamento contínuo.",
        bullets: [
          "KPIs por área e por meta",
          "Narrativas para diretoria",
          "Templates reutilizáveis",
        ],
      },
      {
        title: "Automação e pipelines",
        description:
          "ETL/ELT e integrações em Python/SQL para reduzir retrabalho e acelerar análises.",
        bullets: [
          "Orquestração e alertas",
          "APIs e integrações",
          "Monitoramento e performance",
        ],
      },
    ],
    processTitle: "Processo de entrega",
    process: [
      {
        title: "Imersão",
        description: "Entendimento do contexto, objetivos e restrições do negócio.",
      },
      {
        title: "Arquitetura",
        description: "Modelagem, priorização e definição clara dos entregáveis.",
      },
      {
        title: "Construção",
        description: "Implementação, validação e documentação para escala.",
      },
      {
        title: "Evolução",
        description: "Ajustes, treinamento e melhoria contínua orientada a métricas.",
      },
    ],
    cta: {
      title: "Vamos acelerar sua operação de dados?",
      description: "Me conte sobre o desafio e eu proponho o caminho mais eficiente.",
      primaryLabel: "Conversar sobre um projeto",
      secondaryLabel: "Ver cases",
    },
  },
  engagement: {
    eyebrow: "Disponibilidade",
    title: "Disponibilidade e modelo de colaboração",
    description:
      "Transparência sobre agenda, tempo de resposta e formato de trabalho para acelerar decisões desde o primeiro contato.",
    cards: [
      {
        label: "Disponibilidade",
        value: "Próxima janela: Mar/2026",
        detail: "Projetos remotos de 4 a 10 semanas com onboarding estruturado.",
      },
      {
        label: "Tempo de resposta",
        value: "Até 24h úteis",
        detail: "Contato direto por email ou WhatsApp com próximos passos claros.",
      },
      {
        label: "Modelos de trabalho",
        value: "Projeto ou consultoria",
        detail: "Escopo fechado, sprints ou apoio contínuo em dados e BI.",
      },
      {
        label: "Entregáveis",
        value: "KPIs, dashboards e pipelines",
        detail: "Documentação, governança e handoff para o time interno.",
      },
    ],
    cta: {
      primaryLabel: "Iniciar conversa",
      secondaryLabel: "Ver cases",
    },
  },
  metrics: {
    eyebrow: "Métricas",
    title: "Credibilidade em números",
    items: [
      {
        icon: "projects",
        label: "14+ Projetos Concluídos",
      },
      {
        icon: "github",
        label: "Atividade consistente no GitHub",
      },
      {
        icon: "experience",
        label: "Experiência prática em desenvolvimento",
      },
      {
        icon: "data",
        label: "Projetos orientados a dados, arquitetura e decisão",
      },
    ],
  },
  primaryStack: {
    eyebrow: "Stack principal",
    title: "Stack principal",
    items: [
      { label: "Power BI (dashboards e KPIs)", level: 5 },
      { label: "SQL (modelagem e analytics)", level: 5 },
      { label: "Python (automação e dados)", level: 4 },
      { label: "DAX (medidas e performance)", level: 4 },
    ],
  },
  projects: {
    eyebrow: "Projetos",
    title: "Projetos Full Stack, Análise de Dados e IA",
    description:
      "Cases que unem engenharia de software, APIs, automação e dados, com foco em produto, arquitetura, performance e decisões bem informadas.",
    cardLabel: "Case",
    highlightLabel: "Destaques",
    detailsLabel: "Ver detalhes",
    caseLabel: "Case completo",
    viewAllLabel: "Ver todos os cases",
    featuredLabel: "Destaque",
    filters: {
      label: "Filtrar por",
      allLabel: "Todos",
      searchPlaceholder: "Buscar por projeto, stack ou palavra-chave",
      resultsLabel: "Mostrando {count} de {total} projetos",
      emptyTitle: "Nenhum projeto encontrado",
      emptyDescription: "Tente ajustar o filtro ou a busca para ver outros cases.",
    },
    modal: {
      title: "Detalhes do projeto",
      closeLabel: "Fechar",
      problemTitle: "Problema",
      solutionTitle: "Solução",
      featuresTitle: "Funcionalidades",
      demonstratesTitle: "O que demonstra",
      stackTitle: "Stack",
      githubLabel: "GitHub",
      demoLabel: "Demo",
      caseCta: "Ver case completo",
    },
  },
  projectsPage: {
    eyebrow: "Projetos",
    title: "Projetos e estudos de caso",
    description:
      "Cases completos com contexto, decisões técnicas, arquitetura e resultados em desenvolvimento full stack, dados e IA.",
    filterLabel: "Filtrar por stack",
    allLabel: "Todos",
    caseLabel: "Abrir case",
    demosLabel: "Ver demos",
    demonstratesLabel: "O que demonstra",
    filters: ["Python", "Power BI", "FastAPI", "React"],
  },
  projectDetail: {
    contextTitle: "Contexto e problema",
    problemTitle: "Desafios principais",
    dataTitle: "Dados e sinais analisados",
    solutionTitle: "Solução desenvolvida",
    featuresTitle: "Funcionalidades-chave",
    impactTitle: "Resultados e impacto",
    stackTitle: "Tecnologias e ferramentas utilizadas",
    demonstratesTitle: "Competências consolidadas",
    conclusionTitle: "Conclusão técnica",
    galleryTitle: "Capturas",
    howToRunTitle: "Como executar",
    linksTitle: "Links",
    roleLabel: "Papel",
    backLabel: "Voltar para projetos",
    ctaTitle: "Vamos conversar sobre este projeto?",
    ctaBody:
      "Posso detalhar decisões, desafios e próximos passos. Se quiser conversar, estou à disposição.",
    ctaButton: "Entrar em contato",
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos conversar sobre dados, BI e arquitetura?",
    description:
      "Aberto a oportunidades em Análise de Dados, Business Intelligence e Data Analytics, com atuação em engenharia, infraestrutura e execução. Trabalho com Power BI, SQL e Python para gerar decisões mais rápidas e confiáveis.",
    ctaTitle:
      "Resumo profissional: analista de dados com foco em BI, KPIs, automação e arquitetura operacional.",
    ctaSubtitle: "Conecte-se no LinkedIn ou envie um e-mail para conversar.",
    copyLabel: "Copiar",
    copiedLabel: "Copiado",
    cards: {
      email: "E-mail",
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp",
    },
    brief: {
      title: "Briefing rápido do projeto",
      description:
        "Preencha os campos principais e gere um resumo pronto para enviar.",
      fields: {
        name: {
          label: "Nome",
          placeholder: "Seu nome",
        },
        company: {
          label: "Empresa/Órgão",
          placeholder: "Nome da organização",
        },
        email: {
          label: "E-mail para retorno",
          placeholder: "voce@empresa.com",
        },
        projectType: {
          label: "Tipo de demanda",
        },
        timeline: {
          label: "Prazo desejado",
        },
        budget: {
          label: "Faixa de investimento",
        },
        goal: {
          label: "Objetivo principal",
          placeholder: "Ex.: dashboard para diretoria, automação de ETL...",
        },
      },
      projectTypes: [
        "Diagnóstico de dados",
        "Dashboard BI",
        "Pipeline/ETL",
        "Automação em Python",
        "Consultoria em dados",
      ],
      timelines: [
        "Urgente (até 2 semanas)",
        "Curto (1 mês)",
        "Médio (2-3 meses)",
        "Contínuo",
      ],
      budgets: ["Até R$ 5k", "R$ 5k - 15k", "R$ 15k - 30k", "R$ 30k+"],
      summaryTitle: "Resumo gerado",
      summaryHint: "Revise antes de enviar. Você pode copiar ou enviar direto.",
      emptySummary: "Preencha os campos para gerar um resumo do briefing.",
      emailCta: "Enviar por email",
      whatsappCta: "Enviar no WhatsApp",
    },
  },
  certificatesSection: {
    eyebrow: "Certificados",
    title: "Certificados em engenharia de software, dados, cloud e segurança",
    description:
      "Coleção com PDFs locais de Alura, Assimov e Ulife. Certificações em desenvolvimento, dados, IA, cloud e segurança.",
    ctaLabel: "Ver certificados",
  },
  demos: {
    eyebrow: "Demos",
    title: "Demos e repositórios",
    description:
      "Demos e repositórios para avaliação rápida de projetos full stack, APIs e data apps, com instruções claras para rodar localmente.",
    viewProjectsLabel: "Ver projetos",
    fullCaseLabel: "Case completo",
    openDemoLabel: "Abrir demo",
    openInteractiveLabel: "Abrir demo interativa",
    watchVideoLabel: "Ver vídeo",
    demoSoonLabel: "Demo em breve",
    howToRunLabel: "Como executar (local)",
    publishTitle: "Como disponibilizo demos",
    publishItems: [
      "Web (Next.js/React): Vercel com deploy automático do GitHub.",
      "Front-end puro (HTML/JS): GitHub Pages ou Vercel.",
      "APIs (Node/FastAPI): Render ou Fly com /docs habilitado.",
    ],
  },
  language: {
    label: "Idiomas",
  },
  media: {
    videoFallback: "Seu navegador não suporta vídeo HTML5.",
    videoDemoLabel: "Veja a demonstração em vídeo",
  },
};

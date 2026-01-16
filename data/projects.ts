import type { Locale } from "@/lib/i18n";

type Localized<T> = Record<Locale, T>;

type LocalizedScreenshot = {
  src: string;
  alt: Localized<string>;
  type?: "image" | "gif" | "video";
  caption?: Localized<string>;
};

export type Project = {
  slug: string;
  name: string;
  tagline: Localized<string>;
  description: Localized<string>;
  highlights: Localized<string[]>;
  problem: Localized<string[]>;
  solution: Localized<string[]>;
  features: Localized<string[]>;
  stack: string[];
  repoUrl: string;
  demoUrl?: string;
  screenshots: LocalizedScreenshot[];
  howToRun: Localized<string[]>;
  featured: boolean;
  year?: string;
};

export type ProjectCopy = {
  tagline: string;
  description: string;
  highlights: string[];
  problem: string[];
  solution: string[];
  features: string[];
  howToRun: string[];
  screenshots: {
    src: string;
    alt: string;
    type?: "image" | "gif" | "video";
    caption?: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "touchless-web-gesture-interface",
    name: "Touchless Web Gesture Interface",
    tagline: {
      pt: "Interface web controlada por gestos para navegação sem toque.",
      en: "Gesture-controlled web interface for touchless navigation.",
    },
    description: {
      pt: "Aplicação web que usa visão computacional no navegador para interpretar gestos da mão e acionar comandos. Projetada para ambientes onde teclado e mouse não são ideais, com calibração e feedback visual. Estrutura modular para novos gestos e fluxos.",
      en: "Web application that uses computer vision in the browser to interpret hand gestures and trigger commands. Designed for environments where keyboard and mouse are not ideal, with calibration and visual feedback. Modular structure for adding new gestures and flows.",
    },
    highlights: {
      pt: [
        "Redução de tempo em fluxos repetitivos com comandos por gesto.",
        "Base pronta para expansão de gestos e atalhos por contexto.",
        "Integração simples com páginas e painéis existentes.",
        "UX focada em acessibilidade e higiene.",
      ],
      en: [
        "Reduced time in repetitive flows with gesture commands.",
        "Ready to expand gestures and context-based shortcuts.",
        "Simple integration with existing pages and dashboards.",
        "Accessibility- and hygiene-focused UX.",
      ],
    },
    problem: {
      pt: [
        "Interações manuais são inviáveis em ambientes com restrição de toque.",
        "Interfaces tradicionais não oferecem atalhos intuitivos para comandos rápidos.",
        "Falta de mapeamento claro entre gestos e ações na UI.",
      ],
      en: [
        "Manual interaction is not viable in touch-restricted environments.",
        "Traditional interfaces lack intuitive shortcuts for quick commands.",
        "No clear mapping between gestures and actions in the UI.",
      ],
    },
    solution: {
      pt: [
        "Captura de vídeo via câmera e processamento em tempo real no navegador.",
        "Mapa de gestos com ações definidas e feedback visual imediato.",
        "Camada de calibração para ajustar sensibilidade e reduzir falsos positivos.",
      ],
      en: [
        "Camera capture and real-time processing in the browser.",
        "Gesture map with defined actions and immediate visual feedback.",
        "Calibration layer to adjust sensitivity and reduce false positives.",
      ],
    },
    features: {
      pt: [
        "Detecção de gestos em tempo real com baixa latência.",
        "Feedback visual e indicador de confiança do gesto.",
        "Calibração guiada em poucos passos.",
        "Layout responsivo para desktop e tablets.",
        "Fallback para controle manual.",
        "Arquitetura modular para adicionar novos gestos.",
      ],
      en: [
        "Real-time gesture detection with low latency.",
        "Visual feedback and gesture confidence indicator.",
        "Guided calibration flow.",
        "Responsive layout for desktop and tablets.",
        "Fallback to manual controls.",
        "Modular architecture for new gestures.",
      ],
    },
    stack: ["JavaScript", "HTML", "CSS", "WebRTC", "Canvas"],
    repoUrl:
      "https://github.com/matheussiqueira-dev/touchless-web-gesture-interface",
    screenshots: [
      {
        src: "/projects/touchless-web-gesture-interface/cover.png",
        alt: {
          pt: "Capa do Touchless Web Gesture Interface",
          en: "Cover of Touchless Web Gesture Interface",
        },
        type: "image",
      },
      {
        src: "/projects/touchless-web-gesture-interface/shot-1.png",
        alt: {
          pt: "Captura de gestos em tempo real",
          en: "Real-time gesture capture",
        },
        type: "image",
      },
    ],
    howToRun: {
      pt: [
        "git clone https://github.com/matheussiqueira-dev/touchless-web-gesture-interface",
        "cd touchless-web-gesture-interface",
        "python -m http.server 3000",
        "Abra http://localhost:3000 no navegador",
        "Permita o acesso à câmera e faça a calibração inicial",
      ],
      en: [
        "git clone https://github.com/matheussiqueira-dev/touchless-web-gesture-interface",
        "cd touchless-web-gesture-interface",
        "python -m http.server 3000",
        "Open http://localhost:3000 in the browser",
        "Allow camera access and run the initial calibration",
      ],
    },
    featured: true,
    year: "2024",
  },
  {
    slug: "chatbot-ia-api",
    name: "Chatbot IA API",
    tagline: {
      pt: "API de chatbot com IA e contexto persistente para integrações rápidas.",
      en: "Chatbot API with AI and persistent context for fast integrations.",
    },
    description: {
      pt: "Backend em FastAPI para gerenciar sessões, mensagens e contexto de conversas. Estruturado para plugar provedores de IA e expor endpoints claros para front-ends e CRMs. Foco em consistência de respostas e rastreabilidade.",
      en: "FastAPI backend to manage sessions, messages, and conversation context. Structured to plug AI providers and expose clear endpoints to front-ends and CRMs. Focused on consistent responses and traceability.",
    },
    highlights: {
      pt: [
        "Padronização de endpoints reduzindo tempo de integração.",
        "Contexto persistente para conversas mais coerentes.",
        "Arquitetura pronta para troca de provedor de IA.",
        "Estabilidade melhorada com validações e erros previsíveis.",
      ],
      en: [
        "Standardized endpoints reducing integration time.",
        "Persistent context for more coherent conversations.",
        "Architecture ready to swap AI providers.",
        "Improved stability with validations and predictable errors.",
      ],
    },
    problem: {
      pt: [
        "Equipes precisam integrar IA sem construir infraestrutura do zero.",
        "Falta de organização entre mensagens e histórico por sessão.",
        "Dificuldade para escalar respostas automatizadas com controle.",
      ],
      en: [
        "Teams need to integrate AI without building infrastructure from scratch.",
        "Lack of organization between messages and session history.",
        "Difficulty scaling automated responses with control.",
      ],
    },
    solution: {
      pt: [
        "API REST com rotas de sessões, mensagens e usuários.",
        "Modelo de dados para contexto e persistência.",
        "Camada de serviços para encapsular o provedor de IA.",
      ],
      en: [
        "REST API with session, message, and user routes.",
        "Data model for context and persistence.",
        "Service layer to encapsulate the AI provider.",
      ],
    },
    features: {
      pt: [
        "Criação e gestão de sessões de conversa.",
        "Registro de histórico por usuário e sessão.",
        "Validação de payloads com Pydantic.",
        "Tratamento de erros com respostas consistentes.",
        "Documentação automática via OpenAPI.",
        "Base pronta para logs e observabilidade.",
      ],
      en: [
        "Creation and management of chat sessions.",
        "History logs by user and session.",
        "Payload validation with Pydantic.",
        "Error handling with consistent responses.",
        "Automatic documentation via OpenAPI.",
        "Baseline ready for logs and observability.",
      ],
    },
    stack: ["Python", "FastAPI", "Pydantic", "Uvicorn"],
    repoUrl: "https://github.com/matheussiqueira-dev/chatbot-ia-api",
    screenshots: [
      {
        src: "/projects/chatbot-ia-api/cover.png",
        alt: {
          pt: "Capa do Chatbot IA API",
          en: "Cover of Chatbot IA API",
        },
        type: "image",
      },
      {
        src: "/projects/chatbot-ia-api/shot-1.png",
        alt: {
          pt: "Documentação da API no Swagger",
          en: "API documentation in Swagger",
        },
        type: "image",
      },
    ],
    howToRun: {
      pt: [
        "git clone https://github.com/matheussiqueira-dev/chatbot-ia-api",
        "cd chatbot-ia-api",
        "python -m venv .venv",
        ".\\.venv\\Scripts\\activate",
        "pip install -r requirements.txt",
        "uvicorn main:app --reload",
      ],
      en: [
        "git clone https://github.com/matheussiqueira-dev/chatbot-ia-api",
        "cd chatbot-ia-api",
        "python -m venv .venv",
        ".\\.venv\\Scripts\\activate",
        "pip install -r requirements.txt",
        "uvicorn main:app --reload",
      ],
    },
    featured: true,
    year: "2025",
  },
  {
    slug: "self-drive-car",
    name: "Self-Drive-Car",
    tagline: {
      pt: "Simulador em JavaScript de direção autônoma com rede neural visual.",
      en: "JavaScript simulator for autonomous driving with a visual neural network.",
    },
    description: {
      pt: "Simulação 2D que demonstra sensores virtuais e tomada de decisão para direção autônoma. Permite ajustar parâmetros e observar o comportamento em tempo real. Projeto didático para visualizar conceitos de IA aplicada a controle.",
      en: "2D simulation that demonstrates virtual sensors and decision-making for autonomous driving. It allows parameter tuning and real-time behavior observation. A didactic project to visualize AI concepts applied to control.",
    },
    highlights: {
      pt: [
        "Aprendizado de IA visual e fácil de acompanhar.",
        "Simulação leve, com baixo custo computacional.",
        "Interface direta para ajustes rápidos.",
        "Comparação de comportamentos com parâmetros diferentes.",
      ],
      en: [
        "Visual and easy-to-follow AI learning.",
        "Lightweight simulation with low computational cost.",
        "Direct interface for quick adjustments.",
        "Behavior comparison across parameter sets.",
      ],
    },
    problem: {
      pt: [
        "Aprender IA é difícil sem visualização imediata.",
        "Poucos exemplos práticos de redes neurais em ambiente controlado.",
        "Necessidade de feedback rápido para comparar ajustes.",
      ],
      en: [
        "Learning AI is hard without immediate visualization.",
        "Few practical examples of neural networks in a controlled environment.",
        "Need for fast feedback to compare adjustments.",
      ],
    },
    solution: {
      pt: [
        "Ambiente 2D com sensores e física simplificada.",
        "Interface para ajustar parâmetros da rede.",
        "Visualização em tempo real do comportamento.",
      ],
      en: [
        "2D environment with sensors and simplified physics.",
        "Interface to tune network parameters.",
        "Real-time visualization of behavior.",
      ],
    },
    features: {
      pt: [
        "Sensores com raios de detecção configuráveis.",
        "Treinamento com variações de parâmetros.",
        "Canvas para exibição da pista e colisões.",
        "Controle automático de direção e aceleração.",
        "Comparação entre comportamentos salvos.",
        "Modo de debug visual.",
      ],
      en: [
        "Sensors with configurable detection rays.",
        "Training with parameter variations.",
        "Canvas for track and collision visualization.",
        "Automatic steering and acceleration control.",
        "Comparison between saved behaviors.",
        "Visual debug mode.",
      ],
    },
    stack: ["JavaScript", "HTML", "Canvas"],
    repoUrl: "https://github.com/matheussiqueira-dev/Self-Drive-Car",
    screenshots: [
      {
        src: "/projects/self-drive-car/cover.png",
        alt: {
          pt: "Capa do Self-Drive-Car",
          en: "Cover of Self-Drive-Car",
        },
        type: "image",
      },
      {
        src: "/projects/self-drive-car/shot-1.png",
        alt: {
          pt: "Simulação do carro autônomo em pista",
          en: "Self-driving car simulation on track",
        },
        type: "image",
      },
    ],
    howToRun: {
      pt: [
        "git clone https://github.com/matheussiqueira-dev/Self-Drive-Car",
        "cd Self-Drive-Car",
        "python -m http.server 3000",
        "Abra http://localhost:3000 no navegador",
        "Ajuste os parâmetros e observe a simulação",
      ],
      en: [
        "git clone https://github.com/matheussiqueira-dev/Self-Drive-Car",
        "cd Self-Drive-Car",
        "python -m http.server 3000",
        "Open http://localhost:3000 in the browser",
        "Tune parameters and observe the simulation",
      ],
    },
    featured: true,
    year: "2024",
  },
  {
    slug: "library-api-advanced",
    name: "Library API Advanced",
    tagline: {
      pt: "API para gestão de bibliotecas com regras de empréstimo e catálogo.",
      en: "Library management API with loan rules and catalog control.",
    },
    description: {
      pt: "API em FastAPI para administrar acervo, usuários e empréstimos com regras de negócio claras. Inclui validações, filtros e padronização de respostas. Pensada para integração com sistemas administrativos.",
      en: "FastAPI service to manage collections, users, and loans with clear business rules. Includes validations, filters, and standardized responses. Built for integration with administrative systems.",
    },
    highlights: {
      pt: [
        "Redução de inconsistências com validações de status.",
        "Endpoints claros por entidades principais.",
        "Documentação pronta para integração.",
        "Base preparada para evolução do banco.",
      ],
      en: [
        "Reduced inconsistencies with status validations.",
        "Clear endpoints for main entities.",
        "Documentation ready for integration.",
        "Foundation prepared for database growth.",
      ],
    },
    problem: {
      pt: [
        "Processos manuais dificultam o controle de empréstimos.",
        "Cadastros sem padronização geram dados duplicados.",
        "Regras de devolução não são aplicadas de forma consistente.",
      ],
      en: [
        "Manual processes make loan control difficult.",
        "Unstandardized records generate duplicate data.",
        "Return rules are not applied consistently.",
      ],
    },
    solution: {
      pt: [
        "Endpoints organizados para acervo, usuários e empréstimos.",
        "Validação de disponibilidade e prazos.",
        "Camadas separadas para regras de negócio.",
      ],
      en: [
        "Organized endpoints for collection, users, and loans.",
        "Availability and due-date validation.",
        "Separate layers for business rules.",
      ],
    },
    features: {
      pt: [
        "Cadastro de livros, autores e categorias.",
        "Fluxo completo de empréstimo e devolução.",
        "Paginação e filtros por status.",
        "Respostas padronizadas em JSON.",
        "Documentação automática via Swagger.",
        "Testes básicos de validação.",
      ],
      en: [
        "Books, authors, and categories registration.",
        "End-to-end loan and return flow.",
        "Pagination and status filters.",
        "Standardized JSON responses.",
        "Automatic documentation via Swagger.",
        "Basic validation tests.",
      ],
    },
    stack: ["Python", "FastAPI", "SQLAlchemy", "SQLite"],
    repoUrl: "https://github.com/matheussiqueira-dev/library-api-advanced",
    screenshots: [
      {
        src: "/projects/library-api-advanced/cover.png",
        alt: {
          pt: "Capa do Library API Advanced",
          en: "Cover of Library API Advanced",
        },
        type: "image",
      },
      {
        src: "/projects/library-api-advanced/shot-1.png",
        alt: {
          pt: "Documentação da API de biblioteca",
          en: "Library API documentation",
        },
        type: "image",
      },
    ],
    howToRun: {
      pt: [
        "git clone https://github.com/matheussiqueira-dev/library-api-advanced",
        "cd library-api-advanced",
        "python -m venv .venv",
        ".\\.venv\\Scripts\\activate",
        "pip install -r requirements.txt",
        "uvicorn main:app --reload",
      ],
      en: [
        "git clone https://github.com/matheussiqueira-dev/library-api-advanced",
        "cd library-api-advanced",
        "python -m venv .venv",
        ".\\.venv\\Scripts\\activate",
        "pip install -r requirements.txt",
        "uvicorn main:app --reload",
      ],
    },
    featured: false,
    year: "2025",
  },
  {
    slug: "nucleo-comercial-dados",
    name: "Núcleo Comercial Dados",
    tagline: {
      pt: "API para centralizar dados comerciais e indicadores de negócio.",
      en: "API to centralize commercial data and business indicators.",
    },
    description: {
      pt: "Backend em FastAPI para consolidar métricas e expor endpoints de indicadores. Estruturado para receber novas fontes de dados e manter padronização. Ideal para dashboards e rotinas de análise.",
      en: "FastAPI backend to consolidate metrics and expose indicator endpoints. Structured to ingest new data sources and keep standardization. Ideal for dashboards and analytical routines.",
    },
    highlights: {
      pt: [
        "Organização de indicadores para consumo rápido.",
        "Filtros padronizados para consultas confiáveis.",
        "Base pronta para incluir novas fontes.",
      ],
      en: [
        "Organized indicators for fast consumption.",
        "Standardized filters for reliable queries.",
        "Ready-to-grow base for new sources.",
      ],
    },
    problem: {
      pt: [
        "Dados comerciais dispersos em planilhas e sistemas.",
        "Dificuldade em gerar indicadores confiáveis.",
        "Falta de padrão para consumo por outras equipes.",
      ],
      en: [
        "Commercial data scattered across spreadsheets and systems.",
        "Difficulty generating reliable indicators.",
        "Lack of a standard for consumption by other teams.",
      ],
    },
    solution: {
      pt: [
        "Modelo unificado para indicadores e dimensões.",
        "API para consultas filtradas por período e unidade.",
        "Validação de entradas para evitar inconsistências.",
      ],
      en: [
        "Unified model for indicators and dimensions.",
        "API for filtered queries by period and unit.",
        "Input validation to avoid inconsistencies.",
      ],
    },
    features: {
      pt: [
        "Consulta por período, canal e unidade.",
        "Indicadores consolidados em endpoints dedicados.",
        "Filtros por categoria e segmento.",
        "Camada de logs para auditoria.",
        "Padrão de resposta com métricas.",
        "Preparação para cache de consultas.",
      ],
      en: [
        "Queries by period, channel, and unit.",
        "Indicators consolidated in dedicated endpoints.",
        "Filters by category and segment.",
        "Logging layer for auditing.",
        "Response standard with metrics.",
        "Prepared for query caching.",
      ],
    },
    stack: ["Python", "FastAPI", "PostgreSQL", "Pydantic"],
    repoUrl: "https://github.com/matheussiqueira-dev/nucleo-comercial-dados",
    screenshots: [
      {
        src: "/projects/nucleo-comercial-dados/cover.png",
        alt: {
          pt: "Capa do Núcleo Comercial Dados",
          en: "Cover of Núcleo Comercial Dados",
        },
        type: "image",
      },
      {
        src: "/projects/nucleo-comercial-dados/shot-1.png",
        alt: {
          pt: "Resumo de indicadores comerciais",
          en: "Commercial indicators summary",
        },
        type: "image",
      },
    ],
    howToRun: {
      pt: [
        "git clone https://github.com/matheussiqueira-dev/nucleo-comercial-dados",
        "cd nucleo-comercial-dados",
        "python -m venv .venv",
        ".\\.venv\\Scripts\\activate",
        "pip install -r requirements.txt",
        "Defina as variáveis de ambiente no .env",
        "uvicorn main:app --reload",
      ],
      en: [
        "git clone https://github.com/matheussiqueira-dev/nucleo-comercial-dados",
        "cd nucleo-comercial-dados",
        "python -m venv .venv",
        ".\\.venv\\Scripts\\activate",
        "pip install -r requirements.txt",
        "Set environment variables in .env",
        "uvicorn main:app --reload",
      ],
    },
    featured: false,
    year: "2025",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getProjectCopy = (project: Project, locale: Locale): ProjectCopy => ({
  tagline: project.tagline[locale],
  description: project.description[locale],
  highlights: project.highlights[locale],
  problem: project.problem[locale],
  solution: project.solution[locale],
  features: project.features[locale],
  howToRun: project.howToRun[locale],
  screenshots: project.screenshots.map((shot) => ({
    src: shot.src,
    alt: shot.alt[locale],
    type: shot.type,
    caption: shot.caption ? shot.caption[locale] : undefined,
  })),
});

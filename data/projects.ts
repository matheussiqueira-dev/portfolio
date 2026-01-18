import type { Project } from "./projects.types";

export const projects: Project[] = [
  {
    slug: "touchless-web-gesture-interface",
    title: "Touchless Web Gesture Interface",
    tagline: "Interface web controlada por gestos para navegacao sem toque.",
    role: "Analista/Desenvolvedor",
    stack: ["Python", "FastAPI", "OpenCV", "MediaPipe", "React"],
    repoUrl:
      "https://github.com/matheussiqueira-dev/touchless-web-gesture-interface",
    problem: [
      "Ambientes com restricao de toque exigiam controle sem contato fisico.",
      "Usuarios precisavam navegar dashboards sem mouse ou teclado.",
      "Baixa tolerancia a latencia em interacao ao vivo.",
    ],
    dataUsed: [
      "Fluxo de video da camera em tempo real.",
      "Landmarks de mao e coordenadas normalizadas.",
      "Eventos de gesto mapeados para a interface.",
    ],
    solution: [
      "Deteccao de maos com MediaPipe e OpenCV.",
      "Servico FastAPI para traduzir gestos em comandos.",
      "Frontend React com feedback visual e mapeamento de acoes.",
    ],
    features: [
      "Calibracao de gestos e sensibilidade.",
      "Mapa de gestos configuravel por acao.",
      "Overlay visual de status e deteccao.",
    ],
    highlights: [
      "Operacao sem toque para paines e interfaces analiticas.",
      "Interacao mais segura e acessivel em ambientes controlados.",
      "Base para comandos rapidos em dashboards ao vivo.",
    ],
    demonstrates: [
      "Visao computacional aplicada a UX de dados.",
      "Pipeline em tempo real com foco em baixa latencia.",
      "Capacidade de prototipar produtos analiticos interativos.",
    ],
    howToRun: [
      "Pre-requisitos: Python 3.10+, Node 18 e camera habilitada.",
      "Clone o repositorio e crie um ambiente virtual Python.",
      "Instale as dependencias da API e execute o servidor FastAPI.",
      "Instale as dependencias do frontend e rode o app React.",
      "Acesse http://localhost:3000 e permita o uso da camera.",
    ],
    screenshots: [
      {
        src: "/projects/touchless-web-gesture-interface/cover.webp",
        alt: "Capa do projeto Touchless Web Gesture Interface",
      },
      {
        src: "/projects/touchless-web-gesture-interface/shot-1.webp",
        alt: "Tela principal do projeto Touchless Web Gesture Interface",
      },
    ],
  },
  {
    slug: "chatbot-ia-api",
    title: "Chatbot IA API",
    tagline: "API de chatbot com contexto e logs para suporte rapido.",
    role: "Analista/Desenvolvedor",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    repoUrl: "https://github.com/matheussiqueira-dev/chatbot-ia-api",
    problem: [
      "Atendimento disperso sem historico centralizado.",
      "Respostas inconsistentes e sem rastreabilidade.",
      "Tempo de resposta alto em demandas repetitivas.",
    ],
    dataUsed: [
      "Mensagens e historicos de conversas.",
      "Intencoes classificadas e contexto de sessao.",
      "Logs de uso e feedback para melhoria.",
    ],
    solution: [
      "API FastAPI com contexto por sessao.",
      "Persistencia em PostgreSQL e cache com Redis.",
      "Logs estruturados para auditoria e metricas.",
    ],
    features: [
      "Contexto por sessao e fallback seguro.",
      "Registro de conversas e intents.",
      "Endpoints versionados e documentacao em /docs.",
    ],
    highlights: [
      "Resposta mais consistente e rastreavel em escala.",
      "Base pronta para analise de atendimento e qualidade.",
      "Infra para evolucao de conteudo e metricas.",
    ],
    demonstrates: [
      "Modelagem de dados conversacionais e APIs robustas.",
      "Preocupacao com observabilidade e governanca.",
      "Visao de produto para automacao de suporte.",
    ],
    howToRun: [
      "Pre-requisitos: Python 3.10+, PostgreSQL e Redis.",
      "Clone o repositorio e copie .env.example para .env.",
      "Configure variaveis de banco e cache.",
      "Instale dependencias, rode migracoes e inicie a API.",
      "Acesse http://localhost:8000/docs para testar.",
    ],
    screenshots: [
      {
        src: "/projects/chatbot-ia-api/cover.webp",
        alt: "Capa do projeto Chatbot IA API",
      },
      {
        src: "/projects/chatbot-ia-api/shot-1.webp",
        alt: "Fluxo de conversa do Chatbot IA API",
      },
    ],
  },
  {
    slug: "self-drive-car",
    title: "Self-Drive Car",
    tagline: "Simulador de direcao autonoma com visao computacional.",
    role: "Analista/Desenvolvedor",
    stack: ["Python", "OpenCV", "TensorFlow", "NumPy"],
    repoUrl: "https://github.com/matheussiqueira-dev/self-drive-car",
    problem: [
      "Necessidade de testar modelos sem risco fisico.",
      "Deteccao de faixa e obstaculos em tempo real.",
      "Processamento leve para hardware limitado.",
    ],
    dataUsed: [
      "Frames de camera simulada e sensores virtuais.",
      "Telemetria de velocidade, posicao e trajetoria.",
      "Dados sinteticos para treino e validacao.",
    ],
    solution: [
      "Pipeline de visao com pre-processamento otimizado.",
      "Modelo treinado com dados sinteticos e reais.",
      "Simulador com feedback visual e telemetria.",
    ],
    features: [
      "Deteccao de faixas com ajuste de ROI.",
      "Predicao de direcao e controle basico de velocidade.",
      "Overlay de inferencia para debug.",
    ],
    highlights: [
      "Testes rapidos e seguros de logica de controle.",
      "Iteracao visual com telemetria em tempo real.",
      "Base para evolucao de modelos de conducao.",
    ],
    demonstrates: [
      "Trabalho com dados visuais e simulacoes.",
      "Pipeline de ML aplicado a decisao em tempo real.",
      "Visao de produto experimental com foco em validacao.",
    ],
    howToRun: [
      "Pre-requisitos: Python 3.10+, OpenCV e TensorFlow.",
      "Clone o repositorio e instale as dependencias.",
      "Baixe os pesos do modelo (quando aplicavel).",
      "Execute o script principal do simulador.",
      "Ajuste parametros conforme o cenario.",
    ],
    screenshots: [
      {
        src: "/projects/self-drive-car/cover.webp",
        alt: "Capa do projeto Self-Drive Car",
      },
      {
        src: "/projects/self-drive-car/shot-1.webp",
        alt: "Simulacao do projeto Self-Drive Car",
      },
    ],
  },
  {
    slug: "library-api-advanced",
    title: "Library API Advanced",
    tagline: "API de biblioteca com autenticacao e regras de emprestimo.",
    role: "Desenvolvedor",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Fastify"],
    repoUrl: "https://github.com/matheussiqueira-dev/library-api-advanced",
    problem: [
      "Catalogo e emprestimos sem controle centralizado.",
      "Permissoes e autenticacao inconsistentes.",
      "Relatorios manuais dificultavam auditoria.",
    ],
    dataUsed: [
      "Catalogo de livros, usuarios e emprestimos.",
      "Status de devolucao e prazos.",
      "Logs de operacoes para auditoria.",
    ],
    solution: [
      "API REST com JWT, roles e regras de negocio.",
      "Modelagem relacional para livros, usuarios e emprestimos.",
      "Logs e consultas para auditoria.",
    ],
    features: [
      "Fluxo de emprestimo e devolucao com validacoes.",
      "Busca por categoria, autor e status.",
      "Trilha de auditoria com logs estruturados.",
    ],
    highlights: [
      "Padronizacao de processos e reducao de inconsistencias.",
      "Maior confianca e rastreabilidade nos registros.",
      "Base para compliance e relatorios operacionais.",
    ],
    demonstrates: [
      "Arquitetura backend organizada e tipada.",
      "Modelagem relacional com foco em integridade.",
      "Boas praticas de autenticacao e auditoria.",
    ],
    howToRun: [
      "Pre-requisitos: Node 18+ e PostgreSQL.",
      "Clone o repositorio e instale dependencias.",
      "Configure o .env com banco e JWT.",
      "Rode migracoes e inicie o servidor.",
      "Teste os endpoints via /docs ou Postman.",
    ],
    screenshots: [
      {
        src: "/projects/library-api-advanced/cover.webp",
        alt: "Capa do projeto Library API Advanced",
      },
      {
        src: "/projects/library-api-advanced/shot-1.webp",
        alt: "Dashboard tecnico do Library API Advanced",
      },
    ],
  },
  {
    slug: "nucleo-comercial-dados",
    title: "Nucleo Comercial de Dados",
    tagline: "Paineis e indicadores de performance para area comercial.",
    role: "Analista de Dados",
    stack: ["Power BI", "SQL", "Python", "DAX", "Power Query"],
    repoUrl: "https://github.com/matheussiqueira-dev/nucleo-comercial-dados",
    problem: [
      "Dados de vendas e receita dispersos em multiplas fontes.",
      "Relatorios manuais atrasavam decisoes comerciais.",
      "Falta de visao consolidada de performance por periodo e segmento.",
    ],
    dataUsed: [
      "Bases de vendas, receita e metas comerciais.",
      "Indicadores de performance por periodo e canal.",
      "Series historicas para comparacao e tendencia.",
    ],
    solution: [
      "ETL com Python e Power Query para consolidar fontes.",
      "Modelo de dados orientado a KPIs comerciais.",
      "Dashboards estrategicos com visao executiva.",
    ],
    features: [
      "Indicadores por periodo, canal e segmento.",
      "Alertas visuais para variacoes relevantes.",
      "Painel com filtros dinamicos e visao comparativa.",
    ],
    highlights: [
      "Visao consolidada para liderancas e time comercial.",
      "Deteccao rapida de tendencias e desvios.",
      "Base consistente para decisao comercial.",
    ],
    demonstrates: [
      "BI end-to-end com dados de negocio.",
      "Entrega de indicadores acionaveis para liderancas.",
      "Foco em qualidade e governanca de dados.",
    ],
    howToRun: [
      "Pre-requisitos: Power BI Desktop e acesso as fontes.",
      "Conecte as fontes de vendas e execute o ETL.",
      "Atualize o dataset e publique o relatorio.",
      "Compartilhe o dashboard com perfis de acesso.",
      "Documente a rotina de atualizacao.",
    ],
    screenshots: [
      {
        src: "/projects/nucleo-comercial-dados/cover.webp",
        alt: "Capa do projeto Nucleo Comercial de Dados",
      },
      {
        src: "/projects/nucleo-comercial-dados/shot-1.webp",
        alt: "Dashboard do Nucleo Comercial de Dados",
      },
    ],
  },
];

export const projectSlugs = projects.map((project) => project.slug);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

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
      "Usuarios nao tecnicos precisavam de interacao simples e intuitiva.",
      "Baixa tolerancia a latencia em dashboards ao vivo.",
    ],
    solution: [
      "Pipeline de deteccao de maos com MediaPipe e OpenCV.",
      "Servico FastAPI para traduzir gestos em eventos de interface.",
      "Frontend em React com feedback visual e mapeamento de acoes.",
    ],
    features: [
      "Mapa de gestos configuravel por acao.",
      "Modo de calibracao com ajuste de sensibilidade.",
      "Feedback visual em tempo real para cada gesto.",
    ],
    howToRun: [
      "Clone o repositorio e configure o ambiente Python.",
      "Instale dependencias e rode a API com FastAPI.",
      "Instale dependencias do front e execute o app.",
      "Acesse http://localhost:3000 e ative a camera.",
    ],
    screenshots: [
      {
        src: "/projects/touchless-web-gesture-interface/cover.png",
        alt: "Capa do projeto Touchless Web Gesture Interface",
      },
      {
        src: "/projects/touchless-web-gesture-interface/shot-1.png",
        alt: "Tela principal do projeto Touchless Web Gesture Interface",
      },
    ],
  },
  {
    slug: "chatbot-ia-api",
    title: "Chatbot IA API",
    tagline: "Chatbot integrado a API para respostas contextuais e suporte rapido.",
    role: "Analista/Desenvolvedor",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    repoUrl: "https://github.com/matheussiqueira-dev/chatbot-ia-api",
    problem: [
      "Respostas padronizadas eram lentas e distribuidas em varios canais.",
      "Faltava historico unificado para acompanhar conversas.",
      "Equipe precisava reduzir tempo de atendimento com qualidade.",
    ],
    solution: [
      "API com fluxo de prompts e contexto por sessao.",
      "Base de conhecimento estruturada com busca rapida.",
      "Cache e logs para performance e rastreabilidade.",
    ],
    features: [
      "Fallback de intencoes para respostas seguras.",
      "Historico por sessao com classificacao de topicos.",
      "Metricas de uso para evolucao do conteudo.",
    ],
    howToRun: [
      "Suba o banco de dados e variaveis de ambiente.",
      "Rode o backend com FastAPI.",
      "Opcional: conecte o front de chat.",
    ],
    screenshots: [
      {
        src: "/projects/chatbot-ia-api/cover.png",
        alt: "Capa do projeto Chatbot IA API",
      },
      {
        src: "/projects/chatbot-ia-api/shot-1.png",
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
      "Necessidade de testar modelos sem riscos fisicos.",
      "Deteccao de faixa e obstaculos em tempo real.",
      "Processamento leve para rodar em hardware limitado.",
    ],
    solution: [
      "Pipeline de visao com pre-processamento otimizado.",
      "Modelo treinado com dados sinteticos e reais.",
      "Simulador com feedback de inferencia e telemetria.",
    ],
    features: [
      "Deteccao de faixas e correcao de trajetoria.",
      "Controle de velocidade baseado em obstaculos.",
      "Visualizacao de inferencia para debug.",
    ],
    howToRun: [
      "Instale dependencias Python e drivers necessarios.",
      "Baixe o modelo treinado e execute o simulador.",
      "Ajuste parametros de sensores conforme cenario.",
    ],
    screenshots: [
      {
        src: "/projects/self-drive-car/cover.png",
        alt: "Capa do projeto Self-Drive Car",
      },
      {
        src: "/projects/self-drive-car/shot-1.png",
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
      "Catalogo e emprestimos precisavam de controle centralizado.",
      "Permissoes e autenticacao eram inconsistentes.",
      "Relatorios manuais dificultavam auditoria.",
    ],
    solution: [
      "API REST com JWT, roles e regras de negocio.",
      "Modelagem relacional para livros, usuarios e emprestimos.",
      "Relatorios e logs para auditoria.",
    ],
    features: [
      "Fluxo completo de emprestimo e devolucao.",
      "Busca avancada por categoria, autor e status.",
      "Logs de operacao com trilha de auditoria.",
    ],
    howToRun: [
      "Configure o banco PostgreSQL e variaveis de ambiente.",
      "Rode as migracoes e inicie o servidor.",
      "Teste os endpoints com Postman ou Insomnia.",
    ],
    screenshots: [
      {
        src: "/projects/library-api-advanced/cover.png",
        alt: "Capa do projeto Library API Advanced",
      },
      {
        src: "/projects/library-api-advanced/shot-1.png",
        alt: "Dashboard tecnico do Library API Advanced",
      },
    ],
  },
  {
    slug: "nucleo-comercial-dados",
    title: "Nucleo Comercial de Dados",
    tagline: "Paineis e indicadores fiscais para nucleo comercial.",
    role: "Analista de Dados",
    stack: ["Power BI", "SQL", "Python", "DAX", "Power Query"],
    repoUrl: "https://github.com/matheussiqueira-dev/nucleo-comercial-dados",
    problem: [
      "Dados fiscais estavam dispersos em multiplas fontes.",
      "Relatorios manuais atrasavam decisoes comerciais.",
      "Faltava visao consolidada de arrecadacao municipal.",
    ],
    solution: [
      "ETL com Python e Power Query para consolidar fontes.",
      "Modelo de dados focado em indicadores fiscais.",
      "Dashboards estrategicos com visao executiva e operacional.",
    ],
    features: [
      "Indicadores de arrecadacao por periodo e municipio.",
      "Alertas visuais para anomalias e variacoes.",
      "Painel de acompanhamento com filtros dinamicos.",
    ],
    howToRun: [
      "Conecte as fontes fiscais e configure o pipeline de ETL.",
      "Atualize o dataset e publique o relatorio no Power BI.",
      "Compartilhe o dashboard com perfis de acesso.",
    ],
    screenshots: [
      {
        src: "/projects/nucleo-comercial-dados/cover.png",
        alt: "Capa do projeto Nucleo Comercial de Dados",
      },
      {
        src: "/projects/nucleo-comercial-dados/shot-1.png",
        alt: "Dashboard do Nucleo Comercial de Dados",
      },
    ],
  },
];

export const projectSlugs = projects.map((project) => project.slug);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
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
    dataUsed: [
      "Fluxo de video da camera em tempo real.",
      "Coordenadas de gestos e pontos de mao.",
      "Eventos de interface gerados por gestos.",
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
    impact: [
      "Operacao sem toque em paines e interfaces analiticas.",
      "Mais acessibilidade e higiene em ambientes com restricao de contato.",
      "Base para comandos rapidos em dashboards ao vivo.",
    ],
    demonstrates: [
      "Integra dados em tempo real com UX aplicada para decisao.",
      "Mostra capacidade de prototipar produtos analiticos com interacao natural.",
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
    dataUsed: [
      "Mensagens de usuarios e historico de conversas.",
      "Contexto de sessao e intents classificadas.",
      "Logs de uso e metadados para analise.",
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
    impact: [
      "Respostas mais consistentes e rastreaveis em escala.",
      "Reducao do tempo de atendimento com qualidade.",
      "Base pronta para metricas de desempenho e ajustes.",
    ],
    demonstrates: [
      "Modelagem de dados conversacionais e APIs robustas.",
      "Visao de produto para automacao e suporte inteligente.",
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
    dataUsed: [
      "Sinais de sensores virtuais e entrada de camera simulada.",
      "Telemetria de velocidade, posicao e trajetoria.",
      "Dados sinteticos para treino e validacao.",
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
    impact: [
      "Testes seguros e rapidos de logica de controle.",
      "Analise visual do comportamento do modelo.",
      "Base para iteracoes de melhoria sem risco fisico.",
    ],
    demonstrates: [
      "Capacidade de trabalhar com dados visuais e simulacoes.",
      "Leitura de sinais e tomada de decisao em tempo real.",
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
    dataUsed: [
      "Dados de catalogo, usuarios e emprestimos.",
      "Status de devolucao e prazos de emprestimo.",
      "Metadados de operacoes para auditoria.",
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
    impact: [
      "Padronizacao de processos e reducao de inconsistencias.",
      "Maior rastreabilidade e confianca nos registros.",
      "Suporte a decisoes operacionais e compliance.",
    ],
    demonstrates: [
      "Modelagem de dados relacional e regras de negocio claras.",
      "Preocupacao com qualidade, rastreabilidade e integridade.",
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
    dataUsed: [
      "Bases de arrecadacao municipal e dados fiscais publicos.",
      "Indicadores de receita por periodo e municipio.",
      "Series historicas para comparacao e tendencia.",
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
    impact: [
      "Visao consolidada para gestores e equipes de arrecadacao.",
      "Identificacao rapida de anomalias e tendencias fiscais.",
      "Base para decisoes estrategicas em receita publica.",
    ],
    demonstrates: [
      "Capacidade de BI end-to-end com dados publicos e fiscais.",
      "Entrega de dashboards estrategicos voltados a decisao.",
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
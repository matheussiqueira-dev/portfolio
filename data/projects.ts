import type { Project } from "./projects.types";

export const projects: Project[] = [
  {
    slug: "touchless-web-gesture-interface",
    title: "Touchless Web Gesture Interface",
    tagline: "Interface web controlada por gestos para navegação sem toque.",
    role: "Analista/Desenvolvedor",
    stack: ["Python", "FastAPI", "OpenCV", "MediaPipe", "React"],
    repoUrl:
      "https://github.com/matheussiqueira-dev/touchless-web-gesture-interface",
    problem: [
      "Ambientes com restrição de toque exigiam controle sem contato físico.",
      "Usuários precisavam navegar dashboards sem mouse ou teclado.",
      "Baixa tolerância a latência em interação ao vivo.",
    ],
    dataUsed: [
      "Fluxo de vídeo da câmera em tempo real.",
      "Landmarks de mão e coordenadas normalizadas.",
      "Eventos de gesto mapeados para a interface.",
    ],
    solution: [
      "Detecção de mãos com MediaPipe e OpenCV.",
      "Serviço FastAPI para traduzir gestos em comandos.",
      "Frontend React com feedback visual e mapeamento de ações.",
    ],
    features: [
      "Calibração de gestos e sensibilidade.",
      "Mapa de gestos configurável por ação.",
      "Overlay visual de status e detecção.",
    ],
    highlights: [
      "Operação sem toque para painéis e interfaces analíticas.",
      "Interação mais segura e acessível em ambientes controlados.",
      "Base para comandos rápidos em dashboards ao vivo.",
    ],
    demonstrates: [
      "Visão computacional aplicada a data apps e UX.",
      "Pipeline em tempo real com foco em baixa latência.",
      "Prototipação de interfaces analíticas interativas.",
    ],
    howToRun: [
      "Pré-requisitos: Python 3.10+, Node 18 e câmera habilitada.",
      "Clone o repositório e crie um ambiente virtual Python.",
      "Instale as dependências da API e execute o servidor FastAPI.",
      "Instale as dependências do frontend e rode o app React.",
      "Acesse http://localhost:3000 e permita o uso da câmera.",
    ],
    screenshots: [
      {
        src: "/projects/touchless-web-gesture-interface/cover.webp",
        alt: "Capa do projeto Touchless Web Gesture Interface",
      },
      {
        src: "/touchless-web-gesture-interface.mp4",
        alt: "Demonstração do Touchless Web Gesture Interface em uso",
        type: "video",
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
    tagline: "API de chatbot com contexto e logs para suporte rápido.",
    role: "Analista/Desenvolvedor",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    repoUrl: "https://github.com/matheussiqueira-dev/chatbot-ia-api",
    problem: [
      "Atendimento disperso sem histórico centralizado.",
      "Respostas inconsistentes e sem rastreabilidade.",
      "Tempo de resposta alto em demandas repetitivas.",
    ],
    dataUsed: [
      "Mensagens e históricos de conversas.",
      "Intenções classificadas e contexto de sessão.",
      "Logs de uso e feedback para melhoria.",
    ],
    solution: [
      "API FastAPI com contexto por sessão.",
      "Persistência em PostgreSQL e cache com Redis.",
      "Logs estruturados para auditoria e métricas.",
    ],
    features: [
      "Contexto por sessão e fallback seguro.",
      "Registro de conversas e intents.",
      "Endpoints versionados e documentação em /docs.",
    ],
    highlights: [
      "Resposta mais consistente e rastreável em escala.",
      "Base pronta para análise de atendimento e qualidade.",
      "Infra para evolução de conteúdo e métricas.",
    ],
    demonstrates: [
      "Modelagem de dados conversacionais e APIs robustas.",
      "Observabilidade, auditoria e governança.",
      "Visão de produto para automação de suporte.",
    ],
    howToRun: [
      "Pré-requisitos: Python 3.10+, PostgreSQL e Redis.",
      "Clone o repositório e copie .env.example para .env.",
      "Configure variáveis de banco e cache.",
      "Instale dependências, rode migrações e inicie a API.",
      "Acesse http://localhost:8000/docs para testar.",
    ],
    screenshots: [
      {
        src: "/projects/chatbot-ia-api/cover.webp",
        alt: "Capa do projeto Chatbot IA API",
      },
      {
        src: "/Chatbot.mp4",
        alt: "Demonstração do Chatbot IA API",
        type: "video",
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
    tagline: "Simulador de direção autônoma com visão computacional.",
    role: "Analista/Desenvolvedor",
    stack: ["Python", "OpenCV", "TensorFlow", "NumPy"],
    repoUrl: "https://github.com/matheussiqueira-dev/self-drive-car",
    problem: [
      "Necessidade de testar modelos sem risco físico.",
      "Detecção de faixa e obstáculos em tempo real.",
      "Processamento leve para hardware limitado.",
    ],
    dataUsed: [
      "Frames de câmera simulada e sensores virtuais.",
      "Telemetria de velocidade, posição e trajetória.",
      "Dados sintéticos para treino e validação.",
    ],
    solution: [
      "Pipeline de visão com pré-processamento otimizado.",
      "Modelo treinado com dados sintéticos e reais.",
      "Simulador com feedback visual e telemetria.",
    ],
    features: [
      "Detecção de faixas com ajuste de ROI.",
      "Predição de direção e controle básico de velocidade.",
      "Overlay de inferência para debug.",
    ],
    highlights: [
      "Testes rápidos e seguros de lógica de controle.",
      "Iteração visual com telemetria em tempo real.",
      "Base para evolução de modelos de condução.",
    ],
    demonstrates: [
      "Trabalho com dados visuais e simulações.",
      "Pipeline de ML aplicado a decisões em tempo real.",
      "Experimentação com foco em validação.",
    ],
    howToRun: [
      "Pré-requisitos: Python 3.10+, OpenCV e TensorFlow.",
      "Clone o repositório e instale as dependências.",
      "Baixe os pesos do modelo (quando aplicável).",
      "Execute o script principal do simulador.",
      "Ajuste parâmetros conforme o cenário.",
    ],
    screenshots: [
      {
        src: "/projects/self-drive-car/cover.webp",
        alt: "Capa do projeto Self-Drive Car",
      },
      {
        src: "/projects/self-drive-car/demo.mp4",
        alt: "Demonstração do simulador Self-Drive Car em ação",
        type: "video",
      },
      {
        src: "/projects/self-drive-car/shot-1.webp",
        alt: "Simulação do projeto Self-Drive Car",
      },
    ],
  },
  {
    slug: "library-api-advanced",
    title: "Library API Advanced",
    tagline: "API de biblioteca com autenticação e regras de empréstimo.",
    role: "Desenvolvedor",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Fastify"],
    repoUrl: "https://github.com/matheussiqueira-dev/library-api-advanced",
    problem: [
      "Catálogo e empréstimos sem controle centralizado.",
      "Permissões e autenticação inconsistentes.",
      "Relatórios manuais dificultavam auditoria.",
    ],
    dataUsed: [
      "Catálogo de livros, usuários e empréstimos.",
      "Status de devolução e prazos.",
      "Logs de operações para auditoria.",
    ],
    solution: [
      "API REST com JWT, roles e regras de negócio.",
      "Modelagem relacional para livros, usuários e empréstimos.",
      "Logs e consultas para auditoria.",
    ],
    features: [
      "Fluxo de empréstimo e devolução com validações.",
      "Busca por categoria, autor e status.",
      "Trilha de auditoria com logs estruturados.",
    ],
    highlights: [
      "Padronização de processos e redução de inconsistências.",
      "Maior confiança e rastreabilidade nos registros.",
      "Base para compliance e relatórios operacionais.",
    ],
    demonstrates: [
      "Arquitetura backend organizada e tipada.",
      "Modelagem relacional com foco em integridade.",
      "Boas práticas de autenticação e auditoria.",
    ],
    howToRun: [
      "Pré-requisitos: Node 18+ e PostgreSQL.",
      "Clone o repositório e instale dependências.",
      "Configure o .env com banco e JWT.",
      "Rode migrações e inicie o servidor.",
      "Teste os endpoints via /docs ou Postman.",
    ],
    screenshots: [
      {
        src: "/projects/library-api-advanced/cover.webp",
        alt: "Capa do projeto Library API Advanced",
      },
      {
        src: "/library-api-advanced.png",
        alt: "Tela adicional do Library API Advanced",
      },
      {
        src: "/projects/library-api-advanced/shot-1.webp",
        alt: "Dashboard técnico do Library API Advanced",
      },
    ],
  },
  {
    slug: "nucleo-comercial-dados",
    title: "Núcleo Comercial de Dados",
    tagline: "Painéis e indicadores de performance para área comercial.",
    role: "Analista de Dados",
    stack: ["Power BI", "SQL", "Python", "DAX", "Power Query"],
    repoUrl: "https://github.com/matheussiqueira-dev/nucleo-comercial-dados",
    problem: [
      "Dados de vendas e receita dispersos em múltiplas fontes.",
      "Relatórios manuais atrasavam decisões comerciais.",
      "Falta de visão consolidada de performance por período e segmento.",
    ],
    dataUsed: [
      "Bases de vendas, receita e metas comerciais.",
      "Indicadores de performance por período e canal.",
      "Séries históricas para comparação e tendência.",
    ],
    solution: [
      "ETL com Python e Power Query para consolidar fontes.",
      "Modelo de dados orientado a KPIs comerciais.",
      "Dashboards estratégicos com visão executiva.",
    ],
    features: [
      "Indicadores por período, canal e segmento.",
      "Alertas visuais para variações relevantes.",
      "Painel com filtros dinâmicos e visão comparativa.",
    ],
    highlights: [
      "Visão consolidada para lideranças e time comercial.",
      "Detecção rápida de tendências e desvios.",
      "Base consistente para decisões comerciais.",
    ],
    demonstrates: [
      "BI end-to-end com dados de negócio.",
      "Entrega de indicadores acionáveis para lideranças.",
      "Foco em qualidade e governança de dados.",
    ],
    howToRun: [
      "Pré-requisitos: Power BI Desktop e acesso às fontes.",
      "Conecte as fontes de vendas e execute o ETL.",
      "Atualize o dataset e publique o relatório.",
      "Compartilhe o dashboard com perfis de acesso.",
      "Documente a rotina de atualização.",
    ],
    screenshots: [
      {
        src: "/projects/nucleo-comercial-dados/cover.webp",
        alt: "Capa do projeto Núcleo Comercial de Dados",
      },
      {
        src: "/projects/nucleo-comercial-dados/shot-1.webp",
        alt: "Dashboard do Núcleo Comercial de Dados",
      },
    ],
  },
  {
    slug: "face-emotions",
    title: "Face-Emotions",
    tagline: "Reconhecimento de emoções faciais em tempo real.",
    role: "Analista/Desenvolvedor",
    stack: ["Python", "OpenCV", "TensorFlow", "Keras", "NumPy"],
    repoUrl:
      "https://github.com/matheussiqueira-dev/face-emotion-recognition-realtime",
    problem: [
      "Dificuldade de medir engajamento visual em tempo real.",
      "Necessidade de identificar padrões emocionais durante interações.",
      "Processamento rápido exigido para uso com webcam.",
    ],
    dataUsed: [
      "Frames de webcam em tempo real.",
      "Recortes de face detectados no vídeo.",
      "Probabilidades de emoções inferidas pelo modelo.",
    ],
    solution: [
      "Detecção de faces com OpenCV.",
      "Modelo de classificação de emoções em TensorFlow/Keras.",
      "Pipeline de inferência em tempo real com overlay no vídeo.",
    ],
    features: [
      "Detecção de múltiplas faces em tela.",
      "Overlay com emoção predominante e confiança.",
      "Execução contínua com feedback visual imediato.",
    ],
    highlights: [
      "Reconhecimento emocional em tempo real com baixa latência.",
      "Base para análises de experiência e atenção do usuário.",
      "Pipeline claro para coleta e visualização de sinais.",
    ],
    demonstrates: [
      "Visão computacional aplicada a sinais comportamentais.",
      "Inferência de ML em streaming de vídeo.",
      "Construção de protótipos com foco em validação rápida.",
    ],
    howToRun: [
      "Pré-requisitos: Python 3.10+ e webcam habilitada.",
      "Clone o repositório e crie um ambiente virtual.",
      "Instale as dependências do projeto.",
      "Execute o script principal para iniciar a câmera.",
      "Acompanhe as emoções detectadas no overlay.",
    ],
    screenshots: [
      {
        src: "/projects/placeholder.webp",
        alt: "Capa do projeto Face-Emotions",
      },
      {
        src: "/Face-emotions.mp4",
        alt: "Demonstração do Face-Emotions em tempo real",
        type: "video",
      },
    ],
  },
];

export const projectSlugs = projects.map((project) => project.slug);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

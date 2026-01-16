export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  problem: string[];
  solution: string[];
  features: string[];
  stack: string[];
  repoUrl: string;
  demoUrl?: string;
  screenshots: { src: string; alt: string }[];
  howToRun: string[];
  featured: boolean;
  year?: string;
};

export const projects: Project[] = [
  {
    slug: "touchless-web-gesture-interface",
    name: "Touchless Web Gesture Interface",
    tagline: "Interface web controlada por gestos para interacao sem toque.",
    description:
      "Projeto que usa visao computacional para interpretar gestos e permitir navegacao em interfaces web sem depender de mouse ou teclado. A experiencia foca em acessibilidade, fluidez e resposta rapida a movimentos.",
    highlights: [
      "Navegacao por gestos reconhecida em tempo real",
      "Feedback visual para cada comando",
      "Arquitetura simples para extensao de novos gestos",
    ],
    problem: [
      "Interacao manual limitada em ambientes com restricoes de toque",
      "Pouca acessibilidade em interfaces tradicionais",
      "Necessidade de interacao fluida sem dispositivos fisicos",
    ],
    solution: [
      "Reconhecimento de gestos via camera e processamento no navegador",
      "Mapeamento claro de gestos para acoes de UI",
      "Camada de feedback visual para reduzir erros",
    ],
    features: [
      "Deteccao de gestos em tempo real",
      "Indicador visual de gesto ativo",
      "Modo de calibracao rapido",
      "Layouts responsivos para diferentes telas",
    ],
    stack: ["JavaScript", "HTML", "CSS", "WebRTC", "Canvas"],
    repoUrl:
      "https://github.com/matheussiqueira-dev/touchless-web-gesture-interface",
    screenshots: [
      {
        src: "/projects/touchless-web-gesture-interface/cover.png",
        alt: "Tela do Touchless Web Gesture Interface",
      },
    ],
    howToRun: [
      "Clone o repositorio: git clone https://github.com/matheussiqueira-dev/touchless-web-gesture-interface",
      "Abra o index.html no navegador ou use um servidor local",
      "Permita o acesso a camera para ativar os gestos",
    ],
    featured: true,
    year: "2024",
  },
  {
    slug: "chatbot-ia-api",
    name: "Chatbot IA API",
    tagline: "API de chatbot com IA pronta para integrar em produtos.",
    description:
      "Backend em FastAPI que organiza conversas, contexto e respostas de IA via endpoints seguros. Pensado para facilitar integracoes com web apps, CRMs e canais de atendimento.",
    highlights: [
      "Fluxo de conversa com contexto persistido",
      "Endpoints claros para integrar em front-ends",
      "Arquitetura modular para trocar provedores de IA",
    ],
    problem: [
      "Equipes precisam integrar IA sem construir tudo do zero",
      "Falta de organizacao entre mensagens e historico",
      "Dificuldade para escalar respostas automatizadas",
    ],
    solution: [
      "API REST padronizada com rotas de conversas",
      "Modelo de dados para manter contexto e historico",
      "Camada de servicos para encapsular provedores",
    ],
    features: [
      "Criacao de sessoes e mensagens",
      "Registro de historico por usuario",
      "Tratamento de erros e respostas consistentes",
      "Documentacao automatica via OpenAPI",
    ],
    stack: ["Python", "FastAPI", "Pydantic", "Uvicorn"],
    repoUrl: "https://github.com/matheussiqueira-dev/chatbot-ia-api",
    screenshots: [
      {
        src: "/projects/chatbot-ia-api/cover.png",
        alt: "Tela do projeto Chatbot IA API",
      },
    ],
    howToRun: [
      "Clone o repositorio e entre na pasta",
      "Crie um ambiente virtual e instale: pip install -r requirements.txt",
      "Inicie a API: uvicorn main:app --reload",
    ],
    featured: true,
    year: "2025",
  },
  {
    slug: "self-drive-car",
    name: "Self-Drive-Car",
    tagline: "Simulador em JavaScript de carro autonomo com rede neural.",
    description:
      "Projeto de simulacao 2D que demonstra sensores virtuais, aprendizado basico e tomada de decisao para direcao. Ideal para demonstrar conceitos de IA e algoritmos em um ambiente visual.",
    highlights: [
      "Simulacao visual em tempo real",
      "Rede neural ajustavel no navegador",
      "Sensores e colisao modelados em 2D",
    ],
    problem: [
      "Aprendizado de IA dificil de visualizar",
      "Poucos exemplos didaticos para redes neurais",
      "Necessidade de feedback imediato sobre performance",
    ],
    solution: [
      "Ambiente 2D com sensores e fisica simplificada",
      "Interface para ajustar parametros da rede",
      "Visualizacao dos resultados em tempo real",
    ],
    features: [
      "Sensores com raios de deteccao",
      "Treinamento com variacoes de parametros",
      "Canvas para exibicao da pista",
      "Controle automatico de direcao",
    ],
    stack: ["JavaScript", "HTML", "Canvas"],
    repoUrl: "https://github.com/matheussiqueira-dev/Self-Drive-Car",
    screenshots: [
      {
        src: "/projects/self-drive-car/cover.png",
        alt: "Tela do projeto Self-Drive-Car",
      },
    ],
    howToRun: [
      "Clone o repositorio",
      "Abra o index.html no navegador",
      "Opcional: rode um servidor local para melhor desempenho",
    ],
    featured: true,
    year: "2024",
  },
  {
    slug: "library-api-advanced",
    name: "Library API Advanced",
    tagline: "API completa para gestao de bibliotecas com regras avancadas.",
    description:
      "Servico em FastAPI para administrar acervo, usuarios e emprestimos com regras de negocio claras. Focado em organizacao de dados, validacoes e consistencia.",
    highlights: [
      "CRUD completo de livros, usuarios e emprestimos",
      "Validacoes para disponibilidade e prazos",
      "Documentacao pronta para integracao",
    ],
    problem: [
      "Processos manuais dificultam o controle de emprestimos",
      "Falta de padronizacao em cadastros",
      "Necessidade de regras claras para devolucoes",
    ],
    solution: [
      "Endpoints organizados por entidades principais",
      "Validacao de status e disponibilidade",
      "Camadas separadas para regras de negocio",
    ],
    features: [
      "Cadastro de livros e autores",
      "Fluxo de emprestimo e devolucao",
      "Paginacao e filtros por status",
      "Respostas padronizadas em JSON",
    ],
    stack: ["Python", "FastAPI", "SQLAlchemy", "SQLite"],
    repoUrl: "https://github.com/matheussiqueira-dev/library-api-advanced",
    screenshots: [
      {
        src: "/projects/library-api-advanced/cover.png",
        alt: "Tela do projeto Library API Advanced",
      },
    ],
    howToRun: [
      "Clone o repositorio",
      "Instale as dependencias: pip install -r requirements.txt",
      "Inicie a API: uvicorn main:app --reload",
    ],
    featured: false,
    year: "2025",
  },
  {
    slug: "nucleo-comercial-dados",
    name: "Nucleo Comercial Dados",
    tagline: "API FastAPI para centralizar dados comerciais e indicadores.",
    description:
      "Projeto para organizar informacoes comerciais, consolidar indicadores e servir dados via endpoints consistentes. Ideal para conectar sistemas internos e dashboards.",
    highlights: [
      "Estrutura de dados orientada a indicadores",
      "Endpoints pensados para dashboards",
      "Base preparada para novas fontes",
    ],
    problem: [
      "Dados comerciais dispersos em diferentes planilhas",
      "Dificuldade em gerar indicadores confiaveis",
      "Falta de padrao para consumo por sistemas",
    ],
    solution: [
      "Modelo de dados unificado para indicadores",
      "API para consulta rapida e filtrada",
      "Validacao de entradas para evitar inconsistencias",
    ],
    features: [
      "Consulta por periodo e unidade",
      "Indicadores consolidados em endpoints dedicados",
      "Filtros por categoria e canal",
      "Camada de logs para auditoria",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Pydantic"],
    repoUrl: "https://github.com/matheussiqueira-dev/nucleo-comercial-dados",
    screenshots: [
      {
        src: "/projects/nucleo-comercial-dados/cover.png",
        alt: "Tela do projeto Nucleo Comercial Dados",
      },
    ],
    howToRun: [
      "Clone o repositorio",
      "Configure as variaveis de ambiente",
      "Inicie a API: uvicorn main:app --reload",
    ],
    featured: false,
    year: "2025",
  },
];

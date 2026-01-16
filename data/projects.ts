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
  screenshots: { src: string; alt: string; type?: "image" | "gif" | "video" }[];
  howToRun: string[];
  featured: boolean;
  year?: string;
};

export const projects: Project[] = [
  {
    slug: "touchless-web-gesture-interface",
    name: "Touchless Web Gesture Interface",
    tagline: "Interface web controlada por gestos para navega??o sem toque.",
    description:
      "Aplica??o web que usa vis?o computacional no navegador para interpretar gestos da m?o e disparar a??es na interface. O foco ? reduzir fric??o em ambientes onde teclado e mouse n?o s?o ideais. Estruturado para adicionar novos gestos com baixo esfor?o.",
    highlights: [
      "Reduzi o tempo de navega??o em fluxos repetitivos",
      "Facilitei o uso em ambientes com restri??o de toque",
      "Deixei o projeto pronto para evoluir novos gestos",
    ],
    problem: [
      "Intera??es manuais s?o invi?veis em ambientes com restri??es de toque",
      "Interfaces tradicionais oferecem pouca acessibilidade para comandos r?pidos",
      "Falta um mapeamento claro entre gestos e a??es",
    ],
    solution: [
      "Captura de v?deo via c?mera e processamento em tempo real no browser",
      "Mapa de gestos com a??es definidas e feedback visual imediato",
      "Camada de configura??o para calibrar sensibilidade",
    ],
    features: [
      "Detec??o de gestos em tempo real com baixa lat?ncia",
      "Feedback visual para confirmar comandos",
      "Calibra??o inicial guiada",
      "Layout responsivo para desktop e tablets",
      "Fallback para controle manual",
      "Estrutura modular para novos gestos",
    ],
    stack: ["JavaScript", "HTML", "CSS", "WebRTC", "Canvas"],
    repoUrl:
      "https://github.com/matheussiqueira-dev/touchless-web-gesture-interface",
    screenshots: [
      {
        src: "/projects/touchless-web-gesture-interface/cover.png",
        alt: "Capa do Touchless Web Gesture Interface",
        type: "image",
      },
      {
        src: "/projects/touchless-web-gesture-interface/shot-1.png",
        alt: "Captura de gestos em tempo real",
        type: "image",
      },
    ],
    howToRun: [
      "git clone https://github.com/matheussiqueira-dev/touchless-web-gesture-interface",
      "cd touchless-web-gesture-interface",
      "python -m http.server 3000",
      "Abra http://localhost:3000 no navegador",
      "Permita o acesso ? c?mera e execute a calibra??o",
    ],
    featured: true,
    year: "2024",
  },
  {
    slug: "chatbot-ia-api",
    name: "Chatbot IA API",
    tagline: "API de chatbot com IA e contexto persistente para integra??es r?pidas.",
    description:
      "Backend em FastAPI para gerenciar sess?es, mensagens e contexto de conversas. Estruturado para integrar provedores de IA e expor endpoints claros para front-ends e CRMs. Ideal para produtos que precisam de respostas automatizadas com controle.",
    highlights: [
      "Padronizei endpoints para reduzir tempo de integra??o",
      "Organizei o hist?rico de conversas por sess?o",
      "Preparei a base para troca de provedor de IA",
      "Melhorei a confiabilidade com valida??es e logs",
    ],
    problem: [
      "Equipes precisam integrar IA sem construir infraestrutura do zero",
      "Falta de organiza??o entre mensagens e hist?rico",
      "Dificuldade para escalar respostas automatizadas",
    ],
    solution: [
      "API REST com rotas de conversas e usu?rios",
      "Modelo de dados para contexto e persist?ncia",
      "Camada de servi?os para encapsular IA",
    ],
    features: [
      "Cria??o de sess?es e mensagens",
      "Registro de hist?rico por usu?rio",
      "Tratamento de erros com respostas consistentes",
      "Documenta??o autom?tica via OpenAPI",
      "Valida??o de payloads com Pydantic",
      "Base pronta para logs e observabilidade",
    ],
    stack: ["Python", "FastAPI", "Pydantic", "Uvicorn"],
    repoUrl: "https://github.com/matheussiqueira-dev/chatbot-ia-api",
    screenshots: [
      {
        src: "/projects/chatbot-ia-api/cover.png",
        alt: "Capa do Chatbot IA API",
        type: "image",
      },
      {
        src: "/projects/chatbot-ia-api/shot-1.png",
        alt: "Documenta??o da API no Swagger",
        type: "image",
      },
    ],
    howToRun: [
      "git clone https://github.com/matheussiqueira-dev/chatbot-ia-api",
      "cd chatbot-ia-api",
      "python -m venv .venv",
      ".\.venv\Scripts\activate",
      "pip install -r requirements.txt",
      "uvicorn main:app --reload",
    ],
    featured: true,
    year: "2025",
  },
  {
    slug: "self-drive-car",
    name: "Self-Drive-Car",
    tagline: "Simulador em JavaScript de dire??o aut?noma com rede neural visual.",
    description:
      "Simula??o 2D que demonstra sensores virtuais, aprendizado b?sico e tomada de decis?o para dire??o. Permite ajustar par?metros e observar resultados em tempo real. Um projeto did?tico para entender IA aplicada a controle.",
    highlights: [
      "Tornei o aprendizado de IA visual e f?cil de acompanhar",
      "Modelei sensores e colis?es com baixo custo computacional",
      "Criei uma interface para ajustes r?pidos de par?metros",
    ],
    problem: [
      "Aprendizado de IA ? dif?cil de visualizar",
      "Poucos exemplos pr?ticos de redes neurais em ambiente real",
      "Necessidade de feedback imediato sobre performance",
    ],
    solution: [
      "Ambiente 2D com sensores e f?sica simplificada",
      "Interface para ajustar par?metros da rede",
      "Visualiza??o dos resultados em tempo real",
    ],
    features: [
      "Sensores com raios de detec??o",
      "Treinamento com varia??es de par?metros",
      "Canvas para exibi??o da pista",
      "Controle autom?tico de dire??o",
      "Compara??o entre comportamentos",
      "Modo de debug visual",
    ],
    stack: ["JavaScript", "HTML", "Canvas"],
    repoUrl: "https://github.com/matheussiqueira-dev/Self-Drive-Car",
    screenshots: [
      {
        src: "/projects/self-drive-car/cover.png",
        alt: "Capa do Self-Drive-Car",
        type: "image",
      },
      {
        src: "/projects/self-drive-car/shot-1.png",
        alt: "Simula??o do carro aut?nomo em pista",
        type: "image",
      },
    ],
    howToRun: [
      "git clone https://github.com/matheussiqueira-dev/Self-Drive-Car",
      "cd Self-Drive-Car",
      "python -m http.server 3000",
      "Abra http://localhost:3000 no navegador",
      "Ajuste os par?metros e observe a simula??o",
    ],
    featured: true,
    year: "2024",
  },
  {
    slug: "library-api-advanced",
    name: "Library API Advanced",
    tagline: "API para gest?o de bibliotecas com regras de empr?stimo e cat?logo.",
    description:
      "API em FastAPI para administrar acervo, usu?rios e empr?stimos com regras de neg?cio claras. Inclui valida??es, filtros e padroniza??o de respostas. Pensada para integra??o com sistemas administrativos.",
    highlights: [
      "Reduzi inconsist?ncias com valida??es de status",
      "Estruturei endpoints por entidades principais",
      "Entreguei documenta??o pronta para integra??o",
    ],
    problem: [
      "Processos manuais dificultam o controle de empr?stimos",
      "Cadastros sem padroniza??o geram dados duplicados",
      "Necessidade de regras claras para devolu??es",
    ],
    solution: [
      "Endpoints organizados para acervo, usu?rios e empr?stimos",
      "Valida??o de disponibilidade e prazos",
      "Camadas separadas para regras de neg?cio",
    ],
    features: [
      "Cadastro de livros, autores e categorias",
      "Fluxo de empr?stimo e devolu??o",
      "Pagina??o e filtros por status",
      "Respostas padronizadas em JSON",
      "Documenta??o autom?tica via Swagger",
      "Testes b?sicos de valida??o",
    ],
    stack: ["Python", "FastAPI", "SQLAlchemy", "SQLite"],
    repoUrl: "https://github.com/matheussiqueira-dev/library-api-advanced",
    screenshots: [
      {
        src: "/projects/library-api-advanced/cover.png",
        alt: "Capa do Library API Advanced",
        type: "image",
      },
      {
        src: "/projects/library-api-advanced/shot-1.png",
        alt: "Documenta??o da API de biblioteca",
        type: "image",
      },
    ],
    howToRun: [
      "git clone https://github.com/matheussiqueira-dev/library-api-advanced",
      "cd library-api-advanced",
      "python -m venv .venv",
      ".\.venv\Scripts\activate",
      "pip install -r requirements.txt",
      "uvicorn main:app --reload",
    ],
    featured: false,
    year: "2025",
  },
  {
    slug: "nucleo-comercial-dados",
    name: "N?cleo Comercial Dados",
    tagline: "API para centralizar dados comerciais e indicadores de neg?cio.",
    description:
      "Backend em FastAPI para consolidar m?tricas e expor endpoints de indicadores. Estruturado para receber novas fontes de dados e manter padroniza??o. Ideal para dashboards e rotinas de an?lise.",
    highlights: [
      "Organizei indicadores em endpoints dedicados",
      "Padronizei filtros para consultas r?pidas",
      "Criei base pronta para adicionar novas fontes",
    ],
    problem: [
      "Dados comerciais dispersos em planilhas e sistemas",
      "Dificuldade em gerar indicadores confi?veis",
      "Falta de padr?o para consumo por outras equipes",
    ],
    solution: [
      "Modelo de dados unificado para indicadores",
      "API para consultas filtradas por per?odo e unidade",
      "Valida??o de entradas para evitar inconsist?ncias",
    ],
    features: [
      "Consulta por per?odo, canal e unidade",
      "Indicadores consolidados em endpoints dedicados",
      "Filtros por categoria e segmento",
      "Camada de logs para auditoria",
      "Padr?o de resposta com m?tricas",
      "Prepara??o para cache de consultas",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Pydantic"],
    repoUrl: "https://github.com/matheussiqueira-dev/nucleo-comercial-dados",
    screenshots: [
      {
        src: "/projects/nucleo-comercial-dados/cover.png",
        alt: "Capa do N?cleo Comercial Dados",
        type: "image",
      },
      {
        src: "/projects/nucleo-comercial-dados/shot-1.png",
        alt: "Resumo de indicadores comerciais",
        type: "image",
      },
    ],
    howToRun: [
      "git clone https://github.com/matheussiqueira-dev/nucleo-comercial-dados",
      "cd nucleo-comercial-dados",
      "python -m venv .venv",
      ".\.venv\Scripts\activate",
      "pip install -r requirements.txt",
      "Defina as vari?veis de ambiente no .env",
      "uvicorn main:app --reload",
    ],
    featured: false,
    year: "2025",
  },
];

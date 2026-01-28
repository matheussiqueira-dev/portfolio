import type { Project } from "./projects.types";

export const projects: Project[] = [
  {
    slug: "touchless-web-gesture-interface",
    title: "Touchless Web Gesture Interface",
    headline: "Touchless Web Gesture Interface | Visão computacional para dashboards",
    tagline: "Interface web touchless com visão computacional para navegar dashboards e data apps.",
    role: "Analista/Desenvolvedor",
    stack: ["Python", "FastAPI", "OpenCV", "MediaPipe", "React"],
    repoUrl:
      "https://github.com/matheussiqueira-dev/touchless-web-gesture-interface",
    demo: {
      kind: "video",
      src: "/touchless-web-gesture-interface.mp4",
      poster: "/projects/touchless-web-gesture-interface/cover.svg",
      caption: "Demonstração rápida da interface touchless em uso.",
    },
    intro: {
      title: "Touchless Web Gesture Interface – Controle Web por Gestos em Tempo Real",
      paragraphs: [
        "A Touchless Web Gesture Interface é uma aplicação web inovadora que permite interagir com interfaces digitais sem tocar no mouse ou no teclado, utilizando apenas gestos das mãos capturados pela webcam, diretamente no navegador.",
        "Este projeto foi desenvolvido com foco em inovação, experiência do usuário e aplicação prática de visão computacional, explorando como tecnologias modernas podem transformar a forma como pessoas interagem com sistemas web.",
        "Mais do que uma prova de conceito, este projeto demonstra habilidades reais em desenvolvimento frontend moderno, arquitetura de aplicações, processamento de vídeo em tempo real e integração de bibliotecas avançadas de visão computacional.",
      ],
      sections: [
        {
          title: "O que é o Touchless Web Gesture Interface?",
          paragraphs: [
            "O Touchless Web Gesture Interface é uma interface web controlada por gestos, onde os movimentos da mão do usuário são reconhecidos em tempo real e convertidos em ações dentro da aplicação.",
            "A solução utiliza Computer Vision no browser, eliminando a necessidade de hardware adicional ou softwares externos. Basta uma webcam e um navegador moderno.",
            "O objetivo principal do projeto é mostrar como a web pode ser usada como plataforma para soluções interativas avançadas, aplicáveis em áreas como:",
          ],
          items: [
            "Interfaces acessíveis",
            "Experiências imersivas",
            "Sistemas touchless",
            "Protótipos para produtos digitais inovadores",
          ],
        },
        {
          title: "Principais Funcionalidades",
          paragraphs: [
            "A aplicação oferece uma série de funcionalidades que demonstram tanto domínio técnico quanto preocupação com usabilidade:",
          ],
          items: [
            "Rastreamento de mãos em tempo real usando MediaPipe Hands",
            "Reconhecimento de gestos naturais, como pinça e movimentos contínuos",
            "Cursor virtual controlado pela mão, simulando interações tradicionais",
            "Interação com elementos visuais sem qualquer contato físico",
            "Atualização fluida e responsiva, mesmo com processamento em tempo real",
          ],
          footer: [
            "Essas funcionalidades mostram a viabilidade de interfaces touchless em ambientes web modernos, mantendo boa performance e experiência do usuário.",
          ],
        },
        {
          title: "Tecnologias Utilizadas no Projeto",
          paragraphs: [
            "Este projeto foi construído utilizando uma stack moderna e amplamente adotada no mercado de tecnologia:",
          ],
          subSections: [
            {
              title: "Frontend e Arquitetura",
              items: [
                "React para construção de interfaces reativas e componentizadas",
                "TypeScript garantindo tipagem forte, organização e escalabilidade do código",
                "Vite como bundler moderno, proporcionando carregamento rápido e DX eficiente",
              ],
            },
            {
              title: "Visão Computacional",
              items: [
                "Google MediaPipe Hands para detecção e rastreamento das mãos",
                "Processamento de vídeo diretamente no navegador",
                "Conversão de landmarks da mão em ações interativas",
              ],
            },
            {
              title: "Estilo e Interface",
              items: [
                "CSS moderno com foco em responsividade",
                "Interface limpa e intuitiva",
                "Conceitos de UX experimental, explorando novas formas de interação",
              ],
            },
          ],
          footer: [
            "Essa combinação tecnológica reflete práticas reais do mercado e demonstra capacidade de trabalhar com projetos complexos e de alta performance.",
          ],
        },
        {
          title: "Por que este projeto é relevante?",
          paragraphs: [
            "O Touchless Web Gesture Interface vai além de um simples experimento técnico.",
          ],
          subSections: [
            {
              title: "Ele demonstra competências essenciais para áreas como:",
              items: [
                "Desenvolvimento Web Avançado",
                "Análise de dados de movimento e eventos",
                "Integração entre frontend e processamento em tempo real",
                "Criação de soluções inovadoras centradas no usuário",
              ],
            },
            {
              title: "Projetos como este são especialmente relevantes em cenários onde:",
              items: [
                "Acessibilidade é prioridade",
                "Interfaces sem contato são desejáveis",
                "Experiência do usuário precisa ir além do convencional",
              ],
            },
          ],
          footer: [
            "Ele também evidencia a capacidade de pesquisar, implementar e adaptar tecnologias emergentes para resolver problemas reais.",
          ],
        },
        {
          title: "Arquitetura e Organização do Código",
          paragraphs: [
            "O código do projeto foi estruturado seguindo boas práticas de desenvolvimento:",
          ],
          items: [
            "Separação clara de responsabilidades",
            "Componentes reutilizáveis",
            "Tipagem forte com TypeScript",
            "Facilidade de manutenção e evolução do projeto",
          ],
          footer: [
            "Essa organização facilita tanto a escalabilidade quanto o entendimento por outros desenvolvedores, algo essencial em ambientes colaborativos e profissionais.",
          ],
        },
        {
          title: "Aplicações Práticas do Touchless Web Gesture Interface",
          paragraphs: [
            "Este tipo de solução pode ser aplicada em diversos contextos, como:",
          ],
          items: [
            "Dashboards interativos controlados por gestos",
            "Ambientes corporativos e apresentações sem contato físico",
            "Experiências educacionais e demonstrativas",
            "Protótipos de produtos digitais inovadores",
            "Interfaces acessíveis para pessoas com mobilidade reduzida",
          ],
          footer: [
            "Tudo isso reforça o potencial da aplicação no ecossistema de tecnologia, dados e desenvolvimento web.",
          ],
        },
        {
          title: "Código Fonte e Demonstração",
          paragraphs: [
            "O código-fonte completo está disponível no GitHub, permitindo análise detalhada da implementação, arquitetura e decisões técnicas tomadas durante o desenvolvimento.",
          ],
          footer: ["👉 Repositório:"],
          link: {
            label: "github.com/matheussiqueira-dev/touchless-web-gesture-interface",
            href: "https://github.com/matheussiqueira-dev/touchless-web-gesture-interface",
          },
        },
        {
          title: "Conclusão",
          paragraphs: [
            "O Touchless Web Gesture Interface é um projeto que une tecnologia moderna, criatividade e aplicação prática, mostrando como a web pode ir além das interações tradicionais.",
            "Ele representa uma abordagem inovadora para desenvolvimento web, reforçando habilidades em React, TypeScript, visão computacional, arquitetura frontend e experiência do usuário — competências altamente valorizadas no mercado de tecnologia atual.",
            "Se você busca exemplos reais de inovação aplicada à web, este projeto é uma demonstração clara do potencial de interfaces touchless no navegador.",
          ],
        },
      ],
      video: {
        src: "/touchless-web-gesture-interface.mp4",
        poster: "/projects/touchless-web-gesture-interface/cover.svg",
        caption: "Demonstração do Touchless Web Gesture Interface em uso.",
      },
    },
    context:
      "Em ambientes com restrição de toque (laboratórios, salas de controle e operações industriais), era necessário navegar dashboards de BI e sistemas analíticos sem mouse ou teclado, mantendo baixa latência e alta precisão de comandos.",
    problem: [
      "Interações com mouse e teclado não eram viáveis em cenários com restrição sanitária ou segurança.",
      "Usuários precisavam operar dashboards de BI durante apresentações e operações ao vivo.",
      "Latência alta e ruído de detecção comprometiam a experiência e a adoção.",
      "Era preciso mapear gestos para ações de forma configurável e confiável.",
    ],
    dataUsed: [
      "Fluxo de vídeo da câmera em tempo real (frames).",
      "Landmarks de mão e vetores de posição normalizados.",
      "Eventos de gesto, timestamps e estado da interface.",
      "Parâmetros de calibração por usuário e ambiente.",
    ],
    solution: [
      "Pipeline de visão computacional em Python com MediaPipe e OpenCV para rastrear mãos.",
      "Serviço FastAPI expondo uma API REST para interpretar gestos e enviar comandos.",
      "Normalização, debounce e thresholds para reduzir ruído e aumentar precisão.",
      "Frontend React.js com feedback visual e mapeamento de ações por contexto.",
    ],
    features: [
      "Calibração de gestos e ajuste de sensibilidade por usuário.",
      "Mapa de gestos configurável para ações de navegação e controle.",
      "Overlay visual com status de detecção e confirmação de comandos.",
      "Arquitetura modular para integrar com dashboards e data apps.",
    ],
    highlights: [
      "Navegação hands-free em dashboards e sistemas analíticos com baixa latência.",
      "Redução de contato físico e aumento de acessibilidade em ambientes controlados.",
      "Interação mais fluida em apresentações e operações ao vivo.",
      "Base reutilizável para comandos rápidos e automação de interface.",
    ],
    demonstrates: [
      "Visão computacional aplicada a UX e interfaces de dados.",
      "Integração full stack com APIs REST e eventos em tempo real.",
      "Algoritmos de visão computacional e estruturas de dados para mapeamento de gestos.",
      "Prototipação rápida de soluções interativas para BI.",
    ],
    techSummary:
      "Python com OpenCV e MediaPipe para visão computacional, FastAPI para API REST de gestos e React.js no front-end com feedback em tempo real.",
    longDescription: [
      "Este projeto nasceu para resolver um problema prático em ambientes onde o toque é limitado: salas de controle, operações industriais e apresentações de BI. O objetivo foi criar uma camada de interação que permitisse navegar dashboards sem mouse ou teclado, mantendo precisão, baixa latência e aprendizado rápido. A solução foi desenhada como um ecossistema leve, com captura de vídeo na borda, interpretação de gestos em tempo real e uma UI web que responde com feedback visual imediato. O foco sempre foi reduzir fricção e tornar a tecnologia utilizável por equipes não técnicas.",
      "A arquitetura combina um pipeline de visão computacional em Python com MediaPipe/OpenCV e uma API FastAPI que normaliza sinais, aplica thresholds e faz debounce para evitar falsos positivos. Cada gesto é transformado em comandos semânticos (avançar, voltar, focar, abrir) que podem ser mapeados por contexto, permitindo integrar com diferentes dashboards. No front-end React, a camada de apresentação exibe estado, confirmações e dicas visuais para reduzir incerteza do usuário. Também foram previstos cenários de iluminação variável e distância da câmera, com calibração guiada para aumentar a robustez.",
      "Além de provar a viabilidade técnica, o projeto demonstra como interfaces naturais podem ampliar acessibilidade e eficiência em rotinas analíticas. A integração REST simplifica o acoplamento com sistemas existentes, e o design modular abre espaço para novos gestos, atalhos e automações. Em termos de aprendizado, consolidou práticas de otimização de latência, tratamento de ruído e desenho de feedback para interação em tempo real. É um case que conecta dados, UX e engenharia, com potencial claro para ambientes corporativos que dependem de dashboards críticos.",
      "Para validar, foram feitos testes com diferentes usuários e cenários de ruído, medindo estabilidade dos gestos e tempo de resposta percebido. Mesmo sem hardware especializado, o fluxo manteve interações consistentes, o que reforça a possibilidade de implantação em ambientes com infraestrutura simples. Os próximos passos incluem adicionar reconhecimento de gestos compostos, personalização por perfil e integração com eventos do Power BI via API. Assim, o projeto evolui de um protótipo funcional para uma solução aplicável em operações reais.",
    ],
    conclusion: [
      "Consolidei boas práticas de performance (debounce, normalização e calibração).",
      "Apliquei integração front-end/back-end orientada a eventos e latência.",
      "Validei uma solução de visão computacional com foco em usabilidade e dados.",
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
        src: "/projects/touchless-web-gesture-interface/cover.svg",
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
    seo: {
      title: "Touchless Web Gesture Interface | Interface sem toque para dashboards",
      description:
        "Case de visão computacional com Python, OpenCV, MediaPipe e FastAPI para controlar dashboards por gestos, integrando front-end React e API REST com baixa latência.",
    },
  },
  {
    slug: "chatbot-ia-api",
    title: "Chatbot IA API",
    headline: "Chatbot IA API | Backend de suporte com contexto e logs",
    tagline: "API de chatbot com contexto, logs e dados para automação de suporte.",
    role: "Analista/Desenvolvedor",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    repoUrl: "https://github.com/matheussiqueira-dev/chatbot-ia-api",
    demo: {
      kind: "internal",
      path: "/demos/chatbot-ia-api",
      title: "Abrir demo interativa",
      description:
        "Playground simples para simular requests e visualizar respostas mock.",
    },
    context:
      "Operações de atendimento precisavam padronizar respostas e gerar dados confiáveis para análise de qualidade, reduzindo o tempo de resposta em demandas recorrentes.",
    problem: [
      "Atendimento disperso sem histórico centralizado e rastreável.",
      "Respostas inconsistentes dificultavam governança e melhoria contínua.",
      "Tempo de resposta alto em dúvidas repetitivas.",
      "Falta de métricas consolidadas para BI e tomada de decisão.",
    ],
    dataUsed: [
      "Mensagens e históricos de conversas por sessão.",
      "Intenções classificadas e contexto de atendimento.",
      "Feedback de usuários e métricas de uso.",
      "Logs estruturados para auditoria e análise em SQL.",
    ],
    solution: [
      "API REST em FastAPI com contexto por sessão e fallback seguro.",
      "Persistência em PostgreSQL para histórico e auditoria.",
      "Cache em Redis para reduzir latência em respostas recorrentes.",
      "Logs estruturados e versionamento de endpoints com documentação OpenAPI.",
    ],
    features: [
      "Contexto por sessão com expiração configurável.",
      "Registro de conversas, intents e feedback.",
      "Endpoints versionados e /docs para validação rápida.",
      "Camada de observabilidade para métricas e qualidade.",
    ],
    highlights: [
      "Respostas mais consistentes e rastreáveis em escala.",
      "Base pronta para análises de atendimento e BI.",
      "Redução de tempo em demandas repetitivas com cache.",
      "Infra para evolução de conteúdo e métricas de qualidade.",
    ],
    demonstrates: [
      "Modelagem de dados conversacionais e APIs robustas.",
      "Uso de banco SQL, cache e observabilidade.",
      "Automação de suporte com visão de produto e governança.",
      "Arquitetura backend escalável e monitorável.",
    ],
    techSummary:
      "FastAPI com PostgreSQL e Redis para API REST, cache e logs estruturados, viabilizando métricas e análises em SQL.",
    longDescription: [
      "Este case foi pensado para padronizar atendimento e criar uma base de dados confiável para análise de qualidade. Em operações com alto volume de demandas repetitivas, respostas inconsistentes geram retrabalho e diminuem a confiança do time. A proposta foi construir um backend de chatbot que mantivesse contexto por sessão, oferecesse respostas rápidas e registrasse tudo de forma auditável. A API foi desenhada para ser plugável em canais diferentes (web, WhatsApp, sistemas internos) e para servir como fonte de métricas para BI.",
      "Do ponto de vista técnico, a solução utiliza FastAPI para endpoints REST, PostgreSQL para persistir histórico e Redis para cache e contexto temporário. A modelagem privilegia rastreabilidade: cada mensagem gera logs estruturados com timestamps, intenção, resposta e status. Isso habilita indicadores como tempo médio de resposta, taxa de resolução e tópicos mais frequentes. O stack foi organizado com versionamento de rotas, documentação automática e camadas de validação para garantir consistência de dados desde a entrada até o armazenamento.",
      "Além do ganho operacional, o projeto fortalece governança e aprendizagem contínua. Com dados consistentes, é possível revisar scripts, ajustar fluxos e melhorar a base de conhecimento sem “achismos”. O desenho da API também facilita a evolução para integrações com modelos de IA, filas de processamento ou painel analítico dedicado. O resultado é um serviço que reduz fricção no atendimento, gera insights acionáveis e demonstra boas práticas de arquitetura backend orientada a dados.",
      "Outro ponto importante foi garantir que o sistema suportasse crescimento sem perder clareza operacional. Por isso, o logging foi pensado desde o início para alimentar painéis e auditorias, e o cache foi ajustado para preservar consistência sem comprometer o contexto. Há espaço para evoluir com classificação automática de intents, integração com modelos generativos e roteamento inteligente para agentes humanos. Essas extensões mantêm a base técnica sólida e preservam a rastreabilidade exigida por times de qualidade e compliance.",
    ],
    conclusion: [
      "Apliquei boas práticas de API REST, versionamento e documentação.",
      "Estruturei dados para auditoria e inteligência de atendimento.",
      "Garanti escalabilidade com cache e monitoramento.",
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
        src: "/projects/chatbot-ia-api/cover.svg",
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
    seo: {
      title: "Chatbot IA API | API REST com contexto, logs e dados",
      description:
        "API de chatbot em FastAPI com PostgreSQL e Redis, contexto por sessão e logs estruturados para automação de suporte e analytics de atendimento.",
    },
  },
  {
    slug: "self-drive-car",
    title: "Self-Drive Car",
    headline: "Self-Drive Car | Machine Learning e visão computacional",
    tagline: "Simulador de direção autônoma com visão computacional e ML.",
    role: "Analista/Desenvolvedor",
    stack: ["Python", "OpenCV", "TensorFlow", "NumPy"],
    repoUrl: "https://github.com/matheussiqueira-dev/self-drive-car",
    demo: {
      kind: "video",
      src: "/projects/self-drive-car/demo.mp4",
      poster: "/projects/self-drive-car/cover.svg",
      caption: "Simulador de direção autônoma em execução.",
    },
    context:
      "Projeto de data science para treinar e validar modelos de condução autônoma em ambiente seguro, com foco em visão computacional e decisões em tempo real.",
    problem: [
      "Testar modelos em ambiente físico era caro e arriscado.",
      "Detecção de faixas e obstáculos exigia processamento em tempo real.",
      "Hardware limitado pedia pipeline leve e otimizado.",
      "Necessidade de telemetria para análise e ajuste de modelo.",
    ],
    dataUsed: [
      "Frames de câmera simulada e sensores virtuais.",
      "Telemetria de velocidade, posição e trajetória.",
      "Dados sintéticos e amostras reais para treinamento.",
      "Registros de inferência para avaliação de desempenho.",
    ],
    solution: [
      "Pré-processamento e extração de features com OpenCV e NumPy.",
      "Modelo treinado em TensorFlow com dados sintéticos e reais.",
      "Simulador com overlay de inferência e telemetria.",
      "Pipeline otimizado para baixa latência e debug visual.",
    ],
    features: [
      "Detecção de faixas com ajuste de ROI e filtros.",
      "Predição de direção e controle básico de velocidade.",
      "Overlay de inferência para validação e tuning.",
      "Logs de telemetria para análise de performance.",
    ],
    highlights: [
      "Testes rápidos e seguros de lógica de controle.",
      "Iteração visual com telemetria em tempo real.",
      "Base sólida para evolução de modelos de direção.",
      "Melhoria de performance com otimizações no pipeline.",
    ],
    demonstrates: [
      "Aplicação de data science e ML em visão computacional.",
      "Pipeline de inferência em tempo real com foco em performance.",
      "Analítica preditiva aplicada a decisões em tempo real.",
      "Uso de dados sintéticos para acelerar treino.",
    ],
    techSummary:
      "Python, OpenCV, TensorFlow e NumPy para pipeline de ML e visão computacional, com simulador para validação e análise.",
    conclusion: [
      "Consolidei práticas de engenharia de features e avaliação de modelos.",
      "Apliquei otimizações para manter baixa latência em tempo real.",
      "Integrei telemetria e visualização para decisão técnica.",
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
        src: "/projects/self-drive-car/cover.svg",
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
    seo: {
      title: "Self-Drive Car | Simulador de direção autônoma com ML",
      description:
        "Simulador de direção autônoma com Python, OpenCV e TensorFlow para treinar e validar modelos de machine learning em tempo real com telemetria.",
    },
  },
  {
    slug: "library-api-advanced",
    title: "Library API Advanced",
    headline: "Library API Advanced | API REST com autenticação e regras de negócio",
    tagline: "API de biblioteca com autenticação, regras de empréstimo e auditoria.",
    role: "Desenvolvedor",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Fastify"],
    repoUrl: "https://github.com/matheussiqueira-dev/library-api-advanced",
    context:
      "A gestão de bibliotecas precisava centralizar catálogo e empréstimos, garantindo integridade de dados e rastreabilidade das operações.",
    problem: [
      "Catálogo e empréstimos sem controle centralizado.",
      "Permissões e autenticação inconsistentes entre sistemas.",
      "Relatórios manuais dificultavam auditoria e compliance.",
      "Falta de validações claras para prazos e devoluções.",
    ],
    dataUsed: [
      "Catálogo de livros, usuários e empréstimos.",
      "Status de devolução, prazos e histórico de transações.",
      "Logs de operações para auditoria.",
      "Consultas SQL para análises operacionais.",
    ],
    solution: [
      "API REST com Node.js, TypeScript e Fastify.",
      "Autenticação JWT, roles e regras de negócio para empréstimos.",
      "Modelagem relacional no PostgreSQL com foco em integridade.",
      "Logs estruturados e validações para auditoria.",
    ],
    features: [
      "Fluxo de empréstimo e devolução com validações de prazo.",
      "Busca por categoria, autor e status de livro.",
      "Trilha de auditoria com registros detalhados.",
      "Base pronta para relatórios operacionais.",
    ],
    highlights: [
      "Padronização de processos e redução de inconsistências.",
      "Maior confiança e rastreabilidade nos registros.",
      "Base para compliance e relatórios de operação.",
      "Facilidade de integração com outros sistemas.",
    ],
    demonstrates: [
      "Arquitetura backend organizada, tipada e escalável.",
      "Modelagem relacional com foco em integridade.",
      "Boas práticas de autenticação e segurança.",
      "Design de API REST para dados transacionais.",
    ],
    techSummary:
      "Node.js, TypeScript e Fastify com PostgreSQL e JWT para uma API REST segura e transacional.",
    conclusion: [
      "Apliquei boas práticas de segurança, validação e auditoria.",
      "Estruturei a modelagem relacional para consistência e escala.",
      "Consolidei conhecimentos em design de APIs e governança de dados.",
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
        src: "/projects/library-api-advanced/cover.svg",
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
    seo: {
      title: "Library API Advanced | API REST com Node.js e PostgreSQL",
      description:
        "API de biblioteca com Node.js, TypeScript, Fastify e PostgreSQL, incluindo autenticação JWT, regras de empréstimo e trilha de auditoria.",
    },
  },
  {
    slug: "nucleo-comercial-dados",
    title: "Núcleo Comercial de Dados",
    headline: "Núcleo Comercial de Dados | Business Intelligence e Power BI",
    tagline: "Dashboards de BI com KPIs comerciais, ETL e automação analítica.",
    role: "Analista de Dados",
    stack: ["Power BI", "SQL", "Python", "DAX", "Power Query"],
    repoUrl: "https://github.com/matheussiqueira-dev/nucleo-comercial-dados",
    context:
      "A área comercial precisava consolidar dados de vendas e metas para decisões rápidas, reduzindo retrabalho e melhorando a qualidade da informação.",
    problem: [
      "Dados de vendas e receita dispersos em múltiplas fontes.",
      "Relatórios manuais atrasavam decisões comerciais.",
      "Inconsistência de indicadores dificultava comparações.",
      "Baixa visibilidade de tendências por período e segmento.",
    ],
    dataUsed: [
      "Bases de vendas, receita e metas comerciais.",
      "Indicadores de performance por período, canal e segmento.",
      "Séries históricas para comparação e tendência.",
      "Dimensões de produto, região e carteira.",
    ],
    solution: [
      "ETL com Python e Power Query para consolidar fontes.",
      "Modelagem dimensional (camada de Data Warehouse) orientada a KPIs com DAX.",
      "Dashboards estratégicos no Power BI com visão executiva.",
      "Padronização de métricas e regras de negócio.",
    ],
    features: [
      "Indicadores por período, canal e segmento.",
      "Alertas visuais para variações relevantes.",
      "Painel com filtros dinâmicos e visão comparativa.",
      "Camadas de detalhe para análise tático-operacional.",
    ],
    highlights: [
      "Melhoria na tomada de decisão com indicadores acionáveis.",
      "Automação de rotinas e redução de retrabalho.",
      "Qualidade da informação com dados consistentes.",
      "Escalabilidade para novas fontes e métricas.",
    ],
    demonstrates: [
      "BI end-to-end com dados de negócio.",
      "Análise de dados e estatística aplicada a KPIs comerciais.",
      "Visualização de dados para lideranças.",
      "Governança e qualidade de dados em relatórios.",
    ],
    techSummary:
      "Power BI, DAX, Power Query, SQL e Python/Pandas para ETL, modelagem de dados e visualização de indicadores.",
    conclusion: [
      "Apliquei boas práticas de BI, ETL e visualização de dados.",
      "Consolidei governança e padronização de indicadores.",
      "Fortaleci a capacidade analítica com KPIs acionáveis.",
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
        src: "/projects/nucleo-comercial-dados/cover.svg",
        alt: "Capa do projeto Núcleo Comercial de Dados",
      },
      {
        src: "/projects/nucleo-comercial-dados/shot-1.webp",
        alt: "Dashboard do Núcleo Comercial de Dados",
      },
    ],
    seo: {
      title: "Núcleo Comercial de Dados | BI, Power BI e KPIs comerciais",
      description:
        "Projeto de Business Intelligence com Power BI, SQL, Python e DAX para ETL, KPIs comerciais e dashboards executivos com foco em tomada de decisão.",
    },
  },
  {
    slug: "driver-monitoring-system",
    title: "Driver Monitoring System",
    headline: "Driver Monitoring System | Monitoramento de atenção e fadiga",
    tagline:
      "Sistema de monitoramento do motorista utilizando visão computacional para atenção e fadiga.",
    role: "Analista/Desenvolvedor",
    stack: ["Python", "OpenCV", "MediaPipe", "TensorFlow"],
    repoUrl: "https://github.com/matheussiqueira-dev/Driver-Monitoring-System",
    demo: {
      kind: "video",
      src: "/Driver Monitoring System.mp4",
      poster: "/projects/driver-monitoring-system/cover.svg",
      caption: "Detecção de atenção e fadiga com visão computacional.",
    },
    context:
      "Aplicações de segurança veicular precisam identificar sinais de fadiga e distração do motorista em tempo real para reduzir riscos em trajetos longos.",
    problem: [
      "Monitorar atenção e sonolência com baixa latência.",
      "Detectar sinais faciais mesmo com variações de iluminação.",
      "Minimizar falsos positivos durante movimentos naturais.",
      "Gerar alertas claros sem interromper a condução.",
    ],
    dataUsed: [
      "Frames de vídeo da câmera frontal.",
      "Landmarks faciais e métricas de abertura ocular.",
      "Eventos de bocejo e tempo de fechamento dos olhos.",
      "Scores de atenção e registros de alerta.",
    ],
    solution: [
      "Pipeline de visão computacional com detecção facial e landmarks.",
      "Cálculo de EAR (Eye Aspect Ratio) e sinais de fadiga.",
      "Lógica de thresholds e janelas de tempo para reduzir ruído.",
      "Camada de alertas visuais para feedback imediato.",
    ],
    features: [
      "Detecção contínua de atenção e sonolência.",
      "Métricas de piscar, bocejo e tempo de olhos fechados.",
      "Alertas configuráveis em tempo real.",
      "Interface simples para validação e testes.",
    ],
    highlights: [
      "Monitoramento em tempo real com baixa latência.",
      "Sinais de fadiga detectados com consistência.",
      "Base reutilizável para protótipos automotivos.",
      "Pipeline claro para evolução de modelos.",
    ],
    demonstrates: [
      "Visão computacional aplicada a segurança veicular.",
      "Tratamento de sinais faciais em streaming de vídeo.",
      "Modelagem de alertas e thresholds.",
      "Prototipação orientada a validação rápida.",
    ],
    techSummary:
      "Python com OpenCV e MediaPipe para rastreamento facial, além de TensorFlow para suporte à análise de sinais visuais.",
    conclusion: [
      "Estruturei um pipeline visual com foco em latência.",
      "Apliquei métricas faciais para detectar fadiga.",
      "Criei uma base pronta para evolução do modelo.",
    ],
    howToRun: [
      "Pré-requisitos: Python 3.10+ e webcam habilitada.",
      "Clone o repositório e crie um ambiente virtual.",
      "Instale as dependências listadas no requirements.txt.",
      "Execute o script principal para iniciar a detecção.",
      "Valide os alertas em tempo real pela interface.",
    ],
    screenshots: [
      {
        src: "/projects/driver-monitoring-system/cover.svg",
        alt: "Capa do projeto Driver Monitoring System",
      },
      {
        src: "/Driver Monitoring System.mp4",
        alt: "Demonstração do Driver Monitoring System",
        type: "video",
      },
    ],
    seo: {
      title: "Driver Monitoring System | Monitoramento de atenção e fadiga",
      description:
        "Sistema de monitoramento do motorista com visão computacional para detectar atenção e fadiga em tempo real usando Python, OpenCV e MediaPipe.",
    },
  },
  {
    slug: "subway-surf",
    title: "Subway Surf",
    headline: "Subway Surf | Jogo 2D em HTML5 Canvas",
    tagline:
      "Jogo inspirado no Subway Surfers para estudo de lógica e desenvolvimento de games.",
    role: "Desenvolvedor",
    stack: ["JavaScript", "HTML5", "Canvas", "CSS"],
    repoUrl: "https://github.com/matheussiqueira-dev/Subway-Surf",
    demo: {
      kind: "video",
      src: "/Subway Surf.mp4",
      poster: "/projects/subway-surf/cover.svg",
      caption: "Gameplay do protótipo inspirado no Subway Surfers.",
    },
    context:
      "Projeto criado para praticar game loop, colisão e controle de personagens em um ambiente 2D.",
    problem: [
      "Estruturar um game loop fluido no navegador.",
      "Implementar colisões e obstáculos em tempo real.",
      "Criar progressão de dificuldade sem travar a jogabilidade.",
      "Organizar o código para facilitar novas fases e assets.",
    ],
    dataUsed: [
      "Entrada do teclado para movimentação.",
      "Estados de jogo (velocidade, pontuação, colisões).",
      "Timers para spawn de obstáculos.",
      "Sprites e posições em tela.",
    ],
    solution: [
      "Renderização em Canvas com loop de atualização contínuo.",
      "Sistema simples de colisão e reset de obstáculos.",
      "Incremento gradual de velocidade para desafio.",
      "Arquitetura modular para lógica de jogo e UI.",
    ],
    features: [
      "Movimentação fluida do personagem.",
      "Obstáculos dinâmicos com colisão.",
      "Pontuação em tempo real.",
      "Base pronta para novos níveis e skins.",
    ],
    highlights: [
      "Jogo responsivo com boa performance em navegador.",
      "Controle e colisão consistentes.",
      "Estrutura clara para evolução do projeto.",
      "Aprendizado prático de game design básico.",
    ],
    demonstrates: [
      "Game loop e renderização em Canvas.",
      "Lógica de colisão e estados do jogo.",
      "Organização modular de código front-end.",
      "Prototipação rápida de jogos 2D.",
    ],
    techSummary:
      "JavaScript e HTML5 Canvas para renderização, com CSS para layout e HUD.",
    conclusion: [
      "Consolidei fundamentos de game loop em JS.",
      "Implementei colisões e pontuação em tempo real.",
      "Criei uma base extensível para futuras mecânicas.",
    ],
    howToRun: [
      "Clone o repositório.",
      "Abra o arquivo index.html no navegador.",
      "Use o teclado para controlar o personagem.",
      "Acompanhe a pontuação e evite obstáculos.",
    ],
    screenshots: [
      {
        src: "/projects/subway-surf/cover.svg",
        alt: "Capa do projeto Subway Surf",
      },
      {
        src: "/Subway Surf.mp4",
        alt: "Gameplay do Subway Surf",
        type: "video",
      },
    ],
  },
  {
    slug: "gestor-de-notas",
    title: "Gestor de Notas",
    headline: "Gestor de Notas | Aplicação para organização pessoal",
    tagline:
      "Aplicação para gerenciamento de notas, com criação, edição e organização simples.",
    role: "Desenvolvedor",
    stack: ["JavaScript", "HTML5", "CSS", "LocalStorage"],
    repoUrl: "https://github.com/matheussiqueira-dev/Gestor_de_Notas",
    demo: {
      kind: "video",
      src: "/Gestor de Notas.mp4",
      poster: "/projects/gestor-de-notas/cover.svg",
      caption: "Fluxo de criação e organização de notas.",
    },
    context:
      "A necessidade era criar uma solução leve para registrar e organizar informações pessoais sem depender de ferramentas externas.",
    problem: [
      "Organizar notas de forma rápida e clara.",
      "Permitir edição sem perder histórico.",
      "Garantir persistência local sem backend.",
      "Manter uma interface simples e direta.",
    ],
    dataUsed: [
      "Texto das notas e categorias locais.",
      "Datas de criação e atualização.",
      "Status de prioridade e organização visual.",
      "Estado persistido no navegador.",
    ],
    solution: [
      "Interface web simples com CRUD de notas.",
      "Persistência via LocalStorage para uso offline.",
      "Organização por tags e datas.",
      "Feedback visual para ações do usuário.",
    ],
    features: [
      "Criação, edição e exclusão de notas.",
      "Busca rápida por palavras-chave.",
      "Persistência local no navegador.",
      "Layout responsivo para desktop e mobile.",
    ],
    highlights: [
      "Fluxo de uso direto e sem fricção.",
      "Persistência offline sem backend.",
      "Base pronta para evoluir com autenticação.",
      "Código enxuto e fácil de manter.",
    ],
    demonstrates: [
      "CRUD em front-end puro.",
      "Persistência local de dados.",
      "Organização de UI com foco em produtividade.",
      "Boas práticas de JavaScript básico.",
    ],
    techSummary:
      "Aplicação web em JavaScript puro com HTML e CSS, usando LocalStorage para persistência.",
    conclusion: [
      "Implementei um CRUD simples e funcional.",
      "Garanti persistência local sem depender de API.",
      "Construí uma base leve para evolução futura.",
    ],
    howToRun: [
      "Clone o repositório.",
      "Abra o arquivo index.html no navegador.",
      "Crie e organize suas notas.",
      "As alterações ficam salvas localmente.",
    ],
    screenshots: [
      {
        src: "/projects/gestor-de-notas/cover.svg",
        alt: "Capa do projeto Gestor de Notas",
      },
      {
        src: "/Gestor de Notas.mp4",
        alt: "Demonstração do Gestor de Notas",
        type: "video",
      },
    ],
  },
  {
    slug: "sistema-analise-emocoes-ia",
    title: "Sistema de Análise de Emoções com Inteligência Artificial",
    headline:
      "Sistema de Análise de Emoções com Inteligência Artificial | Data Science e Full Stack",
    tagline:
      "Sistema full stack de análise de emoções faciais com IA, APIs REST e visualização de dados.",
    role: "Analista/Desenvolvedor",
    stack: [
      "Python",
      "Pandas",
      "Machine Learning",
      "MLOps",
      "API REST",
      "Node.js",
      "React.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS",
      "Dash",
      "SQL",
      "MongoDB",
      "Git",
      "GitHub",
      "ETL",
      "Data Warehouse",
      "Power BI",
      "Power Query",
      "DAX",
      "Estatística",
      "Análise de Dados",
    ],
    repoUrl: "https://github.com/matheussiqueira-dev/sistema-analise-emocoes-ia",
    context:
      "A interpretação de emoções humanas em ambientes digitais é um desafio recorrente em aplicações modernas de UX, comportamento humano e tomada de decisão baseada em dados. Métodos manuais são subjetivos, pouco escaláveis e incapazes de processar grandes volumes de informação em tempo real, exigindo uma solução automatizada com boa performance.",
    problem: [
      "Análises manuais são subjetivas, inconsistentes e com baixa escala.",
      "Processamento em tempo real exige performance e baixa latência.",
      "Grandes volumes de imagens e vídeo dificultam a operação manual.",
      "Ausência de métricas estruturadas limita BI e tomada de decisão.",
    ],
    dataUsed: [
      "Imagens e vídeos com faces para classificação de emoções.",
      "Frames em tempo real com timestamps de inferência.",
      "Probabilidades de emoções e métricas de desempenho do modelo.",
      "Logs de API e dados estruturados para dashboards e BI.",
    ],
    solution: [
      "Pipeline de coleta, tratamento e padronização de dados com Python e Pandas.",
      "Modelo de machine learning para classificação de emoções com avaliação de métricas.",
      "API REST em Python/Node.js integrada a bancos SQL e NoSQL com segurança.",
      "Frontend com React.js e Dash para visualização analítica e usabilidade.",
    ],
    features: [
      "Identificação de emoções a partir de imagens e vídeo.",
      "Processamento de dados em tempo real com baixa latência.",
      "Dashboards analíticos com KPIs e visualizações claras.",
      "Interface web intuitiva, responsiva e orientada à decisão.",
      "Dados estruturados para análises futuras e Data Warehouse.",
    ],
    highlights: [
      "Automação da análise de emoções com redução de esforço manual.",
      "Processamento eficiente em escala com pipeline otimizado.",
      "Visualizações claras para suporte à análise e tomada de decisão.",
      "Arquitetura modular preparada para expansão e SaaS.",
    ],
    demonstrates: [
      "Integração full stack com APIs REST e bancos SQL/NoSQL.",
      "Data science aplicada com estatística, ML e avaliação de métricas.",
      "ETL, Data Warehouse e BI para indicadores confiáveis.",
      "Boas práticas iniciais de MLOps, versionamento e segurança.",
    ],
    techSummary:
      "Python, Pandas, machine learning e MLOps integrados a API REST, bancos SQL/NoSQL, React e Dash para um sistema completo de análise emocional orientado a dados.",
    conclusion: [
      "Integrei ciência de dados, IA e desenvolvimento full stack em um fluxo escalável.",
      "Estruturei pipelines de dados e visualizações para decisão baseada em métricas.",
      "Consolidei práticas de performance, segurança e evolução do produto.",
    ],
    howToRun: [
      "Pré-requisitos: Python 3.10+, Node 18+ e bancos SQL/NoSQL configurados.",
      "Clone o repositório e configure o ambiente Python e Node.js.",
      "Execute o pipeline de ETL e prepare os datasets para treino.",
      "Suba a API REST e o serviço de inferência do modelo.",
      "Inicie o front-end e acesse os dashboards analíticos.",
    ],
    screenshots: [
      {
        src: "/projects/sistema-analise-emocoes-ia/cover.svg",
        alt: "Capa do projeto Sistema de Análise de Emoções com Inteligência Artificial",
      },
      {
        src: "/projects/sistema-analise-emocoes-ia/shot-1.svg",
        alt: "Dashboard analítico do Sistema de Análise de Emoções com IA",
      },
    ],
    seo: {
      title:
        "Sistema de Análise de Emoções com Inteligência Artificial | Data Science e Full Stack",
      description:
        "Projeto de análise de emoções com inteligência artificial, utilizando Python, machine learning, APIs REST, visualização de dados e desenvolvimento full stack orientado à análise e tomada de decisão.",
    },
  },
];

export const projectSlugs = projects.map((project) => project.slug);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

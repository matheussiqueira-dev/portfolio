import type { Project as ProjectCase } from "./projects.types";

const projectList: ProjectCase[] = [
  {
    slug: "capa-da-invisibilidade",
    title: "Capa da Invisibilidade",
    headline: "Capa da Invisibilidade | Efeito de invisibilidade em tempo real",
    tagline:
      "Efeito de invisibilidade em tempo real no navegador com ajustes finos de cor e mascaramento.",
    role: "Desenvolvedor Full Stack",
    stack: ["React", "TypeScript", "Vite", "Canvas API", "Node.js", "Fastify", "Zod"],
    repoUrl: "https://github.com/matheussiqueira-dev/capa-da-invisibilidade.git",
    demo: {
      kind: "video",
      src: "/Capa da Invisibilidade.mp4",
      poster: "/projects/capa-da-invisibilidade/demo.gif",
      caption: "Efeito de invisibilidade em tempo real com calibração visual.",
    },
    intro: {
      title: "Capa da Invisibilidade — Efeito em tempo real no navegador",
      paragraphs: [
        "Projeto full stack que aplica um efeito de invisibilidade em tempo real no navegador, com controles de calibração e mascaramento.",
        "O processamento acontece localmente via Canvas para reduzir latência e preservar privacidade, com backend opcional para snapshots e métricas.",
      ],
      sections: [
        {
          title: "Diferenciais",
          items: [
            "Processamento local de vídeo para privacidade e baixa latência.",
            "Controles visuais para calibração precisa do efeito.",
            "Backend modular e opcional para registrar resultados.",
            "Setup simples para demonstrações e estudos.",
          ],
        },
        {
          title: "Arquitetura",
          items: [
            "Frontend com loop de vídeo no Canvas e estado em React.",
            "Backend com API REST em Fastify, validação e segurança.",
            "Persistência em arquivo JSON para facilitar o setup local.",
          ],
        },
        {
          title: "Stack e tecnologias",
          items: [
            "React, TypeScript, Vite e Canvas API no frontend.",
            "Node.js, Fastify e Zod no backend.",
          ],
        },
      ],
      video: {
        src: "/Capa da Invisibilidade.mp4",
        poster: "/projects/capa-da-invisibilidade/demo.gif",
        caption: "Demonstração do efeito de invisibilidade em tempo real.",
      },
    },
    context:
      "A meta era criar um efeito de invisibilidade em tempo real que rodasse no navegador, com baixa latência, calibração visual e backend opcional para registrar resultados.",
    problem: [
      "Mascarar cores de forma estável sob diferentes iluminações.",
      "Manter performance no processamento de vídeo em tempo real.",
      "Oferecer controles visuais para calibrar o efeito.",
      "Registrar snapshots e métricas sem complicar o setup.",
    ],
    dataUsed: [
      "Frames da webcam processados localmente.",
      "Máscaras de cor e parâmetros de segmentação.",
      "Snapshots e métricas de desempenho (opcional).",
      "Configurações de calibração do efeito.",
    ],
    solution: [
      "Pipeline de processamento no Canvas com mascaramento ajustável.",
      "UI com controles de calibração de cor e intensidade.",
      "API REST opcional em Fastify com validação Zod e API key.",
      "Persistência simples em arquivo JSON para facilitar o setup.",
    ],
    features: [
      "Efeito de invisibilidade em tempo real no navegador.",
      "Controles visuais para ajuste fino do mascaramento.",
      "Backend opcional para snapshots e métricas.",
      "Configuração por variáveis de ambiente.",
    ],
    highlights: [
      "Processamento local de vídeo para privacidade e baixa latência.",
      "Backend modular e pronto para evoluir.",
      "Setup simples para demos e estudos.",
      "Boas práticas com validação, CORS e rate limiting.",
    ],
    demonstrates: [
      "Visão computacional no navegador com Canvas API.",
      "Integração full stack com API REST.",
      "Validação e segurança com Zod e API key.",
      "Arquitetura modular com frontend e backend opcionais.",
    ],
    techSummary:
      "React + TypeScript + Canvas API no frontend e Fastify + Zod no backend opcional para snapshots e métricas.",
    conclusion: [
      "Entreguei um efeito de invisibilidade performático e calibrável.",
      "Garanti privacidade com processamento local e backend opcional.",
      "Deixei uma base pronta para evolução com métricas e integrações.",
    ],
    howToRun: [
      "Frontend: npm install e npm run dev.",
      "Backend (opcional): cd backend, npm install, cp .env.example .env e npm run dev.",
      "Ajuste VITE_ENABLE_API, VITE_API_URL e VITE_API_KEY se usar o backend.",
    ],
    screenshots: [
      {
        src: "/projects/capa-da-invisibilidade/demo.gif",
        alt: "Demo em GIF da Capa da Invisibilidade",
        type: "gif",
      },
      {
        src: "/Capa da Invisibilidade.mp4",
        alt: "Demonstração em vídeo da Capa da Invisibilidade",
        type: "video",
      },
    ],
    seo: {
      title: "Capa da Invisibilidade | Efeito em tempo real no navegador",
      description:
        "Projeto full stack de efeito de invisibilidade em tempo real com Canvas no frontend e backend opcional em Fastify para snapshots e métricas.",
    },
  },
  {
    slug: "business-decision-simulator",
    title: "Simulador de Decisão Empresarial",
    headline:
      "Simulador de Decisão Empresarial | Cenários, risco e impacto financeiro",
    tagline:
      "Simulador interativo para comparar estratégias e medir impacto financeiro com Monte Carlo e análise de sensibilidade.",
    role: "Analista/Desenvolvedor",
    stack: ["Python", "Streamlit", "Pandas", "NumPy", "Plotly"],
    repoUrl:
      "https://github.com/matheussiqueira-dev/Simulacao-Estrategica-de-Decisao-Empresarial.git",
    demo: {
      kind: "video",
      src: "/Simulação Estratégica de Decisão Empresarial.mp4",
      poster: "/Thmbnail/Thumbnail - Portugues/Simulador de Decisão Empresarial.png",
      caption: "Cenários lado a lado, risco e KPIs em tempo real.",
    },
    intro: {
      title: "Simulador Estratégico de Decisão Empresarial",
      paragraphs: [
        "Ferramenta interativa para testar estratégias de negócio e visualizar impacto em receita, margem e caixa.",
        "Permite comparar cenários em tempo real, incluindo incerteza com simulações de Monte Carlo e gráficos de sensibilidade.",
      ],
      sections: [
        {
          title: "O que o vídeo demonstra",
          items: [
            "Ajuste rápido de alavancas (preço, volume, CAC, churn, capacidade).",
            "Comparação lado a lado de cenários base, otimista e conservador.",
            "Análise de risco com distribuição de resultados e intervalos de confiança.",
          ],
        },
        {
          title: "Uso típico",
          items: [
            "Planejamento de mercado e lançamento de produtos.",
            "Avaliação de investimentos e payback.",
            "Revisão de metas trimestrais com diretoria.",
          ],
        },
      ],
      video: {
        src: "/Simulação Estratégica de Decisão Empresarial.mp4",
        poster: "/Thmbnail/Thumbnail - Portugues/Simulador de Decisão Empresarial.png",
        caption: "Tour pelas telas de cenários, risco e KPIs.",
      },
    },
    context:
      "Gestores precisavam comparar decisões estratégicas sem depender de planilhas desconexas, entendendo impacto financeiro e riscos em minutos.",
    problem: [
      "Dificuldade em comparar múltiplos cenários com incerteza.",
      "Falta de visualizações claras para comunicar riscos ao board.",
      "Dependência de planilhas complexas e pouco auditáveis.",
      "Pouca agilidade para testar hipóteses e trade-offs de negócio.",
    ],
    dataUsed: [
      "Premissas de preço, volume, CAC, churn, custo variável e fixo.",
      "Curvas de demanda e elasticidade por segmento.",
      "Distribuições de risco para receitas e custos (Monte Carlo).",
      "KPIs financeiros: margem, payback, ROI e fluxo de caixa projetado.",
    ],
    solution: [
      "Modelo financeiro parametrizado com simulação Monte Carlo para incerteza.",
      "Painel Streamlit com controles interativos e comparação de cenários.",
      "Visualizações Plotly (tornado, waterfall, violin) para sensibilidade e risco.",
      "Exportação de cenários e parâmetros para CSV/PDF compartilhável.",
    ],
    features: [
      "Cenários base, otimista e conservador lado a lado.",
      "Simulação estocástica com milhares de execuções e intervalos de confiança.",
      "Gráficos de sensibilidade para identificar variáveis críticas.",
      "Download de premissas e resultados para reprodutibilidade.",
    ],
    highlights: [
      "Decisão orientada a dados sem depender de macros ou planilhas frágeis.",
      "Exploração rápida de hipóteses com feedback visual imediato.",
      "Comunicação clara de risco para diretoria e investidores.",
      "Base pronta para conectar a BI ou data warehouse.",
    ],
    demonstrates: [
      "Modelagem financeira e simulação Monte Carlo em Python.",
      "Design de UX orientado a negócio no Streamlit.",
      "Visualizações avançadas com Plotly para sensibilidade e risco.",
      "Boas práticas de caching e parametrização de cenários.",
    ],
    techSummary:
      "Python com Streamlit, Pandas, NumPy e Plotly para um simulador financeiro interativo com Monte Carlo e análise de sensibilidade.",
    conclusion: [
      "Entreguei um simulador que responde em tempo real a mudanças de premissa.",
      "Reduzi dependência de planilhas, centralizando lógica e visualização.",
      "Deixei ganchos para integração com pipelines de dados corporativos.",
    ],
    howToRun: [
      "Pré-requisitos: Python 3.10+.",
      "Clone o repositório e crie um ambiente virtual.",
      "Instale dependências: pip install -r requirements.txt.",
      "Execute: streamlit run app.py.",
      "Ajuste premissas no painel e exporte cenários conforme necessário.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - Portugues/Simulador de Decisão Empresarial.png",
        alt: "Capa do Simulador de Decisão Empresarial",
      },
      {
        src: "/Simulação Estratégica de Decisão Empresarial.mp4",
        alt: "Demonstração do Simulador de Decisão Empresarial",
        type: "video",
      },
    ],
    seo: {
      title:
        "Simulador de Decisão Empresarial | Cenários financeiros com Monte Carlo",
      description:
        "Simulador interativo em Python/Streamlit para comparar estratégias, rodar Monte Carlo e comunicar risco e impacto financeiro.",
    },
  },
  {
    slug: "dashboard-vendas-power-bi",
    title: "Dashboard de Vendas - Power BI",
    headline:
      "Dashboard de Vendas | Power BI com KPIs, metas e análises por região",
    tagline:
      "Dashboard em Power BI para acompanhar desempenho de vendas, metas e mix de produtos com filtros dinâmicos.",
    role: "Analista de Dados",
    stack: ["Power BI", "DAX", "Power Query", "Excel"],
    repoUrl:
      "https://github.com/matheussiqueira-dev/Dashboard-de-Vendas---Power-BI.git",
    demoUrl: "/projects/dashboard-vendas-power-bi/dashboard.pdf",
    demo: {
      kind: "video",
      src: "/projects/dashboard-vendas-power-bi/demo.mp4",
      poster: "/Thmbnail/Thumbnail - Portugues/Dashboard de Vendas - Power B.I..png",
      caption: "Visão geral do dashboard e filtros principais.",
    },
    intro: {
      title: "Dashboard de Vendas em Power BI",
      paragraphs: [
        "Dashboard focado em monitorar receita, volume, ticket médio e metas por período, canal e região.",
        "Combina modelagem de dados, medidas DAX e visualizações orientadas à tomada de decisão.",
      ],
      sections: [
        {
          title: "O que o dashboard entrega",
          items: [
            "KPIs de vendas com variação vs. meta e período anterior.",
            "Análise por região, canal e linha de produto.",
            "Ranking de produtos e clientes com filtros dinâmicos.",
          ],
        },
        {
          title: "Material de apoio",
          footer: ["PDF com visão geral do dashboard e principais telas."],
          link: {
            label: "Abrir PDF do dashboard",
            href: "/projects/dashboard-vendas-power-bi/dashboard.pdf",
          },
        },
      ],
      video: {
        src: "/projects/dashboard-vendas-power-bi/demo.mp4",
        poster: "/Thmbnail/Thumbnail - Portugues/Dashboard de Vendas - Power B.I..png",
        caption: "KPIs, filtros e leitura rápida de desempenho.",
      },
    },
    context:
      "A operação comercial precisava consolidar indicadores de vendas em uma visão única, com filtros rápidos para regiões, canais e produtos.",
    problem: [
      "Dados dispersos em planilhas e pouca padronização de métricas.",
      "Dificuldade em acompanhar metas e variações por período.",
      "Baixa visibilidade do mix de produtos e canais com melhor desempenho.",
      "Tempo alto para preparar relatórios executivos.",
    ],
    dataUsed: [
      "Base de pedidos e itens de venda.",
      "Calendário para análises sazonais.",
      "Metas comerciais por período e região.",
      "Dimensões de produto, canal e localidade.",
    ],
    solution: [
      "Modelagem em estrela com fato de vendas e dimensões de produto, canal, região e calendário.",
      "Tratamento e limpeza de dados no Power Query.",
      "Medidas DAX para KPIs, variações e participação no total.",
      "Páginas com visão executiva e detalhamento operacional.",
    ],
    features: [
      "KPIs de receita, volume, ticket médio e margem.",
      "Visão por região, canal e produto com filtros interativos.",
      "Rankings e contribuições percentuais.",
      "Indicadores de meta vs. realizado por período.",
    ],
    highlights: [
      "Visão executiva pronta para reuniões semanais.",
      "Redução de tempo de consolidação de relatórios.",
      "Estrutura escalável para novas dimensões e metas.",
      "Leitura rápida de performance com foco em decisão.",
    ],
    demonstrates: [
      "Modelagem de dados no Power BI.",
      "Criação de medidas DAX para KPIs e variações.",
      "Design de dashboards orientado à decisão.",
      "Tratamento de dados com Power Query.",
    ],
    techSummary:
      "Power BI com Power Query para ETL e DAX para métricas e indicadores comerciais.",
    conclusion: [
      "Entreguei um painel de vendas com KPIs claros e filtros intuitivos.",
      "Facilitei o acompanhamento de metas e tendências sazonais.",
      "Deixei a base pronta para evolução com novas fontes de dados.",
    ],
    howToRun: [
      "Clone o repositório.",
      "Abra o arquivo Dashboard.pbit no Power BI Desktop.",
      "Aponte a fonte para o arquivo Sample data.xlsx.",
      "Atualize os dados e utilize os filtros do painel.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - Portugues/Dashboard de Vendas - Power B.I..png",
        alt: "Capa do Dashboard de Vendas - Power BI",
      },
      {
        src: "/projects/dashboard-vendas-power-bi/demo.mp4",
        alt: "Demonstração do Dashboard de Vendas",
        type: "video",
      },
    ],
    seo: {
      title: "Dashboard de Vendas | Power BI com KPIs e metas",
      description:
        "Dashboard em Power BI para monitorar vendas, metas, mix de produtos e desempenho por região, com KPIs e filtros dinâmicos.",
    },
  },
  {
    slug: "deteccao-de-anomalias-operacionais",
    title: "Detecção de Anomalias Operacionais",
    headline:
      "Detecção de Anomalias | Radar operacional em tempo real",
    tagline:
      "Sistema para identificar desvios operacionais com alertas em tempo real e painel interativo.",
    role: "Analista/Desenvolvedor",
    stack: ["Python", "FastAPI", "Isolation Forest", "TimescaleDB", "React", "D3"],
    repoUrl:
      "https://github.com/matheussiqueira-dev/Deteccao-de-Anomalias-Operacionais.git",
    demo: {
      kind: "video",
      src: "/projects/deteccao-de-anomalias-operacionais/demo.mp4",
      poster: "/Thmbnail/Thumbnail - Portugues/Detecção de Anomalias Operacionais.png",
      caption: "Radar com alertas de anomalia e histórico de métricas.",
    },
    intro: {
      title: "Operational Anomaly Radar (MVP)",
      paragraphs: [
        "Plataforma de monitoramento operacional com detecção automática de anomalias em séries temporais.",
        "Combina ingestão via API/WS, modelos de detecção e dashboard interativo para priorizar eventos críticos.",
      ],
      sections: [
        {
          title: "O que o sistema entrega",
          items: [
            "Alertas em tempo real para métricas fora do padrão.",
            "Histórico de séries temporais com filtros por fonte e métrica.",
            "Painel interativo com visualização e investigação rápida.",
          ],
        },
        {
          title: "Arquitetura resumida",
          items: [
            "FastAPI com rotas REST/WS para ingestão e alertas.",
            "TimescaleDB para armazenamento de séries temporais.",
            "Frontend React + D3 para radar e timeline.",
          ],
        },
      ],
      video: {
        src: "/projects/deteccao-de-anomalias-operacionais/demo.mp4",
        poster: "/Thmbnail/Thumbnail - Portugues/Detecção de Anomalias Operacionais.png",
        caption: "Detecção automática, alertas e investigação em um só painel.",
      },
    },
    context:
      "Times operacionais precisavam detectar desvios rapidamente, sem depender de varredura manual de dashboards.",
    problem: [
      "Alertas demoravam a ser percebidos em picos ou quedas abruptas.",
      "Métricas críticas estavam dispersas em diferentes visões.",
      "Baixa rastreabilidade dos eventos anômalos no tempo.",
      "Re-treinamento manual dos modelos dificultava a operação.",
    ],
    dataUsed: [
      "Séries temporais de métricas operacionais.",
      "Eventos de ingestão via API e WebSocket.",
      "Metadados de origem, tags e unidade.",
      "Histórico para treino de modelos de detecção.",
    ],
    solution: [
      "API FastAPI com endpoints de ingestão, histórico e alertas WS.",
      "Detecção com Isolation Forest e estratégia híbrida (opcional).",
      "TimescaleDB para retenção eficiente de séries temporais.",
      "Frontend React + D3 para radar e análise exploratória.",
    ],
    features: [
      "Alertas em tempo real via WebSocket.",
      "Dashboard com filtros por fonte, métrica e período.",
      "Endpoint /train para re-treinamento sob demanda.",
      "Health checks e métricas para observabilidade.",
    ],
    highlights: [
      "Redução do tempo de identificação de incidentes.",
      "Arquitetura em camadas com separação de domínio e serviços.",
      "Pronto para integração com Kafka e pipelines externos.",
      "Base extensível para novos modelos e métricas.",
    ],
    demonstrates: [
      "Detecção de anomalias em séries temporais.",
      "APIs REST/WS para dados em tempo real.",
      "Modelagem de dados temporais com TimescaleDB.",
      "Visualização avançada com React e D3.",
    ],
    techSummary:
      "FastAPI + Isolation Forest com TimescaleDB e dashboard React/D3 para monitoramento operacional em tempo real.",
    conclusion: [
      "Entreguei uma base sólida para alerta e investigação de anomalias.",
      "Integrei ingestão em tempo real com detecção automática.",
      "Preparei o sistema para evolução com observabilidade e novos modelos.",
    ],
    howToRun: [
      "Clone o repositório.",
      "Copie backend/.env.example para backend/.env.",
      "Execute: docker compose up --build.",
      "Acesse o frontend e o backend em http://localhost:3000 e http://localhost:8000.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - Portugues/Detecção de Anomalias Operacionais.png",
        alt: "Capa do projeto Detecção de Anomalias Operacionais",
      },
      {
        src: "/projects/deteccao-de-anomalias-operacionais/demo.gif",
        alt: "Demo em GIF da Detecção de Anomalias Operacionais",
        type: "gif",
      },
      {
        src: "/projects/deteccao-de-anomalias-operacionais/demo.mp4",
        alt: "Demonstração da Detecção de Anomalias Operacionais",
        type: "video",
      },
    ],
    seo: {
      title: "Detecção de Anomalias | Monitoramento operacional em tempo real",
      description:
        "Plataforma com FastAPI, TimescaleDB e React/D3 para detectar anomalias em métricas operacionais e emitir alertas em tempo real.",
    },
  },
  {
    slug: "touchless-web-gesture-interface",
    title: "Interface Web de Gestos Sem Contato",
    headline: "Interface Web de Gestos Sem Contato | Visão computacional para dashboards",
    tagline: "Interface web touchless com visão computacional para navegar dashboards e data apps.",
    role: "Analista/Desenvolvedor",
    stack: ["Python", "FastAPI", "OpenCV", "MediaPipe", "React"],
    repoUrl:
      "https://github.com/matheussiqueira-dev/Interface-Web-de-Gestos-Sem-Contato.git",
    demo: {
      kind: "video",
      src: "/touchless-web-gesture-interface.mp4",
      poster: "/Thmbnail/Thumbnail - Portugues/Interface Web de Gestos Sem Contato.png",
      caption: "Demonstração rápida da interface touchless em uso.",
    },
    intro: {
      title: "Interface Web de Gestos Sem Contato – Controle Web por Gestos em Tempo Real",
      paragraphs: [
        "A Interface Web de Gestos Sem Contato é uma aplicação web inovadora que permite interagir com interfaces digitais sem tocar no mouse ou no teclado, utilizando apenas gestos das mãos capturados pela webcam, diretamente no navegador.",
        "Este projeto foi desenvolvido com foco em inovação, experiência do usuário e aplicação prática de visão computacional, explorando como tecnologias modernas podem transformar a forma como pessoas interagem com sistemas web.",
        "Mais do que uma prova de conceito, este projeto demonstra habilidades reais em desenvolvimento frontend moderno, arquitetura de aplicações, processamento de vídeo em tempo real e integração de bibliotecas avançadas de visão computacional.",
      ],
      sections: [
        {
          title: "O que é a Interface Web de Gestos Sem Contato?",
          paragraphs: [
            "A Interface Web de Gestos Sem Contato é uma interface web controlada por gestos, onde os movimentos da mão do usuário são reconhecidos em tempo real e convertidos em ações dentro da aplicação.",
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
            "A Interface Web de Gestos Sem Contato vai além de um simples experimento técnico.",
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
          title: "Aplicações Práticas da Interface Web de Gestos Sem Contato",
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
          footer: ["Repositório:"],
          link: {
            label: "github.com/matheussiqueira-dev/Interface-Web-de-Gestos-Sem-Contato.git",
            href: "https://github.com/matheussiqueira-dev/Interface-Web-de-Gestos-Sem-Contato.git",
          },
        },
        {
          title: "Conclusão",
          paragraphs: [
            "A Interface Web de Gestos Sem Contato é um projeto que une tecnologia moderna, criatividade e aplicação prática, mostrando como a web pode ir além das interações tradicionais.",
            "Ele representa uma abordagem inovadora para desenvolvimento web, reforçando habilidades em React, TypeScript, visão computacional, arquitetura frontend e experiência do usuário — competências altamente valorizadas no mercado de tecnologia atual.",
            "Se você busca exemplos reais de inovação aplicada à web, este projeto é uma demonstração clara do potencial de interfaces touchless no navegador.",
          ],
        },
      ],
      video: {
        src: "/touchless-web-gesture-interface.mp4",
        poster: "/Thmbnail/Thumbnail - Portugues/Interface Web de Gestos Sem Contato.png",
        caption: "Demonstração da Interface Web de Gestos Sem Contato em uso.",
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
        src: "/Thmbnail/Thumbnail - Portugues/Interface Web de Gestos Sem Contato.png",
        alt: "Capa do projeto Interface Web de Gestos Sem Contato",
      },
      {
        src: "/touchless-web-gesture-interface.mp4",
        alt: "Demonstração da Interface Web de Gestos Sem Contato em uso",
        type: "video",
      },
      {
        src: "/projects/touchless-web-gesture-interface/shot-1.webp",
        alt: "Tela principal do projeto Interface Web de Gestos Sem Contato",
      },
    ],
    seo: {
      title: "Interface Web de Gestos Sem Contato | Interface sem toque para dashboards",
      description:
        "Case de visão computacional com Python, OpenCV, MediaPipe e FastAPI para controlar dashboards por gestos, integrando front-end React e API REST com baixa latência.",
    },
  },
  {
    slug: "chatbot-ia-api",
    title: "API de Chatbot com IA",
    headline: "API de Chatbot com IA | Backend de suporte com contexto e logs",
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
        src: "/Thmbnail/Thumbnail - Portugues/Chatbot IA API.png",
        alt: "Capa do projeto API de Chatbot com IA",
      },
      {
        src: "/Chatbot.mp4",
        alt: "Demonstração da API de Chatbot com IA",
        type: "video",
      },
      {
        src: "/projects/chatbot-ia-api/shot-1.webp",
        alt: "Fluxo de conversa da API de Chatbot com IA",
      },
    ],
    seo: {
      title: "API de Chatbot com IA | API REST com contexto, logs e dados",
      description:
        "API de chatbot em FastAPI com PostgreSQL e Redis, contexto por sessão e logs estruturados para automação de suporte e analytics de atendimento.",
    },
  },
  {
    slug: "self-drive-car",
    title: "Carro Para Dirigir Sem Motorista",
    headline: "Carro Para Dirigir Sem Motorista | Machine Learning e visão computacional",
    tagline: "Simulador de direção autônoma com visão computacional e ML.",
    role: "Analista/Desenvolvedor",
    stack: ["Python", "OpenCV", "TensorFlow", "NumPy"],
    repoUrl: "https://github.com/matheussiqueira-dev/self-drive-car",
    demo: {
      kind: "video",
      src: "/projects/self-drive-car/demo.mp4",
      poster: "/Thmbnail/Thumbnail - Portugues/Carro para Dirigir sem Motorista.png",
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
        src: "/Thmbnail/Thumbnail - Portugues/Carro para Dirigir sem Motorista.png",
        alt: "Capa do projeto Carro Para Dirigir Sem Motorista",
      },
      {
        src: "/projects/self-drive-car/demo.mp4",
        alt: "Demonstração do simulador Carro Para Dirigir Sem Motorista em ação",
        type: "video",
      },
      {
        src: "/projects/self-drive-car/shot-1.webp",
        alt: "Simulação do projeto Carro Para Dirigir Sem Motorista",
      },
    ],
    seo: {
      title: "Carro Para Dirigir Sem Motorista | Simulador de direção autônoma com ML",
      description:
        "Simulador de direção autônoma com Python, OpenCV e TensorFlow para treinar e validar modelos de machine learning em tempo real com telemetria.",
    },
  },
  {
    slug: "library-api-advanced",
    title: "API de Biblioteca Avançada",
    headline: "API de Biblioteca Avançada | API REST com autenticação e regras de negócio",
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
        src: "/Thmbnail/Thumbnail - Portugues/API de Biblioteca Avançada.png",
        alt: "Capa do projeto API de Biblioteca Avançada",
      },
      {
        src: "/library-api-advanced.png",
        alt: "Tela adicional da API de Biblioteca Avançada",
      },
      {
        src: "/projects/library-api-advanced/shot-1.webp",
        alt: "Dashboard técnico da API de Biblioteca Avançada",
      },
    ],
    seo: {
      title: "API de Biblioteca Avançada | API REST com Node.js e PostgreSQL",
      description:
        "API de biblioteca com Node.js, TypeScript, Fastify e PostgreSQL, incluindo autenticação JWT, regras de empréstimo e trilha de auditoria.",
    },
  },
  {
    slug: "driver-monitoring-system",
    title: "Sistema de Monitoramento do Motorista",
    headline: "Sistema de Monitoramento do Motorista | Monitoramento de atenção e fadiga",
    tagline:
      "Sistema de monitoramento do motorista utilizando visão computacional para atenção e fadiga.",
    role: "Analista/Desenvolvedor",
    stack: ["Python", "OpenCV", "MediaPipe", "TensorFlow"],
    repoUrl: "https://github.com/matheussiqueira-dev/Driver-Monitoring-System",
    demo: {
      kind: "video",
      src: "/driver-monitoring-system.mp4",
      poster: "/Thmbnail/Thumbnail - Portugues/Sistema de Monitoramento do Motorista.png",
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
        src: "/Thmbnail/Thumbnail - Portugues/Sistema de Monitoramento do Motorista.png",
        alt: "Capa do projeto Sistema de Monitoramento do Motorista",
      },
      {
        src: "/driver-monitoring-system.mp4",
        alt: "Demonstração do Sistema de Monitoramento do Motorista",
        type: "video",
      },
    ],
    seo: {
      title: "Sistema de Monitoramento do Motorista | Monitoramento de atenção e fadiga",
      description:
        "Sistema de monitoramento do motorista com visão computacional para detectar atenção e fadiga em tempo real usando Python, OpenCV e MediaPipe.",
    },
  },
  {
    slug: "flappy-bird-gesture-control",
    title: "Flappy Bird com Gestos",
    headline: "Flappy Bird | Controle por gestos com MediaPipe e Pygame",
    tagline:
      "Versão do Flappy Bird controlada pela webcam, combinando MediaPipe Hands, OpenCV e Pygame.",
    role: "Desenvolvedor",
    stack: ["Python", "Pygame", "OpenCV", "MediaPipe", "NumPy"],
    repoUrl: "https://github.com/matheussiqueira-dev/Flappy-Bird",
    demo: {
      kind: "video",
      src: "/Flappy-Bird.mp4",
      poster: "/Thmbnail/Thumbnail - Portugues/Flappy Bird com Gestos.png",
      caption: "Jogabilidade do Flappy Bird usando gestos pela webcam.",
    },
    context:
      "Projeto criado para explorar controle hands-free em jogos, mapeando gestos da mão para os comandos do Flappy Bird.",
    problem: [
      "Permitir jogar sem teclado ou mouse, apenas com gestos.",
      "Detectar a mão com estabilidade em tempo real via webcam comum.",
      "Manter a física e a fluidez do Flappy Bird original.",
      "Facilitar ajustes de sensibilidade e debug para demos.",
    ],
    dataUsed: [
      "Frames da webcam capturados pelo OpenCV.",
      "21 landmarks da mão detectados pelo MediaPipe.",
      "Estado da mão (aberta/fechada) e altura no quadro.",
      "Pontuação, velocidade e espaçamento dos canos.",
    ],
    solution: [
      "Pipeline OpenCV + MediaPipe para rastrear mão e suavizar landmarks com filtro temporal.",
      "Mapeamento de gestos discreto (abrir/fechar) e contínuo (altura da mão) para controlar o pássaro.",
      "Loop de jogo em Pygame com física simples, detecção de colisão e HUD de FPS/confiança.",
      "Configurações centralizadas em config.py para calibrar gravidade, força do pulo e sensibilidade.",
    ],
    features: [
      "Dois modos de controle por gestos (discreto e contínuo).",
      "Sistema de pontuação e high score com reinício rápido.",
      "Troca de modo em tempo real e atalhos para debug, pausa e reset.",
      "Preview opcional da câmera com landmarks para calibrar ambiente.",
    ],
    highlights: [
      "Experiência hands-free usando apenas a webcam.",
      "Movimento suave graças a suavização temporal dos landmarks.",
      "Arquitetura modular separando rastreamento, mapeamento e lógica do jogo.",
      "Código didático pronto para demonstrações, workshops e experimentos.",
    ],
    demonstrates: [
      "Visão computacional aplicada a gameplay.",
      "Integração OpenCV + MediaPipe + Pygame em tempo real.",
      "Mapeamento de gestos em comandos discretos e contínuos.",
      "Organização de jogo 2D em Python com foco em clareza.",
    ],
    techSummary:
      "Pipeline em Python que usa OpenCV para captura de vídeo, MediaPipe Hands para detecção e Pygame para renderizar o Flappy Bird controlado por gestos.",
    conclusion: [
      "Validei controle por gestos sem hardware dedicado.",
      "Mantive a mecânica clássica do Flappy Bird com boa responsividade.",
      "Deixei o projeto configurável para novos gestos, temas e ajustes de física.",
    ],
    howToRun: [
      "Pré-requisitos: Python 3.8+, webcam funcional.",
      "Clone o repositório e crie um ambiente virtual.",
      "Instale as dependências: pip install -r requirements.txt",
      "Execute: python main.py",
      "Use M para alternar modo de controle e D para ativar o modo debug.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - Portugues/Flappy Bird com Gestos.png",
        alt: "Capa do Flappy Bird controlado por gestos",
      },
      {
        src: "/Flappy-Bird.mp4",
        alt: "Demonstração do Flappy Bird com controle por gestos",
        type: "video",
      },
    ],
    seo: {
      title:
        "Flappy Bird com Controle por Gestos | MediaPipe, OpenCV e Pygame",
      description:
        "Versão do Flappy Bird controlada pela webcam usando MediaPipe Hands, OpenCV e Pygame, com modos discreto e contínuo de gestos.",
    },
  },
  {
    slug: "subway-surf",
    title: "Subway Surfers",
    headline: "Subway Surfers | Jogo 2D em HTML5 Canvas",
    tagline:
      "Jogo inspirado no Subway Surfers para estudo de lógica e desenvolvimento de games.",
    role: "Desenvolvedor",
    stack: ["JavaScript", "HTML5", "Canvas", "CSS"],
    repoUrl: "https://github.com/matheussiqueira-dev/Subway-Surf",
    demo: {
      kind: "video",
      src: "/Subway Surf.mp4",
      poster: "/Thmbnail/Thumbnail - Portugues/Subway Surfers.png",
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
        src: "/Thmbnail/Thumbnail - Portugues/Subway Surfers.png",
        alt: "Capa do projeto Subway Surfers",
      },
      {
        src: "/Subway Surf.mp4",
        alt: "Gameplay do Subway Surfers",
        type: "video",
      },
    ],
  },
  {
    slug: "slingshot",
    title: "Estilingue",
    headline: "Estilingue | Bubble shooter com ricochete e dicas táticas",
    tagline:
      "Bubble shooter em canvas com mira por toque/mouse, ricochete nas paredes e sugestões de jogada.",
    role: "Desenvolvedor",
    stack: ["JavaScript", "HTML5", "Canvas", "CSS", "Hammer.js"],
    repoUrl: "https://github.com/matheussiqueira-dev/Slingshot.git",
    demo: {
      kind: "video",
      src: "/projects/slingshot/demo.mp4",
      poster: "/Thmbnail/Thumbnail - Portugues/Slingshot.png",
      caption: "Mira por toque, ricochete e dicas táticas em tempo real.",
    },
    context:
      "A ideia era criar um bubble shooter leve e jogável no navegador, com controles amigáveis no desktop e no mobile.",
    problem: [
      "Garantir mira precisa em mouse e toque.",
      "Oferecer jogadas avançadas com ricochete nas paredes.",
      "Sugerir tiros estratégicos sem depender de backend.",
      "Manter performance estável no Canvas.",
    ],
    dataUsed: [
      "Entrada de mouse e toque para direção e disparo.",
      "Grade hexagonal e cores das bolhas para detecção de clusters.",
      "Cálculo de colisão e reflexão nas paredes.",
      "Recorde persistido localmente no navegador.",
    ],
    solution: [
      "Loop de renderização em HTML5 Canvas com atualização contínua.",
      "Sistema de mira responsiva para mouse e toque via Hammer.js.",
      "Cálculo local de dicas de jogada baseado nos clusters visíveis.",
      "Persistência de recorde via armazenamento local.",
    ],
    features: [
      "Mira fluida com controle por toque ou mouse.",
      "Ricochete nas laterais para jogadas avançadas.",
      "Dicas táticas calculadas localmente.",
      "Clusters hexagonais e sistema de cores consistente.",
      "Recorde salvo no navegador.",
      "Interface responsiva e visual minimalista.",
    ],
    highlights: [
      "Jogabilidade direta sem instalação ou backend.",
      "Sugestões estratégicas em tempo real.",
      "Base pronta para níveis, power-ups e novos modos.",
      "Experiência consistente em desktop e mobile.",
    ],
    demonstrates: [
      "Game loop e física simples em HTML5 Canvas.",
      "Suporte a gestos e toque com Hammer.js.",
      "Lógica de clusters e ricochete para bubble shooter.",
      "UI responsiva com foco em performance.",
    ],
    techSummary:
      "Jogo em JavaScript com HTML5 Canvas, gestos via Hammer.js e UI responsiva em CSS.",
    conclusion: [
      "Entreguei um bubble shooter fluido com dicas táticas locais.",
      "Implementei controles touch/mouse e ricochete consistente.",
      "Deixei a base pronta para evolução de níveis e mecânicas.",
    ],
    howToRun: [
      "Clone o repositório.",
      "Abra o arquivo index.html no navegador.",
      "Opcional: sirva com python -m http.server 8000.",
      "Acesse http://localhost:8000 e jogue.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - Portugues/Slingshot.png",
        alt: "Capa do projeto Estilingue",
      },
      {
        src: "/projects/slingshot/demo.gif",
        alt: "Demonstração do Estilingue",
        type: "gif",
      },
      {
        src: "/projects/slingshot/demo.mp4",
        alt: "Gameplay do Estilingue",
        type: "video",
      },
    ],
    seo: {
      title: "Estilingue | Bubble shooter com mira touch e ricochete",
      description:
        "Bubble shooter em HTML5 Canvas com mira por toque/mouse, ricochete nas paredes e dicas táticas calculadas localmente.",
    },
  },
  {
    slug: "fruit-ninja",
    title: "Ninja das Frutas",
    headline: "Ninja das Frutas | Corte por gestos com rastreamento de mão",
    tagline:
      "Experiência de corte com rastreamento de mão em tempo real usando a câmera.",
    role: "Desenvolvedor",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "MediaPipe Tasks Vision",
      "HTML5 Canvas",
      "Tailwind CSS",
    ],
    repoUrl: "https://github.com/matheussiqueira-dev/Clone-Fruit-Ninja.git",
    context:
      "A proposta era criar um Ninja das Frutas jogável no navegador, com controle por gestos e performance consistente em diferentes taxas de quadros.",
    problem: [
      "Garantir rastreamento de mão fluido sem enviar dados para servidores.",
      "Manter física e colisões consistentes em FPS variáveis.",
      "Equilibrar efeitos visuais com performance no Canvas.",
      "Dar feedback de desempenho sem distrair o jogador.",
    ],
    dataUsed: [
      "Frames da câmera para detecção da mão.",
      "Landmarks do indicador para a lâmina virtual.",
      "Delta time para normalizar física e colisões.",
      "Pontuação, combos e eventos de bombas.",
      "Mensagens do sensei baseadas no desempenho.",
    ],
    solution: [
      "Rastreamento local com MediaPipe Tasks Vision usando a câmera do navegador.",
      "Loop de jogo com delta time para física estável.",
      "Canvas otimizado com partículas e trilha sob controle.",
      "HUD com dicas e mensagens contextualizadas do sensei.",
    ],
    features: [
      "Corte por gestos usando o indicador como lâmina.",
      "Pontuação e combos com penalidade por bombas.",
      "Mensagens do sensei em tempo real.",
      "Processamento local sem envio de dados.",
      "Loop otimizado para reduzir trabalho fora do estado ativo.",
    ],
    highlights: [
      "Experiência fluida mesmo em diferentes FPS.",
      "Controle por gestos com baixa latência.",
      "Visual limpo com efeitos balanceados.",
      "Base pronta para novos modos e desafios.",
    ],
    demonstrates: [
      "Integração de visão computacional em web apps.",
      "React + Canvas para gameplay em tempo real.",
      "Otimização de loops e física com delta time.",
      "Design de feedback e HUD em jogos.",
    ],
    techSummary:
      "React + TypeScript + Vite com MediaPipe Tasks Vision e HTML5 Canvas para um jogo de corte por gestos em tempo real.",
    conclusion: [
      "Entreguei um clone jogável com rastreamento de mão estável.",
      "Mantive performance consistente com delta time e loop otimizado.",
      "Preparei a base para adicionar níveis e novas mecânicas.",
    ],
    howToRun: [
      "Clone o repositório.",
      "Instale dependências: npm install.",
      "Inicie o ambiente: npm run dev.",
      "Abra o navegador e permita o acesso à câmera.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - Portugues/Fruit Ninja.png",
        alt: "Capa do projeto Ninja das Frutas",
      },
    ],
    seo: {
      title: "Ninja das Frutas | Corte por gestos com MediaPipe no navegador",
      description:
        "Clone do Ninja das Frutas em React e TypeScript com rastreamento de mão via MediaPipe Tasks Vision e gameplay em HTML5 Canvas.",
    },
  },
  {
    slug: "neon-runner-cyber-hand",
    title: "Corredor Neon: Mão Cibernética",
    headline: "Corredor Neon: Mão Cibernética | Runner cyberpunk controlado por gestos",
    tagline:
      "Infinite runner cyberpunk com visualização da mão em tempo real e atmosfera neon.",
    role: "Desenvolvedor",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Three.js",
      "@react-three/fiber",
      "Zustand",
      "MediaPipe Tasks Vision",
    ],
    repoUrl:
      "https://github.com/matheussiqueira-dev/Neon-Runner-Cyber-Hand.git",
    demo: {
      kind: "video",
      src: "/projects/neon-runner-cyber-hand/demo.mp4",
      poster: "/Thmbnail/Thumbnail - Portugues/Neon Runner - Cyber Hand.png",
      caption: "Runner neon com controle por gestos e mão cibernética em cena.",
    },
    context:
      "Projeto autoral para criar um runner 3D controlado por gestos, com resposta rápida e estética neon.",
    problem: [
      "Converter gestos (pular, deslizar, esquerda/direita) em comandos confiáveis.",
      "Renderizar cena 3D com iluminação e pós-efeitos sem perder performance.",
      "Visualizar a mão como esqueleto cibernético em tempo real.",
      "Manter HUD legível e responsivo em diferentes tamanhos de tela.",
    ],
    dataUsed: [
      "Frames da câmera e landmarks do MediaPipe Tasks Vision.",
      "Posição da mão para detecção de gestos e movimentos.",
      "Estado do jogo (velocidade, obstáculos, colisões).",
      "Eventos do HUD e feedback visual durante o gameplay.",
    ],
    solution: [
      "Detecção local de mão com MediaPipe Tasks Vision no navegador.",
      "Serviço de gestos para mapear pulo, deslize e movimento lateral.",
      "Cena 3D com Three.js + R3F e iluminação estilizada.",
      "Zustand para estado global e HUD reativo.",
    ],
    features: [
      "Controle por gestos (pular, deslizar, esquerda/direita).",
      "Mão renderizada como esqueleto cibernético em tempo real.",
      "Cena 3D com iluminação e pós-efeitos neon.",
      "HUD responsivo com sobreposição limpa.",
      "Processamento local sem envio de dados.",
    ],
    highlights: [
      "Experiência imersiva com estética cyberpunk.",
      "Controle por gestos com baixa latência.",
      "Arquitetura modular com serviços e store dedicados.",
      "Base pronta para novos níveis e desafios.",
    ],
    demonstrates: [
      "Integração MediaPipe + React para controle em tempo real.",
      "Three.js com R3F aplicado a jogos web.",
      "Gerenciamento de estado com Zustand.",
      "Design de interação por gestos e HUD responsivo.",
    ],
    techSummary:
      "React + TypeScript + Vite com Three.js/R3F, Zustand e MediaPipe Tasks Vision para um runner 3D controlado por gestos.",
    conclusion: [
      "Entreguei um runner cyberpunk jogável com controle por gestos.",
      "Mantive visual 3D estilizado com performance estável.",
      "Estruturei uma base extensível para novas mecânicas.",
    ],
    howToRun: [
      "Pré-requisitos: Node.js 18+.",
      "Clone o repositório.",
      "Instale dependências: npm install.",
      "Opcional: configure APP_API_KEY em .env.local.",
      "Baixe o modelo e coloque em public/models/hand_landmarker.task.",
      "Execute: npm run dev.",
      "Abra o navegador e permita o acesso à câmera.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - Portugues/Neon Runner - Cyber Hand.png",
        alt: "Capa do projeto Corredor Neon: Mão Cibernética",
      },
      {
        src: "/projects/neon-runner-cyber-hand/demo.gif",
        alt: "Demonstração do Corredor Neon: Mão Cibernética",
        type: "gif",
      },
      {
        src: "/projects/neon-runner-cyber-hand/demo.mp4",
        alt: "Gameplay do Corredor Neon: Mão Cibernética",
        type: "video",
      },
    ],
    seo: {
      title: "Corredor Neon | Runner 3D com controle por gestos",
      description:
        "Infinite runner cyberpunk em React e Three.js com rastreamento de mão via MediaPipe Tasks Vision e HUD responsivo.",
    },
  },
  {
    slug: "dino-chrome",
    title: "Dino Chrome",
    headline: "Dino Chrome | Jogo 2D em HTML5 Canvas",
    tagline:
      "Clone do jogo do Chrome para treinar lógica de colisão, pontuação e progressão.",
    role: "Desenvolvedor",
    stack: ["JavaScript", "HTML5", "Canvas", "CSS"],
    repoUrl: "https://github.com/matheussiqueira-dev/Dino-Chrome.git",
    demo: {
      kind: "video",
      src: "/projects/dino-chrome/demo.mp4",
      poster: "/Thmbnail/Thumbnail - Portugues/Dino Chrome.png",
      caption: "Gameplay do clone do Dino Chrome.",
    },
    context:
      "Projeto criado para praticar game loop, colisão e controle de personagem em um jogo 2D simples.",
    problem: [
      "Construir um game loop estável no navegador.",
      "Detectar colisões entre o dino e obstáculos em tempo real.",
      "Manter progressão de dificuldade sem quebrar a jogabilidade.",
      "Organizar estados do jogo para reinício rápido.",
    ],
    dataUsed: [
      "Entrada do teclado para ações de salto e movimento.",
      "Estados de jogo (velocidade, pontuação, colisões).",
      "Timers para spawn e reset de obstáculos.",
      "Sprites e posições em tela.",
    ],
    solution: [
      "Renderização em Canvas com loop contínuo.",
      "Sistema simples de colisão e reset de obstáculos.",
      "Aumento gradual de velocidade para desafio.",
      "Separação de lógica de jogo e UI.",
    ],
    features: [
      "Controles responsivos para salto.",
      "Obstáculos dinâmicos com dificuldade progressiva.",
      "Pontuação em tempo real.",
      "Reinício rápido da partida.",
    ],
    highlights: [
      "Jogo leve e responsivo em navegador.",
      "Lógica de colisão consistente.",
      "Base clara para evoluir mecânicas e assets.",
      "Reprodução fiel da experiência clássica do Dino.",
    ],
    demonstrates: [
      "Game loop e renderização em Canvas.",
      "Lógica de colisão e estados do jogo.",
      "Organização modular de código front-end.",
      "Prototipação rápida de jogos 2D.",
    ],
    techSummary:
      "JavaScript e HTML5 Canvas para renderização e lógica, com CSS para layout.",
    conclusion: [
      "Consolidei fundamentos de game loop em JS.",
      "Implementei colisões e pontuação em tempo real.",
      "Deixei uma base pronta para novos níveis.",
    ],
    howToRun: [
      "Clone o repositório.",
      "Abra o arquivo index.html no navegador.",
      "Use o teclado para controlar o personagem.",
      "Acompanhe a pontuação e evite obstáculos.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - Portugues/Dino Chrome.png",
        alt: "Capa do projeto Dino Chrome",
      },
      {
        src: "/projects/dino-chrome/demo.mp4",
        alt: "Gameplay do Dino Chrome",
        type: "video",
      },
    ],
    seo: {
      title: "Dino Chrome | Clone do jogo do Chrome em Canvas",
      description:
        "Clone do Dino Chrome feito em JavaScript e HTML5 Canvas com game loop, colisão e pontuação em tempo real.",
    },
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
      poster: "/Thmbnail/Thumbnail - Portugues/Gestor de Notas.png",
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
        src: "/Thmbnail/Thumbnail - Portugues/Gestor de Notas.png",
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
    slug: "hand-gesture-recognition-realtime",
    title: "Reconhecimento de Gestos de Mão em Tempo Real",
    headline:
      "Reconhecimento de Gestos | Visão Computacional com Python e MediaPipe",
    tagline:
      "Sistema de visão computacional em tempo real para detectar mãos e contar dedos usando webcam.",
    role: "Desenvolvedor",
    stack: ["Python", "OpenCV", "MediaPipe"],
    repoUrl:
      "https://github.com/matheussiqueira-dev/Reconhecimento-de-Gestos-de-Mao",
    demo: {
      kind: "video",
      src: "/Hands Gesture.mp4",
      poster: "/Thmbnail/Thumbnail - Portugues/Reconhecimento de Gestos de Mão em Tempo Real.png",
      caption: "Demonstração do reconhecimento de gestos em tempo real.",
    },
    intro: {
      title:
        "Sistema de Reconhecimento de Gestos de Mão em Tempo Real",
      paragraphs: [
        "Este projeto implementa um sistema de visão computacional em tempo real para detectar mãos e contar dedos usando a webcam do computador.",
        "Desenvolvido com Python, OpenCV e MediaPipe, o sistema é capaz de detectar a mão, extrair landmarks e identificar quantos dedos estão levantados (0 a 5) com alta precisão.",
        "Mais do que uma prova de conceito, este projeto demonstra habilidades em visão computacional, processamento de vídeo em tempo real e integração de bibliotecas de machine learning.",
      ],
      sections: [
        {
          title: "Como Funciona?",
          paragraphs: [
            "O sistema segue um fluxo de processamento bem definido para detectar e analisar os gestos das mãos:",
          ],
          items: [
            "Captura de Vídeo: O OpenCV captura frames contínuos da webcam.",
            "Pré-processamento: Espelhamento da imagem e conversão de BGR para RGB.",
            "Detecção: O modelo MediaPipe processa a imagem e retorna 21 pontos (landmarks) por mão.",
            "Contagem de Dedos: Heurística baseada na posição vertical (dedos) e horizontal (polegar).",
          ],
        },
        {
          title: "Lógica de Contagem de Dedos",
          paragraphs: [
            "A contagem utiliza uma abordagem heurística baseada nas coordenadas dos landmarks:",
          ],
          items: [
            "4 Dedos Principais: Verifica a altura da ponta do dedo em relação à articulação do meio.",
            "Polegar: Verifica a posição horizontal da ponta em relação à articulação base.",
            "Detecção de mão esquerda/direita para ajustar a lógica do polegar.",
          ],
        },
        {
          title: "Tecnologias Utilizadas",
          paragraphs: [
            "O projeto foi construído com uma stack focada em visão computacional:",
          ],
          subSections: [
            {
              title: "Processamento de Vídeo",
              items: [
                "OpenCV para captura e manipulação de frames",
                "Processamento em tempo real com baixa latência",
                "Renderização de landmarks e feedback visual",
              ],
            },
            {
              title: "Machine Learning",
              items: [
                "MediaPipe Hands para detecção e rastreamento de mãos",
                "Modelo pré-treinado com 21 landmarks por mão",
                "Suporte para detecção de até 2 mãos simultaneamente",
              ],
            },
          ],
        },
        {
          title: "Possíveis Melhorias Futuras",
          paragraphs: [
            "O projeto foi estruturado para permitir evolução e novas funcionalidades:",
          ],
          items: [
            "Reconhecimento de gestos específicos (paz, rock, soco fechado, etc.)",
            "Controle do PC usando pyautogui (volume, mouse, atalhos)",
            "Interface gráfica com Streamlit ou PyQt",
            "Contagem refinada para múltiplas mãos simultaneamente",
          ],
        },
        {
          title: "Código Fonte",
          paragraphs: [
            "O código-fonte completo está disponível no GitHub, permitindo análise detalhada da implementação e decisões técnicas.",
          ],
          footer: ["Repositório:"],
          link: {
            label: "github.com/matheussiqueira-dev/Reconhecimento-de-Gestos-de-Mao",
            href: "https://github.com/matheussiqueira-dev/Reconhecimento-de-Gestos-de-Mao",
          },
        },
      ],
    },
    context:
      "Projeto educacional e de portfólio para demonstrar habilidades em visão computacional e processamento de vídeo em tempo real usando Python.",
    problem: [
      "Necessidade de detectar gestos de mão sem hardware especializado.",
      "Contagem de dedos precisa para aplicações de interface natural.",
      "Processamento em tempo real com baixa latência.",
    ],
    dataUsed: [
      "Frames de vídeo da webcam em tempo real.",
      "21 landmarks da mão detectados pelo MediaPipe.",
      "Coordenadas X, Y normalizadas para análise de gestos.",
    ],
    solution: [
      "Pipeline de visão computacional com OpenCV para captura de vídeo.",
      "Integração com MediaPipe Hands para detecção de landmarks.",
      "Heurística de contagem de dedos baseada em posição dos landmarks.",
      "Feedback visual em tempo real com desenho do esqueleto da mão.",
    ],
    features: [
      "Detecção de mãos em tempo real via webcam.",
      "Contagem precisa de dedos levantados (0 a 5).",
      "Suporte para detecção de até 2 mãos simultaneamente.",
      "Espelhamento de imagem para interação natural.",
      "Visualização do esqueleto (landmarks) da mão.",
    ],
    highlights: [
      "Alta precisão na contagem de dedos.",
      "Baixa latência para processamento em tempo real.",
      "Código limpo e bem documentado.",
      "Base sólida para projetos de interface natural.",
    ],
    demonstrates: [
      "Visão computacional com OpenCV e MediaPipe.",
      "Processamento de vídeo em tempo real com Python.",
      "Heurísticas para análise de gestos.",
      "Desenvolvimento de aplicações interativas.",
    ],
    techSummary:
      "Python com OpenCV para captura de vídeo e MediaPipe para detecção de landmarks, com heurística de contagem de dedos e feedback visual em tempo real.",
    conclusion: [
      "Projeto funcional demonstrando visão computacional aplicada.",
      "Base extensível para controle de PC e interfaces naturais.",
      "Desenvolvido para fins educacionais e portfólio.",
    ],
    howToRun: [
      "Pré-requisitos: Python 3.7+, webcam funcional.",
      "Instale as dependências: pip install opencv-python mediapipe",
      "Execute: python hand_gestures.py",
      "Pressione 'q' para fechar o programa.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - Portugues/Reconhecimento de Gestos de Mão em Tempo Real.png",
        alt: "Capa do projeto de reconhecimento de gestos de mão",
      },
      {
        src: "/Hands Gesture.gif",
        alt: "Demonstração em GIF do reconhecimento de gestos em tempo real",
        type: "gif",
      },
      {
        src: "/Hands Gesture.mp4",
        alt: "Demonstração do reconhecimento de gestos em tempo real",
        type: "video",
      },
    ],
    seo: {
      title:
        "Reconhecimento de Gestos de Mão em Tempo Real | Python, OpenCV e MediaPipe",
      description:
        "Sistema de visão computacional em tempo real para detectar mãos e contar dedos usando Python, OpenCV e MediaPipe. Projeto educacional com alta precisão.",
    },
  },
  {
    slug: "detector-de-stress",
    title: "Detector de Stress",
    headline: "Detector de Stress | Score fisiológico em tempo real via webcam",
    tagline:
      "Pipeline modular que estima o nível de stress apenas com webcam, HUD, REST/WS e dashboard.",
    role: "Desenvolvedor/Arquiteto",
    stack: ["Python", "OpenCV", "MediaPipe", "Streamlit", "WebSockets", "Machine Learning"],
    repoUrl: "https://github.com/matheussiqueira-dev/Detector-de-Stress",
    demo: {
      kind: "video",
      src: "/Detector de Stress.mp4",
      poster: "/Thmbnail/Thumbnail - Portugues/Detector de Stress.png",
      caption: "HUD, baseline e broadcasting em tempo real.",
    },
    intro: {
      title: "StressCam: estimativa contínua de stress via visão computacional",
      paragraphs: [
        "Pipeline em loop contínuo para estimar stress fisiológico sem hardware dedicado, apenas com webcam e ajustes de iluminação.",
        "Entrega o score suavizado, tendência e mensagens interpretáveis em HUD OpenCV, API REST /score e WebSocket a 5 Hz.",
      ],
      sections: [
        {
          title: "Como funciona",
          items: [
            "Equalização de luz e espelhamento opcionais antes do processamento.",
            "Detecção de face com MediaPipe e extração de EAR, tensão facial e área pupilar.",
            "Buffers temporais + EMA para suavizar ruído e baseline personalizado de cada pessoa.",
          ],
        },
        {
          title: "Entrega de dados",
          items: [
            "HUD com histórico rolling de 30s, alertas e mensagens em português.",
            "Servidor REST/WS opcional para integrar dashboards externos.",
            "Dashboard Streamlit para visualização rápida do score e tuning.",
          ],
        },
      ],
      video: {
        src: "/Detector de Stress.mp4",
        poster: "/Thmbnail/Thumbnail - Portugues/Detector de Stress.png",
        caption: "Veja a demonstração em vídeo: score, tendência e alertas em tempo real.",
      },
    },
    context:
      "Monitorar sinais de stress sem sensores biométricos, com baixo custo e integração simples para dashboards ou provas de conceito.",
    problem: [
      "Obter um score contínuo de stress apenas com webcam, sem wearables.",
      "Reduzir ruído de iluminação e movimentos de cabeça em tempo real.",
      "Calibrar baseline individual sem intervenção manual.",
      "Disponibilizar o score em APIs para dashboards e integrações.",
    ],
    dataUsed: [
      "Frames da webcam normalizados (espelhamento e equalização opcional).",
      "Landmarks faciais (MediaPipe) para EAR, tensão geométrica e área pupilar.",
      "Buffers temporais com EMA para suavizar score e tendência.",
      "Eventos do HUD (mensagens, avisos de iluminação/centralização).",
    ],
    solution: [
      "Captura de vídeo com OpenCV e equalização CLAHE para estabilidade de luz.",
      "Extração de EAR, tensão facial e pupila; vetorização via pack_features.",
      "Baseline normalizado por pessoa e regressão leve (SGD/RandomForest) com clipping 0-1.",
      "Streaming do score: HUD OpenCV + REST (/score) + WebSocket 5 Hz + dashboard Streamlit.",
    ],
    features: [
      "Modo demonstração com alta sensibilidade e ajuste automático de gráficos.",
      "Baseline guiado com mensagens no HUD para calibração inicial.",
      "Atalhos rápidos: salvar frames, alternar modo demo, encerrar com 'q'.",
      "Servidor REST/WS opcional para expor score e tendência em tempo real.",
    ],
    highlights: [
      "Pipeline de visão computacional calibrável e de baixa latência.",
      "Entrega de dados em múltiplos canais (HUD, REST, WebSocket, dashboard).",
      "Feature engineering temporal para reduzir ruído e falsos positivos.",
      "Pronto para conectar a dashboards ou análises de bem-estar.",
    ],
    demonstrates: [
      "Visão computacional em streaming com MediaPipe + OpenCV.",
      "Feature engineering e suavização temporal com EMA e buffers deslizantes.",
      "APIs em tempo real via http.server e websockets para produtos de dados.",
      "UX de monitoramento contínuo com HUD interpretável e modo demo.",
    ],
    techSummary:
      "Python com OpenCV e MediaPipe para rastreamento facial, regressão leve (SGD/RandomForest) com baseline personalizado, streaming via http.server + websockets e dashboard em Streamlit.",
    conclusion: [
      "Construí um pipeline completo, calibrável e observável para score de stress em tempo real.",
      "Integrei entrega multi-canal (HUD, REST, WS) para facilitar dashboards e POCs.",
      "Deixei ganchos claros para evolução de modelo, novas features e métricas.",
    ],
    howToRun: [
      "Recomendado Python 3.10.",
      "Crie o ambiente: py -3.10 -m venv .venv && .venv\\Scripts\\activate.",
      "Instale dependências: pip install -r requirements.txt.",
      "Execute: python -m stresscam.app (tecla q para sair, d para modo demo).",
      "Dashboard opcional: streamlit run stresscam/streamlit_app.py.",
      "Para API externa: habilite o servidor e acesse GET /score ou ws://localhost:8765/.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - Portugues/Detector de Stress.png",
        alt: "Capa do Detector de Stress",
      },
      {
        src: "/Detector de Stress.mp4",
        alt: "Demonstração em vídeo do Detector de Stress",
        type: "video",
      },
    ],
    seo: {
      title: "Detector de Stress | Score em tempo real via webcam",
      description:
        "Pipeline MediaPipe + OpenCV que estima stress fisiológico com baseline individual, HUD, REST/WS e dashboard Streamlit.",
    },
  },
];

export const projectOrder = [
  "capa-da-invisibilidade",
  "business-decision-simulator",
  "deteccao-de-anomalias-operacionais",
  "dashboard-vendas-power-bi",
  "detector-de-stress",
  "touchless-web-gesture-interface",
  "driver-monitoring-system",
  "self-drive-car",
  "chatbot-ia-api",
  "library-api-advanced",
  "hand-gesture-recognition-realtime",
  "flappy-bird-gesture-control",
  "subway-surf",
  "slingshot",
  "fruit-ninja",
  "neon-runner-cyber-hand",
  "dino-chrome",
  "gestor-de-notas",
];

const sortByPriority = <T extends { slug: string }>(items: T[]) => {
  const order = new Map(projectOrder.map((slug, index) => [slug, index]));
  return [...items].sort((a, b) => {
    const aIndex = order.get(a.slug) ?? order.size;
    const bIndex = order.get(b.slug) ?? order.size;
    return aIndex - bIndex;
  });
};

export const projects = sortByPriority(projectList);

export const projectSlugs = projects.map((project) => project.slug);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export type InlineDemoId = import("../src/data/projects").InlineDemoId;
export type Project = import("../src/data/projects").Project;
export { getProjectById, interactiveProjectIds } from "../src/data/projects";




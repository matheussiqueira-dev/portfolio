import type { Project as ProjectCase } from "./projects.types";

const projectList: ProjectCase[] = [
  {
    slug: "business-decision-simulator",
    title: "Simulador de DecisÃ£o Empresarial",
    headline:
      "Simulador de DecisÃ£o Empresarial | CenÃ¡rios, risco e impacto financeiro",
    tagline:
      "Simulador interativo para comparar estratÃ©gias e medir impacto financeiro com Monte Carlo e anÃ¡lise de sensibilidade.",
    role: "Analista/Desenvolvedor",
    stack: ["Python", "Streamlit", "Pandas", "NumPy", "Plotly"],
    repoUrl:
      "https://github.com/matheussiqueira-dev/Simulacao-Estrategica-de-Decisao-Empresarial.git",
    demo: {
      kind: "video",
      src: "/SimulaÃ§Ã£o EstratÃ©gica de DecisÃ£o Empresarial.mp4",
      poster: "/Thmbnail/Thumbnail - Portugues/Simulador de Decisão Empresarial.png",
      caption: "CenÃ¡rios lado a lado, risco e KPIs em tempo real.",
    },
    intro: {
      title: "Simulador EstratÃ©gico de DecisÃ£o Empresarial",
      paragraphs: [
        "Ferramenta interativa para testar estratÃ©gias de negÃ³cio e visualizar impacto em receita, margem e caixa.",
        "Permite comparar cenÃ¡rios em tempo real, incluindo incerteza com simulaÃ§Ãµes de Monte Carlo e grÃ¡ficos de sensibilidade.",
      ],
      sections: [
        {
          title: "O que o vÃ­deo demonstra",
          items: [
            "Ajuste rÃ¡pido de alavancas (preÃ§o, volume, CAC, churn, capacidade).",
            "ComparaÃ§Ã£o lado a lado de cenÃ¡rios base, otimista e conservador.",
            "AnÃ¡lise de risco com distribuiÃ§Ã£o de resultados e intervalos de confianÃ§a.",
          ],
        },
        {
          title: "Uso tÃ­pico",
          items: [
            "Planejamento de mercado e lanÃ§amento de produtos.",
            "AvaliaÃ§Ã£o de investimentos e payback.",
            "RevisÃ£o de metas trimestrais com diretoria.",
          ],
        },
      ],
      video: {
        src: "/SimulaÃ§Ã£o EstratÃ©gica de DecisÃ£o Empresarial.mp4",
        poster: "/Thmbnail/Thumbnail - Portugues/Simulador de Decisão Empresarial.png",
        caption: "Tour pelas telas de cenÃ¡rios, risco e KPIs.",
      },
    },
    context:
      "Gestores precisavam comparar decisÃµes estratÃ©gicas sem depender de planilhas desconexas, entendendo impacto financeiro e riscos em minutos.",
    problem: [
      "Dificuldade em comparar mÃºltiplos cenÃ¡rios com incerteza.",
      "Falta de visualizaÃ§Ãµes claras para comunicar riscos ao board.",
      "DependÃªncia de planilhas complexas e pouco auditÃ¡veis.",
      "Pouca agilidade para testar hipÃ³teses e trade-offs de negÃ³cio.",
    ],
    dataUsed: [
      "Premissas de preÃ§o, volume, CAC, churn, custo variÃ¡vel e fixo.",
      "Curvas de demanda e elasticidade por segmento.",
      "DistribuiÃ§Ãµes de risco para receitas e custos (Monte Carlo).",
      "KPIs financeiros: margem, payback, ROI e fluxo de caixa projetado.",
    ],
    solution: [
      "Modelo financeiro parametrizado com simulaÃ§Ã£o Monte Carlo para incerteza.",
      "Painel Streamlit com controles interativos e comparaÃ§Ã£o de cenÃ¡rios.",
      "VisualizaÃ§Ãµes Plotly (tornado, waterfall, violin) para sensibilidade e risco.",
      "ExportaÃ§Ã£o de cenÃ¡rios e parÃ¢metros para CSV/PDF compartilhÃ¡vel.",
    ],
    features: [
      "CenÃ¡rios base, otimista e conservador lado a lado.",
      "SimulaÃ§Ã£o estocÃ¡stica com milhares de execuÃ§Ãµes e intervalos de confianÃ§a.",
      "GrÃ¡ficos de sensibilidade para identificar variÃ¡veis crÃ­ticas.",
      "Download de premissas e resultados para reprodutibilidade.",
    ],
    highlights: [
      "DecisÃ£o orientada a dados sem depender de macros ou planilhas frÃ¡geis.",
      "ExploraÃ§Ã£o rÃ¡pida de hipÃ³teses com feedback visual imediato.",
      "ComunicaÃ§Ã£o clara de risco para diretoria e investidores.",
      "Base pronta para conectar a BI ou data warehouse.",
    ],
    demonstrates: [
      "Modelagem financeira e simulaÃ§Ã£o Monte Carlo em Python.",
      "Design de UX orientado a negÃ³cio no Streamlit.",
      "VisualizaÃ§Ãµes avanÃ§adas com Plotly para sensibilidade e risco.",
      "Boas prÃ¡ticas de caching e parametrizaÃ§Ã£o de cenÃ¡rios.",
    ],
    techSummary:
      "Python com Streamlit, Pandas, NumPy e Plotly para um simulador financeiro interativo com Monte Carlo e anÃ¡lise de sensibilidade.",
    conclusion: [
      "Entreguei um simulador que responde em tempo real a mudanÃ§as de premissa.",
      "Reduzi dependÃªncia de planilhas, centralizando lÃ³gica e visualizaÃ§Ã£o.",
      "Deixei ganchos para integraÃ§Ã£o com pipelines de dados corporativos.",
    ],
    howToRun: [
      "PrÃ©-requisitos: Python 3.10+.",
      "Clone o repositÃ³rio e crie um ambiente virtual.",
      "Instale dependÃªncias: pip install -r requirements.txt.",
      "Execute: streamlit run app.py.",
      "Ajuste premissas no painel e exporte cenÃ¡rios conforme necessÃ¡rio.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - Portugues/Simulador de Decisão Empresarial.png",
        alt: "Capa do Simulador de DecisÃ£o Empresarial",
      },
      {
        src: "/SimulaÃ§Ã£o EstratÃ©gica de DecisÃ£o Empresarial.mp4",
        alt: "DemonstraÃ§Ã£o do Simulador de DecisÃ£o Empresarial",
        type: "video",
      },
    ],
    seo: {
      title:
        "Simulador de DecisÃ£o Empresarial | CenÃ¡rios financeiros com Monte Carlo",
      description:
        "Simulador interativo em Python/Streamlit para comparar estratÃ©gias, rodar Monte Carlo e comunicar risco e impacto financeiro.",
    },
  },
  {
    slug: "dashboard-vendas-power-bi",
    title: "Dashboard de Vendas - Power BI",
    headline:
      "Dashboard de Vendas | Power BI com KPIs, metas e anÃ¡lises por regiÃ£o",
    tagline:
      "Dashboard em Power BI para acompanhar desempenho de vendas, metas e mix de produtos com filtros dinÃ¢micos.",
    role: "Analista de Dados",
    stack: ["Power BI", "DAX", "Power Query", "Excel"],
    repoUrl:
      "https://github.com/matheussiqueira-dev/Dashboard-de-Vendas---Power-BI.git",
    demoUrl: "/projects/dashboard-vendas-power-bi/dashboard.pdf",
    demo: {
      kind: "video",
      src: "/projects/dashboard-vendas-power-bi/demo.mp4",
      poster: "/Thmbnail/Thumbnail - Portugues/Dashboard de Vendas - Power B.I..png",
      caption: "VisÃ£o geral do dashboard e filtros principais.",
    },
    intro: {
      title: "Dashboard de Vendas em Power BI",
      paragraphs: [
        "Dashboard focado em monitorar receita, volume, ticket mÃ©dio e metas por perÃ­odo, canal e regiÃ£o.",
        "Combina modelagem de dados, medidas DAX e visualizaÃ§Ãµes orientadas Ã  tomada de decisÃ£o.",
      ],
      sections: [
        {
          title: "O que o dashboard entrega",
          items: [
            "KPIs de vendas com variaÃ§Ã£o vs. meta e perÃ­odo anterior.",
            "AnÃ¡lise por regiÃ£o, canal e linha de produto.",
            "Ranking de produtos e clientes com filtros dinÃ¢micos.",
          ],
        },
        {
          title: "Material de apoio",
          footer: ["PDF com visÃ£o geral do dashboard e principais telas."],
          link: {
            label: "Abrir PDF do dashboard",
            href: "/projects/dashboard-vendas-power-bi/dashboard.pdf",
          },
        },
      ],
      video: {
        src: "/projects/dashboard-vendas-power-bi/demo.mp4",
        poster: "/Thmbnail/Thumbnail - Portugues/Dashboard de Vendas - Power B.I..png",
        caption: "KPIs, filtros e leitura rÃ¡pida de desempenho.",
      },
    },
    context:
      "A operaÃ§Ã£o comercial precisava consolidar indicadores de vendas em uma visÃ£o Ãºnica, com filtros rÃ¡pidos para regiÃµes, canais e produtos.",
    problem: [
      "Dados dispersos em planilhas e pouca padronizaÃ§Ã£o de mÃ©tricas.",
      "Dificuldade em acompanhar metas e variaÃ§Ãµes por perÃ­odo.",
      "Baixa visibilidade do mix de produtos e canais com melhor desempenho.",
      "Tempo alto para preparar relatÃ³rios executivos.",
    ],
    dataUsed: [
      "Base de pedidos e itens de venda.",
      "CalendÃ¡rio para anÃ¡lises sazonais.",
      "Metas comerciais por perÃ­odo e regiÃ£o.",
      "DimensÃµes de produto, canal e localidade.",
    ],
    solution: [
      "Modelagem em estrela com fato de vendas e dimensÃµes de produto, canal, regiÃ£o e calendÃ¡rio.",
      "Tratamento e limpeza de dados no Power Query.",
      "Medidas DAX para KPIs, variaÃ§Ãµes e participaÃ§Ã£o no total.",
      "PÃ¡ginas com visÃ£o executiva e detalhamento operacional.",
    ],
    features: [
      "KPIs de receita, volume, ticket mÃ©dio e margem.",
      "VisÃ£o por regiÃ£o, canal e produto com filtros interativos.",
      "Rankings e contribuiÃ§Ãµes percentuais.",
      "Indicadores de meta vs. realizado por perÃ­odo.",
    ],
    highlights: [
      "VisÃ£o executiva pronta para reuniÃµes semanais.",
      "ReduÃ§Ã£o de tempo de consolidaÃ§Ã£o de relatÃ³rios.",
      "Estrutura escalÃ¡vel para novas dimensÃµes e metas.",
      "Leitura rÃ¡pida de performance com foco em decisÃ£o.",
    ],
    demonstrates: [
      "Modelagem de dados no Power BI.",
      "CriaÃ§Ã£o de medidas DAX para KPIs e variaÃ§Ãµes.",
      "Design de dashboards orientado Ã  decisÃ£o.",
      "Tratamento de dados com Power Query.",
    ],
    techSummary:
      "Power BI com Power Query para ETL e DAX para mÃ©tricas e indicadores comerciais.",
    conclusion: [
      "Entreguei um painel de vendas com KPIs claros e filtros intuitivos.",
      "Facilitei o acompanhamento de metas e tendÃªncias sazonais.",
      "Deixei a base pronta para evoluÃ§Ã£o com novas fontes de dados.",
    ],
    howToRun: [
      "Clone o repositÃ³rio.",
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
        alt: "DemonstraÃ§Ã£o do Dashboard de Vendas",
        type: "video",
      },
    ],
    seo: {
      title: "Dashboard de Vendas | Power BI com KPIs e metas",
      description:
        "Dashboard em Power BI para monitorar vendas, metas, mix de produtos e desempenho por regiÃ£o, com KPIs e filtros dinÃ¢micos.",
    },
  },
  {
    slug: "deteccao-de-anomalias-operacionais",
    title: "DetecÃ§Ã£o de Anomalias Operacionais",
    headline:
      "DetecÃ§Ã£o de Anomalias | Radar operacional em tempo real",
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
      caption: "Radar com alertas de anomalia e histÃ³rico de mÃ©tricas.",
    },
    intro: {
      title: "Operational Anomaly Radar (MVP)",
      paragraphs: [
        "Plataforma de monitoramento operacional com detecÃ§Ã£o automÃ¡tica de anomalias em sÃ©ries temporais.",
        "Combina ingestÃ£o via API/WS, modelos de detecÃ§Ã£o e dashboard interativo para priorizar eventos crÃ­ticos.",
      ],
      sections: [
        {
          title: "O que o sistema entrega",
          items: [
            "Alertas em tempo real para mÃ©tricas fora do padrÃ£o.",
            "HistÃ³rico de sÃ©ries temporais com filtros por fonte e mÃ©trica.",
            "Painel interativo com visualizaÃ§Ã£o e investigaÃ§Ã£o rÃ¡pida.",
          ],
        },
        {
          title: "Arquitetura resumida",
          items: [
            "FastAPI com rotas REST/WS para ingestÃ£o e alertas.",
            "TimescaleDB para armazenamento de sÃ©ries temporais.",
            "Frontend React + D3 para radar e timeline.",
          ],
        },
      ],
      video: {
        src: "/projects/deteccao-de-anomalias-operacionais/demo.mp4",
        poster: "/Thmbnail/Thumbnail - Portugues/Detecção de Anomalias Operacionais.png",
        caption: "DetecÃ§Ã£o automÃ¡tica, alertas e investigaÃ§Ã£o em um sÃ³ painel.",
      },
    },
    context:
      "Times operacionais precisavam detectar desvios rapidamente, sem depender de varredura manual de dashboards.",
    problem: [
      "Alertas demoravam a ser percebidos em picos ou quedas abruptas.",
      "MÃ©tricas crÃ­ticas estavam dispersas em diferentes visÃµes.",
      "Baixa rastreabilidade dos eventos anÃ´malos no tempo.",
      "Re-treinamento manual dos modelos dificultava a operaÃ§Ã£o.",
    ],
    dataUsed: [
      "SÃ©ries temporais de mÃ©tricas operacionais.",
      "Eventos de ingestÃ£o via API e WebSocket.",
      "Metadados de origem, tags e unidade.",
      "HistÃ³rico para treino de modelos de detecÃ§Ã£o.",
    ],
    solution: [
      "API FastAPI com endpoints de ingestÃ£o, histÃ³rico e alertas WS.",
      "DetecÃ§Ã£o com Isolation Forest e estratÃ©gia hÃ­brida (opcional).",
      "TimescaleDB para retenÃ§Ã£o eficiente de sÃ©ries temporais.",
      "Frontend React + D3 para radar e anÃ¡lise exploratÃ³ria.",
    ],
    features: [
      "Alertas em tempo real via WebSocket.",
      "Dashboard com filtros por fonte, mÃ©trica e perÃ­odo.",
      "Endpoint /train para re-treinamento sob demanda.",
      "Health checks e mÃ©tricas para observabilidade.",
    ],
    highlights: [
      "ReduÃ§Ã£o do tempo de identificaÃ§Ã£o de incidentes.",
      "Arquitetura em camadas com separaÃ§Ã£o de domÃ­nio e serviÃ§os.",
      "Pronto para integraÃ§Ã£o com Kafka e pipelines externos.",
      "Base extensÃ­vel para novos modelos e mÃ©tricas.",
    ],
    demonstrates: [
      "DetecÃ§Ã£o de anomalias em sÃ©ries temporais.",
      "APIs REST/WS para dados em tempo real.",
      "Modelagem de dados temporais com TimescaleDB.",
      "VisualizaÃ§Ã£o avanÃ§ada com React e D3.",
    ],
    techSummary:
      "FastAPI + Isolation Forest com TimescaleDB e dashboard React/D3 para monitoramento operacional em tempo real.",
    conclusion: [
      "Entreguei uma base sÃ³lida para alerta e investigaÃ§Ã£o de anomalias.",
      "Integrei ingestÃ£o em tempo real com detecÃ§Ã£o automÃ¡tica.",
      "Preparei o sistema para evoluÃ§Ã£o com observabilidade e novos modelos.",
    ],
    howToRun: [
      "Clone o repositÃ³rio.",
      "Copie backend/.env.example para backend/.env.",
      "Execute: docker compose up --build.",
      "Acesse o frontend e o backend em http://localhost:3000 e http://localhost:8000.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - Portugues/Detecção de Anomalias Operacionais.png",
        alt: "Capa do projeto DetecÃ§Ã£o de Anomalias Operacionais",
      },
      {
        src: "/projects/deteccao-de-anomalias-operacionais/demo.gif",
        alt: "Demo em GIF da DetecÃ§Ã£o de Anomalias Operacionais",
        type: "gif",
      },
      {
        src: "/projects/deteccao-de-anomalias-operacionais/demo.mp4",
        alt: "DemonstraÃ§Ã£o da DetecÃ§Ã£o de Anomalias Operacionais",
        type: "video",
      },
    ],
    seo: {
      title: "DetecÃ§Ã£o de Anomalias | Monitoramento operacional em tempo real",
      description:
        "Plataforma com FastAPI, TimescaleDB e React/D3 para detectar anomalias em mÃ©tricas operacionais e emitir alertas em tempo real.",
    },
  },
  {
    slug: "touchless-web-gesture-interface",
    title: "Interface Web de Gestos Sem Contato",
    headline: "Interface Web de Gestos Sem Contato | VisÃ£o computacional para dashboards",
    tagline: "Interface web touchless com visÃ£o computacional para navegar dashboards e data apps.",
    role: "Analista/Desenvolvedor",
    stack: ["Python", "FastAPI", "OpenCV", "MediaPipe", "React"],
    repoUrl:
      "https://github.com/matheussiqueira-dev/Interface-Web-de-Gestos-Sem-Contato.git",
    demo: {
      kind: "video",
      src: "/touchless-web-gesture-interface.mp4",
      poster: "/Thmbnail/Thumbnail - Portugues/Interface Web de Gestos Sem Contato.png",
      caption: "DemonstraÃ§Ã£o rÃ¡pida da interface touchless em uso.",
    },
    intro: {
      title: "Interface Web de Gestos Sem Contato â Controle Web por Gestos em Tempo Real",
      paragraphs: [
        "A Interface Web de Gestos Sem Contato Ã© uma aplicaÃ§Ã£o web inovadora que permite interagir com interfaces digitais sem tocar no mouse ou no teclado, utilizando apenas gestos das mÃ£os capturados pela webcam, diretamente no navegador.",
        "Este projeto foi desenvolvido com foco em inovaÃ§Ã£o, experiÃªncia do usuÃ¡rio e aplicaÃ§Ã£o prÃ¡tica de visÃ£o computacional, explorando como tecnologias modernas podem transformar a forma como pessoas interagem com sistemas web.",
        "Mais do que uma prova de conceito, este projeto demonstra habilidades reais em desenvolvimento frontend moderno, arquitetura de aplicaÃ§Ãµes, processamento de vÃ­deo em tempo real e integraÃ§Ã£o de bibliotecas avanÃ§adas de visÃ£o computacional.",
      ],
      sections: [
        {
          title: "O que Ã© a Interface Web de Gestos Sem Contato?",
          paragraphs: [
            "A Interface Web de Gestos Sem Contato Ã© uma interface web controlada por gestos, onde os movimentos da mÃ£o do usuÃ¡rio sÃ£o reconhecidos em tempo real e convertidos em aÃ§Ãµes dentro da aplicaÃ§Ã£o.",
            "A soluÃ§Ã£o utiliza Computer Vision no browser, eliminando a necessidade de hardware adicional ou softwares externos. Basta uma webcam e um navegador moderno.",
            "O objetivo principal do projeto Ã© mostrar como a web pode ser usada como plataforma para soluÃ§Ãµes interativas avanÃ§adas, aplicÃ¡veis em Ã¡reas como:",
          ],
          items: [
            "Interfaces acessÃ­veis",
            "ExperiÃªncias imersivas",
            "Sistemas touchless",
            "ProtÃ³tipos para produtos digitais inovadores",
          ],
        },
        {
          title: "Principais Funcionalidades",
          paragraphs: [
            "A aplicaÃ§Ã£o oferece uma sÃ©rie de funcionalidades que demonstram tanto domÃ­nio tÃ©cnico quanto preocupaÃ§Ã£o com usabilidade:",
          ],
          items: [
            "Rastreamento de mÃ£os em tempo real usando MediaPipe Hands",
            "Reconhecimento de gestos naturais, como pinÃ§a e movimentos contÃ­nuos",
            "Cursor virtual controlado pela mÃ£o, simulando interaÃ§Ãµes tradicionais",
            "InteraÃ§Ã£o com elementos visuais sem qualquer contato fÃ­sico",
            "AtualizaÃ§Ã£o fluida e responsiva, mesmo com processamento em tempo real",
          ],
          footer: [
            "Essas funcionalidades mostram a viabilidade de interfaces touchless em ambientes web modernos, mantendo boa performance e experiÃªncia do usuÃ¡rio.",
          ],
        },
        {
          title: "Tecnologias Utilizadas no Projeto",
          paragraphs: [
            "Este projeto foi construÃ­do utilizando uma stack moderna e amplamente adotada no mercado de tecnologia:",
          ],
          subSections: [
            {
              title: "Frontend e Arquitetura",
              items: [
                "React para construÃ§Ã£o de interfaces reativas e componentizadas",
                "TypeScript garantindo tipagem forte, organizaÃ§Ã£o e escalabilidade do cÃ³digo",
                "Vite como bundler moderno, proporcionando carregamento rÃ¡pido e DX eficiente",
              ],
            },
            {
              title: "VisÃ£o Computacional",
              items: [
                "Google MediaPipe Hands para detecÃ§Ã£o e rastreamento das mÃ£os",
                "Processamento de vÃ­deo diretamente no navegador",
                "ConversÃ£o de landmarks da mÃ£o em aÃ§Ãµes interativas",
              ],
            },
            {
              title: "Estilo e Interface",
              items: [
                "CSS moderno com foco em responsividade",
                "Interface limpa e intuitiva",
                "Conceitos de UX experimental, explorando novas formas de interaÃ§Ã£o",
              ],
            },
          ],
          footer: [
            "Essa combinaÃ§Ã£o tecnolÃ³gica reflete prÃ¡ticas reais do mercado e demonstra capacidade de trabalhar com projetos complexos e de alta performance.",
          ],
        },
        {
          title: "Por que este projeto Ã© relevante?",
          paragraphs: [
            "A Interface Web de Gestos Sem Contato vai alÃ©m de um simples experimento tÃ©cnico.",
          ],
          subSections: [
            {
              title: "Ele demonstra competÃªncias essenciais para Ã¡reas como:",
              items: [
                "Desenvolvimento Web AvanÃ§ado",
                "AnÃ¡lise de dados de movimento e eventos",
                "IntegraÃ§Ã£o entre frontend e processamento em tempo real",
                "CriaÃ§Ã£o de soluÃ§Ãµes inovadoras centradas no usuÃ¡rio",
              ],
            },
            {
              title: "Projetos como este sÃ£o especialmente relevantes em cenÃ¡rios onde:",
              items: [
                "Acessibilidade Ã© prioridade",
                "Interfaces sem contato sÃ£o desejÃ¡veis",
                "ExperiÃªncia do usuÃ¡rio precisa ir alÃ©m do convencional",
              ],
            },
          ],
          footer: [
            "Ele tambÃ©m evidencia a capacidade de pesquisar, implementar e adaptar tecnologias emergentes para resolver problemas reais.",
          ],
        },
        {
          title: "Arquitetura e OrganizaÃ§Ã£o do CÃ³digo",
          paragraphs: [
            "O cÃ³digo do projeto foi estruturado seguindo boas prÃ¡ticas de desenvolvimento:",
          ],
          items: [
            "SeparaÃ§Ã£o clara de responsabilidades",
            "Componentes reutilizÃ¡veis",
            "Tipagem forte com TypeScript",
            "Facilidade de manutenÃ§Ã£o e evoluÃ§Ã£o do projeto",
          ],
          footer: [
            "Essa organizaÃ§Ã£o facilita tanto a escalabilidade quanto o entendimento por outros desenvolvedores, algo essencial em ambientes colaborativos e profissionais.",
          ],
        },
        {
          title: "AplicaÃ§Ãµes PrÃ¡ticas da Interface Web de Gestos Sem Contato",
          paragraphs: [
            "Este tipo de soluÃ§Ã£o pode ser aplicada em diversos contextos, como:",
          ],
          items: [
            "Dashboards interativos controlados por gestos",
            "Ambientes corporativos e apresentaÃ§Ãµes sem contato fÃ­sico",
            "ExperiÃªncias educacionais e demonstrativas",
            "ProtÃ³tipos de produtos digitais inovadores",
            "Interfaces acessÃ­veis para pessoas com mobilidade reduzida",
          ],
          footer: [
            "Tudo isso reforÃ§a o potencial da aplicaÃ§Ã£o no ecossistema de tecnologia, dados e desenvolvimento web.",
          ],
        },
        {
          title: "CÃ³digo Fonte e DemonstraÃ§Ã£o",
          paragraphs: [
            "O cÃ³digo-fonte completo estÃ¡ disponÃ­vel no GitHub, permitindo anÃ¡lise detalhada da implementaÃ§Ã£o, arquitetura e decisÃµes tÃ©cnicas tomadas durante o desenvolvimento.",
          ],
          footer: ["RepositÃ³rio:"],
          link: {
            label: "github.com/matheussiqueira-dev/Interface-Web-de-Gestos-Sem-Contato.git",
            href: "https://github.com/matheussiqueira-dev/Interface-Web-de-Gestos-Sem-Contato.git",
          },
        },
        {
          title: "ConclusÃ£o",
          paragraphs: [
            "A Interface Web de Gestos Sem Contato Ã© um projeto que une tecnologia moderna, criatividade e aplicaÃ§Ã£o prÃ¡tica, mostrando como a web pode ir alÃ©m das interaÃ§Ãµes tradicionais.",
            "Ele representa uma abordagem inovadora para desenvolvimento web, reforÃ§ando habilidades em React, TypeScript, visÃ£o computacional, arquitetura frontend e experiÃªncia do usuÃ¡rio â competÃªncias altamente valorizadas no mercado de tecnologia atual.",
            "Se vocÃª busca exemplos reais de inovaÃ§Ã£o aplicada Ã  web, este projeto Ã© uma demonstraÃ§Ã£o clara do potencial de interfaces touchless no navegador.",
          ],
        },
      ],
      video: {
        src: "/touchless-web-gesture-interface.mp4",
        poster: "/Thmbnail/Thumbnail - Portugues/Interface Web de Gestos Sem Contato.png",
        caption: "DemonstraÃ§Ã£o da Interface Web de Gestos Sem Contato em uso.",
      },
    },
    context:
      "Em ambientes com restriÃ§Ã£o de toque (laboratÃ³rios, salas de controle e operaÃ§Ãµes industriais), era necessÃ¡rio navegar dashboards de BI e sistemas analÃ­ticos sem mouse ou teclado, mantendo baixa latÃªncia e alta precisÃ£o de comandos.",
    problem: [
      "InteraÃ§Ãµes com mouse e teclado nÃ£o eram viÃ¡veis em cenÃ¡rios com restriÃ§Ã£o sanitÃ¡ria ou seguranÃ§a.",
      "UsuÃ¡rios precisavam operar dashboards de BI durante apresentaÃ§Ãµes e operaÃ§Ãµes ao vivo.",
      "LatÃªncia alta e ruÃ­do de detecÃ§Ã£o comprometiam a experiÃªncia e a adoÃ§Ã£o.",
      "Era preciso mapear gestos para aÃ§Ãµes de forma configurÃ¡vel e confiÃ¡vel.",
    ],
    dataUsed: [
      "Fluxo de vÃ­deo da cÃ¢mera em tempo real (frames).",
      "Landmarks de mÃ£o e vetores de posiÃ§Ã£o normalizados.",
      "Eventos de gesto, timestamps e estado da interface.",
      "ParÃ¢metros de calibraÃ§Ã£o por usuÃ¡rio e ambiente.",
    ],
    solution: [
      "Pipeline de visÃ£o computacional em Python com MediaPipe e OpenCV para rastrear mÃ£os.",
      "ServiÃ§o FastAPI expondo uma API REST para interpretar gestos e enviar comandos.",
      "NormalizaÃ§Ã£o, debounce e thresholds para reduzir ruÃ­do e aumentar precisÃ£o.",
      "Frontend React.js com feedback visual e mapeamento de aÃ§Ãµes por contexto.",
    ],
    features: [
      "CalibraÃ§Ã£o de gestos e ajuste de sensibilidade por usuÃ¡rio.",
      "Mapa de gestos configurÃ¡vel para aÃ§Ãµes de navegaÃ§Ã£o e controle.",
      "Overlay visual com status de detecÃ§Ã£o e confirmaÃ§Ã£o de comandos.",
      "Arquitetura modular para integrar com dashboards e data apps.",
    ],
    highlights: [
      "NavegaÃ§Ã£o hands-free em dashboards e sistemas analÃ­ticos com baixa latÃªncia.",
      "ReduÃ§Ã£o de contato fÃ­sico e aumento de acessibilidade em ambientes controlados.",
      "InteraÃ§Ã£o mais fluida em apresentaÃ§Ãµes e operaÃ§Ãµes ao vivo.",
      "Base reutilizÃ¡vel para comandos rÃ¡pidos e automaÃ§Ã£o de interface.",
    ],
    demonstrates: [
      "VisÃ£o computacional aplicada a UX e interfaces de dados.",
      "IntegraÃ§Ã£o full stack com APIs REST e eventos em tempo real.",
      "Algoritmos de visÃ£o computacional e estruturas de dados para mapeamento de gestos.",
      "PrototipaÃ§Ã£o rÃ¡pida de soluÃ§Ãµes interativas para BI.",
    ],
    techSummary:
      "Python com OpenCV e MediaPipe para visÃ£o computacional, FastAPI para API REST de gestos e React.js no front-end com feedback em tempo real.",
    longDescription: [
      "Este projeto nasceu para resolver um problema prÃ¡tico em ambientes onde o toque Ã© limitado: salas de controle, operaÃ§Ãµes industriais e apresentaÃ§Ãµes de BI. O objetivo foi criar uma camada de interaÃ§Ã£o que permitisse navegar dashboards sem mouse ou teclado, mantendo precisÃ£o, baixa latÃªncia e aprendizado rÃ¡pido. A soluÃ§Ã£o foi desenhada como um ecossistema leve, com captura de vÃ­deo na borda, interpretaÃ§Ã£o de gestos em tempo real e uma UI web que responde com feedback visual imediato. O foco sempre foi reduzir fricÃ§Ã£o e tornar a tecnologia utilizÃ¡vel por equipes nÃ£o tÃ©cnicas.",
      "A arquitetura combina um pipeline de visÃ£o computacional em Python com MediaPipe/OpenCV e uma API FastAPI que normaliza sinais, aplica thresholds e faz debounce para evitar falsos positivos. Cada gesto Ã© transformado em comandos semÃ¢nticos (avanÃ§ar, voltar, focar, abrir) que podem ser mapeados por contexto, permitindo integrar com diferentes dashboards. No front-end React, a camada de apresentaÃ§Ã£o exibe estado, confirmaÃ§Ãµes e dicas visuais para reduzir incerteza do usuÃ¡rio. TambÃ©m foram previstos cenÃ¡rios de iluminaÃ§Ã£o variÃ¡vel e distÃ¢ncia da cÃ¢mera, com calibraÃ§Ã£o guiada para aumentar a robustez.",
      "AlÃ©m de provar a viabilidade tÃ©cnica, o projeto demonstra como interfaces naturais podem ampliar acessibilidade e eficiÃªncia em rotinas analÃ­ticas. A integraÃ§Ã£o REST simplifica o acoplamento com sistemas existentes, e o design modular abre espaÃ§o para novos gestos, atalhos e automaÃ§Ãµes. Em termos de aprendizado, consolidou prÃ¡ticas de otimizaÃ§Ã£o de latÃªncia, tratamento de ruÃ­do e desenho de feedback para interaÃ§Ã£o em tempo real. Ã um case que conecta dados, UX e engenharia, com potencial claro para ambientes corporativos que dependem de dashboards crÃ­ticos.",
      "Para validar, foram feitos testes com diferentes usuÃ¡rios e cenÃ¡rios de ruÃ­do, medindo estabilidade dos gestos e tempo de resposta percebido. Mesmo sem hardware especializado, o fluxo manteve interaÃ§Ãµes consistentes, o que reforÃ§a a possibilidade de implantaÃ§Ã£o em ambientes com infraestrutura simples. Os prÃ³ximos passos incluem adicionar reconhecimento de gestos compostos, personalizaÃ§Ã£o por perfil e integraÃ§Ã£o com eventos do Power BI via API. Assim, o projeto evolui de um protÃ³tipo funcional para uma soluÃ§Ã£o aplicÃ¡vel em operaÃ§Ãµes reais.",
    ],
    conclusion: [
      "Consolidei boas prÃ¡ticas de performance (debounce, normalizaÃ§Ã£o e calibraÃ§Ã£o).",
      "Apliquei integraÃ§Ã£o front-end/back-end orientada a eventos e latÃªncia.",
      "Validei uma soluÃ§Ã£o de visÃ£o computacional com foco em usabilidade e dados.",
    ],
    howToRun: [
      "PrÃ©-requisitos: Python 3.10+, Node 18 e cÃ¢mera habilitada.",
      "Clone o repositÃ³rio e crie um ambiente virtual Python.",
      "Instale as dependÃªncias da API e execute o servidor FastAPI.",
      "Instale as dependÃªncias do frontend e rode o app React.",
      "Acesse http://localhost:3000 e permita o uso da cÃ¢mera.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - Portugues/Interface Web de Gestos Sem Contato.png",
        alt: "Capa do projeto Interface Web de Gestos Sem Contato",
      },
      {
        src: "/touchless-web-gesture-interface.mp4",
        alt: "DemonstraÃ§Ã£o da Interface Web de Gestos Sem Contato em uso",
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
        "Case de visÃ£o computacional com Python, OpenCV, MediaPipe e FastAPI para controlar dashboards por gestos, integrando front-end React e API REST com baixa latÃªncia.",
    },
  },
  {
    slug: "chatbot-ia-api",
    title: "API de Chatbot com IA",
    headline: "API de Chatbot com IA | Backend de suporte com contexto e logs",
    tagline: "API de chatbot com contexto, logs e dados para automaÃ§Ã£o de suporte.",
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
      "OperaÃ§Ãµes de atendimento precisavam padronizar respostas e gerar dados confiÃ¡veis para anÃ¡lise de qualidade, reduzindo o tempo de resposta em demandas recorrentes.",
    problem: [
      "Atendimento disperso sem histÃ³rico centralizado e rastreÃ¡vel.",
      "Respostas inconsistentes dificultavam governanÃ§a e melhoria contÃ­nua.",
      "Tempo de resposta alto em dÃºvidas repetitivas.",
      "Falta de mÃ©tricas consolidadas para BI e tomada de decisÃ£o.",
    ],
    dataUsed: [
      "Mensagens e histÃ³ricos de conversas por sessÃ£o.",
      "IntenÃ§Ãµes classificadas e contexto de atendimento.",
      "Feedback de usuÃ¡rios e mÃ©tricas de uso.",
      "Logs estruturados para auditoria e anÃ¡lise em SQL.",
    ],
    solution: [
      "API REST em FastAPI com contexto por sessÃ£o e fallback seguro.",
      "PersistÃªncia em PostgreSQL para histÃ³rico e auditoria.",
      "Cache em Redis para reduzir latÃªncia em respostas recorrentes.",
      "Logs estruturados e versionamento de endpoints com documentaÃ§Ã£o OpenAPI.",
    ],
    features: [
      "Contexto por sessÃ£o com expiraÃ§Ã£o configurÃ¡vel.",
      "Registro de conversas, intents e feedback.",
      "Endpoints versionados e /docs para validaÃ§Ã£o rÃ¡pida.",
      "Camada de observabilidade para mÃ©tricas e qualidade.",
    ],
    highlights: [
      "Respostas mais consistentes e rastreÃ¡veis em escala.",
      "Base pronta para anÃ¡lises de atendimento e BI.",
      "ReduÃ§Ã£o de tempo em demandas repetitivas com cache.",
      "Infra para evoluÃ§Ã£o de conteÃºdo e mÃ©tricas de qualidade.",
    ],
    demonstrates: [
      "Modelagem de dados conversacionais e APIs robustas.",
      "Uso de banco SQL, cache e observabilidade.",
      "AutomaÃ§Ã£o de suporte com visÃ£o de produto e governanÃ§a.",
      "Arquitetura backend escalÃ¡vel e monitorÃ¡vel.",
    ],
    techSummary:
      "FastAPI com PostgreSQL e Redis para API REST, cache e logs estruturados, viabilizando mÃ©tricas e anÃ¡lises em SQL.",
    longDescription: [
      "Este case foi pensado para padronizar atendimento e criar uma base de dados confiÃ¡vel para anÃ¡lise de qualidade. Em operaÃ§Ãµes com alto volume de demandas repetitivas, respostas inconsistentes geram retrabalho e diminuem a confianÃ§a do time. A proposta foi construir um backend de chatbot que mantivesse contexto por sessÃ£o, oferecesse respostas rÃ¡pidas e registrasse tudo de forma auditÃ¡vel. A API foi desenhada para ser plugÃ¡vel em canais diferentes (web, WhatsApp, sistemas internos) e para servir como fonte de mÃ©tricas para BI.",
      "Do ponto de vista tÃ©cnico, a soluÃ§Ã£o utiliza FastAPI para endpoints REST, PostgreSQL para persistir histÃ³rico e Redis para cache e contexto temporÃ¡rio. A modelagem privilegia rastreabilidade: cada mensagem gera logs estruturados com timestamps, intenÃ§Ã£o, resposta e status. Isso habilita indicadores como tempo mÃ©dio de resposta, taxa de resoluÃ§Ã£o e tÃ³picos mais frequentes. O stack foi organizado com versionamento de rotas, documentaÃ§Ã£o automÃ¡tica e camadas de validaÃ§Ã£o para garantir consistÃªncia de dados desde a entrada atÃ© o armazenamento.",
      "AlÃ©m do ganho operacional, o projeto fortalece governanÃ§a e aprendizagem contÃ­nua. Com dados consistentes, Ã© possÃ­vel revisar scripts, ajustar fluxos e melhorar a base de conhecimento sem âachismosâ. O desenho da API tambÃ©m facilita a evoluÃ§Ã£o para integraÃ§Ãµes com modelos de IA, filas de processamento ou painel analÃ­tico dedicado. O resultado Ã© um serviÃ§o que reduz fricÃ§Ã£o no atendimento, gera insights acionÃ¡veis e demonstra boas prÃ¡ticas de arquitetura backend orientada a dados.",
      "Outro ponto importante foi garantir que o sistema suportasse crescimento sem perder clareza operacional. Por isso, o logging foi pensado desde o inÃ­cio para alimentar painÃ©is e auditorias, e o cache foi ajustado para preservar consistÃªncia sem comprometer o contexto. HÃ¡ espaÃ§o para evoluir com classificaÃ§Ã£o automÃ¡tica de intents, integraÃ§Ã£o com modelos generativos e roteamento inteligente para agentes humanos. Essas extensÃµes mantÃªm a base tÃ©cnica sÃ³lida e preservam a rastreabilidade exigida por times de qualidade e compliance.",
    ],
    conclusion: [
      "Apliquei boas prÃ¡ticas de API REST, versionamento e documentaÃ§Ã£o.",
      "Estruturei dados para auditoria e inteligÃªncia de atendimento.",
      "Garanti escalabilidade com cache e monitoramento.",
    ],
    howToRun: [
      "PrÃ©-requisitos: Python 3.10+, PostgreSQL e Redis.",
      "Clone o repositÃ³rio e copie .env.example para .env.",
      "Configure variÃ¡veis de banco e cache.",
      "Instale dependÃªncias, rode migraÃ§Ãµes e inicie a API.",
      "Acesse http://localhost:8000/docs para testar.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - Portugues/Chatbot IA API.png",
        alt: "Capa do projeto API de Chatbot com IA",
      },
      {
        src: "/Chatbot.mp4",
        alt: "DemonstraÃ§Ã£o da API de Chatbot com IA",
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
        "API de chatbot em FastAPI com PostgreSQL e Redis, contexto por sessÃ£o e logs estruturados para automaÃ§Ã£o de suporte e analytics de atendimento.",
    },
  },
  {
    slug: "self-drive-car",
    title: "Carro Para Dirigir Sem Motorista",
    headline: "Carro Para Dirigir Sem Motorista | Machine Learning e visÃ£o computacional",
    tagline: "Simulador de direÃ§Ã£o autÃ´noma com visÃ£o computacional e ML.",
    role: "Analista/Desenvolvedor",
    stack: ["Python", "OpenCV", "TensorFlow", "NumPy"],
    repoUrl: "https://github.com/matheussiqueira-dev/self-drive-car",
    demo: {
      kind: "video",
      src: "/projects/self-drive-car/demo.mp4",
      poster: "/Thmbnail/Thumbnail - Portugues/Carro para Dirigir sem Motorista.png",
      caption: "Simulador de direÃ§Ã£o autÃ´noma em execuÃ§Ã£o.",
    },
    context:
      "Projeto de data science para treinar e validar modelos de conduÃ§Ã£o autÃ´noma em ambiente seguro, com foco em visÃ£o computacional e decisÃµes em tempo real.",
    problem: [
      "Testar modelos em ambiente fÃ­sico era caro e arriscado.",
      "DetecÃ§Ã£o de faixas e obstÃ¡culos exigia processamento em tempo real.",
      "Hardware limitado pedia pipeline leve e otimizado.",
      "Necessidade de telemetria para anÃ¡lise e ajuste de modelo.",
    ],
    dataUsed: [
      "Frames de cÃ¢mera simulada e sensores virtuais.",
      "Telemetria de velocidade, posiÃ§Ã£o e trajetÃ³ria.",
      "Dados sintÃ©ticos e amostras reais para treinamento.",
      "Registros de inferÃªncia para avaliaÃ§Ã£o de desempenho.",
    ],
    solution: [
      "PrÃ©-processamento e extraÃ§Ã£o de features com OpenCV e NumPy.",
      "Modelo treinado em TensorFlow com dados sintÃ©ticos e reais.",
      "Simulador com overlay de inferÃªncia e telemetria.",
      "Pipeline otimizado para baixa latÃªncia e debug visual.",
    ],
    features: [
      "DetecÃ§Ã£o de faixas com ajuste de ROI e filtros.",
      "PrediÃ§Ã£o de direÃ§Ã£o e controle bÃ¡sico de velocidade.",
      "Overlay de inferÃªncia para validaÃ§Ã£o e tuning.",
      "Logs de telemetria para anÃ¡lise de performance.",
    ],
    highlights: [
      "Testes rÃ¡pidos e seguros de lÃ³gica de controle.",
      "IteraÃ§Ã£o visual com telemetria em tempo real.",
      "Base sÃ³lida para evoluÃ§Ã£o de modelos de direÃ§Ã£o.",
      "Melhoria de performance com otimizaÃ§Ãµes no pipeline.",
    ],
    demonstrates: [
      "AplicaÃ§Ã£o de data science e ML em visÃ£o computacional.",
      "Pipeline de inferÃªncia em tempo real com foco em performance.",
      "AnalÃ­tica preditiva aplicada a decisÃµes em tempo real.",
      "Uso de dados sintÃ©ticos para acelerar treino.",
    ],
    techSummary:
      "Python, OpenCV, TensorFlow e NumPy para pipeline de ML e visÃ£o computacional, com simulador para validaÃ§Ã£o e anÃ¡lise.",
    conclusion: [
      "Consolidei prÃ¡ticas de engenharia de features e avaliaÃ§Ã£o de modelos.",
      "Apliquei otimizaÃ§Ãµes para manter baixa latÃªncia em tempo real.",
      "Integrei telemetria e visualizaÃ§Ã£o para decisÃ£o tÃ©cnica.",
    ],
    howToRun: [
      "PrÃ©-requisitos: Python 3.10+, OpenCV e TensorFlow.",
      "Clone o repositÃ³rio e instale as dependÃªncias.",
      "Baixe os pesos do modelo (quando aplicÃ¡vel).",
      "Execute o script principal do simulador.",
      "Ajuste parÃ¢metros conforme o cenÃ¡rio.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - Portugues/Carro para Dirigir sem Motorista.png",
        alt: "Capa do projeto Carro Para Dirigir Sem Motorista",
      },
      {
        src: "/projects/self-drive-car/demo.mp4",
        alt: "DemonstraÃ§Ã£o do simulador Carro Para Dirigir Sem Motorista em aÃ§Ã£o",
        type: "video",
      },
      {
        src: "/projects/self-drive-car/shot-1.webp",
        alt: "SimulaÃ§Ã£o do projeto Carro Para Dirigir Sem Motorista",
      },
    ],
    seo: {
      title: "Carro Para Dirigir Sem Motorista | Simulador de direÃ§Ã£o autÃ´noma com ML",
      description:
        "Simulador de direÃ§Ã£o autÃ´noma com Python, OpenCV e TensorFlow para treinar e validar modelos de machine learning em tempo real com telemetria.",
    },
  },
  {
    slug: "library-api-advanced",
    title: "API de Biblioteca AvanÃ§ada",
    headline: "API de Biblioteca AvanÃ§ada | API REST com autenticaÃ§Ã£o e regras de negÃ³cio",
    tagline: "API de biblioteca com autenticaÃ§Ã£o, regras de emprÃ©stimo e auditoria.",
    role: "Desenvolvedor",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Fastify"],
    repoUrl: "https://github.com/matheussiqueira-dev/library-api-advanced",
    context:
      "A gestÃ£o de bibliotecas precisava centralizar catÃ¡logo e emprÃ©stimos, garantindo integridade de dados e rastreabilidade das operaÃ§Ãµes.",
    problem: [
      "CatÃ¡logo e emprÃ©stimos sem controle centralizado.",
      "PermissÃµes e autenticaÃ§Ã£o inconsistentes entre sistemas.",
      "RelatÃ³rios manuais dificultavam auditoria e compliance.",
      "Falta de validaÃ§Ãµes claras para prazos e devoluÃ§Ãµes.",
    ],
    dataUsed: [
      "CatÃ¡logo de livros, usuÃ¡rios e emprÃ©stimos.",
      "Status de devoluÃ§Ã£o, prazos e histÃ³rico de transaÃ§Ãµes.",
      "Logs de operaÃ§Ãµes para auditoria.",
      "Consultas SQL para anÃ¡lises operacionais.",
    ],
    solution: [
      "API REST com Node.js, TypeScript e Fastify.",
      "AutenticaÃ§Ã£o JWT, roles e regras de negÃ³cio para emprÃ©stimos.",
      "Modelagem relacional no PostgreSQL com foco em integridade.",
      "Logs estruturados e validaÃ§Ãµes para auditoria.",
    ],
    features: [
      "Fluxo de emprÃ©stimo e devoluÃ§Ã£o com validaÃ§Ãµes de prazo.",
      "Busca por categoria, autor e status de livro.",
      "Trilha de auditoria com registros detalhados.",
      "Base pronta para relatÃ³rios operacionais.",
    ],
    highlights: [
      "PadronizaÃ§Ã£o de processos e reduÃ§Ã£o de inconsistÃªncias.",
      "Maior confianÃ§a e rastreabilidade nos registros.",
      "Base para compliance e relatÃ³rios de operaÃ§Ã£o.",
      "Facilidade de integraÃ§Ã£o com outros sistemas.",
    ],
    demonstrates: [
      "Arquitetura backend organizada, tipada e escalÃ¡vel.",
      "Modelagem relacional com foco em integridade.",
      "Boas prÃ¡ticas de autenticaÃ§Ã£o e seguranÃ§a.",
      "Design de API REST para dados transacionais.",
    ],
    techSummary:
      "Node.js, TypeScript e Fastify com PostgreSQL e JWT para uma API REST segura e transacional.",
    conclusion: [
      "Apliquei boas prÃ¡ticas de seguranÃ§a, validaÃ§Ã£o e auditoria.",
      "Estruturei a modelagem relacional para consistÃªncia e escala.",
      "Consolidei conhecimentos em design de APIs e governanÃ§a de dados.",
    ],
    howToRun: [
      "PrÃ©-requisitos: Node 18+ e PostgreSQL.",
      "Clone o repositÃ³rio e instale dependÃªncias.",
      "Configure o .env com banco e JWT.",
      "Rode migraÃ§Ãµes e inicie o servidor.",
      "Teste os endpoints via /docs ou Postman.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - Portugues/API de Biblioteca Avançada.png",
        alt: "Capa do projeto API de Biblioteca AvanÃ§ada",
      },
      {
        src: "/library-api-advanced.png",
        alt: "Tela adicional da API de Biblioteca AvanÃ§ada",
      },
      {
        src: "/projects/library-api-advanced/shot-1.webp",
        alt: "Dashboard tÃ©cnico da API de Biblioteca AvanÃ§ada",
      },
    ],
    seo: {
      title: "API de Biblioteca AvanÃ§ada | API REST com Node.js e PostgreSQL",
      description:
        "API de biblioteca com Node.js, TypeScript, Fastify e PostgreSQL, incluindo autenticaÃ§Ã£o JWT, regras de emprÃ©stimo e trilha de auditoria.",
    },
  },
  {
    slug: "driver-monitoring-system",
    title: "Sistema de Monitoramento do Motorista",
    headline: "Sistema de Monitoramento do Motorista | Monitoramento de atenÃ§Ã£o e fadiga",
    tagline:
      "Sistema de monitoramento do motorista utilizando visÃ£o computacional para atenÃ§Ã£o e fadiga.",
    role: "Analista/Desenvolvedor",
    stack: ["Python", "OpenCV", "MediaPipe", "TensorFlow"],
    repoUrl: "https://github.com/matheussiqueira-dev/Driver-Monitoring-System",
    demo: {
      kind: "video",
      src: "/driver-monitoring-system.mp4",
      poster: "/Thmbnail/Thumbnail - Portugues/Sistema de Monitoramento do Motorista.png",
      caption: "DetecÃ§Ã£o de atenÃ§Ã£o e fadiga com visÃ£o computacional.",
    },
    context:
      "AplicaÃ§Ãµes de seguranÃ§a veicular precisam identificar sinais de fadiga e distraÃ§Ã£o do motorista em tempo real para reduzir riscos em trajetos longos.",
    problem: [
      "Monitorar atenÃ§Ã£o e sonolÃªncia com baixa latÃªncia.",
      "Detectar sinais faciais mesmo com variaÃ§Ãµes de iluminaÃ§Ã£o.",
      "Minimizar falsos positivos durante movimentos naturais.",
      "Gerar alertas claros sem interromper a conduÃ§Ã£o.",
    ],
    dataUsed: [
      "Frames de vÃ­deo da cÃ¢mera frontal.",
      "Landmarks faciais e mÃ©tricas de abertura ocular.",
      "Eventos de bocejo e tempo de fechamento dos olhos.",
      "Scores de atenÃ§Ã£o e registros de alerta.",
    ],
    solution: [
      "Pipeline de visÃ£o computacional com detecÃ§Ã£o facial e landmarks.",
      "CÃ¡lculo de EAR (Eye Aspect Ratio) e sinais de fadiga.",
      "LÃ³gica de thresholds e janelas de tempo para reduzir ruÃ­do.",
      "Camada de alertas visuais para feedback imediato.",
    ],
    features: [
      "DetecÃ§Ã£o contÃ­nua de atenÃ§Ã£o e sonolÃªncia.",
      "MÃ©tricas de piscar, bocejo e tempo de olhos fechados.",
      "Alertas configurÃ¡veis em tempo real.",
      "Interface simples para validaÃ§Ã£o e testes.",
    ],
    highlights: [
      "Monitoramento em tempo real com baixa latÃªncia.",
      "Sinais de fadiga detectados com consistÃªncia.",
      "Base reutilizÃ¡vel para protÃ³tipos automotivos.",
      "Pipeline claro para evoluÃ§Ã£o de modelos.",
    ],
    demonstrates: [
      "VisÃ£o computacional aplicada a seguranÃ§a veicular.",
      "Tratamento de sinais faciais em streaming de vÃ­deo.",
      "Modelagem de alertas e thresholds.",
      "PrototipaÃ§Ã£o orientada a validaÃ§Ã£o rÃ¡pida.",
    ],
    techSummary:
      "Python com OpenCV e MediaPipe para rastreamento facial, alÃ©m de TensorFlow para suporte Ã  anÃ¡lise de sinais visuais.",
    conclusion: [
      "Estruturei um pipeline visual com foco em latÃªncia.",
      "Apliquei mÃ©tricas faciais para detectar fadiga.",
      "Criei uma base pronta para evoluÃ§Ã£o do modelo.",
    ],
    howToRun: [
      "PrÃ©-requisitos: Python 3.10+ e webcam habilitada.",
      "Clone o repositÃ³rio e crie um ambiente virtual.",
      "Instale as dependÃªncias listadas no requirements.txt.",
      "Execute o script principal para iniciar a detecÃ§Ã£o.",
      "Valide os alertas em tempo real pela interface.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - Portugues/Sistema de Monitoramento do Motorista.png",
        alt: "Capa do projeto Sistema de Monitoramento do Motorista",
      },
      {
        src: "/driver-monitoring-system.mp4",
        alt: "DemonstraÃ§Ã£o do Sistema de Monitoramento do Motorista",
        type: "video",
      },
    ],
    seo: {
      title: "Sistema de Monitoramento do Motorista | Monitoramento de atenÃ§Ã£o e fadiga",
      description:
        "Sistema de monitoramento do motorista com visÃ£o computacional para detectar atenÃ§Ã£o e fadiga em tempo real usando Python, OpenCV e MediaPipe.",
    },
  },
  {
    slug: "flappy-bird-gesture-control",
    title: "Flappy Bird com Gestos",
    headline: "Flappy Bird | Controle por gestos com MediaPipe e Pygame",
    tagline:
      "VersÃ£o do Flappy Bird controlada pela webcam, combinando MediaPipe Hands, OpenCV e Pygame.",
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
      "Projeto criado para explorar controle hands-free em jogos, mapeando gestos da mÃ£o para os comandos do Flappy Bird.",
    problem: [
      "Permitir jogar sem teclado ou mouse, apenas com gestos.",
      "Detectar a mÃ£o com estabilidade em tempo real via webcam comum.",
      "Manter a fÃ­sica e a fluidez do Flappy Bird original.",
      "Facilitar ajustes de sensibilidade e debug para demos.",
    ],
    dataUsed: [
      "Frames da webcam capturados pelo OpenCV.",
      "21 landmarks da mÃ£o detectados pelo MediaPipe.",
      "Estado da mÃ£o (aberta/fechada) e altura no quadro.",
      "PontuaÃ§Ã£o, velocidade e espaÃ§amento dos canos.",
    ],
    solution: [
      "Pipeline OpenCV + MediaPipe para rastrear mÃ£o e suavizar landmarks com filtro temporal.",
      "Mapeamento de gestos discreto (abrir/fechar) e contÃ­nuo (altura da mÃ£o) para controlar o pÃ¡ssaro.",
      "Loop de jogo em Pygame com fÃ­sica simples, detecÃ§Ã£o de colisÃ£o e HUD de FPS/confianÃ§a.",
      "ConfiguraÃ§Ãµes centralizadas em config.py para calibrar gravidade, forÃ§a do pulo e sensibilidade.",
    ],
    features: [
      "Dois modos de controle por gestos (discreto e contÃ­nuo).",
      "Sistema de pontuaÃ§Ã£o e high score com reinÃ­cio rÃ¡pido.",
      "Troca de modo em tempo real e atalhos para debug, pausa e reset.",
      "Preview opcional da cÃ¢mera com landmarks para calibrar ambiente.",
    ],
    highlights: [
      "ExperiÃªncia hands-free usando apenas a webcam.",
      "Movimento suave graÃ§as a suavizaÃ§Ã£o temporal dos landmarks.",
      "Arquitetura modular separando rastreamento, mapeamento e lÃ³gica do jogo.",
      "CÃ³digo didÃ¡tico pronto para demonstraÃ§Ãµes, workshops e experimentos.",
    ],
    demonstrates: [
      "VisÃ£o computacional aplicada a gameplay.",
      "IntegraÃ§Ã£o OpenCV + MediaPipe + Pygame em tempo real.",
      "Mapeamento de gestos em comandos discretos e contÃ­nuos.",
      "OrganizaÃ§Ã£o de jogo 2D em Python com foco em clareza.",
    ],
    techSummary:
      "Pipeline em Python que usa OpenCV para captura de vÃ­deo, MediaPipe Hands para detecÃ§Ã£o e Pygame para renderizar o Flappy Bird controlado por gestos.",
    conclusion: [
      "Validei controle por gestos sem hardware dedicado.",
      "Mantive a mecÃ¢nica clÃ¡ssica do Flappy Bird com boa responsividade.",
      "Deixei o projeto configurÃ¡vel para novos gestos, temas e ajustes de fÃ­sica.",
    ],
    howToRun: [
      "PrÃ©-requisitos: Python 3.8+, webcam funcional.",
      "Clone o repositÃ³rio e crie um ambiente virtual.",
      "Instale as dependÃªncias: pip install -r requirements.txt",
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
        alt: "DemonstraÃ§Ã£o do Flappy Bird com controle por gestos",
        type: "video",
      },
    ],
    seo: {
      title:
        "Flappy Bird com Controle por Gestos | MediaPipe, OpenCV e Pygame",
      description:
        "VersÃ£o do Flappy Bird controlada pela webcam usando MediaPipe Hands, OpenCV e Pygame, com modos discreto e contÃ­nuo de gestos.",
    },
  },
  {
    slug: "subway-surf",
    title: "Subway Surfers",
    headline: "Subway Surfers | Jogo 2D em HTML5 Canvas",
    tagline:
      "Jogo inspirado no Subway Surfers para estudo de lÃ³gica e desenvolvimento de games.",
    role: "Desenvolvedor",
    stack: ["JavaScript", "HTML5", "Canvas", "CSS"],
    repoUrl: "https://github.com/matheussiqueira-dev/Subway-Surf",
    demo: {
      kind: "video",
      src: "/Subway Surf.mp4",
      poster: "/Thmbnail/Thumbnail - Portugues/Subway Surfers.png",
      caption: "Gameplay do protÃ³tipo inspirado no Subway Surfers.",
    },
    context:
      "Projeto criado para praticar game loop, colisÃ£o e controle de personagens em um ambiente 2D.",
    problem: [
      "Estruturar um game loop fluido no navegador.",
      "Implementar colisÃµes e obstÃ¡culos em tempo real.",
      "Criar progressÃ£o de dificuldade sem travar a jogabilidade.",
      "Organizar o cÃ³digo para facilitar novas fases e assets.",
    ],
    dataUsed: [
      "Entrada do teclado para movimentaÃ§Ã£o.",
      "Estados de jogo (velocidade, pontuaÃ§Ã£o, colisÃµes).",
      "Timers para spawn de obstÃ¡culos.",
      "Sprites e posiÃ§Ãµes em tela.",
    ],
    solution: [
      "RenderizaÃ§Ã£o em Canvas com loop de atualizaÃ§Ã£o contÃ­nuo.",
      "Sistema simples de colisÃ£o e reset de obstÃ¡culos.",
      "Incremento gradual de velocidade para desafio.",
      "Arquitetura modular para lÃ³gica de jogo e UI.",
    ],
    features: [
      "MovimentaÃ§Ã£o fluida do personagem.",
      "ObstÃ¡culos dinÃ¢micos com colisÃ£o.",
      "PontuaÃ§Ã£o em tempo real.",
      "Base pronta para novos nÃ­veis e skins.",
    ],
    highlights: [
      "Jogo responsivo com boa performance em navegador.",
      "Controle e colisÃ£o consistentes.",
      "Estrutura clara para evoluÃ§Ã£o do projeto.",
      "Aprendizado prÃ¡tico de game design bÃ¡sico.",
    ],
    demonstrates: [
      "Game loop e renderizaÃ§Ã£o em Canvas.",
      "LÃ³gica de colisÃ£o e estados do jogo.",
      "OrganizaÃ§Ã£o modular de cÃ³digo front-end.",
      "PrototipaÃ§Ã£o rÃ¡pida de jogos 2D.",
    ],
    techSummary:
      "JavaScript e HTML5 Canvas para renderizaÃ§Ã£o, com CSS para layout e HUD.",
    conclusion: [
      "Consolidei fundamentos de game loop em JS.",
      "Implementei colisÃµes e pontuaÃ§Ã£o em tempo real.",
      "Criei uma base extensÃ­vel para futuras mecÃ¢nicas.",
    ],
    howToRun: [
      "Clone o repositÃ³rio.",
      "Abra o arquivo index.html no navegador.",
      "Use o teclado para controlar o personagem.",
      "Acompanhe a pontuaÃ§Ã£o e evite obstÃ¡culos.",
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
    headline: "Estilingue | Bubble shooter com ricochete e dicas tÃ¡ticas",
    tagline:
      "Bubble shooter em canvas com mira por toque/mouse, ricochete nas paredes e sugestÃµes de jogada.",
    role: "Desenvolvedor",
    stack: ["JavaScript", "HTML5", "Canvas", "CSS", "Hammer.js"],
    repoUrl: "https://github.com/matheussiqueira-dev/Slingshot.git",
    demo: {
      kind: "video",
      src: "/projects/slingshot/demo.mp4",
      poster: "/Thmbnail/Thumbnail - Portugues/Slingshot.png",
      caption: "Mira por toque, ricochete e dicas tÃ¡ticas em tempo real.",
    },
    context:
      "A ideia era criar um bubble shooter leve e jogÃ¡vel no navegador, com controles amigÃ¡veis no desktop e no mobile.",
    problem: [
      "Garantir mira precisa em mouse e toque.",
      "Oferecer jogadas avanÃ§adas com ricochete nas paredes.",
      "Sugerir tiros estratÃ©gicos sem depender de backend.",
      "Manter performance estÃ¡vel no Canvas.",
    ],
    dataUsed: [
      "Entrada de mouse e toque para direÃ§Ã£o e disparo.",
      "Grade hexagonal e cores das bolhas para detecÃ§Ã£o de clusters.",
      "CÃ¡lculo de colisÃ£o e reflexÃ£o nas paredes.",
      "Recorde persistido localmente no navegador.",
    ],
    solution: [
      "Loop de renderizaÃ§Ã£o em HTML5 Canvas com atualizaÃ§Ã£o contÃ­nua.",
      "Sistema de mira responsiva para mouse e toque via Hammer.js.",
      "CÃ¡lculo local de dicas de jogada baseado nos clusters visÃ­veis.",
      "PersistÃªncia de recorde via armazenamento local.",
    ],
    features: [
      "Mira fluida com controle por toque ou mouse.",
      "Ricochete nas laterais para jogadas avanÃ§adas.",
      "Dicas tÃ¡ticas calculadas localmente.",
      "Clusters hexagonais e sistema de cores consistente.",
      "Recorde salvo no navegador.",
      "Interface responsiva e visual minimalista.",
    ],
    highlights: [
      "Jogabilidade direta sem instalaÃ§Ã£o ou backend.",
      "SugestÃµes estratÃ©gicas em tempo real.",
      "Base pronta para nÃ­veis, power-ups e novos modos.",
      "ExperiÃªncia consistente em desktop e mobile.",
    ],
    demonstrates: [
      "Game loop e fÃ­sica simples em HTML5 Canvas.",
      "Suporte a gestos e toque com Hammer.js.",
      "LÃ³gica de clusters e ricochete para bubble shooter.",
      "UI responsiva com foco em performance.",
    ],
    techSummary:
      "Jogo em JavaScript com HTML5 Canvas, gestos via Hammer.js e UI responsiva em CSS.",
    conclusion: [
      "Entreguei um bubble shooter fluido com dicas tÃ¡ticas locais.",
      "Implementei controles touch/mouse e ricochete consistente.",
      "Deixei a base pronta para evoluÃ§Ã£o de nÃ­veis e mecÃ¢nicas.",
    ],
    howToRun: [
      "Clone o repositÃ³rio.",
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
        alt: "DemonstraÃ§Ã£o do Estilingue",
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
        "Bubble shooter em HTML5 Canvas com mira por toque/mouse, ricochete nas paredes e dicas tÃ¡ticas calculadas localmente.",
    },
  },
  {
    slug: "fruit-ninja",
    title: "Ninja das Frutas",
    headline: "Ninja das Frutas | Corte por gestos com rastreamento de mÃ£o",
    tagline:
      "ExperiÃªncia de corte com rastreamento de mÃ£o em tempo real usando a cÃ¢mera.",
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
      "A proposta era criar um Ninja das Frutas jogÃ¡vel no navegador, com controle por gestos e performance consistente em diferentes taxas de quadros.",
    problem: [
      "Garantir rastreamento de mÃ£o fluido sem enviar dados para servidores.",
      "Manter fÃ­sica e colisÃµes consistentes em FPS variÃ¡veis.",
      "Equilibrar efeitos visuais com performance no Canvas.",
      "Dar feedback de desempenho sem distrair o jogador.",
    ],
    dataUsed: [
      "Frames da cÃ¢mera para detecÃ§Ã£o da mÃ£o.",
      "Landmarks do indicador para a lÃ¢mina virtual.",
      "Delta time para normalizar fÃ­sica e colisÃµes.",
      "PontuaÃ§Ã£o, combos e eventos de bombas.",
      "Mensagens do sensei baseadas no desempenho.",
    ],
    solution: [
      "Rastreamento local com MediaPipe Tasks Vision usando a cÃ¢mera do navegador.",
      "Loop de jogo com delta time para fÃ­sica estÃ¡vel.",
      "Canvas otimizado com partÃ­culas e trilha sob controle.",
      "HUD com dicas e mensagens contextualizadas do sensei.",
    ],
    features: [
      "Corte por gestos usando o indicador como lÃ¢mina.",
      "PontuaÃ§Ã£o e combos com penalidade por bombas.",
      "Mensagens do sensei em tempo real.",
      "Processamento local sem envio de dados.",
      "Loop otimizado para reduzir trabalho fora do estado ativo.",
    ],
    highlights: [
      "ExperiÃªncia fluida mesmo em diferentes FPS.",
      "Controle por gestos com baixa latÃªncia.",
      "Visual limpo com efeitos balanceados.",
      "Base pronta para novos modos e desafios.",
    ],
    demonstrates: [
      "IntegraÃ§Ã£o de visÃ£o computacional em web apps.",
      "React + Canvas para gameplay em tempo real.",
      "OtimizaÃ§Ã£o de loops e fÃ­sica com delta time.",
      "Design de feedback e HUD em jogos.",
    ],
    techSummary:
      "React + TypeScript + Vite com MediaPipe Tasks Vision e HTML5 Canvas para um jogo de corte por gestos em tempo real.",
    conclusion: [
      "Entreguei um clone jogÃ¡vel com rastreamento de mÃ£o estÃ¡vel.",
      "Mantive performance consistente com delta time e loop otimizado.",
      "Preparei a base para adicionar nÃ­veis e novas mecÃ¢nicas.",
    ],
    howToRun: [
      "Clone o repositÃ³rio.",
      "Instale dependÃªncias: npm install.",
      "Inicie o ambiente: npm run dev.",
      "Abra o navegador e permita o acesso Ã  cÃ¢mera.",
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
        "Clone do Ninja das Frutas em React e TypeScript com rastreamento de mÃ£o via MediaPipe Tasks Vision e gameplay em HTML5 Canvas.",
    },
  },
  {
    slug: "neon-runner-cyber-hand",
    title: "Corredor Neon: MÃ£o CibernÃ©tica",
    headline: "Corredor Neon: MÃ£o CibernÃ©tica | Runner cyberpunk controlado por gestos",
    tagline:
      "Infinite runner cyberpunk com visualizaÃ§Ã£o da mÃ£o em tempo real e atmosfera neon.",
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
      caption: "Runner neon com controle por gestos e mÃ£o cibernÃ©tica em cena.",
    },
    context:
      "Projeto autoral para criar um runner 3D controlado por gestos, com resposta rÃ¡pida e estÃ©tica neon.",
    problem: [
      "Converter gestos (pular, deslizar, esquerda/direita) em comandos confiÃ¡veis.",
      "Renderizar cena 3D com iluminaÃ§Ã£o e pÃ³s-efeitos sem perder performance.",
      "Visualizar a mÃ£o como esqueleto cibernÃ©tico em tempo real.",
      "Manter HUD legÃ­vel e responsivo em diferentes tamanhos de tela.",
    ],
    dataUsed: [
      "Frames da cÃ¢mera e landmarks do MediaPipe Tasks Vision.",
      "PosiÃ§Ã£o da mÃ£o para detecÃ§Ã£o de gestos e movimentos.",
      "Estado do jogo (velocidade, obstÃ¡culos, colisÃµes).",
      "Eventos do HUD e feedback visual durante o gameplay.",
    ],
    solution: [
      "DetecÃ§Ã£o local de mÃ£o com MediaPipe Tasks Vision no navegador.",
      "ServiÃ§o de gestos para mapear pulo, deslize e movimento lateral.",
      "Cena 3D com Three.js + R3F e iluminaÃ§Ã£o estilizada.",
      "Zustand para estado global e HUD reativo.",
    ],
    features: [
      "Controle por gestos (pular, deslizar, esquerda/direita).",
      "MÃ£o renderizada como esqueleto cibernÃ©tico em tempo real.",
      "Cena 3D com iluminaÃ§Ã£o e pÃ³s-efeitos neon.",
      "HUD responsivo com sobreposiÃ§Ã£o limpa.",
      "Processamento local sem envio de dados.",
    ],
    highlights: [
      "ExperiÃªncia imersiva com estÃ©tica cyberpunk.",
      "Controle por gestos com baixa latÃªncia.",
      "Arquitetura modular com serviÃ§os e store dedicados.",
      "Base pronta para novos nÃ­veis e desafios.",
    ],
    demonstrates: [
      "IntegraÃ§Ã£o MediaPipe + React para controle em tempo real.",
      "Three.js com R3F aplicado a jogos web.",
      "Gerenciamento de estado com Zustand.",
      "Design de interaÃ§Ã£o por gestos e HUD responsivo.",
    ],
    techSummary:
      "React + TypeScript + Vite com Three.js/R3F, Zustand e MediaPipe Tasks Vision para um runner 3D controlado por gestos.",
    conclusion: [
      "Entreguei um runner cyberpunk jogÃ¡vel com controle por gestos.",
      "Mantive visual 3D estilizado com performance estÃ¡vel.",
      "Estruturei uma base extensÃ­vel para novas mecÃ¢nicas.",
    ],
    howToRun: [
      "PrÃ©-requisitos: Node.js 18+.",
      "Clone o repositÃ³rio.",
      "Instale dependÃªncias: npm install.",
      "Opcional: configure APP_API_KEY em .env.local.",
      "Baixe o modelo e coloque em public/models/hand_landmarker.task.",
      "Execute: npm run dev.",
      "Abra o navegador e permita o acesso Ã  cÃ¢mera.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - Portugues/Neon Runner - Cyber Hand.png",
        alt: "Capa do projeto Corredor Neon: MÃ£o CibernÃ©tica",
      },
      {
        src: "/projects/neon-runner-cyber-hand/demo.gif",
        alt: "DemonstraÃ§Ã£o do Corredor Neon: MÃ£o CibernÃ©tica",
        type: "gif",
      },
      {
        src: "/projects/neon-runner-cyber-hand/demo.mp4",
        alt: "Gameplay do Corredor Neon: MÃ£o CibernÃ©tica",
        type: "video",
      },
    ],
    seo: {
      title: "Corredor Neon | Runner 3D com controle por gestos",
      description:
        "Infinite runner cyberpunk em React e Three.js com rastreamento de mÃ£o via MediaPipe Tasks Vision e HUD responsivo.",
    },
  },
  {
    slug: "dino-chrome",
    title: "Dino Chrome",
    headline: "Dino Chrome | Jogo 2D em HTML5 Canvas",
    tagline:
      "Clone do jogo do Chrome para treinar lÃ³gica de colisÃ£o, pontuaÃ§Ã£o e progressÃ£o.",
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
      "Projeto criado para praticar game loop, colisÃ£o e controle de personagem em um jogo 2D simples.",
    problem: [
      "Construir um game loop estÃ¡vel no navegador.",
      "Detectar colisÃµes entre o dino e obstÃ¡culos em tempo real.",
      "Manter progressÃ£o de dificuldade sem quebrar a jogabilidade.",
      "Organizar estados do jogo para reinÃ­cio rÃ¡pido.",
    ],
    dataUsed: [
      "Entrada do teclado para aÃ§Ãµes de salto e movimento.",
      "Estados de jogo (velocidade, pontuaÃ§Ã£o, colisÃµes).",
      "Timers para spawn e reset de obstÃ¡culos.",
      "Sprites e posiÃ§Ãµes em tela.",
    ],
    solution: [
      "RenderizaÃ§Ã£o em Canvas com loop contÃ­nuo.",
      "Sistema simples de colisÃ£o e reset de obstÃ¡culos.",
      "Aumento gradual de velocidade para desafio.",
      "SeparaÃ§Ã£o de lÃ³gica de jogo e UI.",
    ],
    features: [
      "Controles responsivos para salto.",
      "ObstÃ¡culos dinÃ¢micos com dificuldade progressiva.",
      "PontuaÃ§Ã£o em tempo real.",
      "ReinÃ­cio rÃ¡pido da partida.",
    ],
    highlights: [
      "Jogo leve e responsivo em navegador.",
      "LÃ³gica de colisÃ£o consistente.",
      "Base clara para evoluir mecÃ¢nicas e assets.",
      "ReproduÃ§Ã£o fiel da experiÃªncia clÃ¡ssica do Dino.",
    ],
    demonstrates: [
      "Game loop e renderizaÃ§Ã£o em Canvas.",
      "LÃ³gica de colisÃ£o e estados do jogo.",
      "OrganizaÃ§Ã£o modular de cÃ³digo front-end.",
      "PrototipaÃ§Ã£o rÃ¡pida de jogos 2D.",
    ],
    techSummary:
      "JavaScript e HTML5 Canvas para renderizaÃ§Ã£o e lÃ³gica, com CSS para layout.",
    conclusion: [
      "Consolidei fundamentos de game loop em JS.",
      "Implementei colisÃµes e pontuaÃ§Ã£o em tempo real.",
      "Deixei uma base pronta para novos nÃ­veis.",
    ],
    howToRun: [
      "Clone o repositÃ³rio.",
      "Abra o arquivo index.html no navegador.",
      "Use o teclado para controlar o personagem.",
      "Acompanhe a pontuaÃ§Ã£o e evite obstÃ¡culos.",
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
        "Clone do Dino Chrome feito em JavaScript e HTML5 Canvas com game loop, colisÃ£o e pontuaÃ§Ã£o em tempo real.",
    },
  },
  {
    slug: "gestor-de-notas",
    title: "Gestor de Notas",
    headline: "Gestor de Notas | AplicaÃ§Ã£o para organizaÃ§Ã£o pessoal",
    tagline:
      "AplicaÃ§Ã£o para gerenciamento de notas, com criaÃ§Ã£o, ediÃ§Ã£o e organizaÃ§Ã£o simples.",
    role: "Desenvolvedor",
    stack: ["JavaScript", "HTML5", "CSS", "LocalStorage"],
    repoUrl: "https://github.com/matheussiqueira-dev/Gestor_de_Notas",
    demo: {
      kind: "video",
      src: "/Gestor de Notas.mp4",
      poster: "/Thmbnail/Thumbnail - Portugues/Gestor de Notas.png",
      caption: "Fluxo de criaÃ§Ã£o e organizaÃ§Ã£o de notas.",
    },
    context:
      "A necessidade era criar uma soluÃ§Ã£o leve para registrar e organizar informaÃ§Ãµes pessoais sem depender de ferramentas externas.",
    problem: [
      "Organizar notas de forma rÃ¡pida e clara.",
      "Permitir ediÃ§Ã£o sem perder histÃ³rico.",
      "Garantir persistÃªncia local sem backend.",
      "Manter uma interface simples e direta.",
    ],
    dataUsed: [
      "Texto das notas e categorias locais.",
      "Datas de criaÃ§Ã£o e atualizaÃ§Ã£o.",
      "Status de prioridade e organizaÃ§Ã£o visual.",
      "Estado persistido no navegador.",
    ],
    solution: [
      "Interface web simples com CRUD de notas.",
      "PersistÃªncia via LocalStorage para uso offline.",
      "OrganizaÃ§Ã£o por tags e datas.",
      "Feedback visual para aÃ§Ãµes do usuÃ¡rio.",
    ],
    features: [
      "CriaÃ§Ã£o, ediÃ§Ã£o e exclusÃ£o de notas.",
      "Busca rÃ¡pida por palavras-chave.",
      "PersistÃªncia local no navegador.",
      "Layout responsivo para desktop e mobile.",
    ],
    highlights: [
      "Fluxo de uso direto e sem fricÃ§Ã£o.",
      "PersistÃªncia offline sem backend.",
      "Base pronta para evoluir com autenticaÃ§Ã£o.",
      "CÃ³digo enxuto e fÃ¡cil de manter.",
    ],
    demonstrates: [
      "CRUD em front-end puro.",
      "PersistÃªncia local de dados.",
      "OrganizaÃ§Ã£o de UI com foco em produtividade.",
      "Boas prÃ¡ticas de JavaScript bÃ¡sico.",
    ],
    techSummary:
      "AplicaÃ§Ã£o web em JavaScript puro com HTML e CSS, usando LocalStorage para persistÃªncia.",
    conclusion: [
      "Implementei um CRUD simples e funcional.",
      "Garanti persistÃªncia local sem depender de API.",
      "ConstruÃ­ uma base leve para evoluÃ§Ã£o futura.",
    ],
    howToRun: [
      "Clone o repositÃ³rio.",
      "Abra o arquivo index.html no navegador.",
      "Crie e organize suas notas.",
      "As alteraÃ§Ãµes ficam salvas localmente.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - Portugues/Gestor de Notas.png",
        alt: "Capa do projeto Gestor de Notas",
      },
      {
        src: "/Gestor de Notas.mp4",
        alt: "DemonstraÃ§Ã£o do Gestor de Notas",
        type: "video",
      },
    ],
  },
  {
    slug: "hand-gesture-recognition-realtime",
    title: "Reconhecimento de Gestos de MÃ£o em Tempo Real",
    headline:
      "Reconhecimento de Gestos | VisÃ£o Computacional com Python e MediaPipe",
    tagline:
      "Sistema de visÃ£o computacional em tempo real para detectar mÃ£os e contar dedos usando webcam.",
    role: "Desenvolvedor",
    stack: ["Python", "OpenCV", "MediaPipe"],
    repoUrl:
      "https://github.com/matheussiqueira-dev/Reconhecimento-de-Gestos-de-Mao",
    demo: {
      kind: "video",
      src: "/Hands Gesture.mp4",
      poster: "/Thmbnail/Thumbnail - Portugues/Reconhecimento de Gestos de Mão em Tempo Real.png",
      caption: "DemonstraÃ§Ã£o do reconhecimento de gestos em tempo real.",
    },
    intro: {
      title:
        "Sistema de Reconhecimento de Gestos de MÃ£o em Tempo Real",
      paragraphs: [
        "Este projeto implementa um sistema de visÃ£o computacional em tempo real para detectar mÃ£os e contar dedos usando a webcam do computador.",
        "Desenvolvido com Python, OpenCV e MediaPipe, o sistema Ã© capaz de detectar a mÃ£o, extrair landmarks e identificar quantos dedos estÃ£o levantados (0 a 5) com alta precisÃ£o.",
        "Mais do que uma prova de conceito, este projeto demonstra habilidades em visÃ£o computacional, processamento de vÃ­deo em tempo real e integraÃ§Ã£o de bibliotecas de machine learning.",
      ],
      sections: [
        {
          title: "Como Funciona?",
          paragraphs: [
            "O sistema segue um fluxo de processamento bem definido para detectar e analisar os gestos das mÃ£os:",
          ],
          items: [
            "Captura de VÃ­deo: O OpenCV captura frames contÃ­nuos da webcam.",
            "PrÃ©-processamento: Espelhamento da imagem e conversÃ£o de BGR para RGB.",
            "DetecÃ§Ã£o: O modelo MediaPipe processa a imagem e retorna 21 pontos (landmarks) por mÃ£o.",
            "Contagem de Dedos: HeurÃ­stica baseada na posiÃ§Ã£o vertical (dedos) e horizontal (polegar).",
          ],
        },
        {
          title: "LÃ³gica de Contagem de Dedos",
          paragraphs: [
            "A contagem utiliza uma abordagem heurÃ­stica baseada nas coordenadas dos landmarks:",
          ],
          items: [
            "4 Dedos Principais: Verifica a altura da ponta do dedo em relaÃ§Ã£o Ã  articulaÃ§Ã£o do meio.",
            "Polegar: Verifica a posiÃ§Ã£o horizontal da ponta em relaÃ§Ã£o Ã  articulaÃ§Ã£o base.",
            "DetecÃ§Ã£o de mÃ£o esquerda/direita para ajustar a lÃ³gica do polegar.",
          ],
        },
        {
          title: "Tecnologias Utilizadas",
          paragraphs: [
            "O projeto foi construÃ­do com uma stack focada em visÃ£o computacional:",
          ],
          subSections: [
            {
              title: "Processamento de VÃ­deo",
              items: [
                "OpenCV para captura e manipulaÃ§Ã£o de frames",
                "Processamento em tempo real com baixa latÃªncia",
                "RenderizaÃ§Ã£o de landmarks e feedback visual",
              ],
            },
            {
              title: "Machine Learning",
              items: [
                "MediaPipe Hands para detecÃ§Ã£o e rastreamento de mÃ£os",
                "Modelo prÃ©-treinado com 21 landmarks por mÃ£o",
                "Suporte para detecÃ§Ã£o de atÃ© 2 mÃ£os simultaneamente",
              ],
            },
          ],
        },
        {
          title: "PossÃ­veis Melhorias Futuras",
          paragraphs: [
            "O projeto foi estruturado para permitir evoluÃ§Ã£o e novas funcionalidades:",
          ],
          items: [
            "Reconhecimento de gestos especÃ­ficos (paz, rock, soco fechado, etc.)",
            "Controle do PC usando pyautogui (volume, mouse, atalhos)",
            "Interface grÃ¡fica com Streamlit ou PyQt",
            "Contagem refinada para mÃºltiplas mÃ£os simultaneamente",
          ],
        },
        {
          title: "CÃ³digo Fonte",
          paragraphs: [
            "O cÃ³digo-fonte completo estÃ¡ disponÃ­vel no GitHub, permitindo anÃ¡lise detalhada da implementaÃ§Ã£o e decisÃµes tÃ©cnicas.",
          ],
          footer: ["RepositÃ³rio:"],
          link: {
            label: "github.com/matheussiqueira-dev/Reconhecimento-de-Gestos-de-Mao",
            href: "https://github.com/matheussiqueira-dev/Reconhecimento-de-Gestos-de-Mao",
          },
        },
      ],
    },
    context:
      "Projeto educacional e de portfÃ³lio para demonstrar habilidades em visÃ£o computacional e processamento de vÃ­deo em tempo real usando Python.",
    problem: [
      "Necessidade de detectar gestos de mÃ£o sem hardware especializado.",
      "Contagem de dedos precisa para aplicaÃ§Ãµes de interface natural.",
      "Processamento em tempo real com baixa latÃªncia.",
    ],
    dataUsed: [
      "Frames de vÃ­deo da webcam em tempo real.",
      "21 landmarks da mÃ£o detectados pelo MediaPipe.",
      "Coordenadas X, Y normalizadas para anÃ¡lise de gestos.",
    ],
    solution: [
      "Pipeline de visÃ£o computacional com OpenCV para captura de vÃ­deo.",
      "IntegraÃ§Ã£o com MediaPipe Hands para detecÃ§Ã£o de landmarks.",
      "HeurÃ­stica de contagem de dedos baseada em posiÃ§Ã£o dos landmarks.",
      "Feedback visual em tempo real com desenho do esqueleto da mÃ£o.",
    ],
    features: [
      "DetecÃ§Ã£o de mÃ£os em tempo real via webcam.",
      "Contagem precisa de dedos levantados (0 a 5).",
      "Suporte para detecÃ§Ã£o de atÃ© 2 mÃ£os simultaneamente.",
      "Espelhamento de imagem para interaÃ§Ã£o natural.",
      "VisualizaÃ§Ã£o do esqueleto (landmarks) da mÃ£o.",
    ],
    highlights: [
      "Alta precisÃ£o na contagem de dedos.",
      "Baixa latÃªncia para processamento em tempo real.",
      "CÃ³digo limpo e bem documentado.",
      "Base sÃ³lida para projetos de interface natural.",
    ],
    demonstrates: [
      "VisÃ£o computacional com OpenCV e MediaPipe.",
      "Processamento de vÃ­deo em tempo real com Python.",
      "HeurÃ­sticas para anÃ¡lise de gestos.",
      "Desenvolvimento de aplicaÃ§Ãµes interativas.",
    ],
    techSummary:
      "Python com OpenCV para captura de vÃ­deo e MediaPipe para detecÃ§Ã£o de landmarks, com heurÃ­stica de contagem de dedos e feedback visual em tempo real.",
    conclusion: [
      "Projeto funcional demonstrando visÃ£o computacional aplicada.",
      "Base extensÃ­vel para controle de PC e interfaces naturais.",
      "Desenvolvido para fins educacionais e portfÃ³lio.",
    ],
    howToRun: [
      "PrÃ©-requisitos: Python 3.7+, webcam funcional.",
      "Instale as dependÃªncias: pip install opencv-python mediapipe",
      "Execute: python hand_gestures.py",
      "Pressione 'q' para fechar o programa.",
    ],
    screenshots: [
      {
        src: "/Thmbnail/Thumbnail - Portugues/Reconhecimento de Gestos de Mão em Tempo Real.png",
        alt: "Capa do projeto de reconhecimento de gestos de mÃ£o",
      },
      {
        src: "/Hands Gesture.gif",
        alt: "DemonstraÃ§Ã£o em GIF do reconhecimento de gestos em tempo real",
        type: "gif",
      },
      {
        src: "/Hands Gesture.mp4",
        alt: "DemonstraÃ§Ã£o do reconhecimento de gestos em tempo real",
        type: "video",
      },
    ],
    seo: {
      title:
        "Reconhecimento de Gestos de MÃ£o em Tempo Real | Python, OpenCV e MediaPipe",
      description:
        "Sistema de visÃ£o computacional em tempo real para detectar mÃ£os e contar dedos usando Python, OpenCV e MediaPipe. Projeto educacional com alta precisÃ£o.",
    },
  },
  {
    slug: "detector-de-stress",
    title: "Detector de Stress",
    headline: "Detector de Stress | Score fisiolÃ³gico em tempo real via webcam",
    tagline:
      "Pipeline modular que estima o nÃ­vel de stress apenas com webcam, HUD, REST/WS e dashboard.",
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
      title: "StressCam: estimativa contÃ­nua de stress via visÃ£o computacional",
      paragraphs: [
        "Pipeline em loop contÃ­nuo para estimar stress fisiolÃ³gico sem hardware dedicado, apenas com webcam e ajustes de iluminaÃ§Ã£o.",
        "Entrega o score suavizado, tendÃªncia e mensagens interpretÃ¡veis em HUD OpenCV, API REST /score e WebSocket a 5 Hz.",
      ],
      sections: [
        {
          title: "Como funciona",
          items: [
            "EqualizaÃ§Ã£o de luz e espelhamento opcionais antes do processamento.",
            "DetecÃ§Ã£o de face com MediaPipe e extraÃ§Ã£o de EAR, tensÃ£o facial e Ã¡rea pupilar.",
            "Buffers temporais + EMA para suavizar ruÃ­do e baseline personalizado de cada pessoa.",
          ],
        },
        {
          title: "Entrega de dados",
          items: [
            "HUD com histÃ³rico rolling de 30s, alertas e mensagens em portuguÃªs.",
            "Servidor REST/WS opcional para integrar dashboards externos.",
            "Dashboard Streamlit para visualizaÃ§Ã£o rÃ¡pida do score e tuning.",
          ],
        },
      ],
      video: {
        src: "/Detector de Stress.mp4",
        poster: "/Thmbnail/Thumbnail - Portugues/Detector de Stress.png",
        caption: "Veja a demonstraÃ§Ã£o em vÃ­deo: score, tendÃªncia e alertas em tempo real.",
      },
    },
    context:
      "Monitorar sinais de stress sem sensores biomÃ©tricos, com baixo custo e integraÃ§Ã£o simples para dashboards ou provas de conceito.",
    problem: [
      "Obter um score contÃ­nuo de stress apenas com webcam, sem wearables.",
      "Reduzir ruÃ­do de iluminaÃ§Ã£o e movimentos de cabeÃ§a em tempo real.",
      "Calibrar baseline individual sem intervenÃ§Ã£o manual.",
      "Disponibilizar o score em APIs para dashboards e integraÃ§Ãµes.",
    ],
    dataUsed: [
      "Frames da webcam normalizados (espelhamento e equalizaÃ§Ã£o opcional).",
      "Landmarks faciais (MediaPipe) para EAR, tensÃ£o geomÃ©trica e Ã¡rea pupilar.",
      "Buffers temporais com EMA para suavizar score e tendÃªncia.",
      "Eventos do HUD (mensagens, avisos de iluminaÃ§Ã£o/centralizaÃ§Ã£o).",
    ],
    solution: [
      "Captura de vÃ­deo com OpenCV e equalizaÃ§Ã£o CLAHE para estabilidade de luz.",
      "ExtraÃ§Ã£o de EAR, tensÃ£o facial e pupila; vetorizaÃ§Ã£o via pack_features.",
      "Baseline normalizado por pessoa e regressÃ£o leve (SGD/RandomForest) com clipping 0-1.",
      "Streaming do score: HUD OpenCV + REST (/score) + WebSocket 5 Hz + dashboard Streamlit.",
    ],
    features: [
      "Modo demonstraÃ§Ã£o com alta sensibilidade e ajuste automÃ¡tico de grÃ¡ficos.",
      "Baseline guiado com mensagens no HUD para calibraÃ§Ã£o inicial.",
      "Atalhos rÃ¡pidos: salvar frames, alternar modo demo, encerrar com 'q'.",
      "Servidor REST/WS opcional para expor score e tendÃªncia em tempo real.",
    ],
    highlights: [
      "Pipeline de visÃ£o computacional calibrÃ¡vel e de baixa latÃªncia.",
      "Entrega de dados em mÃºltiplos canais (HUD, REST, WebSocket, dashboard).",
      "Feature engineering temporal para reduzir ruÃ­do e falsos positivos.",
      "Pronto para conectar a dashboards ou anÃ¡lises de bem-estar.",
    ],
    demonstrates: [
      "VisÃ£o computacional em streaming com MediaPipe + OpenCV.",
      "Feature engineering e suavizaÃ§Ã£o temporal com EMA e buffers deslizantes.",
      "APIs em tempo real via http.server e websockets para produtos de dados.",
      "UX de monitoramento contÃ­nuo com HUD interpretÃ¡vel e modo demo.",
    ],
    techSummary:
      "Python com OpenCV e MediaPipe para rastreamento facial, regressÃ£o leve (SGD/RandomForest) com baseline personalizado, streaming via http.server + websockets e dashboard em Streamlit.",
    conclusion: [
      "ConstruÃ­ um pipeline completo, calibrÃ¡vel e observÃ¡vel para score de stress em tempo real.",
      "Integrei entrega multi-canal (HUD, REST, WS) para facilitar dashboards e POCs.",
      "Deixei ganchos claros para evoluÃ§Ã£o de modelo, novas features e mÃ©tricas.",
    ],
    howToRun: [
      "Recomendado Python 3.10.",
      "Crie o ambiente: py -3.10 -m venv .venv && .venv\\Scripts\\activate.",
      "Instale dependÃªncias: pip install -r requirements.txt.",
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
        alt: "DemonstraÃ§Ã£o em vÃ­deo do Detector de Stress",
        type: "video",
      },
    ],
    seo: {
      title: "Detector de Stress | Score em tempo real via webcam",
      description:
        "Pipeline MediaPipe + OpenCV que estima stress fisiolÃ³gico com baseline individual, HUD, REST/WS e dashboard Streamlit.",
    },
  },
];

export const projectOrder = [
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




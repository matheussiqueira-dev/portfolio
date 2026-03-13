import type { DeploymentNode } from "@/data/deployment.types"

export const deploymentNodesEn: DeploymentNode[] = [
  {
    slug: "invisabilidade-digital",
    nodeId: "NODE-001",
    title: {
      pt: "Camuflagem Digital em Tempo Real",
      en: "Real-Time Digital Camouflage",
    },
    shortDescription: {
      pt: "Sistema de invisibilidade web com detecção de rastreadores e desvio inteligente",
      en: "Web invisibility system with tracker detection and intelligent bypass",
    },
    fullDescription: {
      pt: "Plataforma avançada que utiliza machine learning para detectar e neutralizar sistemas de rastreamento web. Implementa várias técnicas de ofuscação de dados, mascaramento de fingerprint do navegador e roteamento de tráfego inteligente através de proxies distribuídos.",
      en: "Advanced platform that uses machine learning to detect and neutralize web tracking systems. Implements multiple data obfuscation techniques, browser fingerprint masking, and intelligent traffic routing through distributed proxies.",
    },
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "WebSockets",
      "TensorFlow.js",
      "Docker",
    ],
    architecture: [
      "Microservices with Kubernetes orchestration",
      "ML pipeline with real-time processing",
      "Distributed caching with Redis",
      "Event-driven architecture with RabbitMQ",
    ],
    challenges: [
      "Sub-100ms latency in tracker detection",
      "Synchronization across multiple devices",
      "Compatibility with different browsers",
      "Scalability for 100k+ simultaneous users",
    ],
    metrics: {
      performance: "98%",
      lighthouse: "95",
    },
    status: "STABLE",
    thumbnail: {
      pt: "/thumbnails/pt/invisabilidade-digital.png",
      en: "/thumbnails/en/invisabilidade-digital.png",
    },
    links: {
      github: "https://github.com",
      demo: "https://demo.example.com",
      live: "https://example.com",
    },
  },
  {
    slug: "dashboard-analytics",
    nodeId: "NODE-002",
    title: {
      pt: "Dashboard Analytics em Tempo Real",
      en: "Real-Time Analytics Dashboard",
    },
    shortDescription: {
      pt: "Plataforma de análise de dados com visualizações interativas e relatórios automáticos",
      en: "Data analysis platform with interactive visualizations and automated reports",
    },
    fullDescription: {
      pt: "Sistema completo de inteligência de negócios com integração de múltiplas fontes de dados, processamento em tempo real e geração automática de relatórios personalizados com insights baseados em IA.",
      en: "Complete business intelligence system with integration of multiple data sources, real-time processing, and automatic generation of personalized reports with AI-based insights.",
    },
    stack: ["Next.js", "React", "D3.js", "PostgreSQL", "GraphQL", "Python"],
    architecture: [
      "Reusable React components",
      "GraphQL for optimized queries",
      "ETL pipeline with Python",
      "Strategic caching with Vercel Edge",
    ],
    challenges: [
      "Rendering 10k+ data points",
      "Synchronization with multiple APIs",
      "Responsiveness across different resolutions",
      "Real-time PDF generation",
    ],
    metrics: {
      performance: "94%",
      lighthouse: "92",
    },
    status: "ACTIVE",
    thumbnail: {
      pt: "/thumbnails/pt/dashboard-analytics.png",
      en: "/thumbnails/en/dashboard-analytics.png",
    },
    links: {
      github: "https://github.com",
      live: "https://example.com",
    },
  },
]

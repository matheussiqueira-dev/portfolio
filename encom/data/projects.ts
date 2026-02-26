/**
 * ENCOM Project Data Structure
 * Todos os dados mockados para dashboard
 */

export interface ProjectMetrics {
  cpuUsage: number
  memoryUsage: number
  latency: number
  performanceScore: number
}

export type DeploymentStatus = 'stable' | 'active' | 'archived'

export interface Project {
  id: string
  nodeId: string
  name: string
  description: string
  status: DeploymentStatus
  stack: string[]
  metrics: ProjectMetrics
  technicalChallenges: string[]
  repositoryUrl: string
  lastUpdated: string
}

export interface SystemData {
  nodeCount: number
  activeDeployments: number
  systemStatus: 'online' | 'offline'
  buildVersion: string
  clearanceLevel: number
  cpuUsage: number
  memoryUsage: number
  activeNodes: number
  latency: number
}

export const systemData: SystemData = {
  nodeCount: 12,
  activeDeployments: 8,
  systemStatus: 'online',
  buildVersion: 'ENCOM-2.0.1-BETA',
  clearanceLevel: 9,
  cpuUsage: 42,
  memoryUsage: 58,
  activeNodes: 9,
  latency: 24,
}

export const projects: Project[] = [
  {
    id: 'proj-001',
    nodeId: 'NODE-01',
    name: 'Touchless Web Interface',
    description: 'Interface gesture-based com reconhecimento de movimento em tempo real',
    status: 'stable',
    stack: ['React', 'TypeScript', 'Gesture API'],
    metrics: {
      cpuUsage: 34,
      memoryUsage: 52,
      latency: 12,
      performanceScore: 94,
    },
    technicalChallenges: [
      'Otimização de detecção de gesto em baixa latência',
      'Sincronização cross-browser de eventos de movimento',
      'Redução de consumo de memória em tracking contínuo',
    ],
    repositoryUrl: 'https://github.com/matheus/touchless-web',
    lastUpdated: '2025-02-20',
  },
  {
    id: 'proj-002',
    nodeId: 'NODE-02',
    name: 'Business Decision Simulator',
    description: 'Simulador interativo de decisões de negócio com IA preditiva',
    status: 'active',
    stack: ['Next.js', 'Python', 'TensorFlow'],
    metrics: {
      cpuUsage: 67,
      memoryUsage: 78,
      latency: 45,
      performanceScore: 87,
    },
    technicalChallenges: [
      'Integração de modelo ML em tempo real',
      'Streaming de predições sem latência perceptível',
      'Escalabilidade horizontal de workers',
    ],
    repositoryUrl: 'https://github.com/matheus/business-simulator',
    lastUpdated: '2025-02-19',
  },
  {
    id: 'proj-003',
    nodeId: 'NODE-03',
    name: 'Synthwave Space Explorer',
    description: 'Experiência imersiva 3D em estilo synthwave retrô',
    status: 'active',
    stack: ['Three.js', 'WebGL', 'React Three Fiber'],
    metrics: {
      cpuUsage: 78,
      memoryUsage: 85,
      latency: 16,
      performanceScore: 91,
    },
    technicalChallenges: [
      'Otimização de rendering 3D em dispositivos variados',
      'Compressão de assets sem perda visual significativa',
      'Suporte a VR/AR em browsers modernos',
    ],
    repositoryUrl: 'https://github.com/matheus/synthwave-space',
    lastUpdated: '2025-02-18',
  },
  {
    id: 'proj-004',
    nodeId: 'NODE-04',
    name: 'Data Pipeline ETL',
    description: 'Pipeline escalável para processamento de dados em larga escala',
    status: 'stable',
    stack: ['Python', 'Apache Kafka', 'PostgreSQL'],
    metrics: {
      cpuUsage: 89,
      memoryUsage: 76,
      latency: 234,
      performanceScore: 92,
    },
    technicalChallenges: [
      'Processamento de 10M+ registros/dia',
      'Garantia de idempotência em failures',
      'Monitoramento de data quality em tempo real',
    ],
    repositoryUrl: 'https://github.com/matheus/data-pipeline',
    lastUpdated: '2025-02-21',
  },
]

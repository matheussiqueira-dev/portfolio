/**
 * ENCOM Internationalization
 * Suporta PT-BR e EN
 * Sistema simples sem dependências externas
 */

export const locales = ['pt', 'en'] as const
export type Locale = (typeof locales)[number]

export type Dictionary = {
  systemStatus: string
  activeDeployments: string
  clearanceLevel: string
  buildVersion: string
  mode: string
  language: string
  accessRepository: string
  initializingSystem: string
  systemInitialized: string
  secureMode: string
  legacyInterface: string
  aresInterface: string
  technicalInterface: string
  online: string
  offline: string
  nodeCount: string
  cpuUsage: string
  memoryUsage: string
  latency: string
  performanceScore: string
  technicalChallenges: string
  stackTechnologies: string
  projectDetails: string
  backToProjects: string
  deploymentStatus: string
  stable: string
  active: string
  archived: string
}

export const dictionaries: Record<Locale, Dictionary> = {
  pt: {
    systemStatus: 'Status do Sistema',
    activeDeployments: 'Deployments Ativos',
    clearanceLevel: 'Nível de Autorização',
    buildVersion: 'Versão Build',
    mode: 'Modo',
    language: 'Idioma',
    accessRepository: 'Acessar Repositório',
    initializingSystem: 'INICIALIZANDO SISTEMA',
    systemInitialized: 'SISTEMA INICIALIZADO',
    secureMode: 'Modo Seguro',
    legacyInterface: 'Interface Legacy',
    aresInterface: 'Interface Ares',
    technicalInterface: 'Interface Técnica',
    online: 'ONLINE',
    offline: 'OFFLINE',
    nodeCount: 'Nodes Ativos',
    cpuUsage: 'CPU',
    memoryUsage: 'Memória',
    latency: 'Latência',
    performanceScore: 'Score Performance',
    technicalChallenges: 'Desafios Técnicos',
    stackTechnologies: 'Stack',
    projectDetails: 'Detalhes do Projeto',
    backToProjects: 'Voltar para Projetos',
    deploymentStatus: 'Status Deployment',
    stable: 'ESTÁVEL',
    active: 'ATIVO',
    archived: 'ARQUIVADO',
  },
  en: {
    systemStatus: 'System Status',
    activeDeployments: 'Active Deployments',
    clearanceLevel: 'Clearance Level',
    buildVersion: 'Build Version',
    mode: 'Mode',
    language: 'Language',
    accessRepository: 'Access Repository',
    initializingSystem: 'INITIALIZING SYSTEM',
    systemInitialized: 'SYSTEM INITIALIZED',
    secureMode: 'Secure Mode',
    legacyInterface: 'Legacy Interface',
    aresInterface: 'Ares Interface',
    technicalInterface: 'Technical Interface',
    online: 'ONLINE',
    offline: 'OFFLINE',
    nodeCount: 'Active Nodes',
    cpuUsage: 'CPU',
    memoryUsage: 'Memory',
    latency: 'Latency',
    performanceScore: 'Performance Score',
    technicalChallenges: 'Technical Challenges',
    stackTechnologies: 'Stack',
    projectDetails: 'Project Details',
    backToProjects: 'Back to Projects',
    deploymentStatus: 'Deployment Status',
    stable: 'STABLE',
    active: 'ACTIVE',
    archived: 'ARCHIVED',
  },
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]
}

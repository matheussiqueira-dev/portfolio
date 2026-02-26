/**
 * ENCOM Dictionaries
 * Centralized translation data for PT/EN
 * Type-safe dictionary objects
 */

import { Dictionary, Locale } from './i18n.types'

export const DICTIONARIES: Record<Locale, Dictionary> = {
  pt: {
    // Navigation
    dashboard: 'Dashboard',
    projects: 'Projetos',
    status: 'Status',
    settings: 'Configurações',

    // System Status
    systemStatus: 'Status do Sistema',
    online: 'Online',
    offline: 'Offline',
    cpu: 'CPU',
    memory: 'Memória',
    nodes: 'Nós',
    activeNodes: 'Nós Ativos',
    latency: 'Latência',
    performanceScore: 'Performance',
    uptime: 'Disponibilidade',
    requestsPerSecond: 'Req/seg',

    // Projects
    description: 'Descrição',
    stack: 'Tecnologias',
    metrics: 'Métricas',
    challenges: 'Desafios',
    repository: 'Repositório',

    // Common
    loading: 'Carregando...',
    error: 'Erro',
    retry: 'Tentar Novamente',
    close: 'Fechar',
    save: 'Salvar',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
  },
  en: {
    // Navigation
    dashboard: 'Dashboard',
    projects: 'Projects',
    status: 'Status',
    settings: 'Settings',

    // System Status
    systemStatus: 'System Status',
    online: 'Online',
    offline: 'Offline',
    cpu: 'CPU',
    memory: 'Memory',
    nodes: 'Nodes',
    activeNodes: 'Active Nodes',
    latency: 'Latency',
    performanceScore: 'Performance',
    uptime: 'Uptime',
    requestsPerSecond: 'Req/sec',

    // Projects
    description: 'Description',
    stack: 'Stack',
    metrics: 'Metrics',
    challenges: 'Challenges',
    repository: 'Repository',

    // Common
    loading: 'Loading...',
    error: 'Error',
    retry: 'Retry',
    close: 'Close',
    save: 'Save',
    cancel: 'Cancel',
    confirm: 'Confirm',
  },
}

export const SUPPORTED_LOCALES: Locale[] = ['pt', 'en']
export const DEFAULT_LOCALE: Locale = 'pt'

/**
 * ENCOM i18n Types
 * Enterprise-grade internationalization type definitions
 */

export type Locale = 'pt' | 'en'

export interface Dictionary {
  // Navigation
  dashboard: string
  projects: string
  status: string
  settings: string

  // System Status
  systemStatus: string
  online: string
  offline: string
  cpu: string
  memory: string
  nodes: string
  activeNodes: string
  latency: string
  performanceScore: string
  uptime: string
  requestsPerSecond: string
  requests: string
  usage: string
  allocated: string
  continuous: string
  today: string

  // Projects
  description: string
  stack: string
  metrics: string
  challenges: string
  repository: string
  overview: string
  completed: string
  earned: string
  technologies: string
  certificates: string
  viewDetails: string
  noProjects: string
  all: string
  active: string
  archived: string

  // Common
  loading: string
  error: string
  retry: string
  close: string
  save: string
  cancel: string
  confirm: string
}

export interface I18nEngine {
  getLocale: () => Locale
  getDictionary: (locale: Locale) => Dictionary
  isValidLocale: (locale: string) => locale is Locale
}

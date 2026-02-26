/**
 * Deployment Node - Project interface with bilingual support
 * Represents a project as an expandable deployment node card
 */

export interface ProjectMetrics {
  performance: string
  lighthouse: string
}

export interface DeploymentNode {
  slug: string
  nodeId: string // E.g., "NODE-001"
  title: {
    pt: string
    en: string
  }
  shortDescription: {
    pt: string
    en: string
  }
  fullDescription: {
    pt: string
    en: string
  }
  stack: string[]
  architecture: string[]
  challenges: string[]
  metrics: ProjectMetrics
  status: "STABLE" | "ACTIVE" | "ARCHIVED"
  thumbnail: {
    pt: string // /thumbnails/pt/slug.png
    en: string // /thumbnails/en/slug.png
  }
  links?: {
    github?: string
    demo?: string
    live?: string
  }
}

// Dictionary keys for expanded sections
export interface ProjectDictionary {
  stack: string
  architecture: string
  challenges: string
  metrics: string
  performance: string
  lighthouse: string
  viewMore: string
  viewLess: string
}

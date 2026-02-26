/**
 * System Layer Exports
 * Feature modules that compose Core + UI
 * 
 * @architecture System Layer
 */

// Dashboard modules
export { SystemStatus } from './dashboard/SystemStatus.module'
export { MetricsPanel } from './dashboard/MetricsPanel.module'

// Project modules
export { ProjectCard } from './projects/ProjectCard.module'
export { ProjectList } from './projects/ProjectList.module'

// Type exports
export type { SystemStatusProps } from './dashboard/SystemStatus.module'
export type { MetricsPanelProps } from './dashboard/MetricsPanel.module'
export type { Project, ProjectCardProps } from './projects/ProjectCard.module'
export type { ProjectListProps } from './projects/ProjectList.module'

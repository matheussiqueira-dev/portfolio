/**
 * @/system/projects
 * Business logic components for project showcase
 * 
 * Usage:
 *   import { ProjectCard, ProjectCardDetails, ProjectList } from '@/system/projects'
 */

export { ProjectCard } from './ProjectCard';
export { ProjectCardDetails } from './ProjectCardDetails';
export { ProjectList } from './ProjectList';

// Deployment nodes
export { default as ProjectDeployment } from './ProjectDeployment.module';
export { DeploymentNodesList } from './DeploymentNodesList';

export type {} from '../../data/projects-card.types';

/**
 * @/components
 * Top-level components barrel export
 * 
 * Usage:
 *   import { Header, Footer, Cursor, PageTransition } from '@/components'
 *   import { ProjectCard, ProjectList } from '@/system/projects'
 */

// Layout components
export { Header, Footer, HeaderNav, MobileMenu, LogoLink, AppVisualEffects } from './layout';

// Interactive components at root
export { Cursor } from './Cursor';
export { PageTransition } from './PageTransition';

// Standalone components at root level
export { ActionButtons } from './ActionButtons';
export { InteractivePhoto } from './InteractivePhoto';
export { ProfileCard } from './ProfileCard';

// Note: System components are under @/system/projects (not here)
// Specific sections are under @/components/sections

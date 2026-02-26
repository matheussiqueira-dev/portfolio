/**
 * ENCOM Dashboard Page (Refactored)
 * Example implementation using enterprise architecture
 * 
 * Architecture layers used:
 * - Core: i18nEngine for locale/dictionary
 * - UI: Layout components (Sidebar, Topbar, PageTransition)
 * - System: Feature modules (SystemStatus, MetricsPanel, ProjectList)
 */

import { Metadata } from 'next'
import { i18nEngine } from '@/encom/core/i18n/i18n.engine'
import { Sidebar } from '@/encom/ui/layout/Sidebar'
import { Topbar } from '@/encom/ui/layout/Topbar'
import { SystemStatus } from '@/encom/system/dashboard/SystemStatus.module'
import { MetricsPanel } from '@/encom/system/dashboard/MetricsPanel.module'
import { ProjectList } from '@/encom/system/projects/ProjectList.module'
import { APP_CONFIG } from '@/encom/core/config/app.config'
import styles from './page.module.css'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'ENCOM Dashboard | Enterprise Portfolio System',
    description: 'Real-time portfolio management dashboard',
  }
}

export default async function DashboardPage({
  params,
}: {
  params: { locale?: string }
}) {
  // Get locale and dictionary from Core layer
  const locale = await params.locale
  const dictionary = i18nEngine.getDictionary(locale as 'pt' | 'en' | undefined)

  // Mock data - in production this would come from API/Database
  const projects = [
    {
      id: '1',
      title: 'ENCOM Dashboard v3',
      description: 'Enterprise-grade portfolio management system with real-time metrics',
      stack: ['Next.js', 'TypeScript', 'CSS Modules'],
      status: 'active' as const,
      href: '/encom/projects/encom-dashboard',
    },
    {
      id: '2',
      title: 'Tron Cinematic System',
      description: 'Cinematic transition engine with custom cursor and reveal effects',
      stack: ['React', 'Framer Motion', 'GSAP'],
      status: 'completed' as const,
      href: '/encom/projects/tron-system',
    },
    {
      id: '3',
      title: 'Eye Tracking Interface',
      description: 'Accessibility project using computer vision for gesture control',
      stack: ['Python', 'OpenCV', 'MediaPipe'],
      status: 'completed' as const,
      href: '/encom/projects/eye-tracking',
    },
  ]

  return (
    <div className={styles.layout}>
      <Sidebar />
      
      <main className={styles.main}>
        <Topbar dictionary={dictionary} />
        
        <div className={styles.content}>
          <h1 className={styles.pageTitle}>{dictionary.dashboard}</h1>

          {/* System Layer: Real-time system metrics */}
          <SystemStatus dictionary={dictionary} />

          {/* System Layer: Project metrics overview */}
          <MetricsPanel
            dictionary={dictionary}
            projectsCount={15}
            certificatesCount={28}
            stackCount={42}
          />

          {/* System Layer: Project list with filters */}
          <ProjectList projects={projects} dictionary={dictionary} />
        </div>
      </main>
    </div>
  )
}

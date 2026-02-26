import { Metadata } from 'next'
import type { Locale } from '@/encom/core/i18n/i18n.types'
import { i18nEngine } from '@/encom/core/i18n/i18n.engine'
import { projects } from '@/encom/data/projects'
import { SystemStatus } from '@/encom/system/dashboard/SystemStatus.module'
import { MetricsPanel } from '@/encom/system/dashboard/MetricsPanel.module'
import { ProjectList } from '@/encom/system/projects/ProjectList.module'
import type { Project } from '@/encom/system/projects/ProjectCard.module'
import { Sidebar } from '@/encom/ui/layout/Sidebar'
import { Topbar } from '@/encom/ui/layout/Topbar'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'ENCOM Dashboard',
  description: 'Advanced system monitoring and project management interface',
}

interface DashboardProps {
  params: Promise<{ locale: Locale }>
}

export default async function Dashboard({ params }: DashboardProps) {
  const { locale } = await params
  const dictionary = i18nEngine.getDictionary(locale)

  const mappedProjects: Project[] = projects.map((project) => {
    const status =
      project.status === 'stable'
        ? 'completed'
        : project.status === 'active'
          ? 'active'
          : 'archived'

    return {
      id: project.id,
      title: project.name,
      description: project.description,
      stack: project.stack,
      status,
      href: `/encom/projects/${project.id}`,
    }
  })

  const stackCount = new Set(
    mappedProjects.flatMap((project) => project.stack)
  ).size

  return (
    <div className={styles.layout}>
      <Sidebar />

      <main className={styles.main}>
        <Topbar dictionary={dictionary} />

        <div className={styles.content}>
          <h1 className={styles.pageTitle}>{dictionary.dashboard}</h1>

          <SystemStatus dictionary={dictionary} />

          <MetricsPanel
            dictionary={dictionary}
            projectsCount={mappedProjects.length}
            certificatesCount={12}
            stackCount={stackCount}
          />

          <ProjectList projects={mappedProjects} dictionary={dictionary} />
        </div>
      </main>
    </div>
  )
}

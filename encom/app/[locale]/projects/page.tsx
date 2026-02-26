import Link from 'next/link'
import type { Locale } from '@/encom/core/i18n/i18n.types'
import { i18nEngine } from '@/encom/core/i18n/i18n.engine'
import { projects } from '@/encom/data/projects'
import { DataBlock } from '@/encom/components/DataBlock'

interface ProjectsPageProps {
  params: Promise<{ locale: Locale }>
}

export const metadata = {
  title: 'Projects - ENCOM',
  description: 'Network of integrated systems and services',
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params
  const dictionary = i18nEngine.getDictionary(locale)

  return (
    <div className="projects-page">
      <h1 className="page-title">{dictionary.projects}</h1>

      <div className="projects-list">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/${locale}/projects/${project.id}`}
            className="project-link"
          >
            <DataBlock
              title={project.name}
              value={project.nodeId}
              subtitle={`${project.stack.length} ${dictionary.technologies} • ${project.metrics.performanceScore}% ${dictionary.performanceScore}`}
              icon="⚙️"
              accent="primary"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

import Link from 'next/link'
import { Locale, getDictionary } from '@/encom/locales'
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
  const dictionary = await getDictionary(locale)

  return (
    <div className="projects-page">
      <h1 className="page-title">{dictionary.projects}</h1>

      <div className="projects-list">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="project-link"
          >
            <DataBlock
              title={project.title}
              value={`NODE-${project.id.toString().padStart(2, '0')}`}
              subtitle={`${project.stack.length} technologies • ${project.metrics.performanceScore}% performance`}
              icon="⚙️"
              accent="primary"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

import { notFound } from 'next/navigation'
import type { Locale } from '@/encom/core/i18n/i18n.types'
import { i18nEngine } from '@/encom/core/i18n/i18n.engine'
import { projects } from '@/encom/data/projects'
import { DataBlock } from '@/encom/components/DataBlock'

interface ProjectDetailProps {
  params: Promise<{ locale: Locale; slug: string }>
}

export const metadata = {
  title: 'Project - ENCOM',
  description: 'Project details and metrics',
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
    locale: 'pt',
  }))
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const { slug, locale } = await params
  const dictionary = i18nEngine.getDictionary(locale)
  const project = projects.find((p) => p.id === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="project-detail">
      <div className="project-header">
        <h1 className="page-title">{project.name}</h1>
        <div className="project-node-id">{project.nodeId}</div>
      </div>

      <div className="project-content">
        <section className="project-section">
          <h2 className="section-title">{dictionary.description}</h2>
          <p className="project-description">{project.description}</p>
        </section>

        <section className="project-section">
          <h2 className="section-title">{dictionary.stack}</h2>
          <div className="tech-stack">
            {project.stack.map((tech) => (
              <div key={tech} className="tech-badge">
                {tech}
              </div>
            ))}
          </div>
        </section>

        <section className="project-section">
          <h2 className="section-title">{dictionary.metrics}</h2>
          <div className="metrics-grid-detail">
            <DataBlock
              title={dictionary.performanceScore}
              value={`${project.metrics.performanceScore}%`}
              icon="📊"
              accent="success"
            />
            <DataBlock
              title={dictionary.cpu}
              value={`${project.metrics.cpuUsage}%`}
              icon="🧠"
              accent="success"
            />
            <DataBlock
              title={dictionary.memory}
              value={`${project.metrics.memoryUsage}%`}
              icon="💾"
              accent="secondary"
            />
            <DataBlock
              title={dictionary.latency}
              value={`${project.metrics.latency}ms`}
              icon="📈"
              accent="primary"
            />
          </div>
        </section>

        <section className="project-section">
          <h2 className="section-title">{dictionary.challenges}</h2>
          <ul className="challenges-list">
            {project.technicalChallenges.map((challenge, idx) => (
              <li key={idx} className="challenge-item">
                {challenge}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

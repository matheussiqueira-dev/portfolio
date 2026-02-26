import { Locale, getDictionary } from '@/encom/locales'
import { systemData, projects } from '@/encom/data/projects'
import { SystemStatus } from '@/encom/components/SystemStatus'
import { DataBlock } from '@/encom/components/DataBlock'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ENCOM Dashboard',
  description: 'Advanced system monitoring and project management interface',
}

interface DashboardProps {
  params: Promise<{ locale: Locale }>
}

export default async function Dashboard({ params }: DashboardProps) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return (
    <div className="dashboard">
      <h1 className="page-title">{dictionary.dashboard}</h1>

      <SystemStatus data={systemData} dictionary={dictionary} />

      <div className="dashboard-grid">
        <div className="grid-section">
          <h2 className="section-title">{dictionary.projects}</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <DataBlock
                key={project.slug}
                title={project.title}
                value={`NODE-${project.id.toString().padStart(2, '0')}`}
                subtitle={project.stack.slice(0, 2).join(' • ')}
                icon="⚙️"
                accent="primary"
              />
            ))}
          </div>
        </div>

        <div className="grid-section">
          <h2 className="section-title">{dictionary.metrics}</h2>
          <div className="metrics-grid">
            <DataBlock
              title={dictionary.performanceScore}
              value={`${systemData.performanceScore}%`}
              icon="📊"
              accent="success"
            />
            <DataBlock
              title={dictionary.uptime}
              value="99.97%"
              subtitle="Last 30 days"
              icon="⏱️"
              accent="success"
            />
            <DataBlock
              title={dictionary.activeNodes}
              value={systemData.activeNodes}
              subtitle={`${systemData.activeNodes} nodes online`}
              icon="🔗"
              accent="primary"
            />
            <DataBlock
              title={dictionary.requestsPerSecond}
              value={Math.round(Math.random() * 5000)}
              subtitle="Current load"
              icon="📈"
              accent="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

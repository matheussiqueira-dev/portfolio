import type { Locale } from '@/encom/core/i18n/i18n.types'
import { i18nEngine } from '@/encom/core/i18n/i18n.engine'
import { systemData } from '@/encom/data/projects'
import { DataBlock } from '@/encom/components/DataBlock'

interface StatusPageProps {
  params: Promise<{ locale: Locale }>
}

export const metadata = {
  title: 'Status - ENCOM',
  description: 'Real-time system status and diagnostics',
}

export default async function StatusPage({ params }: StatusPageProps) {
  const { locale } = await params
  const dictionary = i18nEngine.getDictionary(locale)

  const statusItems = [
    { label: 'Core Systems', status: 'operational', icon: '🟢' },
    { label: 'Database Cluster', status: 'operational', icon: '🟢' },
    { label: 'API Gateway', status: 'operational', icon: '🟢' },
    { label: 'Cache Layer', status: 'operational', icon: '🟢' },
    { label: 'Load Balancer', status: 'operational', icon: '🟢' },
    { label: 'Security', status: 'operational', icon: '🟢' },
  ]

  return (
    <div className="status-page">
      <h1 className="page-title">{dictionary.systemStatus}</h1>

      <div className="status-overview">
        <div className="status-card">
          <div className="status-label">Global Status</div>
          <div className="status-value operational">OPERATIONAL</div>
          <div className="status-subtext">All systems nominal</div>
        </div>

        <div className="status-card">
          <div className="status-label">Uptime</div>
          <div className="status-value">99.97%</div>
          <div className="status-subtext">Last 30 days</div>
        </div>

        <div className="status-card">
          <div className="status-label">Response Time</div>
          <div className="status-value">{systemData.latency}ms</div>
          <div className="status-subtext">Average</div>
        </div>
      </div>

      <section className="status-section">
        <h2 className="section-title">Component Status</h2>
        <div className="status-grid">
          {statusItems.map((item) => (
            <DataBlock
              key={item.label}
              title={item.label}
              value={item.status.toUpperCase()}
              icon={item.icon}
              accent="success"
            />
          ))}
        </div>
      </section>

      <section className="status-section">
        <h2 className="section-title">Recent Events</h2>
        <div className="events-list">
          <div className="event-item">
            <span className="event-time">2024-01-15 14:32:21</span>
            <span className="event-message">System health check completed successfully</span>
          </div>
          <div className="event-item">
            <span className="event-time">2024-01-15 10:15:45</span>
            <span className="event-message">Load balancer rebalanced across 8 nodes</span>
          </div>
          <div className="event-item">
            <span className="event-time">2024-01-15 08:00:00</span>
            <span className="event-message">Scheduled maintenance completed</span>
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import { Dictionary } from '@/encom/locales'
import { SystemData } from '@/encom/data/projects'
import styles from './SystemStatus.module.css'

interface SystemStatusProps {
  data: SystemData
  dictionary: Dictionary
}

export function SystemStatus({ data, dictionary }: SystemStatusProps) {
  function getHealthStatus(value: number): 'critical' | 'warning' | 'healthy' {
    if (value >= 80) return 'critical'
    if (value >= 60) return 'warning'
    return 'healthy'
  }

  const cpuStatus = getHealthStatus(data.cpuUsage)
  const memStatus = getHealthStatus(data.memoryUsage)

  return (
    <div className={styles.systemStatus}>
      <div className={styles.header}>
        <h2 className={styles.title}>{dictionary.systemStatus}</h2>
        <div className={styles.timestamp}>
          {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className={styles.grid}>
        <div className={`${styles.metric} ${styles[cpuStatus]}`}>
          <div className={styles.label}>{dictionary.cpu}</div>
          <div className={styles.value}>{data.cpuUsage}%</div>
          <div className={styles.bar}>
            <div
              className={styles.fill}
              style={{ width: `${data.cpuUsage}%` }}
            />
          </div>
        </div>

        <div className={`${styles.metric} ${styles[memStatus]}`}>
          <div className={styles.label}>{dictionary.memory}</div>
          <div className={styles.value}>{data.memoryUsage}%</div>
          <div className={styles.bar}>
            <div
              className={styles.fill}
              style={{ width: `${data.memoryUsage}%` }}
            />
          </div>
        </div>

        <div className={styles.metric}>
          <div className={styles.label}>{dictionary.nodes}</div>
          <div className={styles.value}>{data.activeNodes}</div>
        </div>

        <div className={styles.metric}>
          <div className={styles.label}>{dictionary.latency}</div>
          <div className={styles.value}>{data.latency}ms</div>
        </div>
      </div>
    </div>
  )
}

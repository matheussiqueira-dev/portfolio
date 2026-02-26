/**
 * SystemStatus Module
 * Feature module that composes Core + UI
 * Displays real-time system metrics
 * 
 * @architecture System Layer
 */

'use client'

import React, { useEffect, useState } from 'react'
import { DataBlock } from '@/encom/ui/components/DataBlock'
import { Dictionary } from '@/encom/core/i18n/i18n.types'
import styles from './SystemStatus.module.css'

export interface SystemStatusProps {
  dictionary: Dictionary
}

interface SystemMetrics {
  cpu: number
  memory: number
  uptime: string
  requests: number
}

export function SystemStatus({ dictionary }: SystemStatusProps) {
  const [metrics, setMetrics] = useState<SystemMetrics>({
    cpu: 0,
    memory: 0,
    uptime: '0h 0m',
    requests: 0,
  })

  useEffect(() => {
    // Simulate real-time metrics
    const updateMetrics = () => {
      setMetrics({
        cpu: Math.floor(Math.random() * 30) + 10,
        memory: Math.floor(Math.random() * 40) + 40,
        uptime: `${Math.floor(Date.now() / 3600000)}h ${Math.floor((Date.now() % 3600000) / 60000)}m`,
        requests: Math.floor(Math.random() * 1000) + 5000,
      })
    }

    updateMetrics()
    const interval = setInterval(updateMetrics, 5000)

    return () => clearInterval(interval)
  }, [])

  const getCpuAccent = (cpu: number) => {
    if (cpu < 30) return 'primary'
    if (cpu < 60) return 'warning'
    return 'critical'
  }

  const getMemoryAccent = (memory: number) => {
    if (memory < 50) return 'success'
    if (memory < 80) return 'warning'
    return 'critical'
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{dictionary.systemStatus}</h2>
      
      <div className={styles.grid}>
        <DataBlock
          title={dictionary.cpu}
          value={`${metrics.cpu}%`}
          subtitle={dictionary.usage}
          accent={getCpuAccent(metrics.cpu)}
          icon="▲"
        />
        
        <DataBlock
          title={dictionary.memory}
          value={`${metrics.memory}%`}
          subtitle={dictionary.allocated}
          accent={getMemoryAccent(metrics.memory)}
          icon="◆"
        />
        
        <DataBlock
          title={dictionary.uptime}
          value={metrics.uptime}
          subtitle={dictionary.continuous}
          accent="primary"
          icon="●"
        />
        
        <DataBlock
          title={dictionary.requests}
          value={metrics.requests.toLocaleString()}
          subtitle={dictionary.today}
          accent="success"
          icon="►"
        />
      </div>
    </div>
  )
}

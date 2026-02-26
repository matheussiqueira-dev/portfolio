/**
 * MetricsPanel Module
 * Feature module for project metrics
 * Composes multiple DataBlocks with business data
 * 
 * @architecture System Layer
 */

import React from 'react'
import { DataBlock } from '@/encom/ui/components/DataBlock'
import { Dictionary } from '@/encom/core/i18n/i18n.types'
import styles from './MetricsPanel.module.css'

export interface MetricsPanelProps {
  dictionary: Dictionary
  projectsCount: number
  certificatesCount: number
  stackCount: number
}

export function MetricsPanel({
  dictionary,
  projectsCount,
  certificatesCount,
  stackCount,
}: MetricsPanelProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{dictionary.overview}</h2>
      
      <div className={styles.grid}>
        <DataBlock
          title={dictionary.projects}
          value={projectsCount.toString()}
          subtitle={dictionary.completed}
          accent="primary"
          icon="■"
        />
        
        <DataBlock
          title={dictionary.certificates}
          value={certificatesCount.toString()}
          subtitle={dictionary.earned}
          accent="success"
          icon="★"
        />
        
        <DataBlock
          title={dictionary.stack}
          value={`${stackCount}+`}
          subtitle={dictionary.technologies}
          accent="warning"
          icon="◆"
        />
      </div>
    </div>
  )
}

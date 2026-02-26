/**
 * ProjectCard Module
 * Feature module for displaying project info
 * Composes Card + Badge + Button from UI Layer
 * 
 * @architecture System Layer
 */

import React from 'react'
import Link from 'next/link'
import { Card } from '@/encom/ui/components/Card'
import { Badge } from '@/encom/ui/components/Badge'
import { Button } from '@/encom/ui/components/Button'
import { Dictionary } from '@/encom/core/i18n/i18n.types'
import styles from './ProjectCard.module.css'

export interface Project {
  id: string
  title: string
  description: string
  stack: string[]
  status: 'active' | 'completed' | 'archived'
  href: string
}

export interface ProjectCardProps {
  project: Project
  dictionary: Dictionary
}

const statusVariantMap = {
  active: 'primary' as const,
  completed: 'success' as const,
  archived: 'info' as const,
}

export function ProjectCard({ project, dictionary }: ProjectCardProps) {
  return (
    <Card variant="elevated" padding="large">
      <div className={styles.header}>
        <h3 className={styles.title}>{project.title}</h3>
        <Badge 
          variant={statusVariantMap[project.status]} 
          size="small"
        >
          {dictionary[project.status]}
        </Badge>
      </div>

      <p className={styles.description}>{project.description}</p>

      <div className={styles.stack}>
        {project.stack.slice(0, 3).map((tech) => (
          <span key={tech} className={styles.tech}>
            {tech}
          </span>
        ))}
        {project.stack.length > 3 && (
          <span className={styles.more}>+{project.stack.length - 3}</span>
        )}
      </div>

      <div className={styles.actions}>
        <Link href={project.href}>
          <Button variant="primary" size="small" fullWidth>
            {dictionary.viewDetails}
          </Button>
        </Link>
      </div>
    </Card>
  )
}

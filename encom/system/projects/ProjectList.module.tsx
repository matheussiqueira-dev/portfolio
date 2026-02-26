/**
 * ProjectList Module
 * Feature module for project collection display
 * Composes ProjectCard components with filtering
 * 
 * @architecture System Layer
 */

'use client'

import React, { useState } from 'react'
import { ProjectCard, Project } from './ProjectCard.module'
import { Button } from '@/encom/ui/components/Button'
import { Dictionary } from '@/encom/core/i18n/i18n.types'
import styles from './ProjectList.module.css'

export interface ProjectListProps {
  projects: Project[]
  dictionary: Dictionary
}

type FilterStatus = 'all' | 'active' | 'completed' | 'archived'

export function ProjectList({ projects, dictionary }: ProjectListProps) {
  const [filter, setFilter] = useState<FilterStatus>('all')

  const filteredProjects = projects.filter((project) =>
    filter === 'all' ? true : project.status === filter
  )

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{dictionary.projects}</h2>
        
        <div className={styles.filters}>
          <Button
            variant={filter === 'all' ? 'primary' : 'ghost'}
            size="small"
            onClick={() => setFilter('all')}
          >
            {dictionary.all}
          </Button>
          <Button
            variant={filter === 'active' ? 'primary' : 'ghost'}
            size="small"
            onClick={() => setFilter('active')}
          >
            {dictionary.active}
          </Button>
          <Button
            variant={filter === 'completed' ? 'primary' : 'ghost'}
            size="small"
            onClick={() => setFilter('completed')}
          >
            {dictionary.completed}
          </Button>
          <Button
            variant={filter === 'archived' ? 'primary' : 'ghost'}
            size="small"
            onClick={() => setFilter('archived')}
          >
            {dictionary.archived}
          </Button>
        </div>
      </div>

      <div className={styles.grid}>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} dictionary={dictionary} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className={styles.empty}>
          <p>{dictionary.noProjects}</p>
        </div>
      )}
    </div>
  )
}

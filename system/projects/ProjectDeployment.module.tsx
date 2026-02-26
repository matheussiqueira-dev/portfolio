"use client"

import { useState } from "react"
import Image from "next/image"
import type { DeploymentNode, ProjectDictionary } from "@/data/deployment.types"
import styles from "./ProjectDeployment.module.css"

interface Props {
  project: DeploymentNode
  locale: "pt-BR" | "en"
  dictionary: ProjectDictionary
}

export default function ProjectDeployment({
  project,
  locale,
  dictionary,
}: Props) {
  const [expanded, setExpanded] = useState(false)
  const isPortuguese = locale === "pt-BR"
  const title = isPortuguese ? project.title.pt : project.title.en
  const shortDesc = isPortuguese
    ? project.shortDescription.pt
    : project.shortDescription.en
  const fullDesc = isPortuguese
    ? project.fullDescription.pt
    : project.fullDescription.en
  const thumbnail = isPortuguese ? project.thumbnail.pt : project.thumbnail.en

  return (
    <article
      className={`${styles.deploymentCard} ${expanded ? styles.expanded : ""}`}
    >
      {/* HEADER - Clickable area to expand/collapse */}
      <button
        className={styles.deploymentHeader}
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-label={`${expanded ? dictionary.viewLess : dictionary.viewMore} - ${title}`}
      >
        {/* Thumbnail */}
        <div className={styles.thumbnailWrapper}>
          <Image
            src={thumbnail}
            alt={title}
            width={500}
            height={300}
            className={styles.thumbnail}
            priority={false}
          />
        </div>

        {/* Info Section */}
        <div className={styles.deploymentInfo}>
          <span className={styles.nodeId}>{project.nodeId}</span>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.shortDesc}>{shortDesc}</p>

          {/* Status Badge */}
          <span
            className={`${styles.status} ${styles[project.status.toLowerCase()]}`}
          >
            {project.status}
          </span>
        </div>

        {/* Expand Icon */}
        <div className={styles.expandIcon}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points={expanded ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
          </svg>
        </div>
      </button>

      {/* EXPANDED AREA */}
      <div
        className={`${styles.deploymentExpanded} ${
          expanded ? styles.open : ""
        }`}
      >
        <div className={styles.expandedContent}>
          {/* Full Description */}
          <section className={styles.descriptionSection}>
            <p className={styles.fullDescription}>{fullDesc}</p>
          </section>

          {/* Grid Details */}
          <div className={styles.gridDetails}>
            {/* Stack */}
            <div className={styles.detailBlock}>
              <h4>{dictionary.stack}</h4>
              <div className={styles.badgesContainer}>
                {project.stack.map((tech) => (
                  <span key={tech} className={styles.badge}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div className={styles.detailBlock}>
              <h4>{dictionary.architecture}</h4>
              <ul className={styles.list}>
                {project.architecture.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className={styles.detailBlock}>
              <h4>{dictionary.challenges}</h4>
              <ul className={styles.list}>
                {project.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </div>

            {/* Metrics */}
            <div className={styles.detailBlock}>
              <h4>{dictionary.metrics}</h4>
              <dl className={styles.metricsList}>
                <div className={styles.metric}>
                  <dt>{dictionary.performance}</dt>
                  <dd>{project.metrics.performance}</dd>
                </div>
                <div className={styles.metric}>
                  <dt>{dictionary.lighthouse}</dt>
                  <dd>{project.metrics.lighthouse}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Links Section */}
          {project.links && Object.values(project.links).some(val => val) && (
            <div className={styles.linksSection}>
              <div className={styles.linksList}>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    GitHub
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Demo
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

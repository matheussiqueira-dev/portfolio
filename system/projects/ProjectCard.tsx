"use client";

import { useState, useCallback, useId, useRef, useEffect } from "react";
import SafeImage from "@/components/demo/SafeImage";
import type { ProjectCard } from "@/data/projects-card.types";
import ProjectCardDetails from "./ProjectCardDetails";
import styles from "./ProjectCard.module.css";

interface Props {
  project: ProjectCard;
  locale: "pt" | "en";
  index?: number;
}

const labels = {
  pt: {
    viewMore: "Ver detalhes",
    viewLess: "Fechar",
    featured: "Em destaque",
    ariaLabel: (title: string) => `Projeto: ${title}. Pressione Enter para expandir.`,
    repo: "Repositório",
    live: "Site",
    demo: "Demo",
    caseStudy: "Ver case completo",
  },
  en: {
    viewMore: "View details",
    viewLess: "Close",
    featured: "Featured",
    ariaLabel: (title: string) => `Project: ${title}. Press Enter to expand.`,
    repo: "Repository",
    live: "Live",
    demo: "Demo",
    caseStudy: "Full case study",
  },
};

/**
 * ProjectCard - Expandable project card with media and details
 * 
 * ♿ Accessibility Features:
 * - Semantic HTML: <article>, <button>, <h2>
 * - Keyboard support: Enter/Space to expand, Escape to collapse
 * - ARIA labels: aria-expanded, aria-controls, aria-labelledby
 * - Focus visible: Clear focus indicator for keyboard users
 * - Reduced motion: Respects prefers-reduced-motion media query
 * - Screen reader: Proper heading hierarchy and descriptions
 * 
 * 🎨 Visual Features:
 * - Expandable accordion with smooth animation
 * - Featured badge and tech stack preview
 * - Lazy-loaded details on demand
 * - Responsive design (mobile/tablet/desktop)
 * - Image optimization with Next.js Image
 */
export default function ProjectCard({ project, locale, index = 0 }: Props) {
  const headingId = useId();
  const detailsId = useId();
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);
  const t = labels[locale];

  const title = project.title[locale];
  const tagline = project.tagline[locale];
  const thumbnail = project.thumbnail[locale];

  // Calculate max-height for smooth accordion
  useEffect(() => {
    if (!contentRef.current) return;
    if (expanded) {
      setMaxHeight(contentRef.current.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [expanded]);

  const handleToggle = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    } else if (e.key === "Escape" && expanded) {
      // Close on Escape key
      e.preventDefault();
      setExpanded(false);
    }
  };


  return (
    <article
      className={`${styles.card} ${expanded ? styles.expanded : ""}`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* HEADER - Always visible, clickable */}
      <button
        ref={buttonRef}
        className={styles.header}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-expanded={expanded}
        aria-controls={detailsId}
        aria-labelledby={headingId}
        title={expanded ? t.viewLess : t.viewMore}
        type="button"
      >
        {/* Thumbnail */}
        <div className={styles.thumbnailWrapper}>
          <SafeImage
            src={thumbnail}
            fallbackSrc="/placeholder.jpg"
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 280px, 320px"
            className={styles.thumbnail}
            priority={index < 3}
            placeholder="blur"
            blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3Crect fill='%23e0e0e0'/%3E%3C/svg%3E"
          />
          {project.featured && (
            <span className={styles.badge}>{t.featured}</span>
          )}
        </div>

        {/* Content */}
        <div className={styles.content}>
          <h2 id={headingId} className={styles.title}>
            {title}
          </h2>
          <p className={styles.tagline}>{tagline}</p>

          {/* Stack preview */}
          <div className={styles.stackPreview}>
            {project.stack.slice(0, 3).map((tech) => (
              <span key={tech} className={styles.stackTag}>
                {tech}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className={styles.stackMore}>
                +{project.stack.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Expand toggle icon */}
        <div className={styles.toggleIcon}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 10 13 14 9" />
          </svg>
        </div>
      </button>

      {/* EXPANDED DETAILS - Accordion content */}
      <div
        id={detailsId}
        className={styles.detailsWrapper}
        style={{ maxHeight: `${maxHeight}px` }}
      >
        <div ref={contentRef} className={styles.detailsContent}>
          <ProjectCardDetails project={project} locale={locale} />

          {/* Action buttons */}
          <div className={styles.actions}>
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                {t.repo} ↗
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                {t.live} ↗
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                {t.demo} ↗
              </a>
            )}
            {project.links.caseStudy && (
              <a
                href={project.links.caseStudy}
                className={styles.buttonPrimary}
              >
                {t.caseStudy} →
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

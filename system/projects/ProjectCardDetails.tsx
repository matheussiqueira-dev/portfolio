"use client";

import { useEffect, useRef } from "react";

import type { ProjectCard } from "@/data/projects-card.types";

import styles from "./ProjectCardDetails.module.css";

interface Props {
  project: ProjectCard;
  locale: "pt" | "en";
}

const labels = {
  pt: {
    stack: "Stack",
    highlights: "Destaques",
    videos: "Demonstra\u00e7\u00e3o",
    role: "Meu papel",
  },
  en: {
    stack: "Stack",
    highlights: "Highlights",
    videos: "Demo",
    role: "My role",
  },
};

/**
 * ProjectCardDetails - Expanded content for project card.
 * Shows full description, videos with lazy-load, and highlights.
 */
export default function ProjectCardDetails({ project, locale }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoLoadedRef = useRef(false);
  const t = labels[locale];

  const description = project.fullDescription[locale];
  const context = project.context[locale];
  const primaryVideo = project.videos[0];

  // Lazy-load video only once when details mount.
  useEffect(() => {
    if (!videoRef.current || videoLoadedRef.current) {
      return;
    }

    videoRef.current.load();
    videoLoadedRef.current = true;
  }, []);

  return (
    <div className={styles.details}>
      <section className={styles.section}>
        <p className={styles.description}>{description || context}</p>
        {context && context !== description && (
          <p className={styles.context}>{context}</p>
        )}
      </section>

      {primaryVideo?.type === "local" ? (
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>{t.videos}</h3>
          <div className={styles.videoWrapper}>
            <video
              ref={videoRef}
              controls
              className={styles.video}
              poster={primaryVideo.poster}
              preload="metadata"
            >
              <source src={primaryVideo.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {primaryVideo.caption && (
              <p className={styles.caption}>{primaryVideo.caption}</p>
            )}
          </div>
        </section>
      ) : null}

      <div className={styles.grid}>
        {project.role && (
          <section className={styles.gridItem}>
            <h3 className={styles.itemTitle}>{t.role}</h3>
            <p className={styles.itemText}>{project.role}</p>
          </section>
        )}

        {project.stack.length > 0 && (
          <section className={styles.gridItem}>
            <h3 className={styles.itemTitle}>{t.stack}</h3>
            <div className={styles.tagList}>
              {project.stack.map((tech) => (
                <span key={tech} className={styles.tag}>
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {project.highlights.length > 0 && (
          <section className={styles.gridItem}>
            <h3 className={styles.itemTitle}>{t.highlights}</h3>
            <ul className={styles.list}>
              {project.highlights.map((item, idx) => (
                <li key={idx} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
/**
 * Expandable Project Card - Enhanced Data Structure
 * For use in the new projects page with expandable cards
 */

export interface ProjectThumbnail {
  pt: string; // Path to Portuguese thumbnail
  en: string; // Path to English thumbnail
}

export interface ProjectVideo {
  type: "local" | "youtube" | "vimeo";
  src: string; // For local: file path; for youtube/vimeo: URL/ID
  poster?: string; // Thumbnail image
  caption?: string;
  title?: string;
}

export interface ProjectLinks {
  repo?: string;
  live?: string;
  demo?: string;
  caseStudy?: string;
}

export interface ProjectCard {
  // Identity
  slug: string;
  id: string; // Unique identifier

  // Bilingual content
  title: {
    pt: string;
    en: string;
  };
  tagline: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  fullDescription: {
    pt: string;
    en: string;
  };

  // Media
  thumbnail: ProjectThumbnail;
  videos: ProjectVideo[];

  // Technical info
  stack: string[];
  role: string;
  context: {
    pt: string;
    en: string;
  };
  highlights: string[]; // Language-agnostic highlights (or use PT default)

  // Links
  links: ProjectLinks;

  // Metadata
  featured?: boolean;
  order?: number;
}

/**
 * Mapper function to convert existing ProjectCase to ProjectCard
 * Used for backwards compatibility while transitioning
 */
export function projectToCard(project: any): ProjectCard {
  return {
    slug: project.slug,
    id: project.slug,
    title: {
      pt: project.title,
      en: project.titleEn || project.title,
    },
    tagline: {
      pt: project.tagline,
      en: project.taglineEn || project.tagline,
    },
    description: {
      pt: project.tagline,
      en: project.taglineEn || project.tagline,
    },
    fullDescription: {
      pt: project.context || project.tagline,
      en: project.contextEn || project.taglineEn || project.tagline,
    },
    thumbnail: {
      pt: `/thumbnails/pt/${project.slug}.png`,
      en: `/thumbnails/en/${project.slug}.png`,
    },
    videos: project.demo
      ? [
          {
            type: "local",
            src: project.demo.src,
            poster: project.demo.poster,
            caption: project.demo.caption,
          },
        ]
      : [],
    stack: project.stack,
    role: project.role,
    context: {
      pt: project.context,
      en: project.contextEn || project.context,
    },
    highlights: project.highlights || project.features || [],
    links: {
      repo: project.repoUrl,
      demo: project.demoUrl,
      caseStudy: `/projetos/${project.slug}`,
    },
  };
}

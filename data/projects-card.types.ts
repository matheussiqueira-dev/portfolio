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

export interface ProjectMetrics {
  performance?: string; // e.g., "45ms average latency"
  users?: string; // e.g., "1.2K monthly users"
  uptime?: string; // e.g., "99.9%"
  responseTime?: string; // e.g., "<200ms"
  custom?: Record<string, string>; // Any other custom metrics
}

export interface ProjectChallenge {
  pt: string;
  en: string;
}

export interface ProjectArchitecture {
  pt: string; // Architecture description in Portuguese
  en: string; // Architecture description in English
  diagram?: string; // Optional path to architecture diagram
  components?: string[]; // High-level components
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

  // Architecture & Technical Details
  architecture?: ProjectArchitecture; // How the system is structured
  challenges?: ProjectChallenge[]; // What problems were solved
  metrics?: ProjectMetrics; // Performance & usage metrics

  // Links
  links: ProjectLinks;

  // Metadata
  featured?: boolean;
  order?: number;
  status?: 'active' | 'completed' | 'archived'; // Project status
  duration?: {
    start: string; // YYYY-MM format
    end: string; // YYYY-MM format or "ongoing"
  }; // Project timeline
}

/**
 * Mapper function to convert existing ProjectCase to ProjectCard.
 * Used for backwards compatibility while transitioning.
 */
type LegacyProjectInput = {
  slug?: string;
  title?: string;
  titleEn?: string;
  tagline?: string;
  taglineEn?: string;
  context?: string;
  contextEn?: string;
  stack?: string[];
  role?: string;
  highlights?: string[];
  features?: string[];
  repoUrl?: string;
  demoUrl?: string;
  demo?: {
    src?: string;
    poster?: string;
    caption?: string;
  };
};

export function projectToCard(project: LegacyProjectInput): ProjectCard {
  const slug = String(project.slug || "");
  const stack = Array.isArray(project.stack)
    ? project.stack.map((item) => String(item))
    : [];
  const highlights = Array.isArray(project.highlights)
    ? project.highlights.map((item) => String(item))
    : Array.isArray(project.features)
      ? project.features.map((item) => String(item))
      : [];

  return {
    slug,
    id: slug,
    title: {
      pt: String(project.title || ""),
      en: String(project.titleEn || project.title || ""),
    },
    tagline: {
      pt: String(project.tagline || ""),
      en: String(project.taglineEn || project.tagline || ""),
    },
    description: {
      pt: String(project.tagline || ""),
      en: String(project.taglineEn || project.tagline || ""),
    },
    fullDescription: {
      pt: String(project.context || project.tagline || ""),
      en: String(project.contextEn || project.taglineEn || project.tagline || ""),
    },
    thumbnail: {
      pt: `/thumbnails/pt/${slug}.png`,
      en: `/thumbnails/en/${slug}.png`,
    },
    videos:
      project.demo?.src
        ? [
            {
              type: "local",
              src: String(project.demo.src),
              poster: project.demo.poster,
              caption: project.demo.caption,
            },
          ]
        : [],
    stack,
    role: String(project.role || ""),
    context: {
      pt: String(project.context || ""),
      en: String(project.contextEn || project.context || ""),
    },
    highlights,
    links: {
      repo: project.repoUrl,
      demo: project.demoUrl,
      caseStudy: `/projetos/${slug}`,
    },
  };
}

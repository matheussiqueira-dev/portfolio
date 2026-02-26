/**
 * Media type detection and handling utilities
 * 
 * This module provides functions to identify and work with different
 * media types (images, videos, GIFs) in the portfolio application.
 */

import type { Project } from "@/data/projects.types";
import { getFileExtension } from "./utils";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/**
 * Supported media types
 */
export type MediaType = "image" | "video" | "gif" | "unknown";

/**
 * Media metadata
 */
export type MediaInfo = {
  type: MediaType;
  extension: string;
  src: string;
  alt?: string;
};

// ============================================================================
// EXTENSION MAPPINGS
// ============================================================================

const VIDEO_EXTENSIONS = new Set([
  "mp4",
  "webm",
  "ogg",
  "mov",
  "avi",
  "mkv",
]);

const IMAGE_EXTENSIONS = new Set([
  "jpg",
  "jpeg",
  "png",
  "webp",
  "svg",
  "avif",
  "bmp",
]);

const GIF_EXTENSIONS = new Set(["gif"]);

// ============================================================================
// MEDIA TYPE DETECTION
// ============================================================================

/**
 * Determines the media type from a file path or URL
 * 
 * @param src - Media source path or URL
 * @returns Media type
 * 
 * @example
 * ```typescript
 * getMediaType('/video.mp4') // 'video'
 * getMediaType('/image.jpg') // 'image'
 * getMediaType('/animation.gif') // 'gif'
 * ```
 */
export function getMediaType(src: string): MediaType {
  const extension = getFileExtension(src);

  if (VIDEO_EXTENSIONS.has(extension)) {
    return "video";
  }

  if (GIF_EXTENSIONS.has(extension)) {
    return "gif";
  }

  if (IMAGE_EXTENSIONS.has(extension)) {
    return "image";
  }

  return "unknown";
}

/**
 * Checks if a media source is a video
 * 
 * @param src - Media source path or URL
 * @returns True if video
 * 
 * @example
 * ```typescript
 * isVideo('/demo.mp4') // true
 * isVideo('/cover.jpg') // false
 * ```
 */
export function isVideo(src: string): boolean {
  return getMediaType(src) === "video";
}

/**
 * Checks if a media source is an image (excluding GIF)
 * 
 * @param src - Media source path or URL
 * @returns True if static image
 * 
 * @example
 * ```typescript
 * isImage('/photo.jpg') // true
 * isImage('/animation.gif') // false
 * isImage('/video.mp4') // false
 * ```
 */
export function isImage(src: string): boolean {
  return getMediaType(src) === "image";
}

/**
 * Checks if a media source is a GIF
 * 
 * @param src - Media source path or URL
 * @returns True if GIF
 * 
 * @example
 * ```typescript
 * isGif('/animation.gif') // true
 * isGif('/photo.jpg') // false
 * ```
 */
export function isGif(src: string): boolean {
  return getMediaType(src) === "gif";
}

/**
 * Checks if a project screenshot is a video
 * Compatible with Project type from data schema
 * 
 * @param shot - Project screenshot object
 * @returns True if video media
 * 
 * @example
 * ```typescript
 * const shot = { src: '/demo.mp4', alt: 'Demo', type: 'video' };
 * isVideoMedia(shot) // true
 * ```
 */
export function isVideoMedia(
  shot: Project["screenshots"][number]
): boolean {
  return shot.type === "video" || isVideo(shot.src);
}

/**
 * Gets media information from a source
 * 
 * @param src - Media source path or URL
 * @param alt - Optional alt text
 * @returns Media information object
 * 
 * @example
 * ```typescript
 * getMediaInfo('/demo.mp4', 'Demo video')
 * // { type: 'video', extension: 'mp4', src: '/demo.mp4', alt: 'Demo video' }
 * ```
 */
export function getMediaInfo(src: string, alt?: string): MediaInfo {
  return {
    type: getMediaType(src),
    extension: getFileExtension(src),
    src,
    alt,
  };
}

// ============================================================================
// PROJECT MEDIA UTILITIES
// ============================================================================

/**
 * Finds the cover image for a project
 * Priority: explicit cover > first image > demo poster
 * 
 * @param project - Project object
 * @returns Cover screenshot or undefined
 * 
 * @example
 * ```typescript
 * const cover = getCoverImage(project);
 * if (cover) {
 *   return <Image src={cover.src} alt={cover.alt} />;
 * }
 * ```
 */
export function getCoverImage(
  project: Project
): Project["screenshots"][number] | undefined {
  // Try to find explicit cover image
  const cover = project.screenshots.find((shot) =>
    shot.src.includes("/cover.")
  );
  if (cover) return cover;

  // Find first non-video screenshot
  const firstImage = project.screenshots.find((shot) => !isVideoMedia(shot));
  if (firstImage) return firstImage;

  // Fallback to demo poster if available
  const demoPoster =
    project.demo && "poster" in project.demo
      ? project.demo.poster
      : undefined;

  return demoPoster
    ? { src: demoPoster, alt: project.title, type: "image" }
    : undefined;
}

/**
 * Filters screenshots by media type
 * 
 * @param screenshots - Array of screenshots
 * @param type - Media type to filter by
 * @returns Filtered screenshots
 * 
 * @example
 * ```typescript
 * const images = filterScreenshotsByType(project.screenshots, 'image');
 * const videos = filterScreenshotsByType(project.screenshots, 'video');
 * ```
 */
export function filterScreenshotsByType(
  screenshots: Project["screenshots"],
  type: MediaType
): Project["screenshots"] {
  return screenshots.filter((shot) => {
    const mediaType = shot.type === "video" ? "video" : getMediaType(shot.src);
    return mediaType === type;
  });
}

/**
 * Gets all video screenshots from a project
 * 
 * @param project - Project object
 * @returns Array of video screenshots
 */
export function getVideoScreenshots(project: Project): Project["screenshots"] {
  return filterScreenshotsByType(project.screenshots, "video");
}

/**
 * Gets all image screenshots from a project (excluding videos)
 * 
 * @param project - Project object
 * @returns Array of image screenshots
 */
export function getImageScreenshots(project: Project): Project["screenshots"] {
  return project.screenshots.filter((shot) => !isVideoMedia(shot));
}

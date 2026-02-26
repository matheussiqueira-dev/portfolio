/**
 * Unit tests for lib/media.ts
 * 
 * Tests for media type detection and project utilities
 */

import {
  getMediaType,
  isVideo,
  isImage,
  isGif,
  getMediaInfo,
  getCoverImage,
  filterScreenshotsByType,
  getVideoScreenshots,
  getImageScreenshots,
} from "@/core/media";
import type { Project } from "@/data/projects.types";

describe("Media Utils", () => {
  describe("Media Type Detection", () => {
    test("detects video files", () => {
      expect(getMediaType("/video.mp4")).toBe("video");
      expect(getMediaType("/demo.webm")).toBe("video");
      expect(getMediaType("/clip.mov")).toBe("video");
      expect(isVideo("/video.mp4")).toBe(true);
    });

    test("detects image files", () => {
      expect(getMediaType("/photo.jpg")).toBe("image");
      expect(getMediaType("/cover.png")).toBe("image");
      expect(getMediaType("/icon.svg")).toBe("image");
      expect(isImage("/photo.jpg")).toBe(true);
    });

    test("detects GIF files", () => {
      expect(getMediaType("/animation.gif")).toBe("gif");
      expect(isGif("/animation.gif")).toBe(true);
    });

    test("handles unknown types", () => {
      expect(getMediaType("/file.txt")).toBe("unknown");
      expect(getMediaType("/document.pdf")).toBe("unknown");
    });

    test("is case-insensitive", () => {
      expect(getMediaType("/VIDEO.MP4")).toBe("video");
      expect(getMediaType("/IMAGE.JPG")).toBe("image");
      expect(getMediaType("/ANIMATION.GIF")).toBe("gif");
    });
  });

  describe("getMediaInfo", () => {
    test("returns complete media information", () => {
      const info = getMediaInfo("/demo.mp4", "Demo video");
      expect(info).toEqual({
        type: "video",
        extension: "mp4",
        src: "/demo.mp4",
        alt: "Demo video",
      });
    });

    test("handles missing alt text", () => {
      const info = getMediaInfo("/photo.jpg");
      expect(info.alt).toBeUndefined();
    });
  });

  describe("Project Media Utilities", () => {
    const mockProject: Project = {
      slug: "test-project",
      title: "Test Project",
      tagline: "Test tagline",
      stack: ["React"],
      screenshots: [
        { src: "/projects/test/screenshot1.jpg", alt: "Screenshot 1", type: "image" },
        { src: "/projects/test/cover.png", alt: "Cover", type: "image" },
        { src: "/projects/test/demo.mp4", alt: "Demo", type: "video" },
        { src: "/projects/test/screenshot2.jpg", alt: "Screenshot 2", type: "image" },
      ],
      intro: {
        title: "Introduction",
        paragraphs: ["Test paragraph"],
      },
      problem: {
        title: "Problem",
        paragraphs: ["Problem description"],
      },
      solution: {
        title: "Solution",
        paragraphs: ["Solution description"],
      },
      features: [],
      highlights: ["Feature 1", "Feature 2"],
      demonstrates: ["Skill 1"],
      repoUrl: "https://github.com/user/repo",
      status: "completed",
    };

    describe("getCoverImage", () => {
      test("finds explicit cover image", () => {
        const cover = getCoverImage(mockProject);
        expect(cover?.src).toContain("/cover.png");
      });

      test("falls back to first non-video screenshot", () => {
        const projectWithoutCover: Project = {
          ...mockProject,
          screenshots: [
            { src: "/video.mp4", alt: "Video", type: "video" },
            { src: "/image.jpg", alt: "Image", type: "image" },
          ],
        };
        const cover = getCoverImage(projectWithoutCover);
        expect(cover?.src).toBe("/image.jpg");
      });
    });

    describe("filterScreenshotsByType", () => {
      test("filters images", () => {
        const images = filterScreenshotsByType(mockProject.screenshots, "image");
        expect(images).toHaveLength(3);
        expect(images.every((img) => !img.src.endsWith(".mp4"))).toBe(true);
      });

      test("filters videos", () => {
        const videos = filterScreenshotsByType(mockProject.screenshots, "video");
        expect(videos).toHaveLength(1);
        expect(videos[0].src).toContain(".mp4");
      });
    });

    describe("getVideoScreenshots", () => {
      test("returns only video screenshots", () => {
        const videos = getVideoScreenshots(mockProject);
        expect(videos).toHaveLength(1);
        expect(videos[0].type).toBe("video");
      });
    });

    describe("getImageScreenshots", () => {
      test("returns only image screenshots", () => {
        const images = getImageScreenshots(mockProject);
        expect(images).toHaveLength(3);
        expect(images.every((img) => img.type === "image")).toBe(true);
      });
    });
  });
});

/**
 * Integration Testing Guide
 * 
 * Test media utilities in actual project components:
 * 
 * 1. ProjectCard component
 *    - Verify correct cover image selection
 *    - Check fallback behavior
 * 
 * 2. MediaGallery component
 *    - Test image/video filtering
 *    - Verify type detection accuracy
 * 
 * 3. ProjectCase page
 *    - Check media rendering
 *    - Verify type-specific styling
 */

/**
 * Unit tests for lib/i18n.ts
 * 
 * Tests for internationalization utilities
 */

import {
  getLocaleFromPath,
  stripLocalePrefix,
  localizeHref,
} from "@/lib/i18n";

describe("i18n Utils", () => {
  describe("getLocaleFromPath", () => {
    test("detects English locale from /en paths", () => {
      expect(getLocaleFromPath("/en")).toBe("en");
      expect(getLocaleFromPath("/en/projects")).toBe("en");
      expect(getLocaleFromPath("/en/projects/slug")).toBe("en");
      expect(getLocaleFromPath("/resume/en")).toBe("en");
    });

    test("defaults to Portuguese for other paths", () => {
      expect(getLocaleFromPath("/")).toBe("pt");
      expect(getLocaleFromPath("/projetos")).toBe("pt");
      expect(getLocaleFromPath("/resume")).toBe("pt");
      expect(getLocaleFromPath("/academico")).toBe("pt");
    });
  });

  describe("stripLocalePrefix", () => {
    test("removes /en prefix from English paths", () => {
      expect(stripLocalePrefix("/en/projects")).toBe("/projects");
      expect(stripLocalePrefix("/en/resume")).toBe("/resume");
      expect(stripLocalePrefix("/en")).toBe("/");
    });

    test("handles /resume/en special case", () => {
      expect(stripLocalePrefix("/resume/en")).toBe("/resume");
    });

    test("keeps Portuguese paths unchanged", () => {
      expect(stripLocalePrefix("/projetos")).toBe("/projetos");
      expect(stripLocalePrefix("/resume")).toBe("/resume");
      expect(stripLocalePrefix("/")).toBe("/");
    });
  });

  describe("localizeHref", () => {
    test("localizes to English", () => {
      expect(localizeHref("/projetos", "en")).toBe("/en/projetos");
      expect(localizeHref("/", "en")).toBe("/en");
      expect(localizeHref("/resume", "en")).toBe("/resume/en");
    });

    test("localizes to Portuguese (removes /en)", () => {
      expect(localizeHref("/en/projects", "pt")).toBe("/projects");
      expect(localizeHref("/en", "pt")).toBe("/");
      expect(localizeHref("/resume/en", "pt")).toBe("/resume");
    });

    test("preserves query strings and hashes", () => {
      expect(localizeHref("/projects?page=2", "en")).toBe("/en/projects?page=2");
      expect(localizeHref("/projects#section", "en")).toBe("/en/projects#section");
      expect(localizeHref("/projects?page=2#section", "en")).toBe(
        "/en/projects?page=2#section"
      );
    });
  });
});

/**
 * Manual Testing Checklist
 * 
 * Test in browser console or component:
 * 
 * 1. Navigation between locales
 *    - Click language switcher
 *    - Verify URL updates correctly
 *    - Check content language changes
 * 
 * 2. Direct URL access
 *    - Access /projetos (PT)
 *    - Access /en/projects (EN)
 *    - Verify correct content loads
 * 
 * 3. Query params and hashes
 *    - Navigate to /projects?filter=web#results
 *    - Switch language
 *    - Verify params and hash preserved
 */

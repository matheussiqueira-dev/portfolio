/**
 * Unit tests for lib/utils.ts
 * 
 * Run these tests with: npm run test
 * Or manually validate each function in the browser console
 */

import {
  slugify,
  truncate,
  capitalize,
  toTitleCase,
  cleanWhitespace,
  isValidEmail,
  isValidSlug,
  isEmpty,
  isNonEmptyString,
  getFileExtension,
  isExternalUrl,
  normalizeUrl,
} from "@/core/utils";

// ============================================================================
// STRING MANIPULATION TESTS
// ============================================================================

describe("String Manipulation Utils", () => {
  describe("slugify", () => {
    test("converts string to lowercase slug", () => {
      expect(slugify("My Project Name")).toBe("my-project-name");
      expect(slugify("Driver Monitoring System")).toBe("driver-monitoring-system");
    });

    test("removes special characters", () => {
      expect(slugify("Project @ Name!")).toBe("project-name");
      expect(slugify("Test#123")).toBe("test123");
    });

    test("handles multiple spaces and underscores", () => {
      expect(slugify("multiple   spaces")).toBe("multiple-spaces");
      expect(slugify("with_underscores")).toBe("with-underscores");
    });

    test("trims leading and trailing dashes", () => {
      expect(slugify("-leading")).toBe("leading");
      expect(slugify("trailing-")).toBe("trailing");
    });
  });

  describe("truncate", () => {
    test("truncates long text", () => {
      expect(truncate("This is a long text", 10)).toBe("This is...");
    });

    test("does not truncate short text", () => {
      expect(truncate("Short", 10)).toBe("Short");
    });

    test("uses custom ellipsis", () => {
      expect(truncate("Long text here", 10, "…")).toBe("Long text…");
    });
  });

  describe("capitalize", () => {
    test("capitalizes first letter", () => {
      expect(capitalize("hello")).toBe("Hello");
      expect(capitalize("world")).toBe("World");
    });

    test("handles empty string", () => {
      expect(capitalize("")).toBe("");
    });
  });

  describe("toTitleCase", () => {
    test("converts to title case", () => {
      expect(toTitleCase("hello world")).toBe("Hello World");
      expect(toTitleCase("full-stack developer")).toBe("Full Stack Developer");
    });
  });

  describe("cleanWhitespace", () => {
    test("removes extra whitespace", () => {
      expect(cleanWhitespace("  hello   world  ")).toBe("hello world");
      expect(cleanWhitespace("multiple   spaces")).toBe("multiple spaces");
    });
  });
});

// ============================================================================
// VALIDATION TESTS
// ============================================================================

describe("Validation Utils", () => {
  describe("isValidEmail", () => {
    test("validates correct emails", () => {
      expect(isValidEmail("user@example.com")).toBe(true);
      expect(isValidEmail("test.user@domain.co.uk")).toBe(true);
    });

    test("rejects invalid emails", () => {
      expect(isValidEmail("invalid-email")).toBe(false);
      expect(isValidEmail("@example.com")).toBe(false);
      expect(isValidEmail("user@")).toBe(false);
    });
  });

  describe("isValidSlug", () => {
    test("validates correct slugs", () => {
      expect(isValidSlug("my-project")).toBe(true);
      expect(isValidSlug("project-123")).toBe(true);
    });

    test("rejects invalid slugs", () => {
      expect(isValidSlug("My Project")).toBe(false);
      expect(isValidSlug("project_name")).toBe(false);
      expect(isValidSlug("project@name")).toBe(false);
    });
  });

  describe("isEmpty", () => {
    test("detects empty strings", () => {
      expect(isEmpty("")).toBe(true);
      expect(isEmpty("   ")).toBe(true);
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
    });

    test("detects non-empty strings", () => {
      expect(isEmpty("text")).toBe(false);
      expect(isEmpty(" text ")).toBe(false);
    });
  });

  describe("isNonEmptyString", () => {
    test("validates non-empty strings", () => {
      expect(isNonEmptyString("hello")).toBe(true);
      expect(isNonEmptyString("123")).toBe(true);
    });

    test("rejects empty or non-string values", () => {
      expect(isNonEmptyString("")).toBe(false);
      expect(isNonEmptyString("   ")).toBe(false);
      expect(isNonEmptyString(null)).toBe(false);
      expect(isNonEmptyString(undefined)).toBe(false);
      expect(isNonEmptyString(123)).toBe(false);
    });
  });
});

// ============================================================================
// URL UTILITIES TESTS
// ============================================================================

describe("URL Utils", () => {
  describe("getFileExtension", () => {
    test("extracts file extensions", () => {
      expect(getFileExtension("/path/to/file.pdf")).toBe("pdf");
      expect(getFileExtension("image.jpg")).toBe("jpg");
      expect(getFileExtension("document.PDF")).toBe("pdf");
    });

    test("handles files without extension", () => {
      expect(getFileExtension("noextension")).toBe("");
      expect(getFileExtension("/path/to/file")).toBe("");
    });
  });

  describe("isExternalUrl", () => {
    test("detects external URLs", () => {
      expect(isExternalUrl("https://example.com")).toBe(true);
      expect(isExternalUrl("http://example.com")).toBe(true);
      expect(isExternalUrl("mailto:email@example.com")).toBe(true);
      expect(isExternalUrl("tel:+1234567890")).toBe(true);
    });

    test("detects internal paths", () => {
      expect(isExternalUrl("/internal-path")).toBe(false);
      expect(isExternalUrl("/projects/slug")).toBe(false);
      expect(isExternalUrl("relative/path")).toBe(false);
    });
  });

  describe("normalizeUrl", () => {
    test("removes trailing slashes", () => {
      expect(normalizeUrl("/path/to/page/")).toBe("/path/to/page");
      expect(normalizeUrl("https://example.com/")).toBe("https://example.com");
    });

    test("handles URLs without trailing slash", () => {
      expect(normalizeUrl("/path/to/page")).toBe("/path/to/page");
      expect(normalizeUrl("https://example.com")).toBe("https://example.com");
    });
  });
});

// ============================================================================
// MANUAL TESTING GUIDE
// ============================================================================

/**
 * Manual Testing Guide
 * 
 * To manually test these utilities without a test runner:
 * 
 * 1. Import the utils in a component
 * 2. Use console.log to verify results
 * 3. Check browser console for outputs
 * 
 * Example:
 * ```tsx
 * import { slugify, isValidEmail } from '@/lib/utils';
 * 
 * console.log('Test slugify:', slugify('My Project')); // Expected: 'my-project'
 * console.log('Test email:', isValidEmail('user@example.com')); // Expected: true
 * ```
 */

/**
 * String manipulation and validation utilities
 * 
 * This module provides reusable functions for common string operations
 * used across the portfolio application.
 */

import { VALIDATION } from "./constants";

// ============================================================================
// STRING MANIPULATION
// ============================================================================

/**
 * Converts a string to a URL-friendly slug
 * 
 * @param text - Text to convert to slug
 * @returns URL-friendly slug
 * 
 * @example
 * ```typescript
 * slugify('My Project Name') // 'my-project-name'
 * slugify('Driver Monitoring System') // 'driver-monitoring-system'
 * ```
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Truncates text to a specified length and adds ellipsis
 * 
 * @param text - Text to truncate
 * @param maxLength - Maximum length before truncation
 * @param ellipsis - String to append (default: '...')
 * @returns Truncated text
 * 
 * @example
 * ```typescript
 * truncate('This is a long text', 10) // 'This is a...'
 * truncate('Short', 10) // 'Short'
 * ```
 */
export function truncate(
  text: string,
  maxLength: number,
  ellipsis = "..."
): string {
  if (text.length <= maxLength) {
    return text;
  }

  return text.slice(0, maxLength - ellipsis.length).trim() + ellipsis;
}

/**
 * Capitalizes the first letter of a string
 * 
 * @param text - Text to capitalize
 * @returns Capitalized text
 * 
 * @example
 * ```typescript
 * capitalize('hello world') // 'Hello world'
 * capitalize('HELLO') // 'HELLO'
 * ```
 */
export function capitalize(text: string): string {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Converts a string to title case
 * 
 * @param text - Text to convert
 * @returns Title case text
 * 
 * @example
 * ```typescript
 * toTitleCase('hello world') // 'Hello World'
 * toTitleCase('full-stack developer') // 'Full-Stack Developer'
 * ```
 */
export function toTitleCase(text: string): string {
  return text
    .split(/[\s-_]/)
    .map((word) => capitalize(word))
    .join(" ");
}

/**
 * Removes extra whitespace from a string
 * 
 * @param text - Text to clean
 * @returns Cleaned text
 * 
 * @example
 * ```typescript
 * cleanWhitespace('  Hello   world  ') // 'Hello world'
 * ```
 */
export function cleanWhitespace(text: string): string {
  return text.trim().replace(/\s+/g, " ");
}

// ============================================================================
// VALIDATION
// ============================================================================

/**
 * Validates an email address
 * 
 * @param email - Email to validate
 * @returns True if valid email
 * 
 * @example
 * ```typescript
 * isValidEmail('user@example.com') // true
 * isValidEmail('invalid-email') // false
 * ```
 */
export function isValidEmail(email: string): boolean {
  return VALIDATION.EMAIL.test(email);
}

/**
 * Validates a slug format
 * 
 * @param slug - Slug to validate
 * @returns True if valid slug
 * 
 * @example
 * ```typescript
 * isValidSlug('my-project') // true
 * isValidSlug('My Project') // false
 * isValidSlug('project_name') // false
 * ```
 */
export function isValidSlug(slug: string): boolean {
  return VALIDATION.SLUG.test(slug);
}

/**
 * Checks if a string is empty or only whitespace
 * 
 * @param text - Text to check
 * @returns True if empty or whitespace
 * 
 * @example
 * ```typescript
 * isEmpty('   ') // true
 * isEmpty('text') // false
 * ```
 */
export function isEmpty(text: string | null | undefined): boolean {
  return !text || text.trim().length === 0;
}

/**
 * Checks if a value is a non-empty string
 * 
 * @param value - Value to check
 * @returns True if non-empty string
 * 
 * @example
 * ```typescript
 * isNonEmptyString('hello') // true
 * isNonEmptyString('') // false
 * isNonEmptyString(null) // false
 * ```
 */
export function isNonEmptyString(
  value: unknown
): value is string {
  return typeof value === "string" && !isEmpty(value);
}

// ============================================================================
// URL UTILITIES
// ============================================================================

/**
 * Extracts the file extension from a file path or URL
 * 
 * @param path - File path or URL
 * @returns File extension (without dot) or empty string
 * 
 * @example
 * ```typescript
 * getFileExtension('/path/to/file.pdf') // 'pdf'
 * getFileExtension('image.jpg') // 'jpg'
 * getFileExtension('noextension') // ''
 * ```
 */
export function getFileExtension(path: string): string {
  const match = path.match(/\.([^.]+)$/);
  return match ? match[1].toLowerCase() : "";
}

/**
 * Checks if a path is an external URL
 * 
 * @param path - Path or URL to check
 * @returns True if external URL
 * 
 * @example
 * ```typescript
 * isExternalUrl('https://example.com') // true
 * isExternalUrl('/internal-path') // false
 * isExternalUrl('mailto:email@example.com') // true
 * ```
 */
export function isExternalUrl(path: string): boolean {
  return /^(https?:|mailto:|tel:)/i.test(path);
}

/**
 * Normalizes a URL by removing trailing slashes
 * 
 * @param url - URL to normalize
 * @returns Normalized URL
 * 
 * @example
 * ```typescript
 * normalizeUrl('/path/to/page/') // '/path/to/page'
 * normalizeUrl('https://example.com/') // 'https://example.com'
 * ```
 */
export function normalizeUrl(url: string): string {
  return url.replace(/\/$/, "");
}

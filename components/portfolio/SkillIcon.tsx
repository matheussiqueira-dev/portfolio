"use client";

import type { ReactNode } from "react";

const iconBase = "h-5 w-5";

const icons: Record<string, ReactNode> = {
  react: (
    <svg viewBox="0 0 24 24" className={iconBase} fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="2.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(120 12 12)" />
    </svg>
  ),
  next: (
    <svg viewBox="0 0 24 24" className={iconBase} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 19h16" />
      <path d="M7 6h5.5a3.5 3.5 0 0 1 0 7H9" />
      <path d="M15 6v8l4 5" />
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" className={iconBase} fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M9 9h6" />
      <path d="M12 9v7" />
      <path d="M16 12.5a2.5 2.5 0 0 1 2.5 2.5" />
      <path d="M16 9.5a2.5 2.5 0 0 1 2.5 2.5" />
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24" className={iconBase} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3c-3.5 0-6 1.5-6 4v3h6" />
      <path d="M12 21c3.5 0 6-1.5 6-4v-3h-6" />
      <circle cx="9" cy="7" r="1" />
      <circle cx="15" cy="17" r="1" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" className={iconBase} fill="none" stroke="currentColor" strokeWidth="1.6">
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  ),
  powerbi: (
    <svg viewBox="0 0 24 24" className={iconBase} fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="4" y="10" width="4" height="8" rx="1" />
      <rect x="10" y="6" width="4" height="12" rx="1" />
      <rect x="16" y="3" width="4" height="15" rx="1" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" className={iconBase} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M7 18h9a4 4 0 0 0 .6-7.9A5 5 0 0 0 7.2 7.6 4 4 0 0 0 7 18z" />
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 24 24" className={iconBase} fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="9" cy="5" r="3" />
      <circle cx="15" cy="5" r="3" />
      <circle cx="9" cy="12" r="3" />
      <circle cx="15" cy="12" r="3" />
      <circle cx="9" cy="19" r="3" />
    </svg>
  ),
};

export function SkillIcon({ name }: { name: string }) {
  return <span className="text-[color:var(--accent)]">{icons[name] ?? icons.database}</span>;
}

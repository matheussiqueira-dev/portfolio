"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { routing, type Locale } from "@/core/i18n/routing";

type LocalizedRoute = string | Partial<Record<Locale, string>>;

const LOCALE_PREFIXES: Record<Locale, string> = {
  "pt-BR": "",
  en: "/en",
};

const normalizePathname = (pathname: string): string => {
  if (!pathname) {
    return "/";
  }

  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (withLeadingSlash.length > 1 && withLeadingSlash.endsWith("/")) {
    return withLeadingSlash.slice(0, -1);
  }

  return withLeadingSlash;
};

const readLocaleFromPathname = (pathname: string): Locale => {
  const normalized = normalizePathname(pathname);

  if (normalized === "/en" || normalized.startsWith("/en/")) {
    return "en";
  }

  if (normalized === "/pt-BR" || normalized.startsWith("/pt-BR/")) {
    return "pt-BR";
  }

  return routing.defaultLocale;
};

const stripLocalePrefix = (pathname: string): string => {
  const normalized = normalizePathname(pathname);

  if (normalized === "/en") {
    return "/";
  }

  if (normalized.startsWith("/en/")) {
    return normalized.slice(3);
  }

  if (normalized === "/pt-BR") {
    return "/";
  }

  if (normalized.startsWith("/pt-BR/")) {
    return normalized.slice(6);
  }

  return normalized;
};

const matchPattern = (
  pathname: string,
  pattern: string
): Record<string, string> | null => {
  const keys: string[] = [];
  const regexSource = pattern
    .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    .replace(/\\\[([^\]]+)\\\]/g, (_, key: string) => {
      keys.push(key);
      return "([^/]+)";
    });

  const match = new RegExp(`^${regexSource}$`).exec(pathname);

  if (!match) {
    return null;
  }

  return keys.reduce<Record<string, string>>((params, key, index) => {
    params[key] = decodeURIComponent(match[index + 1] ?? "");
    return params;
  }, {});
};

const fillPattern = (pattern: string, params: Record<string, string>): string =>
  pattern.replace(/\[([^\]]+)\]/g, (_, key: string) =>
    encodeURIComponent(params[key] ?? "")
  );

const translateLocalizedPathname = (
  pathname: string,
  fromLocale: Locale,
  toLocale: Locale
): string => {
  const entries = Object.values(routing.pathnames) as LocalizedRoute[];

  for (const entry of entries) {
    const sourcePattern =
      typeof entry === "string" ? entry : entry[fromLocale];
    const targetPattern = typeof entry === "string" ? entry : entry[toLocale];

    if (!sourcePattern || !targetPattern) {
      continue;
    }

    const params = matchPattern(pathname, normalizePathname(sourcePattern));
    if (!params) {
      continue;
    }

    return fillPattern(normalizePathname(targetPattern), params);
  }

  return pathname;
};

const addLocalePrefix = (pathname: string, locale: Locale): string => {
  const normalized = normalizePathname(pathname);
  const prefix = LOCALE_PREFIXES[locale];

  if (!prefix) {
    return normalized;
  }

  return normalized === "/" ? prefix : `${prefix}${normalized}`;
};

export default function LanguageSwitch() {
  const pathname = usePathname() ?? "/";
  const locale = readLocaleFromPathname(pathname);
  const isEnglish = locale === "en";

  const switchLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      window.location.reload();
      return;
    }

    const pathnameWithoutLocale = stripLocalePrefix(pathname);
    const translatedPathname = translateLocalizedPathname(
      pathnameWithoutLocale,
      locale,
      nextLocale
    );
    const destination = addLocalePrefix(translatedPathname, nextLocale);
    const { search, hash } = window.location;

    window.location.assign(`${destination}${search}${hash}`);
  };

  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
      <button
        type="button"
        onClick={() => switchLocale("pt-BR")}
        aria-pressed={!isEnglish}
        className={`appearance-none border-0 bg-transparent p-0 flex items-center gap-2 transition-colors ${
          !isEnglish
            ? "text-[color:var(--foreground)] font-semibold"
            : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
        }`}
        aria-current={!isEnglish ? "page" : undefined}
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] shadow-sm">
          <Image src="/flags/br.png" alt="Bandeira do Brasil" width={14} height={14} />
        </span>
        PT-BR
      </button>

      <span className="text-[color:var(--border)]">|</span>

      <button
        type="button"
        onClick={() => switchLocale("en")}
        aria-pressed={isEnglish}
        className={`appearance-none border-0 bg-transparent p-0 flex items-center gap-2 transition-colors ${
          isEnglish
            ? "text-[color:var(--foreground)] font-semibold"
            : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
        }`}
        aria-current={isEnglish ? "page" : undefined}
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] shadow-sm">
          <Image src="/flags/us.png" alt="Bandeira dos Estados Unidos" width={14} height={14} />
        </span>
        EN
      </button>
    </div>
  );
}


import { NextRequest, NextResponse } from "next/server";

type CacheEntry = {
  value: number | null;
  expires: number;
};

const CACHE_TTL_MS = 1000 * 60 * 60 * 6;
const MAX_REPOS = 24;

const globalCache = globalThis as typeof globalThis & {
  __githubStarsCache?: Map<string, CacheEntry>;
};

const starsCache =
  globalCache.__githubStarsCache ?? new Map<string, CacheEntry>();

if (!globalCache.__githubStarsCache) {
  globalCache.__githubStarsCache = starsCache;
}

const isValidSlug = (slug: string) =>
  /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(slug);

const fetchStars = async (slug: string) => {
  try {
    const response = await fetch(`https://api.github.com/repos/${slug}`, {
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as { stargazers_count?: number };
    return typeof data.stargazers_count === "number"
      ? data.stargazers_count
      : null;
  } catch {
    return null;
  }
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const reposParam = searchParams.get("repos");

  if (!reposParam) {
    return NextResponse.json({ results: {} });
  }

  const now = Date.now();
  const requested = reposParam
    .split(",")
    .map((repo) => repo.trim())
    .filter(Boolean)
    .slice(0, MAX_REPOS);

  const unique = Array.from(new Set(requested)).filter(isValidSlug);
  const results: Record<string, number | null> = {};

  const toFetch = unique.filter((slug) => {
    const cached = starsCache.get(slug);
    if (!cached) return true;
    if (cached.expires <= now) return true;
    results[slug] = cached.value;
    return false;
  });

  if (toFetch.length > 0) {
    const fetched = await Promise.all(
      toFetch.map(async (slug) => [slug, await fetchStars(slug)] as const)
    );

    fetched.forEach(([slug, value]) => {
      results[slug] = value;
      starsCache.set(slug, { value, expires: now + CACHE_TTL_MS });
    });
  }

  return NextResponse.json(
    { results },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    }
  );
}

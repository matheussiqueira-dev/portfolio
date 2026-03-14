import "server-only";

import { readdir } from "node:fs/promises";
import path from "node:path";

import type { Locale } from "@/core/i18n/routing";
import type { Certificate } from "@/data/certificates.types";

const ROOT_DIR = path.join(process.cwd(), "public", "certificates", "infinity-school");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const SECTION_ORDER = [
  "Aulas compartilhadas e eventos",
  "Certificados do ranking",
  "Super Módulos",
] as const;

type SectionName = (typeof SECTION_ORDER)[number];

const SECTION_META: Record<
  SectionName,
  {
    prefix: string;
    tags: Record<Locale, string[]>;
  }
> = {
  "Aulas compartilhadas e eventos": {
    prefix: "workshops_",
    tags: {
      "pt-BR": ["Workshop", "Eventos"],
      en: ["Workshop", "Events"],
    },
  },
  "Certificados do ranking": {
    prefix: "ranking_",
    tags: {
      "pt-BR": ["Ranking", "Destaque"],
      en: ["Ranking", "Achievement"],
    },
  },
  "Super Módulos": {
    prefix: "Super_modulo_",
    tags: {
      "pt-BR": ["Super Módulos", "Formação Técnica"],
      en: ["Advanced Modules", "Technical Training"],
    },
  },
};

const TITLE_TAGS = [
  { pattern: /python/i, tags: { "pt-BR": "Python", en: "Python" } },
  { pattern: /\bIA\b|chatgpt|generativa/i, tags: { "pt-BR": "IA", en: "AI" } },
  { pattern: /power\s*bi/i, tags: { "pt-BR": "Power BI", en: "Power BI" } },
  {
    pattern: /dados|data science|csv|banco de dados|sql/i,
    tags: { "pt-BR": "Data Analytics", en: "Data Analytics" },
  },
  {
    pattern: /marketing|instagram|linkedin|marca pessoal|vendas/i,
    tags: { "pt-BR": "Marketing", en: "Marketing" },
  },
  {
    pattern: /design|animação|motion|storytelling|tipografia|visual|capcut|vídeos|ui|ux/i,
    tags: { "pt-BR": "Design", en: "Design" },
  },
  { pattern: /git|github/i, tags: { "pt-BR": "Git/GitHub", en: "Git/GitHub" } },
  { pattern: /cibersegurança/i, tags: { "pt-BR": "Segurança", en: "Security" } },
  {
    pattern: /programação|programacao|poo|discord|web|portugol|no-code|game|rpg/i,
    tags: { "pt-BR": "Programação", en: "Programming" },
  },
] as const;

function normalizeText(value: string): string {
  return value.normalize("NFC");
}

function slugify(value: string): string {
  return normalizeText(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function toPublicUrl(segments: string[]): string {
  return `/${segments.map((segment) => encodeURIComponent(segment)).join("/")}`;
}

function sectionNameFromDirectory(directoryName: string): SectionName | null {
  const normalizedName = normalizeText(directoryName);
  return SECTION_ORDER.find((name) => name === normalizedName) ?? null;
}

function rankingTitle(baseTitle: string): string {
  const match = baseTitle.match(/^top\s*(\d+)$/i) ?? baseTitle.match(/^top(\d+)$/i);
  if (!match) return `Ranking ${baseTitle}`;
  return `Ranking Top ${match[1]}`;
}

function normalizeKnownTerms(title: string): string {
  return title
    .replace(/\bChatgpt\b/gi, "ChatGPT")
    .replace(/\bGITGITHUB\b/g, "Git e GitHub")
    .replace(/\bMy SQL\b/gi, "MySQL")
    .replace(/\bUXUI\b/g, "UX/UI");
}

function cleanupTitle(fileName: string, sectionName: SectionName): string {
  const extension = path.extname(fileName);
  let title = normalizeText(path.basename(fileName, extension)).replace(/_\d+_\d+$/, "");

  title = title.replace(new RegExp(`^${SECTION_META[sectionName].prefix}`), "").trim();

  if (sectionName === "Certificados do ranking") {
    return rankingTitle(title);
  }

  return title
    .replace(/_+/g, " - ")
    .replace(/\s+-\s+/g, " - ")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+\./g, ".")
    .trim()
    .replace(/^-\s*/, "");
}

function rankingOrder(title: string): number {
  const rankingMatch = title.match(/Top (\d+)/i);
  return rankingMatch ? Number(rankingMatch[1]) : Number.MAX_SAFE_INTEGER;
}

function areaTags(title: string, sectionName: SectionName, locale: Locale): string[] {
  const tags = [...SECTION_META[sectionName].tags[locale]];

  for (const rule of TITLE_TAGS) {
    if (rule.pattern.test(title)) {
      tags.push(rule.tags[locale]);
    }
  }

  if (sectionName === "Certificados do ranking") {
    const rankingMatch = title.match(/Top (\d+)/i);
    if (rankingMatch) {
      tags.push(`Top ${rankingMatch[1]}`);
    }
  }

  return Array.from(new Set(tags));
}

export async function getInfinitySchoolCertificates(locale: Locale): Promise<Certificate[]> {
  const entries = await readdir(ROOT_DIR, { withFileTypes: true });
  const directories = entries
    .filter((entry) => entry.isDirectory())
    .sort((a, b) => {
      const aName = sectionNameFromDirectory(a.name);
      const bName = sectionNameFromDirectory(b.name);

      const aIndex = aName ? SECTION_ORDER.indexOf(aName) : Number.MAX_SAFE_INTEGER;
      const bIndex = bName ? SECTION_ORDER.indexOf(bName) : Number.MAX_SAFE_INTEGER;

      return aIndex - bIndex;
    });

  const certificates: Certificate[] = [];

  for (const directory of directories) {
    const sectionName = sectionNameFromDirectory(directory.name);
    if (!sectionName) continue;

    const directoryPath = path.join(ROOT_DIR, directory.name);
    const files = await readdir(directoryPath, { withFileTypes: true });
    const images = files
      .filter(
        (file) => file.isFile() && IMAGE_EXTENSIONS.has(path.extname(file.name).toLowerCase())
      )
      .sort((a, b) => {
        const aTitle = normalizeKnownTerms(cleanupTitle(a.name, sectionName));
        const bTitle = normalizeKnownTerms(cleanupTitle(b.name, sectionName));

        if (sectionName === "Certificados do ranking") {
          return (
            rankingOrder(aTitle) - rankingOrder(bTitle) || aTitle.localeCompare(bTitle, locale)
          );
        }

        return aTitle.localeCompare(bTitle, locale);
      });

    for (const file of images) {
      const title = normalizeKnownTerms(cleanupTitle(file.name, sectionName));
      const publicUrl = toPublicUrl(["certificates", "infinity-school", directory.name, file.name]);

      certificates.push({
        id: slugify(
          path.posix.join(
            "infinity-school",
            normalizeText(directory.name),
            normalizeText(file.name)
          )
        ),
        title,
        issuer: "Infinity School",
        areaTags: areaTags(title, sectionName, locale),
        fileUrl: publicUrl,
        thumbnailUrl: publicUrl,
      });
    }
  }

  return certificates;
}

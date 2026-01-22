"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Mapeamento de rotas PT -> EN
 * Rotas que têm nomes diferentes entre idiomas
 */
const PT_TO_EN_MAP: Record<string, string> = {
  "/academico": "/en/academic",
  "/contrate": "/en/hire",
  "/data-analyst-junior": "/en/junior-data-analyst",
};

/**
 * Mapeamento reverso EN -> PT
 */
const EN_TO_PT_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(PT_TO_EN_MAP).map(([pt, en]) => [en, pt])
);

/**
 * Converte uma rota EN para PT
 */
function getPortuguesePath(pathname: string): string {
  // Verifica mapeamento especial primeiro
  if (EN_TO_PT_MAP[pathname]) {
    return EN_TO_PT_MAP[pathname];
  }

  // Se não começa com /en, já é PT
  if (!pathname.startsWith("/en")) {
    return pathname;
  }

  // Remove /en do início
  const stripped = pathname.replace(/^\/en/, "");
  return stripped.length > 0 ? stripped : "/";
}

/**
 * Converte uma rota PT para EN
 */
function getEnglishPath(pathname: string): string {
  // Verifica mapeamento especial primeiro
  if (PT_TO_EN_MAP[pathname]) {
    return PT_TO_EN_MAP[pathname];
  }

  // Se já começa com /en, já é EN
  if (pathname.startsWith("/en")) {
    return pathname;
  }

  // Adiciona /en no início
  return pathname === "/" ? "/en" : `/en${pathname}`;
}

export default function LanguageSwitch() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const ptPath = getPortuguesePath(pathname);
  const enPath = getEnglishPath(pathname);

  return (
    <div className="flex items-center gap-3 text-sm">
      <Link
        href={ptPath}
        className={`transition-colors ${
          !isEnglish
            ? "text-white font-medium"
            : "text-slate-400 hover:text-white"
        }`}
        aria-current={!isEnglish ? "page" : undefined}
      >
        PT-BR
      </Link>

      <span className="text-slate-600">|</span>

      <Link
        href={enPath}
        className={`transition-colors ${
          isEnglish
            ? "text-white font-medium"
            : "text-slate-400 hover:text-white"
        }`}
        aria-current={isEnglish ? "page" : undefined}
      >
        EN-US
      </Link>
    </div>
  );
}

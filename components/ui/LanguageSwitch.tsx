"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Mapeamento de rotas PT -> EN
 * Rotas que têm nomes diferentes entre idiomas
 */
const PT_TO_EN_MAP: Record<string, string> = {
  "/academico": "/en/academic",
  "/contrate": "/en/hire",
  "/data-analyst": "/en/data-analyst",
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
  const pathname = usePathname() ?? "/";
  const isEnglish = pathname.startsWith("/en");

  const ptPath = getPortuguesePath(pathname);
  const enPath = getEnglishPath(pathname);

  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
      <Link
        href={ptPath}
        className={`flex items-center gap-2 transition-colors ${
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
      </Link>

      <span className="text-[color:var(--border)]">|</span>

      <Link
        href={enPath}
        className={`flex items-center gap-2 transition-colors ${
          isEnglish
            ? "text-[color:var(--foreground)] font-semibold"
            : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
        }`}
        aria-current={isEnglish ? "page" : undefined}
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] shadow-sm">
          <Image src="/flags/us.png" alt="Bandeira dos Estados Unidos" width={14} height={14} />
        </span>
        EN-US
      </Link>
    </div>
  );
}

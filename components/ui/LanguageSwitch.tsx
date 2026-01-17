"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

type Props = {
  direction?: "row" | "column";
  onNavigate?: () => void;
};

const getPtPath = (pathname: string) => {
  if (!pathname.startsWith("/en")) {
    return pathname;
  }

  const stripped = pathname.replace(/^\/en/, "");
  return stripped.length > 0 ? stripped : "/";
};

const getEnPath = (pathname: string) => {
  if (pathname.startsWith("/en")) {
    return pathname;
  }

  return pathname === "/" ? "/en" : `/en${pathname}`;
};

export default function LanguageSwitch({ direction = "row", onNavigate }: Props) {
  const pathname = usePathname() ?? "/";
  const ptPath = getPtPath(pathname);
  const enPath = getEnPath(pathname);
  const isEn = pathname.startsWith("/en");

  return (
    <div
      className={`flex ${direction === "column" ? "flex-col items-start" : "items-center"} gap-3`}
    >
      <Link
        href={ptPath}
        onClick={() => {
          trackEvent("click_language", "engagement", "PT-BR");
          onNavigate?.();
        }}
        aria-label="Alternar para Portugues"
        aria-current={!isEn ? "page" : undefined}
        className={`flex items-center gap-2 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded ${
          !isEn ? "text-white" : "text-slate-200"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/flags/br.png"
          alt="PT-BR"
          width={20}
          height={14}
          className="rounded-sm"
        />
        PT-BR
      </Link>

      <Link
        href={enPath}
        onClick={() => {
          trackEvent("click_language", "engagement", "EN-US");
          onNavigate?.();
        }}
        aria-label="Switch to English"
        aria-current={isEn ? "page" : undefined}
        className={`flex items-center gap-2 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded ${
          isEn ? "text-white" : "text-slate-200"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/flags/us.png"
          alt="EN-US"
          width={20}
          height={11}
          className="rounded-sm"
        />
        EN-US
      </Link>
    </div>
  );
}

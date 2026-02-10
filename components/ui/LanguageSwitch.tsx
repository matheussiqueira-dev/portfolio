"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { startTransition } from "react";
import { useParams } from "next/navigation";

import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

type AppPathname = ReturnType<typeof usePathname>;
type DynamicPathname = "/projects/[slug]" | "/demos/[slug]";
type StaticPathname = Exclude<AppPathname, DynamicPathname>;

export default function LanguageSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams<{ slug?: string }>();
  const locale = useLocale() as Locale;
  const isEnglish = locale === "en";
  const switchLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;

    startTransition(() => {
      if (pathname === "/projects/[slug]" || pathname === "/demos/[slug]") {
        const slug = params.slug;

        if (typeof slug === "string") {
          router.replace(
            { pathname: pathname as DynamicPathname, params: { slug } },
            { locale: nextLocale, scroll: false }
          );
        }
        return;
      }

      router.replace(pathname as StaticPathname, {
        locale: nextLocale,
        scroll: false,
      });
    });
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

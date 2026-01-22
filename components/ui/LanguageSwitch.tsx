"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitch() {
  const pathname = usePathname();

  const isEnglish = pathname.startsWith("/en");

  return (
    <div className="flex gap-2 text-sm">
      <Link
        href={isEnglish ? pathname.replace("/en", "") || "/" : pathname}
        className={!isEnglish ? "font-bold" : "text-gray-400"}
      >
        PT
      </Link>

      <span>|</span>

      <Link
        href={isEnglish ? pathname : `/en${pathname}`}
        className={isEnglish ? "font-bold" : "text-gray-400"}
      >
        EN
      </Link>
    </div>
  );
}

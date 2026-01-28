"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LogoLink() {
  const pathname = usePathname() ?? "/";
  const isEn = pathname.startsWith("/en");
  const href = isEn ? "/en" : "/";

  return (
    <Link
      href={href}
      className="brand-mark rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
    >
      Matheus Siqueira
    </Link>
  );
}

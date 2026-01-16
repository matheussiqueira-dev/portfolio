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
      className="font-semibold text-white tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
    >
      Matheus Siqueira
    </Link>
  );
}
"use client";

import { Link } from "@/i18n/navigation";

export default function LogoLink() {
  return (
    <Link
      href="/"
      className="text-sm font-semibold tracking-[0.08em] uppercase text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 rounded"
    >
      Matheus Siqueira
    </Link>
  );
}

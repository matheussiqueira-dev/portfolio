"use client";

import { Link } from "@/core/i18n/navigation";

export default function LogoLink() {
  return (
    <Link
      href="/"
      className="site-logo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
    >
      <span className="site-logo__dot" aria-hidden="true" />
      <span className="site-logo__text">
        <span>Matheus Siqueira</span>
        <span className="site-logo__caption">ENCOM AI Command Center</span>
      </span>
    </Link>
  );
}

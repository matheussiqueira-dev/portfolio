"use client";

import { usePathname } from "next/navigation";

export default function ResumePDF() {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const resumeHref = "/CV%20Matheus%20Siqueira.pdf";

  return (
    <a
      href={resumeHref}
      download="CV Matheus Siqueira.pdf"
      className="btn-outline mt-4 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 print:hidden"
    >
      {isEn ? "Download Resume (PDF)" : "Baixar CV (PDF)"}
    </a>
  );
}

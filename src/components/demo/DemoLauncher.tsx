"use client";

import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";
import { DemoShell } from "./DemoShell";

type Props = {
  project: Project;
  required?: boolean;
};

export function DemoLauncher({ project, required }: Props) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const canRun =
    project.demo.mode !== "none" || Boolean(project.links?.live);

  useEffect(() => {
    if (!open) btnRef.current?.focus();
  }, [open]);

  if (required && project.demo.mode === "none") {
    console.warn(`Projeto obrigatorio sem demo configurada: ${project.id}`);
  }

  return (
    <>
      <button
        ref={btnRef}
        disabled={!canRun}
        onClick={() => setOpen(true)}
        className="rounded-md border border-white/10 px-3 py-2 text-sm hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-50"
        type="button"
      >
        Executar Demo
      </button>

      {open && <DemoShell project={project} onClose={() => setOpen(false)} />}
    </>
  );
}

export default DemoLauncher;

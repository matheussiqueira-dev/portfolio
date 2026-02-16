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
        className="liquid-control liquid-control--sm"
        type="button"
      >
        Executar Demo
      </button>

      {open && <DemoShell project={project} onClose={() => setOpen(false)} />}
    </>
  );
}

export default DemoLauncher;

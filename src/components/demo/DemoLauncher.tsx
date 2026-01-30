"use client";

import { useRef, useState } from "react";
import type { Project } from "@/src/data/projects";
import DemoShell from "@/src/components/demo/DemoShell";

const playIcon = (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-4 w-4"
    fill="currentColor"
  >
    <path d="M8 5l11 7-11 7V5z" />
  </svg>
);

type DemoLauncherProps = {
  project: Project;
  label?: string;
  className?: string;
};

export default function DemoLauncher({
  project,
  label = "Executar Demo",
  className,
}: DemoLauncherProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  if (project.demo.mode === "none") {
    return null;
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className={className ?? "btn-primary"}
      >
        {playIcon}
        {label}
      </button>
      {open ? (
        <DemoShell
          project={project}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </>
  );
}

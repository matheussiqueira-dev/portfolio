"use client";

import { useEffect, useState } from "react";

type CopyButtonProps = {
  value: string;
  label: string;
  copiedLabel: string;
  className?: string;
};

type CopyState = "idle" | "copied" | "error";

export default function CopyButton({
  value,
  label,
  copiedLabel,
  className,
}: CopyButtonProps) {
  const [state, setState] = useState<CopyState>("idle");

  useEffect(() => {
    if (state === "idle") return;

    const timer = window.setTimeout(() => {
      setState("idle");
    }, 2000);

    return () => window.clearTimeout(timer);
  }, [state]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setState("copied");
    } catch {
      setState("error");
    }
  };

  const text = state === "copied" ? copiedLabel : label;

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`copy-button ${className ?? ""}`.trim()}
      data-state={state}
      aria-live="polite"
    >
      {text}
    </button>
  );
}

"use client";

import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReduced || isCoarsePointer) return;

    const root = document.documentElement;
    let raf = 0;
    let x = window.innerWidth * 0.5;
    let y = window.innerHeight * 0.2;

    const apply = () => {
      raf = 0;
      root.style.setProperty("--cursor-x", `${x}px`);
      root.style.setProperty("--cursor-y", `${y}px`);
    };

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!raf) {
        raf = window.requestAnimationFrame(apply);
      }
    };

    const onLeave = () => {
      x = window.innerWidth * 0.5;
      y = window.innerHeight * 0.2;
      if (!raf) {
        raf = window.requestAnimationFrame(apply);
      }
    };

    apply();
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onMove);
      window.removeEventListener("pointerleave", onLeave);
      if (raf) {
        window.cancelAnimationFrame(raf);
      }
    };
  }, []);

  return <div className="cursor-glow" aria-hidden="true" />;
}

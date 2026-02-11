"use client";

import { useEffect } from "react";

export default function BackgroundGlow() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--glow-x", "50%");
    root.style.setProperty("--glow-y", "18%");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isCoarsePointer) {
      return;
    }

    let raf = 0;
    let x = window.innerWidth * 0.5;
    let y = window.innerHeight * 0.18;

    const paintGlow = () => {
      raf = 0;
      root.style.setProperty("--glow-x", `${x}px`);
      root.style.setProperty("--glow-y", `${y}px`);
    };

    const updateFromPointer = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!raf) {
        raf = window.requestAnimationFrame(paintGlow);
      }
    };

    paintGlow();
    window.addEventListener("pointermove", updateFromPointer, { passive: true });
    window.addEventListener("pointerdown", updateFromPointer, { passive: true });

    return () => {
      window.removeEventListener("pointermove", updateFromPointer);
      window.removeEventListener("pointerdown", updateFromPointer);
      if (raf) {
        window.cancelAnimationFrame(raf);
      }
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#030303]" />
      <div className="absolute inset-0 bg-[radial-gradient(75%_55%_at_12%_-10%,rgba(255,255,255,0.08),transparent_62%),radial-gradient(70%_50%_at_92%_0%,rgba(255,255,255,0.05),transparent_65%)]" />
      <div
        className="absolute inset-0 opacity-75"
        style={{
          background:
            "radial-gradient(620px circle at var(--glow-x, 50%) var(--glow-y, 18%), rgba(255,255,255,0.12), transparent 62%)",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,3,3,0)_0%,#030303_100%)]" />
    </div>
  );
}

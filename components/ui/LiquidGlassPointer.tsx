"use client";

import { useEffect } from "react";

const LIQUID_SELECTOR =
  ".btn-primary, .btn-outline, .btn-ghost, .theme-toggle, .liquid-control";

export default function LiquidGlassPointer() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const button = target.closest(LIQUID_SELECTOR);
      if (!(button instanceof HTMLElement)) {
        return;
      }

      const rect = button.getBoundingClientRect();
      button.style.setProperty("--x", `${event.clientX - rect.left}px`);
      button.style.setProperty("--y", `${event.clientY - rect.top}px`);
    };

    document.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return null;
}

"use client";

import { useRef, type CSSProperties } from "react";

import { cn } from "@/core/utils";

type FloatingTechOrbitProps = {
  items: string[];
  centerTitle?: string;
  centerSubtitle?: string;
  className?: string;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function FloatingTechOrbit({
  items,
  centerTitle,
  centerSubtitle,
  className,
}: FloatingTechOrbitProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const uniqueItems = Array.from(new Set(items)).slice(0, 8);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!rootRef.current) {
      return;
    }

    const rect = rootRef.current.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

    rootRef.current.style.setProperty("--orbit-shift-x", `${clamp(offsetX * 18, -12, 12)}px`);
    rootRef.current.style.setProperty("--orbit-shift-y", `${clamp(offsetY * 18, -12, 12)}px`);
  }

  function handlePointerLeave() {
    if (!rootRef.current) {
      return;
    }

    rootRef.current.style.setProperty("--orbit-shift-x", "0px");
    rootRef.current.style.setProperty("--orbit-shift-y", "0px");
  }

  return (
    <div
      ref={rootRef}
      className={cn("floating-tech-orbit", className)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="floating-tech-orbit__field" aria-hidden="true">
        <div className="floating-tech-orbit__halo" />
        {uniqueItems.map((item, index) => {
          const angle = (Math.PI * 2 * index) / uniqueItems.length - Math.PI / 2;
          const radius = index % 2 === 0 ? 36 : 28;
          const style = {
            left: `${50 + Math.cos(angle) * radius}%`,
            top: `${50 + Math.sin(angle) * radius}%`,
            animationDelay: `${index * 0.6}s`,
          } satisfies CSSProperties;

          return (
            <span key={item} className="floating-tech-orbit__item tron-badge" style={style}>
              {item}
            </span>
          );
        })}
      </div>

      <div className="floating-tech-orbit__core encom-panel">
        {centerTitle ? (
          <p className="section-title text-lg text-[color:var(--foreground)]">{centerTitle}</p>
        ) : null}
        {centerSubtitle ? (
          <p className="mt-2 text-sm text-[color:var(--muted)]">{centerSubtitle}</p>
        ) : null}
      </div>

      <div className="floating-tech-orbit__mobile">
        {uniqueItems.map((item) => (
          <span key={item} className="tron-badge">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

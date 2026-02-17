"use client";

import { usePathname } from "next/navigation";
import CursorGlow from "@/components/ui/CursorGlow";
import ScrollReveal from "@/components/ui/ScrollReveal";
import LiquidGlassPointer from "@/components/ui/LiquidGlassPointer";
import VideoBackground from "@/components/ui/VideoBackground";

const LANDING_PATHS = new Set(["/", "/pt-BR", "/en"]);

export default function AppVisualEffects() {
  const pathname = usePathname();

  if (LANDING_PATHS.has(pathname)) {
    return null;
  }

  return (
    <>
      <VideoBackground />
      <CursorGlow />
      <ScrollReveal />
      <LiquidGlassPointer />
    </>
  );
}

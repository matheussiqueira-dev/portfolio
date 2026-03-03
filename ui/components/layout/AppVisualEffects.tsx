"use client";

import { usePathname } from "next/navigation";
import CursorGlow from "@/ui/components/ui/CursorGlow";
import ScrollReveal from "@/ui/components/ui/ScrollReveal";
import LiquidGlassPointer from "@/ui/components/ui/LiquidGlassPointer";
import VideoBackground from "@/ui/components/ui/VideoBackground";

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

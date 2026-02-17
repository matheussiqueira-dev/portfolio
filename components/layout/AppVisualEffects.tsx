"use client";

import { usePathname } from "next/navigation";
import CursorGlow from "@/components/ui/CursorGlow";
import ScrollReveal from "@/components/ui/ScrollReveal";
import LiquidGlassPointer from "@/components/ui/LiquidGlassPointer";
import VideoBackground from "@/components/ui/VideoBackground";

export default function AppVisualEffects() {
  const pathname = usePathname();

  if (pathname === "/") {
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

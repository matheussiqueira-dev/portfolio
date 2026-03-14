"use client";

import CursorGlow from "@/ui/components/ui/CursorGlow";
import ScrollReveal from "@/ui/components/ui/ScrollReveal";
import LiquidGlassPointer from "@/ui/components/ui/LiquidGlassPointer";
import SystemBackground from "@/ui/components/layout/SystemBackground";

export default function AppVisualEffects() {
  return (
    <>
      <SystemBackground />
      <CursorGlow />
      <ScrollReveal />
      <LiquidGlassPointer />
    </>
  );
}

import type React from "react";
import type { InlineDemoId } from "@/data/projects";

export const demoImports: Record<
  InlineDemoId,
  () => Promise<{ default: React.ComponentType<Record<string, never>> }>
> = {
  "detector-de-stress": () => import("./detector-de-stress"),
  "chatbot-ia-api": () => import("./chatbot-ia-api"),
  "library-api-advanced": () => import("./library-api-advanced"),

  "driver-monitoring-system": () => import("./driver-monitoring-system"),
  "touchless-web-gesture-interface": () =>
    import("./touchless-web-gesture-interface"),
  "self-drive-car": () => import("./self-drive-car"),
  "flappy-bird-com-gestos": () => import("./flappy-bird-com-gestos"),
  "reconhecimento-de-gestos-mao-tempo-real": () =>
    import("./reconhecimento-de-gestos-mao-tempo-real"),
};

export function hasInlineDemo(id: InlineDemoId) {
  return Boolean(demoImports[id]);
}

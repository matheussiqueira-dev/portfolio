"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { InlineDemoId } from "@/data/projects";
import { demoImports } from "@/demos/registry";

type Props = {
  inlineId: InlineDemoId;
};

const InlineLoading = () => (
  <div className="grid h-full w-full place-items-center rounded-lg border border-white/10 bg-white/5">
    <div className="text-sm opacity-80">Carregando demo...</div>
  </div>
);

const demoComponents = (Object.keys(demoImports) as InlineDemoId[]).reduce(
  (acc, id) => {
    acc[id] = dynamic(demoImports[id], {
      ssr: false,
      loading: InlineLoading,
    });
    return acc;
  },
  {} as Record<InlineDemoId, ComponentType<Record<string, never>>>
);

export function InlineDemo({ inlineId }: Props) {
  const Demo = demoComponents[inlineId];

  return <Demo />;
}

export default InlineDemo;

"use client";

import dynamic from "next/dynamic";
import type { InlineDemoId } from "@/data/projects";
import { demoImports } from "@/demos/registry";

type Props = {
  inlineId: InlineDemoId;
};

export function InlineDemo({ inlineId }: Props) {
  const importer = demoImports[inlineId];

  if (!importer) {
    return (
      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
        <p className="text-sm opacity-80">Demo inline nao registrada.</p>
      </div>
    );
  }

  const Demo = dynamic(importer as any, {
    ssr: false,
    loading: () => (
      <div className="grid h-full w-full place-items-center rounded-lg border border-white/10 bg-white/5">
        <div className="text-sm opacity-80">Carregando demo...</div>
      </div>
    ),
  });

  return <Demo />;
}

export default InlineDemo;

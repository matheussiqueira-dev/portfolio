import type { ReactNode } from "react";

import { cn } from "@/core/utils";

type EncomPanelProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "aside";
};

export default function EncomPanel({ children, className, as = "div" }: EncomPanelProps) {
  const Component = as;

  return <Component className={cn("encom-panel", className)}>{children}</Component>;
}

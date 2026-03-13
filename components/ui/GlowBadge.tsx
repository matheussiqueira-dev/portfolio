import type { ReactNode } from "react";

import { cn } from "@/core/utils";

type GlowBadgeProps = {
  children: ReactNode;
  className?: string;
};

export default function GlowBadge({ children, className }: GlowBadgeProps) {
  return <span className={cn("tron-badge", className)}>{children}</span>;
}

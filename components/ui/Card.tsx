import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

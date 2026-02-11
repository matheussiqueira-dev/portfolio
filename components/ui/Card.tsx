"use client";

import { forwardRef, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/cn";

type CardProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  hover?: boolean;
};

const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, hover = true, whileHover, transition, children, ...props },
  ref
) {
  return (
    <motion.div
      ref={ref}
      className={cn(
        "rounded-3xl border border-white/10 bg-[rgba(17,17,17,0.8)] p-6 backdrop-blur-[12px] shadow-[0_18px_48px_rgba(0,0,0,0.45)]",
        className
      )}
      whileHover={
        whileHover ??
        (hover
          ? {
              scale: 1.02,
              borderColor: "rgb(75 85 99 / 1)",
            }
          : undefined)
      }
      transition={
        transition ?? (hover ? { type: "spring", stiffness: 300, damping: 24 } : undefined)
      }
      {...props}
    >
      {children}
    </motion.div>
  );
});

export default Card;

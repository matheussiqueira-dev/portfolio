"use client";

import type { MouseEvent } from "react";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

const MAX_ROTATION = 7;
const SPRING_CONFIG = {
  stiffness: 180,
  damping: 22,
  mass: 0.6,
};

type Props = {
  alt: string;
};

export default function InteractivePhoto({ alt }: Props) {
  const reduceMotion = useReducedMotion();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const smoothRotateX = useSpring(rotateX, SPRING_CONFIG);
  const smoothRotateY = useSpring(rotateY, SPRING_CONFIG);

  const glowBackground = useMotionTemplate`radial-gradient(420px circle at ${glowX}% ${glowY}%, var(--landing-glow), transparent 60%)`;

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    glowX.set(x * 100);
    glowY.set(y * 100);

    rotateY.set((x - 0.5) * MAX_ROTATION * 2);
    rotateX.set((0.5 - y) * MAX_ROTATION * 2);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  return (
    <motion.div
      className="group relative mx-auto w-[min(340px,86vw)]"
      style={{ perspective: "1200px" }}
      initial={reduceMotion ? undefined : { opacity: 0, y: 20, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      <motion.div
        className="relative overflow-hidden rounded-[2rem] border border-[var(--landing-border)] bg-[var(--landing-card)] shadow-[var(--landing-card-shadow)]"
        style={{
          rotateX: reduceMotion ? 0 : smoothRotateX,
          rotateY: reduceMotion ? 0 : smoothRotateY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        whileHover={reduceMotion ? undefined : { scale: 1.008 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            backgroundImage: glowBackground,
            transform: "translateZ(36px)",
          }}
        />

        <div
          className="relative h-[360px] w-full sm:h-[420px]"
          style={{ transform: "translateZ(48px)" }}
        >
          <Image
            src="/profile.jpg"
            alt={alt}
            fill
            priority
            sizes="(max-width: 640px) 86vw, 340px"
            className="object-cover object-center"
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
      </motion.div>
    </motion.div>
  );
}

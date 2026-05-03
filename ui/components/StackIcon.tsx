"use client";

import Image from "next/image";
import { useState } from "react";

import { getStackIcon } from "@/data/stack-icons";

import styles from "./StackIcon.module.css";

type StackIconProps = {
  name: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
};

type StackIconListProps = {
  items: string[];
  limit?: number;
  size?: StackIconProps["size"];
  showLabel?: boolean;
  className?: string;
};

function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function StackIcon({ name, size = "md", showLabel = false, className }: StackIconProps) {
  const icon = getStackIcon(name);
  const [hasImageError, setHasImageError] = useState(false);
  const shouldUseIcon = icon && !hasImageError;
  const visibleLabel = showLabel || !shouldUseIcon;

  return (
    <span
      className={classNames(
        styles.icon,
        styles[size],
        visibleLabel && styles.withLabel,
        !shouldUseIcon && styles.fallback,
        className
      )}
      title={name}
      aria-label={name}
    >
      {shouldUseIcon ? (
        <span className={styles.media}>
          <Image
            src={icon.src}
            alt={`${name} icon`}
            fill
            sizes="32px"
            unoptimized
            className={styles.image}
            onError={() => setHasImageError(true)}
          />
        </span>
      ) : null}
      <span className={visibleLabel ? styles.label : "sr-only"}>{name}</span>
    </span>
  );
}

export function StackIconList({
  items,
  limit,
  size = "md",
  showLabel = false,
  className,
}: StackIconListProps) {
  const visibleItems = typeof limit === "number" ? items.slice(0, limit) : items;
  const remaining = typeof limit === "number" ? Math.max(items.length - limit, 0) : 0;

  return (
    <div className={classNames(styles.list, className)} aria-label="Stack">
      {visibleItems.map((item) => (
        <StackIcon key={item} name={item} size={size} showLabel={showLabel} />
      ))}
      {remaining > 0 ? (
        <span className={styles.more} aria-label={`Mais ${remaining} tecnologias`}>
          +{remaining}
        </span>
      ) : null}
    </div>
  );
}

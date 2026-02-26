"use client";

import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { trackEvent } from "@/core/analytics";

type Tracking = {
  action: string;
  category: string;
  label?: string;
};

type TrackedLinkProps = {
  href: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
  tracking?: Tracking;
};

type TrackedAnchorProps = {
  href: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
  tracking?: Tracking;
  target?: string;
  rel?: string;
  style?: CSSProperties;
  "data-reveal"?: boolean;
};

const handleTrack = (tracking?: Tracking) => {
  if (!tracking) {
    return;
  }

  trackEvent(tracking.action, tracking.category, tracking.label);
};

export function TrackedLink({
  href,
  className,
  ariaLabel,
  children,
  tracking,
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={() => handleTrack(tracking)}
    >
      {children}
    </Link>
  );
}

export function TrackedAnchor({
  href,
  className,
  ariaLabel,
  children,
  tracking,
  target,
  rel,
  style,
  "data-reveal": dataReveal,
}: TrackedAnchorProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      aria-label={ariaLabel}
      style={style}
      data-reveal={dataReveal}
      onClick={() => handleTrack(tracking)}
    >
      {children}
    </a>
  );
}

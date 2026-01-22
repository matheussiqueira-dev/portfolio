"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

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
}: TrackedAnchorProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      aria-label={ariaLabel}
      onClick={() => handleTrack(tracking)}
    >
      {children}
    </a>
  );
}

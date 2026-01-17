"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { track } from "@/lib/analytics";

type Tracking = {
  label: string;
  location: string;
};

type TrackedLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  tracking?: Tracking;
};

type TrackedAnchorProps = {
  href: string;
  className?: string;
  children: ReactNode;
  tracking?: Tracking;
  target?: string;
  rel?: string;
};

const handleTrack = (tracking?: Tracking) => {
  if (!tracking) {
    return;
  }

  track("click_cta", {
    label: tracking.label,
    location: tracking.location,
  });
};

export function TrackedLink({
  href,
  className,
  children,
  tracking,
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => handleTrack(tracking)}
    >
      {children}
    </Link>
  );
}

export function TrackedAnchor({
  href,
  className,
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
      onClick={() => handleTrack(tracking)}
    >
      {children}
    </a>
  );
}

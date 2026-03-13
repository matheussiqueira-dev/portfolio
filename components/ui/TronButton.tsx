import type { ReactNode } from "react";

import Link from "next/link";

import { cn } from "@/core/utils";

type TronButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  onClick?: () => void;
};

export default function TronButton({
  children,
  href,
  className,
  variant = "primary",
  external = false,
  type = "button",
  ariaLabel,
  onClick,
}: TronButtonProps) {
  const sharedClassName = cn("tron-button", className);

  if (href) {
    const isFileLink = /\.(pdf|mp4|gif|webm|png|jpe?g|svg)$/i.test(href);
    const shouldUseAnchor =
      external || href.startsWith("http") || href.startsWith("mailto:") || isFileLink;

    if (shouldUseAnchor) {
      const openInNewTab = href.startsWith("http") || isFileLink;

      return (
        <a
          href={href}
          className={sharedClassName}
          data-variant={variant}
          aria-label={ariaLabel}
          target={openInNewTab ? "_blank" : undefined}
          rel={openInNewTab ? "noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={sharedClassName} data-variant={variant} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={sharedClassName}
      data-variant={variant}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

import type { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/core/utils";

type TronCardProps = {
  title: string;
  description: string;
  secondaryText?: string;
  imageSrc?: string;
  imageAlt?: string;
  eyebrow?: string;
  badges?: string[];
  href?: string;
  external?: boolean;
  ctaLabel?: string;
  footer?: ReactNode;
  className?: string;
  children?: ReactNode;
  priority?: boolean;
};

export default function TronCard({
  title,
  description,
  secondaryText,
  imageSrc,
  imageAlt,
  eyebrow,
  badges = [],
  href,
  external = false,
  ctaLabel,
  footer,
  className,
  children,
  priority = false,
}: TronCardProps) {
  const content = (
    <article className={cn("tron-card", className)}>
      {imageSrc ? (
        <div className="tron-card__media">
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            priority={priority}
            className="object-cover"
          />
        </div>
      ) : null}
      <div className="tron-card__content">
        {eyebrow ? (
          <div className="tron-card__eyebrow-row">
            <p className="ui-label text-xs text-[color:var(--muted)]">{eyebrow}</p>
            <span className="tron-card__signal" aria-hidden="true" />
          </div>
        ) : null}
        <div>
          <h3 className="text-xl font-semibold text-[color:var(--foreground)]">{title}</h3>
          <p className="mt-3 text-sm text-[color:var(--muted)]">{description}</p>
          {secondaryText ? <p className="tron-card__secondary">{secondaryText}</p> : null}
        </div>
        {badges.length ? (
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span key={badge} className="tron-badge">
                {badge}
              </span>
            ))}
          </div>
        ) : null}
        {children}
        {ctaLabel ? (
          <div className="mt-auto pt-2 text-sm font-medium text-[color:var(--glow)]">
            {ctaLabel}
          </div>
        ) : null}
        {footer}
      </div>
    </article>
  );

  if (!href) {
    return content;
  }

  if (external || href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noreferrer" aria-label={title}>
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}

"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export default function GifMedia({ src, alt, className }: Props) {
  const [failed, setFailed] = useState(false);
  const fallbackSrc = "/projects/placeholder.png";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={failed ? fallbackSrc : src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

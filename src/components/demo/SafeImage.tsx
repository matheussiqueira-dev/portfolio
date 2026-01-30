"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

export type SafeImageProps = ImageProps & {
  fallbackSrc?: string;
};

export default function SafeImage({
  src,
  fallbackSrc = "/projects/placeholder.webp",
  alt,
  onError,
  ...rest
}: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState<ImageProps["src"]>(src);
  const [hasError, setHasError] = useState(false);

  const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!hasError) {
      setHasError(true);
      setCurrentSrc(fallbackSrc);
    }
    onError?.(event);
  };

  return <Image {...rest} src={currentSrc} alt={alt} onError={handleError} />;
}

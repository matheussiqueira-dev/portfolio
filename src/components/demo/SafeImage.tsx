"use client";

import Image, { type ImageProps } from "next/image";
import { useMemo, useState } from "react";

type SafeImageProps = Omit<ImageProps, "src"> & {
  src?: string;
  fallbackSrc?: string;
};

export function SafeImage({
  src,
  fallbackSrc = "/images/projects/placeholder.png",
  alt,
  ...rest
}: SafeImageProps) {
  const initial = useMemo(() => src || fallbackSrc, [src, fallbackSrc]);
  const [currentSrc, setCurrentSrc] = useState(initial);

  return (
    <Image
      {...rest}
      src={currentSrc}
      alt={alt}
      onError={() => {
        if (currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc);
      }}
    />
  );
}

export default SafeImage;

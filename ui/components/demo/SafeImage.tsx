"use client";

import Image, { type ImageProps } from "next/image";
import { useMemo, useState } from "react";

type SafeImageProps = ImageProps & {
  fallbackSrc?: ImageProps["src"];
};

export function SafeImage({
  alt,
  src,
  fallbackSrc,
  onError,
  ...props
}: SafeImageProps) {
  const [hasFailed, setHasFailed] = useState(false);

  const imageSrc = useMemo(() => {
    if (hasFailed && fallbackSrc) {
      return fallbackSrc;
    }

    return src;
  }, [fallbackSrc, hasFailed, src]);

  return (
    <Image
      {...props}
      alt={alt}
      src={imageSrc}
      onError={(event) => {
        if (!hasFailed && fallbackSrc) {
          setHasFailed(true);
        }

        onError?.(event);
      }}
    />
  );
}

export default SafeImage;
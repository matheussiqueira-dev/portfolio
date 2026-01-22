'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc?: string;
}

/**
 * Image component with automatic fallback on error
 * 
 * Features:
 * - Automatic fallback to placeholder on image load error
 * - Compatible with all next/image props
 * - Supports blur placeholder for better UX
 * - TypeScript strict mode compatible
 * 
 * @example
 * ```tsx
 * <ImageWithFallback
 *   src="/profile.jpg"
 *   alt="Profile"
 *   width={300}
 *   height={300}
 *   fallbackSrc="/placeholder.jpg"
 *   quality={90}
 *   placeholder="blur"
 * />
 * ```
 */
export default function ImageWithFallback({
  src,
  fallbackSrc = '/placeholder.jpg',
  alt,
  ...rest
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
      
      // Log error in development
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Failed to load image: ${src}, using fallback: ${fallbackSrc}`);
      }
    }
  };

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      onError={handleError}
    />
  );
}

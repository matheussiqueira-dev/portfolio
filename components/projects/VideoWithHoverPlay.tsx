"use client";

import { useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  poster?: string;
  className?: string;
};

export default function VideoWithHoverPlay({
  src,
  alt,
  poster,
  className = "",
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Silently fail if autoplay is blocked
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        preload="metadata"
        muted
        playsInline
        poster={poster}
        className="h-full w-full object-cover"
      >
        <source src={src} />
      </video>

      {!isHovering && poster && (
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
      )}
    </div>
  );
}

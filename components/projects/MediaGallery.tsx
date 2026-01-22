import Image from "next/image";
import type { ProjectMedia } from "@/data/projects.types";
import GifMedia from "./GifMedia";

type Props = {
  items: ProjectMedia[];
};

const getMediaType = (item: ProjectMedia) => {
  if (item.type) {
    return item.type;
  }

  if (item.src.endsWith(".mp4")) {
    return "video";
  }

  if (item.src.endsWith(".gif")) {
    return "gif";
  }

  return "image";
};

export default function MediaGallery({ items }: Props) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {items.map((item) => {
        const type = getMediaType(item);
        const isCover = item.src.includes("cover");
        const aspectClass = isCover ? "aspect-[1200/630]" : "aspect-video";

        return (
          <figure
            key={item.src}
            className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 shadow-sm"
          >
            <div
              className={`relative w-full overflow-hidden rounded-xl border border-[color:var(--border)] ${aspectClass}`}
            >
              {type === "video" ? (
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                  src={item.src}
                />
              ) : type === "gif" ? (
                <GifMedia
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              )}
            </div>
            <figcaption className="mt-3 text-xs text-[color:var(--muted)]">
              {item.alt}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}

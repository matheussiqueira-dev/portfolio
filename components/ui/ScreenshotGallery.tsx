import Image from "next/image";

import EncomPanel from "@/components/ui/EncomPanel";
import { pickLocalized } from "@/core/utils";
import type { MediaAsset, SiteLocale } from "@/core/types";

type ScreenshotGalleryProps = {
  items: MediaAsset[];
  locale: SiteLocale;
};

export default function ScreenshotGallery({ items, locale }: ScreenshotGalleryProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {items.map((item) => (
        <EncomPanel key={`${item.src}-${item.type ?? "image"}`} className="p-3">
          <div className="relative overflow-hidden rounded-[1rem] border border-[color:var(--border)] bg-black/40">
            {item.type === "video" ? (
              <video className="h-full w-full" controls preload="metadata" poster={item.poster}>
                <source src={item.src} />
              </video>
            ) : (
              <div className="relative aspect-[16/10]">
                <Image
                  src={item.src}
                  alt={pickLocalized(item.alt, locale)}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
          {item.caption ? (
            <p className="mt-3 text-sm text-[color:var(--muted)]">
              {pickLocalized(item.caption, locale)}
            </p>
          ) : null}
        </EncomPanel>
      ))}
    </div>
  );
}

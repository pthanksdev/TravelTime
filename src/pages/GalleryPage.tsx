import { Camera, Image as ImageIcon } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";

const gallery = [
  "/assets/img/gallery/gallery-1.webp",
  "/assets/img/gallery/gallery-2.webp",
  "/assets/img/gallery/gallery-3.webp",
  "/assets/img/gallery/gallery-4.webp",
  "/assets/img/gallery/gallery-5.webp",
  "/assets/img/gallery/gallery-6.webp",
  "/assets/img/gallery/gallery-7.webp",
  "/assets/img/gallery/gallery-8.webp"
];

export function GalleryPage() {
  return (
    <div className="space-y-8">
      <PageHero
        eyebrow="Gallery"
        title="Moments from recent TravelTime routes."
        description="A visual feed of places, people, and experiences from operator-verified trips."
        imageSrc="/assets/img/travel/showcase-6.webp"
        imageAlt="Travel gallery hero"
      />

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {gallery.map((src, i) => (
          <figure key={src} className="group relative overflow-hidden rounded-2xl border bg-card">
            <img src={src} alt={`Travel gallery ${i + 1}`} className="h-48 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-56" loading="lazy" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-linear-to-t from-black/65 to-transparent px-3 py-2 text-xs text-white">
              <span><Camera className="mr-1 inline size-3" />Capture {i + 1}</span>
              <span><ImageIcon className="mr-1 inline size-3" />TravelTime</span>
            </figcaption>
          </figure>
        ))}
      </section>
    </div>
  );
}


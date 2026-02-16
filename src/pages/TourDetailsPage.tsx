import { Bus, CircleCheck, Hotel, Ticket } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { tours } from "@/features/content/site-data";

const detailImages = [
  "/assets/img/travel/tour-17.webp",
  "/assets/img/travel/tour-18.webp",
  "/assets/img/travel/tour-20.webp",
  "/assets/img/travel/tour-21.webp",
  "/assets/img/travel/tour-22.webp",
  "/assets/img/travel/tour-25.webp"
];

export function TourDetailsPage() {
  return (
    <div className="space-y-8">
      <PageHero
        eyebrow="Tour Details"
        title="Inclusion-level clarity before you book."
        description="Each package shows transport structure, hotel tier, and activity intensity so expectations are explicit."
        imageSrc="/assets/img/travel/tour-28.webp"
        imageAlt="Tour detail"
      />

      <section className="grid gap-4 lg:grid-cols-2">
        {tours.map((tour, idx) => (
          <Card key={tour.name} className="overflow-hidden">
            <img src={detailImages[idx % detailImages.length]} alt={tour.name} className="h-40 w-full object-cover sm:h-44" loading="lazy" />
            <CardHeader>
              <CardTitle>{tour.name}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              <div className="rounded-md border p-3"><Ticket className="mb-1 size-4 text-primary" />{tour.price} starting price</div>
              <div className="rounded-md border p-3"><CircleCheck className="mb-1 size-4 text-primary" />{tour.days} planned days</div>
              <div className="rounded-md border p-3"><Hotel className="mb-1 size-4 text-primary" />{idx % 2 === 0 ? "4-star hotels" : "Boutique mix"}</div>
              <div className="rounded-md border p-3"><Bus className="mb-1 size-4 text-primary" />{idx % 2 === 0 ? "Private transfers" : "Shared + private"}</div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}


import { Bus, CalendarDays, CircleCheck, Hotel, Mountain, Ticket } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
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

      <section className="rounded-2xl border bg-card p-4 sm:p-6">
        <h2 className="mb-3 text-xl font-semibold">Sample itinerary structure</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border p-3 text-sm"><CalendarDays className="mb-2 size-4 text-primary" />Day 1-2: Arrival + city immersion</div>
          <div className="rounded-lg border p-3 text-sm"><Bus className="mb-2 size-4 text-primary" />Day 3-4: Regional transfer + activities</div>
          <div className="rounded-lg border p-3 text-sm"><Mountain className="mb-2 size-4 text-primary" />Day 5-6: Signature experiences</div>
          <div className="rounded-lg border p-3 text-sm"><CircleCheck className="mb-2 size-4 text-primary" />Day 7+: Buffer + departure</div>
        </div>
      </section>

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
              <div className="sm:col-span-2 flex flex-wrap gap-2">
                <Badge variant="outline">Breakfast included</Badge>
                <Badge variant="outline">Activity tickets</Badge>
                <Badge variant="outline">Local support</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}

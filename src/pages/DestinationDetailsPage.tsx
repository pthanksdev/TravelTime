import { Clock3, PlaneTakeoff, ShieldAlert } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { destinations } from "@/features/content/site-data";

const destinationImages = [
  "/assets/img/travel/destination-9.webp",
  "/assets/img/travel/destination-11.webp",
  "/assets/img/travel/destination-12.webp",
  "/assets/img/travel/destination-13.webp",
  "/assets/img/travel/destination-14.webp",
  "/assets/img/travel/destination-15.webp"
];

export function DestinationDetailsPage() {
  return (
    <div className="space-y-8">
      <PageHero
        eyebrow="Destination Details"
        title="Operational briefs for each city before you commit."
        description="Understand route complexity, travel windows, and risk posture across top destinations."
        imageSrc="/assets/img/travel/showcase-11.webp"
        imageAlt="Detailed destination planning"
      />

      <section className="grid gap-4 lg:grid-cols-2">
        {destinations.map((destination, idx) => (
          <Card key={destination.city} className="overflow-hidden">
            <img src={destinationImages[idx % destinationImages.length]} alt={destination.city} className="h-40 w-full object-cover sm:h-44" loading="lazy" />
            <CardHeader>
              <CardTitle>{destination.city}, {destination.country}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>{destination.focus}</p>
              <div className="grid gap-2 sm:grid-cols-3">
                <div className="rounded-md border p-2"><Clock3 className="mb-1 size-4 text-primary" /> Pace: {idx % 2 === 0 ? "Balanced" : "Fast"}</div>
                <div className="rounded-md border p-2"><PlaneTakeoff className="mb-1 size-4 text-primary" /> Access: {idx % 2 === 0 ? "Direct" : "1 transfer"}</div>
                <div className="rounded-md border p-2"><ShieldAlert className="mb-1 size-4 text-primary" /> Risk: Low</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}


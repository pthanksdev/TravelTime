import { CalendarRange, Globe, Mountain, Sparkles, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { destinations } from "@/features/content/site-data";

const destinationImages = [
  "/assets/img/travel/destination-2.webp",
  "/assets/img/travel/destination-3.webp",
  "/assets/img/travel/destination-4.webp",
  "/assets/img/travel/destination-5.webp",
  "/assets/img/travel/destination-7.webp",
  "/assets/img/travel/destination-8.webp"
];

export function DestinationsPage() {
  return (
    <div className="space-y-8">
      <PageHero
        eyebrow="Destinations"
        title="Choose a city profile that matches your travel style."
        description="Every destination includes itinerary pace, best season, and local logistics recommendations."
        imageSrc="/assets/img/travel/showcase-5.webp"
        imageAlt="Destination showcase"
        actions={<Link to="/destination-details"><Button variant="outline">View detailed briefs</Button></Link>}
      />

      <section className="rounded-2xl border bg-card p-4 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-xl font-semibold">Find your ideal destination</h2>
          <Badge variant="secondary">Smart match</Badge>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Input placeholder="Region or city" />
          <Input placeholder="Travel month" />
          <Input placeholder="Travel style" />
          <Button className="w-full">Search destinations</Button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination, index) => (
          <Card key={destination.city} className="overflow-hidden">
            <img src={destinationImages[index % destinationImages.length]} alt={destination.city} className="h-40 w-full object-cover sm:h-44" loading="lazy" />
            <CardHeader>
              <CardTitle>{destination.city}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>{destination.country}</p>
              <p>{destination.focus}</p>
              <div className="flex flex-wrap gap-2 pt-2 text-xs">
                <span className="rounded-full bg-secondary px-2 py-1 text-secondary-foreground"><Globe className="mr-1 inline size-3" /> Urban</span>
                <span className="rounded-full bg-secondary px-2 py-1 text-secondary-foreground"><Mountain className="mr-1 inline size-3" /> Adventure</span>
                <span className="rounded-full bg-secondary px-2 py-1 text-secondary-foreground"><UtensilsCrossed className="mr-1 inline size-3" /> Food</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader><CardTitle className="text-lg">Best Season Match</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground"><CalendarRange className="mb-2 size-5 text-primary" />Plan by weather windows and event seasonality.</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-lg">Experience Density</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground"><Sparkles className="mb-2 size-5 text-primary" />Balance relaxation, activities, and city movement.</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-lg">Logistics Clarity</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground"><Globe className="mb-2 size-5 text-primary" />Understand transfer complexity before booking.</CardContent>
        </Card>
      </section>
    </div>
  );
}

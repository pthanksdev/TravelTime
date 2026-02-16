import { ArrowRight, CalendarClock, Globe2, MapPinned, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/page/PageHero";
import { MetricsGrid } from "@/components/page/MetricsGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { destinations, tours, testimonials } from "@/features/content/site-data";

const highlightImages = [
  "/assets/img/travel/destination-1.webp",
  "/assets/img/travel/destination-6.webp",
  "/assets/img/travel/destination-10.webp"
];

export function HomePage() {
  return (
    <div className="space-y-8">
      <PageHero
        eyebrow="Flagship Experience"
        title="Travel programs designed like products, not random packages."
        description="TravelTime combines verified operators, clear logistics, and intentional itinerary pacing to create better trips with fewer operational surprises."
        imageSrc="/assets/img/travel/showcase-12.webp"
        imageAlt="Travel showcase"
        actions={
          <>
            <Link to="/destinations"><Button>Explore destinations</Button></Link>
            <Link to="/booking"><Button variant="outline">Start booking</Button></Link>
          </>
        }
      />

      <MetricsGrid
        metrics={[
          { label: "Active routes", value: "120+", icon: <Globe2 className="size-4 text-primary" /> },
          { label: "Partner score", value: "4.9/5", icon: <Sparkles className="size-4 text-primary" /> },
          { label: "Avg. reply time", value: "18 min", icon: <CalendarClock className="size-4 text-primary" /> },
          { label: "Cities covered", value: "52", icon: <MapPinned className="size-4 text-primary" /> }
        ]}
      />

      <section className="grid gap-4 md:grid-cols-3">
        {destinations.slice(0, 3).map((item, index) => (
          <Card key={item.city} className="overflow-hidden">
            <img src={highlightImages[index]} alt={item.city} className="h-36 w-full object-cover sm:h-40" loading="lazy" />
            <CardHeader>
              <CardTitle className="text-xl">{item.city}</CardTitle>
              <CardDescription>{item.country}</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground">{item.focus}</CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top tours this month</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {tours.slice(0, 4).map((tour) => (
              <div key={tour.name} className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="font-semibold">{tour.name}</p>
                  <p className="text-sm text-muted-foreground">{tour.region} • {tour.days} days</p>
                </div>
                <p className="font-semibold">{tour.price}</p>
              </div>
            ))}
            <Link to="/tours" className="inline-flex items-center gap-1 text-sm font-medium text-primary">All tours <ArrowRight className="size-4" /></Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What travelers say</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {testimonials.map((entry) => (
              <blockquote key={entry.name} className="rounded-lg border bg-muted/30 p-3 text-sm">
                <p>"{entry.quote}"</p>
                <footer className="mt-1 text-muted-foreground">{entry.name}</footer>
              </blockquote>
            ))}
            <Link to="/testimonials" className="inline-flex items-center gap-1 text-sm font-medium text-primary">See all testimonials <ArrowRight className="size-4" /></Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}


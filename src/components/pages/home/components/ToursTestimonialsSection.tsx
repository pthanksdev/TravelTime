import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Globe2,
  MapPinned,
  Route,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/page/PageHero";
import { MetricsGrid } from "@/components/page/MetricsGrid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { destinations, tours, testimonials } from "@/features/content/site-data";

const highlightImages = [
  "/assets/img/travel/destination-1.webp",
  "/assets/img/travel/destination-6.webp",
  "/assets/img/travel/destination-10.webp"
];

const process = [
  {
    title: "Share your goals",
    description: "Tell us destination interests, dates, and travel style.",
    icon: <Users className="size-5 text-primary" />
  },
  {
    title: "Get a route draft",
    description: "Receive a practical itinerary with pricing and pace.",
    icon: <Route className="size-5 text-primary" />
  },
  {
    title: "Travel with support",
    description: "We track logistics and keep your plan on course.",
    icon: <ShieldCheck className="size-5 text-primary" />
  }
];

export function ToursTestimonialsSection() {
  return (
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
  );
}

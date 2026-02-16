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

export function DestinationsSection() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {destinations.slice(0, 3).map((item, index) => (
        <Card key={item.city} className="overflow-hidden">
          <div className="relative">
            <img src={highlightImages[index]} alt={item.city} className="h-36 w-full object-cover sm:h-40" loading="lazy" />
            <div className="absolute left-2 top-2"><Badge>{item.country}</Badge></div>
          </div>
          <CardHeader>
            <CardTitle className="text-xl">{item.city}</CardTitle>
            <CardDescription>{item.focus}</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/destinations" className="inline-flex items-center gap-1 text-sm font-medium text-primary">
              Explore destination <ArrowRight className="size-4" />
            </Link>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}

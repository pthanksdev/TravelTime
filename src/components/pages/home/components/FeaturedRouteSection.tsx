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

export function FeaturedRouteSection() {
  return (
    <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <Card className="overflow-hidden">
        <img src="/assets/img/travel/showcase-11.webp" alt="Featured route" className="h-64 w-full object-cover sm:h-80" loading="lazy" />
        <CardHeader>
          <CardTitle>Featured Route: Japan in Bloom</CardTitle>
          <CardDescription>
            8-day premium route with balanced city immersion, cultural landmarks, and recovery pacing.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2 text-xs">
          <Badge variant="outline">Tokyo</Badge>
          <Badge variant="outline">Hakone</Badge>
          <Badge variant="outline">Kyoto</Badge>
          <Badge variant="outline">Osaka</Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Why this route works</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          {[
            "Low transfer stress with clustered geography",
            "High experience density without overloading days",
            "Built-in fallback windows for weather and delays",
            "Clear inclusions and transparent upgrade options"
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 rounded-lg border p-3">
              <CheckCircle2 className="mt-0.5 size-4 text-primary" />
              <span>{item}</span>
            </div>
          ))}
          <Link to="/tour-details" className="inline-flex items-center gap-1 text-sm font-medium text-primary">
            View full route details <ArrowRight className="size-4" />
          </Link>
        </CardContent>
      </Card>
    </section>
  );
}

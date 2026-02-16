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

export function CtaSection() {
  return (
    <section className="rounded-2xl border bg-linear-to-r from-primary/10 via-card to-secondary/30 p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-2xl font-semibold">Ready for your next structured trip?</h3>
          <p className="text-muted-foreground">Get a route proposal with timeline, logistics, and clear pricing.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link to="/booking"><Button>Request proposal</Button></Link>
          <Link to="/contact"><Button variant="outline">Talk to planner</Button></Link>
        </div>
      </div>
    </section>
  );
}

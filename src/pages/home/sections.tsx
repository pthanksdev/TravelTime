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

export function HeroSection() {
  return (
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
  );
}

export function MetricsSection() {
  return (
    <MetricsGrid
      metrics={[
        { label: "Active routes", value: "120+", icon: <Globe2 className="size-4 text-primary" /> },
        { label: "Partner score", value: "4.9/5", icon: <Sparkles className="size-4 text-primary" /> },
        { label: "Avg. reply time", value: "18 min", icon: <CalendarClock className="size-4 text-primary" /> },
        { label: "Cities covered", value: "52", icon: <MapPinned className="size-4 text-primary" /> }
      ]}
    />
  );
}

export function PlannerSection() {
  return (
    <section className="rounded-2xl border bg-card p-4 sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="text-xl font-semibold">Quick Trip Planner</h2>
          <p className="text-sm text-muted-foreground">Scope a route in under a minute.</p>
        </div>
        <Badge variant="secondary">Fast estimate</Badge>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Input placeholder="Destination or region" />
        <Input placeholder="Travel month" />
        <Input placeholder="Travelers" />
        <Button className="w-full">Generate proposal</Button>
      </div>
    </section>
  );
}

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

export function ProcessSection() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {process.map((step) => (
        <Card key={step.title}>
          <CardHeader className="space-y-2">
            {step.icon}
            <CardTitle>{step.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">{step.description}</CardContent>
        </Card>
      ))}
    </section>
  );
}

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

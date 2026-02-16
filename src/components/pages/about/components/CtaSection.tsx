import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  Route,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const principles = [
  { title: "Intentional design", desc: "Every route is built with pacing, transfer friction, and recovery windows in mind.", icon: <Route className="size-5 text-primary" /> },
  { title: "Trustworthy ops", desc: "Vetted providers with quality scorecards and issue escalation paths.", icon: <ShieldCheck className="size-5 text-primary" /> },
  { title: "Human support", desc: "Fast response from planners who understand destination-level constraints.", icon: <HeartHandshake className="size-5 text-primary" /> }
];

const workflow = [
  { step: "01", title: "Discovery and constraints", desc: "We capture timeline, budget, traveler preferences, and risk tolerance before designing anything." },
  { step: "02", title: "Route architecture", desc: "Our planners optimize movement, rest windows, and activity density to reduce itinerary fatigue." },
  { step: "03", title: "Supplier validation", desc: "Operators, hotels, and transport partners are scored continuously for reliability and response time." },
  { step: "04", title: "Active execution", desc: "During travel, we monitor route health and provide contingency support for schedule disruptions." }
];

const team = [
  { name: "Maya Chen", role: "Head of Route Design", image: "/assets/img/person/person-f-12.webp" },
  { name: "Lucas Bennett", role: "Operations Lead", image: "/assets/img/person/person-m-12.webp" },
  { name: "Elena Ruiz", role: "Traveler Success", image: "/assets/img/person/person-f-13.webp" }
];

export function CtaSection() {
  return (
    <section className="rounded-2xl border bg-linear-to-r from-primary/10 via-card to-secondary/30 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-background/70 p-4"><Route className="mb-2 size-5 text-primary" /><p className="text-sm text-muted-foreground">Route optimization</p></div>
        <div className="rounded-lg border bg-background/70 p-4"><Clock3 className="mb-2 size-5 text-primary" /><p className="text-sm text-muted-foreground">24/7 operations tracking</p></div>
        <div className="rounded-lg border bg-background/70 p-4"><Users className="mb-2 size-5 text-primary" /><p className="text-sm text-muted-foreground">Local expert network</p></div>
        <div className="rounded-lg border bg-background/70 p-4"><Sparkles className="mb-2 size-5 text-primary" /><p className="text-sm text-muted-foreground">Premium experience design</p></div>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div><h3 className="text-2xl font-semibold">Plan your next route with our team</h3><p className="text-muted-foreground">Get a structured itinerary proposal and clear execution plan.</p></div>
        <div className="flex flex-wrap gap-2">
          <Link to="/booking"><Button>Start planning</Button></Link>
          <Link to="/contact"><Button variant="outline">Contact us <ArrowRight className="size-4" /></Button></Link>
        </div>
      </div>
    </section>
  );
}

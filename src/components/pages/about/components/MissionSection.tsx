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

export function MissionSection() {
  return (
    <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
      <Card>
        <CardHeader>
          <CardTitle>Our mission</CardTitle>
          <CardDescription>Build travel programs that feel inspiring to travelers and reliable for operations teams.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>We focus on one core outcome: high-quality travel experiences delivered with low logistics friction.</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Design-led planning</Badge>
            <Badge variant="secondary">Verified operators</Badge>
            <Badge variant="secondary">Transparent pricing</Badge>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Trust at a glance</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex items-center justify-between rounded-lg border p-3"><span className="text-muted-foreground">Partner quality score</span><span className="font-semibold">4.9/5</span></div>
          <div className="flex items-center justify-between rounded-lg border p-3"><span className="text-muted-foreground">Average support response</span><span className="font-semibold">18 min</span></div>
          <div className="flex items-center justify-between rounded-lg border p-3"><span className="text-muted-foreground">Cities covered</span><span className="font-semibold">52</span></div>
          <div className="flex items-center justify-between rounded-lg border p-3"><span className="text-muted-foreground">Routes delivered</span><span className="font-semibold">120+</span></div>
        </CardContent>
      </Card>
    </section>
  );
}

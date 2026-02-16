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

export function WorkSection() {
  return (
    <section className="grid gap-4 rounded-2xl border bg-card p-5 sm:p-6 md:grid-cols-2 md:p-8">
      <img src="/assets/img/travel/showcase-3.webp" alt="Team travel planning" className="h-56 w-full rounded-xl object-cover sm:h-64 lg:h-full" loading="lazy" />
      <div>
        <h2 className="text-2xl font-semibold">How we work</h2>
        <div className="mt-4 grid gap-3">
          {["Route feasibility analysis", "Supplier validation and scoring", "Contingency checkpoints", "Traveler preference modeling"].map((item) => (
            <div key={item} className="flex items-center gap-2 rounded-md border p-3 text-sm">
              <CheckCircle2 className="size-4 text-primary" />{item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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

export function HeroSection() {
  return (
    <PageHero
      eyebrow="About TravelTime"
      title="We treat trip planning as an operations problem and a design problem."
      description="Our system connects local experts, live logistics, and itinerary design patterns to produce consistently better travel outcomes."
      imageSrc="/assets/img/travel/misc-12.webp"
      imageAlt="Travel planning"
    />
  );
}

import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  MapPinned,
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
  {
    title: "Intentional design",
    desc: "Every route is built with pacing, transfer friction, and recovery windows in mind.",
    icon: <Route className="size-5 text-primary" />
  },
  {
    title: "Trustworthy ops",
    desc: "Vetted providers with quality scorecards and issue escalation paths.",
    icon: <ShieldCheck className="size-5 text-primary" />
  },
  {
    title: "Human support",
    desc: "Fast response from planners who understand destination-level constraints.",
    icon: <HeartHandshake className="size-5 text-primary" />
  }
];

const workflow = [
  {
    step: "01",
    title: "Discovery and constraints",
    desc: "We capture timeline, budget, traveler preferences, and risk tolerance before designing anything."
  },
  {
    step: "02",
    title: "Route architecture",
    desc: "Our planners optimize movement, rest windows, and activity density to reduce itinerary fatigue."
  },
  {
    step: "03",
    title: "Supplier validation",
    desc: "Operators, hotels, and transport partners are scored continuously for reliability and response time."
  },
  {
    step: "04",
    title: "Active execution",
    desc: "During travel, we monitor route health and provide contingency support for schedule disruptions."
  }
];

const team = [
  {
    name: "Maya Chen",
    role: "Head of Route Design",
    image: "/assets/img/person/person-f-12.webp"
  },
  {
    name: "Lucas Bennett",
    role: "Operations Lead",
    image: "/assets/img/person/person-m-12.webp"
  },
  {
    name: "Elena Ruiz",
    role: "Traveler Success",
    image: "/assets/img/person/person-f-13.webp"
  }
];

export function AboutPage() {
  return (
    <div className="space-y-8">
      <PageHero
        eyebrow="About TravelTime"
        title="We treat trip planning as an operations problem and a design problem."
        description="Our system connects local experts, live logistics, and itinerary design patterns to produce consistently better travel outcomes."
        imageSrc="/assets/img/travel/misc-12.webp"
        imageAlt="Travel planning"
      />

      <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>Our mission</CardTitle>
            <CardDescription>
              Build travel programs that feel inspiring to travelers and reliable for operations teams.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              We focus on one core outcome: high-quality travel experiences delivered with low logistics friction.
              That requires strong route design, trusted suppliers, and support systems that react quickly.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Design-led planning</Badge>
              <Badge variant="secondary">Verified operators</Badge>
              <Badge variant="secondary">Transparent pricing</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Trust at a glance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-center justify-between rounded-lg border p-3"><span className="text-muted-foreground">Partner quality score</span><span className="font-semibold">4.9/5</span></div>
            <div className="flex items-center justify-between rounded-lg border p-3"><span className="text-muted-foreground">Average support response</span><span className="font-semibold">18 min</span></div>
            <div className="flex items-center justify-between rounded-lg border p-3"><span className="text-muted-foreground">Cities covered</span><span className="font-semibold">52</span></div>
            <div className="flex items-center justify-between rounded-lg border p-3"><span className="text-muted-foreground">Routes delivered</span><span className="font-semibold">120+</span></div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {principles.map((item) => (
          <Card key={item.title}>
            <CardHeader className="space-y-2">
              {item.icon}
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{item.desc}</CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 rounded-2xl border bg-card p-5 sm:p-6 md:grid-cols-2 md:p-8">
        <img
          src="/assets/img/travel/showcase-3.webp"
          alt="Team travel planning"
          className="h-56 w-full rounded-xl object-cover sm:h-64 lg:h-full"
          loading="lazy"
        />
        <div>
          <h2 className="text-2xl font-semibold">How we work</h2>
          <div className="mt-4 grid gap-3">
            {[
              "Route feasibility analysis",
              "Supplier validation and scoring",
              "Contingency checkpoints",
              "Traveler preference modeling"
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-md border p-3 text-sm">
                <CheckCircle2 className="size-4 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Operating model</h2>
          <Badge variant="outline">Process clarity</Badge>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {workflow.map((item) => (
            <Card key={item.step}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <span className="rounded-md bg-primary/10 px-2 py-1 text-xs text-primary">{item.step}</span>
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{item.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Leadership team</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <img src={member.image} alt={member.name} className="h-52 w-full object-cover" loading="lazy" />
              <CardHeader>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border bg-linear-to-r from-primary/10 via-card to-secondary/30 p-6 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border bg-background/70 p-4">
            <Route className="mb-2 size-5 text-primary" />
            <p className="text-sm text-muted-foreground">Route optimization</p>
          </div>
          <div className="rounded-lg border bg-background/70 p-4">
            <Clock3 className="mb-2 size-5 text-primary" />
            <p className="text-sm text-muted-foreground">24/7 operations tracking</p>
          </div>
          <div className="rounded-lg border bg-background/70 p-4">
            <Users className="mb-2 size-5 text-primary" />
            <p className="text-sm text-muted-foreground">Local expert network</p>
          </div>
          <div className="rounded-lg border bg-background/70 p-4">
            <Sparkles className="mb-2 size-5 text-primary" />
            <p className="text-sm text-muted-foreground">Premium experience design</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-semibold">Plan your next route with our team</h3>
            <p className="text-muted-foreground">Get a structured itinerary proposal and clear execution plan.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to="/booking"><Button>Start planning</Button></Link>
            <Link to="/contact"><Button variant="outline">Contact us <ArrowRight className="size-4" /></Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

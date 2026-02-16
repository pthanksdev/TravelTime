import { CheckCircle2, HeartHandshake, Route, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const principles = [
  { title: "Intentional design", desc: "Every route is built with pacing, transfer friction, and recovery windows in mind.", icon: <Route className="size-5 text-primary" /> },
  { title: "Trustworthy ops", desc: "Vetted providers with quality scorecards and issue escalation paths.", icon: <ShieldCheck className="size-5 text-primary" /> },
  { title: "Human support", desc: "Fast response from planners who understand destination-level constraints.", icon: <HeartHandshake className="size-5 text-primary" /> }
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

      <section className="grid gap-4 rounded-2xl border bg-card p-6 md:grid-cols-2 md:p-8">
        <img src="/assets/img/travel/showcase-3.webp" alt="Team travel planning" className="h-52 w-full rounded-xl object-cover sm:h-64" loading="lazy" />
        <div>
          <h2 className="text-2xl font-semibold">How we work</h2>
          <div className="mt-4 grid gap-3">
            {["Route feasibility analysis", "Supplier validation and scoring", "Contingency checkpoints", "Traveler preference modeling"].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-md border p-3 text-sm">
                <CheckCircle2 className="size-4 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


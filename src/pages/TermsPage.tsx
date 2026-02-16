import { PageHero } from "@/components/page/PageHero";
import { Card, CardContent } from "@/components/ui/card";

const sections = [
  "Booking terms and payment timelines",
  "Traveler responsibilities and required documents",
  "Supplier substitution and service continuity",
  "Cancellations and refund windows",
  "Liability limits and force majeure"
];

export function TermsPage() {
  return (
    <div className="space-y-8">
      <PageHero
        eyebrow="Terms"
        title="Service terms for TravelTime programs."
        description="This summary explains key contractual obligations and operating assumptions."
        imageSrc="/assets/img/travel/misc-2.webp"
        imageAlt="Terms and conditions"
      />

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-3">
          {sections.map((section) => (
            <Card key={section}><CardContent className="pt-6 text-sm text-muted-foreground">{section}</CardContent></Card>
          ))}
        </div>
        <img src="/assets/img/travel/misc-11.webp" alt="Travel documents" className="h-56 w-full rounded-2xl border object-cover sm:h-72 lg:h-full" loading="lazy" />
      </section>
    </div>
  );
}


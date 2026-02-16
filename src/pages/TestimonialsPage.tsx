import { Quote } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  { quote: "The itinerary was ambitious but never exhausting.", name: "Alyssa M.", role: "New York" },
  { quote: "Support team answered every change request fast.", name: "Daniel K.", role: "Chicago" },
  { quote: "Best structured trip we have done as a family.", name: "Rina P.", role: "Seattle" },
  { quote: "Clear pricing and no hidden logistics surprises.", name: "Marco T.", role: "Austin" }
];

const portraits = [
  "/assets/img/person/person-f-5.webp",
  "/assets/img/person/person-m-7.webp",
  "/assets/img/person/person-f-8.webp",
  "/assets/img/person/person-m-9.webp"
];

export function TestimonialsPage() {
  return (
    <div className="space-y-8">
      <PageHero
        eyebrow="Testimonials"
        title="Feedback from travelers across routes and trip types."
        description="Consistent satisfaction comes from route quality, communication clarity, and reliable operations."
        imageSrc="/assets/img/travel/showcase-7.webp"
        imageAlt="Happy travelers"
      />

      <section className="grid gap-4 md:grid-cols-2">
        {reviews.map((review, index) => (
          <Card key={review.name} className="overflow-hidden">
            <img src={portraits[index]} alt={review.name} className="h-44 w-full object-cover sm:h-52" loading="lazy" />
            <CardContent className="pt-6 text-sm">
              <Quote className="mb-3 size-5 text-primary" />
              <p className="text-base">"{review.quote}"</p>
              <p className="mt-3 font-medium">{review.name}</p>
              <p className="text-muted-foreground">{review.role}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}


import { Link } from "react-router-dom";
import { PageHero } from "@/components/page/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { tours } from "@/features/content/site-data";

const tourImages = [
  "/assets/img/travel/tour-4.webp",
  "/assets/img/travel/tour-8.webp",
  "/assets/img/travel/tour-9.webp",
  "/assets/img/travel/tour-10.webp",
  "/assets/img/travel/tour-12.webp",
  "/assets/img/travel/tour-15.webp"
];

export function ToursPage() {
  return (
    <div className="space-y-8">
      <PageHero
        eyebrow="Tours"
        title="Multi-day routes built for quality and reliability."
        description="Choose from proven itineraries with documented logistics and transparent inclusions."
        imageSrc="/assets/img/travel/tour-16.webp"
        imageAlt="Tour adventure"
        actions={<Link to="/tour-details"><Button variant="outline">Compare tour details</Button></Link>}
      />

      <section className="grid gap-4 md:grid-cols-2">
        {tours.map((tour, index) => (
          <Card key={tour.name} className="overflow-hidden">
            <img src={tourImages[index % tourImages.length]} alt={tour.name} className="h-40 w-full object-cover sm:h-44" loading="lazy" />
            <CardHeader>
              <CardTitle>{tour.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Region: {tour.region}</p>
              <p>Duration: {tour.days} days</p>
              <p>From: <span className="font-semibold text-foreground">{tour.price}</span></p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}


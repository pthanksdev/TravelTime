import {
  CtaSection,
  DestinationsSection,
  FeaturedRouteSection,
  HeroSection,
  MetricsSection,
  PlannerSection,
  ProcessSection,
  ToursTestimonialsSection
} from "./sections";

export function HomePage() {
  return (
    <div className="space-y-8">
      <HeroSection />
      <MetricsSection />
      <PlannerSection />
      <FeaturedRouteSection />
      <DestinationsSection />
      <ProcessSection />
      <ToursTestimonialsSection />
      <CtaSection />
    </div>
  );
}

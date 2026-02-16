import { CtaSection, HeroSection, MissionSection, OperatingModelSection, PrinciplesSection, TeamSection, WorkSection } from "@/components/pages/about/sections";

export function AboutPage() {
  return (
    <div className="space-y-8">
      <HeroSection />
      <MissionSection />
      <PrinciplesSection />
      <WorkSection />
      <OperatingModelSection />
      <TeamSection />
      <CtaSection />
    </div>
  );
}


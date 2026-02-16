import { WandSparkles } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Card, CardContent } from "@/components/ui/card";

export function StarterPage() {
  return (
    <div className="space-y-8">
      <PageHero
        eyebrow="Starter Page"
        title="A ready-made base for new route-specific experiences."
        description="Use this screen as the seed for new campaigns, regional landing pages, or feature experiments."
        imageSrc="/assets/img/travel/showcase-8.webp"
        imageAlt="Starter page concept"
      />

      <section className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-6 text-sm text-muted-foreground">
            <WandSparkles className="mb-2 size-5 text-primary" />
            This page intentionally stays flexible so you can clone it for future sections without changing core layout structure.
          </CardContent>
        </Card>
        <img src="/assets/img/travel/misc-8.webp" alt="Creative planning" className="h-56 w-full rounded-2xl border object-cover sm:h-72" loading="lazy" />
      </section>
    </div>
  );
}


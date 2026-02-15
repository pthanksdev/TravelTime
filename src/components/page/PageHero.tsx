import { type ReactNode } from "react";
import { Badge } from "@/components/ui/badge";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
};

export function PageHero({ eyebrow, title, description, actions, imageSrc, imageAlt }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-border/80 bg-card p-5 shadow-sm sm:p-8 md:p-10">
      <div className="absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 blur-2xl" />
      <div className="absolute -bottom-20 left-10 size-52 rounded-full bg-secondary/60 blur-2xl" />
      <div className="relative grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <Badge variant="secondary">{eyebrow}</Badge>
          <h1 className="max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">{title}</h1>
          <p className="max-w-3xl text-base text-muted-foreground md:text-lg">{description}</p>
          {actions ? <div className="flex flex-wrap gap-3 pt-1">{actions}</div> : null}
        </div>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt ?? title}
            className="h-52 w-full rounded-xl object-cover shadow-sm sm:h-64 lg:h-72"
            loading="lazy"
          />
        ) : null}
      </div>
    </section>
  );
}

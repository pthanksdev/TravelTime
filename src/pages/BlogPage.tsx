import { Clock4, MoveRight, Newspaper, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const posts = [
  {
    title: "How to sequence multi-country travel",
    blurb: "Reduce transfer fatigue by structuring your route around recovery windows.",
    read: "6 min",
    image: "/assets/img/blog/blog-post-1.webp"
  },
  {
    title: "Choosing hotel zones intelligently",
    blurb: "Neighborhood selection affects budget, safety, and transfer time.",
    read: "4 min",
    image: "/assets/img/blog/blog-post-2.webp"
  },
  {
    title: "The practical packing matrix",
    blurb: "Pack by climate variance and activity, not destination stereotypes.",
    read: "5 min",
    image: "/assets/img/blog/blog-post-3.webp"
  }
];

export function BlogPage() {
  return (
    <div className="space-y-8">
      <PageHero
        eyebrow="Blog"
        title="Travel insights built for decision quality."
        description="Practical writing on route planning, operations, and traveler experience design."
        imageSrc="/assets/img/blog/blog-hero-9.webp"
        imageAlt="Travel blog"
      />

      <section className="rounded-2xl border bg-card p-4 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-xl font-semibold">Featured insight</h2>
          <Badge variant="secondary"><Sparkles className="mr-1 inline size-3" />Editor pick</Badge>
        </div>
        <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
          <img src="/assets/img/blog/blog-post-6.webp" alt="Featured blog" className="h-56 w-full rounded-xl object-cover sm:h-72" loading="lazy" />
          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="text-base font-medium text-foreground">Why smart routes beat aggressive itineraries</p>
            <p>Trips fail when transfer costs are ignored. Better plans balance movement, rest, and flexibility windows.</p>
            <Link to="/blog-details" className="inline-flex items-center gap-1 text-primary">Read article <MoveRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.title} className="overflow-hidden">
            <img src={post.image} alt={post.title} className="h-40 w-full object-cover sm:h-44" loading="lazy" />
            <CardHeader>
              <CardTitle className="text-xl">{post.title}</CardTitle>
              <CardDescription>{post.blurb}</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground"><Clock4 className="mr-1 inline size-4" />{post.read}</span>
              <Link to="/blog-details" className="inline-flex items-center gap-1 text-primary">Read <MoveRight className="size-4" /></Link>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="rounded-2xl border bg-card p-4 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold">Get monthly travel intelligence</h3>
            <p className="text-sm text-muted-foreground">Research-backed route advice and destination updates.</p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Input placeholder="Email address" />
            <Button><Newspaper className="mr-1 size-4" />Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Clock4, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/page/PageHero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    </div>
  );
}


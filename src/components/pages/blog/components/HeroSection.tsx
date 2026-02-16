import { Clock4, MoveRight, Newspaper, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
const posts=[{title:"How to sequence multi-country travel",blurb:"Reduce transfer fatigue by structuring your route around recovery windows.",read:"6 min",image:"/assets/img/blog/blog-post-1.webp"},{title:"Choosing hotel zones intelligently",blurb:"Neighborhood selection affects budget, safety, and transfer time.",read:"4 min",image:"/assets/img/blog/blog-post-2.webp"},{title:"The practical packing matrix",blurb:"Pack by climate variance and activity, not destination stereotypes.",read:"5 min",image:"/assets/img/blog/blog-post-3.webp"}];

export function HeroSection(){return <PageHero eyebrow="Blog" title="Travel insights built for decision quality." description="Practical writing on route planning, operations, and traveler experience design." imageSrc="/assets/img/blog/blog-hero-9.webp" imageAlt="Travel blog" />;}

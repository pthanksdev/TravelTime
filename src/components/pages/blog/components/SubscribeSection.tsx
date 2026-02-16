import { Clock4, MoveRight, Newspaper, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
const posts=[{title:"How to sequence multi-country travel",blurb:"Reduce transfer fatigue by structuring your route around recovery windows.",read:"6 min",image:"/assets/img/blog/blog-post-1.webp"},{title:"Choosing hotel zones intelligently",blurb:"Neighborhood selection affects budget, safety, and transfer time.",read:"4 min",image:"/assets/img/blog/blog-post-2.webp"},{title:"The practical packing matrix",blurb:"Pack by climate variance and activity, not destination stereotypes.",read:"5 min",image:"/assets/img/blog/blog-post-3.webp"}];

export function SubscribeSection(){return <section className="rounded-2xl border bg-card p-4 sm:p-6"><div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><h3 className="text-xl font-semibold">Get monthly travel intelligence</h3><p className="text-sm text-muted-foreground">Research-backed route advice and destination updates.</p></div><div className="flex flex-col gap-2 sm:flex-row"><Input placeholder="Email address" /><Button><Newspaper className="mr-1 size-4" />Subscribe</Button></div></div></section>;}

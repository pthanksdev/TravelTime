import { CheckCircle2, Link2, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { tours } from "@/features/content/site-data";
const tourImages=["/assets/img/travel/tour-4.webp","/assets/img/travel/tour-8.webp","/assets/img/travel/tour-9.webp","/assets/img/travel/tour-10.webp","/assets/img/travel/tour-12.webp","/assets/img/travel/tour-15.webp"];

export function GridSection(){return <section className="grid gap-4 md:grid-cols-2">{tours.map((tour,index)=><Card key={tour.name} className="overflow-hidden"><img src={tourImages[index % tourImages.length]} alt={tour.name} className="h-40 w-full object-cover sm:h-44" loading="lazy" /><CardHeader><CardTitle>{tour.name}</CardTitle></CardHeader><CardContent className="space-y-2 text-sm text-muted-foreground"><p>Region: {tour.region}</p><p>Duration: {tour.days} days</p><p>From: <span className="font-semibold text-foreground">{tour.price}</span></p><div className="flex flex-wrap gap-2 pt-1"><Badge variant="outline">Small group</Badge><Badge variant="outline">Guide included</Badge><Badge variant="outline">Flexible add-ons</Badge></div></CardContent></Card>)}</section>;}

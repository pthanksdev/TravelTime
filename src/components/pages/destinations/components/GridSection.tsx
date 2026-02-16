import { CalendarRange, Globe, Mountain, Sparkles, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { destinations } from "@/features/content/site-data";

const destinationImages = ["/assets/img/travel/destination-2.webp","/assets/img/travel/destination-3.webp","/assets/img/travel/destination-4.webp","/assets/img/travel/destination-5.webp","/assets/img/travel/destination-7.webp","/assets/img/travel/destination-8.webp"];

export function GridSection(){return <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{destinations.map((destination,index)=><Card key={destination.city} className="overflow-hidden"><img src={destinationImages[index % destinationImages.length]} alt={destination.city} className="h-40 w-full object-cover sm:h-44" loading="lazy" /><CardHeader><CardTitle>{destination.city}</CardTitle></CardHeader><CardContent className="space-y-2 text-sm text-muted-foreground"><p>{destination.country}</p><p>{destination.focus}</p><div className="flex flex-wrap gap-2 pt-2 text-xs"><span className="rounded-full bg-secondary px-2 py-1 text-secondary-foreground"><Globe className="mr-1 inline size-3" /> Urban</span><span className="rounded-full bg-secondary px-2 py-1 text-secondary-foreground"><Mountain className="mr-1 inline size-3" /> Adventure</span><span className="rounded-full bg-secondary px-2 py-1 text-secondary-foreground"><UtensilsCrossed className="mr-1 inline size-3" /> Food</span></div></CardContent></Card>)}</section>;}

import { CalendarRange, Globe, Mountain, Sparkles, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { destinations } from "@/features/content/site-data";

const destinationImages = ["/assets/img/travel/destination-2.webp","/assets/img/travel/destination-3.webp","/assets/img/travel/destination-4.webp","/assets/img/travel/destination-5.webp","/assets/img/travel/destination-7.webp","/assets/img/travel/destination-8.webp"];

export function FeatureCardsSection(){return <section className="grid gap-4 md:grid-cols-3"><Card><CardHeader><CardTitle className="text-lg">Best Season Match</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground"><CalendarRange className="mb-2 size-5 text-primary" />Plan by weather windows and event seasonality.</CardContent></Card><Card><CardHeader><CardTitle className="text-lg">Experience Density</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground"><Sparkles className="mb-2 size-5 text-primary" />Balance relaxation, activities, and city movement.</CardContent></Card><Card><CardHeader><CardTitle className="text-lg">Logistics Clarity</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground"><Globe className="mb-2 size-5 text-primary" />Understand transfer complexity before booking.</CardContent></Card></section>;}

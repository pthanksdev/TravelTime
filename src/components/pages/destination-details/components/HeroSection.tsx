import { Clock3, PlaneTakeoff, ShieldAlert, ThermometerSun, Waves } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { destinations } from "@/features/content/site-data";
const destinationImages=["/assets/img/travel/destination-9.webp","/assets/img/travel/destination-11.webp","/assets/img/travel/destination-12.webp","/assets/img/travel/destination-13.webp","/assets/img/travel/destination-14.webp","/assets/img/travel/destination-15.webp"];

export function HeroSection(){return <PageHero eyebrow="Destination Details" title="Operational briefs for each city before you commit." description="Understand route complexity, travel windows, and risk posture across top destinations." imageSrc="/assets/img/travel/showcase-11.webp" imageAlt="Detailed destination planning" />;}

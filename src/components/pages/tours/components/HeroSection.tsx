import { CheckCircle2, Link2, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { tours } from "@/features/content/site-data";
const tourImages=["/assets/img/travel/tour-4.webp","/assets/img/travel/tour-8.webp","/assets/img/travel/tour-9.webp","/assets/img/travel/tour-10.webp","/assets/img/travel/tour-12.webp","/assets/img/travel/tour-15.webp"];

export function HeroSection(){return <PageHero eyebrow="Tours" title="Multi-day routes built for quality and reliability." description="Choose from proven itineraries with documented logistics and transparent inclusions." imageSrc="/assets/img/travel/tour-16.webp" imageAlt="Tour adventure" actions={<Link to="/tour-details"><Button variant="outline">Compare tour details</Button></Link>} />;}

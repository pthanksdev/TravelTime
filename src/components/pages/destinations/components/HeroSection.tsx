import { CalendarRange, Globe, Mountain, Sparkles, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { destinations } from "@/features/content/site-data";

const destinationImages = ["/assets/img/travel/destination-2.webp","/assets/img/travel/destination-3.webp","/assets/img/travel/destination-4.webp","/assets/img/travel/destination-5.webp","/assets/img/travel/destination-7.webp","/assets/img/travel/destination-8.webp"];

export function HeroSection(){return <PageHero eyebrow="Destinations" title="Choose a city profile that matches your travel style." description="Every destination includes itinerary pace, best season, and local logistics recommendations." imageSrc="/assets/img/travel/showcase-5.webp" imageAlt="Destination showcase" actions={<Link to="/destination-details"><Button variant="outline">View detailed briefs</Button></Link>} />;}

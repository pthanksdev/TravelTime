import { Camera, Image as ImageIcon, Layers, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const gallery=["/assets/img/gallery/gallery-1.webp","/assets/img/gallery/gallery-2.webp","/assets/img/gallery/gallery-3.webp","/assets/img/gallery/gallery-4.webp","/assets/img/gallery/gallery-5.webp","/assets/img/gallery/gallery-6.webp","/assets/img/gallery/gallery-7.webp","/assets/img/gallery/gallery-8.webp"];

export function HeroSection(){return <PageHero eyebrow="Gallery" title="Moments from recent TravelTime routes." description="A visual feed of places, people, and experiences from operator-verified trips." imageSrc="/assets/img/travel/showcase-6.webp" imageAlt="Travel gallery hero" />;}

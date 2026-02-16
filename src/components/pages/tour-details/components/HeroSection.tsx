import { Bus, CalendarDays, CircleCheck, Hotel, Mountain, Ticket } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { tours } from "@/features/content/site-data";
const detailImages=["/assets/img/travel/tour-17.webp","/assets/img/travel/tour-18.webp","/assets/img/travel/tour-20.webp","/assets/img/travel/tour-21.webp","/assets/img/travel/tour-22.webp","/assets/img/travel/tour-25.webp"];

export function HeroSection(){return <PageHero eyebrow="Tour Details" title="Inclusion-level clarity before you book." description="Each package shows transport structure, hotel tier, and activity intensity so expectations are explicit." imageSrc="/assets/img/travel/tour-28.webp" imageAlt="Tour detail" />;}

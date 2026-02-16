import { ChevronDown } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Card, CardContent } from "@/components/ui/card";
const faqs=[{q:"How quickly do you send itinerary proposals?",a:"Initial proposals are usually delivered within the same business day."},{q:"Can I request custom route changes?",a:"Yes. We support custom pacing, hotel tier changes, and activity swaps."},{q:"Do you handle visa requirements?",a:"We provide guidance and timing reminders, while formal applications remain with the traveler."},{q:"What happens if flights change?",a:"We provide fallback options and route adjustments through support."}];

export function HeroSection(){return <PageHero eyebrow="FAQ" title="Answers to common planning and booking questions." description="Everything from route customization to payment and support expectations." imageSrc="/assets/img/travel/misc-5.webp" imageAlt="FAQ support" />;}

import { Quote } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Card, CardContent } from "@/components/ui/card";
const reviews=[{quote:"The itinerary was ambitious but never exhausting.",name:"Alyssa M.",role:"New York"},{quote:"Support team answered every change request fast.",name:"Daniel K.",role:"Chicago"},{quote:"Best structured trip we have done as a family.",name:"Rina P.",role:"Seattle"},{quote:"Clear pricing and no hidden logistics surprises.",name:"Marco T.",role:"Austin"}];
const portraits=["/assets/img/person/person-f-5.webp","/assets/img/person/person-m-7.webp","/assets/img/person/person-f-8.webp","/assets/img/person/person-m-9.webp"];

export function HeroSection(){return <PageHero eyebrow="Testimonials" title="Feedback from travelers across routes and trip types." description="Consistent satisfaction comes from route quality, communication clarity, and reliable operations." imageSrc="/assets/img/travel/showcase-7.webp" imageAlt="Happy travelers" />;}

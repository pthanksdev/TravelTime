import { PageHero } from "@/components/page/PageHero";
import { Card, CardContent } from "@/components/ui/card";
const sections=["Booking terms and payment timelines","Traveler responsibilities and required documents","Supplier substitution and service continuity","Cancellations and refund windows","Liability limits and force majeure"];

export function HeroSection(){return <PageHero eyebrow="Terms" title="Service terms for TravelTime programs." description="This summary explains key contractual obligations and operating assumptions." imageSrc="/assets/img/travel/misc-2.webp" imageAlt="Terms and conditions" />;}

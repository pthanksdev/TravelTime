import { Bus, CalendarDays, CircleCheck, Hotel, Mountain, Ticket } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { tours } from "@/features/content/site-data";
const detailImages=["/assets/img/travel/tour-17.webp","/assets/img/travel/tour-18.webp","/assets/img/travel/tour-20.webp","/assets/img/travel/tour-21.webp","/assets/img/travel/tour-22.webp","/assets/img/travel/tour-25.webp"];

export function ItinerarySection(){return <section className="rounded-2xl border bg-card p-4 sm:p-6"><h2 className="mb-3 text-xl font-semibold">Sample itinerary structure</h2><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><div className="rounded-lg border p-3 text-sm"><CalendarDays className="mb-2 size-4 text-primary" />Day 1-2: Arrival + city immersion</div><div className="rounded-lg border p-3 text-sm"><Bus className="mb-2 size-4 text-primary" />Day 3-4: Regional transfer + activities</div><div className="rounded-lg border p-3 text-sm"><Mountain className="mb-2 size-4 text-primary" />Day 5-6: Signature experiences</div><div className="rounded-lg border p-3 text-sm"><CircleCheck className="mb-2 size-4 text-primary" />Day 7+: Buffer + departure</div></div></section>;}

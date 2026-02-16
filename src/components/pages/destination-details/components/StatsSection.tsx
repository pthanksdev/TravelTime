import { Clock3, PlaneTakeoff, ShieldAlert, ThermometerSun, Waves } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { destinations } from "@/features/content/site-data";
const destinationImages=["/assets/img/travel/destination-9.webp","/assets/img/travel/destination-11.webp","/assets/img/travel/destination-12.webp","/assets/img/travel/destination-13.webp","/assets/img/travel/destination-14.webp","/assets/img/travel/destination-15.webp"];

export function StatsSection(){return <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><Card><CardContent className="pt-6 text-sm"><Clock3 className="mb-2 size-5 text-primary" />Average day pace score</CardContent></Card><Card><CardContent className="pt-6 text-sm"><PlaneTakeoff className="mb-2 size-5 text-primary" />Transfer complexity index</CardContent></Card><Card><CardContent className="pt-6 text-sm"><ThermometerSun className="mb-2 size-5 text-primary" />Seasonal comfort rating</CardContent></Card><Card><CardContent className="pt-6 text-sm"><ShieldAlert className="mb-2 size-5 text-primary" />Operational risk posture</CardContent></Card></section>;}

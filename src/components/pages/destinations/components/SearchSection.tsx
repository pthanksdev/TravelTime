import { CalendarRange, Globe, Mountain, Sparkles, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { destinations } from "@/features/content/site-data";

const destinationImages = ["/assets/img/travel/destination-2.webp","/assets/img/travel/destination-3.webp","/assets/img/travel/destination-4.webp","/assets/img/travel/destination-5.webp","/assets/img/travel/destination-7.webp","/assets/img/travel/destination-8.webp"];

export function SearchSection(){return <section className="rounded-2xl border bg-card p-4 sm:p-6"><div className="mb-4 flex flex-wrap items-center justify-between gap-2"><h2 className="text-xl font-semibold">Find your ideal destination</h2><Badge variant="secondary">Smart match</Badge></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><Input placeholder="Region or city" /><Input placeholder="Travel month" /><Input placeholder="Travel style" /><Button className="w-full">Search destinations</Button></div></section>;}

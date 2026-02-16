import { Clock3, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactCardsSection(){return <section className="grid gap-4 lg:grid-cols-3"><Card><CardContent className="pt-6 text-sm"><Mail className="mb-1 size-5 text-primary" />hello@traveltime.com</CardContent></Card><Card><CardContent className="pt-6 text-sm"><Phone className="mb-1 size-5 text-primary" />+1 (555) 342-1188</CardContent></Card><Card><CardContent className="pt-6 text-sm"><MapPin className="mb-1 size-5 text-primary" />Los Angeles, CA</CardContent></Card></section>;}

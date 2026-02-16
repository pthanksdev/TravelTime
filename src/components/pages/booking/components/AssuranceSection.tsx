import { CalendarDays, CreditCard, ShieldCheck, Users } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function AssuranceSection(){return <section className="rounded-2xl border bg-card p-4 sm:p-6 text-sm text-muted-foreground"><p className="flex items-center gap-2"><ShieldCheck className="size-4 text-primary" /> Secure handling of booking details and transparent terms before payment.</p></section>;}

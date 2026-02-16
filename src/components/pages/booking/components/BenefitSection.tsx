import { CalendarDays, CreditCard, ShieldCheck, Users } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function BenefitSection(){return <section className="grid gap-4 lg:grid-cols-3"><Card><CardContent className="pt-6 text-sm"><CalendarDays className="mb-2 size-5 text-primary" />Flexible date windows</CardContent></Card><Card><CardContent className="pt-6 text-sm"><Users className="mb-2 size-5 text-primary" />Solo to group planning</CardContent></Card><Card><CardContent className="pt-6 text-sm"><CreditCard className="mb-2 size-5 text-primary" />Transparent payment flow</CardContent></Card></section>;}

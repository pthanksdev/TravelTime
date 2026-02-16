import { Clock3, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ServiceLevelSection(){return <section className="rounded-2xl border bg-card p-4 sm:p-6"><h2 className="mb-3 text-xl font-semibold">Service levels</h2><div className="grid gap-3 sm:grid-cols-3 text-sm"><div className="rounded-lg border p-3"><Clock3 className="mb-2 size-4 text-primary" />General response: within 18 minutes</div><div className="rounded-lg border p-3"><Badge>Priority</Badge><p className="mt-2">In-trip support escalation available</p></div><div className="rounded-lg border p-3"><ShieldCheck className="mb-2 size-4 text-primary" />Secure handling of traveler data</div></div></section>;}

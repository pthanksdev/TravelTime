import { CalendarDays, CreditCard, ShieldCheck, Users } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ProcessSection(){return <section className="rounded-2xl border bg-card p-4 sm:p-6"><h2 className="mb-3 text-xl font-semibold">Booking process</h2><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm"><div className="rounded-lg border p-3"><Badge>1</Badge><p className="mt-2">Submit trip request</p></div><div className="rounded-lg border p-3"><Badge>2</Badge><p className="mt-2">Receive route proposal</p></div><div className="rounded-lg border p-3"><Badge>3</Badge><p className="mt-2">Confirm inclusions</p></div><div className="rounded-lg border p-3"><Badge>4</Badge><p className="mt-2">Secure booking</p></div></div></section>;}

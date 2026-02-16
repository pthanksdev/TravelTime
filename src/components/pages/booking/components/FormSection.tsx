import { CalendarDays, CreditCard, ShieldCheck, Users } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function FormSection(){return <section className="grid gap-4 lg:grid-cols-2"><img src="/assets/img/travel/misc-11.webp" alt="Travel booking" className="h-56 w-full rounded-2xl border object-cover sm:h-72 lg:h-full" loading="lazy" /><Card><CardHeader><CardTitle>Booking request</CardTitle></CardHeader><CardContent className="grid gap-3 md:grid-cols-2"><Input placeholder="Full name" /><Input type="email" placeholder="Email" /><Input placeholder="Destination" /><Input placeholder="Travel dates" /><Input placeholder="Travelers" /><Input placeholder="Budget range" /><div className="md:col-span-2"><Textarea placeholder="Tell us your trip preferences" /></div><div><Button>Request itinerary</Button></div></CardContent></Card></section>;}

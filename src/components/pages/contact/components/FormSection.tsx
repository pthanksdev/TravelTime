import { Clock3, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function FormSection(){return <section className="grid gap-4 lg:grid-cols-2"><img src="/assets/img/travel/misc-3.webp" alt="Customer support" className="h-56 w-full rounded-2xl border object-cover sm:h-72 lg:h-full" loading="lazy" /><Card><CardHeader><CardTitle>Send a message</CardTitle></CardHeader><CardContent className="grid gap-3 md:grid-cols-2"><Input placeholder="Name" /><Input type="email" placeholder="Email" /><Input className="md:col-span-2" placeholder="Subject" /><div className="md:col-span-2"><Textarea placeholder="Your message" /></div><div><Button>Send</Button></div></CardContent></Card></section>;}

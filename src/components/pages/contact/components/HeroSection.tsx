import { Clock3, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function HeroSection(){return <PageHero eyebrow="Contact" title="Talk to a planner about your next route." description="Share your constraints and goals. We respond with a practical scope and recommended path." imageSrc="/assets/img/travel/misc-7.webp" imageAlt="Contact and support" />;}

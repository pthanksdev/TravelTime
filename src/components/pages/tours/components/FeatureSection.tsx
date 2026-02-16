import { CheckCircle2, Link2, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { tours } from "@/features/content/site-data";
const tourImages=["/assets/img/travel/tour-4.webp","/assets/img/travel/tour-8.webp","/assets/img/travel/tour-9.webp","/assets/img/travel/tour-10.webp","/assets/img/travel/tour-12.webp","/assets/img/travel/tour-15.webp"];

export function FeatureSection(){return <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><Card><CardContent className="pt-6 text-sm"><CheckCircle2 className="mb-2 size-5 text-primary" />Verified route templates</CardContent></Card><Card><CardContent className="pt-6 text-sm"><ShieldCheck className="mb-2 size-5 text-primary" />Service quality checkpoints</CardContent></Card><Card><CardContent className="pt-6 text-sm"><Sparkles className="mb-2 size-5 text-primary" />Premium experience mix</CardContent></Card><Card><CardContent className="pt-6 text-sm"><Link2 className="mb-2 size-5 text-primary" />Transparent supplier network</CardContent></Card></section>;}

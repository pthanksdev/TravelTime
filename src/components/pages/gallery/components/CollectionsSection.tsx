import { Camera, Image as ImageIcon, Layers, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const gallery=["/assets/img/gallery/gallery-1.webp","/assets/img/gallery/gallery-2.webp","/assets/img/gallery/gallery-3.webp","/assets/img/gallery/gallery-4.webp","/assets/img/gallery/gallery-5.webp","/assets/img/gallery/gallery-6.webp","/assets/img/gallery/gallery-7.webp","/assets/img/gallery/gallery-8.webp"];

export function CollectionsSection(){return <section className="rounded-2xl border bg-card p-4 sm:p-6"><CardHeader className="px-0 pt-0"><CardTitle className="text-xl">Collections</CardTitle></CardHeader><div className="flex flex-wrap gap-2 text-sm"><Badge variant="outline">Coastal escapes</Badge><Badge variant="outline">Mountain expeditions</Badge><Badge variant="outline">City culture</Badge><Badge variant="outline">Adventure highlights</Badge><Badge variant="outline">Family trips</Badge></div></section>;}

import { Camera, Image as ImageIcon, Layers, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const gallery=["/assets/img/gallery/gallery-1.webp","/assets/img/gallery/gallery-2.webp","/assets/img/gallery/gallery-3.webp","/assets/img/gallery/gallery-4.webp","/assets/img/gallery/gallery-5.webp","/assets/img/gallery/gallery-6.webp","/assets/img/gallery/gallery-7.webp","/assets/img/gallery/gallery-8.webp"];

export function FeatureSection(){return <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><Card><CardContent className="pt-6 text-sm"><Layers className="mb-2 size-5 text-primary" />Curated story collections</CardContent></Card><Card><CardContent className="pt-6 text-sm"><Sparkles className="mb-2 size-5 text-primary" />High-quality route moments</CardContent></Card><Card><CardContent className="pt-6 text-sm"><Camera className="mb-2 size-5 text-primary" />Captured by travelers</CardContent></Card><Card><CardContent className="pt-6 text-sm"><ImageIcon className="mb-2 size-5 text-primary" />Updated every month</CardContent></Card></section>;}

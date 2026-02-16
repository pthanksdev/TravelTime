import { Database, Lock, UserCheck } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Card, CardContent } from "@/components/ui/card";

export function PrivacySection(){return <section className="grid gap-4 lg:grid-cols-2"><div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1"><Card><CardContent className="pt-6 text-sm"><Database className="mb-2 size-5 text-primary" />Data minimization and retention windows</CardContent></Card><Card><CardContent className="pt-6 text-sm"><Lock className="mb-2 size-5 text-primary" />Encryption in transit and at rest</CardContent></Card><Card><CardContent className="pt-6 text-sm"><UserCheck className="mb-2 size-5 text-primary" />Access, update, and deletion requests</CardContent></Card></div><img src="/assets/img/travel/showcase-5.webp" alt="Secure systems" className="h-56 w-full rounded-2xl border object-cover sm:h-72 lg:h-full" loading="lazy" /></section>;}

import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactPage() {
  return (
    <div className="space-y-8">
      <PageHero
        eyebrow="Contact"
        title="Talk to a planner about your next route."
        description="Share your constraints and goals. We respond with a practical scope and recommended path."
        imageSrc="/assets/img/travel/misc-7.webp"
        imageAlt="Contact and support"
      />

      <section className="grid gap-4 lg:grid-cols-3">
        <Card><CardContent className="pt-6 text-sm"><Mail className="mb-1 size-5 text-primary" />hello@traveltime.com</CardContent></Card>
        <Card><CardContent className="pt-6 text-sm"><Phone className="mb-1 size-5 text-primary" />+1 (555) 342-1188</CardContent></Card>
        <Card><CardContent className="pt-6 text-sm"><MapPin className="mb-1 size-5 text-primary" />Los Angeles, CA</CardContent></Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <img src="/assets/img/travel/misc-3.webp" alt="Customer support" className="h-56 w-full rounded-2xl border object-cover sm:h-72 lg:h-full" loading="lazy" />
        <Card>
          <CardHeader><CardTitle>Send a message</CardTitle></CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-2">
            <Input placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input className="md:col-span-2" placeholder="Subject" />
            <div className="md:col-span-2"><Textarea placeholder="Your message" /></div>
            <div><Button>Send</Button></div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}


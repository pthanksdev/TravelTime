import { CalendarDays, CreditCard, Users } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function BookingPage() {
  return (
    <div className="space-y-8">
      <PageHero
        eyebrow="Booking"
        title="Get a scoped travel plan in minutes."
        description="Share destination, dates, and group details. We return a practical quote with itinerary framing and booking options."
        imageSrc="/assets/img/travel/misc-15.webp"
        imageAlt="Booking trip"
      />

      <section className="grid gap-4 lg:grid-cols-3">
        <Card><CardContent className="pt-6 text-sm"><CalendarDays className="mb-2 size-5 text-primary" />Flexible date windows</CardContent></Card>
        <Card><CardContent className="pt-6 text-sm"><Users className="mb-2 size-5 text-primary" />Solo to group planning</CardContent></Card>
        <Card><CardContent className="pt-6 text-sm"><CreditCard className="mb-2 size-5 text-primary" />Transparent payment flow</CardContent></Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <img src="/assets/img/travel/misc-11.webp" alt="Travel booking" className="h-56 w-full rounded-2xl border object-cover sm:h-72 lg:h-full" loading="lazy" />
        <Card>
          <CardHeader><CardTitle>Booking request</CardTitle></CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-2">
            <Input placeholder="Full name" />
            <Input type="email" placeholder="Email" />
            <Input placeholder="Destination" />
            <Input placeholder="Travel dates" />
            <Input placeholder="Travelers" />
            <Input placeholder="Budget range" />
            <div className="md:col-span-2"><Textarea placeholder="Tell us your trip preferences" /></div>
            <div><Button>Request itinerary</Button></div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}


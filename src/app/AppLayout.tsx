import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import {
  ArrowUp,
  ChevronRight,
  Compass,
  Mail,
  MapPin,
  Menu,
  Phone,
  Plane,
  Shield,
  Sparkles,
  Ticket,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/destinations", label: "Destinations" },
  { to: "/tours", label: "Tours" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" }
];

const routeLabelMap: Record<string, string> = {
  about: "About",
  destinations: "Destinations",
  "destination-details": "Destination Details",
  tours: "Tours",
  "tour-details": "Tour Details",
  booking: "Booking",
  gallery: "Gallery",
  blog: "Blog",
  "blog-details": "Blog Details",
  testimonials: "Testimonials",
  faq: "FAQ",
  contact: "Contact",
  terms: "Terms",
  privacy: "Privacy",
  "starter-page": "Starter Page",
  "404": "Not Found"
};

export function AppLayout() {
  const [open, setOpen] = useState(false);
  const [plannerOpen, setPlannerOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();

  const breadcrumbs = useMemo(() => {
    const segments = location.pathname.split("/").filter(Boolean);
    const items: { label: string; to: string }[] = [{ label: "Home", to: "/" }];

    let current = "";
    for (const segment of segments) {
      current += `/${segment}`;
      items.push({
        label: routeLabelMap[segment] ?? segment.replace(/-/g, " "),
        to: current
      });
    }

    return items;
  }, [location.pathname]);

  useEffect(() => {
    setOpen(false);
    setPlannerOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setShowTop(window.scrollY > 380);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed left-0 right-0 top-0 z-40 h-1 bg-primary/15">
        <div className="h-full bg-primary transition-[width] duration-150" style={{ width: `${scrollProgress}%` }} />
      </div>

      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold md:text-xl">
            <span className="rounded-md bg-primary/10 p-1"><Compass className="size-5 text-primary" /></span>
            TravelTime
          </Link>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "text-foreground" : "text-muted-foreground transition hover:text-foreground"
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/booking"><Button size="sm">Book now</Button></Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-md border border-border p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open ? (
          <div className="border-t border-border bg-background px-4 py-3 md:hidden">
            <nav className="flex flex-col gap-3 text-sm">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                  {item.label}
                </NavLink>
              ))}
              <Link to="/booking" onClick={() => setOpen(false)}><Button className="w-full">Book now</Button></Link>
            </nav>
          </div>
        ) : null}
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 md:py-10">
        {breadcrumbs.length > 1 ? (
          <nav aria-label="Breadcrumb" className="mb-6 overflow-x-auto rounded-lg border border-border/70 bg-card/70 px-3 py-2 text-xs sm:text-sm">
            <ol className="flex min-w-max items-center gap-1 text-muted-foreground">
              {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <li key={item.to} className="flex items-center gap-1">
                    {isLast ? (
                      <span className="font-medium text-foreground">{item.label}</span>
                    ) : (
                      <Link to={item.to} className="hover:text-foreground">{item.label}</Link>
                    )}
                    {!isLast ? <ChevronRight className="size-3" /> : null}
                  </li>
                );
              })}
            </ol>
          </nav>
        ) : null}

        <Outlet />
      </main>

      <footer className="border-t border-border/70 bg-background/80 backdrop-blur">
        <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-10 sm:px-6">
          <div className="grid gap-6 text-sm sm:grid-cols-2 xl:grid-cols-4">
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-base font-semibold text-foreground">
                <Compass className="size-5 text-primary" />
                TravelTime
              </p>
              <p className="text-muted-foreground">Route-first travel planning with transparent execution.</p>
              <div className="flex items-center gap-2 text-muted-foreground"><Plane className="size-4" /> Route-first planning</div>
              <div className="flex items-center gap-2 text-muted-foreground"><Ticket className="size-4" /> Transparent packages</div>
              <div className="flex items-center gap-2 text-muted-foreground"><Shield className="size-4" /> Verified providers</div>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-foreground">Quick Links</p>
              <div className="flex flex-col gap-2 text-muted-foreground">
                <Link to="/about" className="hover:text-foreground">About</Link>
                <Link to="/destinations" className="hover:text-foreground">Destinations</Link>
                <Link to="/tours" className="hover:text-foreground">Tours</Link>
                <Link to="/blog" className="hover:text-foreground">Blog</Link>
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-foreground">Support</p>
              <div className="flex flex-col gap-2 text-muted-foreground">
                <Link to="/faq" className="hover:text-foreground">FAQ</Link>
                <Link to="/contact" className="hover:text-foreground">Contact</Link>
                <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
                <Link to="/terms" className="hover:text-foreground">Terms</Link>
              </div>
              <p className="flex items-center gap-2 text-muted-foreground"><Mail className="size-4" /> hello@traveltime.com</p>
              <p className="flex items-center gap-2 text-muted-foreground"><Phone className="size-4" /> +1 (555) 342-1188</p>
              <p className="flex items-center gap-2 text-muted-foreground"><MapPin className="size-4" /> Los Angeles, CA</p>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-foreground">Newsletter</p>
              <p className="text-muted-foreground">Monthly travel ideas and route updates.</p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Input type="email" placeholder="Email address" />
                <Button className="sm:w-auto">Join</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border/70 pt-4 text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} TravelTime. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 sm:bottom-6 sm:right-6">
        <Button
          type="button"
          variant="secondary"
          className="shadow-md"
          onClick={() => setPlannerOpen(true)}
        >
          <Sparkles className="size-4" /> Quick Planner
        </Button>

        {showTop ? (
          <Button
            type="button"
            variant="default"
            className="shadow-md"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp className="size-4" /> Top
          </Button>
        ) : null}
      </div>

      {plannerOpen ? (
        <div className="fixed inset-0 z-50 bg-black/45 p-4 sm:p-6" onClick={() => setPlannerOpen(false)}>
          <aside
            className="ml-auto h-full w-full max-w-md overflow-y-auto rounded-2xl border border-border bg-background p-5 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Quick Planner</h2>
              <Button type="button" variant="ghost" onClick={() => setPlannerOpen(false)}><X className="size-4" /></Button>
            </div>
            <div className="space-y-3">
              <Input placeholder="Where do you want to go?" />
              <Input placeholder="Departure month" />
              <Input placeholder="Travelers" />
              <Input placeholder="Budget range" />
              <Textarea placeholder="Trip goals and preferences" />
              <Button className="w-full">Generate plan</Button>
            </div>
          </aside>
        </div>
      ) : null}
    </div>
  );
}

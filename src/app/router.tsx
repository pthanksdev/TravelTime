import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppLayout } from "@/app/AppLayout";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { BookingPage } from "@/pages/BookingPage";
import { ContactPage } from "@/pages/ContactPage";
import { DestinationDetailsPage } from "@/pages/DestinationDetailsPage";
import { DestinationsPage } from "@/pages/DestinationsPage";
import { BlogDetailsPage } from "@/pages/BlogDetailsPage";
import { BlogPage } from "@/pages/BlogPage";
import { FaqPage } from "@/pages/FaqPage";
import { GalleryPage } from "@/pages/GalleryPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { StarterPage } from "@/pages/StarterPage";
import { TermsPage } from "@/pages/TermsPage";
import { TestimonialsPage } from "@/pages/TestimonialsPage";
import { TourDetailsPage } from "@/pages/TourDetailsPage";
import { ToursPage } from "@/pages/ToursPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "destinations", element: <DestinationsPage /> },
      { path: "destination-details", element: <DestinationDetailsPage /> },
      { path: "tours", element: <ToursPage /> },
      { path: "tour-details", element: <TourDetailsPage /> },
      { path: "booking", element: <BookingPage /> },
      { path: "gallery", element: <GalleryPage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "blog-details", element: <BlogDetailsPage /> },
      { path: "testimonials", element: <TestimonialsPage /> },
      { path: "faq", element: <FaqPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "terms", element: <TermsPage /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "starter-page", element: <StarterPage /> },
      { path: "404", element: <NotFoundPage /> },
      { path: "about.html", element: <Navigate to="/about" replace /> },
      { path: "destinations.html", element: <Navigate to="/destinations" replace /> },
      { path: "destination-details.html", element: <Navigate to="/destination-details" replace /> },
      { path: "tours.html", element: <Navigate to="/tours" replace /> },
      { path: "tour-details.html", element: <Navigate to="/tour-details" replace /> },
      { path: "booking.html", element: <Navigate to="/booking" replace /> },
      { path: "gallery.html", element: <Navigate to="/gallery" replace /> },
      { path: "blog.html", element: <Navigate to="/blog" replace /> },
      { path: "blog-details.html", element: <Navigate to="/blog-details" replace /> },
      { path: "testimonials.html", element: <Navigate to="/testimonials" replace /> },
      { path: "faq.html", element: <Navigate to="/faq" replace /> },
      { path: "contact.html", element: <Navigate to="/contact" replace /> },
      { path: "terms.html", element: <Navigate to="/terms" replace /> },
      { path: "privacy.html", element: <Navigate to="/privacy" replace /> },
      { path: "starter-page.html", element: <Navigate to="/starter-page" replace /> },
      { path: "404.html", element: <Navigate to="/404" replace /> },
      { path: "*", element: <NotFoundPage /> }
    ]
  }
]);

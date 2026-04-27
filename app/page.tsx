import Header from "@/components/header"
import Hero from "@/components/hero"
import PortfolioGrid from "@/components/portfolio-grid"
import Services from "@/components/services"
import About from "@/components/about"
import Guarantees from "@/components/guarantees"
import Testimonials from "@/components/testimonials"
import BudgetCalculator from "@/components/budget-calculator"
import ProcessTimeline from "@/components/process-timeline"
import BookingCta from "@/components/booking-cta"
import LocationMap from "@/components/location-map"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <PortfolioGrid />
      <Services />
      <About />
      <Guarantees />
      <Testimonials />
      <BudgetCalculator />
      <ProcessTimeline />
      <BookingCta />
      <LocationMap />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

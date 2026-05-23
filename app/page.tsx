import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Benefits } from "@/components/landing/benefits"
import { WhatsAppDemo } from "@/components/landing/whatsapp-demo"
import { PharmacySection } from "@/components/landing/pharmacy-section"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <Benefits />
      <WhatsAppDemo />
      <PharmacySection />
      <Footer />
    </main>
  )
}

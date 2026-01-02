// app/page.tsx
import { EnquiryForm } from "@/components/enquiry-form"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { WhyUs } from "@/components/why-us"
import { RecentProjects } from "@/components/recent-projects"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyUs />
      <RecentProjects />
      <Testimonials />
      <Footer />
    </div>
  )
}
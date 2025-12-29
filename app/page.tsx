// app/page.tsx
import { EnquiryForm } from "@/components/enquiry-form"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <AboutSection />
    </div>
  )
}
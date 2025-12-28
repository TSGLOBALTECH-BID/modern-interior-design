// app/page.tsx
import { ThemeShowcase } from "@/components/theme-showcase"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          Theme Showcase
        </h1>
        <ThemeShowcase />
      </main>
    </div>
  )
}
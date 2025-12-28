// components/hero.tsx
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                {/* Gradient Overlay - Only one instance needed */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/60 to-white/0 dark:from-black/80 dark:to-black/60 z-10"
                    aria-hidden="true"
                />

                {/* Single Image with Dark Mode Toggle */}
                <Image
                    src="/images/hero-background.avif"
                    alt="Modern Interior Design"
                    fill
                    priority
                    quality={85}
                    className="object-cover transition-opacity duration-300 dark:opacity-0"
                    sizes="100vw"
                />
                <Image
                    src="/images/hero-background-dark.avif" // Consider a darker version for dark mode
                    alt="Modern Interior Design"
                    fill
                    priority
                    quality={85}
                    className="object-cover opacity-0 transition-opacity duration-300 dark:opacity-100"
                    sizes="100vw"
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-24 md:py-32 relative z-20">
                <div className="max-w-3xl space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                        Transform Your Space with Modern Design
                    </h1>
                    
                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button>
                            Explore Collections
                        </Button>
                        <Button variant="outline">
                            Book Consultation
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
                aria-hidden="true"
            >
                <div className="w-8 h-12 border-2 border-foreground/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-foreground/50 rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    )
}
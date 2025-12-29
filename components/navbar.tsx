// components/navbar.tsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

// Custom hook to handle mobile detection
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Initial check
    checkMobile()
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  return isMobile
}


export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
     const isMobile = useIsMobile()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 32)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Our Works", href: "#portfolio" }
    ]

    // Determine if we should use fixed positioning
    const shouldBeFixed = isScrolled || isMobile
    return (
        <header
            className={`w-full ${shouldBeFixed
                    ? "fixed bg-background/95 top-0 left-0 right-0 backdrop-blur-md shadow-sm z-50"
                    : "absolute top-8 left-0 right-0 z-50"
                }`}
        >
            <div className={`container mx-auto px-4 ${!shouldBeFixed
                    ? "bg-background/95 rounded-lg"
                    : ""
                }`}>     <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold text-foreground whitespace-nowrap">
                        Modern Interiors
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center w-full">
                        <nav className="mx-auto flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-foreground/80 hover:text-foreground transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        </nav>
                        <Button size="sm" className="ml-8">
                            Contact Us
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border mt-4">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:bg-accent/50 hover:text-foreground"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button className="w-full mt-2" size="sm">
                                Contact Us
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="relative">
              About{' '}
              <span className="relative inline-flex items-center">
                <span className="relative z-10 px-4 py-1.5 bg-primary/5 text-primary rounded-lg border-l-4 border-primary/40 hover:bg-primary/10 transition-colors duration-200">
                  Modern Interior
                </span>
                <span className="absolute -inset-1 bg-primary/5 rounded-lg -z-10"></span>
              </span>
            </span>
          </h2>
          
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              At Modern Interiors, we believe in the transformative power of well-designed spaces. 
              Our team of passionate designers and craftsmen work together to create environments 
              that blend functionality with aesthetic appeal.
            </p>
            <p className="text-lg text-muted-foreground">
              With over a decade of experience in the industry, we've mastered the art of turning 
              visions into reality, one space at a time.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2 group">
                Read More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Our Works
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/20 hover:shadow-lg transition-all h-full flex flex-col">
              <div className="text-4xl font-bold text-primary mb-3">10+</div>
              <h3 className="text-lg font-semibold mb-2">Years Experience</h3>
              <p className="text-muted-foreground mt-auto">Delivering exceptional interior solutions</p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/20 hover:shadow-lg transition-all h-full flex flex-col">
              <div className="text-4xl font-bold text-primary mb-3">98%</div>
              <h3 className="text-lg font-semibold mb-2">Client Retention</h3>
              <p className="text-muted-foreground mt-auto">Satisfied clients who return</p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/20 hover:shadow-lg transition-all h-full flex flex-col">
              <div className="text-4xl font-bold text-primary mb-3">500+</div>
              <h3 className="text-lg font-semibold mb-2">Projects Done</h3>
              <p className="text-muted-foreground mt-auto">Successfully completed projects</p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/20 hover:shadow-lg transition-all h-full flex flex-col">
              <div className="text-4xl font-bold text-primary mb-3">50K+</div>
              <h3 className="text-lg font-semibold mb-2">Sq. Ft. Delivered</h3>
              <p className="text-muted-foreground mt-auto">Beautiful spaces created</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

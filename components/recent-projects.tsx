// components/projects-section.tsx
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { projectsContent } from "@/content/projectsContent"
import { SectionHeading } from "./shared/section-heading"
import { Project } from "@/types/content"

export function RecentProjects() {
  const { sectionTitle, projects } = projectsContent;

  return (
    <section id="projects" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionHeading
            title={sectionTitle.title}
            highlightText={sectionTitle.highlightText}
            subtitle={sectionTitle.subtitle}
            className="mb-4"
          />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {sectionTitle.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-sm text-primary font-medium mb-1">{project.category}</span>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="gap-2 group">
            View More Projects
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
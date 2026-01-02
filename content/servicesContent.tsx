import { Home, Layout, Box, Ruler, Lightbulb, Users, ArrowRight } from "lucide-react";
import { SectionTitle } from "./sharedContent";

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CtaButton {
  text: string;
  icon: React.ReactNode;
}

export interface ServicesContent {
  sectionTitle: SectionTitle;
  services: ServiceItem[];
  ctaButton: CtaButton;
}
export const servicesContent: ServicesContent = {
  sectionTitle: {
    title: "Our",
    subtitle: "What we offer",
    highlightText: "Services"
  },
  services: [
    {
      title: "Interior Design",
      description: "Transform your space with our expert interior design services that blend functionality with aesthetics.",
      icon: <Home className="w-6 h-6 text-primary" />
    },
    {
      title: "Space Planning",
      description: "Optimize your space with our professional space planning solutions for maximum efficiency.",
      icon: <Layout className="w-6 h-6 text-primary" />
    },
    {
      title: "3D Visualization",
      description: "Visualize your dream space before it's built with our realistic 3D rendering services.",
      icon: <Box className="w-6 h-6 text-primary" />
    },
    {
      title: "Project Management",
      description: "From concept to completion, we handle every detail of your project with precision.",
      icon: <Ruler className="w-6 h-6 text-primary" />
    },
    {
      title: "Custom Furniture",
      description: "Bespoke furniture pieces designed specifically for your space and style.",
      icon: <Box className="w-6 h-6 text-primary" />
    },
    {
      title: "Lighting Design",
      description: "Illuminate your space with our expert lighting design solutions.",
      icon: <Lightbulb className="w-6 h-6 text-primary" />
    }
  ],
  ctaButton: {
    text: "View All Services",
    icon: <ArrowRight className="w-5 h-5" />
  }
};

import { ButtonContent, SectionTitle } from "./sharedContent";

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface AboutContent {
  sectionTitle: SectionTitle;
  description: string[];
  buttons: ButtonContent[];
  stats: StatItem[];
}

export const aboutContent: AboutContent = {
  sectionTitle: {
    title: "About",
    subtitle: "Who we are",
    highlightText: "Modern Interior"
  },
  description: [
    "At Modern Interiors, we believe in the transformative power of well-designed spaces. Our team of passionate designers and craftsmen work together to create environments that blend functionality with aesthetic appeal.",
    "With over a decade of experience in the industry, we've mastered the art of turning visions into reality, one space at a time."
  ],
  buttons: [
    {
      text: "Read More",
      icon: "ArrowRight"
    },
    {
      text: "Our Works",
      variant: "outline"
    }
  ],
  stats: [
    {
      value: "10+",
      label: "Years Experience",
      description: "Delivering exceptional interior solutions"
    },
    {
      value: "98%",
      label: "Client Retention",
      description: "Satisfied clients who return"
    },
    {
      value: "500+",
      label: "Projects Done",
      description: "Successfully completed projects"
    },
    {
      value: "50K+",
      label: "Sq. Ft. Delivered",
      description: "Beautiful spaces created"
    }
  ]
};

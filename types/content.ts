export interface ButtonContent {
  text: string;
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'secondary' | 'destructive' | null | undefined;
  icon?: string;
}

export interface HeroContent {
  backgroundImage: {
    light: string;
    dark: string;
    alt: string;
  };
  heading: string;
  buttons: ButtonContent[];
  form: {
    title: string;
  };
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface SectionTitle {
  title: string;
  subtitle?: string;
  highlightText?: string;
  description?: string;
}

export interface AboutContent {
  sectionTitle: SectionTitle;
  description: string[];
  buttons: ButtonContent[];
  stats: StatItem[];
}

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

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface ProjectsContent {
  sectionTitle: SectionTitle;
  projects: Project[];
}

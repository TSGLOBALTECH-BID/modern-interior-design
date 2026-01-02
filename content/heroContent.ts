import { ButtonContent } from "./sharedContent";

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

export const heroContent: HeroContent = {
  backgroundImage: {
    light: "/images/hero-background.avif",
    dark: "/images/hero-background.avif",
    alt: "Modern Interior Design"
  },
  heading: "Transform Your Space with Modern Design",
  buttons: [
    {
      text: "Explore Works Done"
    },
    {
      text: "Book Free Consultation"
    }
  ],
  form: {
    title: "Get in Touch",
  }
};

import { SectionTitle } from "./sharedContent";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  location: string;
  link?: string;
  tags?: string[];
}

export interface ProjectsContent {
  sectionTitle: SectionTitle;
  projects: Project[];
}

export const projectsContent: ProjectsContent = {
  sectionTitle: {
    title: "Our ",
    highlightText: "Recent Projects",
    description: "Explore our portfolio of beautifully designed spaces that reflect our passion for interior design"
  },
  projects: [
    {
      id: 1,
      title: "Luxury Apartment",
      category: "Residential",
      description: "A stunning high-end apartment featuring contemporary design with premium finishes, floor-to-ceiling windows, and smart home technology throughout.",
      image: "/images/projects/living-room.jpg",
      location: "Manhattan, NY"
    },
    {
      id: 2,
      title: "Modern Office",
      category: "Commercial",
      description: "Sleek and functional office space designed to inspire creativity and productivity, featuring open work areas, private meeting rooms, and modern amenities.",
      image: "/images/projects/office-space.jpg",
      location: "San Francisco, CA"
    },
    {
      id: 3,
      title: "Elegant Villa",
      category: "Residential",
      description: "Luxurious waterfront villa offering breathtaking ocean views, spacious interiors, and resort-style amenities in an exclusive neighborhood.",
      image: "/images/projects/bedroom.jpg",
      location: "Miami, FL"
    },
    {
      id: 4,
      title: "Minimalist Studio",
      category: "Residential",
      description: "Compact yet functional studio apartment featuring smart storage solutions, multi-functional furniture, and a clean, minimalist aesthetic.",
      image: "/images/projects/kitchen.jpg",
      location: "Seattle, WA"
    },
    {
      id: 5,
      title: "Cozy Lounge",
      category: "Commercial",
      description: "Inviting lounge area with comfortable seating, warm lighting, and a relaxed atmosphere perfect for socializing or quiet relaxation.",
      image: "/images/projects/lounge.jpg",
      location: "Chicago, IL"
    },
    {
      id: 6,
      title: "Modern Kitchen",
      category: "Residential",
      description: "State-of-the-art kitchen design featuring high-end appliances, custom cabinetry, and an open-concept layout perfect for entertaining.",
      image: "/images/projects/kitchen.jpg",
      location: "Boston, MA"
    }
  ]
};

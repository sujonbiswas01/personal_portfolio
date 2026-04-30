// data/projects.ts
export type Project = {
    slug: string;
    name: string;
    image: string;
    description: string;
    stack: string[];
    liveUrl: string;
    githubUrl: string;
    challenges: string[];
    improvements: string[];
  };
  
  export const projects: Project[] = [
    {
      slug: "meta-blog",
      name: "Meta Blog Platform",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      description:
        "A full-featured blog platform with dynamic routing, post management, and modern UI. Built with scalability and performance in mind.",
      stack: ["Next.js", "React", "Tailwind", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      challenges: [
        "Dynamic routing optimization",
        "Component reusability",
        "Performance tuning",
      ],
      improvements: [
        "Add authentication",
        "Comment system",
        "SEO optimization",
      ],
    },
    {
      slug: "dashboard",
      name: "Admin Dashboard",
      image: "https://images.unsplash.com/photo-1551281044-8d8d7a6f4f3c",
      description:
        "A responsive dashboard with charts, analytics, and modular UI components.",
      stack: ["Next.js", "Tailwind", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      challenges: ["State management", "Responsive layout"],
      improvements: ["Real-time data", "User roles"],
    },
    {
      slug: "ecommerce",
      name: "E-commerce Website",
      image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a",
      description:
        "E-commerce platform with product listing, cart system, and checkout flow.",
      stack: ["Next.js", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      challenges: ["Cart logic", "API integration"],
      improvements: ["Payment gateway", "Better UX"],
    },
  ];
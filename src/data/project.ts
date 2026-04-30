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
      slug: "food-hub",
      name: "FoodHub — Smart Food Ordering Platform",
      image: "/images/foodhub.png",
      description:
        "A next-generation full-stack food ordering solution featuring a high-fidelity user marketplace and a comprehensive administrative control suite for real-time order and inventory management.",
      stack: [
        "Next.js", 
        "Tailwind CSS", 
        "TypeScript", 
        "Node.js", 
        "Express.js", 
        "PostgreSQL", 
        "Prisma", 
        "BetterAuth"
      ],
      liveUrl: "https://frontend-next-level-assingment-4.vercel.app",
      githubUrl: "https://github.com/sujonbiswaseng/frontend-next-level-assignment-4",
      challenges: [
        "Implementing complex relational data schemas with Prisma and PostgreSQL",
        "Building a responsive and interactive Admin Dashboard for multi-level management",
        "Managing real-time status updates across the order lifecycle"
      ],
      improvements: [
        "Integration of BetterAuth for secure multi-role authentication",
        "Interactive data visualization for earnings and performance metrics",
        "Optimized SEO for food items and category pages"
      ],
    },
    {
      slug: "planora",
      name: "Planora – Event Management Platform",
      image: "/images/planora.png",
      description:
        "A high-performance, full-stack event management platform designed to bridge the gap between event organizers and attendees. Planora provides a seamless workflow for event creation, secure payments, and role-based participant management.",
      stack: [
        "Next.js",
        "Tailwind CSS",
        "shadcn/ui",
        "Node.js",
        "Express.js",
        "Prisma ORM",
        "PostgreSQL",
        "JWT",
        "Better-Auth",
        "Stripe"
      ],
      liveUrl: "https://frontend-nextlevel-assignment-5.vercel.app",
      githubUrl: "https://github.com/sujonbiswasdev/frontend-nextlevel-assignment-5",
      challenges: [
        "Implementing complex event access control (Public Free/Paid, Private Free/Paid) based on user roles and payment status",
        "Integrating Stripe securely for both public paid registrations and paying hosts for private events",
        "Managing the invitation workflow including host invitations, guest acceptance/declination, and conditional payments"
      ],
      improvements: [
        "Interactive dashboard analytics with charts for registration metrics and payment summaries",
        "Real-time notifications for event invitations, request status updates, and new reviews",
        "Advanced SEO optimization for event pages and organizer profiles",
        "Implementation of a waiting list system for fully booked events"
      ],
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
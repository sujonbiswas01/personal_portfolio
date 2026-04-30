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
  slug: "meta-blog",
  name: "Meta Blog — Advanced MERN Stack Publishing Platform",
  image: "/images/blog.png",
  description:
    "A sophisticated full-stack blogging ecosystem featuring a dynamic content management system, secure authoring tools, and a responsive UI for seamless multi-device reading experiences.",
  stack: [
    "React.js", 
    "JavaScript", 
    "Node.js", 
    "Express.js", 
    "MongoDB", 
    "Mongoose", 
    "Tailwind CSS"
  ],
  liveUrl: "https://meta-blog-app-ebon.vercel.app", 
  githubUrl: "https://github.com/sujonbiswaseng/meta-blog-app.git",
  challenges: [
    "Developing a robust 'Manage Your Blogs' interface with real-time Edit/Delete functionality",
    "Designing a scalable Mongoose schema to handle diverse categories like Technology, Lifestyle, and Economy",
    "Implementing a high-performance 'React Server Components' architecture for optimized SEO and speed"
  ],
  improvements: [
    "Custom dark/light mode toggle for enhanced user accessibility",
    "Streamlined 'Add New Blog' form with validation for author and image URLs",
    "Integrated 'Meet Our Team' and interactive 'Contact' sections for improved brand trust"
  ],
}
  ];
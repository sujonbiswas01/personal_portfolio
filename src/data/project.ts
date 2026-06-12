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
      slug: "Bitebase",
      name: "Bitebase Advanced Full-Stack Multi-Vendor Food Ordering Platform",
      image: "/images/foodhub.png",
      description:
        "BiteBase is an AI-powered full-stack multi-vendor food ordering platform that allows customers to discover meals, place orders, and track deliveries, while vendors manage menus and orders through a secure and responsive dashboard. The platform includes smart AI features, secure authentication, payment integration, and scalable admin management for a seamless food delivery experience.",
      stack: [
        "Next.js", 
        "Tailwind CSS", 
        "TypeScript", 
        "Node.js", 
        "Express.js", 
        "PostgreSQL",
        "RAG System", 
        "Prisma", 
        "stripe",
        "BetterAuth"
      ],
      liveUrl: "https://full-stack-ecommerce-frontend-websi.vercel.app",
      githubUrl: "https://github.com/sujonbiswas01/full-stack-ecommerce-frontend-food-website",
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
      slug: "lumen",
      name: "lumen – Event Management Platform",
      image: "/images/planora.png",
      description:`Lumen is a high-performance, full-stack event management ecosystem engineered for the modern era. It serves as a comprehensive bridge between ambitious event organizers and global audiences. From high-capacity music festivals to intimate corporate seminars, Lumen provides a professional-grade suite of tools for event discovery, secure ticketing, and real-time participant management.
Built with a focus on scalability, security, and intelligence, Lumen eliminates the friction of traditional planning by integrating AI-driven insights and a flawless, role-based user experience.`,
      stack: [
        "Next.js",
        "Tailwind CSS",
        "shadcn/ui",
        "Node.js",
        "Express.js",
        "Prisma ORM",
        "PostgreSQL",
        "RAG System",
        "JWT",
        "Better-Auth",
        "Stripe"
      ],
      liveUrl: "https://lumen-frontend-project.vercel.app/",
      githubUrl: "https://github.com/sujonbiswas01/lumen-frontend-project",
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
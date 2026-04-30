"use client";

import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/project";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Image from "next/image";

const cardVariants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
      delay: 0.17,
    },
  },
};

const imageVariants = {
  initial: { scale: 1, opacity: 0.7 },
  hover: {
    scale: 1.07,
    opacity: 1,
    transition: { duration: 0.7, type: "spring" },
  },
};

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  // GSAP entrance & hover effect for unique animation
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { boxShadow: "0 0 0 0 transparent" },
        {
          boxShadow: "0 8px 32px 0 rgba(62, 104, 197, 0.08)",
          duration: 1.2,
          ease: "power3.out",
          delay: 0.15,
          clearProps: "boxShadow",
        },
      );
      const node = cardRef.current;

      // Unique hover lift
      const hoverIn = () => {
        gsap.to(node, {
          y: -8,
          boxShadow: "0 14px 40px 0 rgba(59, 130, 246, 0.14)",
          scale: 1.01,
          duration: 0.32,
          ease: "power2.out",
        });
      };
      const hoverOut = () => {
        gsap.to(node, {
          y: 0,
          boxShadow: "0 8px 32px 0 rgba(62, 104, 197, 0.08)",
          scale: 1,
          duration: 0.32,
          ease: "power2.inOut",
        });
      };
      node.addEventListener("mouseenter", hoverIn);
      node.addEventListener("mouseleave", hoverOut);

      return () => {
        node.removeEventListener("mouseenter", hoverIn);
        node.removeEventListener("mouseleave", hoverOut);
      };
    }
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="
        group flex flex-col overflow-hidden rounded-2xl border bg-background 
        transition-all duration-300 shadow-sm 
        sm:min-w-0 min-w-[260px] max-w-full
        sm:mx-0 mx-auto
        "
      variants={cardVariants as any}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* IMAGE */}
      <motion.div
        className="relative aspect-[16/10] overflow-hidden"
        variants={imageVariants as any}
        initial="initial"
        whileHover="hover"
        whileTap={{ scale: 0.97 }}
      >
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          style={{ minHeight: 150, maxHeight: 250 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none" />
      </motion.div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1 p-4 md:p-5 bg-background">
        <motion.h3
          className="text-lg md:text-xl font-semibold leading-snug mb-1"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, delay: 0.24 }}
        >
          {project.name.slice(0,14)} .....
        </motion.h3>

        <motion.p
          className="text-[15px] md:text-base text-muted-foreground mt-1 mb-2 line-clamp-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.29, duration: 0.45 }}
        >
          {project.description.slice(0,14)} ....
        </motion.p>

        {/* STACK */}
        <motion.div
          className="flex flex-wrap gap-2 mt-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.33, duration: 0.3 }}
        >
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs md:text-sm px-2 py-0.5 rounded-full border bg-muted text-muted-foreground font-medium"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* ACTIONS */}
        <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2 w-full">
          <Dialog>
            <DialogTrigger>
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </DialogTrigger>
            <DialogContent className="DialogContent" style={{ padding: 0 }}>
              <div className="flex flex-col max-h-[80vh] w-full overflow-y-auto">
                {/* Fixed image header */}
                <div className="flex-shrink-0 w-full flex justify-center items-center bg-muted">
                  {project.image && project.name && (
                    <img
                      src={project.image}
                      alt={project.name}
                      width={640}
                      height={360}
                      className="rounded-t-lg object-cover w-full max-w-[1000px]"
                      style={{
                        background: "#f1f5f9",
                        objectFit: "cover",
                        minHeight: 150,
                        maxHeight: 260,
                        height: "clamp(150px,28vw,260px)"
                      }}
                    />
                  )}
                </div>
                {/* Scrollable details */}
                <div className="flex-1 px-6 py-4 w-full no-scrollbar bg-background">
                  <DialogHeader>
                    <DialogTitle>{project.name}</DialogTitle>
                    <DialogDescription>
                      {project.description}
                    </DialogDescription>
                  </DialogHeader>
                  {/* Challenges Section */}
                  <div className="my-4">
                    <h4 className="text-md font-semibold text-primary mb-2">
                      🚩 Challenges
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      {project.challenges && project.challenges.length > 0 ? (
                        project.challenges.map((item, idx) => (
                          <li
                            key={idx}
                            className="pl-1 text-sm md:text-base text-rose-500 dark:text-rose-400"
                          >
                            {item}
                          </li>
                        ))
                      ) : (
                        <li className="text-muted-foreground text-sm">
                          No specific challenges listed.
                        </li>
                      )}
                    </ul>
                  </div>
                  {/* Improvements Section */}
                  <div className="my-4">
                    <h4 className="text-md font-semibold text-blue-900 dark:text-blue-200 mb-2">
                      🌱 Improvements
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      {project.improvements && project.improvements.length > 0 ? (
                        project.improvements.map((item, idx) => (
                          <li
                            key={idx}
                            className="pl-1 text-sm md:text-base text-emerald-600 dark:text-emerald-400"
                          >
                            {item}
                          </li>
                        ))
                      ) : (
                        <li className="text-muted-foreground text-sm">
                          No suggested improvements.
                        </li>
                      )}
                    </ul>
                  </div>
                  {/* Responsive Stack Display */}
                  <div className="my-4">
                    <h4 className="text-md font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      🚀 Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack &&
                        project.stack.map((tech, idx) => (
                          <span
                            key={tech + idx}
                            className="inline-block px-3 py-0.5 rounded-full bg-gradient-to-tr 
                            from-blue-200 via-purple-200 to-pink-200 dark:from-blue-800 dark:via-purple-900 dark:to-pink-900
                            text-xs md:text-sm font-medium text-slate-700 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>
                  </div>
                  {/* Action buttons at the bottom of the scrollable content */}
                  <div className="flex flex-row gap-3 mt-5 mb-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 rounded-lg bg-primary text-primary-foreground font-semibold shadow transition hover:bg-primary/90"
                    >
                      Live Site
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 rounded-lg bg-secondary text-secondary-foreground font-semibold shadow transition hover:bg-secondary/90"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                {/* Button stays pinned at bottom with bg blur */}
                <div className="sticky bottom-0 bg-background/80 backdrop-blur p-4 border-t z-10">
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline" className="w-full">
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </div>
              </div>
            </DialogContent>
          </Dialog>
    
     

          <Button
            asChild
            size="icon"
            variant="outline"
            className="aspect-square"
          >
            <a href={project.liveUrl} target="_blank" aria-label="View Live">
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>

          <Button
            asChild
            size="icon"
            variant="outline"
            className="aspect-square"
          >
            <a
              href={project.githubUrl}
              target="_blank"
              aria-label="GitHub Repo"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

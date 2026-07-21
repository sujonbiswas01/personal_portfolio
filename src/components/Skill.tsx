"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { SkillsData } from "@/assets/skills";
import Image from "next/image";

type SkillItem = {
  name: string;
  icon?: string;
};

type SkillCategory = {
  title: string;
  color: string;
  skill: SkillItem[];
};

const arr = [
  "Frontend",
  "Styling & UI",
  "Backend",
  "Payment System",
  "Database And ORM",
  "DevOps & Tools",
  "UI/UX Design",
  "Other Skills",
];

const Skills = () => {

  const [activeSkills,setActiveSkills]=useState("Frontend")
  const data=SkillsData.filter((cur)=>cur.title===activeSkills)
  return (
    <section
      id="skills"
  
      className="w-full section-space bg-background"
    >
      <div className="app-shell">
        {/* Title */}

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "linear" }}
        >
          <h2 className="font-black text-4xl md:text-6xl text-foreground tracking-tight mt-4 lg:mt-6  mb-4">
            My Recent <span className="text-primary">Skills</span>
          </h2>
        </motion.div>

        {/* Professional Button Bar */}

    
<div className="flex flex-wrap items-center justify-center gap-3">
  {arr.map((item) => {
    const isActive = activeSkills === item;

    return (
      <Button
        key={item}
        onClick={() => setActiveSkills(item)}
        className={`
          rounded-full
          px-5
          py-2
          text-sm
          font-medium
          transition-all
          duration-300
          ${
            isActive
              ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
              : "border border-white/10 bg-white/5 text-secondary-foreground border-accent hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400"
          }
        `}
      >
        {item}
      </Button>
    );
  })}
</div>
       

        <div className="w-full mt-4 lg:mt-6">
  {data.map((item, index) => (
    <div key={index} className="">
      {/* Category Title */}
      <div className="mb-6 flex items-center gap-3">
        <div
          className="h-4 w-4 rounded-full"
          style={{ backgroundColor: item.color }}
        />

        <h2 className="text-2xl font-bold text-foreground">
          {item.title}
        </h2>
      </div>

      {/* Skills */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {item.skill.map((item1, idx) => (
          <article
            key={idx}
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-border
              bg-card
              p-6
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-primary/40
              hover:shadow-xl
            "
          >
            {/* Gradient */}
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div
                className="absolute -left-20 -top-20 h-48 w-48 rounded-full blur-3xl"
                style={{
                  background: `${item.color}25`,
                }}
              />

              <div
                className="absolute -right-20 -bottom-20 h-48 w-48 rounded-full blur-3xl"
                style={{
                  background: `${item.color}15`,
                }}
              />
            </div>

            {/* Icon */}
            <div className="relative z-10 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted transition duration-300 group-hover:scale-110">
                <Image
                  src={item1.icon}
                  alt={item1.name}
                  width={44}
                  height={44}
                  loading="lazy"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Name */}
            <h3 className="relative z-10 mt-5 text-center text-base font-semibold text-foreground">
              {item1.name}
            </h3>
          </article>
        ))}
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Skills;
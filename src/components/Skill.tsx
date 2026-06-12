"use client";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { GlareCard } from "./glareCard";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Button } from "./ui/button";
import Marquee from "react-fast-marquee";

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
  const [skilldata, setSkilldata] = useState<SkillCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const container = useRef<HTMLDivElement>(null);
  const [activeSkill, setActiveSkill] = useState(arr[0]);

  useEffect(() => {
    axios
      .get("/api/skills.json")
      .then((response) => {
        setSkilldata(response.data);
      })
      .catch(() => {
        setSkilldata([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (container.current) {
      gsap.fromTo(
        container.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  const getCategoryColor = (category: string) => {
    const cat = skilldata.find((item) => item.title === category);
    return cat?.color || "var(--primary)";
  };

  const activeSkillCategory = skilldata.find(
    (item) => item.title === activeSkill
  );

  // Marquee animation keyframes (CSS)
  const marqueeAnimation = `
    @keyframes marquee-slide {
      0% { transform: translateX(100%); }
      100% { transform: translateX(-100%);}
    }
  `;

  return (
    <section
      id="skills"
      ref={container}
      className="w-full section-space"
    >
      <style>
        {marqueeAnimation}
      </style>
      <div className="app-shell">
        {/* Title */}
        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
            My Recent Skills
          </h2>
        </motion.div>

        {/* Professional Button Bar */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
          {arr.map((item, idx) => {
            const isActive = activeSkill === item;
            const activeColor = getCategoryColor(item);
            return (
              <motion.button
                key={idx}
                type="button"
                onClick={() => setActiveSkill(item)}
                className={`relative px-5 py-2 rounded-full font-semibold shadow-sm border transition-all
                  ${
                    isActive
                      ? "text-white scale-105"
                      : "text-muted-foreground hover:text-primary"
                  }
                  ${
                    isActive
                      ? ""
                      : "bg-muted hover:bg-accent border-transparent"
                  }
                `}
                style={isActive ? {
                  background: `linear-gradient(90deg, ${activeColor}, #8b5cf6 130%)`,
                  borderColor: activeColor,
                } : {}}
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: isActive ? 1.1 : 1.04 }}
                aria-current={isActive}
              >
                <span className="tracking-tight">{item}</span>
                {isActive ? (
                  <motion.div
                    layoutId="activeSkillGlow"
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      boxShadow: `0 0 12px 2px ${activeColor}70, 0 2px 8px 0 ${activeColor}22`,
                      zIndex: 0,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  ></motion.div>
                ) : null}
              </motion.button>
            );
          })}
        </div>

        {/* Grid */}
        <div
          className="w-full"
        >
          {loading || !activeSkillCategory ? (

            <GlareCard>
              <motion.div
                className="flex flex-col items-center justify-center h-full min-h-[180px]"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-3 shadow-inner ring-2 ring-primary/20">
                  <svg className="w-8 h-8 text-primary animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle
                      className="opacity-30"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-70"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4A8.001 8.001 0 004 12z"
                    ></path>
                  </svg>
                </div>
                <h1 className="text-lg font-extrabold text-foreground mb-1 animate-bounce tracking-tight">
                  Skills Pending...
                </h1>
                <p className="text-sm text-muted-foreground">Fetching latest skills data</p>
              </motion.div>
            </GlareCard>
          ) : (
            <div className="w-full flex items-center justify-center">
              <div className="w-full mx-auto max-w-[1440px] flex items-center justify-center">
                <div className="relative flex items-center justify-center w-full min-h-[340px] sm:min-h-[340px] md:min-h-[390px] lg:min-h-[450px] xl:min-h-[520px] py-3">
                  {/* Circular Skill Track with Glow */}
                  <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <svg
                      viewBox="0 0 350 350"
                      className="block"
                      width="100%"
                      height="100%"
                      style={{
                        maxWidth: 'min(80vw, 350px)',
                        maxHeight: 'min(80vw, 350px)',
                        filter: `drop-shadow(0 0 34px ${activeSkillCategory?.color || "#8b5cf6"}33)`,
                        zIndex: 0,
                        position: 'absolute',
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)"
                      }}
                    >
                      <circle
                        cx="175"
                        cy="175"
                        r="156"
                        stroke={activeSkillCategory?.color || "#8b5cf6"}
                        strokeWidth="13"
                        fill="none"
                        opacity="0.23"
                        style={{ transition: "stroke 0.4s" }}
                      />
                      {/* Animated over-border */}
                      <circle
                        cx="175"
                        cy="175"
                        r="156"
                        stroke={activeSkillCategory?.color || "#8b5cf6"}
                        strokeWidth="13"
                        fill="none"
                        strokeDasharray="978"
                        strokeDashoffset="245"
                        style={{
                          transition: "stroke 0.4s",
                          filter: `drop-shadow(0 0 30px ${activeSkillCategory?.color || "#8b5cf6"}90)`,
                          strokeLinecap: "round",
                          animation: "circle-spin 12s linear infinite"
                        }}
                      />
                    </svg>
                    {/* Add some animation style */}
                    <style>{`
                      @keyframes circle-spin {
                        0% { stroke-dashoffset: 245;}
                        100% { stroke-dashoffset: 978;}
                      }
                    `}</style>
                  </div>

                  {/* Center category title - bubble effect */}
                  <div className="absolute left-1/2 top-1/2 z-10 flex flex-col items-center -translate-x-1/2 -translate-y-1/2">
                    <div
                      className="bg-white/90 dark:bg-neutral-900/90 rounded-full shadow-xl flex flex-col items-center justify-center border-4"
                      style={{
                        borderColor: activeSkillCategory?.color,
                        minWidth: '92px',
                        minHeight: '92px',
                        padding: "22px 20px"
                      }}
                    >
                      <span
                        className="text-center font-extrabold text-foreground text-base xs:text-lg md:text-xl lg:text-2xl tracking-tight"
                        style={{
                          color: activeSkillCategory?.color
                        }}
                      >
                        {activeSkillCategory?.title}
                      </span>
                    </div>
                  </div>

                  {/* Skill icon bubbles positioned in a circle */}
                  <div
                    className="absolute left-1/2 top-1/2 w-full h-full z-10"
                    style={{
                      maxWidth: "min(80vw, 350px)",
                      maxHeight: "min(80vw, 350px)",
                      pointerEvents: "none",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {activeSkillCategory?.skill.map((sk, idx, arrAll) => {
                      const iconCount = arrAll.length;
                      const angle = (2 * Math.PI / iconCount) * idx - Math.PI / 2; // Start from top
                      // Responsive radius - scale by breakpoints
                      let radius = 138;
                      if (typeof window !== "undefined") {
                        if (window.innerWidth < 480) radius = 50;
                        else if (window.innerWidth < 640) radius = 78;
                        else if (window.innerWidth < 900) radius = 102;
                        else if (window.innerWidth < 1200) radius = 120;
                        else radius = 138;
                      }

                      const center = 175;
                      const x = center + radius * Math.cos(angle);
                      const y = center + radius * Math.sin(angle);

                      return (
                        <div
                          key={sk.name}
                          className="skill-bubble group"
                          style={{
                            position: "absolute",
                            left: `calc(${x}px - 1.8rem)`,
                            top: `calc(${y}px - 1.8rem)`,
                            width: "3.6rem",
                            height: "3.6rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "99rem",
                            background: "#fff",
                            boxShadow: `0 3px 16px 0 ${activeSkillCategory?.color}14, 0 0 0 3px ${activeSkillCategory?.color}1a`,
                            border: `3px solid ${activeSkillCategory?.color}`,
                            transition: "transform 0.22s, box-shadow 0.22s",
                            zIndex: 6,
                            pointerEvents: "auto",
                            cursor: "pointer",
                          }}
                          tabIndex={0}
                          title={sk.name}
                        >
                          {sk.icon ? (
                            <img
                              src={sk.icon}
                              alt={sk.name}
                              className="object-contain animate-spin"
                              style={{
                                width: "2.2rem",
                                height: "2.2rem",
                                borderRadius: "99rem",
                                boxShadow: `0 1px 6px 0 ${activeSkillCategory?.color}10`
                              }}
                            />
                          ) : (
                            <span
                              className="block w-full text-center text-[.85rem] font-bold"
                              style={{
                                color: activeSkillCategory?.color
                              }}
                            >
                              {sk.name.slice(0, 2)}
                            </span>
                          )}
                          {/* Bubble label on hover/focus */}
                          <span
                            className="absolute left-1/2 top-[calc(100%+8px)] -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-black bg-opacity-70 text-white rounded px-2 py-1 text-xs font-semibold pointer-events-none shadow-lg whitespace-nowrap transition-opacity duration-200"
                          >
                            {sk.name}
                            
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Advanced Responsiveness */}
                  <style>
                    {`
                      @media (max-width: 1024px) {
                        .skill-bubble {
                          width: 2.8rem !important;
                          height: 2.8rem !important;
                        }
                      }
                      @media (max-width: 640px) {
                        .skill-bubble {
                          width: 2.1rem !important;
                          height: 2.1rem !important;
                        }
                        .skill-bubble img {
                          width: 1.3rem !important;
                          height: 1.3rem !important;
                        }
                      }
                      @media (max-width: 480px) {
                        .skill-bubble {
                          width: 1.6rem !important;
                          height: 1.6rem !important;
                        }
                      }
                    `}
                  </style>
                </div>
              </div>
            </div>
 
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
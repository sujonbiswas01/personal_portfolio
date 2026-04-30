"use client";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { GlareCard } from "./glareCard";
import { motion } from "framer-motion";
import gsap from "gsap";

const Skills = () => {
  const [skilldata, setskilldata] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    axios
      .get("/api/skills.json")
      .then((response) => {
        setskilldata(response.data);
      })
      .catch(() => {
        setskilldata([]);
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

  return (
    <section
      id="skills"
      ref={container}
      className="w-full flex flex-col items-center py-12 md:py-16 px-4"
    >
      {/* Title */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
          My Recent Skills
        </h2>
      </motion.div>

      {/* Grid */}
      <div
        className="w-full max-w-7xl mx-auto grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-4 
        gap-6 md:gap-8"
      >
        {loading || skilldata.length === 0 ? (
          // Show a single placeholder card if loading or no data, animate with bounce
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
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-gray-400 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4A8.001 8.001 0 004 12z"
                  ></path>
                </svg>
              </div>
              <h1 className="text-lg font-bold text-gray-300 mb-2 animate-bounce">Skills Pending...</h1>
              <p className="text-sm text-gray-400">Fetching latest skills data</p>
            </motion.div>
          </GlareCard>
        ) : (
          skilldata.map((item: any, idx: number) => (
            <GlareCard key={idx}>
              {/* Header */}
              <h1
                className="text-center font-bold text-white py-3 rounded-lg text-base sm:text-lg md:text-xl"
                style={{ backgroundColor: item.color }}
              >
                {item.title}
              </h1>

              {/* Skills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {item.skill.map((skill: any, i: number) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-md transition"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                  >
                    {skill.icon ? (
                      <img
                        src={skill.icon}
                        className="w-7 h-7 object-contain"
                        alt={skill.name}
                      />
                    ) : (
                      <div className="w-7 h-7 flex items-center justify-center bg-gray-700 text-white rounded">
                        {skill.name?.[0]}
                      </div>
                    )}

                    <p className="text-sm sm:text-base text-white font-medium">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </GlareCard>
          ))
        )}
      </div>
    </section>
  );
};

export default Skills;
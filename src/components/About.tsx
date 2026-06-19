"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";

const Abouts = () => {
  const container = useRef<HTMLDivElement>(null);
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    if (container.current) {
      gsap.fromTo(
        container.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.8, ease: "linear" }
      );
    }
  }, []);

  return (
    <div className="bg-background">
      <section
        ref={container}
        id="about"
        className="w-full flex items-center justify-center transition-all duration-200 linear"
        style={{
          background:
            "radial-gradient(ellipse at 60% 20%, #15254b45 0%, transparent 75%)",
        }}
      >
        <div className="relative border border-primary/20 rounded-3xl shadow-sm overflow-hidden z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 ">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "linear" }}
          >
            <h2 className="font-black text-4xl md:text-6xl text-foreground tracking-tight mt-4 lg:mt-6  mb-4">
              About <span className="text-primary">Me</span>
            </h2>
          </motion.div>
          <div className="w-full bg-card  flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-14 backdrop-blur pb-10 md:pb-14 transition-all duration-200 ease-out">
            {/* Left: Textual Content */}
            <motion.div
              className="w-full lg:w-[58%] flex flex-col justify-center "
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.28, ease: "linear" }}
            >
              <div className="space-y-6 text-left">
                <p className="text-base md:text-lg text-foreground leading-relaxed max-w-2xl">
                  I am Sujon Biswas, a Computer Science and Technology diploma student at Sylhet Polytechnic Institute and a passionate Full Stack Developer from Sylhet, Bangladesh. I started my journey in technology with basic computer skills, which quickly grew into a strong interest in programming. I began with Python, learned Data Structures and Algorithms using Java, and explored multiple technologies to build a solid software engineering foundation.
                </p>
                <p className="text-base md:text-lg text-foreground leading-relaxed max-w-2xl">
                  I later moved into web development and started building real-world applications, focusing on creating scalable, responsive, and user-friendly systems. Currently, I am improving my backend development skills with Go (Golang) while continuously working on projects and learning modern technologies.
                </p>
                <p className="text-base md:text-lg text-foreground leading-relaxed max-w-2xl">
                  My goal is to grow as a software engineer and ultimately become an AI Engineer, contributing to innovative solutions that make a meaningful impact.
                </p>


              </div>
            </motion.div>

            {/* Right: Image Content */}
            <motion.div
              className="relative w-full sm:w-[300px] md:w-[340px] lg:w-[340px] flex items-center justify-center py-4 md:py-0"
              initial={{ opacity: 0, x: 54 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              <div className="relative group w-full max-w-xs rounded-3xl aspect-square bg-card border border-primary/10 overflow-hidden shadow-sm flex items-center justify-center transition-all duration-200 ease-out">

                {/* Decorative Ring */}
                <div className="absolute inset-0 z-10 pointer-events-none rounded-3xl ring-2 ring-primary/10 group-hover:ring-primary/20 ring-offset-0 transition-all duration-200 ease-out" />
                {/* Image */}
                {loading && (
                  <div className="absolute inset-0 rounded-3xl animate-pulse">
                    <div className="w-full h-full bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800" />
                  </div>
                )}

                <Image src="/images/sujonbiswas.webp"
                  alt="Sujon Biswas"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={` object-cover rounded-3xl border border-primary/10 transition-all duration-500 ${loading ? "opacity-0 scale-105" : "opacity-100 scale-100"} `}
                  onLoad={() => setLoading(false)} />
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-primary/5 z-20 rounded-3xl group-hover:opacity-80 transition-opacity duration-200 ease-out" />
                {/* Artistic accent - subtle swipe */}
                <div className="absolute left-[-10%] top-0 w-[45%] h-full bg-primary/10 rotate-[-18deg] pointer-events-none z-30" />
                {/* Corner badge */}
                <span className="absolute bottom-4 right-4 z-40 bg-primary px-4 py-1 rounded-xl text-background font-bold text-sm tracking-wide shadow-md border border-primary/30 transition-all duration-200 ease-out select-none">
                  Full-Stack Dev 💻
                </span>
              </div>
            </motion.div>

            {/* Decorative Radial Glow */}
            <div className="absolute left-[-48px] top-1/2 -translate-y-1/2 h-[120px] w-[120px] rounded-full bg-primary/10 blur-3xl opacity-20 pointer-events-none -z-10" />
            <div className="absolute right-[-18px] bottom-[-22px] h-[58px] w-[58px] rounded-full bg-primary/10 blur-2xl opacity-25 pointer-events-none -z-10" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Abouts;
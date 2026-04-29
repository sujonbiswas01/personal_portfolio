"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const Abouts = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      gsap.fromTo(
        container.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <section
      ref={container}
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center px-2 sm:px-6 lg:px-8 py-10 md:py-20 transition-all duration-300"
      style={{
        background:
          "radial-gradient(ellipse at 60% 20%, #15254b45 0%, transparent 75%)",
      }}
    >
      <div className="relative z-10 w-full max-w-7xl bg-black/80 border border-slate-800 rounded-2xl shadow-xl overflow-hidden flex flex-col-reverse lg:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16 backdrop-blur-xl">
        {/* Left: Textual Content */}
        <motion.div
          className="w-full lg:w-[60%] flex flex-col justify-center py-10 lg:py-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "backOut" }}
        >
          <h2 className="font-primary text-center lg:text-left font-extrabold drop-shadow-[0_4px_16px_#05207766] text-transparent bg-clip-text bg-gradient-to-r from-[#2c83f8] via-[#00e9be] to-[#9EFF00] text-[2.1rem] sm:text-[2.5rem] md:text-[2.8rem] lg:text-[3.3rem] mb-5 tracking-tight select-none">
            About{" "}
            <span className="bg-gradient-to-r from-[#9EFF00] to-[#0577fd] bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <motion.div
            className="space-y-7 md:space-y-10  rounded-xl border-l-4 border-[#9EFF00] bg-gradient-to-r from-[#182848ed] via-[#15254bbb] to-[#1e293bea] shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.90, ease: "easeOut" }}
          >
            <motion.p
              className="text-slate-100 text-base md:text-lg leading-relaxed bg-[#00e9be10] rounded transition-all"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              viewport={{ once: true }}
            >
              I’m <span className="text-[#9EFF00] font-semibold">Sujon Biswas</span>,
              a <span className="text-[#00e9be] font-semibold">Full-Stack Web Developer</span> passionate about crafting modern, scalable, and high-performance web apps.
              My expertise spans the frontend (
              <span className="font-medium text-[#9EFF00]">React</span>,
              <span className="text-[#0577fd]">Next.js</span>,
              <span className="text-[#bde317]">TypeScript</span>,
              <span className="text-[#09bfa8]">Tailwind</span>
              ) and backend (
              <span className="text-[#235cfa]">Node.js</span>,
              <span className="text-[#1eacab]">Express</span>,
              <span className="text-[#e19b36]">MongoDB</span>,
              <span className="text-[#4339bf]">PostgreSQL</span>
              ). I create seamless, responsive interfaces and architect robust, secure APIs.
            </motion.p>
            <motion.p
              className="text-[#c7e3fa] text-base md:text-lg leading-relaxed bg-[#0577fd10] rounded transition-all"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              viewport={{ once: true }}
            >
              I’m dedicated to writing <span className="text-[#9EFF00] font-semibold">clean, maintainable code</span>
              —always following best practices.
              Skilled with <span className="text-[#fd6f00]">design tools</span> like <span className="font-semibold text-white">Figma</span> and <span className="font-semibold text-white">Adobe Suite</span>,
              I bridge development &amp; design for visually stunning user experiences.
              My workflow includes Docker, Git, GitHub, and Vercel for smooth CI/CD.
            </motion.p>
            <motion.ul
              className="list-disc pl-6 mt-2 text-sm md:text-base text-[#b8b3b3] space-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              viewport={{ once: true }}
            >
              <li>
                <span className="text-[#9EFF00] font-semibold">Professional Training:</span> Programming Hero, Next Level Web Development, Udemy, Hablu Programmer
              </li>
              <li>
                <span className="text-[#9EFF00] font-semibold">Education:</span> Computer Science &amp; Technology at Sylhet Polytechnic Institute
              </li>
            </motion.ul>
            <motion.p
              className="bg-gradient-to-r from-[#b2ff52] to-[#82afff] bg-clip-text text-transparent font-semibold text-base md:text-lg pt-3"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.47 }}
              viewport={{ once: true }}
            >
              <span className="inline-block animate-pulse duration-1000">
                “My passion? Innovating with code &amp; design to deliver meaningful digital experiences.”
              </span>
            </motion.p>
          </motion.div>
     
        </motion.div>

        {/* Right: Image Content */}
        <motion.div
          className="relative w-full sm:w-[320px] md:w-[380px] lg:w-[380px] flex items-center justify-center px-0 py-8 lg:py-0"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.95, ease: "backOut" }}
        >
          <div className="relative group w-[86vw] sm:w-[300px] md:w-[340px] lg:w-[340px] max-w-xs rounded-2xl aspect-square bg-gradient-to-br from-[#1e293b] via-[#15254b] to-[#272730] overflow-hidden shadow-[0_8px_40px_0_#052d3260] flex items-center justify-center">
            {/* Decorative Ring */}
            <div className="absolute inset-0 z-10 pointer-events-none rounded-2xl ring-4 ring-[#9EFF00]/20 ring-offset-2 ring-offset-slate-900 group-hover:ring-[#9EFF00]/40 transition-all duration-300" />
            {/* Image */}
            <img
              src="https://res.cloudinary.com/drmeagmkl/image/upload/v1765536346/sujonbiswas_exfo5o.jpg"
              alt="Sujon Biswas"
              className="rounded-2xl w-full h-full object-cover border-4 border-[#101e2c]/40 group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            {/* Overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t opacity-75 from-[#101e2ca7] to-transparent z-20 rounded-2xl group-hover:opacity-60 transition-opacity duration-300" />
            {/* Artistic accent - angled gradient swipe */}
            <div className="absolute left-[-15%] top-0 w-[55%] h-full bg-gradient-to-tl from-[#0577fd40] to-transparent rotate-[-22deg] pointer-events-none z-30" />
            {/* Corner badge */}
            <span className="absolute bottom-4 right-4 z-40 bg-[#9EFF00]/80 px-4 py-1 rounded-md text-black font-bold text-xs tracking-wide shadow-lg border border-[#9EFF00]/70 drop-shadow-[0_3px_11px_#9eff00bb]">
              Full-Stack Dev 💻
            </span>
          </div>
        </motion.div>

        {/* Decorative Radial Glow */}
        <div className="absolute left-[-60px] top-1/2 -translate-y-1/2 h-[190px] w-[190px] rounded-full bg-[#13388e55] blur-3xl opacity-30 pointer-events-none -z-10" />
        <div className="absolute right-[-30px] bottom-[-30px] h-[110px] w-[110px] rounded-full bg-[#9EFF0090] blur-2xl opacity-40 pointer-events-none -z-10" />
      </div>
    </section>
  );
};

export default Abouts;
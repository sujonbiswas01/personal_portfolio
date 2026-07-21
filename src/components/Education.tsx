"use client";

import { GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const education = [
  {
    title: "Diploma in Computer Science & Technology",
    org: "Sylhet Polytechnic Institute",
    period: "2023 — Present",
    detail:
      "Currently pursuing a diploma focused on programming, web development, databases, and software engineering fundamentals.",
  },
  {
    title: "Secondary School Certificate (SSC)",
    org: "Lutfur Rahman High School & College",
    period: "2021 — 2022",
    detail:
      "Completed SSC with a strong academic foundation and general education.",
  },
];

const timelineContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const timelineItem: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 14 } },
};

export default function EducationPage() {
  return (
    <section id="education" className="w-full section-space bg-background px-4 md:px-6 lg:px-8">
      <div className="">
        {/* HEADER */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
        >
        
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "linear" }}
          >
            <h2 className="font-black text-4xl md:text-6xl text-foreground tracking-tight ">
            Education &{" "} <span className="text-primary">Experience</span>
            </h2>
          </motion.div>
          <motion.p
            className="mt-5 text-muted-foreground max-w-full mx-auto text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.17, type: "spring" }}
          >
            My academic background and hands-on developer journey.
          </motion.p>
        </motion.div>

        {/* EDUCATION TIMELINE */}
        <Timeline
          title="Education"
          icon={<GraduationCap size={22} />}
          data={education}
          colorFrom="from-blue-500"
          colorTo="to-purple-500"
        />
      </div>
    </section>
  );
}

function Timeline({
  title,
  icon,
  data,
  colorFrom,
  colorTo
}: {
  title: string;
  icon: React.ReactNode;
  data: {
    title: string;
    org: string;
    period: string;
    detail: string;
  }[];
  colorFrom: string;
  colorTo: string;
}) {
  return (
    <motion.div
      className="mt-12"
      variants={timelineContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* TITLE */}
      <div className="flex items-center gap-3 mb-10">
        <span
          className={`p-3 rounded-lg text-white shadow-lg bg-gradient-to-br ${colorFrom} ${colorTo} animate-spin-slow`}
        >
          {icon}
        </span>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-slate-400/80 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
          {title}
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative border-l-4 border-gradient-l min-h-[120px] space-y-12 px-4 md:px-6 lg:px-8">
        {data.map((item, i) => (
          <motion.div
            variants={timelineItem}
            key={i}
            className="relative group pl-9 sm:pl-12"
          >
            {/* Animated Dot */}
            <motion.span
              className={`absolute -left-5 sm:-left-7 top-2 w-4 h-4 rounded-full bg-gradient-to-br ${colorFrom} ${colorTo} shadow-[0_4px_16px_0_${i%2===0?"#6366f1":"#a7f3d0"}50] group-hover:scale-125 group-hover:rotate-6 transition-all`}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 12,
              }}
              initial={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.25, rotate: 13 }}
            />

            {/* Animated Timeline Line Accent */}
            <span
              className={`absolute left-0 top-0 h-full w-1.5 rounded-lg bg-gradient-to-b ${colorFrom} ${colorTo} opacity-20`}
              aria-hidden
            />

            {/* CARD */}
            <motion.div
              className="transition-shadow hover:shadow-xl"
              whileHover={{ scale: 1.03, zIndex: 10 }}
              whileTap={{ scale: 0.99 }}
              transition={{
                type: "spring",
                stiffness: 220,
              }}
            >
              <Card className="border-none ring-1 ring-gray-200 dark:ring-gray-700 shadow-[0_4px_32px_0_rgba(124,58,237,0.14)] group-hover:ring-2 group-hover:ring-blue-400/50 hover:shadow-blue-200/50 dark:hover:shadow-purple-700/20 duration-200">
                <CardContent className="p-5 sm:p-7">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <motion.h3
                      className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white"
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.13 + i * 0.08, type: "spring", stiffness: 100 }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.span
                      className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-300 font-medium shadow"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.35, delay: 0.2 + i * 0.06, type: "spring" }}
                    >
                      {item.period}
                    </motion.span>
                  </div>
                  <motion.p
                    className="text-primary text-sm mt-1 font-medium"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.17 + i * 0.07, type: "spring", stiffness: 100 }}
                  >
                    {item.org}
                  </motion.p>
                  <motion.p
                    className="text-muted-foreground text-sm mt-3 leading-relaxed"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.23 + i * 0.08, type: "spring" }}
                  >
                    {item.detail}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

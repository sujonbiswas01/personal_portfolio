"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate fast progress for perceived speed
    const timer1 = setTimeout(() => setProgress(30), 100);
    const timer2 = setTimeout(() => setProgress(60), 300);
    const timer3 = setTimeout(() => setProgress(85), 600);

    const handleReady = () => {
      setProgress(100);
      // Short delay after 100% to let animation play
      setTimeout(() => setIsLoading(false), 400);
    };

    // Check if page is already loaded
    if (document.readyState === "complete") {
      handleReady();
    } else {
      window.addEventListener("load", handleReady);
      // Fallback - don't keep loading forever
      const fallbackTimer = setTimeout(handleReady, 2500);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(fallbackTimer);
        window.removeEventListener("load", handleReady);
      };
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="page-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
            style={{
              background:
                "radial-gradient(ellipse at 50% 40%, #1a1f3d 0%, #0d1117 60%, #030712 100%)",
            }}
          >
            {/* Ambient glow */}
            <div
              className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-[100px]"
              style={{
                background:
                  "radial-gradient(circle, #6366f1 0%, #3b82f6 40%, transparent 70%)",
                top: "30%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* Logo / Branding */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center gap-6"
            >
              {/* Animated Code Icon */}
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent, #6366f1, transparent)",
                    padding: "2px",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    width: "80px",
                    height: "80px",
                  }}
                />
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600/20 to-blue-600/20 border border-indigo-500/20 flex items-center justify-center backdrop-blur-sm">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-indigo-400"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                    <line x1="12" y1="2" x2="12" y2="22" opacity="0.3" />
                  </svg>
                </div>
              </div>

              {/* Name */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-center"
              >
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-indigo-200 to-blue-200 bg-clip-text text-transparent tracking-tight">
                  Sujon Biswas
                </h1>
                <p className="text-sm text-indigo-300/60 mt-1 font-medium tracking-wider uppercase">
                  Full Stack Developer
                </p>
              </motion.div>

              {/* Progress Bar */}
              <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden mt-2">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #6366f1, #3b82f6, #06b6d4)",
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>

              {/* Loading text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xs text-indigo-300/40 tracking-widest uppercase"
              >
                Loading portfolio...
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Always render children underneath so they hydrate in background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        {children}
      </motion.div>
    </>
  );
}

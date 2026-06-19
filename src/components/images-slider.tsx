"use client";

import React, { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import type { Variants } from "motion";

export interface ImagesSliderProps {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}

export const ImagesSlider: React.FC<ImagesSliderProps> = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [showBg, setShowBg] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const showNextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const showPrevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Preload images progressively - show first one immediately when ready
  useEffect(() => {
    if (!isClient) return;
    let isMounted = true;

    // Load images one by one for faster first paint
    const loadImage = (src: string): Promise<string> => {
      return new Promise((resolve, reject) => {
        const img = new window.Image();
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = reject;
      });
    };

    // Load first image fast, then rest in parallel
    loadImage(images[0])
      .then((first) => {
        if (isMounted) {
          setLoadedImages([first]);
          setShowBg(true);
        }
        // Load remaining images in background
        return Promise.all(images.slice(1).map(loadImage));
      })
      .then((rest) => {
        if (isMounted) {
          setLoadedImages([images[0], ...rest]);
        }
      })
      .catch((error) => {
        // Even on error, try to show what we have
        if (isMounted && loadedImages.length === 0) {
          setShowBg(false);
        }
        console.error("Failed to preload images:", error);
      });

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images, isClient]);

  useEffect(() => {
    if (!isClient) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") showNextImage();
      if (e.key === "ArrowLeft") showPrevImage();
    };
    window.addEventListener("keydown", handleKeyDown);

    let autoplayInterval: ReturnType<typeof setInterval> | undefined;
    if (autoplay) {
      autoplayInterval = setInterval(showNextImage, 3500);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (autoplayInterval) clearInterval(autoplayInterval);
    };
  }, [autoplay, showNextImage, showPrevImage, isClient]);

  // Animation for sliding images
  const slideVariants: Variants = {
    initial: { scale: 1.05, opacity: 0, filter: "blur(6px)", zIndex: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      zIndex: 1,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
    upExit: {
      opacity: 0,
      y: "-14%",
      scale: 1.03,
      filter: "blur(6px)",
      transition: { duration: 0.9, ease: "easeInOut" },
      zIndex: 0,
    },
    downExit: {
      opacity: 0,
      y: "14%",
      scale: 1.03,
      filter: "blur(6px)",
      transition: { duration: 0.9, ease: "easeInOut" },
      zIndex: 0,
    },
  };

  const baseBgColor = "bg-[#10152A]";

  const imagesReady = loadedImages.length > 0 && showBg;

  // Server render: show a styled placeholder immediately (not blank)
  if (!isClient) {
    return (
      <section
        className={cn(
          "relative flex items-center justify-center w-full min-h-[44vh] overflow-hidden transition-all duration-300",
          baseBgColor,
          className
        )}
        style={{ perspective: 1200 }}
        aria-live="polite"
        tabIndex={0}
      >
        {/* Gradient placeholder while SSR */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 40%, #0f172a 100%)",
          }}
        />
        {/* Overlay */}
        {overlay && (
          <div
            className={cn(
              "absolute inset-0 z-10 bg-gradient-to-tr from-background/30 via-background/30 to-background/30 pointer-events-none",
              overlayClassName
            )}
          />
        )}
        {/* Render children even during SSR for faster perceived load */}
        <div className="relative z-20 select-none pointer-events-auto w-full h-full flex items-center justify-center">
          <React.Fragment>
            {children}
          </React.Fragment>
        </div>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "relative flex items-center justify-center w-full min-h-[44vh] overflow-hidden ",
        baseBgColor,
        className
      )}
      style={{ perspective: 1200 }}
      aria-live="polite"
      tabIndex={0}
    >
      {/* Background Image: animated and visible */}
      {imagesReady && (
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex % loadedImages.length]}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="absolute inset-0 w-full h-full object-cover object-center z-0 select-none pointer-events-none opacity-100 transition-opacity"
            alt={`Background visual ${currentIndex + 1}`}
            draggable={false}
            loading="eager"
            aria-hidden="true"
          />
        </AnimatePresence>
      )}

      {imagesReady && overlay && (
        <div
          className={cn(
            "absolute inset-0 z-10 bg-gradient-to-tr from-background/30 via-background/30 to-background/30 pointer-events-none transition-opacity duration-300",
            overlayClassName
          )}
        >
          {typeof overlay !== "boolean" ? overlay : null}
        </div>
      )}

      {/* Fallback gradient background if images are not ready */}
      {!imagesReady && (
        <div
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 40%, #0f172a 100%)",
          }}
          aria-hidden="true"
        />
      )}
      {!imagesReady && overlay && (
        <div
          className={cn(
            "absolute inset-0 z-10 bg-gradient-to-tr from-background/30 via-background/30 to-background/30 pointer-events-none",
            overlayClassName
          )}
        />
      )}

      <div className="relative z-20 select-none pointer-events-auto w-full h-full flex items-center justify-center">
        <React.Fragment>
          {children}
        </React.Fragment>
      </div>

      {/* Screen reader for current image info */}
      <span className="sr-only">
        {`Slideshow image ${currentIndex + 1} of ${images.length}`}
      </span>
    </section>
  );
};
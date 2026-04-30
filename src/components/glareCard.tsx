"use client";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export const GlareCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 10;
    const rotateY = ((x / rect.width) - 0.5) * -10;

    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform = "rotateX(0) rotateY(0)";
    }
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className={cn(
        "w-full h-full rounded-2xl p-4 md:p-5",
        "bg-gradient-to-br from-[#161622] to-[#232335]",
        "border border-slate-800 shadow-lg",
        "transition-transform duration-300 ease-out",
        "hover:shadow-xl",
        className
      )}
    >
      <div className="h-full flex flex-col ">
        {children}
      </div>
    </div>
  );
};
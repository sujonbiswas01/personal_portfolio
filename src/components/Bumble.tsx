"use client";

import { useEffect, useRef } from "react";

type BubbleType = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
  wave: number;
  color: string
};

const colors = [
  "59,130,246",   // blue
  "0,255,220",    // cyan
  "168,85,247",   // purple
  "236,72,153",   // pink
  "34,197,94",    // green
];

export default function Bumble() {
  const canvasRef =
    useRef<HTMLCanvasElement | null>(
      null
    );

  useEffect(() => {
    const canvas =
      canvasRef.current;

    if (!canvas) return;

    const ctx =
      canvas.getContext("2d");

    if (!ctx) return;

    let frame = 0;

    const resize = () => {
      canvas.width =
        window.innerWidth;

      canvas.height =
        window.innerHeight;
    };

    resize();

    const createBubble =
      (): BubbleType => ({
        x:
          Math.random() *
          canvas.width,

        y:
          canvas.height +
          Math.random() * 100,

        radius:
          Math.random() * 4 + 2,

        speed:
          Math.random() * 2 + 1,

        opacity:
          Math.random() * 0.5 + 0.2,

        wave:
          Math.random() * 100,
        color:
          colors[
          Math.floor(
            Math.random() *
            colors.length
          )
          ]
      });

    const bubbles =
      Array.from(
        { length: 30 },
        createBubble
      );

    const update =
      (
        bubble: BubbleType
      ) => {
        bubble.y -=
          bubble.speed;

        bubble.x +=
          Math.sin(
            bubble.y * 0.02 +
            bubble.wave
          ) * 0.6;

        if (
          bubble.y < -20
        ) {
          Object.assign(
            bubble,
            createBubble()
          );
        }
      };

    const draw =
      (
        bubble: BubbleType
      ) => {
        ctx.beginPath();

        ctx.arc(
          bubble.x,
          bubble.y,
          bubble.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          `rgba(
${bubble.color},
${bubble.opacity}
)`
        ctx.fill();
      };

    const animate =
      () => {
        ctx.clearRect(
          0,
          0,
          canvas.width,
          canvas.height
        );

        bubbles.forEach(
          (bubble) => {
            update(
              bubble
            );

            draw(
              bubble
            );
          }
        );

        frame =
          requestAnimationFrame(
            animate
          );
      };

    animate();

    window.addEventListener(
      "resize",
      resize
    );

    return () => {
      cancelAnimationFrame(
        frame
      );

      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
    <div id="fizz-canvas" className="">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
    </div>
  );
}
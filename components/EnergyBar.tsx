"use client";

import { useEffect, useRef } from "react";
import { ensureGsapRegistered, gsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/cn";

/** Thin horizontal accent bar with a slow traveling shimmer — the "energy line" motif. */
export default function EnergyBar({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ensureGsapRegistered();
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const anim = gsap.fromTo(
      el,
      { backgroundPositionX: "0%" },
      {
        backgroundPositionX: "200%",
        duration: 3.2,
        repeat: -1,
        ease: "sine.inOut",
      },
    );

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("h-[3px] w-full bg-gradient-brand-h", className)}
      style={{
        backgroundImage:
          "linear-gradient(90deg, #F1BA18 0%, #CC7B16 35%, #FFE8A3 50%, #CC7B16 65%, #F1BA18 100%)",
        backgroundSize: "220% 100%",
      }}
    />
  );
}

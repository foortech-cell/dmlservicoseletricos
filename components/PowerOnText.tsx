"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { ensureGsapRegistered, gsap, prefersReducedMotion } from "@/lib/gsap";

/** Hero headline entrance: a brief "power turning on" flicker before settling, once, on mount. */
export default function PowerOnText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    ensureGsapRegistered();
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({ delay: 0.1 });
    tl.set(el, { opacity: 0, y: 18 })
      .to(el, { opacity: 0.55, y: 0, duration: 0.09, ease: "none" })
      .to(el, { opacity: 0.12, duration: 0.05, ease: "none" })
      .to(el, { opacity: 0.85, duration: 0.07, ease: "none" })
      .to(el, { opacity: 0.25, duration: 0.045, ease: "none" })
      .to(el, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        filter: "drop-shadow(0 0 22px rgba(241,186,24,0.35))",
      })
      .to(el, { filter: "drop-shadow(0 0 0px rgba(241,186,24,0))", duration: 0.6 }, "-=0.1");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <h1 ref={ref} className={className}>
      {children}
    </h1>
  );
}

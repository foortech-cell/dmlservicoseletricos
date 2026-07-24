"use client";

import { useEffect, useRef } from "react";
import type { ElementType, ReactNode, Ref } from "react";
import { ensureGsapRegistered, gsap, prefersReducedMotion } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  y?: number;
};

/** Fades + lifts a single element into view the first time it enters the viewport. */
export default function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  y = 24,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    ensureGsapRegistered();
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const anim = gsap.fromTo(
      el,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,
        },
      },
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [delay, y]);

  const Component = Tag as ElementType;
  return (
    <Component ref={ref as Ref<never>} className={className}>
      {children}
    </Component>
  );
}

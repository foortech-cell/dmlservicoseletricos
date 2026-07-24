"use client";

import { useEffect, useRef, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/** Registers GSAP plugins exactly once, client-side only. */
export function ensureGsapRegistered() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  // iOS Safari recalculates layout oddly when the address bar hides/shows;
  // this keeps ScrollTrigger positions honest without fighting the bounce scroll.
  ScrollTrigger.config({ ignoreMobileResize: true });
  registered = true;
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export { gsap, ScrollTrigger };

/**
 * Fades + lifts a group of elements into view as they cross the viewport.
 * Scoped with gsap.context so it's fully cleaned up on unmount (no leaks
 * across client-side navigations, no duplicate ScrollTriggers in Strict Mode).
 */
export function useScrollReveal<T extends HTMLElement>(
  selector = "[data-reveal]",
  options?: { y?: number; stagger?: number },
): RefObject<T | null> {
  const scope = useRef<T | null>(null);

  useEffect(() => {
    ensureGsapRegistered();
    if (!scope.current) return;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(selector);
      if (!targets.length) return;

      if (prefersReducedMotion()) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      targets.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: options?.y ?? 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            delay: (i % 6) * (options?.stagger ?? 0.08),
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
              once: true,
            },
          },
        );
      });
    }, scope);

    return () => ctx.revert();
  }, [selector, options?.y, options?.stagger]);

  return scope;
}

"use client";

import { useEffect, useRef } from "react";
import { ensureGsapRegistered, gsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * Renders a stat string (e.g. "5+", "24h", "PIX") and, when it starts with a
 * number, counts up to that value as it scrolls into view. Non-numeric
 * strings (like "PIX" or "FRG") just render as-is.
 */
export default function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const match = value.match(/^(\d+)(.*)$/);

  useEffect(() => {
    ensureGsapRegistered();
    const el = ref.current;
    if (!el || !match) return;

    const target = Number(match[1]);
    const suffix = match[2];

    if (prefersReducedMotion()) {
      el.textContent = value;
      return;
    }

    const counter = { n: 0 };
    const anim = gsap.to(counter, {
      n: target,
      duration: 1.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        once: true,
      },
      onUpdate: () => {
        el.textContent = `${Math.round(counter.n)}${suffix}`;
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [match, value]);

  if (!match) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      0{match[2]}
    </span>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { ensureGsapRegistered, gsap, prefersReducedMotion } from "@/lib/gsap";

/** Thin "charge level" bar pinned to the top of the viewport, tracking scroll progress. */
export default function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ensureGsapRegistered();
    const el = barRef.current;
    if (!el) return;

    const setInstant = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
      el.style.width = `${pct}%`;
    };

    if (prefersReducedMotion()) {
      setInstant();
      window.addEventListener("scroll", setInstant, { passive: true });
      return () => window.removeEventListener("scroll", setInstant);
    }

    const anim = gsap.to(el, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.2,
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed right-0 left-0 z-50 h-[3px] bg-transparent"
      style={{ top: "env(safe-area-inset-top)" }}
    >
      <div ref={barRef} className="h-full w-0 bg-gradient-brand-h" />
    </div>
  );
}

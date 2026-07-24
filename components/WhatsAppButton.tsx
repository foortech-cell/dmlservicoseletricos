"use client";

import { useEffect, useRef } from "react";
import { ensureGsapRegistered, gsap, prefersReducedMotion } from "@/lib/gsap";
import WhatsAppLink from "./WhatsAppLink";
import WhatsAppIcon from "./WhatsAppIcon";

/** Floating WhatsApp CTA, fixed to the viewport corner on every screen size. */
export default function WhatsAppButton() {
  const ringRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    ensureGsapRegistered();
    const el = ringRef.current;
    if (!el || prefersReducedMotion()) return;

    const anim = gsap.fromTo(
      el,
      { scale: 1, opacity: 0.55 },
      {
        scale: 1.6,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: "power1.out",
        repeatDelay: 0.4,
      },
    );

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <div
      className="fixed right-5 z-40 h-14 w-14"
      style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
    >
      <span
        ref={ringRef}
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-gold-500"
      />
      <WhatsAppLink
        source="floating_button"
        variant="floating"
        icon={false}
        className="relative"
      >
        <WhatsAppIcon className="h-8 w-8" />
        <span className="sr-only">Chamar no WhatsApp</span>
      </WhatsAppLink>
    </div>
  );
}

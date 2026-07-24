"use client";

import { useEffect, useRef } from "react";
import { ensureGsapRegistered, gsap, prefersReducedMotion } from "@/lib/gsap";
import { Activity, ShieldCheck } from "lucide-react";

/**
 * Enhanced animated bolt — the hero's signature visual, built from the
 * lightning-bolt cut of the DML logo with dual-tone cyber glows, energy rings
 * and futuristic HUD status indicators.
 */
export default function ElectricBolt() {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const ring1Ref = useRef<HTMLDivElement | null>(null);
  const ring2Ref = useRef<HTMLDivElement | null>(null);
  const boltRef = useRef<HTMLDivElement | null>(null);
  const secondaryBoltRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ensureGsapRegistered();
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.to(glowRef.current, {
        opacity: 0.55,
        scale: 1.25,
        duration: 1.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      [ring1Ref.current, ring2Ref.current].forEach((ring, i) => {
        gsap.fromTo(
          ring,
          { scale: 0.6, opacity: 0.8 },
          {
            scale: 1.6,
            opacity: 0,
            duration: 2.4,
            ease: "power1.out",
            repeat: -1,
            delay: i * 1.2,
          }
        );
      });

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });
      tl.to(boltRef.current, {
        y: -10,
        duration: 1.2,
        ease: "sine.inOut",
        filter: "drop-shadow(0 0 30px rgba(241,186,24,0.85)) drop-shadow(0 0 45px rgba(0,240,255,0.4))",
      })
        .to(boltRef.current, {
          y: 0,
          duration: 1.2,
          ease: "sine.inOut",
          filter: "drop-shadow(0 0 20px rgba(241,186,24,0.5)) drop-shadow(0 0 30px rgba(0,240,255,0.25))",
        })
        .to(
          boltRef.current,
          { scale: 1.05, duration: 0.08, ease: "power1.out" },
          "-=1.2"
        )
        .to(boltRef.current, { scale: 1, duration: 0.1, ease: "power1.in" });

      if (secondaryBoltRef.current) {
        gsap.to(secondaryBoltRef.current, {
          opacity: 0.6,
          scale: 1.1,
          duration: 0.8,
          ease: "rough({ template: none, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false })",
          yoyo: true,
          repeat: -1,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative flex aspect-[4/5] w-full max-w-[400px] items-center justify-center overflow-hidden rounded-[28px] border border-gold-400/30 bg-gradient-to-b from-ink-900/90 via-ink-950 to-ink-950 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-md hud-corner-box">
      {/* HUD Top Bar */}
      <div className="absolute top-4 left-6 right-6 flex items-center justify-between font-mono text-[10px] text-ink-400">
        <span className="flex items-center gap-1.5 text-cyan-300">
          <Activity className="h-3 w-3 text-cyan-400 animate-pulse" />
          VOLTAGE: 220V ULTRA-STABLE
        </span>
        <span className="text-gold-400 font-bold">DML POWER TECH</span>
      </div>

      {/* Glow Orbs */}
      <div
        ref={glowRef}
        className="absolute h-[320px] w-[320px] rounded-full bg-gradient-cyber opacity-30 blur-[75px]"
        aria-hidden="true"
      />

      {/* Energy Rings */}
      <div
        ref={ring1Ref}
        className="absolute h-[280px] w-[280px] rounded-full border border-cyan-400/40"
        aria-hidden="true"
      />
      <div
        ref={ring2Ref}
        className="absolute h-[280px] w-[280px] rounded-full border border-gold-400/50"
        aria-hidden="true"
      />

      {/* Secondary Cyan Energy Echo Bolt */}
      <div
        ref={secondaryBoltRef}
        className="clip-dml-bolt absolute h-[260px] w-[165px] bg-cyan-400 opacity-25 blur-md"
        aria-hidden="true"
      />

      {/* Primary DML Lightning Bolt */}
      <div
        ref={boltRef}
        className="glow-bolt-cyber clip-dml-bolt relative h-[255px] w-[160px] bg-gradient-brand transition-transform hover:scale-105 cursor-pointer"
        aria-hidden="true"
      />

      {/* HUD Bottom Status Badge */}
      <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between rounded-xl border border-ink-800 bg-ink-950/80 px-3.5 py-2 font-mono text-[11px] backdrop-blur-md">
        <span className="flex items-center gap-2 text-ink-300">
          <ShieldCheck className="h-3.5 w-3.5 text-gold-400" />
          PROTEÇÃO DR / DPS
        </span>
        <span className="text-emerald-400 font-bold">GRID ONLINE</span>
      </div>
    </div>
  );
}

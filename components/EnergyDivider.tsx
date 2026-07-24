"use client";

import { Zap } from "lucide-react";

interface EnergyDividerProps {
  label?: string;
  badge?: string;
}

export default function EnergyDivider({ label, badge }: EnergyDividerProps) {
  return (
    <div className="relative my-8 flex w-full items-center justify-center overflow-hidden py-4">
      {/* High-voltage glow line */}
      <div className="absolute inset-x-0 top-1/2 h-[1px] -translate-y-1/2 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent sm:via-gold-400/50" />
      
      {/* Traveling energy pulse line */}
      <div className="animate-energy-pulse absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px]" />

      {/* Center DML Lightning Badge */}
      <div className="relative z-10 flex items-center gap-3 rounded-full border border-gold-400/40 bg-ink-950/90 px-4 py-1.5 shadow-[0_0_20px_rgba(241,186,24,0.25)] backdrop-blur-md">
        <div className="relative flex h-6 w-6 items-center justify-center">
          <div
            className="glow-bolt-gold clip-dml-bolt absolute h-5 w-3.5 bg-gradient-brand"
            aria-hidden="true"
          />
          <Zap className="relative z-10 h-3.5 w-3.5 text-ink-950 fill-ink-950" />
        </div>

        {label && (
          <span className="font-mono text-xs font-bold tracking-widest text-gold-400 uppercase">
            {label}
          </span>
        )}

        {badge && (
          <span className="rounded bg-cyan-400/20 px-1.5 py-0.5 font-mono text-[10px] font-extrabold text-cyan-300">
            {badge}
          </span>
        )}
      </div>
    </div>
  );
}

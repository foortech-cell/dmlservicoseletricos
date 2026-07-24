"use client";

import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

export default function OverdriveToggle() {
  const [overdrive, setOverdrive] = useState(false);

  useEffect(() => {
    if (overdrive) {
      document.body.classList.add("overdrive-mode");
    } else {
      document.body.classList.remove("overdrive-mode");
    }
  }, [overdrive]);

  return (
    <button
      type="button"
      onClick={() => setOverdrive((v) => !v)}
      title="Alternar Modo Alta Voltagem / Overdrive"
      className={`relative inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-xs font-bold transition-all duration-300 ${
        overdrive
          ? "border-cyan-400 bg-cyan-950/80 text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.6)]"
          : "border-gold-400/40 bg-ink-900/90 text-gold-400 hover:border-gold-400 hover:shadow-[0_0_15px_rgba(241,186,24,0.4)]"
      }`}
    >
      <div className="relative flex h-4 w-4 items-center justify-center">
        <div
          className={`clip-dml-bolt absolute h-4 w-2.5 transition-all ${
            overdrive ? "glow-bolt-cyber bg-cyan-400" : "glow-bolt-gold bg-gold-400"
          }`}
        />
        <Zap className="relative z-10 h-3 w-3 text-ink-950 fill-ink-950" />
      </div>
      <span>{overdrive ? "HIGH VOLTAGE: ON" : "VOLTAGEM: 220V"}</span>
      <span
        className={`h-2 w-2 rounded-full transition-colors ${
          overdrive ? "animate-ping bg-cyan-400" : "bg-gold-400"
        }`}
      />
    </button>
  );
}

import {
  Cable,
  FileCheck2,
  Gauge,
  PanelTop,
  PlugZap,
  ShieldAlert,
  ShowerHead,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import EnergyBar from "./EnergyBar";
import CircuitPattern from "./CircuitPattern";
import { services } from "@/data/services";

const icons: Record<string, LucideIcon> = {
  "plug-zap": PlugZap,
  "panel-top": PanelTop,
  wrench: Wrench,
  "file-check-2": FileCheck2,
  "shower-head": ShowerHead,
  cable: Cable,
  gauge: Gauge,
  "shield-alert": ShieldAlert,
};

export default function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-ink-950 py-20 lg:py-24">
      <EnergyBar className="absolute top-0 left-0" />
      <CircuitPattern />
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-14 text-center">
          <Reveal
            as="p"
            className="mb-3 font-mono text-[12px] font-bold tracking-[0.2em] text-cyan-400 uppercase"
          >
            ⚡ SERVIÇOS DML TECH GRID
          </Reveal>
          <Reveal
            as="h2"
            delay={0.05}
            className="font-display text-[34px] font-bold tracking-tight text-white sm:text-[44px]"
          >
            Engenharia e Soluções Elétricas <span className="text-gradient-cyber">de Alta Precisão</span>
          </Reveal>
        </div>

        <div data-reveal className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((svc) => {
            const Icon = icons[svc.icon];
            return (
              <div
                key={svc.title}
                className="group relative rounded-2xl border border-gold-400/20 bg-ink-900/60 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/60 hover:shadow-[0_0_30px_rgba(241,186,24,0.25)] hud-corner-box"
              >
                {/* Top DML Lightning Accent Badge */}
                <div className="absolute top-4 right-4 opacity-40 group-hover:opacity-100 transition-opacity">
                  <div className="glow-bolt-gold clip-dml-bolt h-5 w-3 bg-gradient-brand" />
                </div>

                <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-xl bg-gradient-brand text-ink-950 shadow-[0_0_15px_rgba(241,186,24,0.4)] group-hover:shadow-[0_0_25px_rgba(241,186,24,0.7)] group-hover:scale-110 transition-all">
                  {Icon ? <Icon className="h-6.5 w-6.5" aria-hidden="true" /> : <Zap className="h-6.5 w-6.5" />}
                </div>
                <h3 className="mb-2.5 font-display text-lg font-bold text-white group-hover:text-gold-400 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-ink-300">{svc.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


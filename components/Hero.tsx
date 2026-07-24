import { Zap, Activity, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import ElectricBolt from "./ElectricBolt";
import WhatsAppLink from "./WhatsAppLink";
import CircuitPattern from "./CircuitPattern";
import StatusPulse from "./StatusPulse";
import CountUp from "./CountUp";
import PowerOnText from "./PowerOnText";
import { siteConfig } from "@/config/site";

const heroStats = [
  { value: "5+", label: "Anos de experiência" },
  { value: "24h", label: "Plantão de emergência" },
  { value: "PIX", label: "Pagamento facilitado" },
  { value: "FRG", label: "E região" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      {/* High-voltage glow background shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-28 h-[420px] w-[420px] rounded-full bg-gradient-cyber opacity-25 blur-[120px] sm:h-[560px] sm:w-[560px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-20 h-[260px] w-[260px] rounded-full bg-gold-700 opacity-20 blur-[100px] sm:h-[340px] sm:w-[340px]"
      />
      <CircuitPattern className="[mask-image:linear-gradient(180deg,black,transparent)]" />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 pt-14 pb-16 lg:min-h-[calc(var(--vh-full)-100px)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:pt-16 lg:pb-16">
        <div>
          {/* Cyber Status Badge */}
          <Reveal
            as="div"
            className="inline-flex items-center gap-3 rounded-full border border-gold-400/40 bg-ink-900/90 px-4 py-2 text-xs font-mono font-bold tracking-widest text-gold-400 uppercase shadow-[0_0_20px_rgba(241,186,24,0.25)] backdrop-blur-md"
          >
            <div className="relative flex h-4 w-4 items-center justify-center">
              <div
                className="glow-bolt-gold clip-dml-bolt absolute h-4 w-2.5 bg-gradient-brand"
                aria-hidden="true"
              />
              <Zap className="relative z-10 h-2.5 w-2.5 text-ink-950 fill-ink-950" />
            </div>
            <StatusPulse />
            Plantão 24h · {siteConfig.serviceArea}
          </Reveal>

          <PowerOnText className="mt-5 font-display text-[42px] leading-[1.05] font-bold tracking-tight sm:text-[52px] lg:text-[64px]">
            Eletricista de confiança,{" "}
            <span className="text-gradient-cyber">pronto para atender.</span>
          </PowerOnText>

          <Reveal delay={0.2} y={20}>
            <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-ink-300">
              Instalações, manutenção e emergências elétricas em {siteConfig.serviceArea}, com
              atendimento rápido, diagnóstico de voltagem e alta segurança profissional.
            </p>
          </Reveal>

          <Reveal delay={0.3} y={16} className="mt-8 flex flex-wrap gap-4">
            <WhatsAppLink source="hero_primary" className="shadow-[0_0_25px_rgba(241,186,24,0.4)]">
              Chamar no WhatsApp agora
            </WhatsAppLink>
            <a
              href="#diagnostico"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-950/40 px-6 py-4 font-mono text-sm font-bold text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all hover:border-cyan-400 hover:bg-cyan-900/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]"
            >
              <Activity className="h-4 w-4 text-cyan-400 animate-pulse" />
              Simular Diagnóstico Elétrico
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15} y={28} className="relative flex justify-center">
          <ElectricBolt />
          {/* Floating High-Voltage Badge */}
          <div className="absolute bottom-6 -left-2 flex items-center gap-3.5 rounded-2xl border border-gold-400/40 bg-ink-900/90 px-5 py-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl hud-corner-box">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-[0_0_15px_rgba(241,186,24,0.5)]">
              <Zap className="h-6 w-6 fill-ink-950 text-ink-950" aria-hidden="true" />
            </span>
            <span className="flex flex-col leading-tight">
              <b className="font-display text-2xl font-black text-white">24h</b>
              <span className="font-mono text-[11px] font-semibold tracking-wider text-gold-400 uppercase">
                EMERGÊNCIA ELÉTRICA
              </span>
            </span>
          </div>
        </Reveal>
      </div>

      <div className="relative border-t border-ink-800 bg-ink-900/90 backdrop-blur-md">
        <div
          data-reveal
          className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-6 py-5 sm:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-0.5">
              <CountUp
                value={stat.value}
                className="font-display text-2xl font-bold text-gradient-brand"
              />
              <span className="font-mono text-[12px] font-medium tracking-wide text-ink-400 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { processSteps } from "@/data/process";

export default function Process() {
  return (
    <section id="como-funciona" className="mx-auto max-w-[1200px] px-6 py-20 lg:py-24 text-white">
      <div className="mb-14 text-center">
        <Reveal
          as="p"
          className="mb-3 font-mono text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase"
        >
          ⚡ PROCESSO DE ATENDIMENTO
        </Reveal>
        <Reveal
          as="h2"
          delay={0.05}
          className="font-display text-[34px] font-bold tracking-tight text-white sm:text-[44px]"
        >
          Do Chamado à Entrega, <span className="text-gradient-cyber">Sem Enrolação</span>
        </Reveal>
      </div>

      <div className="mb-12">
        <div data-reveal className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.n}
              className="relative rounded-2xl border border-gold-400/30 bg-ink-900/80 p-7 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400 hover:shadow-[0_0_25px_rgba(241,186,24,0.3)] hud-corner-box"
            >
              <div className="mb-3 font-mono text-xs font-extrabold tracking-[0.15em] text-cyan-400 bg-cyan-950/80 border border-cyan-400/30 px-3 py-1 rounded-full inline-block">
                PASSO 0{step.n}
              </div>
              <h3 className="mb-2.5 font-display text-xl font-bold text-white">
                {step.title}
              </h3>
              <p className="text-[14.5px] leading-relaxed text-ink-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-12 sm:gap-20 rounded-2xl border border-ink-800 bg-ink-900/60 p-8 backdrop-blur-md">
        <div className="text-center">
          <CountUp value="5+" className="font-display text-[46px] font-extrabold text-gradient-brand" />
          <div className="font-mono text-xs font-semibold tracking-wider text-ink-400 uppercase mt-1">
            Anos de experiência
          </div>
        </div>
        <div className="text-center">
          <CountUp value="24h" className="font-display text-[46px] font-extrabold text-gradient-cyber" />
          <div className="font-mono text-xs font-semibold tracking-wider text-ink-400 uppercase mt-1">
            Plantão de emergência
          </div>
        </div>
      </div>
    </section>
  );
}


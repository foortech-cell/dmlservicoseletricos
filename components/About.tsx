import Image from "next/image";
import { Check, ShieldCheck, Zap } from "lucide-react";
import Reveal from "./Reveal";
import WhatsAppLink from "./WhatsAppLink";
import { aboutHighlights } from "@/data/services";

export default function About() {
  return (
    <section
      id="sobre"
      className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 rounded-3xl border border-ink-800 bg-ink-950/90 p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl lg:grid-cols-2 lg:gap-14 my-12 text-white"
    >
      <Reveal className="relative" y={20}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-gold-400/30 bg-ink-950 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-md hud-corner-box">
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/about/about-quadro-eletrico-pro.png"
              alt="Quadro de distribuição elétrica profissional de alta precisão com organização técnica impecável DML"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
            
            {/* HUD Status Tag */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-ink-800 bg-ink-950/85 px-4 py-2.5 backdrop-blur-md">
              <span className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-300">
                <ShieldCheck className="h-4 w-4 text-cyan-400" />
                PADRÃO NBR 5410 // 100% SEGURO
              </span>
              <span className="text-[10px] font-mono font-extrabold text-gold-400 bg-gold-400/10 border border-gold-400/30 px-2 py-0.5 rounded">
                DML QUALIDADE
              </span>
            </div>
          </div>
        </div>

        {/* Signature Glowing DML Lightning Bolt Accent */}
        <div
          aria-hidden="true"
          className="glow-bolt-gold clip-dml-bolt absolute -top-5 -right-5 h-[90px] w-[55px] bg-gradient-brand shadow-[0_0_25px_rgba(241,186,24,0.6)]"
        />
      </Reveal>

      <div>
        <Reveal
          as="p"
          className="mb-3 font-mono text-xs font-bold tracking-[0.2em] text-gold-400 uppercase"
        >
          ⚡ SOBRE A DML ENGENHARIA
        </Reveal>
        <Reveal
          as="h2"
          delay={0.05}
          className="mb-4 font-display text-[32px] leading-tight font-bold tracking-tight text-white sm:text-[42px]"
        >
          Instalações e Manutenção Elétrica <span className="text-gradient-cyber">de Alto Padrão</span>
        </Reveal>
        <Reveal
          as="p"
          delay={0.1}
          className="mb-6 text-[16.5px] leading-relaxed text-ink-300"
        >
          Todo serviço é executado rigorosamente dentro das boas práticas técnicas e normas de segurança (NBR 5410), utilizando barramentos protegidos, disjuntores dimensionados e organização profissional.
        </Reveal>

        <div data-reveal className="mb-8 flex flex-col gap-3.5">
          {aboutHighlights.map((item) => (
            <div key={item} className="flex items-center gap-3 font-semibold text-ink-200">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gold-400/20 text-gold-400 border border-gold-400/40 shadow-[0_0_10px_rgba(241,186,24,0.3)]">
                <Check className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <WhatsAppLink source="about" className="shadow-[0_0_25px_rgba(241,186,24,0.35)]">
          Chamar no WhatsApp agora
        </WhatsAppLink>
      </div>
    </section>
  );
}


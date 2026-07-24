import { Clock, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";
import WhatsAppLink from "./WhatsAppLink";
import CircuitPattern from "./CircuitPattern";
import StatusPulse from "./StatusPulse";
import { siteConfig } from "@/config/site";

export default function FinalCTA() {
  return (
    <section id="contato" className="relative overflow-hidden bg-ink-950 py-24 lg:py-28">
      <CircuitPattern />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/2 h-[380px] w-[90%] max-w-[640px] -translate-x-1/2 rounded-full bg-gradient-brand opacity-25 blur-[110px]"
      />
      <div className="relative mx-auto max-w-[760px] px-6 text-center text-white">
        <Reveal
          as="span"
          className="inline-flex items-center gap-2.5 rounded-full border border-gold-400/40 bg-gold-400/10 px-3.5 py-1.5 text-xs font-extrabold tracking-[0.1em] text-gold-400 uppercase"
        >
          <StatusPulse />
          Pronto para atender agora
        </Reveal>

        <Reveal
          as="h2"
          delay={0.08}
          className="mt-5 mb-3.5 font-display text-[34px] leading-[1.08] font-bold tracking-tight sm:text-[46px]"
        >
          Problema elétrico não espera.{" "}
          <span className="text-gradient-brand">A gente também não.</span>
        </Reveal>

        <Reveal as="p" delay={0.15} className="mb-8 text-lg text-ink-300">
          Fale agora pelo WhatsApp e receba um diagnóstico rápido, sem compromisso.
        </Reveal>

        <Reveal delay={0.2}>
          <WhatsAppLink source="final_cta" className="text-lg">
            Chamar a DML no WhatsApp
          </WhatsAppLink>
          <p className="mt-3 text-sm text-ink-400">
            Atendimento direto, sem formulários complicados.
          </p>
        </Reveal>

        <div
          data-reveal
          className="mt-8 flex flex-wrap justify-center gap-6 text-[14.5px] font-semibold text-ink-400 sm:gap-7"
        >
          <span className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-gold-400" aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gold-400" aria-hidden="true" />
            {siteConfig.hours}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold-400" aria-hidden="true" />
            {siteConfig.serviceArea}
          </span>
        </div>
      </div>
    </section>
  );
}

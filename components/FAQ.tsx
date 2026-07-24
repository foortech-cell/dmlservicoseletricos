import { MapPin, Zap } from "lucide-react";
import Reveal from "./Reveal";
import FaqAccordion from "./FaqAccordion";
import WhatsAppLink from "./WhatsAppLink";
import { bairrosAtendidos, regioesAtendidas } from "@/data/serviceArea";
import { siteConfig } from "@/config/site";

export default function FAQ() {
  return (
    <section
      id="duvidas"
      className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-11 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-24 text-white"
    >
      <div>
        <Reveal
          as="p"
          className="mb-3 font-mono text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase"
        >
          ⚡ PERGUNTAS FREQUENTES
        </Reveal>
        <Reveal
          as="h2"
          delay={0.05}
          className="mb-2.5 font-display text-[30px] font-bold tracking-tight text-white sm:text-[40px]"
        >
          Tire Suas <span className="text-gradient-cyber">Dúvidas Elétricas</span>
        </Reveal>
        <Reveal as="p" delay={0.1} className="mb-7 text-base text-ink-300">
          Esclareça suas principais dúvidas sobre o nosso atendimento elétrico em{" "}
          {siteConfig.serviceArea}.
        </Reveal>

        <FaqAccordion />
      </div>

      <Reveal
        y={20}
        className="rounded-[20px] bg-ink-950 p-8 text-white lg:sticky lg:top-24"
      >
        <div className="mb-3.5 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-[11px] bg-gradient-brand">
            <MapPin className="h-5.5 w-5.5 text-ink-950" aria-hidden="true" />
          </span>
          <h3 className="font-display text-2xl font-bold">Área de atendimento</h3>
        </div>
        <p className="mb-3.5 text-[15.5px] text-ink-300">{siteConfig.serviceArea} próxima.</p>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-3 py-1.5 text-xs font-bold text-gold-400">
          <Zap className="h-3 w-3 fill-gold-400" aria-hidden="true" />
          Eletricista local de plantão nos bairros listados abaixo.
        </div>

        <div className="mb-2.5 text-[12.5px] font-extrabold tracking-[0.1em] text-ink-400 uppercase">
          Bairros atendidos em Fazenda Rio Grande
        </div>
        <div className="mb-5 flex flex-wrap gap-2">
          {bairrosAtendidos.map((b) => (
            <span
              key={b}
              className="rounded-full border border-ink-700 bg-ink-800 px-3 py-1.5 font-mono text-[12.5px] font-medium text-ink-200"
            >
              {b}
            </span>
          ))}
        </div>

        <div className="mb-2.5 text-[12.5px] font-extrabold tracking-[0.1em] text-ink-400 uppercase">
          Outras regiões atendidas
        </div>
        <div className="mb-6 flex flex-wrap gap-2">
          {regioesAtendidas.map((r) => (
            <span
              key={r}
              className="rounded-full border border-ink-700 bg-ink-800 px-3 py-1.5 font-mono text-[12.5px] font-medium text-ink-200"
            >
              {r}
            </span>
          ))}
        </div>

        <p className="border-t border-ink-800 pt-4 text-[13.5px] leading-relaxed text-ink-400">
          Está fora das regiões listadas mas precisa de ajuda urgente?{" "}
          <WhatsAppLink source="service_area" variant="plain" icon={false}>
            Fale conosco no WhatsApp
          </WhatsAppLink>{" "}
          para verificar disponibilidade de deslocamento imediato.
        </p>
      </Reveal>
    </section>
  );
}

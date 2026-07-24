import Reveal from "./Reveal";
import PortfolioGallery from "./PortfolioGallery";

export default function Portfolio() {
  return (
    <section id="projetos" className="bg-ink-950 py-20 lg:py-24 text-white border-t border-b border-ink-800">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 text-center">
          <Reveal
            as="p"
            className="mb-3 font-mono text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase"
          >
            ⚡ GALERIA DE PROJETOS DML
          </Reveal>
          <Reveal
            as="h2"
            delay={0.05}
            className="mb-3 font-display text-[34px] font-bold tracking-tight text-white sm:text-[44px]"
          >
            Engenharia Aplicada e <span className="text-gradient-cyber">Projetos Entregues</span>
          </Reveal>
          <Reveal as="p" delay={0.1} className="text-[16.5px] text-ink-300">
            Uma amostra de instalações, montagens e manutenções elétricas realizadas na região.
          </Reveal>
        </div>

        <PortfolioGallery />
      </div>
    </section>
  );
}


import Image from "next/image";
import { Factory, House, Store, Zap, type LucideIcon } from "lucide-react";
import { categories } from "@/data/services";

const icons: Record<string, LucideIcon> = { house: House, store: Store, factory: Factory };

export default function Categories() {
  return (
    <section aria-label="Áreas de atuação" className="mx-auto max-w-[1200px] px-6 pb-20 lg:pb-24">
      <div data-reveal className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {categories.map((cat) => {
          const Icon = icons[cat.icon];
          return (
            <div
              key={cat.label}
              className="group relative flex aspect-[16/10] items-end overflow-hidden rounded-2xl border border-gold-400/30 bg-ink-900 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400 hover:shadow-[0_0_30px_rgba(241,186,24,0.35)] hud-corner-box"
            >
              {/* Background Photo with Hover Zoom */}
              <Image
                src={cat.image}
                alt={`Projetos elétricos ${cat.label}`}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover opacity-65 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-85"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent" />

              {/* Top Accent DML Lightning Badge */}
              <div className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-lg border border-gold-400/40 bg-ink-950/80 backdrop-blur-md transition-transform group-hover:scale-110 shadow-[0_0_12px_rgba(241,186,24,0.4)]">
                <Zap className="h-4 w-4 fill-gold-400 text-gold-400" />
              </div>

              {/* Category Icon & Label Overlay */}
              <div className="relative z-10 flex w-full items-center justify-between p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-ink-950 shadow-[0_0_15px_rgba(241,186,24,0.4)]">
                    <Icon className="h-5.5 w-5.5" aria-hidden="true" />
                  </div>
                  <span className="font-display text-xl font-bold text-white group-hover:text-gold-400 transition-colors">
                    {cat.label}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


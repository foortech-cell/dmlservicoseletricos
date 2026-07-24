"use client";

import { useState } from "react";
import { Zap, AlertTriangle, ShieldCheck, ArrowRight, Activity } from "lucide-react";
import { siteConfig } from "@/config/site";

const options = [
  {
    id: "disjuntor",
    title: "Disjuntor caindo / Fiação quente",
    urgency: "CRÍTICA",
    load: "220V - Sobrecarga",
    badgeColor: "bg-red-500/20 text-red-400 border-red-500/40",
    meter: 92,
    desc: "Risco de curto-circuito. Necessita inspeção e substituição imediata.",
  },
  {
    id: "padrao",
    title: "Padrão COPEL / Entrada de Energia",
    urgency: "ALTA",
    load: "Monofásico / Bifásico / Trifásico",
    badgeColor: "bg-gold-500/20 text-gold-400 border-gold-500/40",
    meter: 78,
    desc: "Instalação, aumento de carga e adequação às normas Copel.",
  },
  {
    id: "chuveiro",
    title: "Instalação de Chuveiro / Ar Condicionado",
    urgency: "MÉDIA",
    load: "Circuito Dedicado 127V/220V",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    meter: 60,
    desc: "Puxamento de fiação adequada e disjuntor de proteção térmica.",
  },
  {
    id: "quadro",
    title: "Montagem de QDT / Quadro Elétrico",
    urgency: "MÉDIA",
    load: "Barramento & Disjuntores DIN",
    badgeColor: "bg-gold-500/20 text-gold-400 border-gold-500/40",
    meter: 70,
    desc: "Organização, identificação e instalação de DPS/DR de proteção.",
  },
  {
    id: "solar",
    title: "Energia Solar / Manutenção Solar",
    urgency: "PLANEJADA",
    load: "Inversor & String Box",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    meter: 45,
    desc: "Instalação e manutenção corretiva de sistemas fotovoltaicos.",
  },
];

import { buildWhatsAppUrl } from "@/config/site";

export default function VoltageSimulator() {
  const [selectedId, setSelectedId] = useState(options[0].id);
  const selected = options.find((o) => o.id === selectedId) || options[0];

  const whatsappMessage =
    `⚡ [DIAGNÓSTICO DML TECH] Olá! Preciso de atendimento em Fazenda Rio Grande e região.\n\n` +
    `• Serviço: ${selected.title}\n` +
    `• Nível de Urgência: ${selected.urgency}\n` +
    `• Tipo de Carga: ${selected.load}\n\n` +
    `Gostaria de um orçamento com o Eletricista de Plantão.`;

  const whatsappUrl = buildWhatsAppUrl(whatsappMessage);

  return (
    <section id="diagnostico" className="relative py-20 bg-ink-950 text-white overflow-hidden">
      {/* Background Neon Energy Rays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-cyber opacity-10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="text-center max-w-[700px] mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-950/40 px-4 py-1.5 text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase mb-4 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
            <Activity className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
            SIMULADOR DE CARGA & TENSÃO DML
          </div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Diagnóstico Elétrico <span className="text-gradient-cyber">Instantâneo</span>
          </h2>
          <p className="mt-4 text-ink-300 text-base sm:text-lg">
            Selecione qual necessidade elétrica você tem agora para calcularmos a urgência e enviarmos o eletricista correto até sua casa ou empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options Selector Panel */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {options.map((opt) => {
              const isSelected = opt.id === selectedId;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedId(opt.id)}
                  className={`relative flex items-center justify-between p-5 rounded-2xl border text-left transition-all duration-300 ${
                    isSelected
                      ? "border-gold-400 bg-ink-900/90 shadow-[0_0_30px_rgba(241,186,24,0.25)] translate-x-1"
                      : "border-ink-800 bg-ink-900/40 hover:border-ink-700 hover:bg-ink-900/60"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all ${
                        isSelected
                          ? "bg-gradient-brand text-ink-950 shadow-[0_0_15px_rgba(241,186,24,0.5)]"
                          : "bg-ink-800 text-ink-400"
                      }`}
                    >
                      <Zap className={`h-5 w-5 ${isSelected ? "fill-ink-950" : ""}`} />
                    </div>

                    <div>
                      <h3 className="font-display text-base font-bold text-white">
                        {opt.title}
                      </h3>
                      <p className="text-xs text-ink-400 mt-0.5">{opt.desc}</p>
                    </div>
                  </div>

                  <span
                    className={`shrink-0 text-xs font-mono font-bold px-3 py-1 rounded-full border ${opt.badgeColor}`}
                  >
                    {opt.urgency}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Voltage HUD Panel */}
          <div className="lg:col-span-5 relative rounded-3xl border border-gold-400/40 bg-ink-900/80 p-8 shadow-[0_16px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl hud-corner-box">
            {/* Header info */}
            <div className="flex items-center justify-between border-b border-ink-800 pb-5 mb-6">
              <div className="flex items-center gap-2">
                <div className="glow-bolt-gold clip-dml-bolt h-6 w-4 bg-gradient-brand" />
                <span className="font-mono text-xs font-bold tracking-widest text-gold-400">
                  METRO DE CARGA
                </span>
              </div>
              <span className="font-mono text-xs text-cyan-400 bg-cyan-950/60 border border-cyan-400/30 px-2.5 py-1 rounded">
                STATUS: PRONTO
              </span>
            </div>

            {/* Gauge Progress Display */}
            <div className="mb-6">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-xs font-mono text-ink-400 uppercase">
                  Nível de Urgência Elétrica
                </span>
                <span className="font-mono text-2xl font-black text-gradient-cyber">
                  {selected.meter}%
                </span>
              </div>

              {/* Meter Bar */}
              <div className="h-3 w-full bg-ink-950 rounded-full overflow-hidden p-0.5 border border-ink-800">
                <div
                  className="h-full rounded-full bg-gradient-cyber transition-all duration-500 shadow-[0_0_12px_rgba(0,240,255,0.8)]"
                  style={{ width: `${selected.meter}%` }}
                />
              </div>
            </div>

            {/* Selected Spec Details */}
            <div className="bg-ink-950/80 rounded-2xl p-4 border border-ink-800 mb-6 flex flex-col gap-2.5 font-mono text-xs text-ink-300">
              <div className="flex justify-between">
                <span className="text-ink-500">SERVIÇO SELECIONADO:</span>
                <span className="text-white font-bold">{selected.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-500">TENSÃO ESTIMADA:</span>
                <span className="text-gold-400 font-bold">{selected.load}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-500">ATENDIMENTO DML:</span>
                <span className="text-cyan-300 font-bold">Imediato (Plantão 24h)</span>
              </div>
            </div>

            {/* Direct CTA button to WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-brand py-4 px-6 font-display text-base font-extrabold text-ink-950 transition-all hover:shadow-[0_0_30px_rgba(241,186,24,0.6)] active:scale-[0.98]"
            >
              <Zap className="h-5 w-5 fill-ink-950 group-hover:animate-bounce" />
              <span>Chamar Eletricista Agora</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { Menu, Phone, X, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";
import WhatsAppLink from "./WhatsAppLink";
import OverdriveToggle from "./OverdriveToggle";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diagnostico", label: "Diagnóstico" },
  { href: "#sobre", label: "Sobre" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#projetos", label: "Projetos" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    firstLinkRef.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-ink-800 bg-ink-950/90 pt-[env(safe-area-inset-top)] backdrop-blur-xl text-white">
      {/* High-tech status ticker bar */}
      <div className="border-b border-ink-800/60 bg-ink-900/80 px-4 py-1 text-center font-mono text-[11px] text-ink-300">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between">
          <span className="flex items-center gap-1.5 text-gold-400">
            <Zap className="h-3 w-3 fill-gold-400 animate-pulse" />
            <strong className="text-white font-bold">PLANTÃO 24H:</strong> {siteConfig.serviceArea} & Região
          </span>
          <span className="hidden sm:inline-block text-cyan-300">
            ⚡ ATENDIMENTO RÁPIDO DML // VOLTAGEM CONTROLADA
          </span>
        </div>
      </div>

      <div className="mx-auto flex h-[74px] max-w-[1200px] items-center justify-between gap-4 px-6">
        <a href="#" className="shrink-0 flex items-center gap-3" aria-label={`${siteConfig.name} — página inicial`}>
          <Image
            src="/images/logo/dml-logo.png"
            alt={siteConfig.name}
            width={1254}
            height={523}
            priority
            className="h-12 w-auto sm:h-14 brightness-110 drop-shadow-[0_0_15px_rgba(241,186,24,0.3)]"
          />
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-6 text-[14.5px] font-semibold text-ink-200 lg:flex"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-gold-400">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 sm:flex">
          <OverdriveToggle />
          <a
            href={siteConfig.phoneHref}
            className="hidden items-center gap-2 text-[14.5px] font-bold text-white hover:text-gold-400 transition-colors lg:flex"
          >
            <Phone className="h-4 w-4 text-gold-400" aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </a>
          <WhatsAppLink source="header" className="!py-2.5 !px-4.5 text-[15px] shadow-[0_0_20px_rgba(241,186,24,0.3)]">
            WhatsApp
          </WhatsAppLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-white lg:hidden"
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      <div
        id={panelId}
        className={`overflow-hidden border-t border-ink-800 bg-ink-950 transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          open ? "max-h-[460px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Navegação mobile" className="flex flex-col gap-2 px-6 py-4">
          <div className="mb-2">
            <OverdriveToggle />
          </div>
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              ref={i === 0 ? firstLinkRef : undefined}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base font-semibold text-ink-200 hover:bg-ink-900 hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-base font-bold text-white"
          >
            <Phone className="h-4 w-4 text-gold-400" aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </a>
          <WhatsAppLink source="header_mobile" className="mt-2 justify-center">
            Chamar no WhatsApp
          </WhatsAppLink>
        </nav>
      </div>
    </header>
  );
}


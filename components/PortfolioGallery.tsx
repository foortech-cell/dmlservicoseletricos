"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";
import {
  portfolioFilters,
  portfolioItems,
  type PortfolioCategory,
} from "@/data/portfolio";

export default function PortfolioGallery() {
  const [filter, setFilter] = useState<PortfolioCategory | "Todos">("Todos");
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const visible =
    filter === "Todos" ? portfolioItems : portfolioItems.filter((p) => p.category === filter);

  const activeItem = portfolioItems.find((p) => p.slug === activeSlug) ?? null;

  useEffect(() => {
    if (!activeItem) return;
    closeRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActiveSlug(null);
        lastTriggerRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeItem]);

  return (
    <>
      <div className="mb-8 flex flex-wrap justify-center gap-2.5">
        {(["Todos", ...portfolioFilters] as const).map((label) => {
          const active = filter === label;
          return (
            <button
              key={label}
              type="button"
              onClick={() => setFilter(label)}
              aria-pressed={active}
              className={cn(
                "rounded-full border px-4.5 py-2.5 text-sm font-bold transition-colors",
                active
                  ? "border-transparent bg-gradient-brand-h text-ink-950"
                  : "border-ink-300 bg-white text-ink-600 hover:border-gold-500",
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <button
            key={item.slug}
            type="button"
            onClick={(e) => {
              lastTriggerRef.current = e.currentTarget;
              setActiveSlug(item.slug);
            }}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl text-left focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
            aria-label={`Ver imagem ampliada: ${item.title}`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-ink-950/85 via-transparent to-transparent">
              <div className="p-4">
                <div className="font-display text-base font-semibold text-white">
                  {item.title}
                </div>
                <div className="font-mono text-xs font-medium tracking-wide text-gold-400 uppercase">
                  {item.category}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/90 p-4 sm:p-8"
          onClick={() => {
            setActiveSlug(null);
            lastTriggerRef.current?.focus();
          }}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-ink-900"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={() => {
                setActiveSlug(null);
                lastTriggerRef.current?.focus();
              }}
              aria-label="Fechar imagem"
              className="absolute top-3 right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-ink-950/70 text-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
              <Image
                src={activeItem.image}
                alt={activeItem.alt}
                fill
                sizes="(min-width: 640px) 768px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <div className="font-display text-lg font-semibold text-white">
                {activeItem.title}
              </div>
              <div className="font-mono text-xs font-medium tracking-wide text-gold-400 uppercase">
                {activeItem.category}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

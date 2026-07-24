"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div data-reveal className="flex flex-col gap-3.5">
      {faqItems.map((item, i) => {
        const open = openIndex === i;
        const buttonId = `${baseId}-button-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
              open
                ? "border-gold-400/60 bg-ink-900 shadow-[0_0_20px_rgba(241,186,24,0.15)]"
                : "border-ink-800 bg-ink-900/60 hover:border-ink-700"
            }`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-[17px] font-bold text-white hover:text-gold-400 transition-colors"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-gold-400 transition-transform duration-300 ${
                    open ? "rotate-180 text-cyan-400" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-[15px] leading-relaxed text-ink-300 border-t border-ink-800/60 pt-3">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}


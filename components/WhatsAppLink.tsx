"use client";

import type { AnchorHTMLAttributes, PointerEvent, ReactNode } from "react";
import { useRef } from "react";
import { buildWhatsAppUrl } from "@/config/site";
import { trackWhatsAppClick } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import WhatsAppIcon from "./WhatsAppIcon";

type WhatsAppLinkProps = {
  children: ReactNode;
  source: string;
  message?: string;
  variant?: "primary" | "outline" | "plain" | "floating";
  icon?: boolean;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target" | "rel">;

const variantClasses: Record<NonNullable<WhatsAppLinkProps["variant"]>, string> = {
  primary:
    "group relative isolate inline-flex items-center overflow-hidden rounded-xl bg-gradient-brand-h px-7 py-4 font-display text-base font-bold text-ink-950 shadow-brand transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "group relative isolate inline-flex items-center overflow-hidden rounded-xl border border-ink-700 px-7 py-4 font-display text-base font-bold text-white transition-colors duration-200 hover:border-gold-400 hover:text-gold-400",
  plain: "inline-flex items-center font-semibold text-gold-400 transition-colors hover:text-gold-300",
  floating:
    "flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand shadow-brand transition-transform duration-200 hover:scale-105 active:scale-95",
};

// Buttons solid/bordered enough for a cursor-tracked glow to read well.
const glowVariants = new Set<WhatsAppLinkProps["variant"]>(["primary", "outline"]);

export default function WhatsAppLink({
  children,
  source,
  message,
  variant = "primary",
  icon = true,
  className,
  ...rest
}: WhatsAppLinkProps) {
  const glowRef = useRef<HTMLSpanElement | null>(null);
  const hasGlow = glowVariants.has(variant);

  function handlePointerMove(e: PointerEvent<HTMLAnchorElement>) {
    if (!hasGlow || e.pointerType !== "mouse" || !glowRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    glowRef.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    glowRef.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
    glowRef.current.style.opacity = "1";
  }

  function handlePointerLeave() {
    if (glowRef.current) glowRef.current.style.opacity = "0";
  }

  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
      aria-label={typeof children === "string" ? children : "Chamar no WhatsApp"}
      onClick={() => trackWhatsAppClick(source)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn(variantClasses[variant], className)}
      {...rest}
    >
      {hasGlow && (
        <span
          ref={glowRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(180px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.35), transparent 70%)",
          }}
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2.5">
        {icon && <WhatsAppIcon />}
        {children}
      </span>
    </a>
  );
}

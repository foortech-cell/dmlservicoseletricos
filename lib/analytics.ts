"use client";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

/**
 * Pushes a WhatsApp click event to window.dataLayer (GA4/GTM convention).
 * No-ops safely if no analytics tool is installed — this project ships
 * without a backend or analytics dependency by design.
 */
export function trackWhatsAppClick(source: string) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "whatsapp_click",
    whatsapp_source: source,
  });
}

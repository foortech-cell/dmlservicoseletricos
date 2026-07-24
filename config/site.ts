/**
 * Central configuration for DML Serviços Elétricos.
 * Every contact/business detail on the site is sourced from here — edit only this file
 * to update phone, WhatsApp, address, hours, etc. across the whole app.
 *
 * Fields marked "PLACEHOLDER" were not supplied and must be filled in before launch —
 * see README.md for the full checklist.
 */

export const WHATSAPP_NUMBER = "5541999618109";

export const siteConfig = {
  name: "DML Serviços Elétricos",
  shortName: "DML",
  tagline: "Eletricista de confiança, pronto para atender.",

  phoneDisplay: "(41) 99961-8109",
  phoneHref: "tel:+5541999618109",

  whatsappNumber: WHATSAPP_NUMBER,
  whatsappMessage:
    "Olá! Acessei o site da DML Serviços Elétricos e gostaria de solicitar um orçamento.",

  // PLACEHOLDER — no e-mail was supplied.
  email: "contato@dmlservicoseletricos.com.br",

  // Real handle found on DML's own social content.
  instagram: "https://instagram.com/dmlservicoseletricos",

  city: "Fazenda Rio Grande",
  state: "PR",
  serviceArea: "Fazenda Rio Grande e região",

  hours: "Plantão de emergência 24 horas, todos os dias",

  url: "https://dmlservicoseletricos.com.br",
} as const;

export function buildWhatsAppUrl(message: string = siteConfig.whatsappMessage) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

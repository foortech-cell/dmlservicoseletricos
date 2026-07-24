import Image from "next/image";
import { Clock, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import WhatsAppLink from "./WhatsAppLink";

function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-gold-400" aria-hidden="true" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  );
}

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#projetos", label: "Projetos" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800 bg-ink-950 pt-14 pb-[calc(1.5rem+env(safe-area-inset-bottom))] text-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 sm:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Image
            src="/images/logo/dml-logo.png"
            alt={siteConfig.name}
            width={1254}
            height={523}
            className="mb-4 h-12 w-auto"
          />
          <p className="max-w-[280px] text-sm leading-relaxed text-ink-400">
            Instalações, manutenção e emergências elétricas com atendimento de verdade.
          </p>
        </div>

        <div>
          <div className="mb-3 text-[12.5px] font-extrabold tracking-[0.1em] text-ink-400 uppercase">
            Navegação
          </div>
          <nav aria-label="Navegação do rodapé" className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-ink-300 hover:text-gold-400"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <div className="mb-3 text-[12.5px] font-extrabold tracking-[0.1em] text-ink-400 uppercase">
            Contato
          </div>
          <div className="flex flex-col gap-2.5 text-sm font-semibold text-ink-300">
            <a href={siteConfig.phoneHref} className="flex items-center gap-2 hover:text-gold-400">
              <Phone className="h-4 w-4 text-gold-400" aria-hidden="true" />
              {siteConfig.phoneDisplay}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold-400" aria-hidden="true" />
              {siteConfig.serviceArea}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold-400" aria-hidden="true" />
              {siteConfig.hours}
            </span>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-gold-400"
            >
              <InstagramGlyph />
              Instagram
            </a>
            <WhatsAppLink source="footer" variant="plain">
              Chamar no WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1200px] flex-col items-center gap-3 border-t border-ink-800 px-6 pt-5 text-center text-[12.5px] text-ink-400 sm:flex-row sm:justify-between sm:text-left">
        <span>
          © {year} {siteConfig.name}. Todos os direitos reservados.
        </span>
        <span className="flex gap-4">
          <a href="/politica-de-privacidade" className="hover:text-gold-400">
            Política de privacidade
          </a>
          <a href="/termos-de-uso" className="hover:text-gold-400">
            Termos de uso
          </a>
        </span>
      </div>
    </footer>
  );
}

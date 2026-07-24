import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Termos de uso | ${siteConfig.name}`,
  robots: { index: false, follow: true },
};

export default function TermsOfUsePage() {
  return (
    <main className="mx-auto max-w-[720px] px-6 py-24">
      <h1 className="mb-6 font-display text-3xl font-bold text-ink-900">Termos de uso</h1>
      <p className="leading-relaxed text-ink-600">
        Este texto é um espaço reservado. O conteúdo oficial dos termos de uso da{" "}
        {siteConfig.name} ainda precisa ser definido pelo responsável legal da empresa antes da
        publicação do site.
      </p>
    </main>
  );
}

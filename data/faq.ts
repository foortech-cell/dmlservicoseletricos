export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer:
      "Trabalhamos com flexibilidade: aceitamos PIX, dinheiro e cartões de débito ou crédito. Facilitamos o pagamento para que você resolva seu problema com tranquilidade.",
  },
  {
    question:
      "Vocês atendem emergências elétricas em finais de semana ou feriados?",
    answer:
      "Sim! Oferecemos plantão de emergência 24 horas todos os dias da semana, incluindo sábados, domingos e feriados. Se você estiver com curto-circuito, cheiro de queimado ou falta de energia total, chame imediatamente.",
  },
  {
    question: "Os serviços prestados possuem garantia?",
    answer:
      "Trabalhamos com atenção às boas práticas técnicas e de segurança do setor elétrico, buscando sempre entregar um serviço de qualidade e durável.",
  },
  {
    question: "Vocês realizam serviços comerciais ou apenas residenciais?",
    answer:
      "Atendemos ambos os setores! Realizamos desde pequenos reparos e instalações em residências até reformas completas de quadros e iluminação em lojas e estabelecimentos comerciais.",
  },
];

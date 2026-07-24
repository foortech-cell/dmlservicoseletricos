export type ProcessStep = {
  n: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    n: "01",
    title: "Chamado",
    description:
      "Você chama no WhatsApp e explica o problema ou o que precisa instalar.",
  },
  {
    n: "02",
    title: "Diagnóstico",
    description: "Avaliação no local e orçamento claro, sem letra miúda.",
  },
  {
    n: "03",
    title: "Execução",
    description:
      "Serviço feito com segurança, material de qualidade e organização.",
  },
  {
    n: "04",
    title: "Conclusão",
    description:
      "Serviço entregue organizado, com suporte se precisar de algo depois.",
  },
];

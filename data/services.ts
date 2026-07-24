export type Service = {
  icon:
    | "plug-zap"
    | "panel-top"
    | "wrench"
    | "file-check-2"
    | "shower-head"
    | "cable"
    | "gauge"
    | "shield-alert";
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: "plug-zap",
    title: "Instalações elétricas",
    description:
      "Circuitos 127V e 220V, tomadas, interruptores, luminárias, plafons, refletores e pontos de iluminação interna e externa.",
  },
  {
    icon: "panel-top",
    title: "Quadros e painéis elétricos",
    description:
      "Montagem e reforma de quadros de distribuição (QDC), painéis elétricos, troca de disjuntores e de padrão de entrada de energia.",
  },
  {
    icon: "wrench",
    title: "Manutenção e correção de falhas",
    description:
      "Correção de curtos-circuitos, aquecimento em cabos, emendas fora do padrão, troca de fiação antiga e manutenção preventiva e corretiva.",
  },
  {
    icon: "file-check-2",
    title: "Reformas e adequações",
    description:
      "Reformas e adequações elétricas conforme normas técnicas (NBR 5410), para instalações residenciais e comerciais.",
  },
  {
    icon: "shower-head",
    title: "Chuveiros e equipamentos",
    description:
      "Troca e instalação de chuveiros e torneiras elétricas, circuitos exclusivos de alta potência, motores, contatores e relés.",
  },
  {
    icon: "cable",
    title: "Infraestrutura elétrica",
    description:
      "Eletrodutos, eletrocalhas, perfilados, passagem e organização de cabos, e instalação de tomadas industriais.",
  },
  {
    icon: "gauge",
    title: "Automação e diagnóstico",
    description:
      "Automação residencial, vistorias e inspeções elétricas, diagnóstico de sistemas de aquecimento com termopares e controladores.",
  },
  {
    icon: "shield-alert",
    title: "Emergência 24 horas",
    description:
      "Atendimento para emergências elétricas a qualquer hora, todos os dias da semana.",
  },
];

export type Category = {
  icon: "house" | "store" | "factory";
  label: string;
  image: string;
};

export const categories: Category[] = [
  { icon: "house", label: "Residencial", image: "/images/categories/residential.png" },
  { icon: "store", label: "Comercial", image: "/images/categories/commercial.png" },
  { icon: "factory", label: "Industrial", image: "/images/categories/industrial.png" },
];

export const aboutHighlights: string[] = [
  "Projeto e instalação elétrica completa",
  "Manutenção preventiva e correção de riscos",
  "Emergência elétrica 24 horas",
  "Atendimento residencial e comercial",
];

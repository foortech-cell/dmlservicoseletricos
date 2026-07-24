export type PortfolioCategory =
  | "Residencial"
  | "Comercial"
  | "Iluminação LED"
  | "Quadros Elétricos";

export const portfolioFilters: PortfolioCategory[] = [
  "Residencial",
  "Comercial",
  "Iluminação LED",
  "Quadros Elétricos",
];

export type PortfolioItem = {
  slug: string;
  title: string;
  category: PortfolioCategory;
  image: string;
  alt: string;
};

/**
 * Real photos of DML jobs (supplied by the client). Replace/add files in
 * public/images/portfolio and add an entry here to update the gallery.
 */
export const portfolioItems: PortfolioItem[] = [
  {
    slug: "fachada-residencial-iluminada",
    title: "Fachada residencial iluminada",
    category: "Residencial",
    image: "/images/portfolio/residencial-fachada-iluminada.jpg",
    alt: "Fachada de residência à noite com iluminação embutida e spots de LED instalados pela DML, viatura da DML estacionada na garagem",
  },
  {
    slug: "teto-spots-residencial",
    title: "Iluminação de teto sob medida",
    category: "Residencial",
    image: "/images/portfolio/residencial-teto-spots.jpg",
    alt: "Spots de LED embutidos em teto com acabamento em porcelanato 3D",
  },
  {
    slug: "varanda-luminaria",
    title: "Luminária de varanda residencial",
    category: "Residencial",
    image: "/images/portfolio/residencial-varanda-luminaria.jpg",
    alt: "Arandela cilíndrica externa instalada em varanda residencial",
  },
  {
    slug: "galpao-industrial",
    title: "Iluminação industrial em galpão",
    category: "Comercial",
    image: "/images/portfolio/comercial-galpao-industrial.jpg",
    alt: "Galpão industrial com estrutura metálica e luminárias de LED de alta potência instaladas na cobertura",
  },
  {
    slug: "vitrine-led-comercial",
    title: "Iluminação de vitrine comercial",
    category: "Comercial",
    image: "/images/portfolio/comercial-vitrine-led.jpg",
    alt: "Prateleiras comerciais com fita de LED embutida iluminando produtos em exposição",
  },
  {
    slug: "corredor-comercial-led",
    title: "Iluminação de corredor comercial",
    category: "Comercial",
    image: "/images/portfolio/comercial-corredor-led.jpg",
    alt: "Corredor comercial com iluminação de LED embutida em sanca linear no teto",
  },
  {
    slug: "lustre-decorativo",
    title: "Iluminação decorativa em sala",
    category: "Iluminação LED",
    image: "/images/portfolio/iluminacao-lustre-decorativo.jpg",
    alt: "Lustre decorativo de seis lâmpadas instalado sobre parede de mármore",
  },
  {
    slug: "jardim-iluminacao-externa",
    title: "Iluminação externa e paisagística",
    category: "Iluminação LED",
    image: "/images/portfolio/iluminacao-jardim-externa.jpg",
    alt: "Fita de LED embutida em jardim iluminando vegetação ornamental à noite",
  },
  {
    slug: "pendentes-decorativos",
    title: "Luminárias decorativas sob medida",
    category: "Iluminação LED",
    image: "/images/portfolio/iluminacao-pendentes-borboleta.jpg",
    alt: "Pendentes decorativos em formato de borboleta instalados sobre bancada",
  },
  {
    slug: "quadro-identificado",
    title: "Quadro identificado por circuito",
    category: "Quadros Elétricos",
    image: "/images/portfolio/quadro-identificado-circuitos.jpg",
    alt: "Quadro de distribuição residencial com disjuntores identificados por adesivos de circuito",
  },
  {
    slug: "quadro-schneider-finalizado",
    title: "Quadro elétrico Schneider finalizado",
    category: "Quadros Elétricos",
    image: "/images/portfolio/quadro-schneider-finalizado.jpg",
    alt: "Quadro de distribuição com disjuntores Schneider Electric, porta aberta, instalação finalizada",
  },
  {
    slug: "quadro-novo-padrao",
    title: "Instalação de novo padrão elétrico",
    category: "Quadros Elétricos",
    image: "/images/portfolio/quadro-novo-padrao.jpg",
    alt: "Quadro de disjuntores recém-instalado em nicho de alvenaria, fiação organizada",
  },
];

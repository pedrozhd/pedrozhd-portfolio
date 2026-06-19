export interface ProjectStat {
  value: string;
  label: string;
  accent?: boolean;
}

export interface Project {
  id: string;
  number: string;
  barLabel: string;
  /** Variável CSS do acento: --a1 | --a2 | --a3 */
  accent: string;
  image: string;
  imageAlt: string;
  /** "contain" para imagens largas que não podem ser cortadas (mostra inteira). Padrão: cover. */
  imageFit?: "cover" | "contain";
  title: string;
  en: string;
  /** HTML estático e confiável (com <strong> de destaque). */
  description: string;
  stats: ProjectStat[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "farmers-hunters",
    number: "01",
    barLabel: "01 · BI / DASHBOARDS",
    accent: "--a1",
    image: "/assets/proj-farmers-hunters.jpg",
    imageAlt: "Dashboard Farmers & Hunters: performance comercial B2B",
    title: "Farmers & Hunters",
    en: "Real-time B2B sales performance panel",
    description:
      "<strong>Painel interno da StartSe</strong> para acompanhar, em tempo real, a performance do time comercial B2B: vendas por pessoa, propostas em aberto, pacing de meta (mês e trimestre) e taxa de conversão. Cobre <strong>Farmers</strong> (retenção e upsell), <strong>Hunters</strong> (novos clientes) e os BDRs. Em desenvolvimento: um <strong>simulador de propostas</strong> que projeta o quanto a equipe precisa vender para bater a meta anual.",
    stats: [
      { value: "Tempo real", label: "metas, pipeline & conversão", accent: true },
      { value: "KAMs · BDRs", label: "papéis comerciais cobertos" },
    ],
    tags: ["Power BI", "SQL", "BigQuery"],
  },
  {
    id: "assinaturas",
    number: "02",
    barLabel: "02 · AUTOMAÇÃO / IA",
    accent: "--a2",
    image: "/assets/proj-assinaturas.png",
    imageAlt: "Automação de assinaturas de e-mail self-service",
    imageFit: "contain",
    title: "Automação de Assinaturas",
    en: "Self-service email signature generator",
    description:
      "Com a alta rotatividade e todo mundo precisando de assinatura de e-mail, o contato com o designer virou gargalo. Criei uma automação <strong>self-service</strong>: a pessoa preenche um formulário e recebe a assinatura pronta no <strong>Slack</strong> em segundos: um workflow no <strong>Make.com</strong> que usa o <strong>Gemini</strong> para gerar a imagem com os dados certos.",
    stats: [
      { value: "Self-service", label: "sem designer no loop", accent: true },
      { value: "Slack", label: "entrega em segundos" },
    ],
    tags: ["Make.com", "Gemini", "Slack", "Automação"],
  },
  {
    id: "midia-paga",
    number: "03",
    barLabel: "03 · MÍDIA PAGA / GROWTH",
    accent: "--a3",
    image: "/assets/proj-midia-paga.jpg",
    imageAlt: "Dashboard de mídia paga cruzado com MQLs",
    title: "Mídia Paga × MQLs",
    en: "Paid-media spend vs. MQLs, unified",
    description:
      "Cruzei duas bases que não conversavam: os <strong>MQLs (HubSpot)</strong> e o investimento das plataformas de anúncios (<strong>Meta, Google, TikTok e LinkedIn Ads</strong>). Liguei tudo por campanha e transformei num <strong>dashboard automatizado</strong>, dando ao time de Marketing e Growth visibilidade de custo por MQL e retorno por canal.",
    stats: [
      { value: "4 plataformas", label: "Meta · Google · TikTok · LinkedIn", accent: true },
      { value: "HubSpot ⇄ Ads", label: "unificados por campanha" },
    ],
    tags: ["HubSpot", "Ads APIs", "SQL / BigQuery", "Power BI"],
  },
  {
    id: "receita",
    number: "04",
    barLabel: "04 · RECEITA / BI",
    accent: "--a1",
    image: "/assets/proj-receita.jpg",
    imageAlt: "Dashboard de receita gerencial em Power BI",
    title: "Receita Gerencial",
    en: "Managerial revenue recognition",
    description:
      "A empresa sabia <strong>quando vendia</strong>, mas não quando essa receita se distribuía no tempo e virava dinheiro de fato. Construí um <strong>Power BI</strong> que conecta a receita <strong>contábil à gerencial</strong>, mostrando o reconhecimento ao longo do tempo, para que áreas além da contabilidade entendam e usem essa relação.",
    stats: [
      { value: "Contábil ⇄ Gerencial", label: "receita reconhecida no tempo", accent: true },
      { value: "+ áreas", label: "além da contabilidade" },
    ],
    tags: ["Power BI", "SQL", "Modelagem", "Finanças"],
  },
];

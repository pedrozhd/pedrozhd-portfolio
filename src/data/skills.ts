export interface SkillGroup {
  num: string;
  title: string;
  /** Variável CSS do acento: --a1 | --a2 | --a3 | --ink */
  accent: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    num: "01",
    title: "Dados & Modelagem",
    accent: "--a2",
    items: ["SQL", "BigQuery", "Modelagem de dados", "ETL"],
  },
  {
    num: "02",
    title: "BI & Visualização",
    accent: "--a1",
    items: ["Power BI", "Dashboards", "Storytelling com dados"],
  },
  {
    num: "03",
    title: "Automação & IA",
    accent: "--a3",
    items: ["Python", "Agentes de IA", "Automação de processos"],
  },
  {
    num: "04",
    title: "Negócio & Estratégia",
    accent: "--ink",
    items: ["Revenue Operations", "Martech", "Análise de negócio"],
  },
];

export interface SkillGroup {
  title: string;
  /** Variável CSS do acento: --a1 | --a2 | --a3 | --ink */
  accent: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Dados & Modelagem",
    accent: "--a2",
    items: ["SQL", "BigQuery", "Modelagem de dados", "ETL"],
  },
  {
    title: "BI & Visualização",
    accent: "--a1",
    items: ["Power BI", "Dashboards", "Storytelling com dados"],
  },
  {
    title: "Automação & IA",
    accent: "--a3",
    items: ["Python", "Agentes de IA", "Automação de processos"],
  },
  {
    title: "Negócio & Estratégia",
    accent: "--ink",
    items: ["Revenue Operations", "Martech", "Análise de negócio"],
  },
];

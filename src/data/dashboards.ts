export interface Dashboard {
    id: string;
    title: string;
    description: string;
    platform: "Looker Studio" | "Power BI";
    tags: string[];
    image: string;
    link?: string;
}

export const dashboards: Dashboard[] = [
    {
        id: "marketing-growth",
        title: "Marketing Growth — Mídia Paga",
        description:
            "Análise de campanhas para geração de leads e MQLs, conversões, CPL, CTR, ROAS e investimento por plataforma de anúncios.",
        platform: "Looker Studio",
        tags: ["Mídia Paga", "MQL", "ROAS", "CPL", "Growth"],
        image: "/assets/dashboard-growth.jpg",
    },
    {
        id: "marketing-home",
        title: "Marketing Home — Visão Geral",
        description:
            "Painel de MQLs por fontes variadas: mídia paga, orgânico e CRM. Análise detalhada de MQLs e SQLs com funil de realizado vs. meta.",
        platform: "Looker Studio",
        tags: ["MQL", "SQL", "Funil", "Meta", "Orgânico"],
        image: "/assets/dashboard-home.jpg",
    },
    {
        id: "marketing-events",
        title: "Marketing Events — Eventos",
        description:
            "Rastreabilidade de eventos: ingressos vendidos, ROI, ticket médio, receita gerada e credenciais por evento.",
        platform: "Looker Studio",
        tags: ["Eventos", "ROI", "Receita", "Ticket Médio"],
        image: "/assets/dashboard-events.jpg",
    },
    {
        id: "checkpoint-b2b",
        title: "Checkpoint B2B",
        description:
            "Performance da mesa B2B: conversões de KAMs e BDRs, forecast, metas, receita gerada, reuniões agendadas e propostas enviadas.",
        platform: "Looker Studio",
        tags: ["B2B", "KAM", "BDR", "Forecast", "Revenue"],
        image: "/assets/dashboard-b2b.jpg",
    },
    {
        id: "sales-b2c",
        title: "Sales Dashboard — B2C",
        description:
            "Performance da mesa B2C: conversões por vendedor, produtos vendidos, receita gerada, metas e funis por produto.",
        platform: "Looker Studio",
        tags: ["B2C", "Vendas", "Funil", "Receita", "Metas"],
        image: "/assets/dashboard-sales.jpg",
    },
    {
        id: "receita-2026",
        title: "Painel de Receita 2026",
        description:
            "Gerenciamento e previsão de receita, gestão orçamentária e acompanhamento contábil de receitas reconhecidas — visão completa da receita da empresa.",
        platform: "Power BI",
        tags: ["Receita", "Forecast", "Orçamento", "Contabilidade", "Power BI"],
        image: "/assets/dashboard-receita.jpg",
    },
];

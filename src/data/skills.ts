export interface Skill {
    name: string;
    icon: string;
    level: number; // 0-100
    category: string;
}

export const skillCategories = [
    "Analytics & BI",
    "Ferramentas & Plataformas",
    "Linguagens & Cloud",
    "Estratégia & Operações",
] as const;

export const skills: Skill[] = [
    // Analytics & BI
    { name: "Power BI",             icon: "UilChartPie",      level: 90, category: "Analytics & BI" },
    { name: "Looker Studio",        icon: "UilChartBar",      level: 85, category: "Analytics & BI" },
    { name: "Data Analytics",       icon: "UilChartGrowth",   level: 85, category: "Analytics & BI" },
    { name: "Business Intelligence",icon: "UilChartLine",     level: 80, category: "Analytics & BI" },

    // Ferramentas & Plataformas
    { name: "BigQuery",             icon: "UilDatabase",      level: 90, category: "Ferramentas & Plataformas" },
    { name: "MongoDB",              icon: "UilHdd",           level: 65, category: "Ferramentas & Plataformas" },
    { name: "HubSpot CRM",          icon: "UilUsersAlt",      level: 85, category: "Ferramentas & Plataformas" },
    { name: "n8n",                  icon: "UilBolt",          level: 70, category: "Ferramentas & Plataformas" },
    { name: "Make (Integromat)",    icon: "UilSync",          level: 70, category: "Ferramentas & Plataformas" },

    // Linguagens & Cloud
    { name: "SQL",                  icon: "UilCodeBranch",    level: 90, category: "Linguagens & Cloud" },
    { name: "Python",               icon: "UilAnalytics",     level: 75, category: "Linguagens & Cloud" },
    { name: "TypeScript",           icon: "UilBracketsCurly", level: 70, category: "Linguagens & Cloud" },
    { name: "Apache Spark",         icon: "UilServer",        level: 65, category: "Linguagens & Cloud" },
    { name: "Google Cloud",         icon: "UilCloud",         level: 80, category: "Linguagens & Cloud" },

    // Estratégia & Operações
    { name: "Revenue Operations",   icon: "UilDollarSign",  level: 85, category: "Estratégia & Operações" },
    { name: "Growth (B2B/B2C)",     icon: "UilRocket",      level: 80, category: "Estratégia & Operações" },
    { name: "Automações",           icon: "UilRobot",       level: 75, category: "Estratégia & Operações" },
];

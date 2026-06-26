import Reveal from "@/components/Reveal";

interface Milestone {
  id: number;
  date: string;
  tag: string;
  acc: string;
  title: string;
  body: string;
  active?: boolean;
}

const milestones: Milestone[] = [
  {
    id: 1,
    date: "Out 2025",
    tag: "BI · Modelagem",
    acc: "--a3",
    title: "Refatoração do data warehouse de BI",
    body: "Reestruturei o modelo de dados em sources, stages, dimensions e facts para suportar 2026/2027 sem quebrar, partindo de fontes não documentadas e desestruturadas. Limpei as bases, corrigi os relacionamentos e refiz as medidas.",
  },
  {
    id: 2,
    date: "Nov 2025",
    tag: "Growth · Analytics",
    acc: "--a2",
    title: "Inteligência de Growth × Receita",
    body: "Cruzei os dados de negócio do HubSpot com investimento e performance de mídia (Meta, Google, TikTok e LinkedIn Ads) no BigQuery, padronizando métricas como CPA, CPC, CTR, CPL e CMQL. Resultaram 3 dashboards no Looker dos quais sigo como owner, usados nas reuniões de diretoria.",
  },
  {
    id: 3,
    date: "Nov 2025",
    tag: "Engenharia · Receita",
    acc: "--a1",
    title: "Painel gerencial de receita",
    body: "Desenvolvi em Next.js e TypeScript um painel que lê do BigQuery as vendas sem receita alocada e aplica as regras de reconhecimento: uma antecipação de 40% num negócio parcelado, por exemplo, reflete ao mesmo tempo nas 12 linhas do contrato. Toda a escrita de volta no banco e a trilha de auditoria alimentam o Power BI.",
  },
  {
    id: 4,
    date: "Dez 2025",
    tag: "Automação",
    acc: "--a2",
    title: "Automação de assinaturas de e-mail",
    body: "Criei no Make.com um fluxo que gera a assinatura de e-mail de cada novo colaborador de forma autônoma, recuperando os dados da pessoa e usando o Gemini para o replace, e entrega direto no Slack do colaborador.",
  },
  {
    id: 5,
    date: "Dez 2025",
    tag: "IA · RAG & Agentes",
    acc: "--a3",
    title: "RAG e agentes de vendas",
    body: "Montei um RAG dos playbooks dos produtos e um agente (Claude + embeddings do Google + vector store) que responde às consultas dos vendedores por produto e objetivo. Para engajar o time, criei um segundo agente que dispara perguntas provocativas diárias para o primeiro responder, virando munição de pitch.",
  },
  {
    id: 6,
    date: "Jan 2026",
    tag: "Produto · B2C",
    acc: "--a2",
    title: "Forecast e gestão comercial B2C",
    body: "Construí em Next.js e TypeScript uma ferramenta de forecast e gestão de vendas para o time B2C, que escreve no banco e alimenta os dashboards de gestão B2C no Looker.",
  },
  {
    id: 7,
    date: "Presente",
    tag: "Produto · B2B · Destaque",
    acc: "--a1",
    title: "Farmers & Hunters — comando comercial B2B",
    body: "Painel de comando de todo o time comercial B2B, dos BDRs aos vendedores, em tempo real: vendas, propostas, gaps, metas e evolução semanal de ligações, reuniões, contatos e mensagens. Inclui um modelo de cohort/regressão que projeta vendas futuras por vendedor a partir das taxas de conversão, um simulador de quantas propostas faltam para bater a meta e a auditoria dos negócios guarda-chuva (créditos consumidos pelos clientes).",
    active: true,
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="exp">
      <Reveal>
        <div className="eyebrow" style={{ ["--acc" as string]: "var(--a3)" }}>
          / Experiência
        </div>
        <h2>Trajetória</h2>
        <p className="exp-lead">
          Tudo construído na StartSe, minha{" "}
          <strong>primeira experiência profissional</strong> — do BI à
          engenharia de software e aos agentes de IA.
          <span className="en">
            Everything built at StartSe, my first professional role, from BI to
            software engineering and AI agents.
          </span>
        </p>
      </Reveal>

      <div className="timeline">
        {milestones.map((m, i) => (
          <Reveal key={m.id} delay={0.06 * i}>
            <div
              className={`tl-item${m.active ? " is-active" : ""}`}
              style={{ ["--acc" as string]: `var(${m.acc})` }}
            >
              <div className="tl-date">{m.date}</div>
              <div className="tl-rail">
                <span className="tl-dot" />
              </div>
              <div className="tl-body">
                <div className="tl-tag">{m.tag}</div>
                <h3 className="tl-title">{m.title}</h3>
                <p className="tl-note">{m.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

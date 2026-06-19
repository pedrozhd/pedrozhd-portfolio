"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";

const domains = [
  {
    num: "01",
    name: "Negócios",
    desc: "Traduzo a necessidade do negócio em pergunta de dados.",
    accent: "--a1",
    shape: "square" as const,
  },
  {
    num: "02",
    name: "Dados",
    desc: "Modelo e conecto bases em informação confiável.",
    accent: "--a2",
    shape: "circle" as const,
  },
  {
    num: "03",
    name: "IA",
    desc: "Automatizo e escalo processos com agentes e automações.",
    accent: "--a3",
    shape: "diamond" as const,
  },
];

const tags = ["SQL", "BigQuery", "Power BI", "Python", "Automação · IA"];

function CornerShape({ shape }: { shape: "square" | "circle" | "diamond" }) {
  return (
    <svg className="domain-corner" viewBox="0 0 120 120" aria-hidden="true">
      {shape === "square" && (
        <rect x="20" y="20" width="80" height="80" rx="10" fill="#fff" />
      )}
      {shape === "circle" && <circle cx="60" cy="60" r="42" fill="#fff" />}
      {shape === "diamond" && (
        <rect
          x="35"
          y="35"
          width="50"
          height="50"
          fill="#fff"
          transform="rotate(45 60 60)"
        />
      )}
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="topo" className="hero">
      <Reveal>
        <div className="eyebrow">Business Intelligence · RevOps · Martech</div>
        <h1 className="hero-title">
          Onde dados viram <span>decisão.</span>
        </h1>
        <p className="hero-sub">Where data becomes decision.</p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="domain-grid">
          {domains.map((d) => (
            <div
              key={d.num}
              className="domain-tile"
              style={{ ["--acc" as string]: `var(${d.accent})` }}
            >
              <CornerShape shape={d.shape} />
              <div className="domain-head">
                <span className="domain-num">{d.num} — DOMÍNIO</span>
                <span className={`domain-ico domain-ico--${d.shape}`} />
              </div>
              <div className="domain-bottom">
                <div className="domain-name">{d.name}</div>
                <p className="domain-desc">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="hero-intro">
          <div className="hero-photo">
            <Image
              src="/assets/pedro-foto.jpg"
              alt="Pedro França na StartSe"
              fill
              sizes="(max-width: 768px) 100vw, 200px"
              priority
            />
          </div>
          <div className="intro-card">
            <p className="intro-text">
              Transformo dados em insights que ajudam times a tomar decisões
              melhores — dashboards que viram ação, automações e agentes de IA
              que escalam processos. <span>Na StartSe.</span>
            </p>
            <div className="tag-row">
              {tags.map((t) => (
                <span key={t} className="tag-dark">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

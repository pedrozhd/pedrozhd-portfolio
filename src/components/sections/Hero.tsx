"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";
import Typewriter from "@/components/Typewriter";

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

const words = ["decisão.", "impacto.", "resultado.", "ação."];

const tileVariants = {
  rest: { y: 0, scale: 1 },
  hover: { y: -5, scale: 1.02 },
};

const cornerVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: -10, y: 10 },
};

const icoVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.25 },
};

const tags = ["SQL", "BigQuery", "Power BI", "Python", "Automação · IA"];


export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(
      () => setWordIndex((i) => (i + 1) % words.length),
      2400
    );
    return () => clearTimeout(id);
  }, [wordIndex]);

  return (
    <section id="topo" className="hero">
      <Reveal>
        <Typewriter
          text="Business Intelligence · RevOps · Martech"
          className="eyebrow hero-eyebrow"
          duration={1.6}
        />
        <h1 className="hero-title">
          Onde dados viram{" "}
          <span className="hero-title-slot">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[wordIndex]}
                className="hero-title-word"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {words[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
        <p className="hero-sub">Where data becomes decision.</p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="domain-grid">
          {domains.map((d) => (
            <motion.div
              key={d.num}
              className="domain-tile"
              style={{ ["--acc" as string]: `var(${d.accent})` }}
              variants={tileVariants}
              initial="rest"
              whileHover="hover"
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            >
              <motion.svg
                className="domain-corner"
                viewBox="0 0 120 120"
                aria-hidden="true"
                variants={cornerVariants}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              >
                {d.shape === "square" && (
                  <rect x="20" y="20" width="80" height="80" rx="10" fill="#fff" />
                )}
                {d.shape === "circle" && <circle cx="60" cy="60" r="42" fill="#fff" />}
                {d.shape === "diamond" && (
                  <rect x="35" y="35" width="50" height="50" fill="#fff" transform="rotate(45 60 60)" />
                )}
              </motion.svg>
              <div className="domain-head">
                <span className="domain-num">{d.num} · DOMÍNIO</span>
                <motion.span
                  className={`domain-ico domain-ico--${d.shape}`}
                  variants={icoVariants}
                  transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                />
              </div>
              <div className="domain-bottom">
                <div className="domain-name">{d.name}</div>
                <p className="domain-desc">{d.desc}</p>
              </div>
            </motion.div>
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
              melhores: dashboards que viram ação, automações e agentes de IA
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

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";
import Typewriter from "@/components/Typewriter";
import PhotoTilt from "@/components/PhotoTilt";

const words = ["decisão.", "impacto.", "resultado.", "ação."];

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
        <div className="hero-intro">
          <PhotoTilt>
            <div className="hero-photo">
              <Image
                src="/assets/pedro-foto.jpg"
                alt="Pedro França na StartSe"
                fill
                sizes="(max-width: 768px) 100vw, 200px"
                priority
              />
            </div>
          </PhotoTilt>
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

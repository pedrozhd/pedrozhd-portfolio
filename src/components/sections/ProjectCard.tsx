"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/data/projects";

const cardVariants = {
  rest: { y: 0 },
  hover: { y: -6 },
};

const arrowVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: 3, y: -3 },
};

export default function ProjectCard({ p }: { p: Project }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const showDetails = hovered || expanded;

  return (
    <motion.article
      className="project-card"
      style={{ ["--acc" as string]: `var(${p.accent})` }}
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => setExpanded((v) => !v)}
    >
      <div className="project-bar">
        <span className="project-bar-label">{p.barLabel}</span>
        <motion.svg
          className="project-bar-arrow"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          variants={arrowVariants}
          animate={{ rotate: expanded ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </motion.svg>
      </div>

      <div
        className={`project-img${
          p.imageFit === "contain" ? " project-img--contain" : ""
        }`}
      >
        <Image
          src={p.image}
          alt={p.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 540px"
          loading="lazy"
        />
      </div>

      <div className="project-body">
        <h3 className="project-title">{p.title}</h3>
        <p className="project-en">{p.en}</p>

        <AnimatePresence initial={false}>
          {showDetails && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
            >
              <p
                className="project-desc"
                dangerouslySetInnerHTML={{ __html: p.description }}
              />
              <div className="project-stats">
                {p.stats.map((s) => (
                  <div key={s.value}>
                    <div className={`stat-num ${s.accent ? "accent" : "light"}`}>
                      {s.value}
                    </div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="tags">
          {p.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

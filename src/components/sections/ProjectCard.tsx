"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/data/projects";

const cardVariants = {
  rest: { y: 0 },
  hover: { y: -6 },
};

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.06 },
};

export default function ProjectCard({ p }: { p: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      className="project-card"
      style={{ ["--acc" as string]: `var(${p.accent})` }}
      variants={cardVariants}
      initial="rest"
      animate="rest"
      whileHover="hover"
      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      onClick={() => setExpanded((v) => !v)}
    >
      <div className="project-content">
        <div className="project-titlerow">
          <h3 className="project-title">{p.title}</h3>
          <motion.svg
            className="project-chevron"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
          >
            <polyline points="6 9 12 15 18 9" />
          </motion.svg>
        </div>

        <p className="project-en">{p.en}</p>

        <AnimatePresence initial={false}>
          {expanded && (
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div
        className={`project-media${
          p.imageFit === "contain" ? " project-media--contain" : ""
        }`}
      >
        <motion.div
          className="project-media-img"
          variants={imageVariants}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            src={p.image}
            alt={p.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 540px"
            loading="lazy"
          />
        </motion.div>
      </div>
    </motion.article>
  );
}

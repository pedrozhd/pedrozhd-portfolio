"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

const MARQUEE_ITEMS = [
  "Business Intelligence",
  "RevOps",
  "Martech",
  "SQL",
  "BigQuery",
  "Power BI",
  "Python",
  "Automação",
  "Agentes de IA",
];

function MarqueeTrack() {
  const text = MARQUEE_ITEMS.join("  ·  ") + "  ·  ";
  return (
    <div className="footer-marquee-wrap">
      <div className="footer-marquee-track">
        <span>{text}</span>
        <span aria-hidden="true">{text}</span>
      </div>
    </div>
  );
}

interface MagneticProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  className?: string;
}

function MagneticLink({ href, children, target, rel, className = "" }: MagneticProps) {
  const [xy, setXy] = useState({ x: 0, y: 0 });

  const handleMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setXy({
      x: (e.clientX - rect.left - rect.width / 2) * 0.35,
      y: (e.clientY - rect.top - rect.height / 2) * 0.35,
    });
  }, []);

  const handleLeave = useCallback(() => setXy({ x: 0, y: 0 }), []);

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      className={`footer-pill ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: xy.x, y: xy.y }}
      transition={{ type: "spring", stiffness: 200, damping: 18, mass: 0.5 }}
    >
      {children}
    </motion.a>
  );
}

function BackToTop() {
  const [xy, setXy] = useState({ x: 0, y: 0 });

  const handleMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setXy({
      x: (e.clientX - rect.left - rect.width / 2) * 0.35,
      y: (e.clientY - rect.top - rect.height / 2) * 0.35,
    });
  }, []);

  return (
    <motion.button
      className="footer-top-btn"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      onMouseMove={handleMove}
      onMouseLeave={() => setXy({ x: 0, y: 0 })}
      animate={{ x: xy.x, y: xy.y }}
      transition={{ type: "spring", stiffness: 200, damping: 18, mass: 0.5 }}
      aria-label="Voltar ao topo"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </motion.button>
  );
}

export default function Footer() {
  return (
    /* Wrapper em fluxo normal — ocupa 100vh para o scroll funcionar.
       clip-path recorta o footer fixo ao bounds do wrapper. */
    <div className="footer-curtain-wrap">
      <footer className="footer-curtain-inner">

        {/* Fundo: grid sutil */}
        <div className="footer-grid-bg" aria-hidden="true" />

        {/* Texto gigante de fundo */}
        <div className="footer-giant-text" aria-hidden="true">PEDRO</div>

        {/* Marquee diagonal */}
        <div className="footer-marquee-row">
          <MarqueeTrack />
        </div>

        {/* Conteúdo central */}
        <div className="footer-body">
          <h2 className="footer-heading">
            Vamos transformar<br />dados em vantagem.
          </h2>

          <div className="footer-links">
            <MagneticLink
              href="mailto:pedrohenriquefc06@gmail.com"
              className="footer-pill--primary"
            >
              pedrohenriquefc06@gmail.com
            </MagneticLink>

            <div className="footer-links-row">
              <MagneticLink
                href="https://www.linkedin.com/in/pedrozhd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </MagneticLink>
              <MagneticLink
                href="https://github.com/pedrozhd"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </MagneticLink>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="footer-bar">
          <span className="footer-copy">© 2026 · Pedro França</span>
          <span className="footer-tagline">Negócios × Dados × IA</span>
          <BackToTop />
        </div>

      </footer>
    </div>
  );
}

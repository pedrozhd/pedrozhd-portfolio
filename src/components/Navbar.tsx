"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Experiência", href: "#experiencia" },
];

const MOBILE_ITEMS = [
  { letter: "S", label: "Sobre", href: "#sobre" },
  { letter: "P", label: "Projetos", href: "#projetos" },
  { letter: "H", label: "Habilidades", href: "#habilidades" },
  { letter: "E", label: "Experiência", href: "#experiencia" },
  { letter: "C", label: "Contato", href: null },
];

const STRIDE = 52;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const navigate = (href: string | null) => {
    setOpen(false);
    if (!href) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="nav">
      {/* SVG filter — zero-size, hidden */}
      <svg className="gooey-svg-filter" aria-hidden="true">
        <defs>
          <filter id="gooey-nav">
            <feGaussianBlur in="SourceGraphic" stdDeviation={5} result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className="nav-inner">
        <a href="#topo" className="nav-logo">
          Pedro França
        </a>

        {/* Desktop nav */}
        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="#"
            className="nav-cta"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
            }}
          >
            Contato
          </a>
        </div>

        {/* Mobile: theme toggle + gooey menu */}
        <div className="nav-mobile-side">
          <ThemeToggle />

          <div ref={wrapRef} className="nav-gooey-wrap">
            {/* Text labels — outside filter so they stay sharp */}
            <AnimatePresence>
              {open && MOBILE_ITEMS.map((item, i) => (
                <motion.a
                  key={item.label}
                  className="nav-gooey-label"
                  style={{ top: (i + 1) * STRIDE }}
                  href={item.href ?? "#"}
                  onClick={(e) => { e.preventDefault(); navigate(item.href); }}
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 6 }}
                  transition={{ delay: i * 0.04 + 0.08, duration: 0.16 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </AnimatePresence>

            {/* Gooey circle container */}
            <div className="nav-gooey-filter" style={{ filter: "url(#gooey-nav)" }}>
              <AnimatePresence>
                {open && MOBILE_ITEMS.map((item, i) => (
                  <motion.button
                    key={item.label}
                    className="nav-gooey-item"
                    onClick={() => navigate(item.href)}
                    aria-label={item.label}
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: (i + 1) * STRIDE, opacity: 1 }}
                    exit={{
                      y: 0,
                      opacity: 0,
                      transition: {
                        delay: (MOBILE_ITEMS.length - i) * 0.04,
                        duration: 0.35,
                        type: "spring",
                        bounce: 0,
                      },
                    }}
                    transition={{
                      delay: i * 0.05,
                      duration: 0.4,
                      type: "spring",
                      bounce: 0,
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={item.letter}
                        className="nav-gooey-letter"
                        initial={{ opacity: 0, filter: "blur(6px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, filter: "blur(6px)" }}
                        transition={{ delay: i * 0.05, duration: 0.16 }}
                      >
                        {item.letter}
                      </motion.span>
                    </AnimatePresence>
                  </motion.button>
                ))}
              </AnimatePresence>

              {/* Trigger */}
              <button
                className="nav-gooey-trigger"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                aria-expanded={open}
              >
                <AnimatePresence mode="wait">
                  {open ? (
                    <motion.span
                      key="close"
                      initial={{ opacity: 0, filter: "blur(6px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, filter: "blur(6px)" }}
                      transition={{ duration: 0.16 }}
                    >
                      ✕
                    </motion.span>
                  ) : (
                    <motion.span
                      key="open"
                      initial={{ opacity: 0, filter: "blur(6px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, filter: "blur(6px)" }}
                      transition={{ duration: 0.16 }}
                    >
                      ☰
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { UilArrowDown, UilExternalLinkAlt, UilDatabase } from "@iconscout/react-unicons";
import HeroDataCards from "@/components/HeroDataCards";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const roles = [
    "Data Analyst",
    "Revenue Operations",
    "BI Specialist",
    "Growth Enthusiast",
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const heroRef = useRef<HTMLElement>(null);
    const isHeroInView = useInView(heroRef, { amount: 0.05 });

    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 600], [0, -120]);
    const heroOpacity = useTransform(scrollY, [0, 350], [1, 0]);

    useEffect(() => {
        if (!isHeroInView) return;

        const currentRole = roles[roleIndex];
        let timeout: NodeJS.Timeout;

        if (!isDeleting && displayText === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayText === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
            timeout = setTimeout(
                () => {
                    setDisplayText(
                        isDeleting
                            ? currentRole.substring(0, displayText.length - 1)
                            : currentRole.substring(0, displayText.length + 1)
                    );
                },
                isDeleting ? 50 : 100
            );
        }
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex, isHeroInView]);

    // 30 dots instead of 80 — enough for the visual effect
    const dots = useMemo(() => {
        const result = [];
        for (let i = 0; i < 30; i++) {
            const x = (i * 37 + 13) % 100;
            const y = (i * 53 + 7) % 100;
            const delay = (i % 10) * 0.3;
            const duration = 2.5 + (i % 5) * 0.5;
            result.push({ x, y, delay, duration, key: i });
        }
        return result;
    }, []);

    return (
        <section id="hero" className="hero section" ref={heroRef}>
            <div className="container">
                <div className="hero-layout">
                    {/* Left — text content */}
                    <motion.div
                        className="hero-content"
                        style={{ y: heroY, opacity: heroOpacity }}
                    >
                        <motion.div
                            className="hero-label"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <UilDatabase size={14} color="currentColor" />
                            Entusiasta em dados e negócios
                        </motion.div>

                        <motion.h1
                            className="hero-title"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Pedro{" "}
                            <span className="gradient-text">França</span>
                        </motion.h1>

                        <motion.div
                            className="hero-role"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "1.3rem",
                                color: "var(--accent-blue)",
                                marginBottom: "24px",
                            }}
                        >
                            {displayText}
                            <span
                                style={{
                                    borderRight: "2px solid var(--accent-blue)",
                                    marginLeft: "2px",
                                }}
                            >
                                &nbsp;
                            </span>
                        </motion.div>

                        <motion.p
                            className="hero-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Estagiário em Data Analysis & Revenue Operations na StartSe.
                            Apaixonado por transformar dados em decisões estratégicas e
                            impulsionar receita através de analytics, BI e automações.
                        </motion.p>

                        <motion.div
                            className="hero-buttons"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            <a href="#dashboards">
                                <InteractiveHoverButton
                                    text="Ver Dashboards"
                                    className="w-64 border-[rgba(99,102,241,0.4)] text-[#e8e8f0]"
                                    style={{ padding: "16px 24px", fontSize: "0.9rem" }}
                                />
                            </a>
                            <a href="#contact">
                                <InteractiveHoverButton
                                    text="Entrar em Contato"
                                    className="w-64 border-[rgba(99,102,241,0.4)] text-[#e8e8f0]"
                                    style={{ padding: "16px 24px", fontSize: "0.9rem" }}
                                />
                            </a>
                        </motion.div>

                        <motion.div
                            className="hero-stats"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                        >
                            <div className="hero-stat">
                                <div className="hero-stat-value gradient-text">StartSe</div>
                                <div className="hero-stat-label">Empresa Atual</div>
                            </div>
                            <div className="hero-stat">
                                <div className="hero-stat-value gradient-text">FIAP</div>
                                <div className="hero-stat-label">Universidade</div>
                            </div>
                            <div className="hero-stat">
                                <div className="hero-stat-value gradient-text">RevOps</div>
                                <div className="hero-stat-label">& Data Analytics</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right — animated KPI cards */}
                    <HeroDataCards />
                </div>
            </div>

            {/* Dot grid — pauses when hero leaves viewport */}
            <div className="hero-grid-bg">
                {dots.map((dot) => (
                    <motion.div
                        key={dot.key}
                        className="grid-dot"
                        style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
                        animate={
                            isHeroInView
                                ? { opacity: [0.15, 0.6, 0.15], scale: [1, 1.5, 1] }
                                : { opacity: 0, scale: 1 }
                        }
                        transition={
                            isHeroInView
                                ? { duration: dot.duration, delay: dot.delay, repeat: Infinity }
                                : { duration: 0.4 }
                        }
                    />
                ))}
            </div>

            {/* Scroll indicator */}
            <motion.a
                href="#about"
                style={{
                    position: "absolute",
                    bottom: "40px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    color: "var(--text-muted)",
                    zIndex: 2,
                }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <UilArrowDown size={24} color="currentColor" />
            </motion.a>
        </section>
    );
}

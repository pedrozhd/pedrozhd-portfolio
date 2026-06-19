"use client";

import {
    motion,
    useInView,
    useMotionValue,
    useTransform,
    useSpring,
} from "framer-motion";
import { useRef } from "react";
import { UilUser, UilCheckCircle } from "@iconscout/react-unicons";

const highlights = [
    "Dashboards no Power BI e Looker Studio",
    "Consultas avançadas em SQL (BigQuery)",
    "Python para análise e extração de dados",
    "Apache Spark para processamento em escala",
    "Revenue Operations & Growth",
    "Automações com n8n e Make",
    "CRM & HubSpot",
    "Análise B2B e B2C para otimização de receita",
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
        stiffness: 150,
        damping: 20,
    });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
        stiffness: 150,
        damping: 20,
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left - rect.width / 2) / rect.width);
        mouseY.set((e.clientY - rect.top - rect.height / 2) / rect.height);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section id="about" className="section" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">
                        <UilUser size={14} color="currentColor" />
                        Sobre Mim
                    </div>
                    <h2 className="section-title">
                        Conheça minha <span className="gradient-text">trajetória</span>
                    </h2>
                </motion.div>

                <div className="about-grid">
                    <motion.div
                        className="about-image-wrapper"
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d",
                            perspective: 800,
                        }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="about-image-card">
                            <div className="about-avatar" style={{ overflow: "hidden" }}>
                                <img
                                    src="/pedro-franca.jpg"
                                    alt="Pedro França"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: "var(--radius-lg)",
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    textAlign: "center",
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "0.9rem",
                                    color: "var(--text-muted)",
                                    marginTop: "16px",
                                }}
                            >
                                Dados → Insights → Soluções
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3>
                            Analista de{" "}
                            <span className="gradient-text">dados</span> com foco em{" "}
                            <span className="gradient-text-cyan">receita</span>
                        </h3>

                        <p className="about-description">
                            Paulistano de nascença, sou estagiário em Data Analysis &
                            Revenue Operations na{" "}
                            <a href="https://www.startse.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-blue)", textDecoration: "underline" }}>StartSe</a>{" "}
                            — onde meu dia a dia é transformar
                            dados em estratégias que realmente movem a receita.
                        </p>

                        <p className="about-description">
                            No meu toolkit: BigQuery pra rodar SQL pesado, Power BI pra
                            dashboards técnicos e robustos, Looker Studio quando precisa ser
                            rápido e visual, e HubSpot como CRM. Python entra pra extração e
                            análise de dados em escala, e também pra construir soluções que
                            fogem do convencional — como sistemas de reconhecimento de receita
                            e RAG de product books que alimentam bots conversacionais pros
                            clientes. Gosto de ir além do óbvio. Automatizo fluxos com n8n e
                            Make, e curso ADS na FIAP, atualmente no 3º período.
                        </p>

                        <ul className="about-highlights">
                            {highlights.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                                >
                                    <UilCheckCircle size={18} color="currentColor" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

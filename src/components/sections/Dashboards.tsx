"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { UilApps, UilExternalLinkAlt } from "@iconscout/react-unicons";
import { dashboards } from "@/data/dashboards";

type FilterType = "Todos" | "Looker Studio" | "Power BI";

export default function Dashboards() {
    const [filter, setFilter] = useState<FilterType>("Todos");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20px" });

    const filtered =
        filter === "Todos"
            ? dashboards
            : dashboards.filter((d) => d.platform === filter);

    return (
        <section id="dashboards" className="section" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">
                        <UilApps size={14} color="currentColor" />
                        Portfólio
                    </div>
                    <h2 className="section-title">
                        Meus <span className="gradient-text">Dashboards</span>
                    </h2>
                    <p className="section-subtitle">
                        Projetos reais de visualização de dados criados para resolver
                        problemas de negócio
                    </p>
                    <p className="section-disclaimer">
                        Dados substituídos por valores fictícios para preservar a confidencialidade da empresa.
                    </p>
                </motion.div>

                <motion.div
                    className="dashboards-filter"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    {(["Todos", "Looker Studio", "Power BI"] as FilterType[]).map(
                        (type) => (
                            <button
                                key={type}
                                className={`filter-btn ${filter === type ? "active" : ""}`}
                                onClick={() => setFilter(type)}
                            >
                                {type}
                            </button>
                        )
                    )}
                </motion.div>

                <div className="dashboards-grid">
                    <AnimatePresence mode="wait">
                        {filtered.map((dashboard, i) => (
                            <motion.a
                                key={dashboard.id}
                                href={dashboard.link || dashboard.image}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dashboard-card"
                                initial={{ opacity: 0, y: 24 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                exit={{ opacity: 0, transition: { duration: 0.12 } }}
                                transition={{ duration: 0.4, delay: i * 0.07 }}
                                whileHover={{ y: -8 }}
                            >
                                <div className="dashboard-image-wrapper">
                                    <img
                                        src={dashboard.image}
                                        alt={dashboard.title}
                                        className="dashboard-image-zoom"
                                        loading="lazy"
                                        decoding="async"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            objectPosition: "top",
                                            display: "block",
                                        }}
                                    />

                                    <span
                                        className={`dashboard-platform-badge ${
                                            dashboard.platform === "Looker Studio"
                                                ? "badge-looker"
                                                : "badge-powerbi"
                                        }`}
                                    >
                                        {dashboard.platform}
                                    </span>

                                    <div className="dashboard-overlay">
                                        <span className="btn btn-primary" style={{ fontSize: "0.85rem", padding: "10px 20px" }}>
                                            <UilExternalLinkAlt size={16} color="currentColor" />
                                            Ver Dashboard
                                        </span>
                                    </div>
                                </div>

                                <div className="dashboard-content">
                                    <h3 className="dashboard-title">{dashboard.title}</h3>
                                    <p className="dashboard-description">
                                        {dashboard.description}
                                    </p>
                                    <div className="dashboard-tags">
                                        {dashboard.tags.map((tag) => (
                                            <span key={tag} className="dashboard-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

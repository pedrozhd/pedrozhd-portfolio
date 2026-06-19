"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
    UilChartBar,
    UilChartPie,
    UilChartLine,
    UilDatabase,
    UilCodeBranch,
    UilAnalytics,
    UilCloud,
    UilSync,
    UilBolt,
    UilLayerGroup,
    UilChartGrowth,
    UilUsersAlt,
    UilDollarSign,
    UilRocket,
    UilRobot,
    UilBracketsCurly,
    UilServer,
    UilHdd,
} from "@iconscout/react-unicons";
import { skills, skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ReactNode> = {
    UilChartBar:      <UilChartBar size={22} color="currentColor" />,
    UilChartPie:      <UilChartPie size={22} color="currentColor" />,
    UilChartLine:     <UilChartLine size={22} color="currentColor" />,
    UilDatabase:      <UilDatabase size={22} color="currentColor" />,
    UilCodeBranch:    <UilCodeBranch size={22} color="currentColor" />,
    UilAnalytics:     <UilAnalytics size={22} color="currentColor" />,
    UilCloud:         <UilCloud size={22} color="currentColor" />,
    UilSync:          <UilSync size={22} color="currentColor" />,
    UilBolt:          <UilBolt size={22} color="currentColor" />,
    UilChartGrowth:   <UilChartGrowth size={22} color="currentColor" />,
    UilUsersAlt:      <UilUsersAlt size={22} color="currentColor" />,
    UilDollarSign:    <UilDollarSign size={22} color="currentColor" />,
    UilRocket:        <UilRocket size={22} color="currentColor" />,
    UilRobot:         <UilRobot size={22} color="currentColor" />,
    UilBracketsCurly: <UilBracketsCurly size={22} color="currentColor" />,
    UilServer:        <UilServer size={22} color="currentColor" />,
    UilHdd:           <UilHdd size={22} color="currentColor" />,
};

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState<string>("Todas");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const filteredSkills =
        activeCategory === "Todas"
            ? skills
            : skills.filter((s) => s.category === activeCategory);

    return (
        <section id="skills" className="section" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">
                        <UilLayerGroup size={14} color="currentColor" />
                        Tech Stack
                    </div>
                    <h2 className="section-title">
                        Minhas <span className="gradient-text">habilidades</span>
                    </h2>
                    <p className="section-subtitle">
                        Ferramentas e tecnologias que utilizo para transformar dados em
                        resultados de negócio
                    </p>
                </motion.div>

                <motion.div
                    className="skills-categories"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <button
                        className={`skill-category-btn ${activeCategory === "Todas" ? "active" : ""}`}
                        onClick={() => setActiveCategory("Todas")}
                    >
                        Todas
                    </button>
                    {skillCategories.map((cat) => (
                        <button
                            key={cat}
                            className={`skill-category-btn ${activeCategory === cat ? "active" : ""}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                <motion.div className="skills-grid" layout>
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                className="skill-card"
                                layout
                                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
                                transition={{ duration: 0.35, delay: i * 0.04 }}
                                whileHover={{ y: -4 }}
                            >
                                <div className="skill-icon-wrapper">
                                    {iconMap[skill.icon] ?? <UilCodeBranch size={22} color="currentColor" />}
                                </div>
                                <div className="skill-info">
                                    <div className="skill-name">{skill.name}</div>
                                    <div className="skill-bar-bg">
                                        <motion.div
                                            className="skill-bar-fill"
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                            transition={{ duration: 1, delay: 0.5 + i * 0.05 }}
                                        />
                                    </div>
                                </div>
                                <div className="skill-level">{skill.level}%</div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

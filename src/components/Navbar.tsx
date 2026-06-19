"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UilBars, UilTimes } from "@iconscout/react-unicons";

const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Dashboards", href: "#dashboards" },
    { label: "Contato", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
        const observers = sectionIds.map((id) => {
            const el = document.getElementById(id);
            if (!el) return null;
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { threshold: 0.3, rootMargin: "-10% 0px -60% 0px" }
            );
            obs.observe(el);
            return obs;
        });
        return () => observers.forEach((obs) => obs?.disconnect());
    }, []);

    const handleLinkClick = () => setMobileOpen(false);

    return (
        <>
            <motion.nav
                className={`navbar ${scrolled ? "scrolled" : ""}`}
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="navbar-inner" style={{ justifyContent: "center" }}>
                    <ul className="navbar-links">
                        {navLinks.map((link) => {
                            const id = link.href.replace("#", "");
                            const isActive = activeSection === id;
                            return (
                                <li key={link.href} style={{ position: "relative" }}>
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-pill"
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                background: "rgba(37, 99, 235, 0.1)",
                                                borderRadius: "var(--radius-full)",
                                                border: "1px solid rgba(37, 99, 235, 0.22)",
                                            }}
                                            transition={{
                                                type: "spring",
                                                bounce: 0.2,
                                                duration: 0.5,
                                            }}
                                        />
                                    )}
                                    <a
                                        href={link.href}
                                        style={{
                                            position: "relative",
                                            zIndex: 1,
                                            color: isActive
                                                ? "var(--accent-blue)"
                                                : undefined,
                                            fontWeight: isActive ? 600 : undefined,
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    <button
                        className="navbar-toggle"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Menu"
                    >
                        {mobileOpen ? <UilTimes size={24} color="currentColor" /> : <UilBars size={24} color="currentColor" />}
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            className="mobile-menu-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                        />
                        <motion.div
                            className="mobile-menu"
                            initial={{ x: 280 }}
                            animate={{ x: 0 }}
                            exit={{ x: 280 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        >
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

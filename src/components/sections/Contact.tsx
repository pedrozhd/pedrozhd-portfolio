"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    UilCommentAlt,
    UilEnvelope,
    UilLinkedinAlt,
    UilGithub,
    UilMapPin,
} from "@iconscout/react-unicons";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" className="section" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">
                        <UilCommentAlt size={14} color="currentColor" />
                        Contato
                    </div>
                    <h2 className="section-title">
                        Vamos <span className="gradient-text">conversar</span>?
                    </h2>
                    <p className="section-subtitle">
                        Tem um projeto de dados em mente? Adoraria ouvir sobre ele
                    </p>
                </motion.div>

                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ maxWidth: 600, margin: "0 auto" }}
                >
                    <h3 style={{ textAlign: "center", marginBottom: 12 }}>
                        Entre em{" "}
                        <span className="gradient-text-cyan">contato</span>
                    </h3>
                    <p style={{ textAlign: "center", marginBottom: 32 }}>
                        Estou sempre aberto para discutir novos projetos, ideias
                        criativas ou oportunidades de colaboração na área de dados
                        e revenue operations.
                    </p>

                    <div className="contact-methods">
                        <motion.a
                            href="mailto:pedrohenriquefc06@gmail.com"
                            className="contact-method"
                            whileHover={{ x: 6 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                            <div className="contact-method-icon">
                                <UilEnvelope size={20} color="currentColor" />
                            </div>
                            <div>
                                <div className="contact-method-label">Email</div>
                                <div className="contact-method-text">
                                    pedrohenriquefc06@gmail.com
                                </div>
                            </div>
                        </motion.a>

                        <motion.a
                            href="https://linkedin.com/in/pedrozhd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-method"
                            whileHover={{ x: 6 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                            <div className="contact-method-icon">
                                <UilLinkedinAlt size={20} color="currentColor" />
                            </div>
                            <div>
                                <div className="contact-method-label">LinkedIn</div>
                                <div className="contact-method-text">/in/pedrozhd</div>
                            </div>
                        </motion.a>

                        <motion.a
                            href="https://github.com/pedrozhd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-method"
                            whileHover={{ x: 6 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                            <div className="contact-method-icon">
                                <UilGithub size={20} color="currentColor" />
                            </div>
                            <div>
                                <div className="contact-method-label">GitHub</div>
                                <div className="contact-method-text">@pedrozhd</div>
                            </div>
                        </motion.a>

                        <motion.div
                            className="contact-method"
                            whileHover={{ x: 6 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                            <div className="contact-method-icon">
                                <UilMapPin size={20} color="currentColor" />
                            </div>
                            <div>
                                <div className="contact-method-label">Localização</div>
                                <div className="contact-method-text">São Paulo, SP — Brasil</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

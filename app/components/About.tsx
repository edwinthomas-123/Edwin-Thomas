"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const identityCards = [
    { icon: "🧠", title: "System Thinker", desc: "Designs scalable, interconnected ecosystems with long-term vision" },
    { icon: "⚙️", title: "Automation Builder", desc: "Builds automated systems that operate with minimal human intervention" },
    { icon: "🚀", title: "Entrepreneurial Thinker", desc: "Risk-tolerant innovator with an independent research mindset" },
    { icon: "🌱", title: "Tech + Energy Integrator", desc: "Merges renewable energy and smart tech for future-ready infrastructure" },
];

const infoItems = [
    { icon: "📍", text: "Perumbavoor, Kerala, India" },
    { icon: "🗣️", text: "English (Fluent) · German (B2)" },
    { icon: "🎯", text: "Fachinformatiker für Digitale Vernetzung" },
];

function useReveal() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
}

export default function About() {
    const leftRef = useReveal();
    const rightRef = useReveal();

    return (
        <section className="et-section" id="about">
            <div className="et-container">
                <div className="et-section-label">Who I Am</div>
                <h2 className="et-section-title">
                    Antigravity <span className="et-gradient-text">Mindset</span>
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}
                    className="about-grid-responsive">

                    {/* Left: Bio text */}
                    <div ref={leftRef} className="et-reveal">
                        <p style={{ fontSize: "1.15rem", fontWeight: 500, color: "var(--clr-text)", marginBottom: "16px", lineHeight: "1.6" }}>
                            I am an aspiring IT specialist focused on digital networking, AI automation, and scalable infrastructure systems.
                        </p>
                        <p style={{ color: "var(--clr-text-muted)", marginBottom: "28px", lineHeight: "1.8" }}>
                            With B2-level German proficiency and a strong interest in server architecture, I aim to build intelligent ecosystems
                            that combine networking, AI, renewable energy, and automation into future-ready digital enterprises.
                        </p>
                        <p style={{
                            fontStyle: "italic",
                            color: "var(--clr-text-dim)",
                            borderLeft: "3px solid var(--clr-primary)",
                            paddingLeft: "18px",
                            marginBottom: "32px",
                            lineHeight: "1.7",
                            fontSize: "0.95rem",
                        }}>
                            "Just as gravity keeps systems grounded, innovation breaks limitations. My goal is to design digital systems
                            that operate beyond traditional constraints."
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            {infoItems.map((item) => (
                                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--clr-text-muted)", fontSize: "0.9rem" }}>
                                    <span>{item.icon}</span>
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Identity cards */}
                    <div ref={rightRef} className="et-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                        {identityCards.map((card, i) => (
                            <motion.div
                                key={card.title}
                                whileHover={{ y: -4, boxShadow: "var(--shadow-card)" }}
                                transition={{ duration: 0.25 }}
                                style={{
                                    background: "var(--clr-surface)",
                                    border: "1px solid var(--clr-border)",
                                    borderRadius: "var(--radius-md)",
                                    padding: "22px 20px",
                                    cursor: "default",
                                    transition: "border-color 0.35s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)")}
                                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--clr-border)")}
                            >
                                <div style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{card.icon}</div>
                                <h4 style={{ fontFamily: "var(--font-main)", fontSize: "0.9rem", fontWeight: 600, marginBottom: "6px", color: "var(--clr-text)" }}>
                                    {card.title}
                                </h4>
                                <p style={{ fontSize: "0.8rem", color: "var(--clr-text-muted)", lineHeight: "1.5" }}>
                                    {card.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          .about-grid-responsive { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}

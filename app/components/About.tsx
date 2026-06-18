"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLanguage } from "./LanguageContext";

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
    const { t } = useLanguage();
    const leftRef = useReveal();
    const rightRef = useReveal();

    const identityCards = [
        { icon: "🧠", title: t.about.cards.system.title, desc: t.about.cards.system.desc },
        { icon: "⚙️", title: t.about.cards.automation.title, desc: t.about.cards.automation.desc },
        { icon: "🚀", title: t.about.cards.learner.title, desc: t.about.cards.learner.desc },
        { icon: "🌐", title: t.about.cards.networking.title, desc: t.about.cards.networking.desc },
    ];

    const infoItems = [
        { icon: "📍", text: t.about.info.location },
        { icon: "🎓", text: t.about.info.education },
        { icon: "🗣️", text: t.about.info.languages },
        { icon: "🎯", text: t.about.info.targetRole },
    ];

    return (
        <section className="et-section" id="about">
            <div className="et-container">
                <div className="et-section-label">{t.about.label}</div>
                <h2 className="et-section-title">
                    {t.about.title.split(" ").slice(0, 2).join(" ")}{" "}
                    <span className="et-gradient-text">
                        {t.about.title.split(" ").slice(2).join(" ")}
                    </span>
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}
                    className="about-grid-responsive">

                    {/* Left: Bio text */}
                    <div ref={leftRef} className="et-reveal">
                        <p style={{ fontSize: "1.15rem", fontWeight: 500, color: "var(--clr-text)", marginBottom: "16px", lineHeight: "1.6" }}>
                            {t.about.lead}
                        </p>
                        <p style={{ color: "var(--clr-text-muted)", marginBottom: "16px", lineHeight: "1.8" }}>
                            {t.about.bio1}
                        </p>
                        <p style={{ color: "var(--clr-text-muted)", marginBottom: "28px", lineHeight: "1.8" }}>
                            {t.about.bio2}
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
                            {t.about.quote}
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            {infoItems.map((item, idx) => (
                                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--clr-text-muted)", fontSize: "0.9rem" }}>
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

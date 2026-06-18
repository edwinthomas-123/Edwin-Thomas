"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.65, delay: i * 0.15 },
    }),
};

export default function Goals() {
    const { t } = useLanguage();

    const timelineItems = [
        {
            dot: "primary",
            year: "2024",
            phase: t.goals.phase2024,
            title: t.goals.title2024,
            desc: t.goals.desc2024,
            tags: ["High School", "Self-Study Foundations", "IT Discovery"],
        },
        {
            dot: "secondary",
            year: "2025",
            phase: t.goals.phase2025,
            title: t.goals.title2025,
            desc: t.goals.desc2025,
            tags: ["Linux Command Line", "Docker Basics", "Git & GitHub", "Web Deployments"],
        },
        {
            dot: "primary",
            year: "2026",
            phase: t.goals.phase2026,
            title: t.goals.title2026,
            desc: t.goals.desc2026,
            tags: ["German B2", "React & Next.js", "Process Automation"],
        },
        {
            dot: "accent",
            year: "Future",
            phase: t.goals.phaseFuture,
            title: t.goals.titleFuture,
            desc: t.goals.descFuture,
            tags: ["Ausbildung dual", "Digital Networking", "Datacenters & Infrastructure"],
        },
    ];

    return (
        <section className="et-section et-section-dark" id="goals">
            <div className="et-container">
                <div className="et-section-label">{t.goals.label}</div>
                <h2 className="et-section-title">
                    {t.goals.title.split(" ").slice(0, 1).join(" ")}{" "}
                    <span className="et-gradient-text">
                        {t.goals.title.split(" ").slice(1).join(" ")}
                    </span>
                </h2>

                {/* Timeline */}
                <div style={{ position: "relative", paddingLeft: "28px" }}>
                    {/* Vertical line */}
                    <div style={{
                        position: "absolute",
                        left: "10px",
                        top: "20px",
                        bottom: "20px",
                        width: "2px",
                        background: "linear-gradient(to bottom, var(--clr-primary), var(--clr-accent2), var(--clr-accent))",
                        borderRadius: "2px",
                    }} />

                    {timelineItems.map((item, i) => (
                        <div key={item.year} style={{ position: "relative", paddingBottom: i < timelineItems.length - 1 ? "40px" : 0, paddingLeft: "36px" }}>
                            {/* Dot with year tag */}
                            <div style={{
                                position: "absolute",
                                left: "-18px",
                                top: "6px",
                                width: "18px",
                                height: "18px",
                                borderRadius: "50%",
                                border: "3px solid var(--clr-bg-2)",
                                background: item.dot === "primary" ? "var(--clr-primary)" : item.dot === "secondary" ? "var(--clr-accent2)" : "var(--clr-accent)",
                                boxShadow: item.dot === "primary"
                                    ? "0 0 20px rgba(99,102,241,0.5)"
                                    : item.dot === "secondary"
                                    ? "0 0 20px rgba(168,85,247,0.5)"
                                    : "0 0 20px rgba(6,182,212,0.5)",
                            }} />

                            {/* Year Indicator */}
                            <div style={{
                                position: "absolute",
                                left: "-70px",
                                top: "4px",
                                fontSize: "0.85rem",
                                fontWeight: 700,
                                color: "var(--clr-text-muted)",
                                width: "45px",
                                textAlign: "right",
                            }} className="timeline-year-responsive">
                                {item.year}
                            </div>

                            {/* Content card */}
                            <motion.div
                                custom={i}
                                variants={contentVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-60px" }}
                                style={{
                                    background: "var(--clr-surface)",
                                    border: "1px solid var(--clr-border)",
                                    borderRadius: "var(--radius-lg)",
                                    padding: "24px 28px",
                                    transition: "border-color 0.35s, background 0.35s",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
                                    e.currentTarget.style.background = "var(--clr-surface-hover)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = "var(--clr-border)";
                                    e.currentTarget.style.background = "var(--clr-surface)";
                                }}
                            >
                                <div style={{
                                    fontSize: "0.72rem",
                                    fontWeight: 600,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                    color: "var(--clr-primary-light)",
                                    marginBottom: "6px",
                                }}>
                                    {item.phase}
                                </div>
                                <h3 style={{
                                    fontFamily: "var(--font-main)",
                                    fontSize: "1.2rem",
                                    fontWeight: 700,
                                    marginBottom: "8px",
                                    color: "var(--clr-text)",
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{ color: "var(--clr-text-muted)", fontSize: "0.88rem", lineHeight: "1.65", marginBottom: "14px" }}>
                                    {item.desc}
                                </p>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                                    {item.tags.map((tag) => (
                                        <span key={tag} style={{
                                            padding: "3px 10px",
                                            background: "rgba(99,102,241,0.06)",
                                            border: "1px solid rgba(99,102,241,0.15)",
                                            borderRadius: "100px",
                                            fontSize: "0.72rem",
                                            color: "var(--clr-primary-light)",
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 600px) {
          .timeline-year-responsive {
            position: relative !important;
            left: 0 !important;
            top: 0 !important;
            text-align: left !important;
            margin-bottom: 8px !important;
            display: inline-block;
          }
        }
      `}</style>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";

const timelineItems = [
    {
        dot: "primary",
        phase: "Primary Goal",
        title: "Ausbildung in Germany",
        desc: (
            <>
                Pursuing <strong>Fachinformatiker für Digitale Vernetzung</strong> — a specialized
                dual-education program in IT Networking and Digital Infrastructure in Germany.
                B2-level German proficiency in preparation for the Goethe examination.
            </>
        ),
        tags: ["🇩🇪 Germany", "IT Networking", "German B2"],
    },
    {
        dot: "secondary",
        phase: "Long-Term Vision",
        title: "AI Infrastructure Architect",
        desc: (
            <>
                Becoming an <strong>AI Infrastructure Architect</strong> capable of designing autonomous
                digital business ecosystems — combining networking, AI, automation, and renewable energy
                into self-sustaining digital empires.
            </>
        ),
        tags: ["🤖 AI Systems", "Infrastructure", "Autonomy"],
    },
];

const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.65, delay: i * 0.15 },
    }),
};

export default function Goals() {
    return (
        <section className="et-section et-section-dark" id="goals">
            <div className="et-container">
                <div className="et-section-label">Where I&apos;m Headed</div>
                <h2 className="et-section-title">
                    Career <span className="et-gradient-text">Goals</span>
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
                        background: "linear-gradient(to bottom, var(--clr-primary), var(--clr-accent2))",
                        borderRadius: "2px",
                    }} />

                    {timelineItems.map((item, i) => (
                        <div key={item.title} style={{ position: "relative", paddingBottom: i < timelineItems.length - 1 ? "56px" : 0, paddingLeft: "36px" }}>
                            {/* Dot */}
                            <div style={{
                                position: "absolute",
                                left: "-18px",
                                top: "4px",
                                width: "18px",
                                height: "18px",
                                borderRadius: "50%",
                                border: "3px solid var(--clr-bg-2)",
                                background: item.dot === "primary" ? "var(--clr-primary)" : "var(--clr-accent2)",
                                boxShadow: item.dot === "primary"
                                    ? "0 0 20px rgba(99,102,241,0.5)"
                                    : "0 0 20px rgba(168,85,247,0.5)",
                            }} />

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
                                    padding: "32px",
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
                                    marginBottom: "8px",
                                }}>
                                    {item.phase}
                                </div>
                                <h3 style={{
                                    fontFamily: "var(--font-main)",
                                    fontSize: "1.4rem",
                                    fontWeight: 700,
                                    marginBottom: "12px",
                                    color: "var(--clr-text)",
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{ color: "var(--clr-text-muted)", lineHeight: "1.7", marginBottom: "20px" }}>
                                    {item.desc}
                                </p>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                    {item.tags.map((tag) => (
                                        <span key={tag} style={{
                                            padding: "4px 12px",
                                            background: "rgba(99,102,241,0.08)",
                                            border: "1px solid rgba(99,102,241,0.2)",
                                            borderRadius: "100px",
                                            fontSize: "0.78rem",
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
        </section>
    );
}

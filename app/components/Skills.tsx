"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
    }),
};

export default function Skills() {
    const { t } = useLanguage();

    const skillCategories = [
        {
            icon: "🖥️",
            title: t.skills.infraTitle,
            tags: ["Linux", "Docker", "Server Hosting", "Git", "GitHub", "Website Deployment"],
        },
        {
            icon: "🌐",
            title: t.skills.webTitle,
            tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        },
        {
            icon: "⚙️",
            title: t.skills.aiTitle,
            tags: ["AI Workflow Design", "Content Automation", "Process Optimization", "AI Tool Integration"],
        },
        {
            icon: "🧠",
            title: t.skills.learningTitle,
            tags: ["Home Lab Infrastructure", "Network Administration", "Server Management", "VPN Technologies", "Digital Networking"],
        },
    ];

    return (
        <section className="et-section et-section-dark" id="skills">
            <div className="et-container">
                <div className="et-section-label">{t.skills.label}</div>
                <h2 className="et-section-title">
                    {t.skills.title.split(" ").slice(0, 1).join(" ")}{" "}
                    <span className="et-gradient-text">
                        {t.skills.title.split(" ").slice(1).join(" ")}
                    </span>
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}
                    className="skills-grid-responsive">
                    {skillCategories.map((cat, i) => (
                        <motion.div
                            key={cat.title}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            style={{
                                background: "var(--clr-surface)",
                                border: "1px solid var(--clr-border)",
                                borderRadius: "var(--radius-lg)",
                                padding: "28px",
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
                            {/* Header */}
                            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                                <div style={{
                                    width: "42px", height: "42px",
                                    display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center",
                                    fontSize: "1.2rem",
                                    background: "rgba(99,102,241,0.1)",
                                    borderRadius: "var(--radius-sm)",
                                    flexShrink: 0,
                                }}>
                                    {cat.icon}
                                </div>
                                <h3 style={{ fontFamily: "var(--font-main)", fontSize: "1.05rem", fontWeight: 600, color: "var(--clr-text)" }}>
                                    {cat.title}
                                </h3>
                            </div>

                            {/* Tags */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                {cat.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        style={{
                                            padding: "5px 12px",
                                            background: "rgba(99,102,241,0.08)",
                                            border: "1px solid rgba(99,102,241,0.2)",
                                            borderRadius: "100px",
                                            fontSize: "0.78rem",
                                            color: "var(--clr-primary-light)",
                                            fontWeight: 500,
                                            cursor: "default",
                                            transition: "background 0.3s, border-color 0.3s",
                                        }}
                                        onMouseEnter={(e) => {
                                            (e.target as HTMLElement).style.background = "rgba(99,102,241,0.18)";
                                            (e.target as HTMLElement).style.borderColor = "rgba(99,102,241,0.4)";
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.target as HTMLElement).style.background = "rgba(99,102,241,0.08)";
                                            (e.target as HTMLElement).style.borderColor = "rgba(99,102,241,0.2)";
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .skills-grid-responsive { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}

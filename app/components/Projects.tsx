"use client";

import { motion } from "framer-motion";

const projects = [
    {
        number: "01",
        icon: "🏭",
        title: "AI Content Factory",
        desc: "A fully automated multi-niche content creation system with retention-optimized AI episodic generation and autonomous publishing workflows across multiple channels.",
        tags: ["AI Generation", "Automation", "Multi-Channel", "Content System"],
        status: "In Development",
        statusClass: "in-dev",
    },
    {
        number: "02",
        icon: "🏠",
        title: "Home Server Ecosystem",
        desc: "A personal cloud system integrating AI automation, content generation engines, and a scalable infrastructure roadmap for 24/7 autonomous operation.",
        tags: ["Personal Cloud", "AI Integration", "Infrastructure", "Self-Hosted"],
        status: "In Development",
        statusClass: "in-dev",
    },
    {
        number: "03",
        icon: "☀️",
        title: "Off-Grid Solar Smart Home",
        desc: "A two-floor solar-powered smart home system with lithium battery optimization, energy-efficient appliance planning, and intelligent power distribution management.",
        tags: ["Solar Energy", "Smart Home", "IoT", "Renewable Tech"],
        status: "Future Plan",
        statusClass: "planned",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, delay: i * 0.13, ease: [0.25, 0.46, 0.45, 0.94] as const },
    }),
};

export default function Projects() {
    return (
        <section className="et-section" id="projects">
            <div className="et-container">
                <div className="et-section-label">What I&apos;m Building</div>
                <h2 className="et-section-title">
                    Major <span className="et-gradient-text">Projects</span>
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}
                    className="projects-grid-responsive">
                    {projects.map((proj, i) => (
                        <motion.div
                            key={proj.number}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            style={{
                                position: "relative",
                                background: "var(--clr-surface)",
                                border: "1px solid var(--clr-border)",
                                borderRadius: "var(--radius-xl)",
                                padding: "36px 28px 28px",
                                overflow: "hidden",
                                cursor: "default",
                                transition: "border-color 0.35s, transform 0.35s, box-shadow 0.35s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
                                e.currentTarget.style.transform = "translateY(-6px)";
                                e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4)";
                                const glow = e.currentTarget.querySelector(".proj-glow") as HTMLElement;
                                if (glow) glow.style.opacity = "0.12";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "var(--clr-border)";
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "none";
                                const glow = e.currentTarget.querySelector(".proj-glow") as HTMLElement;
                                if (glow) glow.style.opacity = "0";
                            }}
                        >
                            {/* Glow blob */}
                            <div className="proj-glow" style={{
                                position: "absolute",
                                top: "-40px", right: "-40px",
                                width: "160px", height: "160px",
                                background: "var(--grad-main)",
                                borderRadius: "50%",
                                filter: "blur(60px)",
                                opacity: 0,
                                transition: "opacity 0.35s",
                                pointerEvents: "none",
                            }} />

                            {/* Ghost number */}
                            <div style={{
                                position: "absolute",
                                top: "20px", right: "24px",
                                fontSize: "3rem",
                                fontWeight: 900,
                                fontFamily: "var(--font-main)",
                                color: "rgba(255,255,255,0.03)",
                                lineHeight: 1,
                                userSelect: "none",
                            }}>
                                {proj.number}
                            </div>

                            <div style={{ position: "relative", zIndex: 1 }}>
                                <div style={{ fontSize: "2.2rem", marginBottom: "16px" }}>{proj.icon}</div>

                                <h3 style={{
                                    fontFamily: "var(--font-main)",
                                    fontSize: "1.2rem",
                                    fontWeight: 700,
                                    marginBottom: "12px",
                                    lineHeight: "1.3",
                                    color: "var(--clr-text)",
                                }}>
                                    {proj.title}
                                </h3>

                                <p style={{ fontSize: "0.88rem", color: "var(--clr-text-muted)", lineHeight: "1.65", marginBottom: "20px" }}>
                                    {proj.desc}
                                </p>

                                {/* Tags */}
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                                    {proj.tags.map((tag) => (
                                        <span key={tag} style={{
                                            padding: "3px 10px",
                                            background: "rgba(255,255,255,0.05)",
                                            borderRadius: "100px",
                                            fontSize: "0.72rem",
                                            color: "var(--clr-text-dim)",
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Status badge */}
                                <span style={{
                                    display: "inline-block",
                                    padding: "4px 12px",
                                    borderRadius: "100px",
                                    fontSize: "0.72rem",
                                    fontWeight: 600,
                                    ...(proj.statusClass === "in-dev"
                                        ? { background: "rgba(99,102,241,0.15)", color: "var(--clr-primary-light)", border: "1px solid rgba(99,102,241,0.25)" }
                                        : { background: "rgba(168,85,247,0.1)", color: "#c084fc", border: "1px solid rgba(168,85,247,0.25)" }),
                                }}>
                                    {proj.status}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          .projects-grid-responsive { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}

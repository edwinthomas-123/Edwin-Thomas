"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";

const cardVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, delay: i * 0.13, ease: [0.25, 0.46, 0.45, 0.94] as const },
    }),
};

export default function Projects() {
    const { t, language } = useLanguage();
    const [activeAlert, setActiveAlert] = useState<{ text: string; href: string } | null>(null);

    const projectsList = [
        {
            number: "01",
            icon: "🍽️",
            title: t.projects.proj1.title,
            desc: t.projects.proj1.desc,
            tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
            status: t.projects.statusCompleted,
            statusClass: "completed",
            features: ["Mobile Responsive UI", "Business presentation layout", "Contact Form integration", "Fast load optimizations"],
            links: [
                { label: t.projects.liveDemo, href: "https://bake-and-bite.vercel.app/", alert: "" },
            ],
        },
        {
            number: "02",
            icon: "💼",
            title: t.projects.proj2.title,
            desc: t.projects.proj2.desc,
            tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Localization"],
            status: t.projects.statusCompleted,
            statusClass: "completed",
            features: ["Dynamic i18n Switching", "Scroll Canvas integration", "Tailwind responsive styling", "Docker ready"],
            links: [
                { label: "GitHub", href: "https://github.com", alert: "" },
                { label: t.projects.liveDemo, href: "#", alert: "" },
            ],
        },
        {
            number: "03",
            icon: "⚙️",
            title: t.projects.proj3.title,
            desc: t.projects.proj3.desc,
            tags: ["AI Integration", "Workflow Automation", "API Integration"],
            status: t.projects.statusInDev,
            statusClass: "in-dev",
            features: [t.projects.proj3.workflow, "API error handling", "Scheduled tasks execution", "Workflow logging dashboard"],
            links: [
                { label: "GitHub", href: "https://github.com", alert: "" },
                { 
                    label: t.projects.liveDemo, 
                    href: "https://autovid-mu.vercel.app/",
                    alert: language === "de"
                        ? "App in Arbeit: Da derzeit nur das Frontend online gehostet wird, sind die Backend-Automatisierungsfunktionen inaktiv. Möchten Sie trotzdem zur Live-Demo fortfahren?"
                        : "App in progress: Since only the frontend is hosted, the backend automation features will not work. Do you want to proceed to the live demo?"
                },
            ],
        },
        {
            number: "04",
            icon: "🏠",
            title: t.projects.proj4.title,
            desc: t.projects.proj4.desc,
            tags: ["Docker", "Linux (Debian)", "Self-Hosted", "Backups"],
            status: t.projects.statusPlanned,
            statusClass: "planned",
            features: ["Containerized apps orchestration", "Nginx Reverse Proxy & SSL Setup", "Automated cron backups", "Local model hosting ready"],
            links: [],
        },
    ];

    return (
        <section className="et-section" id="projects">
            <div className="et-container">
                <div className="et-section-label">{t.projects.label}</div>
                <h2 className="et-section-title">
                    {t.projects.title.split(" ").slice(0, 1).join(" ")}{" "}
                    <span className="et-gradient-text">
                        {t.projects.title.split(" ").slice(1).join(" ")}
                    </span>
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}
                    className="projects-grid-responsive">
                    {projectsList.map((proj, i) => (
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
                                padding: "32px 24px",
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column",
                                transition: "border-color 0.35s, transform 0.35s, box-shadow 0.35s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.4)";
                                e.currentTarget.style.transform = "translateY(-4px)";
                                e.currentTarget.style.boxShadow = "var(--shadow-glow)";
                                const glow = e.currentTarget.querySelector(".proj-glow") as HTMLElement;
                                if (glow) glow.style.opacity = "0.08";
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

                            <div style={{ position: "relative", zIndex: 1, flexGrow: 1 }}>
                                <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{proj.icon}</div>

                                <h3 style={{
                                    fontFamily: "var(--font-main)",
                                    fontSize: "1.25rem",
                                    fontWeight: 700,
                                    marginBottom: "8px",
                                    lineHeight: "1.3",
                                    color: "var(--clr-text)",
                                }}>
                                    {proj.title}
                                </h3>

                                <p style={{ fontSize: "0.85rem", color: "var(--clr-text-muted)", lineHeight: "1.6", marginBottom: "16px" }}>
                                    {proj.desc}
                                </p>

                                {/* Features List */}
                                <div style={{ marginBottom: "16px" }}>
                                    <h5 style={{ fontSize: "0.78rem", textTransform: "uppercase", color: "var(--clr-text-dim)", letterSpacing: "0.05em", marginBottom: "6px" }}>
                                        {t.projects.features}
                                    </h5>
                                    <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                                        {proj.features.map((feat, idx) => (
                                            <li key={idx} style={{ fontSize: "0.78rem", color: "var(--clr-text-muted)", paddingLeft: "12px", position: "relative", marginBottom: "3px" }}>
                                                <span style={{ position: "absolute", left: 0, color: "var(--clr-primary-light)" }}>•</span>
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tags */}
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                                    {proj.tags.map((tag) => (
                                        <span key={tag} style={{
                                            padding: "3px 8px",
                                            background: "rgba(255,255,255,0.04)",
                                            borderRadius: "100px",
                                            fontSize: "0.7rem",
                                            color: "var(--clr-text-dim)",
                                            border: "1px solid var(--clr-border)",
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div style={{ position: "relative", zIndex: 1, marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                                {/* Status Badge */}
                                <span style={{
                                    padding: "4px 10px",
                                    borderRadius: "100px",
                                    fontSize: "0.7rem",
                                    fontWeight: 600,
                                    textTransform: "uppercase",
                                    ...(proj.statusClass === "completed"
                                        ? { background: "rgba(34,197,94,0.1)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.2)" }
                                        : proj.statusClass === "in-dev"
                                        ? { background: "rgba(234,179,8,0.1)", color: "#facc15", border: "1px solid rgba(234,179,8,0.2)" }
                                        : { background: "rgba(99,102,241,0.1)", color: "var(--clr-primary-light)", border: "1px solid rgba(99,102,241,0.2)" }
                                    ),
                                }}>
                                    {proj.status}
                                </span>

                                {/* Project Links */}
                                <div style={{ display: "flex", gap: "10px" }}>
                                    {proj.links.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => {
                                                if (link.alert) {
                                                    e.preventDefault();
                                                    setActiveAlert({ text: link.alert, href: link.href });
                                                }
                                            }}
                                            style={{
                                                fontSize: "0.78rem",
                                                color: "var(--clr-text)",
                                                textDecoration: "none",
                                                padding: "6px 12px",
                                                border: "1px solid var(--clr-border)",
                                                borderRadius: "6px",
                                                transition: "all 0.25s",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.borderColor = "var(--clr-primary)";
                                                e.currentTarget.style.background = "rgba(99,102,241,0.05)";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.borderColor = "var(--clr-border)";
                                                e.currentTarget.style.background = "transparent";
                                            }}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {activeAlert && (
                    <div style={{
                        position: "fixed",
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: "rgba(5, 8, 22, 0.8)",
                        backdropFilter: "blur(8px)",
                        zIndex: 9999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                    }}>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            style={{
                                background: "rgba(15, 23, 42, 0.9)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                borderRadius: "16px",
                                padding: "28px",
                                maxWidth: "440px",
                                width: "100%",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
                                color: "var(--clr-text)",
                                textAlign: "center",
                            }}
                        >
                            <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>⚠️</div>
                            <h4 style={{ 
                                fontFamily: "var(--font-main)", 
                                fontSize: "1.2rem", 
                                fontWeight: 700, 
                                marginBottom: "12px" 
                            }}>
                                {language === "de" ? "Projekt-Hinweis" : "Project Notice"}
                            </h4>
                            <p style={{ 
                                fontSize: "0.85rem", 
                                color: "var(--clr-text-muted)", 
                                lineHeight: "1.6", 
                                marginBottom: "24px" 
                            }}>
                                {activeAlert.text}
                            </p>
                            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                                <button 
                                    onClick={() => setActiveAlert(null)}
                                    style={{
                                        padding: "8px 16px",
                                        borderRadius: "6px",
                                        border: "1px solid var(--clr-border)",
                                        background: "transparent",
                                        color: "var(--clr-text)",
                                        cursor: "pointer",
                                        fontSize: "0.82rem",
                                        transition: "all 0.2s",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "transparent";
                                    }}
                                >
                                    {language === "de" ? "Abbrechen" : "Cancel"}
                                </button>
                                <a 
                                    href={activeAlert.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setActiveAlert(null)}
                                    style={{
                                        padding: "8px 16px",
                                        borderRadius: "6px",
                                        border: "none",
                                        background: "var(--grad-main)",
                                        color: "#fff",
                                        cursor: "pointer",
                                        textDecoration: "none",
                                        fontSize: "0.82rem",
                                        fontWeight: 600,
                                        transition: "all 0.2s",
                                        boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
                                        display: "inline-block",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-1px)";
                                        e.currentTarget.style.boxShadow = "0 6px 16px rgba(99, 102, 241, 0.4)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "none";
                                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(99, 102, 241, 0.3)";
                                    }}
                                >
                                    {language === "de" ? "Website betreten" : "Enter Website"}
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 900px) {
          .projects-grid-responsive { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}

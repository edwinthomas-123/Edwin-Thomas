"use client";

import { motion } from "framer-motion";

const contactLinks = [
    { icon: "✉️", label: "Email Me", href: "mailto:your@email.com" },
    { icon: "💼", label: "LinkedIn", href: "https://linkedin.com" },
    { icon: "🐙", label: "GitHub", href: "https://github.com" },
];

export default function Contact() {
    return (
        <section className="et-section" id="contact" style={{ position: "relative", overflow: "hidden" }}>
            {/* Corner ambient glow */}
            <div style={{
                position: "absolute",
                top: "-60px", right: "-60px",
                width: "300px", height: "300px",
                background: "var(--grad-main)",
                borderRadius: "50%",
                filter: "blur(100px)",
                opacity: 0.06,
                pointerEvents: "none",
            }} />

            <div className="et-container">
                <div className="et-section-label">Let&apos;s Connect</div>
                <h2 className="et-section-title">
                    Get In <span className="et-gradient-text">Touch</span>
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}
                    className="contact-grid-responsive">

                    {/* Left: Text + links */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65 }}
                        viewport={{ once: true }}
                    >
                        <p style={{ fontSize: "1.05rem", color: "var(--clr-text-muted)", lineHeight: "1.7", marginBottom: "36px" }}>
                            I&apos;m open to Ausbildung opportunities in Germany, collaboration on AI/automation projects,
                            and connecting with like-minded builders and innovators.
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                            {contactLinks.map((link) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 4 }}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "14px",
                                        padding: "16px 20px",
                                        background: "var(--clr-surface)",
                                        border: "1px solid var(--clr-border)",
                                        borderRadius: "var(--radius-md)",
                                        textDecoration: "none",
                                        color: "var(--clr-text)",
                                        fontWeight: 500,
                                        fontSize: "0.95rem",
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
                                    <span style={{ fontSize: "1.1rem" }}>{link.icon}</span>
                                    <span>{link.label}</span>
                                    <span style={{ marginLeft: "auto", color: "var(--clr-text-dim)", transition: "color 0.3s" }}>→</span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: CTA card */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.15 }}
                        viewport={{ once: true }}
                        style={{
                            background: "var(--grad-card)",
                            border: "1px solid rgba(99,102,241,0.2)",
                            borderRadius: "var(--radius-xl)",
                            overflow: "hidden",
                            position: "relative",
                        }}
                    >
                        {/* Inner beam glow */}
                        <div style={{
                            position: "absolute",
                            top: "-60px", right: "-60px",
                            width: "200px", height: "200px",
                            background: "var(--grad-main)",
                            borderRadius: "50%",
                            filter: "blur(80px)",
                            opacity: 0.15,
                            pointerEvents: "none",
                        }} />

                        <div style={{ position: "relative", padding: "48px 40px", textAlign: "center" }}>
                            <div style={{ fontSize: "3rem", marginBottom: "20px" }}>🚀</div>
                            <h3 style={{
                                fontFamily: "var(--font-main)",
                                fontSize: "1.3rem",
                                fontWeight: 700,
                                marginBottom: "14px",
                                color: "var(--clr-text)",
                            }}>
                                Ready to Build the Future?
                            </h3>
                            <p style={{ color: "var(--clr-text-muted)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "28px" }}>
                                Whether it&apos;s AI systems, networking infrastructure, or digital ecosystems — let&apos;s create something extraordinary together.
                            </p>
                            <a href="mailto:your@email.com" className="et-btn-primary">
                                Say Hello
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <div style={{ marginTop: "80px", borderTop: "1px solid var(--clr-border)", padding: "40px 0", textAlign: "center" }}>
                <div className="et-container">
                    <div style={{ fontFamily: "var(--font-main)", fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>
                        ET<span style={{ color: "var(--clr-primary)" }}>.</span>
                    </div>
                    <p style={{ color: "var(--clr-text-dim)", fontSize: "0.85rem" }}>Designed &amp; Built by Edwin Thomas · 2026</p>
                    <p style={{ color: "var(--clr-text-dim)", fontSize: "0.78rem", fontStyle: "italic", marginTop: "4px" }}>
                        Breaking gravity, one system at a time.
                    </p>
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          .contact-grid-responsive { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}

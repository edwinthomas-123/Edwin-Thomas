"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

export default function Contact() {
    const { t } = useLanguage();
    const [reason, setReason] = useState("");
    const [status, setStatus] = useState<"idle" | "success">("idle");

    const contactLinks = [
        { 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
            ), 
            label: "Email", 
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=edwinmoothedan2006@gmail.com" 
        },
        { 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                </svg>
            ), 
            label: "LinkedIn", 
            href: "https://www.linkedin.com/in/edwin-thomas-0269b13aa/" 
        },
        { 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
            ), 
            label: "WhatsApp", 
            href: "https://wa.me/918590399020" 
        },
        { 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
            ), 
            label: "GitHub", 
            href: "https://github.com/edwinthomas-123" 
        },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!reason) return;

        const subject = encodeURIComponent("Portfolio Feedback / Rejection");
        const body = encodeURIComponent(`Hello Edwin,\n\nFeedback / Reason for rejection:\n${reason}`);
        const mailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=edwinmoothedan2006@gmail.com&su=${subject}&body=${body}`;

        window.open(mailUrl, "_blank");

        setStatus("success");
        setReason("");
        
        setTimeout(() => setStatus("idle"), 5000);
    };

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
                <div className="et-section-label">{t.contact.label}</div>
                <h2 className="et-section-title">
                    {t.contact.title.split(" ").slice(0, 2).join(" ")}{" "}
                    <span className="et-gradient-text">
                        {t.contact.title.split(" ").slice(2).join(" ")}
                    </span>
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "60px", alignItems: "start" }}
                    className="contact-grid-responsive">

                    {/* Left Column: Direct Links & Download CV */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65 }}
                        viewport={{ once: true }}
                    >
                        <p style={{ fontSize: "1.05rem", color: "var(--clr-text-muted)", lineHeight: "1.7", marginBottom: "28px" }}>
                            {t.contact.lead}
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "28px" }}>
                            {contactLinks.map((link) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 4 }}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "14px",
                                        padding: "14px 20px",
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
                                    <span style={{ display: "flex", alignItems: "center", color: "var(--clr-primary-light)" }}>{link.icon}</span>
                                    <span>{link.label}</span>
                                    <span style={{ marginLeft: "auto", color: "var(--clr-text-dim)" }}>→</span>
                                </motion.a>
                            ))}
                        </div>

                        {/* Download CV CTA Card */}
                        <div style={{
                            background: "var(--clr-surface)",
                            border: "1px solid var(--clr-border)",
                            borderRadius: "var(--radius-lg)",
                            padding: "24px",
                        }}>
                            <h4 style={{ fontFamily: "var(--font-main)", fontSize: "1rem", fontWeight: 600, color: "var(--clr-text)", marginBottom: "8px" }}>
                                {t.contact.connectCTA}
                            </h4>
                            <p style={{ fontSize: "0.85rem", color: "var(--clr-text-muted)", lineHeight: "1.5", marginBottom: "16px" }}>
                                {t.contact.connectDesc}
                            </p>
                            <a
                                href="/Edwin_Thomas_CV.pdf"
                                download
                                className="et-btn-primary"
                                style={{ width: "100%", textDecoration: "none", justifyContent: "center" }}
                            >
                                📥 {t.contact.cvButton}
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Simplified Rejection/Feedback Form Only */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.15 }}
                        viewport={{ once: true }}
                        style={{
                            background: "var(--grad-card)",
                            border: "1px solid rgba(6, 182, 212, 0.2)",
                            borderRadius: "var(--radius-xl)",
                            padding: "32px",
                        }}
                    >
                        <h3 style={{
                            fontFamily: "var(--font-main)",
                            fontSize: "1.2rem",
                            fontWeight: 700,
                            marginBottom: "10px",
                            color: "var(--clr-text)",
                        }}>
                            {t.contact.tabFeedback}
                        </h3>

                        <div style={{
                            background: "rgba(6, 182, 212, 0.06)",
                            border: "1px solid rgba(6, 182, 212, 0.15)",
                            borderRadius: "var(--radius-sm)",
                            padding: "14px",
                            fontSize: "0.82rem",
                            color: "var(--clr-accent)",
                            lineHeight: "1.5",
                            marginBottom: "20px",
                        }}>
                            💡 {t.contact.feedbackPrompt}
                        </div>

                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                            <div>
                                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 500, color: "var(--clr-text-muted)", marginBottom: "6px" }}>
                                    {t.contact.formReason} *
                                </label>
                                <textarea
                                    required
                                    rows={6}
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                    placeholder={t.nav.goals === "Werdegang" ? "z.B. Wir benötigen ein C1-Deutschniveau / Andere Technologien..." : "e.g. We require C1 German level / different tech stack..."}
                                    style={{
                                        width: "100%",
                                        padding: "12px 16px",
                                        background: "rgba(5, 8, 16, 0.6)",
                                        border: "1px solid var(--clr-border)",
                                        borderRadius: "var(--radius-sm)",
                                        color: "#fff",
                                        fontSize: "0.9rem",
                                        outline: "none",
                                        resize: "vertical",
                                        transition: "border-color 0.3s",
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = "var(--clr-accent)"}
                                    onBlur={(e) => e.target.style.borderColor = "var(--clr-border)"}
                                />
                            </div>

                            <button
                                type="submit"
                                className="et-btn-primary cursor-pointer border-none"
                                style={{
                                    justifyContent: "center",
                                    background: "var(--clr-accent)",
                                    boxShadow: "0 4px 24px rgba(6, 182, 212, 0.25)",
                                }}
                            >
                                {t.contact.formSubmitFeedback}
                            </button>

                            {status === "success" && (
                                <p style={{ fontSize: "0.85rem", color: "var(--clr-accent)", marginTop: "8px", fontWeight: 500 }}>
                                    {t.contact.formFeedbackSuccess}
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <div style={{ marginTop: "100px", borderTop: "1px solid var(--clr-border)", padding: "48px 0", textAlign: "center" }}>
                <div className="et-container">
                    <div style={{ fontFamily: "var(--font-main)", fontSize: "1.25rem", fontWeight: 700, marginBottom: "8px", color: "var(--clr-text)" }}>
                        ET<span style={{ color: "var(--clr-primary)" }}>.</span>
                    </div>
                    <p style={{ color: "var(--clr-text-muted)", fontSize: "0.85rem", marginBottom: "4px" }}>
                        {t.footer.tagline}
                    </p>
                    <p style={{ color: "var(--clr-text-dim)", fontSize: "0.8rem" }}>
                        {t.footer.copyright}
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

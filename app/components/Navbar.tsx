"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const navLinks = [
        { label: t.nav.about, href: "about" },
        { label: t.nav.skills, href: "skills" },
        { label: t.nav.projects, href: "projects" },
        { label: t.nav.goals, href: "goals" },
        { label: t.nav.whyGermany, href: "why-germany" },
        { label: t.nav.contact, href: "contact", cta: true },
    ];

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", fn, { passive: true });
        return () => window.removeEventListener("scroll", fn);
    }, []);

    const scrollTo = (id: string) => {
        setMobileOpen(false);
        document.body.style.overflow = "";
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const toggleMobile = () => {
        const next = !mobileOpen;
        setMobileOpen(next);
        document.body.style.overflow = next ? "hidden" : "";
    };

    return (
        <>
            {/* Ambient fixed background */}
            <div className="et-bg-canvas" />

            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    position: "fixed",
                    top: 0, left: 0, right: 0,
                    zIndex: 100,
                    padding: scrolled ? "12px 0" : "18px 0",
                    background: scrolled ? "rgba(5, 8, 16, 0.75)" : "transparent",
                    backdropFilter: scrolled ? "blur(16px)" : "none",
                    WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
                    borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid transparent",
                    transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                    pointerEvents: "auto",
                }}
            >
                <div className="et-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    {/* Logo */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        style={{
                            fontFamily: "var(--font-main)",
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            color: "var(--clr-text)",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        ET<span style={{ color: "var(--clr-primary)" }}>.</span>
                    </button>

                    {/* Desktop Menu & Lang Switcher */}
                    <div style={{ display: "flex", gap: "28px", alignItems: "center" }} className="hide-mobile">
                        <ul style={{ display: "flex", listStyle: "none", gap: "28px", alignItems: "center" }}>
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <button
                                        onClick={() => scrollTo(link.href)}
                                        style={{
                                            background: "none",
                                            border: "none",
                                            cursor: "pointer",
                                            color: link.cta ? "transparent" : "var(--clr-text-muted)",
                                            fontSize: "0.9rem",
                                            fontWeight: link.cta ? 600 : 500,
                                            transition: "color 0.3s",
                                            backgroundImage: link.cta ? "var(--grad-main)" : undefined,
                                            WebkitBackgroundClip: link.cta ? "text" : undefined,
                                            WebkitTextFillColor: link.cta ? "transparent" : undefined,
                                            backgroundClip: link.cta ? "text" : undefined,
                                        }}
                                        onMouseEnter={(e) => { if (!link.cta) (e.target as HTMLElement).style.color = "var(--clr-text)"; }}
                                        onMouseLeave={(e) => { if (!link.cta) (e.target as HTMLElement).style.color = "var(--clr-text-muted)"; }}
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* Lang Selector */}
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--clr-text-muted)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
                                <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/>
                            </svg>
                            <div style={{ display: "flex", gap: "4px", background: "rgba(255,255,255,0.04)", padding: "3px", borderRadius: "8px", border: "1px solid var(--clr-border)" }}>
                                <button
                                    onClick={() => setLanguage("en")}
                                    style={{
                                        border: "none",
                                        background: language === "en" ? "var(--clr-primary)" : "transparent",
                                        color: language === "en" ? "#fff" : "var(--clr-text-muted)",
                                        fontSize: "0.75rem",
                                        fontWeight: 600,
                                        padding: "4px 8px",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                        transition: "all 0.2s",
                                    }}
                                >
                                    EN
                                </button>
                                <button
                                    onClick={() => setLanguage("de")}
                                    style={{
                                        border: "none",
                                        background: language === "de" ? "var(--clr-primary)" : "transparent",
                                        color: language === "de" ? "#fff" : "var(--clr-text-muted)",
                                        fontSize: "0.75rem",
                                        fontWeight: 600,
                                        padding: "4px 8px",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                        transition: "all 0.2s",
                                    }}
                                >
                                    DE
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile control row */}
                    <div style={{ display: "none", gap: "12px", alignItems: "center" }} className="show-mobile">
                        {/* Lang Selector for Mobile */}
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--clr-text-muted)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
                                <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/>
                            </svg>
                            <div style={{ display: "flex", gap: "3px", background: "rgba(255,255,255,0.04)", padding: "2px", borderRadius: "6px", border: "1px solid var(--clr-border)" }}>
                                <button
                                    onClick={() => setLanguage("en")}
                                    style={{
                                        border: "none",
                                        background: language === "en" ? "var(--clr-primary)" : "transparent",
                                        color: language === "en" ? "#fff" : "var(--clr-text-muted)",
                                        fontSize: "0.7rem",
                                        fontWeight: 600,
                                        padding: "3px 6px",
                                        borderRadius: "4px",
                                        cursor: "pointer",
                                    }}
                                >
                                    EN
                                </button>
                                <button
                                    onClick={() => setLanguage("de")}
                                    style={{
                                        border: "none",
                                        background: language === "de" ? "var(--clr-primary)" : "transparent",
                                        color: language === "de" ? "#fff" : "var(--clr-text-muted)",
                                        fontSize: "0.7rem",
                                        fontWeight: 600,
                                        padding: "3px 6px",
                                        borderRadius: "4px",
                                        cursor: "pointer",
                                    }}
                                >
                                    DE
                                </button>
                            </div>
                        </div>

                        {/* Hamburger */}
                        <button
                            onClick={toggleMobile}
                            aria-label="Toggle menu"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "5px",
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                padding: "4px",
                            }}
                        >
                            {[0, 1, 2].map((i) => (
                                <span key={i} style={{
                                    display: "block",
                                    width: "22px",
                                    height: "2px",
                                    background: "var(--clr-text)",
                                    borderRadius: "2px",
                                    transition: "all 0.35s",
                                }} />
                            ))}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        style={{
                            position: "fixed",
                            inset: 0,
                            zIndex: 99,
                            background: "rgba(5,8,16,0.97)",
                            backdropFilter: "blur(20px)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <ul style={{ listStyle: "none", textAlign: "center" }}>
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.07 }}
                                    style={{ margin: "24px 0" }}
                                >
                                    <button
                                        onClick={() => scrollTo(link.href)}
                                        style={{
                                            background: "none",
                                            border: "none",
                                            cursor: "pointer",
                                            color: "var(--clr-text)",
                                            fontSize: "1.8rem",
                                            fontFamily: "var(--font-main)",
                                            fontWeight: 600,
                                            transition: "color 0.3s",
                                        }}
                                    >
                                        {link.label}
                                    </button>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
        </>
    );
}

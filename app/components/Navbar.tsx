"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "About", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Projects", href: "projects" },
    { label: "Goals", href: "goals" },
    { label: "Contact", href: "contact", cta: true },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

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
                    background: scrolled ? "rgba(5,8,16,0.85)" : "transparent",
                    backdropFilter: scrolled ? "blur(20px)" : "none",
                    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
                    transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
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

                    {/* Desktop links */}
                    <ul style={{ display: "flex", listStyle: "none", gap: "36px", alignItems: "center" }} className="hide-mobile">
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

                    {/* Hamburger */}
                    <button
                        onClick={toggleMobile}
                        aria-label="Toggle menu"
                        className="show-mobile"
                        style={{
                            display: "none",
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

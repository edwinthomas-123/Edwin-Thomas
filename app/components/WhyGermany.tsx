"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.12 },
    }),
};

export default function WhyGermany() {
    const { t } = useLanguage();

    const reasons = [
        {
            icon: "🇩🇪",
            title: t.whyGermany.reason1Title,
            desc: t.whyGermany.reason1Desc,
        },
        {
            icon: "🔌",
            title: t.whyGermany.reason2Title,
            desc: t.whyGermany.reason2Desc,
        },
        {
            icon: "💼",
            title: t.whyGermany.reason3Title,
            desc: t.whyGermany.reason3Desc,
        },
        {
            icon: "🛠️",
            title: t.whyGermany.reason4Title,
            desc: t.whyGermany.reason4Desc,
        },
    ];

    return (
        <section className="et-section" id="why-germany">
            <div className="et-container">
                <div className="et-section-label">{t.whyGermany.label}</div>
                <h2 className="et-section-title">
                    {t.whyGermany.title.split(" ").slice(0, 2).join(" ")}{" "}
                    <span className="et-gradient-text">
                        {t.whyGermany.title.split(" ").slice(2).join(" ")}
                    </span>
                </h2>

                <p style={{
                    fontSize: "1.1rem",
                    color: "var(--clr-text-muted)",
                    maxWidth: "800px",
                    lineHeight: "1.7",
                    marginBottom: "48px",
                }}>
                    {t.whyGermany.lead}
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}
                    className="why-germany-grid-responsive">
                    {reasons.map((item, i) => (
                        <motion.div
                            key={i}
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
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px",
                                transition: "border-color 0.35s, background 0.35s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.4)";
                                e.currentTarget.style.background = "var(--clr-surface-hover)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "var(--clr-border)";
                                e.currentTarget.style.background = "var(--clr-surface)";
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                <span style={{ fontSize: "1.8rem" }}>{item.icon}</span>
                                <h3 style={{
                                    fontFamily: "var(--font-main)",
                                    fontSize: "1.1rem",
                                    fontWeight: 600,
                                    color: "var(--clr-text)",
                                }}>
                                    {item.title}
                                </h3>
                            </div>
                            <p style={{
                                fontSize: "0.85rem",
                                color: "var(--clr-text-muted)",
                                lineHeight: "1.6",
                            }}>
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .why-germany-grid-responsive { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}

"use client";

import { MotionValue, motion, useTransform } from "framer-motion";
import { useLanguage } from "./LanguageContext";

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

// Helper: fade in at [inStart, inEnd] and fade out at [outStart, outEnd]
function useFadeInOut(
    progress: MotionValue<number>,
    inStart: number,
    inEnd: number,
    outStart: number,
    outEnd: number
) {
    return useTransform(progress, [inStart, inEnd, outStart, outEnd], [0, 1, 1, 0]);
}

function useYParallax(
    progress: MotionValue<number>,
    inputRange: number[],
    outputRange: number[]
) {
    return useTransform(progress, inputRange, outputRange);
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
    const { t } = useLanguage();

    // ── Section 1: 0% – 20% ──────────────────────────────────────────────────
    const op1 = useFadeInOut(scrollYProgress, 0, 0.04, 0.18, 0.25);
    const y1 = useYParallax(scrollYProgress, [0, 0.25], [20, -40]);

    // ── Section 2: 30% – 55% ─────────────────────────────────────────────────
    const op2 = useFadeInOut(scrollYProgress, 0.28, 0.36, 0.52, 0.6);
    const y2 = useYParallax(scrollYProgress, [0.28, 0.6], [30, -30]);

    // ── Section 3: 60% – 82% ─────────────────────────────────────────────────
    const op3 = useFadeInOut(scrollYProgress, 0.6, 0.68, 0.82, 0.9);
    const y3 = useYParallax(scrollYProgress, [0.6, 0.9], [30, -30]);

    const handleScrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="absolute inset-0 z-10 pointer-events-none">
            {/* ── Section 1: Hero Section (Left side) ── */}
            <motion.div
                style={{ opacity: op1, y: y1 }}
                className="absolute inset-0 flex flex-col justify-center items-start text-left px-6 sm:px-16 lg:px-24"
            >
                <div className="max-w-[90%] sm:max-w-[50%] md:max-w-[45%] lg:max-w-[42%]">
                    <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-[#818cf8] mb-3 font-semibold">
                        {t.hero.welcome} · EDWIN THOMAS
                    </p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white drop-shadow-2xl">
                        <span
                            style={{
                                background: "linear-gradient(135deg, #818cf8, #06b6d4)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            {t.hero.headline}
                        </span>
                    </h1>
                    <p className="mt-4 text-xs sm:text-sm md:text-base text-white/75 font-light leading-relaxed">
                        {t.hero.subheadline}
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-6 flex flex-wrap gap-3 pointer-events-auto">
                        <button
                            onClick={() => handleScrollTo("projects")}
                            className="et-btn-primary cursor-pointer border-none"
                            style={{ padding: "10px 20px", fontSize: "0.85rem" }}
                        >
                            {t.hero.ctaProjects}
                        </button>
                        <button
                            onClick={() => handleScrollTo("contact")}
                            className="et-btn-ghost cursor-pointer"
                            style={{ padding: "10px 20px", fontSize: "0.85rem" }}
                        >
                            {t.hero.ctaContact}
                        </button>
                        <a
                            href="/Edwin_Thomas_CV.pdf"
                            download
                            className="et-btn-ghost cursor-pointer text-center flex items-center justify-center"
                            style={{ display: "inline-flex", textDecoration: "none", padding: "10px 20px", fontSize: "0.85rem" }}
                        >
                            {t.hero.ctaCV}
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* ── Section 2: Linux & Docker Credentials (Right side) ── */}
            <motion.div
                style={{ opacity: op2, y: y2 }}
                className="absolute inset-0 flex flex-col justify-center items-end text-right px-6 sm:px-16 lg:px-24"
            >
                <div className="max-w-[90%] sm:max-w-[50%] md:max-w-[45%] lg:max-w-[42%] flex flex-col items-end">
                    <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-[#06b6d4] mb-4 font-semibold">
                        {t.about.cards.learner.title}
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-2xl">
                        Practical Systems &{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #818cf8, #a855f7)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Infrastructures
                        </span>
                    </h2>
                    <p className="mt-4 text-xs sm:text-sm md:text-base text-white/70 font-light leading-relaxed">
                        Hosting web assets, configuring containerized services with Docker, administering Linux environments, and deploying code using Git workflows.
                    </p>
                </div>
            </motion.div>

            {/* ── Section 3: Motivation / Mindset (Left side) ── */}
            <motion.div
                style={{ opacity: op3, y: y3 }}
                className="absolute inset-0 flex flex-col justify-center items-start text-left px-6 sm:px-16 lg:px-24"
            >
                <div className="max-w-[90%] sm:max-w-[50%] md:max-w-[45%] lg:max-w-[42%]">
                    <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-[#a855f7] mb-4 font-semibold">
                        {t.hero.conceptLabel}
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-2xl">
                        Dual Vocational{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #06b6d4, #818cf8)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Training
                        </span>
                        <br />
                        in Germany
                    </h2>
                    <p className="mt-4 text-xs sm:text-sm md:text-base text-white/70 font-light leading-relaxed">
                        Dedicated to combining classroom networking theory with real-world enterprise operations. Ready to bring independent solving skills and B2 German proficiency.
                    </p>
                </div>
            </motion.div>

            {/* ── Scroll indicator ── */}
            <motion.div
                style={{
                    opacity: useTransform(scrollYProgress, [0, 0.08], [1, 0]),
                }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/30">{t.hero.scrollLabel}</span>
                <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
            </motion.div>
        </div>
    );
}

"use client";

import { MotionValue, motion, useTransform } from "framer-motion";

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
    // ── Section 1: 0% – 20% ──────────────────────────────────────────────────
    const op1 = useFadeInOut(scrollYProgress, 0, 0.04, 0.18, 0.25);
    const y1 = useYParallax(scrollYProgress, [0, 0.25], [20, -40]);

    // ── Section 2: 30% – 55% ─────────────────────────────────────────────────
    const op2 = useFadeInOut(scrollYProgress, 0.28, 0.36, 0.52, 0.6);
    const y2 = useYParallax(scrollYProgress, [0.28, 0.6], [30, -30]);

    // ── Section 3: 60% – 82% ─────────────────────────────────────────────────
    const op3 = useFadeInOut(scrollYProgress, 0.6, 0.68, 0.82, 0.9);
    const y3 = useYParallax(scrollYProgress, [0.6, 0.9], [30, -30]);

    return (
        <div className="absolute inset-0 z-10 pointer-events-none">
            {/* ── Section 1: Center – Name & Title ── */}
            <motion.div
                style={{ opacity: op1, y: y1 }}
                className="absolute inset-0 flex flex-col justify-center items-start text-left px-8 sm:px-20 lg:px-36"
            >
                <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-white/40 mb-3 font-medium">
                    Welcome to my world
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white drop-shadow-2xl">
                    Edwin
                    <br />
                    <span
                        style={{
                            background: "linear-gradient(135deg, #7C6EF8, #E8C547)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Thomas
                    </span>
                </h1>
                <p className="mt-4 text-sm sm:text-base font-light text-white/60 tracking-widest uppercase">
                    Creative Developer
                </p>
            </motion.div>

            {/* ── Section 2: Left – Digital Experiences ── */}
            <motion.div
                style={{ opacity: op2, y: y2 }}
                className="absolute inset-0 flex flex-col justify-center px-8 sm:px-20 lg:px-36"
            >
                <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-white/40 mb-4 font-medium">
                    What I do
                </p>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight max-w-xl drop-shadow-2xl">
                    I build{" "}
                    <span
                        style={{
                            background: "linear-gradient(135deg, #7C6EF8, #E8C547)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        digital
                    </span>
                    <br />
                    experiences.
                </h2>
                <p className="mt-4 text-sm sm:text-base text-white/50 max-w-sm font-light leading-relaxed">
                    AI automation · infrastructure · scalable systems
                </p>
            </motion.div>

            {/* ── Section 3: Right – Design + Engineering ── */}
            <motion.div
                style={{ opacity: op3, y: y3 }}
                className="absolute inset-0 flex flex-col justify-center pt-[25vh] items-end px-8 sm:px-20 lg:px-36 text-right"
            >
                <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-white/40 mb-4 font-medium">
                    My approach
                </p>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight max-w-xl drop-shadow-2xl">
                    Bridging{" "}
                    <span
                        style={{
                            background: "linear-gradient(135deg, #E8C547, #7C6EF8)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        design
                    </span>
                    <br />& engineering.
                </h2>
                <p className="mt-4 text-sm sm:text-base text-white/50 max-w-sm font-light leading-relaxed">
                    Intelligent ecosystems that think, learn, and scale autonomously.
                </p>
            </motion.div>

            {/* ── Scroll indicator (fades out after 10% scroll) ── */}
            <motion.div
                style={{
                    opacity: useTransform(scrollYProgress, [0, 0.08], [1, 0]),
                }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/30">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
            </motion.div>
        </div>
    );
}

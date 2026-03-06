"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const TOTAL_FRAMES = 192;

function getFrameUrl(index: number): string {
    const padded = String(index).padStart(2, "0");
    return `/sequence/frame_${padded}_delay-0.2s.webp`;
}

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const currentFrameRef = useRef(0);
    const rafRef = useRef<number | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

    // ── Draw frame on canvas (cover-fit) ──────────────────────────────────────
    const drawFrame = (index: number) => {
        const canvas = canvasRef.current;
        const img = imagesRef.current[index];
        if (!canvas || !img || !img.complete) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const cw = canvas.width;
        const ch = canvas.height;
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;

        // object-fit: cover
        const scale = Math.max(cw / iw, ch / ih);
        const sw = iw * scale;
        const sh = ih * scale;
        const sx = (cw - sw) / 2;
        const sy = (ch - sh) / 2;

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, sx, sy, sw, sh);
    };

    // ── Resize canvas to match viewport ───────────────────────────────────────
    const resizeCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawFrame(currentFrameRef.current);
    };

    // ── Preload all frames ────────────────────────────────────────────────────
    useEffect(() => {
        const images: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 0; i < TOTAL_FRAMES; i++) {
            const img = new Image();
            img.src = getFrameUrl(i);
            img.onload = () => {
                loadedCount++;
                // Draw first frame as soon as it loads
                if (i === 0) drawFrame(0);
                // When all loaded, draw current frame cleanly
                if (loadedCount === TOTAL_FRAMES) {
                    drawFrame(currentFrameRef.current);
                }
            };
            images.push(img);
        }
        imagesRef.current = images;

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        return () => {
            window.removeEventListener("resize", resizeCanvas);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // ── React to scroll progress ──────────────────────────────────────────────
    useMotionValueEvent(frameIndex, "change", (latest) => {
        const index = Math.round(Math.max(0, Math.min(TOTAL_FRAMES - 1, latest)));
        if (index === currentFrameRef.current) return;
        currentFrameRef.current = index;

        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => drawFrame(index));
    });

    return (
        <div ref={containerRef} style={{ height: "500vh" }} className="relative">
            {/* Sticky viewport container */}
            <div className="sticky top-0 w-full h-screen overflow-hidden">
                {/* Canvas */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                    style={{ background: "#121212" }}
                />

                {/* Dark gradient vignette overlay for readability */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse at center, transparent 40%, rgba(18,18,18,0.5) 100%)",
                    }}
                />

                {/* Text overlay */}
                <Overlay scrollYProgress={scrollYProgress} />
            </div>
        </div>
    );
}

"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import * as LucideIcons from "lucide-react";

// Project Data following the Whiteboard Animation Prompts
const projectsData: Record<string, any> = {
    "ai-content-factory": {
        title: "AI Content Factory",
        subtitle: "Fully Automated Multi-Niche Content Creation System",
        scenes: [
            { id: 1, text: "A blank whiteboard appears. A hand draws a simple computer with an AI brain icon.", heading: "System Initialization", icons: ["Laptop", "BrainCircuit"] },
            { id: 2, text: "The hand draws multiple content platforms like YouTube, Instagram, and blog icons.", heading: "Platforms", icons: ["Youtube", "Instagram", "FileText"] },
            { id: 3, text: "An automated pipeline: Idea → AI Writing → Video Creation → Thumbnail → Auto Publishing.", heading: "Automated Pipeline", icons: ["Lightbulb", "PenTool", "Video", "Image", "UploadCloud"] },
            { id: 4, text: "Icons appear showing AI features: Auto subtitles, Auto clips, Viral moment detection, Auto thumbnails, Multi-language dubbing.", heading: "AI Features", features: ["Auto Subtitles", "Auto Clips", "Viral Detection", "Auto Thumbnails", "Multi-lang Dubbing"] },
            { id: 5, text: "The system expands like a factory assembly line producing many content pieces automatically.", heading: "Factory Scale", icons: ["Factory", "Settings"] },
            { id: 6, text: "Final drawing shows a dashboard controlling everything automatically.", heading: "Central Dashboard", icons: ["LayoutDashboard", "Cpu"] }
        ]
    },
    "home-server": {
        title: "Home Server Ecosystem",
        subtitle: "Self Hosted AI Powered Personal Cloud Infrastructure",
        scenes: [
            { id: 1, text: "A house icon appears. Inside it a small server rack is drawn.", heading: "Ecosystem Core", icons: ["Home", "Server"] },
            { id: 2, text: "Connections from the server to multiple systems: AI automation, Personal cloud, Content generation, Media storage.", heading: "Systems Connected", icons: ["Network", "Database", "CpuCircuit"] },
            { id: 3, text: "A cloud icon appears showing 'Private Cloud'.", heading: "Private Cloud", icons: ["Cloud"] },
            { id: 4, text: "Network lines connect laptop, phone, and smart devices to the home server.", heading: "Device Network", icons: ["Laptop", "Smartphone", "Watch"] },
            { id: 5, text: "Automation flows appear: AI tasks running, Content generation, Data backups, 24/7 processes.", heading: "Automation Flows", features: ["AI Tasks Running", "Content Generation", "Data Backups", "24/7 Autonomy"] },
            { id: 6, text: "A scalable server stack grows larger showing infrastructure expansion.", heading: "Scalable Infrastructure", icons: ["Layers", "HardDrive"] }
        ]
    },
    "solar-smart-home": {
        title: "Off-Grid Solar Smart Home",
        subtitle: "Self Powered Renewable Smart Home",
        scenes: [
            { id: 1, text: "A two-floor house is drawn.", heading: "Smart Home Core", icons: ["Home"] },
            { id: 2, text: "Solar panels appear on the roof. A sun icon sends energy to the panels.", heading: "Solar Generation", icons: ["Sun", "PanelTop"] },
            { id: 3, text: "Energy flows from panels to a lithium battery system.", heading: "Battery Storage", icons: ["BatteryCharging"] },
            { id: 4, text: "Battery connects to home appliances: Lights, Fans, Fridge, Computer, Water pump.", heading: "Appliance Power", icons: ["Lightbulb", "Fan", "Monitor", "Droplets"] },
            { id: 5, text: "A smart energy controller dashboard appears managing electricity.", heading: "Energy Controller", icons: ["Activity", "Zap"] },
            { id: 6, text: "Show the system running independently without a grid connection.", heading: "Grid Independence", icons: ["Unplug"] },
            { id: 7, text: "Energy efficiency icons appear.", heading: "Efficiency", features: ["Eco Mode Integration", "Smart Load Balancing", "Energy Optimization"] }
        ]
    }
};

const IconBuilder = ({ name }: { name: string }) => {
    // dynamically get icon from lucide
    const IconComponent = (LucideIcons as any)[name] || LucideIcons.HelpCircle;
    return <IconComponent size={64} strokeWidth={1.5} className="scene-icon" />;
};

export default function ExplainerPage({ slug }: { slug: string }) {
    const data = projectsData[slug];
    const { scrollYProgress } = useScroll();

    // Scrollytelling visual state
    const [activeScene, setActiveScene] = useState(0);

    if (!data) return <div className="et-container" style={{ paddingTop: "20vh" }}><h2>Project Not Found</h2><Link href="/">Back to Home</Link></div>;

    return (
        <div style={{ background: "var(--clr-bg)", minHeight: "100vh", position: "relative" }}>

            {/* Nav Back Header */}
            <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 50, background: "rgba(19, 20, 24, 0.8)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--clr-border)" }}>
                <div className="et-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "80px" }}>
                    <Link href="/#projects" style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--clr-text-muted)", textDecoration: "none", fontWeight: 600, transition: "color 0.2s" }}
                        onMouseEnter={e => e.currentTarget.style.color = "var(--clr-primary)"}
                        onMouseLeave={e => e.currentTarget.style.color = "var(--clr-text-muted)"}>
                        <LucideIcons.ArrowLeft size={18} /> Back to Portfolio
                    </Link>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--clr-primary-light)", letterSpacing: "2px", textTransform: "uppercase" }}>
                        Digital Explainer
                    </div>
                </div>
            </div>

            {/* Progress Bar */}
            <motion.div style={{
                position: "fixed", top: "80px", left: 0, right: 0, height: "3px",
                background: "var(--grad-main)", originX: 0, scaleX: scrollYProgress, zIndex: 51
            }} />

            <div className="et-container" style={{ paddingTop: "140px", paddingBottom: "100px" }}>
                <header style={{ textAlign: "center", marginBottom: "80px" }}>
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="et-section-title" style={{ marginBottom: "16px", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                            <span className="et-gradient-text">{data.title}</span>
                        </h1>
                        <p style={{ fontSize: "1.2rem", color: "var(--clr-text-muted)", maxWidth: "600px", margin: "0 auto" }}>
                            {data.subtitle}
                        </p>
                    </motion.div>
                </header>

                <div style={{ display: "flex", flexDirection: "column", gap: "120px", position: "relative" }}>

                    {/* Connecting Vertical Line for timeline effect */}
                    <div style={{
                        position: "absolute",
                        left: "50%",
                        top: "10%",
                        bottom: "10%",
                        width: "2px",
                        background: "var(--clr-border)",
                        transform: "translateX(-50%)",
                        zIndex: 0
                    }} className="timeline-line" />

                    {data.scenes.map((scene: any, index: number) => {
                        const isEven = index % 2 === 0;
                        return (
                            <SceneBlock key={scene.id} scene={scene} index={index} isEven={isEven} total={data.scenes.length} />
                        )
                    })}
                </div>

                <div style={{ textAlign: "center", marginTop: "160px" }}>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        style={{ fontSize: "1.8rem", color: "var(--clr-primary)", fontWeight: 700, fontFamily: "var(--font-main)" }}>
                        {data.subtitle}
                    </motion.h3>
                </div>
            </div>

            <style>{`
                .timeline-line {
                    display: block;
                }
                @media (max-width: 900px) {
                    .timeline-line { display: none; }
                    .scene-container { flex-direction: column !important; text-align: center !important; gap: 30px !important; }
                    .scene-content, .scene-visual { width: 100% !important; align-items: center !important; }
                }

                .scene-icon {
                    stroke: var(--clr-primary);
                    filter: drop-shadow(0 0 12px rgba(247, 255, 114, 0.4));
                }

                .scene-card {
                    background: var(--clr-surface);
                    border: 1px solid var(--clr-border);
                    border-radius: var(--radius-xl);
                    padding: 40px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                    position: relative;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
}

function SceneBlock({ scene, index, isEven, total }: { scene: any, index: number, isEven: boolean, total: number }) {

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="scene-container"
            style={{
                display: "flex",
                flexDirection: isEven ? "row" : "row-reverse",
                alignItems: "center",
                gap: "80px",
                position: "relative",
                zIndex: 1
            }}
        >

            {/* Text Side */}
            <div className="scene-content" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: isEven ? "flex-end" : "flex-start", textAlign: isEven ? "right" : "left" }}>
                <div style={{ color: "var(--clr-primary)", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>
                    Scene 0{scene.id}
                </div>
                <h3 style={{ fontSize: "2rem", fontFamily: "var(--font-main)", fontWeight: 700, marginBottom: "24px", color: "var(--clr-text)" }}>
                    {scene.heading}
                </h3>
                <p style={{ fontSize: "1.1rem", color: "var(--clr-text-muted)", lineHeight: 1.8, maxWidth: "400px" }}>
                    {scene.text}
                </p>

                {scene.features && (
                    <div style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: isEven ? "flex-end" : "flex-start", maxWidth: "420px" }}>
                        {scene.features.map((feat: string, i: number) => (
                            <span key={i} style={{ padding: "6px 16px", background: "rgba(247, 255, 114, 0.1)", border: "1px solid rgba(247, 255, 114, 0.2)", borderRadius: "100px", fontSize: "0.85rem", color: "var(--clr-primary-light)" }}>
                                {feat}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Visual Side mimicking whiteboard drawing */}
            <div className="scene-visual" style={{ flex: 1, display: "flex", justifyContent: isEven ? "flex-start" : "flex-end" }}>
                <motion.div
                    className="scene-card"
                    whileHover={{ scale: 1.02, borderColor: "var(--clr-primary)" }}
                    style={{ width: "100%", maxWidth: "480px", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "280px", background: "rgba(20,20,25,0.8)", backdropFilter: "blur(10px)" }}
                >
                    {/* Corner accents */}
                    <div style={{ position: "absolute", top: 0, left: 0, width: "30px", height: "30px", borderTop: "2px solid var(--clr-primary)", borderLeft: "2px solid var(--clr-primary)", opacity: 0.3, margin: "20px" }} />
                    <div style={{ position: "absolute", bottom: 0, right: 0, width: "30px", height: "30px", borderBottom: "2px solid var(--clr-primary)", borderRight: "2px solid var(--clr-primary)", opacity: 0.3, margin: "20px" }} />

                    {scene.icons && (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center", alignItems: "center" }}>
                            {scene.icons.map((iconName: string, i: number) => (
                                <motion.div key={i}
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: i * 0.2 }}
                                    style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}
                                >
                                    <IconBuilder name={iconName} />
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* For features without icons, draw abstract connection nodes */}
                    {!scene.icons && scene.features && (
                        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                            <IconBuilder name="GitMerge" />
                            <IconBuilder name="Sparkles" />
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Timeline center node */}
            <div style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: "var(--clr-bg)",
                border: "4px solid var(--clr-primary)",
                boxShadow: "0 0 20px rgba(247, 255, 114, 0.6)",
                zIndex: 2
            }} className="timeline-line" />

        </motion.div>
    );
}

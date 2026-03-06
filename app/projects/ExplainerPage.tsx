"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import * as LucideIcons from "lucide-react";
import Image from "next/image";

// Map data from "project detials" exactly
const projectsData: Record<string, any> = {
    "ai-content-factory": {
        title: "AI Content Factory",
        subtitle: "Fully automated system that creates and publishes content across multiple platforms without manual work.",
        heroImage: "/images/ai_hero.png",
        result: "A continuous pipeline that produces and publishes content automatically across multiple channels.",
        scenes: [
            { id: 1, title: "Step 1: Idea Generation", text: "AI analyzes trends, keywords, and viral topics from platforms like YouTube, Instagram, and TikTok to generate content ideas.", icons: ["LineChart", "Lightbulb", "TrendingUp"] },
            { id: 2, title: "Step 2: Script Creation", text: "An AI model generates scripts, storylines, or informational content based on the selected topic.", icons: ["PenTool", "FileText", "Cpu"] },
            { id: 3, title: "Step 3: Media Generation", text: "Different AI tools create the media needed for the content:", features: ["AI Voice Narration", "AI Image/Video Visuals", "Automatic Stock/B-roll"], icons: ["Mic", "Video", "Image"] },
            { id: 4, title: "Step 4: Editing and Assembly", text: "Automation tools combine voice, visuals, subtitles, and transitions into a final video or post.", icons: ["Scissors", "Layers", "Film"] },
            { id: 5, title: "Step 5: Optimization", text: "AI optimizes the content for maximum reach:", features: ["Creating Thumbnails", "Writing Titles & Descriptions", "Generating Hashtags & Captions"], icons: ["Wand2", "Hash", "Type"] },
            { id: 6, title: "Step 6: Automatic Publishing", text: "The system uploads and schedules the content to platforms like YouTube, Instagram, TikTok, and Blogs.", icons: ["Youtube", "Instagram", "UploadCloud"] }
        ]
    },
    "home-server": {
        title: "Home Server Ecosystem",
        subtitle: "A personal cloud and automation system that runs on a computer or server inside your house.",
        heroImage: "/images/server_hero.png",
        result: "A private, scalable infrastructure that runs AI tools, automation workflows, and cloud services 24/7.",
        scenes: [
            { id: 1, title: "Step 1: Hardware Setup", text: "A dedicated computer or mini server runs 24/7 in your home network.", features: ["Mini PC", "Old Laptop", "Custom Server"], icons: ["Server", "Cpu", "HardDrive"] },
            { id: 2, title: "Step 2: Containerized Services", text: "Applications run inside containers using technologies like Docker. Each service runs independently.", features: ["File Storage", "Media Streaming", "AI Tools", "Automation Systems"], icons: ["Container", "Box", "Layers"] },
            { id: 3, title: "Step 3: Personal Cloud", text: "The server stores your files, videos, and documents, similar to services like Google Drive or Dropbox but fully private.", icons: ["Cloud", "Lock", "FolderHeart"] },
            { id: 4, title: "Step 4: AI Integration", text: "Local AI models can run on the server to handle tasks such as content generation, automation, data analysis, and personal assistants.", icons: ["BrainCircuit", "Bot", "Sparkles"] },
            { id: 5, title: "Step 5: Automation System", text: "Automation software connects different services together. Example: When a script is generated → start video generation → upload automatically.", icons: ["Activity", "GitCommit", "Workflow"] },
            { id: 6, title: "Step 6: Remote Access", text: "You can access the server from anywhere using secure connections.", icons: ["Globe", "ShieldCheck", "Smartphone"] }
        ]
    },
    "solar-smart-home": {
        title: "Off-Grid Solar Smart Home",
        subtitle: "A house powered entirely by solar energy without relying on the electrical grid.",
        heroImage: "/images/solar_hero.png",
        result: "A self-sufficient home that generates, stores, and manages its own electricity using renewable energy.",
        scenes: [
            { id: 1, title: "Step 1: Solar Energy Generation", text: "Solar panels on the roof convert sunlight into electricity.", icons: ["Sun", "PanelTop", "Zap"] },
            { id: 2, title: "Step 2: Power Storage", text: "The generated electricity is stored in lithium batteries so power is available during night or cloudy weather.", icons: ["BatteryCharging", "BatteryFull", "Moon"] },
            { id: 3, title: "Step 3: Power Management", text: "An inverter converts stored DC electricity from the batteries into AC electricity used by household appliances.", icons: ["ActivitySquare", "RefreshCw", "PlugZap"] },
            { id: 4, title: "Step 4: Smart Power Distribution", text: "A smart energy system monitors power usage and distributes electricity efficiently across the house.", features: ["Priority for essential devices", "Automatic load control", "Energy usage monitoring"], icons: ["GitBranch", "SlidersHorizontal", "BarChart"] },
            { id: 5, title: "Step 5: Energy Efficient Appliances", text: "The house uses energy-efficient devices to minimize consumption.", features: ["LED lights", "DC fans", "Efficient refrigerators", "Smart home devices"], icons: ["Lightbulb", "Fan", "Home"] },
            { id: 6, title: "Step 6: Monitoring System", text: "A smart dashboard tracks solar production, battery level, and home energy consumption.", icons: ["LayoutDashboard", "LineChart", "Activity"] }
        ]
    }
};

const IconBuilder = ({ name }: { name: string }) => {
    // dynamically get icon from lucide
    const IconComponent = (LucideIcons as any)[name] || LucideIcons.HelpCircle;
    return <IconComponent size={48} strokeWidth={1.5} className="scene-icon" />;
};

export default function ExplainerPage({ slug }: { slug: string }) {
    const data = projectsData[slug];
    const { scrollYProgress } = useScroll();

    // Create a ref to determine full page scroll percentage if needed
    const containerRef = useRef(null);

    // Scrollytelling visual state
    const [activeScene, setActiveScene] = useState(0);

    if (!data) return <div className="et-container" style={{ paddingTop: "20vh", textAlign: 'center' }}><h2>Project Not Found</h2><Link href="/">Back to Home</Link></div>;

    return (
        <div ref={containerRef} style={{ background: "var(--clr-bg)", minHeight: "100vh", position: "relative" }}>

            {/* Floating Back Button */}
            <Link href="/#projects"
                style={{
                    position: "fixed",
                    top: "30px",
                    left: "30px",
                    zIndex: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                    background: "rgba(20, 20, 25, 0.6)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(247, 255, 114, 0.2)",
                    borderRadius: "50%",
                    color: "var(--clr-text-muted)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.color = "var(--clr-primary)";
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.borderColor = "var(--clr-primary)";
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.color = "var(--clr-text-muted)";
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.borderColor = "rgba(247, 255, 114, 0.2)";
                }}>
                <LucideIcons.ArrowLeft size={24} />
            </Link>

            {/* Progress Bar */}
            <motion.div style={{
                position: "fixed", top: 0, left: 0, right: 0, height: "4px",
                background: "var(--grad-main)", originX: 0, scaleX: scrollYProgress, zIndex: 51,
                boxShadow: "0 0 10px var(--clr-primary)"
            }} />

            <div className="et-container" style={{ paddingTop: "80px", paddingBottom: "100px" }}>

                {/* Hero Section */}
                <header style={{ textAlign: "center", marginBottom: "100px" }}>
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="et-section-title" style={{ marginBottom: "24px", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                            <span className="et-gradient-text">{data.title}</span>
                        </h1>
                        <p style={{ fontSize: "1.2rem", color: "var(--clr-text-muted)", maxWidth: "800px", margin: "0 auto", lineHeight: 1.6 }}>
                            {data.subtitle}
                        </p>
                    </motion.div>

                    {/* Hero Image Block */}
                    {data.heroImage && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            style={{
                                marginTop: "60px",
                                position: "relative",
                                width: "100%",
                                maxWidth: "1000px",
                                height: "clamp(300px, 50vw, 600px)",
                                margin: "60px auto 0",
                                borderRadius: "var(--radius-xl)",
                                overflow: "hidden",
                                border: "1px solid var(--clr-border)",
                                boxShadow: "0 20px 50px rgba(0,0,0,0.5), 0 0 40px rgba(247, 255, 114, 0.1)"
                            }}
                        >
                            <Image
                                src={data.heroImage}
                                alt={data.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                            {/* Overlay Gradient for seamless blending */}
                            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--clr-bg) 0%, transparent 40%)" }} />
                        </motion.div>
                    )}
                </header>

                {/* Steps Timeline */}
                <div style={{ display: "flex", flexDirection: "column", gap: "100px", position: "relative" }}>

                    {/* Connecting Vertical Line for timeline effect */}
                    <div style={{
                        position: "absolute",
                        left: "50%",
                        top: "5%",
                        bottom: "5%",
                        width: "2px",
                        background: "rgba(255,255,255,0.05)",
                        transform: "translateX(-50%)",
                        zIndex: 0
                    }} className="timeline-bg-line" />

                    {/* Animated bright fill line based on scroll */}
                    <motion.div style={{
                        position: "absolute",
                        left: "50%",
                        top: "5%",
                        height: "90%",
                        width: "2px",
                        background: "var(--clr-primary)",
                        transform: "translateX(-50%)",
                        transformOrigin: "top",
                        scaleY: scrollYProgress,
                        zIndex: 1,
                        boxShadow: "0 0 15px var(--clr-primary)"
                    }} className="timeline-fg-line" />

                    {data.scenes.map((scene: any, index: number) => {
                        const isEven = index % 2 === 0;
                        return (
                            <SceneBlock key={scene.id} scene={scene} index={index} isEven={isEven} total={data.scenes.length} />
                        )
                    })}
                </div>

                {/* Result Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    style={{ textAlign: "center", marginTop: "160px", padding: "60px", background: "rgba(20,20,25,0.6)", borderRadius: "var(--radius-xl)", border: "1px solid var(--clr-border)" }}>
                    <LucideIcons.CheckCircle2 size={48} color="var(--clr-primary)" style={{ margin: "0 auto 24px", filter: "drop-shadow(0 0 10px rgba(247,255,114,0.5))" }} />
                    <h2 style={{ fontSize: "2rem", color: "white", marginBottom: "20px" }}>Final Result</h2>
                    <p style={{ fontSize: "1.3rem", color: "var(--clr-primary-light)", fontWeight: 500, maxWidth: "800px", margin: "0 auto", lineHeight: 1.6 }}>
                        "{data.result}"
                    </p>
                </motion.div>
            </div>

            <style>{`
                .timeline-bg-line, .timeline-fg-line {
                    display: block;
                }
                @media (max-width: 900px) {
                    .timeline-bg-line, .timeline-fg-line { display: none; }
                    .scene-container { flex-direction: column !important; text-align: center !important; gap: 40px !important; }
                    .scene-content, .scene-visual { width: 100% !important; align-items: center !important; }
                }

                .scene-icon {
                    stroke: var(--clr-primary);
                    filter: drop-shadow(0 0 8px rgba(247, 255, 114, 0.4));
                }

                .scene-card {
                    background: linear-gradient(145deg, rgba(25,25,32,0.9) 0%, rgba(15,15,20,0.9) 100%);
                    border: 1px solid rgba(247, 255, 114, 0.15);
                    border-radius: var(--radius-xl);
                    padding: 40px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05);
                    position: relative;
                    overflow: hidden;
                    width: 100%;
                    max-width: 480px;
                    min-height: 280px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
                }
                
                .scene-card:hover {
                    border-color: rgba(247, 255, 114, 0.5);
                    box-shadow: 0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1), 0 0 30px rgba(247, 255, 114, 0.1);
                    transform: translateY(-5px);
                }
            `}</style>
        </div>
    );
}

function SceneBlock({ scene, index, isEven, total }: { scene: any, index: number, isEven: boolean, total: number }) {

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="scene-container"
            style={{
                display: "flex",
                flexDirection: isEven ? "row" : "row-reverse",
                alignItems: "center",
                gap: "80px",
                position: "relative",
                zIndex: 2
            }}
        >

            {/* Text Side */}
            <div className="scene-content" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: isEven ? "flex-end" : "flex-start", textAlign: isEven ? "right" : "left" }}>
                <div style={{ color: "var(--clr-primary)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px", background: "rgba(247,255,114,0.1)", padding: "4px 12px", borderRadius: "100px" }}>
                    Phase 0{scene.id}
                </div>
                <h3 style={{ fontSize: "2.2rem", fontFamily: "var(--font-main)", fontWeight: 700, marginBottom: "20px", color: "var(--clr-text)" }}>
                    {scene.title}
                </h3>
                <p style={{ fontSize: "1.15rem", color: "var(--clr-text-muted)", lineHeight: 1.8, maxWidth: "450px" }}>
                    {scene.text}
                </p>

                {scene.features && (
                    <div style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: isEven ? "flex-end" : "flex-start", maxWidth: "450px" }}>
                        {scene.features.map((feat: string, i: number) => (
                            <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + (i * 0.1) }}
                                key={i}
                                style={{ padding: "8px 18px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "100px", fontSize: "0.9rem", color: "var(--clr-text)" }}>
                                {feat}
                            </motion.span>
                        ))}
                    </div>
                )}
            </div>

            {/* Visual Side animated card */}
            <div className="scene-visual" style={{ flex: 1, display: "flex", justifyContent: isEven ? "flex-start" : "flex-end", position: "relative" }}>
                <div className="scene-card">
                    {/* Animated geometric background accents */}
                    <div style={{ position: "absolute", top: "-20%", left: "-20%", width: "140%", height: "140%", background: "radial-gradient(circle at center, rgba(247, 255, 114, 0.05) 0%, transparent 60%)", pointerEvents: "none" }} />

                    {scene.icons && (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "center", alignItems: "center", position: "relative", zIndex: 10 }}>
                            {scene.icons.map((iconName: string, i: number) => (
                                <motion.div key={i}
                                    initial={{ scale: 0, rotate: -45, opacity: 0 }}
                                    whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                        delay: i * 0.15 + 0.3
                                    }}
                                    style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}
                                >
                                    <div style={{ padding: "20px", background: "rgba(0,0,0,0.4)", borderRadius: "50%", border: "1px solid rgba(247,255,114,0.2)" }}>
                                        <IconBuilder name={iconName} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Timeline center node indicator */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: "var(--clr-bg)",
                    border: "4px solid var(--clr-primary)",
                    boxShadow: "0 0 20px rgba(247, 255, 114, 0.8), inset 0 0 10px rgba(247, 255, 114, 0.5)",
                    zIndex: 3
                }}
                className="timeline-bg-line"
            />

        </motion.div>
    );
}


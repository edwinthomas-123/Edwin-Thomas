"use client";

import Link from "next/link";
import { useLanguage } from "../components/LanguageContext";

export default function CVPage() {
    const { t, language } = useLanguage();

    const contactLinks = [
        { label: "Email", val: "edwinmoothedan2006@gmail.com", href: "mailto:edwinmoothedan2006@gmail.com" },
        { label: "LinkedIn", val: "linkedin.com/in/edwin-thomas-0269b13aa", href: "https://www.linkedin.com/in/edwin-thomas-0269b13aa/" },
        { label: "WhatsApp", val: "+91 8590399020", href: "https://wa.me/918590399020" },
        { label: "GitHub", val: "github.com/edwinthomas-123", href: "https://github.com/edwinthomas-123" }
    ];

    const projects = [
        {
            title: t.projects.proj1.title,
            desc: t.projects.proj1.desc,
            tech: "HTML, CSS, JavaScript, Responsive Design",
            demo: "bake-and-bite.vercel.app"
        },
        {
            title: t.projects.proj2.title,
            desc: t.projects.proj2.desc,
            tech: "Next.js, Tailwind CSS, Framer Motion, Translation Context",
            demo: "edwin-thomas (deine Host-URL)"
        },
        {
            title: t.projects.proj3.title,
            desc: t.projects.proj3.desc,
            tech: "AI APIs, Process Automation Workflow, Node.js",
            demo: t.projects.proj3.workflow
        },
        {
            title: t.projects.proj4.title,
            desc: t.projects.proj4.desc,
            tech: "Docker Containerization, Debian Linux, Networking, Cron Backups",
            demo: "Self-Hosted Home Lab"
        }
    ];

    return (
        <div style={{ background: "#fff", color: "#1a202c", fontFamily: "system-ui, sans-serif", minHeight: "100vh", padding: "40px 20px" }} className="print-mode">
            {/* Action Bar (Hidden during printing) */}
            <div className="no-print" style={{
                maxWidth: "800px",
                margin: "0 auto 30px auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#f7fafc",
                padding: "12px 24px",
                borderRadius: "8px",
                border: "1px solid #e2e8f0"
            }}>
                <Link href="/" style={{ color: "#4a5568", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>
                    ← Back to Portfolio
                </Link>
                <button
                    onClick={() => window.print()}
                    style={{
                        background: "#3182ce",
                        color: "#fff",
                        border: "none",
                        padding: "8px 18px",
                        borderRadius: "6px",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        cursor: "pointer",
                        boxShadow: "0 2px 4px rgba(49,130,206,0.2)"
                    }}
                >
                    🖨️ Print / Save as PDF
                </button>
            </div>

            {/* A4 Sheet Container */}
            <div style={{
                maxWidth: "800px",
                margin: "0 auto",
                background: "#fff",
                padding: "0 10px",
                fontSize: "0.9rem",
                lineHeight: "1.5"
            }}>
                {/* Header Section */}
                <div style={{ borderBottom: "2px solid #2b6cb0", paddingBottom: "16px", marginBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <div>
                        <h1 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#2b6cb0", margin: 0, letterSpacing: "-0.02em" }}>
                            EDWIN THOMAS
                        </h1>
                        <p style={{ fontSize: "1.1rem", color: "#4a5568", fontWeight: 600, margin: "4px 0 0 0" }}>
                            {language === "de" ? "Angehender Fachinformatiker für Digitale Vernetzung" : "Aspiring Fachinformatiker für Digitale Vernetzung"}
                        </p>
                    </div>
                    <div style={{ textAlign: "right", fontSize: "0.82rem", color: "#718096" }}>
                        <p style={{ margin: 0 }}>Perumbavoor, Kerala, India</p>
                        <p style={{ margin: 0 }}>B2 German level (Goethe Certified)</p>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 2.5fr", gap: "30px" }}>
                    
                    {/* Left Sidebar */}
                    <div style={{ borderRight: "1px solid #e2e8f0", paddingRight: "20px" }}>
                        {/* Contacts */}
                        <div style={{ marginBottom: "24px" }}>
                            <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#2b6cb0", textTransform: "uppercase", borderBottom: "1px solid #e2e8f0", paddingBottom: "4px", marginBottom: "8px" }}>
                                Contact
                            </h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.8rem" }}>
                                {contactLinks.map((link) => (
                                    <div key={link.label}>
                                        <span style={{ fontWeight: 600, display: "block", color: "#718096" }}>{link.label}</span>
                                        <a href={link.href} target="_blank" rel="noopener noreferrer" style={{ color: "#2b6cb0", textDecoration: "none", wordBreak: "break-all" }}>
                                            {link.val}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Languages */}
                        <div style={{ marginBottom: "24px" }}>
                            <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#2b6cb0", textTransform: "uppercase", borderBottom: "1px solid #e2e8f0", paddingBottom: "4px", marginBottom: "8px" }}>
                                Languages
                            </h3>
                            <ul style={{ listStyleType: "none", paddingLeft: 0, margin: 0, fontSize: "0.8rem", display: "flex", flexDirection: "column", gap: "6px" }}>
                                <li>
                                    <span style={{ fontWeight: 600, display: "block" }}>{language === "de" ? "Deutsch" : "German"}</span>
                                    <span>B2 level (Goethe Lesen &amp; Hören Certified)</span>
                                </li>
                                <li>
                                    <span style={{ fontWeight: 600, display: "block" }}>{language === "de" ? "Englisch" : "English"}</span>
                                    <span>{language === "de" ? "Fließend (C1/C2)" : "Fluent (C1/C2)"}</span>
                                </li>
                            </ul>
                        </div>

                        {/* Technical Skills */}
                        <div>
                            <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#2b6cb0", textTransform: "uppercase", borderBottom: "1px solid #e2e8f0", paddingBottom: "4px", marginBottom: "8px" }}>
                                Technical Skills
                            </h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.78rem" }}>
                                <div>
                                    <span style={{ fontWeight: 600, display: "block", color: "#4a5568" }}>Systems &amp; Network</span>
                                    <span>Linux (Debian CLI), Docker Containerization, Git/GitHub, Deployments</span>
                                </div>
                                <div>
                                    <span style={{ fontWeight: 600, display: "block", color: "#4a5568" }}>Web Development</span>
                                    <span>HTML5, CSS3, JavaScript, Responsive design layouts</span>
                                </div>
                                <div>
                                    <span style={{ fontWeight: 600, display: "block", color: "#4a5568" }}>Automation</span>
                                    <span>Process automation pipelines, local AI scripting integrations</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Body */}
                    <div>
                        {/* Profile Objective */}
                        <div style={{ marginBottom: "24px" }}>
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#2b6cb0", textTransform: "uppercase", borderBottom: "1px solid #e2e8f0", paddingBottom: "4px", marginBottom: "10px" }}>
                                {language === "de" ? "Berufliches Ziel" : "Career Objective"}
                            </h3>
                            <p style={{ fontSize: "0.85rem", color: "#2d3748", lineHeight: "1.6", margin: 0 }}>
                                {t.about.lead} {t.about.bio2}
                            </p>
                        </div>

                        {/* Projects */}
                        <div style={{ marginBottom: "24px" }}>
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#2b6cb0", textTransform: "uppercase", borderBottom: "1px solid #e2e8f0", paddingBottom: "4px", marginBottom: "12px" }}>
                                {language === "de" ? "Praktische Projekte" : "Practical Projects"}
                            </h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                                {projects.map((proj, idx) => (
                                    <div key={idx}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2px" }}>
                                            <h4 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#2d3748", margin: 0 }}>{proj.title}</h4>
                                            <span style={{ fontSize: "0.78rem", color: "#718096", fontFamily: "monospace" }}>{proj.demo}</span>
                                        </div>
                                        <p style={{ fontSize: "0.8rem", color: "#4a5568", margin: "2px 0 4px 0", lineHeight: "1.5" }}>{proj.desc}</p>
                                        <div style={{ fontSize: "0.75rem", color: "#718096" }}>
                                            <span style={{ fontWeight: 600 }}>Tech Stack:</span> {proj.tech}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#2b6cb0", textTransform: "uppercase", borderBottom: "1px solid #e2e8f0", paddingBottom: "4px", marginBottom: "10px" }}>
                                {language === "de" ? "Schulbildung & Studium" : "Education Background"}
                            </h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.82rem" }}>
                                <div>
                                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, color: "#2d3748" }}>
                                        <span>Commerce Graduate (Bachelor of Commerce)</span>
                                        <span>2021 – 2024</span>
                                    </div>
                                    <div style={{ fontSize: "0.78rem", color: "#718096" }}>Higher Academic Degree, Kerala, India</div>
                                </div>
                                <div>
                                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, color: "#2d3748" }}>
                                        <span>Higher Secondary Education (Commerce / Wirtschaft)</span>
                                        <span>2019 – 2021</span>
                                    </div>
                                    <div style={{ fontSize: "0.78rem", color: "#718096" }}>Focus: Accountancy, Business Studies &amp; IT basics</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer / Location / Signature Block */}
                <div style={{ borderTop: "1px solid #e2e8f0", marginTop: "30px", paddingTop: "14px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.8rem", color: "#718096" }}>
                    <span>Perumbavoor, Kerala, India</span>
                    <span style={{ fontStyle: "italic", fontWeight: 500 }}>Edwin Thomas</span>
                </div>
            </div>

            {/* Custom Print CSS */}
            <style>{`
                @media print {
                    .no-print {
                        display: none !important;
                    }
                    body, .print-mode {
                        background: #fff !important;
                        color: #000 !important;
                        padding: 0 !important;
                        margin: 0 !important;
                    }
                }
            `}</style>
        </div>
    );
}

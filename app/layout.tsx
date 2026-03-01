import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edwin Thomas | IT Specialist & AI Automation Architect",
  description:
    "Edwin Thomas – Aspiring IT Specialist, AI Automation Architect, and Digital System Builder based in Kerala, India. Pursuing Ausbildung in Germany.",
  keywords: ["Edwin Thomas", "IT Specialist", "AI Automation", "Digital Networking", "Ausbildung", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{
        background: "#050810",
        color: "#e2e8f0",
        fontFamily: "'Inter', 'Space Grotesk', system-ui, sans-serif",
        margin: 0,
        padding: 0,
      }}>
        {children}
      </body>
    </html>
  );
}

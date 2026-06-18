import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageContext";

export const metadata: Metadata = {
  title: "Edwin Thomas | Aspiring Fachinformatiker für Digitale Vernetzung",
  description:
    "Edwin Thomas – Aspiring IT Infrastructure and Digital Networking Professional with practical experience in Linux, Docker, GitHub, web deployment, and automation-focused projects.",
  keywords: ["Edwin Thomas", "Fachinformatiker für Digitale Vernetzung", "IT Specialist", "Networking", "Ausbildung", "Linux", "Docker", "Portfolio"],
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
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}


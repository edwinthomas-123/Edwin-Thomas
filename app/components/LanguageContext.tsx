"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "../translations";

interface LanguageContextProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");

    // Initialize from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem("portfolio_lang") as Language;
        if (saved === "en" || saved === "de") {
            setLanguageState(saved);
        } else if (typeof window !== "undefined") {
            const browserLang = navigator.language.slice(0, 2);
            if (browserLang === "de") {
                setLanguageState("de");
            }
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("portfolio_lang", lang);
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}

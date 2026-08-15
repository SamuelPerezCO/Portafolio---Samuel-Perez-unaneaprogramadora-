"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CONTENT, type Lang } from "./content";

type LanguageContextValue = {
  lang: Lang;
  toggleLang: () => void;
  t: (typeof CONTENT)[Lang];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const stored = window.localStorage.getItem("lang");
    if (stored === "es" || stored === "en") {
      setLang(stored);
      return;
    }
    const browserLang = navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
    setLang(browserLang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      toggleLang: () => setLang((prev) => (prev === "es" ? "en" : "es")),
      t: CONTENT[lang],
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

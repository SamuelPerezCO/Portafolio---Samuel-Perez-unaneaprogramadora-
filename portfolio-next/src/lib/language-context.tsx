"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import { CONTENT, type Lang } from "./content";

type LanguageContextValue = {
  lang: Lang;
  toggleLang: () => void;
  t: (typeof CONTENT)[Lang];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "lang";
const listeners = new Set<() => void>();

function readStored(): Lang | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "es" || stored === "en" ? stored : null;
  } catch {
    return null;
  }
}

function getSnapshot(): Lang {
  // First render must agree with getServerSnapshot() and <html lang="es">: Spanish is the
  // client's default; the ES/EN chip is the only way to switch (the choice is persisted).
  return readStored() ?? "es";
}

function getServerSnapshot(): Lang {
  return "es";
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function writeLang(lang: Lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Storage may be unavailable; the in-memory listeners still update the UI.
  }
  listeners.forEach((callback) => callback());
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      toggleLang: () => writeLang(lang === "es" ? "en" : "es"),
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

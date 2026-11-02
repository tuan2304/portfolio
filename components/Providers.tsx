"use client";

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { dict, type Dict, type Lang } from "@/lib/content";

type Theme = "dark" | "light";

type Ctx = {
  lang: Lang;
  t: Dict;
  setLang: (l: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
};

const AppContext = createContext<Ctx | null>(null);

// Preferences live outside React (localStorage + the <html> attribute), so they are read
// through useSyncExternalStore: the server snapshot keeps hydration matching, then the
// real value is picked up right after.
const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function notify() {
  listeners.forEach((cb) => cb());
}

function read(key: string) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // storage can be blocked (private mode); the preference just isn't remembered.
  }
}

// Fallback for when storage is blocked, so the toggle still works for the session.
let sessionLang: Lang | null = null;

function getLang(): Lang {
  if (sessionLang) return sessionLang;
  const saved = read("lang");
  if (saved === "vi" || saved === "en") return saved;
  return navigator.language.toLowerCase().startsWith("vi") ? "vi" : "en";
}

function getTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

export function Providers({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getLang, () => "en" as Lang);
  const theme = useSyncExternalStore(subscribe, getTheme, () => "dark" as Theme);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    sessionLang = l;
    write("lang", l);
    notify();
  }, []);

  const toggleTheme = useCallback(() => {
    const next: Theme = getTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    write("theme", next);
    notify();
  }, []);

  return (
    <AppContext.Provider value={{ lang, t: dict[lang], setLang, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside <Providers>");
  return ctx;
}

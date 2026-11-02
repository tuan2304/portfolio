"use client";

import { useApp } from "./Providers";
import { MoonIcon, SunIcon } from "./icons";
import { site } from "@/lib/site";

const links = ["about", "skills", "projects", "journey", "contact"] as const;

export function Nav() {
  const { t, lang, setLang, theme, toggleTheme } = useApp();

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border border-border bg-surface/80 px-4 py-2 backdrop-blur-xl"
      >
        <a href="#top" className="focus-ring rounded-full font-mono text-sm font-semibold">
          {site.handle}
          <span className="text-accent">.dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l}`}
                className="focus-ring rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:text-fg"
              >
                {t.nav[l]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <div role="group" aria-label={t.toggles.lang} className="flex rounded-full border border-border p-0.5 text-xs font-semibold">
            {(["en", "vi"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`focus-ring rounded-full px-2.5 py-1 uppercase transition-colors ${
                  lang === l ? "bg-accent text-accent-fg" : "text-muted hover:text-fg"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t.toggles.theme}
            className="focus-ring grid size-8 place-items-center rounded-full border border-border text-muted transition-colors hover:text-fg"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>
    </header>
  );
}

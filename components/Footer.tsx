"use client";

import { useApp } from "./Providers";
import { site } from "@/lib/site";

export function Footer() {
  const { t } = useApp();

  return (
    <footer className="mx-auto max-w-5xl border-t border-border px-4 py-8 text-sm text-muted">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p>{t.footer}</p>
        <p className="font-mono">
          © 2026 {site.name}
        </p>
      </div>
    </footer>
  );
}

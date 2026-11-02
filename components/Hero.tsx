"use client";

import { useApp } from "./Providers";
import { ArrowIcon, DownloadIcon, GithubIcon } from "./icons";
import { site } from "@/lib/site";

export function Hero() {
  const { t } = useApp();

  return (
    <section id="top" className="mx-auto grid max-w-5xl items-center gap-12 px-4 pb-20 pt-32 md:pt-40 lg:grid-cols-[1.15fr_1fr]">
      <div>
        <p className="hero-in chip text-muted">
          <span className="live-dot" aria-hidden />
          {t.hero.status}
        </p>

        <h1 className="hero-in mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight [animation-delay:80ms] sm:text-5xl lg:text-6xl">
          <span className="text-accent">{t.hero.hi}</span>
          <br />
          {t.hero.title}
        </h1>

        <p className="hero-in mt-6 max-w-xl text-lg text-muted [animation-delay:160ms]">{t.hero.sub}</p>

        <div className="hero-in mt-8 flex flex-wrap gap-3 [animation-delay:240ms]">
          <a
            href={site.cv}
            download
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-fg transition-transform hover:-translate-y-0.5"
          >
            <DownloadIcon />
            {t.hero.cv}
          </a>
          <a
            href="#projects"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
          >
            {t.hero.work}
            <ArrowIcon className="rotate-90" />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="focus-ring grid size-12 place-items-center rounded-full border border-border bg-surface transition-transform hover:-translate-y-0.5"
          >
            <GithubIcon />
          </a>
        </div>

        <dl className="hero-in mt-12 grid max-w-xl grid-cols-3 gap-4 [animation-delay:320ms]">
          {t.hero.stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl font-bold sm:text-4xl">{s.value}</dt>
              <dd className="mt-1 text-xs leading-snug text-muted sm:text-sm">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="hero-in [animation-delay:200ms]" aria-hidden>
        <div className="card overflow-hidden shadow-[0_30px_80px_-30px_var(--glow)]">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-muted">no_double_booking.sql</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[0.8rem] leading-relaxed sm:text-sm">
            <code>
              <span className="text-muted">-- {t.hero.codeNote}</span>
              {"\n"}
              <span className="text-violet">alter table</span> bookings
              {"\n  "}
              <span className="text-violet">add constraint</span> no_overlap
              {"\n  "}
              <span className="text-violet">exclude using</span> gist (
              {"\n    "}court_id <span className="text-accent">with</span> =,
              {"\n    "}tstzrange(starts_at, ends_at)
              {"\n      "}
              <span className="text-accent">with</span> &amp;&amp;
              {"\n  "});
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useApp } from "./Providers";
import { ArrowIcon, GithubIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";
import { projects, type Project } from "@/lib/content";

function ProjectCard({ p }: { p: Project }) {
  const { t, lang } = useApp();
  const text = p.text[lang];

  return (
    <article
      className={`card reveal flex flex-col p-7 ${
        p.featured ? "border-accent/40 shadow-[0_30px_80px_-40px_var(--glow)] md:col-span-2" : ""
      }`}
    >
      <div className="flex flex-wrap items-center gap-2 text-xs">
        {p.featured && <span className="chip bg-accent text-accent-fg">{t.projects.featured}</span>}
        <span className="chip">{p.team ? t.projects.team : t.projects.solo}</span>
        <span className="font-mono text-muted">{p.period}</span>
      </div>

      <h3 className="mt-4 font-display text-2xl font-bold">{text.name}</h3>
      <p className="mt-1 text-muted">{text.tagline}</p>

      <ul className="mt-4 space-y-2 text-sm leading-relaxed">
        {text.bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <li key={s} className="chip font-mono text-xs">
            {s}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        <a
          href={p.repo}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-surface-2"
        >
          <GithubIcon width={16} height={16} />
          {t.projects.repo}
        </a>
        {p.demo && (
          <a
            href={p.demo}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-fg transition-transform hover:-translate-y-0.5"
          >
            {t.projects.demo}
            <ArrowIcon width={16} height={16} />
          </a>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const { t } = useApp();

  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-20">
      <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} />
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}

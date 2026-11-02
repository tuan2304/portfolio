"use client";

import { useApp } from "./Providers";
import { PinIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { t } = useApp();
  const a = t.about;

  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-20">
      <SectionHeading eyebrow={a.eyebrow} title={a.title} />

      <div className="grid gap-4 md:grid-cols-6">
        <div className="card reveal p-7 md:col-span-4">
          <p className="chip mb-4 text-muted">
            <PinIcon width={14} height={14} />
            {a.where}
          </p>
          <p className="text-lg leading-relaxed">{a.bio}</p>
        </div>

        <div className="card reveal p-7 md:col-span-2">
          <h3 className="font-display text-lg font-semibold">{a.langs.title}</h3>
          <ul className="mt-4 space-y-3">
            {a.langs.items.map((l) => (
              <li key={l.name}>
                <p className="font-medium">{l.name}</p>
                <p className="text-sm text-muted">{l.level}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="card reveal p-7 md:col-span-3">
          <h3 className="font-display text-lg font-semibold">{a.ai.title}</h3>
          <p className="mt-2 text-muted">{a.ai.body}</p>
          <ol className="mt-5 flex flex-wrap items-center gap-2 font-mono text-sm">
            {a.ai.steps.map((s, i) => (
              <li key={s} className="flex items-center gap-2">
                <span className="chip">
                  <span className="text-accent">{i + 1}</span>
                  {s}
                </span>
                {i < a.ai.steps.length - 1 && (
                  <span aria-hidden className="text-muted">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>

        <div className="card reveal p-7 md:col-span-3">
          <h3 className="font-display text-lg font-semibold">{a.team.title}</h3>
          <p className="mt-2 text-muted">{a.team.body}</p>
          <h3 className="mt-6 font-display text-lg font-semibold">{a.growth.title}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {a.growth.items.map((g) => (
              <li key={g} className="chip">
                {g}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

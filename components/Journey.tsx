"use client";

import { useApp } from "./Providers";
import { SectionHeading } from "./SectionHeading";

export function Journey() {
  const { t } = useApp();

  return (
    <section id="journey" className="mx-auto max-w-5xl px-4 py-20">
      <SectionHeading eyebrow={t.journey.eyebrow} title={t.journey.title} />

      <ol className="relative space-y-4 border-l border-border pl-6 sm:pl-8">
        {t.journey.items.map((item) => (
          <li key={item.org} className="reveal relative">
            <span
              aria-hidden
              className="absolute -left-[1.95rem] top-8 size-3 rounded-full border-2 border-accent bg-bg sm:-left-[2.45rem]"
            />
            <div className="card p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-bold">{item.org}</h3>
                <span className="font-mono text-sm text-muted">{item.time}</span>
              </div>
              <p className="mt-1 text-accent">{item.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

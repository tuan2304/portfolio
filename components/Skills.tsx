"use client";

import { useApp } from "./Providers";
import { SectionHeading } from "./SectionHeading";
import { skillGroups } from "@/lib/content";

export function Skills() {
  const { t } = useApp();

  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-20">
      <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} />

      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.id} className="card reveal p-7">
            <h3 className="font-display text-lg font-semibold">{t.skills.groups[g.id]}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li key={item} className="chip font-mono">
                  {item}
                  {item === "ASP.NET Core MVC" && <span className="text-muted">({t.skills.basic})</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

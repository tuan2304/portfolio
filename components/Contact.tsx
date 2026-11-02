"use client";

import { useEffect, useState } from "react";
import { useApp } from "./Providers";
import { CopyIcon, FacebookIcon, GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";
import { site } from "@/lib/site";

export function Contact() {
  const { t } = useApp();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  const socials = [
    { label: "GitHub", href: site.github, Icon: GithubIcon },
    ...(site.linkedin ? [{ label: "LinkedIn", href: site.linkedin, Icon: LinkedinIcon }] : []),
    { label: "Facebook", href: site.facebook, Icon: FacebookIcon },
  ];

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-20">
      <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} />

      <div className="card reveal relative overflow-hidden p-8 sm:p-12">
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-violet/30 blur-3xl" />
        <p className="relative max-w-xl text-lg text-muted">{t.contact.body}</p>

        <a
          href={`mailto:${site.email}`}
          className="focus-ring relative mt-6 block break-all font-display text-2xl font-bold underline decoration-accent decoration-2 underline-offset-8 sm:text-4xl"
        >
          {site.email}
        </a>

        <div className="relative mt-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={copyEmail}
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-fg transition-transform hover:-translate-y-0.5"
          >
            {copied ? <MailIcon /> : <CopyIcon />}
            <span aria-live="polite">{copied ? t.contact.copied : t.contact.copy}</span>
          </button>
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            >
              <Icon />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import * as React from "react";
import { Award, BadgeCheck } from "lucide-react";

import { awards, certifications } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Awards() {
  return (
    <section id="awards" className="container-measure py-20 md:py-28">
      <SectionHeading index="07" title="Awards & Certifications" />

      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          <h3 className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <Award className="h-4 w-4 text-accent" aria-hidden="true" />
            Awards
          </h3>
          <ul className="space-y-3">
            {awards.map((a) => (
              <li
                key={a}
                className="relative pl-5 text-pretty leading-relaxed text-foreground/90"
              >
                <span
                  className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full bg-accent/60"
                  aria-hidden="true"
                />
                {a}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.05}>
          <h3 className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <BadgeCheck className="h-4 w-4 text-accent" aria-hidden="true" />
            Certifications
          </h3>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li
                key={c}
                className="relative pl-5 text-pretty leading-relaxed text-foreground/90"
              >
                <span
                  className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full bg-accent/60"
                  aria-hidden="true"
                />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

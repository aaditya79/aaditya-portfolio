import * as React from "react";
import { GraduationCap, MapPin } from "lucide-react";

import { education } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Education() {
  return (
    <section
      id="education"
      className="border-t border-border bg-muted/20 py-20 md:py-28"
    >
      <div className="container-measure">
        <SectionHeading index="06" title="Education" />

        <div className="grid gap-5 sm:grid-cols-2">
          {education.map((edu, i) => (
            <Reveal key={edu.school} delay={i * 0.05}>
              <article className="h-full rounded-lg border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/50">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-accent"
                  aria-hidden="true"
                >
                  <GraduationCap className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold tracking-tight text-foreground">
                  {edu.school}
                </h3>
                <p className="mt-1 text-foreground/90">{edu.degree}</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {edu.location}
                  </span>
                  <span aria-hidden="true" className="text-border">
                    •
                  </span>
                  <span className="font-mono text-xs tabular-nums">
                    {edu.period}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

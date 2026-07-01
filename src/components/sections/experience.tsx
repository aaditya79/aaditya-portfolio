import * as React from "react";
import { MapPin } from "lucide-react";

import { experience } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="container-measure py-20 md:py-28">
      <SectionHeading index="03" title="Experience" />

      <ol className="relative border-l border-border pl-6 md:pl-8">
        {experience.map((item, i) => (
          <Reveal
            as="li"
            key={`${item.org}-${item.period}`}
            delay={i * 0.04}
            className="relative pb-12 last:pb-0"
          >
            {/* Timeline node */}
            <span
              className={cn(
                "absolute -left-[calc(1.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-background md:-left-[calc(2rem+5px)]",
                item.current ? "bg-accent" : "bg-border",
              )}
              aria-hidden="true"
            />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {item.role}
                <span className="text-accent"> · {item.org}</span>
              </h3>
              <span className="shrink-0 font-mono text-xs text-muted-foreground tabular-nums">
                {item.period}
              </span>
            </div>

            <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {item.location}
            </p>

            <ul className="mt-4 space-y-2.5">
              {item.bullets.map((bullet, bi) => (
                <li
                  key={bi}
                  className="relative pl-5 text-pretty leading-relaxed text-muted-foreground"
                >
                  <span
                    className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full bg-accent/50"
                    aria-hidden="true"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

import * as React from "react";

import { skills } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  return (
    <section id="skills" className="container-measure py-20 md:py-28">
      <SectionHeading index="05" title="Skills" />

      <div className="space-y-10">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.05}>
            <div className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge className="text-sm">{item}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

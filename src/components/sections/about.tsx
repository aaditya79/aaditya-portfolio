import * as React from "react";

import { about } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="container-measure py-20 md:py-28">
      <SectionHeading index="01" title="About" />
      <Reveal>
        <p className="max-w-measure text-pretty text-lg leading-relaxed text-foreground/90">
          {about}
        </p>
      </Reveal>
    </section>
  );
}

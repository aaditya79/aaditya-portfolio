import * as React from "react";
import { Award, BadgeCheck, type LucideIcon } from "lucide-react";

import { awards, certifications, type Credential } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";

function CredentialCard({
  item,
  Icon,
}: {
  item: Credential;
  Icon: LucideIcon;
}) {
  return (
    <li className="group relative flex items-start gap-4 overflow-hidden rounded-lg border border-border bg-card p-4 transition-colors duration-300 hover:border-accent/50">
      <Spotlight size={260} />
      <span
        className="relative z-10 mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border text-accent transition-colors duration-300 group-hover:border-accent/60"
        aria-hidden="true"
      >
        <Icon className="h-[1.05rem] w-[1.05rem]" />
      </span>
      <div className="relative z-10 min-w-0">
        <p className="text-pretty font-medium leading-snug text-foreground">
          {item.name}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{item.issuer}</p>
      </div>
    </li>
  );
}

export function Awards() {
  return (
    <section id="awards" className="container-measure py-20 md:py-28">
      <SectionHeading index="07" title="Awards & Certifications" />

      <div className="grid gap-10 md:grid-cols-2 md:gap-8">
        <Reveal>
          <h3 className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <Award className="h-4 w-4 text-accent" aria-hidden="true" />
            Awards
          </h3>
          <ul className="space-y-3">
            {awards.map((item) => (
              <CredentialCard key={item.name} item={item} Icon={Award} />
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.05}>
          <h3 className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <BadgeCheck className="h-4 w-4 text-accent" aria-hidden="true" />
            Certifications
          </h3>
          <ul className="space-y-3">
            {certifications.map((item) => (
              <CredentialCard key={item.name} item={item} Icon={BadgeCheck} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

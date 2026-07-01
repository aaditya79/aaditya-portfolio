import * as React from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  index: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  index,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("mb-10 md:mb-14", className)}>
      <div className="flex items-center gap-3 text-sm font-medium text-accent">
        <span className="font-mono tabular-nums">{index}</span>
        <span className="h-px w-10 bg-accent/40" aria-hidden="true" />
      </div>
      <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-measure text-pretty text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

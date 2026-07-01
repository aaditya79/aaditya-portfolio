import * as React from "react";
import { ArrowUpRight, FileText } from "lucide-react";

import { publications, scholarUrl } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Publications() {
  return (
    <section
      id="research"
      className="border-y border-border bg-muted/20 py-20 md:py-28"
    >
      <div className="container-measure">
        <SectionHeading
          index="02"
          title="Research & Publications"
          description="Selected work on the security and adversarial robustness of LLM agents — attacks, defenses, and evaluation."
        />

        <ol className="space-y-4">
          {publications.map((pub, i) => (
            <Reveal as="li" key={pub.href} delay={i * 0.05}>
              <a
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5 font-medium text-accent">
                        <FileText
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                        />
                        {pub.venue}
                      </span>
                      <span aria-hidden="true" className="text-border">
                        •
                      </span>
                      <span className="tabular-nums">{pub.year}</span>
                      <span aria-hidden="true" className="text-border">
                        •
                      </span>
                      <span>{pub.authors}</span>
                    </div>

                    <h3 className="text-pretty font-serif text-lg font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-xl">
                      {pub.title}
                    </h3>
                  </div>

                  <span
                    className="mt-1 shrink-0 rounded-full border border-border p-2 text-muted-foreground transition-all duration-300 group-hover:border-accent group-hover:text-accent group-hover:rotate-0"
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-8">
          <a
            href={scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View all on Google Scholar
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

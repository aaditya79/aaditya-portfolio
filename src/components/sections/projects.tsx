"use client";

import * as React from "react";
import { ChevronDown, FolderGit2, Sparkles } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { featuredProject, earlierProjects } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function Projects() {
  const [open, setOpen] = React.useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="border-t border-border bg-muted/20 py-20 md:py-28"
    >
      <div className="container-measure">
        <SectionHeading index="04" title="Projects" />

        {/* Featured */}
        <Reveal>
          <article className="group relative overflow-hidden rounded-lg border border-border bg-card p-7 transition-colors duration-300 hover:border-accent/60 md:p-9">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-70"
              aria-hidden="true"
            />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Featured
              </span>

              <h3 className="mt-4 text-pretty font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {featuredProject.name}
              </h3>

              {featuredProject.stack ? (
                <p className="mt-2 font-mono text-sm text-accent">
                  {featuredProject.stack}
                </p>
              ) : null}

              <p className="mt-4 max-w-measure text-pretty leading-relaxed text-muted-foreground">
                {featuredProject.description}
              </p>
            </div>
          </article>
        </Reveal>

        {/* Earlier work toggle */}
        <Reveal className="mt-8">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="earlier-projects"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <FolderGit2 className="h-4 w-4" aria-hidden="true" />
            {open ? "Hide earlier projects" : "Show earlier projects"}
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-300",
                open && "rotate-180",
              )}
              aria-hidden="true"
            />
          </button>
        </Reveal>

        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              id="earlier-projects"
              key="earlier"
              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {earlierProjects.map((p) => (
                  <li
                    key={p.name}
                    className="rounded-lg border border-border bg-card p-5 transition-colors duration-300 hover:border-accent/50"
                  >
                    <h4 className="font-semibold tracking-tight text-foreground">
                      {p.name}
                    </h4>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}

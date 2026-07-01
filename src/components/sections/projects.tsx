"use client";

import * as React from "react";
import { ChevronDown, FolderGit2, Github } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { featuredProjects, earlierProjects } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";
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
        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <Reveal as="article" key={project.name} delay={i * 0.05}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/60 md:p-7">
                <Spotlight size={380} />

                <div className="relative z-10 flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-pretty font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                      {project.name}
                    </h3>
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} on GitHub`}
                        title="View on GitHub"
                        className="mt-0.5 shrink-0 rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <Github className="h-4 w-4" aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>

                  {(project.org || project.period) && (
                    <div className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-muted-foreground">
                      {project.org ? (
                        <span className="font-medium text-accent">
                          {project.org}
                        </span>
                      ) : null}
                      {project.org && project.period ? (
                        <span aria-hidden="true" className="text-border">
                          •
                        </span>
                      ) : null}
                      {project.period ? (
                        <span className="font-mono text-xs tabular-nums">
                          {project.period}
                        </span>
                      ) : null}
                    </div>
                  )}

                  <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

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
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-semibold tracking-tight text-foreground">
                        {p.name}
                      </h4>
                      {p.href ? (
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${p.name} on GitHub`}
                          title="View on GitHub"
                          className="shrink-0 rounded-md border border-border p-1.5 text-muted-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                          <Github className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      ) : null}
                    </div>
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

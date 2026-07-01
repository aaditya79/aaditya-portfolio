"use client";

import * as React from "react";
import { ArrowDown, Mail } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { identity, socials } from "@/data/content";
import { Button } from "@/components/ui/button";
import { SocialIcon } from "@/components/icons";
import { InteractiveGrid } from "@/components/interactive-grid";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-24"
      aria-label="Introduction"
    >
      {/* Subtle accent glow */}
      <div
        className="hero-glow pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      />
      {/* Cursor-reactive grid */}
      <InteractiveGrid />

      <div className="container-measure">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to full-time roles · Graduating December 2026
          </motion.p>

          <motion.h1
            variants={item}
            className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-foreground text-balance sm:text-6xl md:text-7xl"
          >
            {identity.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 text-xl font-medium text-foreground/90 sm:text-2xl"
          >
            {identity.title}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 max-w-measure text-pretty text-base text-muted-foreground sm:text-lg"
          >
            {identity.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg">
              <a href={`mailto:${identity.email}`}>
                <Mail />
                Get in touch
              </a>
            </Button>

            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <Button
                  key={s.label}
                  asChild
                  variant="outline"
                  size="icon"
                  className="h-11 w-11"
                >
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                  >
                    <SocialIcon icon={s.icon} className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-accent sm:block"
      >
        <motion.span
          animate={reduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex"
        >
          <ArrowDown className="h-5 w-5" aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
}

import * as React from "react";
import { Mail } from "lucide-react";

import { identity, socials } from "@/data/content";
import { SocialIcon } from "@/components/icons";

export function Footer() {
  const year = "2026";

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-measure py-14">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-serif text-lg font-semibold tracking-tight text-foreground">
              {identity.name}
            </p>
            <a
              href={`mailto:${identity.email}`}
              className="mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {identity.email}
            </a>
          </div>

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <SocialIcon icon={s.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            © {year} {identity.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

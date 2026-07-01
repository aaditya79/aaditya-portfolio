"use client";

import * as React from "react";
import { Check, Copy, Mail } from "lucide-react";

import { identity } from "@/data/content";
import { cn } from "@/lib/utils";

/**
 * Shows the email address as a click-to-copy button with a quiet "Copied"
 * confirmation, plus a mailto affordance for composing directly.
 */
export function CopyEmail({ className }: { className?: string }) {
  const [copied, setCopied] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  React.useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(identity.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable; the mailto link still works */
    }
  };

  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  return (
    <div className={cn("inline-flex items-center gap-1", className)}>
      <button
        type="button"
        onClick={copy}
        aria-label={
          copied
            ? "Email address copied to clipboard"
            : `Copy email address ${identity.email}`
        }
        className={cn(
          "inline-flex items-center gap-2 rounded-md px-1.5 py-1 text-sm text-muted-foreground transition-colors hover:text-accent",
          focusRing,
        )}
      >
        {copied ? (
          <Check className="h-4 w-4 text-accent" aria-hidden="true" />
        ) : (
          <Copy className="h-4 w-4" aria-hidden="true" />
        )}
        <span aria-live="polite">{copied ? "Copied" : identity.email}</span>
      </button>

      <a
        href={`mailto:${identity.email}`}
        aria-label="Compose an email"
        title="Compose an email"
        className={cn(
          "inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-accent",
          focusRing,
        )}
      >
        <Mail className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  );
}

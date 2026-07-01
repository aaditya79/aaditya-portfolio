import * as React from "react";
import { Github, Linkedin, Mail, GraduationCap } from "lucide-react";

import type { SocialLink } from "@/data/content";

/** Google Scholar has no lucide glyph; use the graduation cap as a tasteful stand-in. */
export function SocialIcon({
  icon,
  className,
}: {
  icon: SocialLink["icon"];
  className?: string;
}) {
  switch (icon) {
    case "linkedin":
      return <Linkedin className={className} aria-hidden="true" />;
    case "github":
      return <Github className={className} aria-hidden="true" />;
    case "scholar":
      return <GraduationCap className={className} aria-hidden="true" />;
    case "mail":
      return <Mail className={className} aria-hidden="true" />;
    default:
      return null;
  }
}

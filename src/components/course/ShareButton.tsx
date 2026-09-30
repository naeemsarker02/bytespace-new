"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/icons";

// Client Component: uses the browser share sheet when there is one, otherwise copies the page link.
export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: document.title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // The person closed the share sheet or the browser blocked clipboard access: nothing to do.
    }
  }

  return (
    <Button size="sm" onClick={handleShare} className="shrink-0">
      <Icon name="share" />
      <span aria-live="polite">{copied ? "Link copied" : "Share"}</span>
    </Button>
  );
}

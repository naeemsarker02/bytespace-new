"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

// Client Component: toggles between Follow and Following (no backend, so nothing is saved).
export default function FollowButton() {
  const [following, setFollowing] = useState(false);
  return (
    <Button onClick={() => setFollowing((value) => !value)}>
      <span aria-live="polite">{following ? "Following" : "Follow"}</span>
    </Button>
  );
}

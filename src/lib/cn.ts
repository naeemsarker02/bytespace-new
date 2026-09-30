// Tiny helper to join class names and skip falsy values:
// cn("a", isActive && "b") -> "a b" when isActive, "a" otherwise.
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

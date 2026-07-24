import { cn } from "@/lib/cn";

/** Small "live" indicator dot — pure CSS ping animation, respects prefers-reduced-motion globally. */
export default function StatusPulse({ className }: { className?: string }) {
  return (
    <span className={cn("relative flex h-2 w-2", className)} aria-hidden="true">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
    </span>
  );
}

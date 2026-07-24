import { cn } from "@/lib/cn";

const TILE = `
<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160">
  <g fill="none" stroke="#F1BA18" stroke-width="1">
    <path d="M0 40 H50 V10 H160" />
    <path d="M20 160 V110 H90 V70 H160" />
    <path d="M0 130 H30 V90 H70" />
    <path d="M110 0 V30 H140 V90" />
  </g>
  <g fill="#F1BA18">
    <circle cx="50" cy="40" r="2.6" />
    <circle cx="50" cy="10" r="2.6" />
    <circle cx="90" cy="70" r="2.6" />
    <circle cx="20" cy="110" r="2.6" />
    <circle cx="70" cy="90" r="2.6" />
    <circle cx="140" cy="30" r="2.6" />
    <circle cx="110" cy="0" r="2.6" />
  </g>
</svg>`;

const bgImage = `url("data:image/svg+xml,${encodeURIComponent(TILE)}")`;

/** Faint, static circuit-board texture for dark section backgrounds. Pure CSS — no JS cost. */
export default function CircuitPattern({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 opacity-[0.05]", className)}
      style={{ backgroundImage: bgImage, backgroundSize: "160px 160px" }}
    />
  );
}

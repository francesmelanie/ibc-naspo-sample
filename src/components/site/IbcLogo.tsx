type Props = { className?: string };

/**
 * Text-based IBC wordmark approximating the innovativebc.io header treatment.
 * Production should swap this for the approved logo asset (see brand guidelines).
 */
export function IbcLogo({ className }: Props) {
  return (
    <a href="/" className={`group inline-flex flex-col leading-none ${className ?? ""}`}>
      <span className="font-display text-[1.35rem] font-bold tracking-[0.04em]">
        <span className="text-gradient-brand">INN</span>
        <span style={{ color: "var(--ibc-navy)" }}>O</span>
        <span className="text-gradient-brand">VATIVE</span>
      </span>
      <span
        className="font-display text-[0.7rem] font-medium tracking-[0.02em]"
        style={{ color: "var(--ibc-navy)", opacity: 0.7 }}
      >
        Business Concepts (IBC)
      </span>
    </a>
  );
}

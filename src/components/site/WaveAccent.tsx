type Props = { className?: string };

/**
 * Faint IBC wave / amoeba accent. Decorative only — never put behind dense text.
 * Inspired by the cyan→purple wave on innovativebc.io and the brand guidelines pattern page.
 */
export function WaveAccent({ className }: Props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 600"
      className={className}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="ibc-wave-grad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#00afe8" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#6b9acf" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#743bbc" stopOpacity="0.45" />
        </linearGradient>
        <linearGradient id="ibc-wave-grad-2" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#d4e5f6" stopOpacity="0" />
          <stop offset="50%" stopColor="#00afe8" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#743bbc" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      {[...Array(28)].map((_, i) => {
        const offset = i * 4;
        return (
          <path
            key={i}
            d={`M -50 ${260 + offset * 0.6}
                C 320 ${180 + offset * 0.2}, 720 ${380 + offset * 0.4}, 1080 ${230 + offset * 0.5}
                S 1500 ${320 + offset * 0.3}, 1500 ${320 + offset * 0.3}`}
            fill="none"
            stroke={i % 2 === 0 ? "url(#ibc-wave-grad)" : "url(#ibc-wave-grad-2)"}
            strokeWidth="0.6"
            strokeOpacity={0.5 - i * 0.012}
          />
        );
      })}
    </svg>
  );
}

type Props = { className?: string };

/**
 * Subtle IBC wave accent — a few hairline strokes only.
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
          <stop offset="0%" stopColor="#00afe8" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#743bbc" stopOpacity="0.45" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const o = i * 14;
        return (
          <path
            key={i}
            d={`M -50 ${260 + o} C 320 ${180 + o * 0.4}, 720 ${380 + o * 0.6}, 1080 ${230 + o * 0.5} S 1500 ${320 + o * 0.4}, 1500 ${320 + o * 0.4}`}
            fill="none"
            stroke="url(#ibc-wave-grad)"
            strokeWidth="0.6"
            strokeOpacity={0.45 - i * 0.06}
          />
        );
      })}
    </svg>
  );
}

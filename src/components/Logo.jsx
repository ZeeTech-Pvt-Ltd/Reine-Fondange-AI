// Brand monogram: a gold serif "R" on a navy badge.
export default function Logo() {
  return (
    <svg className="logo__mark" viewBox="0 0 32 32" aria-hidden="true">
      <defs>
        <linearGradient id="logo-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f0cd6a" />
          <stop offset="1" stopColor="#d4a017" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="#13263d" stroke="#c9a227" strokeWidth="1.2" />
      <text
        x="16"
        y="22.5"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize="20"
        fill="url(#logo-gold)"
      >
        R
      </text>
    </svg>
  );
}

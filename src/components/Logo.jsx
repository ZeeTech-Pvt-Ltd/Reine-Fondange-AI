// Regal monogram: a gold three-point crown on a wine badge ("Reine" = queen).
export default function Logo() {
  return (
    <svg className="logo__mark" viewBox="0 0 32 32" aria-hidden="true">
      <defs>
        <linearGradient id="logo-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e8c96f" />
          <stop offset="1" stopColor="#b8862f" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="#13263d" stroke="#c9a227" strokeWidth="1.2" />
      <g fill="url(#logo-gold)" stroke="none">
        <rect x="6" y="16.5" width="20" height="3.5" rx="1.2" />
        <path d="M8 16.5V10l4.5 3.5L16 6l3.5 7.5L24 10v6.5z" />
      </g>
      <circle cx="9.5" cy="8.6" r="1.3" fill="#c9a227" />
      <circle cx="16" cy="5" r="1.3" fill="#c9a227" />
      <circle cx="22.5" cy="8.6" r="1.3" fill="#c9a227" />
    </svg>
  );
}

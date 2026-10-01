// マスコット「保管庫くん」: 中からこっそり覗いている段ボール箱
export default function Mascot({ size = 120, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden="true" className={className}>
      <ellipse cx="60" cy="108" rx="34" ry="5" fill="currentColor" opacity=".12" />
      {/* 箱 */}
      <path d="M22 48h76v50a6 6 0 0 1-6 6H28a6 6 0 0 1-6-6z" fill="var(--accent)" />
      <path d="M22 48h76v14H22z" fill="var(--accent-ink)" opacity=".55" />
      {/* 開いたふた */}
      <path d="M22 48 10 34l40-6 10 20z" fill="var(--accent-2)" />
      <path d="M98 48l12-14-40-6-10 20z" fill="color-mix(in oklab, var(--accent-2) 75%, #fff)" />
      {/* 目（ふたの隙間から覗く） */}
      <g>
        <ellipse className="chx-eye" cx="48" cy="72" rx="7" ry="8" fill="#fff" />
        <ellipse className="chx-eye" cx="72" cy="72" rx="7" ry="8" fill="#fff" />
        <circle cx="50" cy="73" r="3.4" fill="#18181b" />
        <circle cx="74" cy="73" r="3.4" fill="#18181b" />
      </g>
      {/* ラベル */}
      <rect x="44" y="86" width="32" height="10" rx="2" fill="#fff" opacity=".9" />
      <path d="M48 91h24" stroke="var(--accent-ink)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

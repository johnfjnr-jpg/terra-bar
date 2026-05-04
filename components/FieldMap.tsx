interface FieldMapProps {
  accent?: string
  label?: string
  height?: number | string
}

const TREE_DOTS = Array.from({ length: 28 }, (_, i) => ({
  cx: ((i * 53 + 17) % 380) + 10,
  cy: ((i * 31 + 9) % 130) + 30,
}))

export default function FieldMap({
  accent = 'var(--tb-green)',
  label = 'FIELD NOTE',
  height = 220,
}: FieldMapProps) {
  return (
    <svg
      viewBox="0 0 400 240"
      width="100%"
      height={height}
      preserveAspectRatio="none"
      style={{ display: 'block' }}
    >
      <rect width="400" height="240" fill="var(--tb-cream-deep)" />
      <g stroke={accent} fill="none" strokeWidth="0.6" opacity="0.6">
        <path d="M-10 80 Q60 60 130 90 T280 100 T410 80" />
        <path d="M-10 110 Q60 95 140 120 T290 130 T410 110" />
        <path d="M-10 150 Q70 135 160 158 T310 168 T410 150" />
        <path d="M-10 190 Q80 175 170 200 T320 210 T410 190" />
      </g>
      <path
        d="M-10 200 Q40 170 90 185 Q140 200 180 175 Q230 150 290 165 Q340 175 410 155 L410 250 L-10 250 Z"
        fill={accent}
        opacity="0.10"
        stroke={accent}
        strokeWidth="0.8"
      />
      <path
        d="M210 20 Q200 60 220 100 Q240 140 215 175 Q200 200 230 230"
        fill="none"
        stroke={accent}
        strokeWidth="1"
        opacity="0.7"
        strokeDasharray="3 2"
      />
      <g fill={accent} opacity="0.55">
        {TREE_DOTS.map((d, i) => (
          <circle key={i} cx={d.cx} cy={d.cy} r="1.5" />
        ))}
      </g>
      <g transform="translate(260 130)">
        <circle r="9" fill="var(--tb-cream)" stroke={accent} strokeWidth="1.5" />
        <circle r="3" fill={accent} />
        <text x="14" y="2" fontSize="9" fontFamily="var(--tb-mono)" fill={accent}>FARM</text>
      </g>
      <g transform="translate(120 165)">
        <rect x="-6" y="-6" width="12" height="12" fill="var(--tb-cream)" stroke={accent} strokeWidth="1.5" />
        <line x1="-3" y1="0" x2="3" y2="0" stroke={accent} strokeWidth="1.5" />
        <line x1="0" y1="-3" x2="0" y2="3" stroke={accent} strokeWidth="1.5" />
        <text x="-44" y="-10" fontSize="9" fontFamily="var(--tb-mono)" fill={accent}>FORAGE</text>
      </g>
      <path d="M120 165 Q190 145 260 130" fill="none" stroke={accent} strokeWidth="0.8" strokeDasharray="2 3" />
      <g transform="translate(20 215)">
        <line x1="0" y1="0" x2="60" y2="0" stroke={accent} strokeWidth="1" />
        <line x1="0" y1="-3" x2="0" y2="3" stroke={accent} strokeWidth="1" />
        <line x1="30" y1="-2" x2="30" y2="2" stroke={accent} strokeWidth="1" />
        <line x1="60" y1="-3" x2="60" y2="3" stroke={accent} strokeWidth="1" />
        <text x="0" y="14" fontSize="7" fontFamily="var(--tb-mono)" fill={accent}>0</text>
        <text x="55" y="14" fontSize="7" fontFamily="var(--tb-mono)" fill={accent}>50 KM</text>
      </g>
      <g transform="translate(380 22)">
        <text textAnchor="end" fontSize="8" fontFamily="var(--tb-mono)" fill={accent} letterSpacing="1">
          {label}
        </text>
      </g>
      {([[10, 10], [390, 10], [10, 230], [390, 230]] as [number, number][]).map(([x, y], i) => (
        <g key={i} stroke={accent} strokeWidth="0.8">
          <line x1={x - 4} y1={y} x2={x + 4} y2={y} />
          <line x1={x} y1={y - 4} x2={x} y2={y + 4} />
        </g>
      ))}
    </svg>
  )
}

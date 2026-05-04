interface QRMotifProps {
  size?: number
  color?: string
  fill?: string
}

function computeQRCells(): { x: number; y: number }[] {
  const out: { x: number; y: number }[] = []
  const seed = 7
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      const v = ((x * 13 + y * 7 + seed * (x + 1)) ^ (y * 3)) & 1
      if (v) out.push({ x, y })
    }
  }
  return out
}

function computeTicks() {
  const ticks = []
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2
    const r1 = 47
    const r2 = i % 6 === 0 ? 43 : 45
    ticks.push({
      x1: 50 + Math.cos(a) * r1,
      y1: 50 + Math.sin(a) * r1,
      x2: 50 + Math.cos(a) * r2,
      y2: 50 + Math.sin(a) * r2,
      key: i,
    })
  }
  return ticks
}

const QR_CELLS = computeQRCells()
const TICKS = computeTicks()

export default function QRMotif({
  size = 96,
  color = 'var(--tb-green)',
  fill = 'var(--tb-cream)',
}: QRMotifProps) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={{ display: 'block' }}>
      <circle cx="50" cy="50" r="48" fill={fill} stroke={color} strokeWidth="0.6" />
      <circle cx="50" cy="50" r="40" fill="none" stroke={color} strokeWidth="0.4" strokeDasharray="0.5 1.5" />
      <circle cx="50" cy="50" r="34" fill="none" stroke={color} strokeWidth="0.3" />
      {TICKS.map(t => (
        <line key={t.key} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke={color} strokeWidth="0.5" />
      ))}
      <text x="50" y="11" textAnchor="middle" fontSize="3.2" fontFamily="var(--tb-mono)" fill={color}>N</text>
      <text x="89" y="51.5" textAnchor="middle" fontSize="3.2" fontFamily="var(--tb-mono)" fill={color}>E</text>
      <text x="50" y="92" textAnchor="middle" fontSize="3.2" fontFamily="var(--tb-mono)" fill={color}>S</text>
      <text x="11" y="51.5" textAnchor="middle" fontSize="3.2" fontFamily="var(--tb-mono)" fill={color}>W</text>
      <g transform="translate(28 28)">
        <rect width="44" height="44" fill={fill} />
        {([[0, 0], [33, 0], [0, 33]] as [number, number][]).map(([x, y], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <rect width="11" height="11" fill={color} />
            <rect x="2" y="2" width="7" height="7" fill={fill} />
            <rect x="3.5" y="3.5" width="4" height="4" fill={color} />
          </g>
        ))}
        {QR_CELLS.map((c, i) =>
          (c.x < 4 && c.y < 4) || (c.x > 6 && c.y < 4) || (c.x < 4 && c.y > 6) ? null : (
            <rect key={i} x={c.x * 4 + 4} y={c.y * 4 + 4} width="3" height="3" fill={color} />
          )
        )}
      </g>
    </svg>
  )
}

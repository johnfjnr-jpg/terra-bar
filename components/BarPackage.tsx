import type { Bar } from '@/data/bars'

interface BarPackageProps {
  bar: Bar
  width?: number
  height?: number
}

export default function BarPackage({ bar, width = 220, height = 360 }: BarPackageProps) {
  const spokeAngles = Array.from({ length: 12 }, (_, i) => (i / 12) * Math.PI * 2)

  return (
    <div
      style={{
        width,
        height,
        background: 'var(--tb-cream)',
        border: '1px solid color-mix(in srgb, var(--tb-ink) 18%, transparent)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 18px',
        fontFamily: 'var(--tb-body)',
        boxShadow: '0 12px 30px -20px rgba(45,74,45,.4), 0 1px 0 rgba(0,0,0,.04)',
        backgroundImage: 'repeating-linear-gradient(43deg, rgba(45,74,45,.012) 0 1px, transparent 1px 4px)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 8,
          background: bar.accent,
        }}
      />
      <div
        style={{
          fontFamily: 'var(--tb-display)',
          fontWeight: 700,
          color: 'var(--tb-green)',
          letterSpacing: '0.18em',
          fontSize: 11,
          marginTop: 4,
        }}
      >
        TERRA BAR
      </div>
      <div
        style={{
          fontFamily: 'var(--tb-mono)',
          fontSize: 9,
          color: 'var(--tb-gold)',
          letterSpacing: '0.2em',
          marginTop: 2,
        }}
      >
        EAT SOMEWHERE NEW
      </div>

      <div style={{ marginTop: 28 }}>
        <div
          style={{
            fontFamily: 'var(--tb-display)',
            fontWeight: 600,
            fontSize: 26,
            lineHeight: 1.05,
            color: 'var(--tb-green)',
          }}
        >
          {bar.name}
        </div>
        <div
          style={{
            fontFamily: 'var(--tb-mono)',
            fontSize: 10,
            letterSpacing: '0.16em',
            color: bar.accent,
            marginTop: 10,
            textTransform: 'uppercase',
          }}
        >
          {bar.region}
        </div>
        <div
          style={{
            fontFamily: 'var(--tb-display)',
            fontStyle: 'italic',
            fontSize: 14,
            color: 'var(--tb-ink-soft)',
            marginTop: 8,
            lineHeight: 1.3,
          }}
        >
          with {bar.pairing.toLowerCase()}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 80,
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: 0.85,
        }}
      >
        <svg viewBox="0 0 100 100" width="90" height="90">
          <circle cx="50" cy="50" r="42" fill="none" stroke={bar.accentHex} strokeWidth="0.6" />
          <circle cx="50" cy="50" r="32" fill="none" stroke={bar.accentHex} strokeWidth="0.4" strokeDasharray="1 2" />
          <circle cx="50" cy="50" r="22" fill="none" stroke={bar.accentHex} strokeWidth="0.4" />
          <circle cx="50" cy="50" r="3" fill={bar.accentHex} />
          {spokeAngles.map((a, i) => (
            <line
              key={i}
              x1={50 + Math.cos(a) * 40}
              y1={50 + Math.sin(a) * 40}
              x2={50 + Math.cos(a) * 44}
              y2={50 + Math.sin(a) * 44}
              stroke={bar.accentHex}
              strokeWidth="0.6"
            />
          ))}
        </svg>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 20,
          left: 18,
          right: 18,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          borderTop: '1px solid color-mix(in srgb, var(--tb-ink) 15%, transparent)',
          paddingTop: 10,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--tb-mono)',
              fontSize: 9,
              letterSpacing: '0.15em',
              color: 'var(--tb-ink-mute)',
            }}
          >
            CACAO
          </div>
          <div
            style={{
              fontFamily: 'var(--tb-display)',
              fontSize: 22,
              fontWeight: 600,
              color: 'var(--tb-green)',
            }}
          >
            {bar.cacao}%
          </div>
        </div>
        <div
          style={{
            fontFamily: 'var(--tb-mono)',
            fontSize: 8,
            letterSpacing: '0.15em',
            color: 'var(--tb-ink-mute)',
            textAlign: 'right',
          }}
        >
          80 G · NET WT
          <br />
          VEGAN · GF
        </div>
      </div>
    </div>
  )
}

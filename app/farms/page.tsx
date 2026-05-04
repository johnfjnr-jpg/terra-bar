import { BARS } from '@/data/bars'
import FieldMap from '@/components/FieldMap'
import Footer from '@/components/Footer'

export default function FarmsPage() {
  return (
    <div>
      <div className="tb-page">
        <section className="tb-section" style={{ borderBottom: 0 }}>
          <div className="tb-section-head">
            <div className="tb-eyebrow">Origins · 04 farms · 03 continents</div>
            <h2>The people behind the cacao.</h2>
          </div>
          <p
            style={{
              maxWidth: 720,
              color: 'var(--tb-ink-soft)',
              fontSize: 17,
              lineHeight: 1.6,
              marginBottom: 56,
            }}
          >
            We don&apos;t write generically about &ldquo;farmers&rdquo;. We name them. We film them
            in the season the cacao was harvested. Every bar&apos;s QR opens to a real video, real
            light, real hands.
          </p>

          <div className="tb-farms-grid">
            {BARS.map(b => (
              <div className="tb-farm-card" key={b.id}>
                <div className="map-side">
                  <FieldMap accent={b.accentHex} label={b.region.toUpperCase()} height="100%" />
                </div>
                <div className="info">
                  <div style={{ height: 4, width: 32, background: b.accentHex }} />
                  <div
                    style={{
                      fontFamily: 'var(--tb-mono)',
                      fontSize: 10,
                      letterSpacing: '0.14em',
                      color: b.accentHex,
                      textTransform: 'uppercase',
                    }}
                  >
                    {b.region.toUpperCase()}
                  </div>
                  <h3>{b.village}</h3>
                  <div className="farmer">— {b.farmer}</div>
                  <dl>
                    <dt>Pairing</dt><dd>{b.pairing}</dd>
                    <dt>Forage</dt><dd>{b.distance} from farm</dd>
                    <dt>Harvest</dt><dd>{b.harvest}</dd>
                    <dt>Elevation</dt><dd>{b.elev}</dd>
                  </dl>
                  <div className="play">
                    ▶ Watch the harvest film · 2:14
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

import { BARS } from '@/data/bars'
import BarPackage from '@/components/BarPackage'
import QRMotif from '@/components/QRMotif'
import Footer from '@/components/Footer'

export default function ShopPage() {
  return (
    <div>
      <div className="tb-page">
        <section className="tb-section" style={{ borderBottom: 0 }}>
          <div className="tb-section-head">
            <div className="tb-eyebrow">Shop · ships UK &amp; SG</div>
            <h2>Take a place home.</h2>
          </div>

          {/* Discovery box hero */}
          <div className="tb-shop-hero">
            <div>
              <div
                style={{
                  fontFamily: 'var(--tb-display)',
                  fontSize: 36,
                  fontWeight: 500,
                  color: 'var(--tb-green)',
                  lineHeight: 1.05,
                }}
              >
                Discovery box · all four origins.
              </div>
              <p
                style={{
                  fontSize: 16,
                  color: 'var(--tb-ink-soft)',
                  marginTop: 16,
                  maxWidth: 460,
                  marginBottom: 0,
                }}
              >
                One bar from each launch origin, packed in uncoated recycled board with a folded
                field-notes card. The way to start.
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: 14,
                  alignItems: 'baseline',
                  marginTop: 24,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--tb-display)',
                    fontSize: 38,
                    fontWeight: 500,
                    color: 'var(--tb-green)',
                  }}
                >
                  £26
                </span>
                <span
                  style={{
                    fontFamily: 'var(--tb-mono)',
                    fontSize: 11,
                    letterSpacing: '0.14em',
                    color: 'var(--tb-ink-mute)',
                    textTransform: 'uppercase',
                  }}
                >
                  Free UK Shipping
                </span>
              </div>
              <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
                <button className="tb-btn">Add discovery box →</button>
                <button className="tb-btn tb-btn-ghost">Make it a gift</button>
              </div>
            </div>

            <div
              className="tb-shop-fan-container"
              style={{
                background: 'var(--tb-cream-deep)',
                border: '1px solid color-mix(in srgb, var(--tb-ink) 14%, transparent)',
              }}
            >
              {BARS.map((b, i) => (
                <div
                  key={b.id}
                  style={{
                    transform: `rotate(${(i - 1.5) * 4}deg) translateY(${i % 2 === 0 ? 0 : 12}px)`,
                    filter: 'drop-shadow(0 18px 28px rgba(45,74,45,.18))',
                    marginLeft: i === 0 ? 0 : -36,
                    zIndex: 4 - Math.abs(i - 1.5),
                  }}
                >
                  <BarPackage bar={b} width={150} height={250} />
                </div>
              ))}
              <div style={{ position: 'absolute', top: 20, right: 20 }}>
                <QRMotif size={68} />
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div className="tb-shop-products">
            {BARS.map(b => (
              <div className="tb-shop-card" key={b.id}>
                <div className="visual">
                  <BarPackage bar={b} width={140} height={230} />
                </div>
                <div style={{ height: 3, width: 32, background: b.accentHex }} />
                <h4>{b.name}</h4>
                <div
                  style={{
                    fontFamily: 'var(--tb-mono)',
                    fontSize: 10,
                    letterSpacing: '0.14em',
                    color: b.accentHex,
                    textTransform: 'uppercase',
                  }}
                >
                  {b.region.toUpperCase()} · {b.cacao}%
                </div>
                <div className="desc">with {b.pairing.toLowerCase()}.</div>
                <div className="price-row">
                  <span className="price">£{b.priceGBP.toFixed(2)}</span>
                  <button
                    style={{
                      background: 'transparent',
                      border: '1px solid var(--tb-green)',
                      color: 'var(--tb-green)',
                      padding: '8px 14px',
                      fontFamily: 'var(--tb-mono)',
                      fontSize: 10,
                      letterSpacing: '0.14em',
                      cursor: 'pointer',
                      borderRadius: 0,
                      textTransform: 'uppercase',
                    }}
                  >
                    ADD →
                  </button>
                </div>
              </div>
            ))}

            {/* Harvest subscription */}
            <div
              className="tb-shop-card"
              style={{ background: 'var(--tb-green)', color: 'var(--tb-cream)' }}
            >
              <div
                className="visual"
                style={{
                  background: 'var(--tb-green-deep)',
                  border: '1px solid color-mix(in srgb, var(--tb-cream) 18%, transparent)',
                }}
              >
                <QRMotif size={120} color="var(--tb-gold-soft)" fill="var(--tb-green-deep)" />
              </div>
              <div style={{ height: 3, width: 32, background: 'var(--tb-gold-soft)' }} />
              <h4 style={{ color: 'var(--tb-cream)' }}>Harvest subscription</h4>
              <div
                style={{
                  fontFamily: 'var(--tb-mono)',
                  fontSize: 10,
                  letterSpacing: '0.14em',
                  color: 'var(--tb-gold-soft)',
                  textTransform: 'uppercase',
                }}
              >
                Quarterly · 4 Bars
              </div>
              <div
                className="desc"
                style={{ color: 'color-mix(in srgb, var(--tb-cream) 80%, transparent)' }}
              >
                One curated harvest box at the start of every season. Sometimes a limited bar.
              </div>
              <div
                className="price-row"
                style={{
                  borderTopColor: 'color-mix(in srgb, var(--tb-cream) 30%, transparent)',
                }}
              >
                <span className="price" style={{ color: 'var(--tb-cream)' }}>£24/qtr</span>
                <button
                  style={{
                    background: 'var(--tb-gold-soft)',
                    border: 0,
                    color: 'var(--tb-green-deep)',
                    padding: '8px 14px',
                    fontFamily: 'var(--tb-mono)',
                    fontSize: 10,
                    letterSpacing: '0.14em',
                    cursor: 'pointer',
                    borderRadius: 0,
                    textTransform: 'uppercase',
                  }}
                >
                  SUBSCRIBE →
                </button>
              </div>
            </div>

            {/* Limited edition */}
            <div className="tb-shop-card">
              <div className="visual" style={{ flexDirection: 'column', gap: 12 }}>
                <div
                  style={{
                    fontFamily: 'var(--tb-display)',
                    fontSize: 60,
                    color: 'var(--tb-terracotta)',
                    lineHeight: 1,
                    fontStyle: 'italic',
                  }}
                >
                  04
                </div>
                <div
                  style={{
                    fontFamily: 'var(--tb-mono)',
                    fontSize: 10,
                    letterSpacing: '0.14em',
                    color: 'var(--tb-ink-mute)',
                    textTransform: 'uppercase',
                  }}
                >
                  Numbered · Limited
                </div>
              </div>
              <div style={{ height: 3, width: 32, background: 'var(--tb-terracotta)' }} />
              <h4>Limited harvest 01</h4>
              <div
                style={{
                  fontFamily: 'var(--tb-mono)',
                  fontSize: 10,
                  letterSpacing: '0.14em',
                  color: 'var(--tb-terracotta)',
                  textTransform: 'uppercase',
                }}
              >
                Single-farm · Numbered edition
              </div>
              <div className="desc">
                A 200-bar release from one farm, one harvest, one season. Find out first via the
                newsletter.
              </div>
              <div className="price-row">
                <span className="price" style={{ fontSize: 16 }}>Notify me</span>
                <button
                  style={{
                    background: 'transparent',
                    border: '1px solid var(--tb-terracotta)',
                    color: 'var(--tb-terracotta)',
                    padding: '8px 14px',
                    fontFamily: 'var(--tb-mono)',
                    fontSize: 10,
                    letterSpacing: '0.14em',
                    cursor: 'pointer',
                    borderRadius: 0,
                    textTransform: 'uppercase',
                  }}
                >
                  NOTIFY →
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

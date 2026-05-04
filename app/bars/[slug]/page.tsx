import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BARS } from '@/data/bars'
import BarPackage from '@/components/BarPackage'
import QRMotif from '@/components/QRMotif'
import Footer from '@/components/Footer'

export function generateStaticParams() {
  return BARS.map(bar => ({ slug: bar.slug }))
}

export default async function BarDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const bar = BARS.find(b => b.slug === slug)
  if (!bar) notFound()

  const activeIndex = BARS.indexOf(bar)

  return (
    <div>
      <div className="tb-page">
        <section style={{ padding: '40px 0 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div className="tb-eyebrow">The range / 04</div>
            <div
              style={{
                fontFamily: 'var(--tb-mono)',
                fontSize: 11,
                letterSpacing: '0.14em',
                color: 'var(--tb-ink-mute)',
                textTransform: 'uppercase',
              }}
            >
              SHOWING 0{activeIndex + 1} / 04
            </div>
          </div>
        </section>

        <section className="tb-bar-detail">
          <div
            className="hero-pkg"
            style={{
              background: 'var(--tb-cream-deep)',
              border: '1px solid color-mix(in srgb, var(--tb-ink) 14%, transparent)',
            }}
          >
            <BarPackage bar={bar} width={300} height={490} />
            <div style={{ position: 'absolute', top: 20, left: 20 }}>
              <QRMotif size={70} color={bar.accentHex} />
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 16,
                left: 20,
                fontFamily: 'var(--tb-mono)',
                fontSize: 10,
                letterSpacing: '0.14em',
                color: 'var(--tb-ink-mute)',
              }}
            >
              SCAN · MEET {bar.farmer.toUpperCase()}
            </div>
          </div>

          <div>
            <div className="tb-eyebrow" style={{ color: bar.accentHex }}>
              {bar.region} · {bar.village}
            </div>
            <h1>{bar.name}</h1>
            <p
              style={{
                fontFamily: 'var(--tb-display)',
                fontStyle: 'italic',
                fontSize: 22,
                color: 'var(--tb-ink-soft)',
                marginTop: 18,
                marginBottom: 0,
              }}
            >
              with {bar.pairing.toLowerCase()}.
            </p>

            <div
              style={{
                fontFamily: 'var(--tb-mono)',
                fontSize: 11,
                letterSpacing: '0.14em',
                color: 'var(--tb-ink-mute)',
                marginTop: 32,
                marginBottom: 8,
                textTransform: 'uppercase',
              }}
            >
              Tasting Notes
            </div>
            <div className="tasting">
              {bar.notes.map((n, i) => (
                <div className="note" key={i}>{n}</div>
              ))}
            </div>

            <div className="specs">
              <div className="spec"><dt>Cacao</dt><dd>{bar.cacao}%</dd></div>
              <div className="spec"><dt>Farmer</dt><dd style={{ fontStyle: 'italic' }}>{bar.farmer}</dd></div>
              <div className="spec"><dt>Harvest</dt><dd>{bar.harvest}</dd></div>
              <div className="spec"><dt>Forage distance</dt><dd>{bar.distance}</dd></div>
              <div className="spec"><dt>Elevation</dt><dd>{bar.elev}</dd></div>
              <div className="spec"><dt>Format</dt><dd>80g · vegan</dd></div>
            </div>

            <div style={{ marginTop: 36, display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
              <button className="tb-btn">Add to bag · £{bar.priceGBP.toFixed(2)}</button>
              <button className="tb-btn tb-btn-ghost">Add to discovery box</button>
            </div>
          </div>
        </section>

        {/* Origin switcher */}
        <section style={{ paddingBottom: 96 }}>
          <div className="tb-eyebrow" style={{ marginBottom: 20 }}>Switch origin</div>
          <div className="tb-origin-switcher">
            {BARS.map((b, i) => (
              <Link
                key={b.id}
                href={`/bars/${b.slug}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  padding: 20,
                  background: i === activeIndex ? 'var(--tb-green)' : 'var(--tb-cream-deep)',
                  color: i === activeIndex ? 'var(--tb-cream)' : 'var(--tb-ink)',
                  border: '1px solid color-mix(in srgb, var(--tb-ink) 14%, transparent)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                <div style={{ height: 4, width: 32, background: b.accentHex }} />
                <div
                  style={{
                    fontFamily: 'var(--tb-mono)',
                    fontSize: 10,
                    letterSpacing: '0.14em',
                    opacity: 0.7,
                    textTransform: 'uppercase',
                  }}
                >
                  0{i + 1} · {b.region.toUpperCase()}
                </div>
                <div style={{ fontFamily: 'var(--tb-display)', fontSize: 22, fontWeight: 500 }}>
                  {b.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--tb-display)',
                    fontStyle: 'italic',
                    fontSize: 13,
                    opacity: 0.85,
                  }}
                >
                  {b.pairing}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

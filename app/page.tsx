import Link from 'next/link'
import { BARS } from '@/data/bars'
import QRMotif from '@/components/QRMotif'
import FieldMap from '@/components/FieldMap'
import BarPackage from '@/components/BarPackage'
import Footer from '@/components/Footer'

export default function HomePage() {
  const featuredBar = BARS[0]
  const secondBar = BARS[2]

  return (
    <div>
      <div className="tb-page">

        {/* HERO */}
        <section className="tb-hero">
          <div>
            <div className="tb-eyebrow">Single-origin · Regenerative · Within 50 km</div>
            <h1>
              A map<br />you can <em>eat</em>.
            </h1>
            <p className="tb-hero-lede">
              Every Terra Bar pairs single-origin cacao with an ingredient foraged within 50 km of
              the same farm. Not a flavour combination — a place.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/shop" className="tb-btn">Shop the range →</Link>
              <Link href="/farms" className="tb-btn tb-btn-ghost">Meet the farmers</Link>
            </div>
            <div className="tb-hero-meta">
              <div className="tb-meta-item">
                <div className="num">4</div>
                <div className="lbl">Origins</div>
              </div>
              <div className="tb-meta-item">
                <div className="num">50<span style={{ fontSize: 18 }}>km</span></div>
                <div className="lbl">Pairing radius</div>
              </div>
              <div className="tb-meta-item">
                <div className="num">100%</div>
                <div className="lbl">Traced to farm</div>
              </div>
              <div className="tb-meta-item">
                <div className="num">12</div>
                <div className="lbl">Species/acre · avg</div>
              </div>
            </div>
          </div>

          <div className="tb-hero-visual">
            <div className="map-bg">
              <FieldMap accent="var(--tb-green)" label="HERO · KARKAR ISLAND" height={540} />
            </div>
            <div className="qr-badge">
              <QRMotif size={88} />
            </div>
            <div className="floating-bar">
              <BarPackage bar={featuredBar} width={210} height={340} />
            </div>
            <div className="floating-bar2">
              <BarPackage bar={secondBar} width={170} height={280} />
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section className="tb-section">
          <div className="tb-section-head">
            <div className="tb-eyebrow">Three things, owned by no one else</div>
            <h2>Specificity is the whole story.</h2>
          </div>
          <div className="tb-pillars">
            <div className="tb-pillar">
              <div className="num">PILLAR 01 / GEOGRAPHIC PAIRING</div>
              <h3>Within 50 km. Always.</h3>
              <p>
                Every flavour addition comes from within 50 km of the cacao farm — a geographical
                truth, not a trend pairing. The rule is the spine.
              </p>
            </div>
            <div className="tb-pillar">
              <div className="num">PILLAR 02 / REGENERATIVE</div>
              <h3>Healing, not just harvested.</h3>
              <p>
                We partner exclusively with farms practising agroforestry and active biodiversity
                restoration. Measured in species per acre, not yields per hectare.
              </p>
            </div>
            <div className="tb-pillar">
              <div className="num">PILLAR 03 / TRACEABILITY</div>
              <h3>Scan. Meet. Travel.</h3>
              <p>
                Every bar carries a QR linking to a short film of the farmer — by name, by harvest
                season, by landscape. The QR is a brand asset, not a sticker.
              </p>
            </div>
          </div>
        </section>

        {/* BARS GRID */}
        <section className="tb-section">
          <div className="tb-section-head">
            <div className="tb-eyebrow">The launch range</div>
            <h2>Four bars. Four places.</h2>
          </div>
          <div className="tb-bars-grid">
            {BARS.map(b => (
              <Link href={`/bars/${b.slug}`} className="tb-bar-card" key={b.id}>
                <div className="accent-band" style={{ background: b.accent }} />
                <div>
                  <h3>{b.name}</h3>
                  <div className="region" style={{ color: b.accent }}>{b.region}</div>
                </div>
                <div className="pairing">with {b.pairing.toLowerCase()}</div>
                <div className="pkg-mini">
                  <BarPackage bar={b} width={150} height={250} />
                </div>
                <div className="foot">
                  <div className="pct">{b.cacao}%</div>
                  <div className="price">£6.50</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* MANIFESTO */}
        <section className="tb-section">
          <div className="tb-manifesto">
            <blockquote>
              We didn&apos;t set out to make chocolate. We set out to make a map you could eat.
            </blockquote>
            <div className="tb-manifesto-body">
              <p>
                For too long, chocolate erased the farmer. It stripped the origin to a flag icon on
                a wrapper. It called itself &ldquo;ethically sourced&rdquo; and expected us to stop
                asking questions.
              </p>
              <p>
                Terra Bar was born from a refusal to stop asking. We source single-origin cacao from
                farms actively healing the land — agroforestry systems, no monocultures, biodiversity
                measured in species per acre.
              </p>
              <p>
                And then we do something no one else does: we pair each cacao with an ingredient
                foraged from within 50 km of that same farm. Wild mountain pepper from the same
                highlands. Sesame grown in the same river delta. Salt raked from the same coast.
              </p>
              <div className="tb-sig">— A well-travelled friend, with great taste.</div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  )
}

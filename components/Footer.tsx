import QRMotif from './QRMotif'

export default function Footer() {
  return (
    <footer className="tb-footer">
      <div className="tb-footer-inner">
        <div>
          <div className="colofon">Eat somewhere new.</div>
          <div style={{ marginTop: 24, opacity: 0.75, fontSize: 14, maxWidth: 320, lineHeight: 1.6 }}>
            Single-origin chocolate paired with ingredients foraged within 50 km of the cacao farm.
          </div>
          <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 14 }}>
            <QRMotif size={56} color="var(--tb-gold-soft)" fill="var(--tb-green-deep)" />
            <div
              style={{
                fontFamily: 'var(--tb-mono)',
                fontSize: 10,
                letterSpacing: '0.14em',
                color: 'var(--tb-gold-soft)',
              }}
            >
              SCAN ANY BAR.<br />MEET THE FARMER.
            </div>
          </div>
        </div>

        <div>
          <h5>Shop</h5>
          <ul>
            <li><a href="#">All bars</a></li>
            <li><a href="#">Discovery box</a></li>
            <li><a href="#">Subscriptions</a></li>
            <li><a href="#">Corporate gifting</a></li>
          </ul>
        </div>

        <div>
          <h5>Field notes</h5>
          <ul>
            <li><a href="#">The farms</a></li>
            <li><a href="#">Harvest journal</a></li>
            <li><a href="#">Press kit</a></li>
            <li><a href="#">Wholesale</a></li>
          </ul>
        </div>

        <div>
          <h5>Newsletter</h5>
          <div style={{ fontSize: 13, opacity: 0.8, marginBottom: 12, lineHeight: 1.5 }}>
            One short letter when a new harvest lands.
          </div>
          <form style={{ display: 'flex', borderBottom: '1px solid var(--tb-gold-soft)', paddingBottom: 8 }}>
            <input
              type="email"
              name="email"
              placeholder="email"
              style={{
                flex: 1,
                background: 'transparent',
                border: 0,
                color: 'var(--tb-cream)',
                fontFamily: 'var(--tb-body)',
                fontSize: 13,
                padding: '4px 0',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                background: 'transparent',
                border: 0,
                color: 'var(--tb-gold-soft)',
                cursor: 'pointer',
                fontFamily: 'var(--tb-mono)',
                fontSize: 11,
                letterSpacing: '0.14em',
              }}
            >
              SUBSCRIBE →
            </button>
          </form>
        </div>
      </div>

      <div className="tb-footer-base">
        <span>© 2026 TERRA BAR LTD</span>
        <span>LONDON · SINGAPORE</span>
        <span>v1.0</span>
      </div>
    </footer>
  )
}

import Footer from '@/components/Footer'

const PROCESS_STEPS = [
  ['01', 'Find the farm.', 'We start with a single cacao farm — agroforestry, biodiversity, soil health that can be measured.'],
  ['02', 'Walk the 50 km.', 'We forage within a 50 km radius for one ingredient that belongs to the same place. No exceptions.'],
  ['03', 'Film the harvest.', 'A short film: the farmer, the season, the landscape. Real light. Real hands. Real names.'],
  ['04', 'Make a small batch.', 'Bean-to-bar in small lots. Numbered. Dated. Wrapped in uncoated recycled board, never plastic.'],
  ['05', 'Hand you a place.', 'You scan the QR. You meet the farmer. The bar stops being a bar. It becomes somewhere you went.'],
] as const

export default function StoryPage() {
  return (
    <div>
      <div className="tb-page">
        <section className="tb-section" style={{ borderBottom: 0 }}>
          <div className="tb-section-head">
            <div className="tb-eyebrow">The full manifesto</div>
            <h2>A refusal to stop asking.</h2>
          </div>

          <div className="tb-story">
            <div>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--tb-ink-soft)' }}>
                Every bar begins the same way: with a farmer standing in the shade of a cacao tree,
                in a valley that most people couldn&apos;t find on a globe. A farmer who knows the
                soil like a language. Who knows when the pods are ready not by a calendar, but by the
                weight of them in a hand.
              </p>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--tb-ink-soft)' }}>
                For too long, chocolate erased that farmer. It stripped the origin to a flag icon on
                a wrapper. It called itself &ldquo;ethically sourced&rdquo; and expected us to stop
                asking questions.
              </p>
              <blockquote
                style={{
                  fontFamily: 'var(--tb-display)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(22px, 2.4vw, 28px)',
                  lineHeight: 1.3,
                  color: 'var(--tb-green)',
                  borderLeft: '2px solid var(--tb-gold)',
                  paddingLeft: 20,
                  margin: '32px 0',
                }}
              >
                Terra Bar isn&apos;t a luxury. It isn&apos;t a lecture. It&apos;s a well-travelled
                friend handing you something extraordinary and saying: try this, I&apos;ll tell you
                where it&apos;s from.
              </blockquote>
            </div>

            <div className="tb-process">
              <div
                style={{
                  fontFamily: 'var(--tb-mono)',
                  fontSize: 11,
                  letterSpacing: '0.14em',
                  color: 'var(--tb-gold)',
                  marginBottom: 8,
                  textTransform: 'uppercase',
                }}
              >
                How we make a bar
              </div>
              {PROCESS_STEPS.map(([n, t, b]) => (
                <div className="tb-process-step" key={n}>
                  <div className="step-num">{n}</div>
                  <div>
                    <h4>{t}</h4>
                    <p>{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/bars/highlands-dark', label: 'Bars', matchPrefix: '/bars' },
  { href: '/farms', label: 'Farms' },
  { href: '/story', label: 'Story' },
  { href: '/shop', label: 'Shop' },
]

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  function isActive(item: (typeof NAV_ITEMS)[number]) {
    return 'matchPrefix' in item
      ? pathname.startsWith(item.matchPrefix!)
      : pathname === item.href
  }

  return (
    <nav className="tb-nav">
      <div className="tb-nav-inner">
        <Link href="/" className="tb-wordmark" onClick={() => setMenuOpen(false)}>
          <span className="dot" />
          TERRA BAR
        </Link>

        {/* Desktop links */}
        <div className="tb-nav-links">
          {NAV_ITEMS.map(item => (
            <Link key={item.href} href={item.href} className={isActive(item) ? 'active' : ''}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="tb-nav-right">
          <div className="tb-nav-cart">
            <span>EN / £</span>
            <span style={{ color: 'var(--tb-green)' }}>BAG · 0</span>
          </div>

          {/* Hamburger button — visible on mobile only */}
          <button
            className={`tb-nav-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="tb-nav-mobile">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item) ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

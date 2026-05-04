'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/bars/highlands-dark', label: 'Bars', matchPrefix: '/bars' },
  { href: '/farms', label: 'Farms' },
  { href: '/story', label: 'Story' },
  { href: '/shop', label: 'Shop' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="tb-nav">
      <div className="tb-nav-inner">
        <Link href="/" className="tb-wordmark">
          <span className="dot" />
          TERRA BAR
        </Link>
        <div className="tb-nav-links">
          {NAV_ITEMS.map(item => {
            const isActive =
              'matchPrefix' in item
                ? pathname.startsWith(item.matchPrefix!)
                : pathname === item.href
            return (
              <Link key={item.href} href={item.href} className={isActive ? 'active' : ''}>
                {item.label}
              </Link>
            )
          })}
        </div>
        <div className="tb-nav-cart">
          <span>EN / £</span>
          <span style={{ color: 'var(--tb-green)' }}>BAG · 0</span>
        </div>
      </div>
    </nav>
  )
}

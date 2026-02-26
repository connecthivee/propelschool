import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BRAND } from '../lib/constants'
import { publicUrl } from '../lib/images'
import { trackCTAClick } from '../lib/analytics'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Why iprople', href: '#why-iprople' },
    { label: 'Experience', href: '#experience' },
    { label: 'Location', href: '#location' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Book Demo', href: '#book-demo' },
  ]

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'scrolled bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Left: main logo (propel SCHOOL wordmark) */}
          <a href="#" className="flex items-center shrink-0">
            <img src={publicUrl('pic/ipropel_logo.png')} alt={BRAND.name} className="h-16 sm:h-20 md:h-24 w-auto object-contain" />
          </a>

          {/* Right: nav + CTA on larger screens */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-navy/85 hover:text-primary font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href="#"
              onClick={() => trackCTAClick('header_schedule_demo')}
              className="rounded-2xl bg-accent text-white px-5 py-2.5 font-semibold hover:bg-accent/90 transition-all shadow-md"
            >
              Register
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-xl text-navy hover:bg-navy/5"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-navy/10"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-2 text-navy/80 hover:text-primary font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#"
                onClick={() => { trackCTAClick('header_schedule_demo'); setMenuOpen(false) }}
                className="rounded-2xl bg-accent text-white px-5 py-2.5 font-semibold text-center"
              >
                Register
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}

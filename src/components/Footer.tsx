import { BRAND, ADDRESS, WHATSAPP_LINK } from '../lib/constants'
import { publicUrl } from '../lib/images'

const footerLinks = {
  About: [{ label: 'Why iprople', href: '#why-iprople' }, { label: 'Experience', href: '#experience' }],
  Programs: [{ label: 'Curriculum', href: '#why-iprople' }, { label: 'Book Demo', href: '#book-demo' }],
  Contact: [{ label: 'WhatsApp', href: WHATSAPP_LINK }, { label: 'Lead Form', href: '#' }],
  Location: [{ label: ADDRESS.area, href: '#location' }, { label: ADDRESS.full, href: '#location' }],
}

export function Footer() {
  return (
    <footer className="bg-navy text-white pb-6 sm:pb-8 px-3 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto pt-12 sm:pt-16 w-full min-w-0">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 mb-10 sm:mb-12">
          <div className="md:max-w-xs w-full min-w-0">
            <a href="#" className="flex items-center gap-2 sm:gap-3 mb-4 w-fit flex-wrap">
              <img src={publicUrl('pic/ipropel_logo.png')} alt="" className="h-10 sm:h-12 w-auto object-contain shrink-0" />
              <span className="font-heading font-bold text-xl sm:text-2xl text-white">{BRAND.name}</span>
            </a>
            <p className="text-white/80 text-sm">{BRAND.tagline}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 flex-1 min-w-0">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-heading font-semibold text-white mb-4">{title}</h4>
                <ul className="space-y-2">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-white/70 hover:text-accent transition-colors text-sm"
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/20">
          <p className="text-white/60 text-sm">
            Copyright © 2026 {BRAND.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/70 hover:text-accent transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

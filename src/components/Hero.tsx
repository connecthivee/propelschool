import { motion } from 'framer-motion'
import { BRAND } from '../lib/constants'
import { publicUrl } from '../lib/images'
import { trackCTAClick } from '../lib/analytics'
import { LeadForm } from './LeadForm'

const heroFeatures = [
  { label: 'Activity-Based Learning', icon: 'lightbulb' },
  { label: 'Safe & Caring', icon: 'shield' },
  { label: 'Real Progress', icon: 'chart' },
  { label: 'Parent Partnership', icon: 'heart' },
]

function FeatureIcon({ icon }: { icon: string }) {
  const className = 'w-8 h-8 text-white'
  if (icon === 'lightbulb') {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74C19 5.14 15.86 2 12 2z" />
      </svg>
    )
  }
  if (icon === 'shield') {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
      </svg>
    )
  }
  if (icon === 'chart') {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
      </svg>
    )
  }
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-20 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated background from pic folder (faded, behind content) */}
      <div
        className="absolute inset-0 bg-pic-float opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${publicUrl('pic/kidcare.png')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        aria-hidden
      />
      {/* Main white card – no fade on scroll */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div
          className="relative rounded-[2rem] lg:rounded-[2.5rem] bg-white shadow-xl overflow-hidden"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        >
          {/* Top: left = headline, subheading, teach1 image; right = lead form */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 sm:p-10 lg:p-12">
            <div>
              {/* Headline: part navy, part accent yellow */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight"
              >
                <span className="text-navy">Play. Learn.</span>
                <br />
                <span className="text-accent">Propel thy life.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 text-navy/80 text-base sm:text-lg max-w-lg"
              >
                A joyful learning space in Borivali West where curiosity grows and confidence shines.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 w-full flex justify-center"
              >
                <dotlottie-wc
                  src="https://lottie.host/87e84aba-d279-498f-9ee8-911d5fd17ce6/FLThkAvwwu.lottie"
                  style={{ width: 420, height: 420 }}
                  autoplay
                  loop
                />
              </motion.div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <motion.div
                id="lead-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full max-w-sm scroll-mt-24"
              >
                <LeadForm />
              </motion.div>
            </div>
          </div>

          {/* 2x2 feature circles – dark blue circle, light blue ring, white icon, label */}
          <div className="px-8 sm:px-10 lg:px-12 pb-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {heroFeatures.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-navy border-4 border-primary/40">
                    <FeatureIcon icon={item.icon} />
                  </div>
                  <p className="mt-2 text-navy font-semibold text-sm sm:text-base">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom strip: Social Media (left) + CTA button (right) */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-8 sm:px-10 lg:px-12 py-6 bg-white border-t border-navy/10">
            <div className="flex items-center gap-3">
              <span className="text-navy font-semibold text-sm">Social Media</span>
              <div className="flex gap-2">
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-navy/10 border border-navy/20 flex items-center justify-center text-navy hover:bg-primary hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-xl bg-navy/10 border border-navy/20 flex items-center justify-center text-navy hover:bg-primary hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
            <a
              href="#lead-form"
              onClick={() => trackCTAClick('hero_register')}
              className="rounded-2xl bg-accent text-white px-6 py-3 font-bold shadow-md hover:bg-accent/90 transition-all"
            >
              Register
            </a>
          </div>
        </div>

        {/* Decorative bottom strip: accent yellow segment + navy segment */}
        <div className="flex mt-0 rounded-b-[2rem] lg:rounded-b-[2.5rem] overflow-hidden shadow-xl">
          <div className="h-2 flex-1 bg-accent" />
          <div className="h-2 flex-1 bg-navy" />
        </div>
      </div>

    </section>
  )
}

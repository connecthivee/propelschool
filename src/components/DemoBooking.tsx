import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { trackCTAClick } from '../lib/analytics'
import { publicUrl } from '../lib/images'

// Replace with your Calendly URL
const CALENDLY_EMBED_URL = 'https://calendly.com/your-iprople-demo/30min?hide_gdpr_banner=1'

export function DemoBooking() {
  const [open, setOpen] = useState(false)

  function openModal() {
    trackCTAClick('book_demo_modal')
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }

  return (
    <>
      <section id="book-demo" className="relative py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20 overflow-hidden">
        {/* Subtle letters.png background – low opacity so it doesn’t distract */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.07]"
          style={{ backgroundImage: `url(${publicUrl('pic/letters.png')})` }}
          aria-hidden
        />
        <div className="relative z-10 max-w-2xl mx-auto shape-cloud-card bg-white border border-navy/5 p-8 sm:p-12 text-center book-demo-shadow">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
            Book a Free Demo
          </h2>
          <p className="text-navy/80 mb-8">
            Pick a slot that works for you. We’ll confirm by email and WhatsApp.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={openModal}
            className="rounded-full bg-accent text-white px-8 py-4 font-bold shadow-lg hover:bg-accent/90 transition-colors"
          >
            Book a Free Demo
          </motion.button>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-navy/10">
                <h3 className="font-heading font-bold text-navy">Schedule your visit</h3>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={closeModal}
                  className="p-2 rounded-lg hover:bg-navy/5 text-navy"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 min-h-[500px]">
                <iframe
                  title="Book a demo"
                  src={CALENDLY_EMBED_URL}
                  className="w-full h-full min-h-[500px] border-0"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

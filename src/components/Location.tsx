import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { ADDRESS } from '../lib/constants'
import { publicUrl } from '../lib/images'
import { LottieLazy } from './LottieLazy'

export function Location() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="location" className="relative py-16 sm:py-20 px-3 sm:px-6 lg:px-8 scroll-mt-20 overflow-hidden">
      {/* Subtle abroad.png background */}
      <div
        className="absolute inset-0 bg-cover bg-right bg-no-repeat opacity-[0.08]"
        style={{ backgroundImage: `url(${publicUrl('pic/abroad.png')})` }}
        aria-hidden
      />
      <div className="relative z-10 max-w-6xl mx-auto rounded-2xl sm:rounded-3xl bg-white shadow-xl border border-navy/5 p-4 sm:p-6 lg:p-10 w-full min-w-0" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-heading font-bold text-3xl sm:text-4xl text-navy text-center mb-4"
        >
          Find Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-navy/80 text-center max-w-2xl mx-auto mb-10"
        >
          {ADDRESS.full}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-lg border border-navy/10"
        >
          {/* Map pin Lottie overlay */}
          <div className="absolute top-4 right-4 z-10 w-14 h-14 pointer-events-none">
            <LottieLazy src={publicUrl('animations/map-pin.json')} className="w-full h-full" />
          </div>
          <iframe
            title="iprople location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS.full)}&output=embed`}
            className="w-full min-h-[280px] h-[280px] sm:h-[400px] lg:h-[450px] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}

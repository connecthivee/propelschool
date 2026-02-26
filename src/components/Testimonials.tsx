import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const testimonials = [
  { quote: 'My child looks forward to every day. The mix of play and structure is just right.', author: 'Parent, Borivali' },
  { quote: 'We saw real progress in communication and confidence within months.', author: 'Parent, I.C Colony' },
  { quote: 'Safe, caring, and the team keeps us updated. Highly recommend.', author: 'Parent, Mumbai' },
]

export function Testimonials() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="testimonials" className="py-16 sm:py-20 px-3 sm:px-6 lg:px-8 scroll-mt-20 overflow-hidden">
      <div className="max-w-5xl mx-auto shape-cloud-testimonials testimonials-shadow bg-white border border-navy/5 p-4 sm:p-8 lg:p-12 w-full min-w-0" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-heading font-bold text-3xl sm:text-4xl text-navy text-center mb-4"
        >
          What Parents Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05 }}
          className="text-navy/80 text-center max-w-2xl mx-auto mb-12"
        >
          No photos — just real words from our community.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="relative pt-0"
            >
              <div className="relative rounded-2xl bg-[#eef1f5] p-6 pb-8 border border-navy/10 shadow-sm overflow-visible">
                <p className="text-navy/90 italic mb-4">"{t.quote}"</p>
                <p className="text-navy/70 text-sm font-medium">— {t.author}</p>
                {/* Speech bubble tail – downward triangle at bottom center */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 -bottom-2.5 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#eef1f5]"
                  style={{ filter: 'drop-shadow(0 1px 0 rgba(30, 42, 56, 0.1))' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

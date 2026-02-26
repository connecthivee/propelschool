import { useInView } from 'react-intersection-observer'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

function Counter({ from = 0, to, suffix = '', duration = 2 }: { from?: number; to: number; suffix?: string; duration?: number }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  const count = useMotionValue(from)
  const rounded = useTransform(count, (v) => Math.round(v))
  const display = useTransform(rounded, (v) => `${v}${suffix}`)

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, to, { duration })
    return controls.stop
  }, [inView, to, duration, count])

  return (
    <motion.span ref={ref} className="font-heading font-bold text-navy">
      {display}
    </motion.span>
  )
}

const items = [
  { value: 500, suffix: '+', label: 'Growing Young Minds' },
  { value: 12, suffix: '', label: 'Structured Curriculum' },
  { value: 98, suffix: '%', label: 'Parent Engagement' },
]

export function Impact() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-5xl mx-auto rounded-3xl bg-white shadow-xl border border-navy/5 p-8 sm:p-12" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-heading font-bold text-3xl sm:text-4xl text-navy text-center mb-12"
        >
          Our Impact
        </motion.h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl mb-2">
                <Counter to={item.value} suffix={item.suffix} />
              </div>
              <p className="text-navy/80 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

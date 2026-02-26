import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Activity-Based Learning',
    description: 'Hands-on experiences that spark curiosity and build real skills.',
    icon: 'lightbulb',
  },
  {
    title: 'Safe & Caring Environment',
    description: 'A nurturing space where every child feels seen and supported.',
    icon: 'shield',
  },
  {
    title: 'Real Progress Tracking',
    description: 'Clear milestones and regular updates so you see growth together.',
    icon: 'chart',
  },
]

function CircleIcon({ icon }: { icon: string }) {
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
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
    </svg>
  )
}

export function WhyIprople() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  const cardSpacing = ['mt-0', 'mt-8', 'mt-16'] as const

  return (
    <section id="why-iprople" className="relative py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20 bg-gradient-to-b from-amber-50/70 via-slate-50/50 to-white">
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-heading font-bold text-3xl sm:text-4xl text-navy text-center mb-4"
        >
          Why iprople
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05 }}
          className="text-navy/80 text-center max-w-2xl mx-auto mb-14"
        >
          We’re built for curious minds and caring parents.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              className={`rounded-3xl bg-white p-8 shadow-xl border border-navy/5 hover:shadow-2xl hover:border-primary/30 transition-all ${cardSpacing[i]}`}
            >
              <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-navy border-4 border-primary/40 mb-6">
                <CircleIcon icon={card.icon} />
              </div>
              <h3 className="font-heading font-bold text-xl text-navy mb-2">{card.title}</h3>
              <p className="text-navy/80">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

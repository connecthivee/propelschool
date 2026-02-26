import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { LottieLazy } from './LottieLazy'
import { AnimatedImage } from './AnimatedImage'
import { IMAGES, publicUrl } from '../lib/images'

const panels = [
  { title: 'Interactive Classrooms', subtitle: 'Spaces designed for discovery', lottie: publicUrl('animations/classroom.json'), image: IMAGES.classroomActivity },
  { title: 'Play-Based Learning', subtitle: 'Learn by doing', lottie: publicUrl('animations/play.json'), image: IMAGES.kidsPlaying },
  { title: 'Skill Development', subtitle: 'Foundations for life', lottie: publicUrl('animations/skills.json'), image: IMAGES.kidsClassroom },
  { title: 'Parent Communication', subtitle: 'You’re always in the loop', lottie: publicUrl('animations/communication.json'), image: IMAGES.schoolBuilding },
]

export function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-heading font-bold text-3xl sm:text-4xl text-navy text-center mb-4"
        >
          The iprople Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05 }}
          className="text-navy/80 text-center max-w-2xl mx-auto mb-12"
        >
          See what makes us different.
        </motion.p>

        {/* Desktop: horizontal scroll (scrollbar hidden) */}
        <div className="hidden lg:block overflow-x-auto pb-6 -mx-4 px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex gap-8 min-w-max"
          >
            {panels.map((panel, i) => (
              <motion.div
                key={panel.title}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.08 }}
                className="w-[280px] flex-shrink-0 rounded-3xl bg-white p-6 shadow-xl border border-navy/5 hover:shadow-2xl hover:border-primary/20 transition-all"
              >
                <div className="relative aspect-[4/3] w-full max-w-[200px] mx-auto mb-4 rounded-2xl overflow-hidden bg-navy/5 border border-navy/10">
                  <AnimatedImage src={panel.image} alt={panel.title} className="absolute inset-0 w-full h-full" animate="fade" visible={inView} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-90">
                    <div className="w-16 h-16">
                      <LottieLazy src={panel.lottie} className="w-full h-full" />
                    </div>
                  </div>
                </div>
                <h3 className="font-heading font-bold text-lg text-navy">{panel.title}</h3>
                <p className="text-navy/70 text-sm mt-1">{panel.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile: stack */}
        <div className="lg:hidden space-y-6">
          {panels.map((panel, i) => (
            <motion.div
              key={panel.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="rounded-3xl bg-white p-6 shadow-xl border border-navy/5"
            >
              <div className="relative aspect-[4/3] w-full max-w-[180px] mx-auto mb-4 rounded-2xl overflow-hidden bg-navy/5 border border-navy/10">
                <AnimatedImage src={panel.image} alt={panel.title} className="absolute inset-0 w-full h-full" animate="fade" visible={inView} />
                <div className="absolute inset-0 flex items-center justify-center opacity-90">
                  <div className="w-14 h-14">
                    <LottieLazy src={panel.lottie} className="w-full h-full" />
                  </div>
                </div>
              </div>
              <h3 className="font-heading font-bold text-lg text-navy">{panel.title}</h3>
              <p className="text-navy/70 text-sm mt-1">{panel.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

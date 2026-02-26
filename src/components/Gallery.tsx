import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { IMAGES } from '../lib/images'
import { AnimatedImage } from './AnimatedImage'

const galleryItems = [
  { src: IMAGES.picKids, alt: 'Kids at iprople', title: 'Our Kids' },
  { src: IMAGES.picKidcare, alt: 'Kid care', title: 'Care & Learn' },
  { src: IMAGES.picLetters, alt: 'Learning letters', title: 'Letters & Fun' },
  { src: IMAGES.picAnimation, alt: 'Animation', title: 'Playful Learning' },
  { src: IMAGES.kidsPlaying, alt: 'Children playing at iprople', title: 'Play & Learn' },
  { src: IMAGES.classroomActivity, alt: 'Our learning space at iprople', title: 'Our Space' },
]

export function Gallery() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-heading font-bold text-3xl sm:text-4xl text-navy text-center mb-4"
        >
          Kids & School
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05 }}
          className="text-navy/80 text-center max-w-2xl mx-auto mb-12"
        >
          A peek at our space and happy learners.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="rounded-3xl bg-white shadow-xl border border-navy/5 overflow-hidden"
            >
              <div className="aspect-[4/3] relative bg-navy/5 flex items-center justify-center">
                {item.title === 'Our Kids' ? (
                  <dotlottie-wc
                    src="https://lottie.host/87e84aba-d279-498f-9ee8-911d5fd17ce6/FLThkAvwwu.lottie"
                    style={{ width: 300, height: 300 }}
                    autoplay
                    loop
                  />
                ) : item.title === 'Care & Learn' ? (
                  <dotlottie-wc
                    src="https://lottie.host/17fc6b01-af38-4147-a541-7b250b2bb4a3/SZA8tWSOV2.lottie"
                    style={{ width: 300, height: 300 }}
                    autoplay
                    loop
                  />
                ) : (
                  <AnimatedImage
                    src={item.src}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full"
                    animate="scale"
                    visible={inView}
                  />
                )}
              </div>
              <p className="p-4 font-heading font-semibold text-navy text-center">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

type AnimatedImageProps = {
  src: string
  alt: string
  className?: string
  /** 'float' | 'fade' | 'scale' | 'none' */
  animate?: 'float' | 'fade' | 'scale' | 'none'
  /** Use when parent controls visibility (e.g. in view) */
  visible?: boolean
  loading?: 'lazy' | 'eager'
}

export function AnimatedImage({
  src,
  alt,
  className = '',
  animate = 'fade',
  visible = true,
  loading = 'lazy',
}: AnimatedImageProps) {
  const imgEl = (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      className="w-full h-full object-contain"
    />
  )

  if (animate === 'none') return imgEl

  const float = {
    initial: { y: 0 },
    animate: visible
      ? { y: [0, -8, 0], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }
      : {},
  }
  const fade = {
    initial: { opacity: 0, y: 20 },
    animate: visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.5 },
  }
  const scale = {
    initial: { opacity: 0, scale: 0.95 },
    animate: visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 },
    transition: { duration: 0.4 },
  }

  const motionProps =
    animate === 'float' ? float : animate === 'scale' ? scale : fade

  return (
    <motion.div {...motionProps} className={className || 'inline-block'}>
      {imgEl}
    </motion.div>
  )
}

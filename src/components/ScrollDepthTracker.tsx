import { useEffect, useRef } from 'react'
import { useScroll } from 'framer-motion'
import { trackScrollDepth } from '../lib/analytics'

const DEPTHS = [25, 50, 75, 100]

export function ScrollDepthTracker() {
  const { scrollYProgress } = useScroll()
  const sentRef = useRef<Set<number>>(new Set())

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      const pct = Math.round(v * 100)
      for (const d of DEPTHS) {
        if (pct >= d && !sentRef.current.has(d)) {
          sentRef.current.add(d)
          trackScrollDepth(d)
        }
      }
    })
  }, [scrollYProgress])

  return null
}

import { lazy, Suspense, useEffect, useState } from 'react'

const LottiePlayer = lazy(() =>
  import('lottie-react').then((mod) => ({ default: mod.default }))
)

const fallbackLottieData = {
  v: '5.7.4',
  fr: 30,
  ip: 0,
  op: 60,
  w: 400,
  h: 400,
  nm: 'placeholder',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Shape',
      sr: 1,
      ks: { o: { a: 0, k: 80 }, r: { a: 0, k: 0 }, p: { a: 0, k: [200, 200, 0] }, a: { a: 0, k: [0, 0, 0] }, s: { a: 0, k: [100, 100, 100] } },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            { ty: 'el', d: 1, s: { a: 0, k: [80, 80] }, p: { a: 0, k: [0, 0] }, nm: 'Circle' },
            { ty: 'fl', c: { a: 0, k: [0.31, 0.55, 1, 1] }, o: { a: 0, k: 60 }, nm: 'Fill' },
            { ty: 'tr', p: { a: 0, k: [0, 0] }, o: { a: 0, k: 100 }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, a: { a: 0, k: [0, 0] }, nm: 'Transform' },
          ],
        },
      ],
    },
  ],
  markers: [],
}

interface LottieLazyProps {
  src?: string | null
  animationData?: object | null
  className?: string
  loop?: boolean
}

export function LottieLazy({ src, animationData, className = '', loop = true }: LottieLazyProps) {
  const [data, setData] = useState<object | null>(animationData ?? null)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (animationData) {
      setData(animationData)
      return
    }
    if (!src) {
      setData(fallbackLottieData)
      return
    }
    let cancelled = false
    fetch(src)
      .then((r) => r.json())
      .then((json) => {
        if (!cancelled) setData(json)
      })
      .catch(() => {
        if (!cancelled) {
          setError(true)
          setData(fallbackLottieData)
        }
      })
    return () => { cancelled = true }
  }, [src, animationData])

  if (error || !data) {
    return (
      <div className={`lottie-container flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl ${className}`} />
    )
  }

  return (
    <Suspense
      fallback={
        <div className={`lottie-container animate-pulse bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl ${className}`} />
      }
    >
      <div className={className}>
        <LottiePlayer animationData={data} loop={loop} className="w-full h-full" />
      </div>
    </Suspense>
  )
}

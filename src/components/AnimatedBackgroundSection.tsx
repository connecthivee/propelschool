type AnimatedBackgroundSectionProps = {
  backgroundImage: string
  /** 'drift' | 'float' */
  animate?: 'drift' | 'float'
  className?: string
  children: React.ReactNode
}

export function AnimatedBackgroundSection({
  backgroundImage,
  animate = 'drift',
  className = '',
  children,
}: AnimatedBackgroundSectionProps) {
  const animateClass = animate === 'float' ? 'bg-pic-float' : 'bg-pic-animate'
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div
        className={`absolute inset-0 ${animateClass}`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-white/70" aria-hidden />
      <div className="relative z-10">{children}</div>
    </section>
  )
}

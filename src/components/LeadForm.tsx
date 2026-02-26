import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { publicUrl } from '../lib/images'

const phoneRegex = /^[6-9]\d{9}$/

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  city: z.string().min(2, 'City is required'),
  phone: z.string().regex(phoneRegex, 'Valid 10-digit Indian mobile number'),
  childAge: z.string().optional(),
  preferredDate: z.string().optional(),
})

type FormData = z.infer<typeof schema>

const childAges = ['Under 2', '2–3 years', '3–4 years', '4–5 years', '5+ years']

type Phase = 'form' | 'success' | 'loading'

export function LeadForm() {
  const [phase, setPhase] = useState<Phase>('form')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { childAge: '', preferredDate: '' },
  })

  // After success: wait 2s then show loading
  useEffect(() => {
    if (phase !== 'success') return
    const t = setTimeout(() => setPhase('loading'), 2000)
    return () => clearTimeout(t)
  }, [phase])

  // After loading: wait 2s then show fresh form
  useEffect(() => {
    if (phase !== 'loading') return
    const t = setTimeout(() => {
      reset()
      setPhase('form')
    }, 2000)
    return () => clearTimeout(t)
  }, [phase, reset])

  function onSubmit(_data: FormData) {
    // Demo only: no data sent anywhere
    setPhase('success')
  }

  if (phase === 'success') {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="rounded-2xl bg-white/90 backdrop-blur p-4 sm:p-6 lg:p-8 shadow-xl border border-primary/20 text-center w-full max-w-full box-border"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center"
          >
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          <p className="text-navy font-heading font-bold text-lg">Thank you!</p>
          <p className="text-navy/80 mt-1">We’ll reach out soon to schedule your free demo.</p>
        </motion.div>
      </AnimatePresence>
    )
  }

  if (phase === 'loading') {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="rounded-2xl bg-white/90 backdrop-blur p-6 sm:p-8 lg:p-12 shadow-xl border border-primary/20 flex flex-col items-center justify-center min-h-[180px] sm:min-h-[200px] w-full max-w-full box-border"
        >
          <motion.img
            src={publicUrl('pic/ipropel_logo.png')}
            alt=""
            className="h-20 w-auto object-contain"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <p className="text-navy/70 text-sm mt-4 font-medium">Loading…</p>
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <motion.form
      key="form"
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl bg-white/90 backdrop-blur p-4 sm:p-6 lg:p-8 shadow-xl border border-primary/20 space-y-3 sm:space-y-4 w-full max-w-full box-border"
      initial={{ opacity: 1 }}
    >
      <h3 className="font-heading font-bold text-navy text-lg">Schedule a Free Demo</h3>
      <div>
        <label className="block text-sm font-medium text-navy/80 mb-1">School / Parent Name *</label>
        <input
          {...register('name')}
          className="w-full rounded-xl border border-navy/20 px-4 py-2.5 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          placeholder="Your name or school"
        />
        {errors.name && <p className="text-coral text-sm mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-navy/80 mb-1">City *</label>
        <input
          {...register('city')}
          className="w-full rounded-xl border border-navy/20 px-4 py-2.5 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          placeholder="e.g. Mumbai"
        />
        {errors.city && <p className="text-coral text-sm mt-1">{errors.city.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-navy/80 mb-1">Phone Number *</label>
        <input
          {...register('phone')}
          type="tel"
          className="w-full rounded-xl border border-navy/20 px-4 py-2.5 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          placeholder="10-digit mobile"
        />
        {errors.phone && <p className="text-coral text-sm mt-1">{errors.phone.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-navy/80 mb-1">Child’s Age (optional)</label>
        <select
          {...register('childAge')}
          className="w-full rounded-xl border border-navy/20 px-4 py-2.5 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white"
        >
          <option value="">Select age</option>
          {childAges.map((age) => (
            <option key={age} value={age}>{age}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-navy/80 mb-1">Preferred Visit Date (optional)</label>
        <input
          {...register('preferredDate')}
          type="date"
          className="w-full rounded-xl border border-navy/20 px-4 py-2.5 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-2xl bg-accent text-white py-3 font-bold hover:bg-accent/90 transition disabled:opacity-70 shadow-md"
      >
        {isSubmitting ? 'Sending…' : 'Schedule a Free Demo'}
      </button>
    </motion.form>
  )
}

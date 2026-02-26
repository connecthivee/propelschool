import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { trackLeadSubmit } from '../lib/analytics'

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

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { childAge: '', preferredDate: '' },
  })

  async function onSubmit(data: FormData) {
    try {
      trackLeadSubmit(data)
      // Replace with your backend/CRM endpoint
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).catch(() => {})
      // Optional: trigger WhatsApp, email automation on backend
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-2xl bg-white/90 backdrop-blur p-6 sm:p-8 shadow-xl border border-primary/20 text-center"
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

  return (
    <motion.form
      key="form"
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl bg-white/90 backdrop-blur p-6 sm:p-8 shadow-xl border border-primary/20 space-y-4"
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

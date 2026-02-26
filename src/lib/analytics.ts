declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

export function pushDataLayer(event: string, payload?: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...payload })
}

export function trackLeadSubmit(data: Record<string, unknown>) {
  pushDataLayer('lead_form_submit', data)
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', { currency: 'INR', value: 0 })
  }
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Lead')
  }
}

export function trackDemoBooking(data: Record<string, unknown>) {
  pushDataLayer('demo_booking', data)
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'schedule_demo', data)
  }
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Schedule')
  }
}

export function trackWhatsAppClick() {
  pushDataLayer('whatsapp_click', { cta: 'floating_button' })
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'whatsapp_click', { method: 'floating' })
  }
}

export function trackCTAClick(ctaName: string, section?: string) {
  pushDataLayer('cta_click', { cta_name: ctaName, section })
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'click', { event_category: 'CTA', event_label: ctaName })
  }
}

export function trackScrollDepth(percent: number) {
  pushDataLayer('scroll_depth', { percent })
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'scroll', { percent_visible: percent })
  }
}

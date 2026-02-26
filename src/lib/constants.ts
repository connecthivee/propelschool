export const BRAND = {
  name: 'iprople',
  tagline: 'Play. Learn. Propel thy life.',
  websiteUrl: 'www.iprople.com', // replace with real domain
  instagram: 'https://instagram.com/iprople', // replace with real handle
  whatsappNumber: '919876543210', // replace with real number (country code, no +)
  whatsappMessage: 'Hi I want to know more about iprople',
} as const

export const ADDRESS = {
  line1: 'Villa Stella, Unit 101',
  line2: 'I.C Colony',
  area: 'Borivali West',
  city: 'Mumbai',
  state: 'Maharashtra',
  pin: '400103',
  country: 'India',
  full: 'Borivali West, Villa Stella, Unit 101, I.C Colony, Mumbai, Maharashtra 400103',
  googleMapsQuery: 'Villa Stella, Unit 101, I.C Colony, Borivali West, Mumbai, Maharashtra 400103',
  geo: { lat: 19.2307, lng: 72.8567 }, // approximate Borivali West
} as const

export const WHATSAPP_LINK = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(BRAND.whatsappMessage)}`

import { BRAND, ADDRESS } from '../lib/constants'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: BRAND.name,
  description: `${BRAND.tagline} A joyful learning space in Borivali West where curiosity grows and confidence shines.`,
  url: typeof window !== 'undefined' ? window.location.origin : '',
  telephone: '+91-9876543210', // replace with real
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${ADDRESS.line1}, ${ADDRESS.line2}`,
    addressLocality: ADDRESS.area,
    addressRegion: ADDRESS.state,
    postalCode: ADDRESS.pin,
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: ADDRESS.geo.lat,
    longitude: ADDRESS.geo.lng,
  },
  areaServed: { '@type': 'City', name: 'Mumbai' },
  sameAs: [BRAND.instagram],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Where is iprople located?', acceptedAnswer: { '@type': 'Answer', text: `iprople is at ${ADDRESS.full}.` } },
    { '@type': 'Question', name: 'Do you offer a free demo?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. You can book a free demo visit for your child.' } },
  ],
}

export function SeoSchema() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}

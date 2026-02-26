import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { WhyIprople } from './components/WhyIprople'
import { AnimatedBackgroundSection } from './components/AnimatedBackgroundSection'
import { BACKGROUNDS } from './lib/images'
import { Experience } from './components/Experience'
import { Gallery } from './components/Gallery'
import { Location } from './components/Location'
import { Testimonials } from './components/Testimonials'
import { DemoBooking } from './components/DemoBooking'
import { Footer } from './components/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { SeoSchema } from './components/SeoSchema'
import { ScrollDepthTracker } from './components/ScrollDepthTracker'

function App() {
  return (
    <>
      <SeoSchema />
      <ScrollDepthTracker />
      <Header />
      <main>
        <Hero />
        <AnimatedBackgroundSection backgroundImage={BACKGROUNDS.picLetters} animate="drift" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">Come Learn With Us</h2>
            <p className="text-navy/80 text-lg">Every day is a new adventure in learning.</p>
          </div>
        </AnimatedBackgroundSection>
        <WhyIprople />
        <Experience />
        <Gallery />
        <Location />
        <Testimonials />
        <DemoBooking />
        <Footer />
      </main>
      <WhatsAppFloat />
    </>
  )
}

export default App

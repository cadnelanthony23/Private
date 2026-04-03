import { useFadeUp } from './hooks/useFadeUp'
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import Stats       from './components/Stats'
import HowItWorks  from './components/HowItWorks'
import Profiles    from './components/Profiles'
import Events      from './components/Events'
import Pricing     from './components/Pricing'
import Safety      from './components/Safety'
import Apartments  from './components/Apartments'
import CtaFinal    from './components/CtaFinal'
import Footer      from './components/Footer'

export default function App() {
  useFadeUp()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Profiles />
        <Events />
        <Pricing />
        <Safety />
        <Apartments />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}

import React from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import HowItWorks from '../components/HowItWorks'
import Profiles from '../components/Profiles'
import Events from '../components/Events'
import Pricing from '../components/Pricing'
import Safety from '../components/Safety'
import Apartments from '../components/Apartments'
import CtaFinal from '../components/CtaFinal'



function Home() {
    return (
        <div>
            <Hero />
            <Stats />
            <HowItWorks />
            <Profiles />
            <Events />
            <Pricing />
            <Safety />
            <Apartments />
            <CtaFinal />
        </div>
    )
}

export default Home

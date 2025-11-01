import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhatIsLynkr from './components/WhatIsLynkr'
import HowItWorks from './components/HowItWorks'
import LynkrCore from './components/LynkrCore'
import ConnectionPowered from './components/ConnectionPowered'
import TwoWays from './components/TwoWays'
import JoinMovement from './components/JoinMovement'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero id=""/>
      <WhatIsLynkr id="About" />
      <HowItWorks id="howitworks"/>
      <LynkrCore />
      <ConnectionPowered id="networking"/>
      <TwoWays id="dating" />
      <JoinMovement id="join" />
      <Footer />
    </div>
  )
}

export default App

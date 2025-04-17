import React from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HeroSection from './components/Sections/HeroSection';
import WhatIsPFAS from './components/Sections/WhatIsPFAS';
import AreYouAtRisk from './components/Sections/AreYouAtRisk';
import ClientWins from './components/Sections/ClientWins';
import TrustedByThousands from './components/Sections/TrustedByThousands';
import NextSteps from './components/Sections/NextSteps';
import StickyCallButton from './components/Layout/StickyCallButton';

function App() {
  return (
    <div className="App font-sans bg-white">
      <Header />
      <main className="pb-16 md:pb-0">
        <HeroSection />
        <WhatIsPFAS />
        <AreYouAtRisk />
        <ClientWins />
        <TrustedByThousands />
        <NextSteps />
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  );
}

export default App;

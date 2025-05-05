import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import HeroSection from '../components/Sections/HeroSection';
import WhatIsPFAS from '../components/Sections/WhatIsPFAS';
import AreYouAtRisk from '../components/Sections/AreYouAtRisk';
import ClientWins from '../components/Sections/ClientWins';
import TrustedByThousands from '../components/Sections/TrustedByThousands';
import FAQ from '../components/Sections/FAQ';
import FinalCTA from '../components/Sections/FinalCTA';
import StickyCallButton from '../components/Layout/StickyCallButton';

// Simple homepage with all sections
export default function Home() {
  // Ensure page starts at the top
  useEffect(() => {
    // Force scroll to top on initial load
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      
      // Handle hash links for scrolling to form
      const handleHashChange = () => {
        if (window.location.hash === '#check-eligibility') {
          setTimeout(() => {
            // On mobile, scroll to mobile form
            if (window.innerWidth < 768) {
              const mobileForm = document.getElementById('check-eligibility-mobile');
              if (mobileForm) {
                mobileForm.scrollIntoView({ behavior: 'smooth' });
              }
            } else {
              // On desktop, scroll to desktop form
              const desktopForm = document.getElementById('check-eligibility');
              if (desktopForm) {
                desktopForm.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }, 100);
        }
      };
      
      // Listen for hash changes
      window.addEventListener('hashchange', handleHashChange);
      
      // Check hash on initial load
      if (window.location.hash) {
        handleHashChange();
      }
      
      return () => {
        window.removeEventListener('hashchange', handleHashChange);
      };
    }
  }, []);
  
  return (
    <div className="font-sans bg-white">
      <Head>
        <title>PFAS Claim Center | Were You Exposed to Toxic PFAS Chemicals?</title>
        <meta name="description" content="If you've been exposed to PFAS chemicals in your water supply, you may be eligible for significant compensation. Check your eligibility now." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        <HeroSection />
        <WhatIsPFAS />
        <AreYouAtRisk />
        <ClientWins />
        <TrustedByThousands />
        <FAQ />
        <FinalCTA />
      </main>
      
      <Footer />
      <StickyCallButton />
    </div>
  );
} 
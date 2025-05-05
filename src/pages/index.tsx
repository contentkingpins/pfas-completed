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
  // Ensure page starts at the top and form is visible
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Force scroll to top on initial load - multiple times to ensure it works
      window.scrollTo(0, 0);
      
      // Add a stronger force to stay at the top initially
      const forceScrollTop = () => {
        window.scrollTo(0, 0);
        
        // Double-check after a small delay
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 100);
        
        // Triple-check after another delay
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 500);
      };
      
      // Apply these checks when page loads
      window.addEventListener('load', forceScrollTop);
      forceScrollTop();
      
      // Focus on the first form input after page load
      setTimeout(() => {
        const firstInput = document.querySelector('#check-eligibility input:first-of-type');
        if (firstInput) {
          // Focus on first input to draw attention to the form
          (firstInput as HTMLElement).focus();
        }
      }, 800);
      
      // Handle anchor links for form
      const handleHashChange = () => {
        if (window.location.hash === '#check-eligibility') {
          setTimeout(() => {
            const formElement = document.getElementById('check-eligibility');
            if (formElement) {
              formElement.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      };
      
      // Stop any automatic scrolling to sections other than the form
      const preventScrollToOtherSections = (event: Event) => {
        // Only allow scrolling to the form section initially
        if (window.location.hash && window.location.hash !== '#check-eligibility') {
          // Prevent the default scroll
          event.preventDefault();
          // Redirect to the form instead
          window.location.hash = '#check-eligibility';
        }
      };
      
      // Listen for hash changes
      window.addEventListener('hashchange', handleHashChange);
      window.addEventListener('hashchange', preventScrollToOtherSections, true);
      
      // Check hash on initial load
      if (window.location.hash) {
        if (window.location.hash === '#check-eligibility') {
          handleHashChange();
        } else {
          // If hash points to another section, force to form instead
          window.location.hash = '#check-eligibility';
        }
      }
      
      return () => {
        window.removeEventListener('load', forceScrollTop);
        window.removeEventListener('hashchange', handleHashChange);
        window.removeEventListener('hashchange', preventScrollToOtherSections, true);
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
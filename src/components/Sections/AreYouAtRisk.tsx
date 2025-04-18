import React, { useState, useEffect } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';

const AreYouAtRisk: React.FC = () => {
  const [scrolledPastCTA, setScrolledPastCTA] = useState(false);

  // Scroll detection effect
  useEffect(() => {
    const handleScroll = () => {
      // Get the position of the Call Now button in the Card
      const callButtonElement = document.querySelector('#area-check-cta');
      
      if (callButtonElement) {
        const callButtonPosition = callButtonElement.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        // If we've scrolled past the CTA button (it's above the viewport)
        if (callButtonPosition < 0) {
          setScrolledPastCTA(true);
        } else {
          setScrolledPastCTA(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Call once on component mount to set initial state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="who-is-at-risk" className="py-16 bg-lightGray">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-trustBlue mb-4">
            Are You Living in a PFAS Hot Zone?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            PFAS contamination has been found in over 2,800 locations across the United States. Our team can help determine if you're in an affected area.
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 gap-8 mb-12 items-center">
          <div>
            <Card elevated>
              <h3 className="text-xl font-bold text-trustBlue mb-4">Find Out If You're Affected</h3>
              <p className="text-gray-600 mb-4">
                According to the Environmental Working Group (EWG), there are over 2,800 suspected industrial discharges of PFAS across the United States. Our legal team has access to the complete database of affected areas.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-warningRed flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold">PFAS contamination may not be visible in tap water</span>
                </div>
                <p className="text-sm text-gray-600 pl-11">
                  Testing is the only way to know for certain if your water is contaminated
                </p>
              </div>
              <div className="flex flex-col space-y-3">
                <Button 
                  id="area-check-cta"
                  href="tel:+18339986147" 
                  variant="primary" 
                  className="w-full text-center"
                >
                  Call Now For a Free Area Check
                </Button>
              </div>
              
              {/* EWG Map Link - only visible after scrolling past CTA or after hover timeout */}
              {scrolledPastCTA && (
                <p className="text-sm text-gray-600 mt-4 animate-fadeIn">
                  According to the Environmental Working Group (EWG), there are over 2,800 suspected industrial discharges of PFAS across the U.S. 
                  <a href="https://www.ewg.org/interactive-maps/2021_suspected_industrial_discharges_of_pfas/map/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 underline hover:text-blue-800 ml-1">
                    View the official EWG interactive map here.
                  </a>
                </p>
              )}
            </Card>
          </div>
        </div>
        
        {/* EWG Interactive Map Integration */}
        <div className="bg-white rounded-lg p-8 text-center shadow-md mb-10">
          <h3 className="text-xl font-bold text-trustBlue mb-4">PFAS Contamination Preview Map</h3>
          <div className="bg-lightGray rounded-md mb-4 overflow-hidden">
            <iframe 
              src="https://www.ewg.org/interactive-maps/2021_suspected_industrial_discharges_of_pfas/map/" 
              title="EWG PFAS Contamination Map" 
              className="w-full h-96 border-0"
              loading="lazy"
            ></iframe>
          </div>
          <p className="text-gray-600">
            Data provided by the Environmental Working Group. If you discover you're in an affected area, 
            call our hotline for a free consultation to discuss your legal options.
          </p>
          <p className="text-sm text-gray-600 mt-4">
            According to the Environmental Working Group (EWG), there are over 2,800 suspected industrial discharges of PFAS across the U.S. 
            <a href="https://www.ewg.org/interactive-maps/2021_suspected_industrial_discharges_of_pfas/map/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-trustBlue underline hover:text-trustBlue-dark ml-1">
               View the official EWG interactive map for more details.
            </a>
          </p>
          <Button href="tel:+18339986147" variant="primary" className="mt-4">
            Call Now For Your Free Area Check
          </Button>
        </div>
        
        {/* Expert Team Section */}
        <div className="bg-white rounded-lg p-8 text-center shadow-md">
          <h3 className="text-xl font-bold text-trustBlue mb-4">Our Team of PFAS Experts Can Help</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-lightGray p-4 rounded-lg">
              <div className="text-safetyGreen text-4xl font-bold mb-2">1</div>
              <h4 className="font-semibold mb-2">Free Area Check</h4>
              <p className="text-sm text-gray-600">
                We'll check if your location is in a known PFAS contamination zone
              </p>
            </div>
            <div className="bg-lightGray p-4 rounded-lg">
              <div className="text-safetyGreen text-4xl font-bold mb-2">2</div>
              <h4 className="font-semibold mb-2">Case Evaluation</h4>
              <p className="text-sm text-gray-600">
                Our experts will assess your situation and determine if you qualify
              </p>
            </div>
            <div className="bg-lightGray p-4 rounded-lg">
              <div className="text-safetyGreen text-4xl font-bold mb-2">3</div>
              <h4 className="font-semibold mb-2">Claim Filing</h4>
              <p className="text-sm text-gray-600">
                We handle everything to get you the compensation you deserve
              </p>
            </div>
          </div>
          
          <Button href="tel:+18339986147" variant="primary" size="large" className="mt-4">
            Call Now: 833-998-6147
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AreYouAtRisk; 
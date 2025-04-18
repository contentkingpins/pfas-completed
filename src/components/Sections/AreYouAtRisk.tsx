import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';

const AreYouAtRisk: React.FC = () => {
  const [showMap, setShowMap] = useState(false);

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
        
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/images/family.jpg" 
              alt="Family concerned about PFAS contamination" 
              className="w-full h-auto"
            />
          </div>
          
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
                  href="tel:+18339986147" 
                  variant="primary" 
                  className="w-full text-center"
                >
                  Call Now For a Free Area Check
                </Button>
                <button 
                  onClick={() => setShowMap(!showMap)} 
                  className="text-trustBlue underline text-sm hover:text-trustBlue-dark"
                >
                  {showMap ? "Hide preview map" : "Show preview map"}
                </button>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Collapsible Map Preview */}
        {showMap && (
          <div className="bg-white rounded-lg p-8 text-center shadow-md mb-10">
            <h3 className="text-xl font-bold text-trustBlue mb-4">PFAS Contamination Preview Map</h3>
            <div className="relative">
              <img 
                src="/images/pfas-map-preview.jpg" 
                alt="PFAS contamination map preview" 
                className="w-full max-h-96 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-trustBlue bg-opacity-70 flex flex-col items-center justify-center p-6 rounded-lg">
                <p className="text-white text-lg mb-4">
                  This is just a preview. Our team has access to the complete database of affected areas.
                </p>
                <p className="text-white text-md mb-6">
                  Source: Environmental Working Group Study identifying over 2,800 contamination sites
                </p>
                <Button 
                  href="tel:+18339986147" 
                  variant="warning" 
                  size="large"
                >
                  Call Now For Your Free Area Check
                </Button>
              </div>
            </div>
          </div>
        )}
        
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
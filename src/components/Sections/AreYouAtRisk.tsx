import React from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';

const AreYouAtRisk: React.FC = () => {
  return (
    <section id="who-is-at-risk" className="py-16 bg-lightGray">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-trustBlue mb-4">
            Are You Living in a PFAS Hot Zone?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Check if your area is affected by PFAS contamination using the Environmental Working Group's official map.
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
              <h3 className="text-xl font-bold text-trustBlue mb-4">Check Your Location</h3>
              <p className="text-gray-600 mb-4">
                The Environmental Working Group has compiled the most comprehensive map of PFAS contamination in the United States.
              </p>
              <p className="text-sm text-gray-600 mb-4">
                According to the Environmental Working Group (EWG), there are over 2,800 suspected industrial discharges of PFAS across the U.S.
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://www.ewg.org/interactive-maps/2021_suspected_industrial_discharges_of_pfas/map/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-trustBlue hover:bg-trustBlue-dark text-white py-3 px-6 rounded transition duration-300 inline-block"
                >
                  View the Official EWG Map
                </a>
              </div>
            </Card>
          </div>
        </div>
        
        {/* EWG Interactive Map Integration */}
        <div className="bg-white rounded-lg p-8 text-center shadow-md">
          <h3 className="text-xl font-bold text-trustBlue mb-4">Interactive Risk Map</h3>
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
          <Button href="tel:+18005551234" variant="primary" className="mt-4">
            Call Now for Immediate Assistance
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AreYouAtRisk; 
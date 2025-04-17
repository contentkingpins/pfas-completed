import React from 'react';
import Button from '../UI/Button';
import EligibilityForm from '../Forms/EligibilityForm';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="py-12 md:py-20 bg-gradient-to-br from-lightGray to-white relative"
      style={{
        backgroundImage: "url('/images/water-unsafe-drink.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-trustBlue bg-opacity-70"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Were You Exposed to Toxic PFAS Chemicals?
            </h1>
            <p className="text-xl text-gray-100 mb-6">
              Billions have already been awarded to victims. You could be next.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Button href="tel:+18005551234" variant="warning" size="large">
                Call Now
              </Button>
              <Button 
                href="#check-eligibility" 
                variant="secondary" 
                size="large"
              >
                Check Eligibility
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-200">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-safetyGreen mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Free Case Review</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-safetyGreen mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>No Fee Unless We Win</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-safetyGreen mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>$1B+ Recovered</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2" id="check-eligibility">
            <div className="bg-white rounded-xl shadow-xl p-6">
              <h2 className="text-2xl font-bold text-trustBlue mb-4">Check Your Eligibility</h2>
              <p className="text-gray-600 mb-6">
                Enter your information below to see if you qualify for a PFAS water contamination lawsuit.
              </p>
              <EligibilityForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 
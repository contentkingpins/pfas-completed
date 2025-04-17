import React from 'react';
import EligibilityForm from '../Forms/EligibilityForm'; // Import the form
import Button from '../UI/Button'; // Import the Button component

const HeroSection = () => {
  return (
    <section className="bg-light-gray py-16 px-4 md:py-24">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content & CTA */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-trust-blue mb-4 leading-tight">
            PFAS Contamination?
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            If you've been exposed to contaminated drinking water, you may be entitled to significant compensation. Find out now.
          </p>
          <Button 
            href="tel:+18005551234" 
            variant="primary" 
            size="large"
            className="mb-8 md:mb-0"
          >
            Call Now For Free Consultation
          </Button>
        </div>

        {/* Right Column: Eligibility Form */}
        <div>
          <EligibilityForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 
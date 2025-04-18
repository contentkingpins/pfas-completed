import React from 'react';
import Button from '../UI/Button';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 bg-trustBlue text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Act Now. Don't Wait — Your Health and Your Rights Matter.
        </h2>
        
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          PFAS lawsuits are time-sensitive. Legal deadlines may limit your ability to seek compensation if you wait too long.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button 
            href="tel:+18339986147" 
            variant="warning"
            size="large"
            className="min-w-[200px]"
          >
            Call Now: 833-998-6147
          </Button>
          
          <Button 
            href="#check-eligibility" 
            variant="secondary"
            size="large"
            className="min-w-[200px]"
          >
            Check Your Eligibility
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <svg className="w-12 h-12 text-safetyGreen mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h3 className="text-xl font-bold text-white mb-2">Free Consultation</h3>
            <p className="text-gray-300">
              Speak with our legal team at no cost to understand your options.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <svg className="w-12 h-12 text-safetyGreen mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-bold text-white mb-2">No Fee Unless We Win</h3>
            <p className="text-gray-300">
              You pay nothing upfront. We only get paid if we win your case.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <svg className="w-12 h-12 text-safetyGreen mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h3 className="text-xl font-bold text-white mb-2">Fast Action</h3>
            <p className="text-gray-300">
              We move quickly to protect your legal rights and seek maximum compensation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA; 
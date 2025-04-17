import React from 'react';
import Button from '../UI/Button';

const NextSteps = () => {
  return (
    <section className="py-16 px-4 bg-trust-blue text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Don't Wait – Contamination May Be Affecting Your Family
        </h2>
        <p className="text-lg text-safety-green-light mb-8 max-w-2xl mx-auto">
          The longer you wait, the harder it may be to secure the compensation you deserve. Contact our experienced team today for a free, no-obligation case evaluation.
        </p>
        <Button 
          href="tel:+18005551234" 
          variant="primary"
          size="large"
        >
          Call 1-800-555-1234 Now
        </Button>
      </div>
    </section>
  );
};

export default NextSteps; 
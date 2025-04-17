import React from 'react';

const StickyCallButton = () => {
  return (
    <a 
      href="tel:+18005551234" 
      className="md:hidden fixed bottom-0 left-0 right-0 bg-safety-green text-trust-blue font-bold py-3 px-4 text-center shadow-lg z-40 hover:bg-safety-green-light transition duration-300"
    >
      Call Now For Free Consultation: 1-800-555-1234
    </a>
  );
};

export default StickyCallButton; 
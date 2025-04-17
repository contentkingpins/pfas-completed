import React from 'react';
import Button from '../UI/Button';

const Header = () => {
  return (
    <header className="bg-trust-blue text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" aria-label="PFAS Claim Center Home">
          <img 
            src="/images/logo.svg" 
            alt="PFAS Claim Center Logo" 
            className="h-10 md:h-12"
          />
        </a>
        
        <Button 
          href="tel:+18005551234"
          variant="primary"
          size="small"
          className="whitespace-nowrap text-sm md:text-base"
        >
          Call Now: 1-800-555-1234
        </Button>
      </div>
    </header>
  );
};

export default Header; 
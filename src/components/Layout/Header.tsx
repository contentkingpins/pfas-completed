import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../UI/Button';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img 
            src="/images/logo.png" 
            alt="PFAS Claim Center Logo" 
            className="h-10 w-auto mr-2"
          />
          <span className="text-2xl font-bold text-trustBlue">PFAS Claim Center</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#what-is-pfas" className="text-gray-700 hover:text-trustBlue">
            About PFAS
          </Link>
          <Link href="#who-is-at-risk" className="text-gray-700 hover:text-trustBlue">
            Check Eligibility
          </Link>
          <Link href="#case-results" className="text-gray-700 hover:text-trustBlue">
            Case Results
          </Link>
          <Link href="#faq" className="text-gray-700 hover:text-trustBlue">
            FAQ
          </Link>
          <Button href="tel:+18005551234" variant="primary" size="small">
            Call Now: 1-800-555-1234
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="container py-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="#what-is-pfas" 
              className="text-gray-700 hover:text-trustBlue py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About PFAS
            </Link>
            <Link 
              href="#who-is-at-risk" 
              className="text-gray-700 hover:text-trustBlue py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Check Eligibility
            </Link>
            <Link 
              href="#case-results" 
              className="text-gray-700 hover:text-trustBlue py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Case Results
            </Link>
            <Link 
              href="#faq" 
              className="text-gray-700 hover:text-trustBlue py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Button href="tel:+18005551234" variant="primary" className="w-full">
              Call Now: 1-800-555-1234
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 
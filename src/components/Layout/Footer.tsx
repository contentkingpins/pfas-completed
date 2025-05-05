import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Function to handle privacy policy click
  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Scroll to the form
    const formElement = document.getElementById('check-eligibility');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
    // Focus on the first input if desired
    setTimeout(() => {
      const firstInput = document.querySelector('#check-eligibility input:first-of-type');
      if (firstInput) {
        (firstInput as HTMLElement).focus();
      }
    }, 800);
  };
  
  return (
    <footer className="bg-trustBlue text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Contact */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-3">PFAS Claim Center</h3>
            <p className="mb-3 text-gray-300">
              We fight for those affected by PFAS contamination. Get the compensation you deserve.
            </p>
            <div className="flex flex-col space-y-2">
              <a href="tel:+18339986147" className="hover:text-safetyGreen">Call: 833-998-6147</a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#what-is-pfas" className="text-gray-300 hover:text-safetyGreen">About PFAS</Link>
              </li>
              <li>
                <Link href="#check-eligibility" className="text-gray-300 hover:text-safetyGreen">Check Eligibility</Link>
              </li>
              <li>
                <Link href="#case-results" className="text-gray-300 hover:text-safetyGreen">Case Results</Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-300 hover:text-safetyGreen">FAQ</Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold text-white mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#check-eligibility" onClick={handlePrivacyClick} className="text-gray-300 hover:text-safetyGreen">Privacy Policy</a>
              </li>
              <li>
                <a href="#check-eligibility" onClick={handlePrivacyClick} className="text-gray-300 hover:text-safetyGreen">Terms of Service</a>
              </li>
              <li>
                <a href="#check-eligibility" onClick={handlePrivacyClick} className="text-gray-300 hover:text-safetyGreen">Legal Disclaimer</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright & Disclaimer */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-gray-400">
          <p className="mb-4">
            ATTORNEY ADVERTISING. Past results do not guarantee future outcomes. The information on this 
            website is for general information purposes only. Nothing on this site should be taken as legal 
            advice for any individual case or situation. This information is not intended to create, and 
            receipt or viewing does not constitute, an attorney-client relationship.
          </p>
          <p>&copy; {currentYear} PFAS Claim Center. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
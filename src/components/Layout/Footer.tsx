import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
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
              <a href="tel:+18005551234" className="hover:text-safetyGreen">Call: 1-800-555-1234</a>
              <a href="mailto:info@pfasclaimcenter.com" className="hover:text-safetyGreen">Email: info@pfasclaimcenter.com</a>
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
                <Link href="#who-is-at-risk" className="text-gray-300 hover:text-safetyGreen">Check Eligibility</Link>
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
                <Link href="/privacy" className="text-gray-300 hover:text-safetyGreen">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-safetyGreen">Terms of Service</Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-300 hover:text-safetyGreen">Legal Disclaimer</Link>
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
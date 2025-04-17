import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light-gray text-gray-600 p-6 mt-12 border-t border-gray-200">
      <div className="container mx-auto text-center text-sm">
        <p className="mb-2">
          <a href="tel:+18005551234" className="hover:text-trust-blue">Call Us: 1-800-555-1234</a>
        </p>
        <p className="mb-4">
          {/* TODO: Add actual links */}
          <a href="#privacy" className="hover:text-trust-blue mx-2">Privacy Policy</a> |
          <a href="#terms" className="hover:text-trust-blue mx-2">Terms of Service</a> |
          <a href="#disclaimer" className="hover:text-trust-blue mx-2">Legal Disclaimer</a>
        </p>
        <p className="text-xs mb-2">
          Attorney Advertising. This website is designed for general information only. The information presented at this site should not be construed to be formal legal advice nor the formation of a lawyer/client relationship.
        </p>
        <p className="text-xs">
          &copy; {currentYear} PFAS Claim Center. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 
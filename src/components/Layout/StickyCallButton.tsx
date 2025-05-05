import React, { useState } from 'react';
import Button from '../UI/Button';

const StickyCallButton: React.FC = () => {
  // Smooth scroll to map section instead of using hash links
  const scrollToMapSection = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const mapSection = document.getElementById('who-is-at-risk');
    if (mapSection) {
      // Find the map container instead of the section itself to scroll to right position
      const mapContainer = mapSection.querySelector('.bg-white.rounded-lg');
      if (mapContainer) {
        mapContainer.scrollIntoView({ behavior: 'smooth' });
      } else {
        mapSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <Button 
        href="tel:+18339986147" 
        variant="warning"
        size="small"
        className="shadow-lg"
      >
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Now
        </div>
      </Button>

      {/* Map link always visible instead of tooltip */}
      <div className="absolute bottom-16 right-0 bg-white p-4 rounded-lg shadow-lg w-64 text-sm border border-gray-200">
        <p className="text-gray-600 mb-2">
          Want to check if your area is affected?
        </p>
        <button 
          className="text-trustBlue font-medium hover:underline bg-transparent border-none p-0 cursor-pointer text-left"
          onClick={scrollToMapSection}
        >
          View the PFAS contamination map
        </button>
      </div>
    </div>
  );
};

export default StickyCallButton; 
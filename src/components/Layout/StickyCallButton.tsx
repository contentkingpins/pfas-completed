import React, { useState, useEffect, useRef } from 'react';
import Button from '../UI/Button';

const StickyCallButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    hoverTimerRef.current = setTimeout(() => {
      setShowTooltip(true);
    }, 6000); // 6 seconds
  };

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    setShowTooltip(false);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="fixed bottom-4 right-4 z-50 md:hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={buttonRef}
    >
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

      {/* Tooltip that appears after 6 seconds of hovering */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 bg-white p-4 rounded-lg shadow-lg w-64 text-sm border border-gray-200">
          <p className="text-gray-600 mb-2">
            Want to check if your area is affected first?
          </p>
          <a 
            href="#who-is-at-risk" 
            className="text-trustBlue font-medium hover:underline"
            onClick={() => setShowTooltip(false)}
          >
            View the PFAS contamination map
          </a>
        </div>
      )}
    </div>
  );
};

export default StickyCallButton; 
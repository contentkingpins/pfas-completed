import React, { useState } from 'react';
import hotZoneZipCodes from '../../assets/data/hotzones.json';
import Button from '../UI/Button';

const AreYouAtRisk = () => {
  // Simplified state for manual zip check only
  const [manualZip, setManualZip] = useState('');
  const [checkedZip, setCheckedZip] = useState(null); 
  const [isChecking, setIsChecking] = useState(false);
  const [isInHotZone, setIsInHotZone] = useState(false);
  const [checkError, setCheckError] = useState(null);

  // Function to check if a zip code is in the hot zone list
  const checkHotZone = (zip) => {
    if (!zip) return;
    const found = hotZoneZipCodes.includes(zip.trim());
    setIsInHotZone(found);
    setCheckedZip(zip.trim());
    setCheckError(null);
    if (!found) {
      console.log(`Zip code ${zip} not found in hot zone list.`);
    }
  };

  // Handle manual zip code input change
  const handleZipInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setManualZip(value);
  };

  // Handle manual zip code check submission
  const handleManualCheck = (e) => {
    e.preventDefault();
    if (manualZip.length === 5) {
        setCheckError(null);
        setIsInHotZone(false);
        setCheckedZip(null);
        setIsChecking(true);
        // Simulate slight delay for check
        setTimeout(() => {
            checkHotZone(manualZip);
            setIsChecking(false);
        }, 300); 
    } else {
        setCheckError('Please enter a valid 5-digit zip code.');
    }
  };

  return (
    <section className="py-16 px-4 bg-light-gray">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-trust-blue mb-4">
          Are You Living in a PFAS Hot Zone?
        </h2>
        <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
          Enter your zip code below to check against our list of known PFAS contamination sites. Immediate action may be necessary if you are in an affected area.
        </p>

        {/* Hot Zone Warning Banner - Appears if isInHotZone is true */}
        {isInHotZone && checkedZip && (
          <div className="bg-warning-red text-white p-4 rounded-lg mb-8 max-w-3xl mx-auto shadow-lg animate-pulse">
            <p className="font-bold text-lg">⚠️ Warning: Zip Code {checkedZip} is in a known PFAS Contamination Zone.</p>
            <p className="mt-1">You may be eligible for significant compensation. Call immediately for a free, confidential case review.</p>
            <Button 
              href="tel:+18005551234" 
              variant="warning" 
              size="small"
              className="mt-3"
            >
              Call Now: 1-800-555-1234
            </Button>
          </div>
        )}
        
        {/* Display Message if checked and NOT in hot zone */}
        {!isInHotZone && checkedZip && !isChecking && (
             <div className="bg-safety-green text-trust-blue p-3 rounded-lg mb-8 max-w-3xl mx-auto shadow-md">
                <p className="font-semibold">Good news! Zip code {checkedZip} is not currently listed in our known high-risk PFAS zones based on available data.</p>
             </div>
        )}

        {/* Manual Zip Code Input */}
        <form onSubmit={handleManualCheck} className="mb-8 max-w-sm mx-auto">
          <label htmlFor="manualZipInput" className="sr-only">Enter Zip Code</label>
          <div className="flex gap-2">
            <input 
              id="manualZipInput"
              type="text" 
              inputMode="numeric"
              pattern="[0-9]{5}"
              placeholder="Enter 5-Digit Zip Code"
              value={manualZip}
              onChange={handleZipInputChange}
              className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safety-green disabled:opacity-50 disabled:bg-gray-100"
              maxLength="5"
              disabled={isChecking}
            />
            <Button 
              type="submit"
              variant="primary" 
              disabled={isChecking || manualZip.length !== 5}
            >
              Check
            </Button>
          </div>
           {isChecking && <p className="text-gray-600 italic mt-2">Checking zip code...</p>}
           {checkError && <p className="text-warning-red mt-2">{checkError}</p>}
        </form>

        {/* Remove map reference and replace with informational text */}
        <div className="text-center text-gray-500 mt-8">
            <p>Check your zip code to see if you are in a PFAS affected area.</p>
        </div>

      </div>
    </section>
  );
};

export default AreYouAtRisk; 
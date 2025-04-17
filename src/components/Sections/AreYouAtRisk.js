import React, { useState, useEffect } from 'react';
import InteractiveMap from '../Map/InteractiveMap';
import useGeolocation from '../../hooks/useGeolocation';
import { searchPlaceByPosition } from '../../services/awsLocationService';
import hotZoneZipCodes from '../../assets/data/hotzones.json'; // Load the hot zone zips
import Button from '../UI/Button'; // Import Button

const AreYouAtRisk = () => {
  const { 
    location: geoLocatedLocation, // Renamed to avoid conflict
    error: geoError,
    loading: geoLoading,
    permissionState,
    requestLocation 
  } = useGeolocation({ enableHighAccuracy: false, timeout: 10000 }); // Request location on load if permission granted

  const [manualZip, setManualZip] = useState('');
  const [checkedZip, setCheckedZip] = useState(null); // Zip code that was checked
  const [isChecking, setIsChecking] = useState(false); // Loading state for AWS/zip check
  const [isInHotZone, setIsInHotZone] = useState(false);
  const [checkError, setCheckError] = useState(null); // Errors from AWS call or zip check

  // Function to check if a zip code is in the hot zone list
  const checkHotZone = (zip) => {
    if (!zip) return;
    const found = hotZoneZipCodes.includes(zip.trim());
    setIsInHotZone(found);
    setCheckedZip(zip.trim()); // Store the zip that was checked
    setCheckError(null); // Clear previous errors
    if (!found) {
      console.log(`Zip code ${zip} not found in hot zone list.`);
      // Optionally set a message indicating not in zone
    }
  };

  // Effect to check zip code when geolocation is successful
  useEffect(() => {
    const reverseGeocodeAndCheck = async () => {
      if (geoLocatedLocation) {
        setIsChecking(true);
        setCheckError(null);
        console.log('Geolocation obtained:', geoLocatedLocation);
        const placeData = await searchPlaceByPosition(
          geoLocatedLocation.longitude,
          geoLocatedLocation.latitude
        );
        setIsChecking(false);
        if (placeData?.zipCode) {
          console.log('Zip code from reverse geocoding:', placeData.zipCode);
          checkHotZone(placeData.zipCode);
        } else {
          console.error('Could not determine zip code from your location.');
          setCheckError('Could not determine zip code from your location. Please enter manually.');
          setIsInHotZone(false); // Ensure hot zone status is reset
          setCheckedZip(null); // Ensure checked zip is reset
        }
      }
    };

    reverseGeocodeAndCheck();
  }, [geoLocatedLocation]); // Run when geoLocatedLocation changes

  // Handle manual zip code input change
  const handleZipInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Allow only digits
    setManualZip(value);
  };

  // Handle manual zip code check submission
  const handleManualCheck = (e) => {
    e.preventDefault();
    if (manualZip.length === 5) {
        setCheckError(null);
        setIsInHotZone(false); // Reset hot zone status before checking
        setCheckedZip(null);
        setIsChecking(true); // Show loading indicator
        // Simulate slight delay for visual feedback if needed, then check
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
          Allow location access or enter your zip code to check our map of known PFAS contamination sites. Immediate action may be necessary if you are in an affected area.
        </p>

        {/* Geolocation Status/Request */}
        <div className="mb-6">
          {geoLoading && <p className="text-gray-600 italic">Getting your location...</p>}
          {geoError && <p className="text-warning-red">Location Error: {geoError}</p>}
          {permissionState === 'prompt' && (
            <Button 
              onClick={requestLocation} 
              variant="secondary" // Use blue variant
            >
              Allow Location Access
            </Button>
          )}
          {permissionState === 'denied' && !geoError && (
             <p className="text-gray-600">Location access denied. Please enable in browser settings or enter zip code manually.</p>
          )}
        </div>

        {/* Hot Zone Warning Banner - Appears if isInHotZone is true */}
        {isInHotZone && checkedZip && (
          <div className="bg-warning-red text-white p-4 rounded-lg mb-8 max-w-3xl mx-auto shadow-lg animate-pulse">
            <p className="font-bold text-lg">⚠️ Warning: Zip Code {checkedZip} is in a known PFAS Contamination Zone.</p>
            <p className="mt-1">You may be eligible for significant compensation. Call immediately for a free, confidential case review.</p>
            <Button 
              href="tel:+18005551234" 
              variant="warning" // Use the new warning variant
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
              type="text" // Use text for better control with pattern
              inputMode="numeric" // Hint for mobile keyboards
              pattern="[0-9]{5}" // HTML5 validation pattern
              placeholder="Enter 5-Digit Zip Code"
              value={manualZip}
              onChange={handleZipInputChange}
              className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safety-green disabled:opacity-50 disabled:bg-gray-100"
              maxLength="5"
              disabled={isChecking || geoLoading}
            />
            <Button 
              type="submit"
              variant="primary" 
              disabled={isChecking || geoLoading || manualZip.length !== 5}
            >
              Check
            </Button>
          </div>
           {/* Loading/Error for Manual Check */} 
           {isChecking && <p className="text-gray-600 italic mt-2">Checking zip code...</p>}
           {checkError && <p className="text-warning-red mt-2">{checkError}</p>}
        </form>

        {/* Interactive Map */}
        <div className="h-80 md:h-96 bg-gray-300 rounded-lg overflow-hidden shadow-md relative"> 
           {/* Show loading overlay on map */}
           {(isChecking || geoLoading) && (
               <div className="absolute inset-0 bg-gray-300 bg-opacity-75 flex justify-center items-center z-10">
                   <p className="text-gray-700 font-semibold">{geoLoading ? 'Getting Location' : 'Checking Zip Code'}...</p>
               </div>
           )}
          <InteractiveMap 
            userLocation={geoLocatedLocation} // Pass the location state to the map
          />
        </div>

      </div>
    </section>
  );
};

export default AreYouAtRisk; 
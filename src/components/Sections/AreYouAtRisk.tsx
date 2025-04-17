import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';

const AreYouAtRisk: React.FC = () => {
  const [zipCode, setZipCode] = useState<string>('');
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numeric input
    const value = e.target.value.replace(/\D/g, '');
    // Limit to 5 digits
    if (value.length <= 5) {
      setZipCode(value);
      setError(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (zipCode.length !== 5) {
      setError('Please enter a valid 5-digit zip code');
      return;
    }
    
    setIsChecking(true);
    setError(null);
    
    // Simulate API call
    setTimeout(() => {
      // Future implementation will check against actual data
      setIsChecking(false);
      // For now just show a message that the feature is coming soon
      setError('Location check feature coming soon. Please call our hotline for immediate assistance.');
    }, 1000);
  };
  
  return (
    <section id="who-is-at-risk" className="py-16 bg-lightGray">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-trustBlue mb-4">
            Are You Living in a PFAS Hot Zone?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enter your zip code below to check if your area is affected by PFAS contamination.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/images/family.jpg" 
              alt="Family concerned about PFAS contamination" 
              className="w-full h-auto"
            />
          </div>
          
          <div>
            <Card elevated>
              <h3 className="text-xl font-bold text-trustBlue mb-4">Check Your Location</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    placeholder="Enter your 5-digit ZIP code"
                    value={zipCode}
                    onChange={handleZipChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-safetyGreen focus:border-safetyGreen ${
                      error ? 'border-warningRed' : 'border-gray-300'
                    }`}
                    maxLength={5}
                    disabled={isChecking}
                  />
                  {error && (
                    <p className="mt-1 text-sm text-warningRed">{error}</p>
                  )}
                </div>
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full"
                  disabled={isChecking || zipCode.length !== 5}
                >
                  {isChecking ? 'Checking...' : 'Check Location'}
                </Button>
              </form>
            </Card>
          </div>
        </div>
        
        {/* Placeholder for future map implementation */}
        <div className="bg-white rounded-lg p-8 text-center shadow-md">
          <h3 className="text-xl font-bold text-trustBlue mb-4">Interactive Risk Map</h3>
          <div className="h-64 bg-lightGray rounded-md flex items-center justify-center mb-4">
            <p className="text-gray-500">
              {/* TODO: Implement map integration with AWS Location Service */}
              Interactive map coming soon. This feature will display known PFAS contamination sites.
            </p>
          </div>
          <p className="text-gray-600">
            Our comprehensive map of PFAS contamination zones is currently being updated with the latest data. 
            To find out immediately if you're in an affected area, call our hotline for a free consultation.
          </p>
          <Button href="tel:+18005551234" variant="primary" className="mt-4">
            Call Now for Immediate Assistance
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AreYouAtRisk; 
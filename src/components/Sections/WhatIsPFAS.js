import React from 'react';

const WhatIsPFAS = () => {
  // Function to handle image loading errors for placeholders
  const handleImageError = (e) => {
    e.target.style.display = 'none'; // Hide broken image icon
    // Optional: Show a text message if image fails
    const placeholderText = e.target.nextElementSibling;
    if (placeholderText) placeholderText.style.display = 'block';
  };
  
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-trust-blue mb-6">
            What Are PFAS "Forever Chemicals"?
          </h2>
          <p className="text-gray-700 mb-4">
            PFAS (Per- and Polyfluoroalkyl Substances) are a large group of man-made chemicals used in various industries since the 1940s. They are found in products like non-stick cookware, water-repellent clothing, firefighting foam, and food packaging.
          </p>
          <p className="text-gray-700 mb-4">
            These chemicals are known as "forever chemicals" because they don't break down easily in the environment or the human body. Exposure, often through contaminated drinking water, has been linked to serious health issues.
          </p>
          <p className="text-gray-700 font-semibold">
            If your water source is contaminated, your health could be at risk.
          </p>
        </div>

        {/* Right Column: Infographic */}
        <div className="flex justify-center items-center bg-light-gray rounded-lg p-4 min-h-[250px]">
          <img 
            src="/images/pfas-infographic.png" 
            alt="Infographic explaining PFAS sources and risks" 
            className="max-w-full h-auto object-contain rounded" 
            onError={handleImageError}
          />
          {/* Fallback text if image fails to load */}
          <p className="text-gray-500 text-center hidden">[Infographic Placeholder: Sources of PFAS & Health Risks]</p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsPFAS; 
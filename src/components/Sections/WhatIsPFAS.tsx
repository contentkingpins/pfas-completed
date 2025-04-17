import React from 'react';
import Card from '../UI/Card';

const WhatIsPFAS: React.FC = () => {
  return (
    <section id="what-is-pfas" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-trustBlue mb-4">
            What Are PFAS Chemicals & Why Are They Dangerous?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            PFAS (Per- and polyfluoroalkyl substances) are toxic "forever chemicals" that don't break down in your body or the environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <div className="flex flex-col h-full">
              <div className="bg-trustBlue bg-opacity-10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-trustBlue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-trustBlue mb-2">What Are PFAS?</h3>
              <p className="text-gray-600 flex-grow mb-4">
                PFAS are man-made chemicals used in many consumer and industrial products since the 1940s. They repel water, grease, and stains, making them common in non-stick cookware, water-resistant clothing, food packaging, and firefighting foam.
              </p>
              <p className="text-sm text-trustBlue font-medium">Found in thousands of products we use daily</p>
            </div>
          </Card>

          <Card>
            <div className="flex flex-col h-full">
              <div className="bg-warningRed bg-opacity-10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-warningRed" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-trustBlue mb-2">Health Risks</h3>
              <p className="text-gray-600 flex-grow mb-4">
                Exposure to PFAS has been linked to serious health problems including cancer (kidney, testicular), liver damage, decreased fertility, hormone disruption, increased cholesterol, weakened immune system, and developmental issues in children.
              </p>
              <p className="text-sm text-warningRed font-medium">Scientists refer to PFAS as "probable carcinogens"</p>
            </div>
          </Card>

          <Card>
            <div className="flex flex-col h-full">
              <div className="bg-safetyGreen bg-opacity-10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-safetyGreen" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-trustBlue mb-2">How Exposure Happens</h3>
              <p className="text-gray-600 flex-grow mb-4">
                Most people are exposed to PFAS through contaminated drinking water, using products containing PFAS, eating food packaged in PFAS-containing materials, or consuming food grown in contaminated soil or water.
              </p>
              <p className="text-sm text-safetyGreen font-medium">Testing can determine if your water is contaminated</p>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700">
            PFAS are called "forever chemicals" because they don't break down naturally and can remain in your body for years.
            If you've been exposed, you may be eligible for significant compensation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsPFAS; 
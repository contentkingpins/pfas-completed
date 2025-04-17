import React from 'react';
import Card from '../UI/Card';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  location: string;
  awarded?: string;
  imagePath: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "After discovering PFAS in our water supply, I was concerned for my family's health. The legal team helped us get compensation and peace of mind.",
    name: "Michael D.",
    location: "Ohio",
    awarded: "$375,000",
    imagePath: "/images/testimonial1.jpg"
  },
  {
    id: 2,
    quote: "I was diagnosed with kidney cancer after years of drinking contaminated water. This team fought tirelessly for me and won.",
    name: "Sarah L.",
    location: "Michigan",
    awarded: "$680,000",
    imagePath: "/images/testimonial2.jpg"
  },
  {
    id: 3,
    quote: "The process was straightforward and the attorneys were compassionate. They understood what our community was going through.",
    name: "David M.",
    location: "Pennsylvania",
    imagePath: "/images/testimonial1.jpg" // Reusing image as placeholder
  }
];

const TrustedByThousands: React.FC = () => {
  return (
    <section className="py-16 bg-lightGray">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-trustBlue mb-4">
            Trusted By Thousands of Families
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our clients trust us to fight for their rights against corporations that polluted their water.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col h-full">
              <div className="mb-4 flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-200">
                  <img 
                    src={testimonial.imagePath} 
                    alt={`${testimonial.name} from ${testimonial.location}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-trustBlue">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex-grow">
                <div className="text-safetyGreen mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.625 0c-1.563.117-2.954.45-4.172 1.32-1.172.826-1.446 1.504-1.446 3.282V7.5h5.587c1.28 0 2.406.855 2.406 2.008v8c0 1.38-1.113 2.492-2.493 2.492h-.905a3.121 3.121 0 01-3.12-3.094V10.5c0-2.578-2.118-4.695-4.695-4.695H0V0h6.625z" />
                    <path d="M16.625 0c-1.563.117-2.954.45-4.172 1.32-1.172.826-1.446 1.504-1.446 3.282V7.5h5.587c1.28 0 2.4.855 2.4 2.008v8c0 1.38-1.113 2.492-2.492 2.492h-.906a3.121 3.121 0 01-3.119-3.094V10.5c0-2.578-2.118-4.695-4.695-4.695H10V0h6.625z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
              </div>
              
              {testimonial.awarded && (
                <p className="text-safetyGreen font-medium mt-2 pt-2 border-t border-gray-200">Awarded: {testimonial.awarded}</p>
              )}
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-trustBlue mb-2">
              <span className="text-safetyGreen">✓</span> $0 Upfront
            </div>
            <p className="text-gray-600">No fees unless we win your case</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-trustBlue mb-2">
              <span className="text-safetyGreen">✓</span> 30+ Years
            </div>
            <p className="text-gray-600">Decades of combined legal experience</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-trustBlue mb-2">
              <span className="text-safetyGreen">✓</span> 24/7 Support
            </div>
            <p className="text-gray-600">We're here for you around the clock</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByThousands; 
import React from 'react';
import Card from '../UI/Card';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  location: string;
  awarded?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "After discovering PFAS in our water supply, I was concerned for my family's health. The legal team helped us get compensation and peace of mind.",
    name: "Michael D.",
    location: "Ohio",
    awarded: "$375,000"
  },
  {
    id: 2,
    quote: "I was diagnosed with kidney cancer after years of drinking contaminated water. This team fought tirelessly for me and won.",
    name: "Sarah L.",
    location: "Michigan",
    awarded: "$680,000"
  },
  {
    id: 3,
    quote: "The process was straightforward and the attorneys were compassionate. They understood what our community was going through.",
    name: "David M.",
    location: "Pennsylvania"
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
              <div className="mb-4">
                <p className="font-semibold text-trustBlue">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
              <div className="flex-grow">
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